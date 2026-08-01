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
[[ "$result" == *'"id":"pxpipe-opus-5-image-recall"'* ]]
[[ "$result" == *'"remediation_command":"apx pxpipe models set claude-fable-5"'* ]]

sed 's/"type": "list_contains"/"type": "run_shell"/' "$ROOT/advisories/current.json" > "$TMP/invalid.json"
if "$ROOT/bin/apx-advisory" validate "$TMP/invalid.json" >/dev/null 2>&1; then
  echo "ERROR: executable advisory condition was accepted" >&2
  exit 1
fi

printf '%s\n' advisory-policy-ok
