#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="$(mktemp -d "${TMPDIR:-/tmp}/apx-dashboard.XXXXXX")"
trap '[[ -n "${gateway_pid:-}" ]] && kill "$gateway_pid" 2>/dev/null || true; wait "${gateway_pid:-}" 2>/dev/null || true; rm -rf "$TMP"' EXIT

# The shell is intentionally minimal: semantic landmarks, an associated time
# window label, and a small-screen layout must survive asset rebuilds.
grep -q '<html lang="en">' "$ROOT/share/dashboard.html"
grep -q '<main>' "$ROOT/share/dashboard.html"
grep -q 'for="window-select"' "$ROOT/share/dashboard.html"
grep -q '@media (max-width: 560px)' "$ROOT/share/dashboard.html"

PORT="$(python3 - <<'PY'
import socket
s = socket.socket()
s.bind(("127.0.0.1", 0))
print(s.getsockname()[1])
s.close()
PY
)"

mkdir -p "$TMP/state"
cp "$ROOT/advisories/current.json" "$TMP/state/advisories.json"
cat > "$TMP/config.env" <<'EOF'
PXPIPE_MODELS="claude-fable-5,claude-opus-5"
EOF
printf 'PXPIPE_MODELS\tmanaged-default\tstale-digest\t0.6.5\n' > "$TMP/state/config-provenance.tsv"

start_gateway() {
  APX_DASHBOARD_ENABLED=1 \
  APX_DASHBOARD_TOKEN=dashboard-test-token \
  APX_DASHBOARD_HTML="$ROOT/share/dashboard.html" \
  APX_DASHBOARD_STATIC_DIR="$ROOT/share/dashboard" \
  APX_STATE_DIR="$TMP/state" \
  APX_CONFIG="$TMP/config.env" \
  APX_HISTORY_DIR="$TMP/history" \
  APX_METRICS_DB="$TMP/state/metrics.db" \
  GATEWAY_HOST=127.0.0.1 \
  GATEWAY_PORT="$PORT" \
  GATEWAY_TARGET_URL=http://127.0.0.1:9 \
  python3 "$ROOT/bin/apx-gateway" >>"$TMP/gateway.log" 2>&1 &
  gateway_pid=$!

  for _ in $(seq 1 40); do
    if curl -fsS --max-time 1 "http://127.0.0.1:$PORT/livez" >/dev/null 2>&1; then
      return 0
    fi
    sleep 1
  done
  return 1
}

start_gateway
curl -fsS --max-time 1 "http://127.0.0.1:$PORT/livez" >/dev/null

unauthorized="$(curl -sS -o /dev/null -w '%{http_code}' "http://127.0.0.1:$PORT/")"
[[ "$unauthorized" == "401" ]]

redirect="$(curl -sS -D "$TMP/headers" -o /dev/null -w '%{http_code}' "http://127.0.0.1:$PORT/?token=dashboard-test-token")"
[[ "$redirect" == "303" ]]
grep -qi '^set-cookie: apx_dashboard_token=' "$TMP/headers"

curl -fsS -c "$TMP/cookies" "http://127.0.0.1:$PORT/?token=dashboard-test-token" -o /dev/null
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/" -o "$TMP/dashboard.html"
grep -q 'id="svelte-overview"' "$TMP/dashboard.html"
grep -q 'src="/assets/app.js"' "$TMP/dashboard.html"
grep -q 'href="/assets/app.css"' "$TMP/dashboard.html"
curl -fsS -D "$TMP/asset-headers" -b "$TMP/cookies" "http://127.0.0.1:$PORT/assets/app.js" -o "$TMP/app.js"
curl -fsS -D "$TMP/css-headers" -b "$TMP/cookies" "http://127.0.0.1:$PORT/assets/app.css" -o "$TMP/app.css"
grep -q 'svelte-overview' "$TMP/app.js"
grep -q 'Verified input saved' "$TMP/app.js"
grep -q 'Verified input journey' "$TMP/app.js"
grep -q 'Token flow' "$TMP/app.js"
grep -q '/proxy/headroom' "$TMP/app.js"
grep -q '/proxy/pxpipe/' "$TMP/app.js"
grep -q '/proxy/squeezr/' "$TMP/app.js"
grep -q '.overview .charts' "$TMP/app.css"
grep -qi '^cache-control: no-cache' "$TMP/asset-headers"
grep -qi '^cache-control: no-cache' "$TMP/css-headers"
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/advisories" -o "$TMP/advisories.json"
python3 - "$TMP/advisories.json" <<'PY'
import json
import sys
payload = json.load(open(sys.argv[1], encoding="utf-8"))
assert payload["available"] is True
assert payload["revision"] == 1
assert payload["advisories"][0]["id"] == "pxpipe-models-opus-5-enabled"
assert payload["advisories"][0]["ownership"] == "user-explicit"
assert payload["advisories"][0]["action"] == "apx pxpipe models set claude-fable-5"
PY

# Seed only durable, explicit measurements. The overview must never need to
# infer token savings from aggregate traffic to show its central cards.
python3 - "$TMP/state/metrics.db" <<'PY'
import sqlite3
import sys
import time

db = sqlite3.connect(sys.argv[1])
now = time.time()
cur = db.execute(
    """INSERT INTO requests(
      ts, request_id, session_id, method, path, model, status, latency_ms,
      first_byte_ms, tokens_in, tokens_out, cache_read_tokens,
      cache_write_tokens, cost_est_usd, bytes_in, bytes_out, chain_mode,
      chain_hops, hop_timings, upstream, is_stream, tool_call_count,
      err_class, capture_level, source_key
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
    (now, "fixture-request", "fixture-session", "POST", "/v1/messages",
     "claude-sonnet-5", 200, 42.0, 12.0, 1200, 300, 240, 0, 0.012,
     1024, 512, "headroom,pxpipe", "headroom,pxpipe", "", "fixture",
     0, 1, "", "metadata", "fixture-request"),
)
request_id = cur.lastrowid
db.execute(
    """INSERT INTO optimizer_attempts(
      request_id, optimizer, applied, bypass_reason, technique,
      input_tokens_before, input_tokens_after, tokens_saved,
      savings_confidence, optimizer_latency_ms, raw_metrics
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
    (request_id, "headroom", 1, None, "fixture", 1500, 1200, 300,
     "measured", 4.0, "{}"),
)
# Simulate a malformed measured claim written by an older gateway. Read paths
# must not count it as verified after an upgrade.
db.execute(
    """INSERT INTO optimizer_attempts(
      request_id, optimizer, applied, bypass_reason, technique,
      input_tokens_before, input_tokens_after, tokens_saved,
      savings_confidence, optimizer_latency_ms, raw_metrics
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
    (request_id, "headroom", 1, None, "legacy-fixture", None, None, 999,
     "measured", 3.0, "{}"),
)
db.execute(
    "INSERT INTO optimizer_snapshots(ts, optimizer, reachable, normalized) VALUES (?, ?, ?, ?)",
    (now, "headroom", 1, "{}"),
)
db.commit()
db.close()
PY

curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/metrics/summary?window=1h" -o "$TMP/summary.json"
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/metrics/efficiency?window=1h" -o "$TMP/efficiency.json"
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/metrics/efficiency/timeseries?window=1h" -o "$TMP/efficiency-series.json"
python3 - "$TMP/summary.json" "$TMP/efficiency.json" "$TMP/efficiency-series.json" <<'PY'
import json
import sys

summary = json.load(open(sys.argv[1], encoding="utf-8"))
efficiency = json.load(open(sys.argv[2], encoding="utf-8"))
series = json.load(open(sys.argv[3], encoding="utf-8"))
assert summary["totals"]["tokens_in"] == 1200
assert summary["totals"]["tokens_out"] == 300
assert efficiency["durable"] is True
assert efficiency["optimizers"][0]["measured_tokens_saved"] == 300
assert efficiency["optimizers"][0]["measured_attempts"] == 1
assert efficiency["optimizers"][0]["unavailable_attempts"] == 1
assert series["series"][0]["measured_tokens_saved"] == 300
PY
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/metrics/attention?window=1h" -o "$TMP/attention.json"
python3 - "$TMP/attention.json" <<'PY'
import json
import sys
assert json.load(open(sys.argv[1], encoding="utf-8"))["durable"] is True
PY

# The same durable token and optimizer measurements must remain available after
# a complete gateway process restart using the existing SQLite database.
kill "$gateway_pid"
wait "$gateway_pid"
gateway_pid=""
start_gateway
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/metrics/efficiency?window=1h" -o "$TMP/efficiency-after-restart.json"
curl -fsS -b "$TMP/cookies" "http://127.0.0.1:$PORT/api/metrics/optimizer-snapshots?window=1h" -o "$TMP/snapshots-after-restart.json"
python3 - "$TMP/efficiency-after-restart.json" "$TMP/snapshots-after-restart.json" <<'PY'
import json
import sys

efficiency = json.load(open(sys.argv[1], encoding="utf-8"))
snapshots = json.load(open(sys.argv[2], encoding="utf-8"))
assert efficiency["durable"] is True
assert efficiency["observed"]["tokens_in"] == 1200
assert efficiency["optimizers"][0]["measured_tokens_saved"] == 300
assert snapshots["snapshots"][0]["optimizer"] == "headroom"
PY

missing="$(curl -sS -o /dev/null -w '%{http_code}' -b "$TMP/cookies" "http://127.0.0.1:$PORT/assets/missing.js")"
[[ "$missing" == "404" ]]
APX_DASHBOARD_STATIC_DIR="$ROOT/share/dashboard" python3 - "$ROOT/bin/apx-gateway" <<'PY'
from email.message import Message
import importlib.machinery
import importlib.util
import json
import sys

loader = importlib.machinery.SourceFileLoader("apx_gateway_asset_test", sys.argv[1])
spec = importlib.util.spec_from_loader(loader.name, loader)
module = importlib.util.module_from_spec(spec)
loader.exec_module(module)
assert module._read_dashboard_asset("/assets/%2e%2e/apx-gateway") is None

def attempts(record):
    headers = Message()
    headers[module.OPTIMIZER_METRICS_HEADER] = json.dumps(record)
    return module._optimizer_attempts_from_headers(headers)

valid = attempts({
    "optimizer": "headroom",
    "input_tokens_before": 1500,
    "input_tokens_after": 1200,
    "savings_confidence": "measured",
})
assert valid[0]["tokens_saved"] == 300
assert valid[0]["savings_confidence"] == "measured"

for invalid in (
    {"optimizer": "headroom", "tokens_saved": 300, "savings_confidence": "measured"},
    {
        "optimizer": "headroom",
        "input_tokens_before": 1500,
        "input_tokens_after": 1200,
        "tokens_saved": 301,
        "savings_confidence": "measured",
    },
):
    normalized = attempts(invalid)[0]
    assert normalized["savings_confidence"] == "unavailable"
    assert normalized["tokens_saved"] is None
PY

echo dashboard-ok
