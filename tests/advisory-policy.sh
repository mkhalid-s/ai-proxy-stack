#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="$(mktemp -d "${TMPDIR:-/tmp}/apx-advisory.XXXXXX")"
trap 'rm -rf "$TMP"' EXIT

"$ROOT/bin/apx-advisory" validate "$ROOT/advisories/current.json" >/dev/null
expected="$(awk 'NR == 1 { print $1 }' "$ROOT/advisories/current.json.sha256")"
actual="$(sha256sum "$ROOT/advisories/current.json" | awk '{print $1}')"
[[ "$actual" == "$expected" ]]

cat > "$TMP/config.env" <<'EOF'
PXPIPE_MODELS="claude-fable-5,claude-opus-5"
EOF
result="$("$ROOT/bin/apx-advisory" evaluate "$ROOT/advisories/current.json" --config "$TMP/config.env")"
[[ "$result" == *'"id":"pxpipe-models-opus-5-enabled"'* ]]
[[ "$result" == *'"remediation_command":"apx pxpipe models set claude-fable-5"'* ]]

cat > "$TMP/duplicate-config.env" <<'EOF'
PXPIPE_MODELS="claude-fable-5"
PXPIPE_MODELS="claude-opus-5"
EOF
duplicate_result="$("$ROOT/bin/apx-advisory" evaluate "$ROOT/advisories/current.json" --config "$TMP/duplicate-config.env")"
[[ "$duplicate_result" == *'"id":"pxpipe-models-opus-5-enabled"'* ]]
[[ "$duplicate_result" == *'"remediation_command":"apx pxpipe models set off"'* ]]

cat > "$TMP/malformed-config.env" <<'EOF'
PXPIPE_MODELS="claude-opus-5,bad;touch-pwned"
EOF
malformed_result="$("$ROOT/bin/apx-advisory" evaluate "$ROOT/advisories/current.json" --config "$TMP/malformed-config.env")"
[[ "$malformed_result" == *'"remediation_command":"apx pxpipe models get"'* ]]
[[ "$malformed_result" != *'touch-pwned'* ]]

sed 's/"type": "list_contains"/"type": "run_shell"/' "$ROOT/advisories/current.json" > "$TMP/invalid.json"
if "$ROOT/bin/apx-advisory" validate "$TMP/invalid.json" >/dev/null 2>&1; then
  echo "ERROR: executable advisory condition was accepted" >&2
  exit 1
fi
sed 's/2026-08-01T00:00:00Z/2099-08-01T00:00:00Z/' "$ROOT/advisories/current.json" > "$TMP/future.json"
if "$ROOT/bin/apx-advisory" validate "$TMP/future.json" >/dev/null 2>&1; then
  echo "ERROR: future-dated advisory policy was accepted" >&2
  exit 1
fi

# Exercise the complete refresh/cache/advisor path with a fake HTTPS transport.
mkdir -p "$TMP/home/.config/apx" "$TMP/home/.local/bin" "$TMP/home/.local/state/apx" "$TMP/feed"
sed 's/pxpipe-models-opus-5-enabled/pxpipe-remote-policy-test/' "$ROOT/advisories/current.json" > "$TMP/feed/current.json"
sha256sum "$TMP/feed/current.json" | awk '{print $1"  current.json"}' > "$TMP/feed/current.json.sha256"
cat > "$TMP/home/.local/bin/curl" <<'SH'
#!/usr/bin/env bash
set -Eeuo pipefail
out="" url=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    -o) shift; out="$1" ;;
    http*) url="$1" ;;
  esac
  shift
done
case "$url" in
  *.sha256) cp "$APX_TEST_POLICY_DIR/current.json.sha256" "$out" ;;
  *) cp "$APX_TEST_POLICY_DIR/current.json" "$out" ;;
esac
SH
chmod +x "$TMP/home/.local/bin/curl"
cat > "$TMP/home/.config/apx/config.env" <<'EOF'
PXPIPE_ENABLED=1
PXPIPE_MODELS="claude-fable-5,claude-opus-5"
APX_METRICS_DB="metrics.db"
EOF
advisor_env=(
  HOME="$TMP/home"
  APX_CONFIG="$TMP/home/.config/apx/config.env"
  APX_STATE="$TMP/home/.local/state/apx"
  APX_TEST_POLICY_DIR="$TMP/feed"
  APX_ADVISORY_URL="https://policy.invalid/current.json"
  APX_ADVISORY_SHA_URL="https://policy.invalid/current.json.sha256"
)
if env "${advisor_env[@]}" APX_ADVISORY_URL="file:///etc/passwd" "$ROOT/bin/apx" config advise --refresh --json >/dev/null 2>&1; then
  echo "ERROR: advisory refresh accepted a local-file URL" >&2
  exit 1
fi
refreshed="$(env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --refresh --json)"
[[ "$refreshed" == *'"id":"pxpipe-remote-policy-test"'* ]]
test -s "$TMP/home/.local/state/apx/advisories.json"
cached_digest="$(sha256sum "$TMP/home/.local/state/apx/advisories.json" | awk '{print $1}')"
sed -i 's/Review Claude Opus 5 image conversion/Changed content with reused revision/' "$TMP/feed/current.json"
sha256sum "$TMP/feed/current.json" | awk '{print $1"  current.json"}' > "$TMP/feed/current.json.sha256"
if env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --refresh --json >/dev/null 2>&1; then
  echo "ERROR: changed advisory content reused an existing revision" >&2
  exit 1
fi
[[ "$(sha256sum "$TMP/home/.local/state/apx/advisories.json" | awk '{print $1}')" == "$cached_digest" ]]
env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --dismiss pxpipe-remote-policy-test >/dev/null
active="$(env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --json)"
[[ "$active" != *'"id":"pxpipe-remote-policy-test"'* ]]
all="$(env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --show-all)"
[[ "$all" == *'Status: dismissed'* ]]

printf '%s\n' advisory-policy-ok
