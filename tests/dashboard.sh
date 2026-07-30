#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="$(mktemp -d "${TMPDIR:-/tmp}/apx-dashboard.XXXXXX")"
trap '[[ -n "${gateway_pid:-}" ]] && kill "$gateway_pid" 2>/dev/null || true; wait "${gateway_pid:-}" 2>/dev/null || true; rm -rf "$TMP"' EXIT

PORT="$(python3 - <<'PY'
import socket
s = socket.socket()
s.bind(("127.0.0.1", 0))
print(s.getsockname()[1])
s.close()
PY
)"

APX_DASHBOARD_ENABLED=1 \
APX_DASHBOARD_TOKEN=dashboard-test-token \
APX_DASHBOARD_HTML="$ROOT/share/dashboard.html" \
APX_DASHBOARD_STATIC_DIR="$ROOT/share/dashboard" \
APX_STATE_DIR="$TMP/state" \
APX_HISTORY_DIR="$TMP/history" \
APX_METRICS_DB="$TMP/state/metrics.db" \
GATEWAY_HOST=127.0.0.1 \
GATEWAY_PORT="$PORT" \
GATEWAY_TARGET_URL=http://127.0.0.1:9 \
python3 "$ROOT/bin/apx-gateway" >"$TMP/gateway.log" 2>&1 &
gateway_pid=$!

for _ in $(seq 1 40); do
  if curl -fsS --max-time 1 "http://127.0.0.1:$PORT/livez" >/dev/null 2>&1; then break; fi
  sleep 1
done
curl -fsS --max-time 1 "http://127.0.0.1:$PORT/livez" >/dev/null

unauthorized="$(curl -sS -o /dev/null -w '%{http_code}' "http://127.0.0.1:$PORT/")"
[[ "$unauthorized" == "401" ]]

redirect="$(curl -sS -D "$TMP/headers" -o /dev/null -w '%{http_code}' "http://127.0.0.1:$PORT/?token=dashboard-test-token")"
[[ "$redirect" == "303" ]]
grep -qi '^set-cookie: apx_dashboard_token=' "$TMP/headers"

curl -fsS -c "$TMP/cookies" "http://127.0.0.1:$PORT/?token=dashboard-test-token" -o /dev/null
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/" -o "$TMP/dashboard.html"
grep -q 'id="svelte-overview"' "$TMP/dashboard.html"
grep -q 'id="legacy-dashboard"' "$TMP/dashboard.html"
grep -q 'src="/assets/app.js"' "$TMP/dashboard.html"
curl -fsS -D "$TMP/asset-headers" -b "$TMP/cookies" "http://127.0.0.1:$PORT/assets/app.js" -o "$TMP/app.js"
grep -q 'svelte-overview' "$TMP/app.js"
grep -q 'Verified tokens saved' "$TMP/app.js"
grep -q 'Open details' "$TMP/app.js"
grep -qi '^cache-control: no-cache' "$TMP/asset-headers"
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/metrics/attention?window=1h" -o "$TMP/attention.json"
python3 - "$TMP/attention.json" <<'PY'
import json
import sys
assert json.load(open(sys.argv[1], encoding="utf-8"))["durable"] is True
PY

missing="$(curl -sS -o /dev/null -w '%{http_code}' -b "$TMP/cookies" "http://127.0.0.1:$PORT/assets/missing.js")"
[[ "$missing" == "404" ]]
APX_DASHBOARD_STATIC_DIR="$ROOT/share/dashboard" python3 - "$ROOT/bin/apx-gateway" <<'PY'
import importlib.machinery
import importlib.util
import sys

loader = importlib.machinery.SourceFileLoader("apx_gateway_asset_test", sys.argv[1])
spec = importlib.util.spec_from_loader(loader.name, loader)
module = importlib.util.module_from_spec(spec)
loader.exec_module(module)
assert module._read_dashboard_asset("/assets/%2e%2e/apx-gateway") is None
PY

echo dashboard-ok
