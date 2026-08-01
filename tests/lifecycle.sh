#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APX="$ROOT/bin/apx"
TMP="$(mktemp -d "${TMPDIR:-/tmp}/apx-lifecycle.XXXXXX")"
trap 'pkill -P $$ 2>/dev/null || true; rm -rf "$TMP"' EXIT

# Isolate from runner XDG_* so unit/plist paths stay under the fake HOME.
# Otherwise SYSTEMD_USER_DIR follows XDG_CONFIG_HOME (e.g. /home/runner/.config)
# and assertions on $HOME/.config/systemd/... fail in CI.
unset XDG_CONFIG_HOME XDG_STATE_HOME XDG_DATA_HOME XDG_RUNTIME_DIR XDG_CACHE_HOME

HOME="$TMP/home"
export HOME
mkdir -p "$HOME/.config/apx" "$HOME/.local/state/apx" "$HOME/bin" "$HOME/.local/bin"

# LaunchAgent ProgramArguments always points at ~/.local/bin/apx. Without this
# symlink, a Darwin fallback to launchd hangs inside `launchctl kickstart`.
ln -sf "$APX" "$HOME/.local/bin/apx"

PYTHON3="$(command -v python3 || true)"
if [[ -z "$PYTHON3" ]]; then
  echo "ERROR: python3 is required for lifecycle tests" >&2
  exit 1
fi

# Pick a free port so CI runners don't collide on a fixed 18787.
PORT="${APX_TEST_PORT:-}"
if [[ -z "$PORT" ]]; then
  PORT="$("$PYTHON3" - <<'PY'
import socket
s = socket.socket()
s.bind(("127.0.0.1", 0))
print(s.getsockname()[1])
s.close()
PY
)"
fi

cat > "$HOME/bin/fake-gateway" <<'PYGW'
import os
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

try:
    port = int(os.environ.get("GATEWAY_PORT", sys.argv[1] if len(sys.argv) > 1 else 18787))
except (ValueError, IndexError):
    port = 18787


class H(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"ok")

    def log_message(self, *_):
        pass


ThreadingHTTPServer(("127.0.0.1", port), H).serve_forever()
PYGW

# Invoke via absolute python3 so bash -lc / shebang PATH differences cannot hide the interpreter.
GATEWAY_CMD="$PYTHON3 $HOME/bin/fake-gateway"

cat > "$HOME/.config/apx/config.env" <<EOF
BIND_HOST=127.0.0.1
GATEWAY_PORT=$PORT
GATEWAY_ENABLED=1
APX_CHAIN=""
HEADROOM_ENABLED=0
PXPIPE_ENABLED=0
SQUEEZR_ENABLED=0
GATEWAY_CMD="$GATEWAY_CMD"
GATEWAY_TARGET_API_URL="https://api.anthropic.com"
WORKDIR="$HOME"
HEALTH_INTERVAL_SECONDS=1
STARTUP_TIMEOUT_SECONDS=60
APX_SERVICE_BACKEND=nohup
APX_METRICS_DB=OFF
EOF

export APX_CONFIG="$HOME/.config/apx/config.env"

# Terminal color is interactive-only by default, forceable for terminals that
# need it, and always suppressed by the NO_COLOR convention.
plain_help="$(env -u NO_COLOR APX_COLOR=auto "$APX" help)"
[[ "$plain_help" != *$'\033['* ]]
forced_help="$(env -u NO_COLOR APX_COLOR=always "$APX" help)"
[[ "$forced_help" == *$'\033['* ]]
no_color_help="$(NO_COLOR=1 APX_COLOR=always "$APX" help)"
[[ "$no_color_help" != *$'\033['* ]]
export APX_STATE="$HOME/.local/state/apx"
export APX_RUN_DIR="$TMP/run"
# Force nohup via env override so Darwin CI cannot fall through to launchd
# (plist points at ~/.local/bin/apx, which is not installed in this test).
export APX_SERVICE_BACKEND=nohup
export PATH="$HOME/bin:$HOME/.local/bin:$PATH"

wait_livez() {
  local _
  # Integer sleeps only — macOS /bin/sleep historically rejected fractions.
  # macOS runners have been observed to take 30-60s for the gateway to
  # become healthy, so allow generous headroom here.
  for _ in $(seq 1 90); do
    if curl -fsS --max-time 1 "http://127.0.0.1:$PORT/livez" >/dev/null 2>&1; then
      return 0
    fi
    sleep 1
  done
  echo "ERROR: gateway did not become healthy on port $PORT" >&2
  echo "service backend: $("$APX" status 2>/dev/null | grep -i 'service backend' || true)" >&2
  if [[ -f "$APX_STATE/logs/supervisor.log" ]]; then
    echo "---- supervisor.log ----" >&2
    cat "$APX_STATE/logs/supervisor.log" >&2 || true
  fi
  if [[ -f "$APX_STATE/logs/gateway.log" ]]; then
    echo "---- gateway.log ----" >&2
    cat "$APX_STATE/logs/gateway.log" >&2 || true
  fi
  return 1
}

"$APX" start >/dev/null
wait_livez

# pxpipe model changes must persist to the managed config rather than relying
# on a one-shot shell environment that launchd/systemd would discard.
"$APX" pxpipe models set claude-fable-5,gpt-5.6 --no-restart >/dev/null
grep -q '^PXPIPE_MODELS="claude-fable-5,gpt-5.6"$' "$APX_CONFIG"
if [[ "$("$APX" pxpipe models get)" != "PXPIPE_MODELS=claude-fable-5,gpt-5.6" ]]; then
  echo "ERROR: pxpipe model allowlist did not persist" >&2
  exit 1
fi
"$APX" pxpipe models set off --no-restart >/dev/null
grep -q '^PXPIPE_MODELS="off"$' "$APX_CONFIG"
if "$APX" pxpipe models set 'model,*' --no-restart >/dev/null 2>&1; then
  echo "ERROR: pxpipe models accepted a wildcard" >&2
  exit 1
fi
"$APX" headroom settings set tool-search off --no-restart >/dev/null
grep -q '^HEADROOM_ENABLE_TOOL_SEARCH=false$' "$APX_CONFIG"
if ! grep -q '^tool-search=false$' <<<"$("$APX" headroom settings get)"; then
  echo "ERROR: Headroom tool-search setting did not persist" >&2
  exit 1
fi
if "$APX" headroom settings set tls-strict off --no-restart >/dev/null 2>&1; then
  echo "ERROR: Headroom settings accepted an unsafe/unsupported key" >&2
  exit 1
fi
"$APX" squeezr bypass --help >/dev/null
if ! grep -q '^tool-search=false$' <<<"$("$APX" optimizer headroom settings get)"; then
  echo "ERROR: grouped optimizer headroom command did not preserve the legacy behavior" >&2
  exit 1
fi
if ! grep -q "^GATEWAY_PORT=$PORT$" <<<"$("$APX" config port get gateway)"; then
  echo "ERROR: grouped config port command did not preserve the legacy behavior" >&2
  exit 1
fi

# The configuration advisor exposes machine-readable safety metadata and only
# changes config under an explicit, reversible --apply-safe request.
advisor_json="$("$APX" config advise --json)"
if [[ "$advisor_json" != *'"id":"metrics-disabled"'* || "$advisor_json" != *'"safe_to_apply":true'* ]]; then
  echo "ERROR: config advisor did not report disabled metrics as JSON" >&2
  exit 1
fi
"$APX" config advise --apply-safe metrics-disabled >/dev/null
grep -q "^APX_METRICS_DB=\"$APX_STATE/metrics.db\"$" "$APX_CONFIG"
if grep -q 'Enable durable token metrics' <<<"$("$APX" config advise)"; then
  echo "ERROR: applied metrics advisory was still active" >&2
  exit 1
fi

# HTTP loopback detection must compare the parsed hostname, not a URL prefix.
"$APX" target set http://localhost.example.com --no-restart >/dev/null
advisor_json="$("$APX" config advise --json)"
if [[ "$advisor_json" != *'"id":"insecure-upstream"'* ]]; then
  echo "ERROR: config advisor treated a localhost-prefixed external hostname as loopback" >&2
  exit 1
fi
"$APX" target set http://127.0.0.1:9999 --no-restart >/dev/null
advisor_json="$("$APX" config advise --json)"
if [[ "$advisor_json" == *'"id":"insecure-upstream"'* ]]; then
  echo "ERROR: config advisor warned about an exact loopback upstream" >&2
  exit 1
fi
"$APX" target set https://api.anthropic.com --no-restart >/dev/null

# Opus 5 image conversion is now an informed opt-in. The advisor offers an
# explicit, reversible removal only when pxpipe is enabled.
"$APX" pxpipe models set claude-fable-5,claude-opus-5 --no-restart >/dev/null
if ! grep -Eq '^PXPIPE_MODELS[[:space:]]+user-explicit[[:space:]]+[0-9a-f]{64}[[:space:]]+' "$APX_STATE/config-provenance.tsv"; then
  echo "ERROR: explicit pxpipe model configuration did not record user ownership" >&2
  exit 1
fi
"$APX" mode pxpipe --no-restart --no-claude-sync >/dev/null
advisor_json="$("$APX" config advise --json)"
if [[ "$advisor_json" != *'"id":"pxpipe-models-opus-5-enabled"'* || "$advisor_json" != *'"safe_to_apply":true'* ]]; then
  echo "ERROR: config advisor did not report the Opus 5 exact-recall risk" >&2
  exit 1
fi
"$APX" config advise --dismiss pxpipe-models-opus-5-enabled >/dev/null
if grep -q 'Review Claude Opus 5' <<<"$("$APX" config advise)"; then
  echo "ERROR: dismissed configuration advisory was still active" >&2
  exit 1
fi
advisor_all="$("$APX" config advise --show-all)"
if [[ "$advisor_all" != *'Status: dismissed'* ]]; then
  echo "ERROR: config advisor did not show dismissed advisory on request" >&2
  exit 1
fi
"$APX" config advise --apply-safe pxpipe-models-opus-5-enabled >/dev/null
grep -q '^PXPIPE_MODELS="claude-fable-5"$' "$APX_CONFIG"
if [[ "$("$APX" optimizer pxpipe models get)" != "PXPIPE_MODELS=claude-fable-5" ]]; then
  echo "ERROR: grouped optimizer pxpipe command did not preserve the applied allowlist" >&2
  exit 1
fi
if "$APX" config advise --json --dismiss metrics-disabled >/dev/null 2>&1; then
  echo "ERROR: config advisor accepted incompatible JSON/dismiss flags" >&2
  exit 1
fi

zsh_completion="$("$APX" completions zsh)"
if [[ "$(printf '%s\n' "$zsh_completion" | grep -c '^    config)')" != "1" ]] ||
   [[ "$zsh_completion" != *"'--apply-safe[advisory ID]'"* ]]; then
  echo "ERROR: zsh grouped config completion is missing or shadowed" >&2
  exit 1
fi
if "$APX" config advise --apply-safe dashboard-exposed-without-token >/dev/null 2>&1; then
  echo "ERROR: config advisor applied an advisory that requires user input" >&2
  exit 1
fi

second="$("$APX" start 2>&1)"
if [[ "$second" != *"already running"* ]]; then
  echo "ERROR: Expected 'already running' message, got: $second" >&2
  exit 1
fi

"$APX" stop >/dev/null
if curl -fsS --max-time 1 "http://127.0.0.1:$PORT/livez" >/dev/null 2>&1; then
  echo "ERROR: gateway still healthy after stop" >&2
  exit 1
fi

mkdir -p "$APX_STATE/logs"
printf 'old line
new line
' > "$APX_STATE/logs/gateway.log"
if [[ "$("$APX" logs gateway --tail 1 --no-follow)" != "new line" ]]; then
  echo "ERROR: logs --tail/--no-follow did not return the expected gateway tail" >&2
  exit 1
fi
if "$APX" logs gateway --tail nope --no-follow >/dev/null 2>&1; then
  echo "ERROR: logs accepted a non-numeric --tail value" >&2
  exit 1
fi

if [[ "$("$APX" debug level get)" != "APX_LOG_LEVEL=info" ]]; then
  echo "ERROR: debug level get did not default to info" >&2
  exit 1
fi
"$APX" debug level set debug --no-restart >/dev/null
grep -q '^APX_LOG_LEVEL=debug$' "$APX_CONFIG"
if [[ "$("$APX" debug level get)" != "APX_LOG_LEVEL=debug" ]]; then
  echo "ERROR: debug level set did not persist" >&2
  exit 1
fi
if "$APX" debug level set verbose --no-restart >/dev/null 2>&1; then
  echo "ERROR: debug level accepted an invalid level" >&2
  exit 1
fi

cat >> "$APX_CONFIG" <<'EOF_SECRET'
ANTHROPIC_API_KEY=sk-test-secret
APX_DASHBOARD_TOKEN=dashboard-secret
EOF_SECRET
printf 'authorization=Bearer log-secret
plain line
' > "$APX_STATE/logs/gateway.log"
support_bundle="$TMP/apx-support.tgz"
"$APX" support-bundle --output "$support_bundle" --tail 5 >/dev/null
tar -tzf "$support_bundle" | grep -q './config/config.env.redacted'
support_extract="$TMP/support-extract"
mkdir -p "$support_extract"
tar -xzf "$support_bundle" -C "$support_extract"
if grep -R 'sk-test-secret\|dashboard-secret\|log-secret' "$support_extract" >/dev/null 2>&1; then
  echo "ERROR: support bundle leaked a configured or logged secret" >&2
  exit 1
fi
grep -R 'REDACTED' "$support_extract" >/dev/null

PX_ALT_PORT="$($PYTHON3 - <<'PYPORT'
import socket
s = socket.socket()
s.bind(("127.0.0.1", 0))
print(s.getsockname()[1])
s.close()
PYPORT
)"
"$APX" chain set headroom,pxpipe --no-restart --no-claude-sync >/dev/null
"$APX" port set pxpipe "$PX_ALT_PORT" --no-restart --no-claude-sync >/dev/null
if [[ "$("$APX" port get pxpipe)" != "PXPIPE_PORT=$PX_ALT_PORT" ]]; then
  echo "ERROR: pxpipe port get did not report updated port" >&2
  exit 1
fi
grep -q "^PXPIPE_PORT=$PX_ALT_PORT$" "$APX_CONFIG"
grep -q "^HEADROOM_TARGET_API_URL=\"http://127.0.0.1:$PX_ALT_PORT\"$" "$APX_CONFIG"
if "$APX" port set pxpipe "$PORT" --no-restart --no-claude-sync >/dev/null 2>&1; then
  echo "ERROR: pxpipe port set accepted a port already configured for Gateway" >&2
  exit 1
fi
if "$APX" chain set squeezr,headroom --no-restart --no-claude-sync >/dev/null 2>&1; then
  echo "ERROR: chain set accepted squeezr before another local service" >&2
  exit 1
fi

mkdir -p "$HOME/.local/share/apx/versions/v0.4.0"
ln -sfn versions/v0.4.0 "$HOME/.local/share/apx/current"
printf '%s\n' '0.4.0' > "$APX_STATE/VERSION"
mkdir -p "$TMP/update-stubs"
cat > "$TMP/update-stubs/curl" <<'SH'
#!/usr/bin/env bash
out=""
url=""
write_format=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    -o) out="$2"; shift 2 ;;
    -w) write_format="$2"; shift 2 ;;
    --max-time) shift 2 ;;
    -*) shift ;;
    *) url="$1"; shift ;;
  esac
done
printf '%s\n' "$url" >> "$HOME/update.urls"
if [[ "$out" == "/dev/null" && -n "$write_format" ]]; then
  printf '%s' 'https://github.com/mkhalid-s/lean-relay/releases/tag/v0.5.0'
  exit 0
fi
case "$out" in
  *apx.sh)
    cat > "$out" <<'APXSH'
#!/usr/bin/env bash
if [[ "${1:-}" == "--print-version" ]]; then
  echo 0.5.0
  exit 0
fi
echo "fake apx.sh should not run during dry-run" >&2
exit 99
APXSH
    ;;
  *apx.sh.sha256)
    if command -v sha256sum >/dev/null 2>&1; then
      sha256sum "$(dirname "$out")/apx.sh" | awk '{print $1"  apx.sh"}' > "$out"
    else
      shasum -a 256 "$(dirname "$out")/apx.sh" | awk '{print $1"  apx.sh"}' > "$out"
    fi
    ;;
  *)
    echo "unexpected curl output path: $out" >&2
    exit 1
    ;;
esac
SH
chmod +x "$TMP/update-stubs/curl"
APX_RELEASE_ASSET_URL='https://github.com/mkhalid-s/lean-relay\/releases\/latest\/download/apx.sh' \
  APX_PATH="$TMP/update-stubs:$PATH" \
  "$APX" update --to v0.5.0 --dry-run >/dev/null
grep -qx 'https://github.com/mkhalid-s/lean-relay/releases/download/v0.5.0/apx.sh' "$HOME/update.urls"
grep -qx 'https://github.com/mkhalid-s/lean-relay/releases/download/v0.5.0/apx.sh.sha256' "$HOME/update.urls"
APX_PATH="$TMP/update-stubs:$PATH" "$APX" check-updates > "$HOME/check-updates.out"
if ! grep -q 'latest version:    0.5.0' "$HOME/check-updates.out"   || ! grep -q 'update status:     update available' "$HOME/check-updates.out"; then
  echo "ERROR: check-updates did not report latest release availability" >&2
  cat "$HOME/check-updates.out" >&2
  cat "$HOME/update.urls" >&2
  exit 1
fi
APX_PATH="$TMP/update-stubs:$PATH" "$APX" version > "$HOME/version.out"
if ! grep -q 'latest version:    0.5.0' "$HOME/version.out"   || ! grep -q 'run:               apx update --to v0.5.0' "$HOME/version.out"; then
  echo "ERROR: version did not report latest release availability" >&2
  cat "$HOME/version.out" >&2
  cat "$HOME/update.urls" >&2
  exit 1
fi
APX_PATH="$TMP/update-stubs:$PATH" "$APX" status > "$HOME/status-update.out"
if ! grep -q 'log level: debug' "$HOME/status-update.out"   || ! grep -q 'update status:     update available' "$HOME/status-update.out"; then
  echo "ERROR: status did not report log level and latest release availability" >&2
  cat "$HOME/status-update.out" >&2
  cat "$HOME/update.urls" >&2
  exit 1
fi
rm -f "$HOME/update.urls"
rm -f "$HOME/.local/share/apx/current"
rm -rf "$HOME/.local/share/apx/versions"

SQ_FAKE_PORT="$($PYTHON3 - <<'PYPORT'
import socket
s = socket.socket()
s.bind(("127.0.0.1", 0))
print(s.getsockname()[1])
s.close()
PYPORT
)"
GATEWAY_PORT="$SQ_FAKE_PORT" "$PYTHON3" "$HOME/bin/fake-gateway" & sq_fake=$!
for _ in $(seq 1 10); do
  if curl -fsS --max-time 1 "http://127.0.0.1:$SQ_FAKE_PORT/squeezr/health" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done
"$APX" port set squeezr "$SQ_FAKE_PORT" --no-restart --no-claude-sync >/dev/null
"$APX" chain set squeezr --no-restart --no-claude-sync >/dev/null
status_out="$($APX status)"
if ! grep -q 'Squeezr:.*health=fail' <<<"$status_out"; then
  echo "ERROR: Squeezr health accepted HTTP 200 without identity=squeezr" >&2
  echo "$status_out" >&2
  exit 1
fi
kill "$sq_fake" 2>/dev/null || true
wait "$sq_fake" 2>/dev/null || true

# Foreign pid must not be killed by stop; keep this short so a failed kill
# cannot stall CI for half a minute.
sleep 5 & foreign=$!
mkdir -p "$APX_RUN_DIR"
printf '%s\n' "$foreign" > "$APX_RUN_DIR/supervisor.pid"
"$APX" stop >/dev/null
kill -0 "$foreign"
kill "$foreign" 2>/dev/null || true
wait "$foreign" 2>/dev/null || true

mkdir -p "$TMP/stubs"
cat > "$TMP/stubs/systemctl" <<'SH'
#!/usr/bin/env bash
echo "$*" >> "$HOME/systemctl.log"
case "$*" in *show-environment*) exit 0 ;; *is-active*) exit 1 ;; esac
exit 0
SH
cat > "$TMP/stubs/launchctl" <<'SH'
#!/usr/bin/env bash
echo "$*" >> "$HOME/launchctl.log"
case "${1:-}" in print) exit 1 ;; esac
exit 0
SH
chmod +x "$TMP/stubs/systemctl" "$TMP/stubs/launchctl"

APX_PATH="$TMP/stubs:$PATH" APX_SERVICE_BACKEND=systemd "$APX" install >/dev/null
[[ -f "$HOME/.config/systemd/user/io.github.apx.service" ]]
grep -q 'enable --now io.github.apx.service' "$HOME/systemctl.log"
APX_PATH="$TMP/stubs:$PATH" APX_SERVICE_BACKEND=systemd "$APX" uninstall >/dev/null
[[ ! -f "$HOME/.config/systemd/user/io.github.apx.service" ]]

if [[ "$(uname -s)" == Darwin ]]; then
  APX_PATH="$TMP/stubs:$PATH" APX_SERVICE_BACKEND=launchd "$APX" install >/dev/null
  [[ -f "$HOME/Library/LaunchAgents/io.github.apx.plist" ]]
  plutil -lint "$HOME/Library/LaunchAgents/io.github.apx.plist" >/dev/null
  APX_PATH="$TMP/stubs:$PATH" APX_SERVICE_BACKEND=launchd "$APX" uninstall >/dev/null
  [[ ! -f "$HOME/Library/LaunchAgents/io.github.apx.plist" ]]
fi

# Ensure later config edits do not try to talk to a leftover launchd/systemd backend.
export APX_SERVICE_BACKEND=nohup
rm -f "$HOME/.config/apx/service.backend"

mkdir -p "$HOME/.claude"
printf '{"env":{"KEEP":"1"}}\n' > "$HOME/.claude/settings.json"
"$APX" claude set local >/dev/null
grep -q 'APX_CLIENT_TOPOLOGY=local' "$APX_CONFIG"
grep -q 'http://127.0.0.1:' "$HOME/.claude/settings.json"
"$APX" claude set docker-host >/dev/null
grep -q 'APX_CLIENT_TOPOLOGY=docker-host' "$APX_CONFIG"
grep -q 'host.docker.internal' "$HOME/.claude/settings.json"
"$APX" mode direct --no-restart >/dev/null
grep -q 'host.docker.internal' "$HOME/.claude/settings.json"

release_repo="$TMP/release-helper"
mkdir -p "$release_repo/build"
cp "$ROOT/build/release.sh" "$release_repo/build/release.sh"
cat > "$release_repo/VERSION" <<'EOF_VERSION'
1.2.3
EOF_VERSION
cat > "$release_repo/CHANGELOG.md" <<'EOF_CHANGELOG'
# Changelog

## [Unreleased]

### Fixed

- Test release note.

## [1.2.3] - 2026-07-01
EOF_CHANGELOG
(
  cd "$release_repo"
  git init -q
  git checkout -q -b main 2>/dev/null || git branch -m main
  git config user.email 'mkhalid-s@users.noreply.github.com'
  git config user.name 'Khalid Shaikh'
  git add VERSION CHANGELOG.md build/release.sh
  git -c commit.gpgsign=false commit -q -m baseline
  bash build/release.sh --patch --push --dry-run > "$TMP/release-dry-run.out"
  grep -q 'version:      1.2.3 -> 1.2.4' "$TMP/release-dry-run.out"
  grep -q 'branch:       release/v1.2.4' "$TMP/release-dry-run.out"
  grep -q 'open a pull request' "$TMP/release-dry-run.out"
  [[ "$(git branch --show-current)" == "main" ]]
  [[ "$(head -n 1 VERSION)" == "1.2.3" ]]
  ! git rev-parse -q --verify refs/tags/v1.2.4 >/dev/null
  if bash build/release.sh 1.2.3 --finalize --dry-run >/dev/null 2>&1; then
    echo "ERROR: release helper allowed --finalize with --dry-run" >&2
    exit 1
  fi
)

empty_release_repo="$TMP/release-helper-empty"
mkdir -p "$empty_release_repo/build"
cp "$ROOT/build/release.sh" "$empty_release_repo/build/release.sh"
cat > "$empty_release_repo/VERSION" <<'EOF_VERSION'
1.2.3
EOF_VERSION
cat > "$empty_release_repo/CHANGELOG.md" <<'EOF_CHANGELOG'
# Changelog

## [Unreleased]

## [1.2.3] - 2026-07-01
EOF_CHANGELOG
(
  cd "$empty_release_repo"
  git init -q
  git checkout -q -b main 2>/dev/null || git branch -m main
  git config user.email 'mkhalid-s@users.noreply.github.com'
  git config user.name 'Khalid Shaikh'
  git add VERSION CHANGELOG.md build/release.sh
  git -c commit.gpgsign=false commit -q -m baseline
  if bash build/release.sh --patch --dry-run >/dev/null 2>&1; then
    echo "ERROR: release helper allowed empty Unreleased notes without opt-in" >&2
    exit 1
  fi
  bash build/release.sh --patch --dry-run --allow-empty-notes >/dev/null
)

finalize_release_repo="$TMP/release-helper-finalize"
finalize_release_origin="$TMP/release-helper-finalize-origin.git"
finalize_release_stubs="$TMP/release-helper-finalize-stubs"
mkdir -p "$finalize_release_repo/build" "$finalize_release_stubs"
cp "$ROOT/build/release.sh" "$finalize_release_repo/build/release.sh"
cat > "$finalize_release_repo/VERSION" <<'EOF_VERSION'
1.2.4
EOF_VERSION
cat > "$finalize_release_repo/CHANGELOG.md" <<'EOF_CHANGELOG'
# Changelog

## [Unreleased]

## [1.2.4] - 2026-07-31

- Test finalized release.
EOF_CHANGELOG
cat > "$finalize_release_stubs/gh" <<'EOF_GH'
#!/usr/bin/env bash
set -eu
case "${1:-} ${2:-}" in
  "api user") printf '%s\n' 'mkhalid-s' ;;
  "run list") printf '%s\n' '101' ;;
  "run watch") exit 0 ;;
  *) echo "unexpected gh invocation: $*" >&2; exit 1 ;;
esac
EOF_GH
chmod +x "$finalize_release_stubs/gh"
git init -q --bare "$finalize_release_origin"
(
  cd "$finalize_release_repo"
  git init -q
  git checkout -q -b main 2>/dev/null || git branch -m main
  git config user.email 'mkhalid-s@users.noreply.github.com'
  git config user.name 'Khalid Shaikh'
  git add VERSION CHANGELOG.md build/release.sh
  git -c commit.gpgsign=false commit -q -m 'Release 1.2.4'
  git remote add origin "$finalize_release_origin"
  git push -q --set-upstream origin main
  PATH="$finalize_release_stubs:$PATH" bash build/release.sh 1.2.4 --finalize >/dev/null
  [[ "$(git rev-parse refs/tags/v1.2.4)" == "$(git rev-parse HEAD)" ]]
  [[ "$(git --git-dir="$finalize_release_origin" rev-parse refs/tags/v1.2.4)" == "$(git rev-parse HEAD)" ]]
)

echo lifecycle-ok
