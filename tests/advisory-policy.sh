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

sed 's/"type": "list_contains"/"type": "run_shell"/' "$ROOT/advisories/current.json" > "$TMP/invalid.json"
if "$ROOT/bin/apx-advisory" validate "$TMP/invalid.json" >/dev/null 2>&1; then
  echo "ERROR: executable advisory condition was accepted" >&2
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
refreshed="$(env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --refresh --json)"
[[ "$refreshed" == *'"id":"pxpipe-remote-policy-test"'* ]]
test -s "$TMP/home/.local/state/apx/advisories.json"
env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --dismiss pxpipe-remote-policy-test >/dev/null
active="$(env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --json)"
[[ "$active" != *'"id":"pxpipe-remote-policy-test"'* ]]
all="$(env "${advisor_env[@]}" "$ROOT/bin/apx" config advise --show-all)"
[[ "$all" == *'Status: dismissed'* ]]

printf '%s\n' advisory-policy-ok
