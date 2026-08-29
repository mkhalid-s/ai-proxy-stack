#!/usr/bin/env python3
"""Unit tests for pure functions in bin/apx-gateway.

Covers: _percentile, _window_seconds, _bucket_seconds, _bounded_int,
        _cost_estimate, _redact_headers, _redact_json_value,
        _redact_secrets_in_text, _scrub_url_path.
"""

from __future__ import annotations

import importlib.machinery
import importlib.util
import os
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

_state_tmp = tempfile.mkdtemp()

# Minimal env so module-level constants resolve without real config files.
os.environ.setdefault("GATEWAY_HOST", "127.0.0.1")
os.environ.setdefault("GATEWAY_PORT", "19999")
os.environ.setdefault("GATEWAY_TARGET_URL", "http://127.0.0.1:1")
os.environ.setdefault("APX_METRICS_DB", "OFF")
os.environ.setdefault("APX_DASHBOARD_TOKEN", "unit-test-token")
os.environ.setdefault("APX_STATE_DIR", _state_tmp)
os.environ.setdefault("APX_HISTORY_DIR", os.path.join(_state_tmp, "history"))

_loader = importlib.machinery.SourceFileLoader(
    "apx_gateway", str(ROOT / "bin" / "apx-gateway")
)
_spec = importlib.util.spec_from_loader(_loader.name, _loader)
_mod = importlib.util.module_from_spec(_spec)
_loader.exec_module(_mod)


# ---------------------------------------------------------------------------
# _percentile
# ---------------------------------------------------------------------------

def test_percentile() -> None:
    pct = _mod._percentile
    assert pct([], 50) == 0.0
    assert pct([5.0], 0) == 5.0
    assert pct([5.0], 100) == 5.0
    assert pct([5.0], 50) == 5.0
    vals = [1.0, 2.0, 3.0, 4.0, 5.0]
    assert pct(vals, 0) == 1.0
    assert pct(vals, 100) == 5.0
    assert pct(vals, 50) == 3.0
    # linear interpolation between endpoints
    assert abs(pct([0.0, 100.0], 50) - 50.0) < 0.001
    # negative pct clamps to first element
    assert pct([10.0, 20.0], -5) == 10.0


# ---------------------------------------------------------------------------
# _window_seconds
# ---------------------------------------------------------------------------

def test_window_seconds() -> None:
    ws = _mod._window_seconds
    assert ws("5m")  == 300.0
    assert ws("15m") == 900.0
    assert ws("1h")  == 3600.0
    assert ws("6h")  == 21600.0
    assert ws("24h") == 86400.0
    assert ws("7d")  == 7 * 86400.0
    assert ws("30d") == 30 * 86400.0
    # unknown key and empty string fall back to 1h
    assert ws("unknown") == 3600.0
    assert ws("")         == 3600.0
    assert ws("2h")       == 3600.0


# ---------------------------------------------------------------------------
# _bucket_seconds
# ---------------------------------------------------------------------------

def test_bucket_seconds() -> None:
    bs = _mod._bucket_seconds
    assert bs("1m")  == 60
    assert bs("5m")  == 300
    assert bs("15m") == 900
    assert bs("1h")  == 3600
    assert bs("6h")  == 21600
    assert bs("1d")  == 86400
    # unknown falls back to 60
    assert bs("unknown") == 60
    assert bs("")         == 60


# ---------------------------------------------------------------------------
# _bounded_int
# ---------------------------------------------------------------------------

def test_bounded_int() -> None:
    bi = _mod._bounded_int
    assert bi(None, 10, 1, 100)  == 10   # None → default
    assert bi("", 10, 1, 100)    == 10   # empty → default
    assert bi("bad", 10, 1, 100) == 10   # non-numeric → default
    assert bi("5", 10, 1, 100)   == 5    # valid in range
    assert bi("0", 10, 1, 100)   == 1    # below lo → lo
    assert bi("999", 10, 1, 100) == 100  # above hi → hi
    assert bi("1", 10, 1, 100)   == 1    # at lo boundary
    assert bi("100", 10, 1, 100) == 100  # at hi boundary


# ---------------------------------------------------------------------------
# _cost_estimate
# ---------------------------------------------------------------------------

def test_cost_estimate() -> None:
    ce = _mod._cost_estimate
    # Zero tokens → 0.0 regardless of model
    assert ce("claude-sonnet-5", 0, 0) == 0.0
    # None or empty model → 0.0
    assert ce(None, 1_000_000, 500_000) == 0.0
    assert ce("", 1_000_000, 500_000)   == 0.0
    # Unknown model → 0.0
    assert ce("unknown-model-xyz", 1_000_000, 500_000) == 0.0
    # claude-sonnet-5: $3.00 in / $15.00 out per million
    assert abs(ce("claude-sonnet-5", 1_000_000, 1_000_000) - 18.0) < 0.001
    assert abs(ce("claude-sonnet-5", 1_000_000, 0)         -  3.0) < 0.001
    # Prefix matching: versioned name should match the base prefix
    assert abs(ce("claude-sonnet-5-20251020", 1_000_000, 0) - 3.0) < 0.001
    # claude-haiku: $0.80 in / $4.00 out per million
    assert abs(ce("claude-haiku-4-5", 1_000_000, 1_000_000) - 4.80) < 0.001
    # claude-opus-4: $15.00 in / $75.00 out per million
    assert abs(ce("claude-opus-4", 1_000_000, 0) - 15.0) < 0.001
    # Small token count produces a small (but non-zero) cost
    cost_small = ce("claude-sonnet-5", 1_000, 500)
    assert 0.0 < cost_small < 0.05


# ---------------------------------------------------------------------------
# _redact_headers
# ---------------------------------------------------------------------------

def test_redact_headers() -> None:
    rh = _mod._redact_headers
    # Empty dict
    assert rh({}) == {}
    # authorization always redacted
    out = rh({"authorization": "Bearer sk-test", "content-type": "application/json"})
    assert out["authorization"] == "***"
    assert out["content-type"] == "application/json"
    # x-api-key always redacted
    assert rh({"x-api-key": "secret"})["x-api-key"] == "***"
    # x-anthropic-api-key always redacted
    assert rh({"x-anthropic-api-key": "sk-ant-secret"})["x-anthropic-api-key"] == "***"
    # x-amz-* prefix always redacted
    out = rh({"x-amz-security-token": "tok", "x-amz-custom": "val"})
    assert out["x-amz-security-token"] == "***"
    assert out["x-amz-custom"] == "***"
    # safe headers pass through unchanged
    out = rh({"accept": "application/json", "content-length": "42"})
    assert out["accept"] == "application/json"
    assert out["content-length"] == "42"
    # case-insensitive matching
    assert rh({"Authorization": "Bearer secret"})["Authorization"] == "***"
    assert rh({"X-Api-Key": "secret"})["X-Api-Key"] == "***"


# ---------------------------------------------------------------------------
# _redact_json_value
# ---------------------------------------------------------------------------

def test_redact_json_value() -> None:
    rjv = _mod._redact_json_value
    # Sensitive key in flat dict → ***
    out = rjv({"api_key": "secret", "model": "claude-sonnet-5"})
    assert out["api_key"] == "***"
    assert out["model"] == "claude-sonnet-5"
    # Nested dict — sensitive key redacted at depth
    out = rjv({"outer": {"password": "secret", "value": 42}})
    assert out["outer"]["password"] == "***"
    assert out["outer"]["value"] == 42
    # Non-string scalar values pass through unchanged
    out = rjv({"count": 5, "flag": True, "ratio": 1.5})
    assert out["count"] == 5
    assert out["flag"] is True
    assert out["ratio"] == 1.5
    # List items processed recursively
    out = rjv([{"api_key": "s"}, {"text": "hi"}])
    assert out[0]["api_key"] == "***"
    assert out[1]["text"] == "hi"
    # List truncated at 2000
    long_list = [{"x": i} for i in range(2500)]
    assert len(rjv(long_list)) == 2000
    # Depth limit: a dict nested more than 8 levels deep returns the sentinel
    deep: dict = {}
    node = deep
    for _ in range(10):
        node["child"] = {}
        node = node["child"]
    node["leaf"] = "value"
    assert "[REDACTED_DEPTH_LIMIT]" in str(rjv(deep))
    # access_token key redacted
    assert rjv({"access_token": "tok123"})["access_token"] == "***"


# ---------------------------------------------------------------------------
# _redact_secrets_in_text
# ---------------------------------------------------------------------------

def test_redact_secrets_in_text() -> None:
    rst = _mod._redact_secrets_in_text
    # Empty string → unchanged
    assert rst("") == ""
    # Clean text → unchanged
    clean = "the quick brown fox"
    assert rst(clean) == clean
    # sk- style API key (OpenAI/Anthropic)
    result = rst("my key is sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxx and more text")
    assert "sk-" not in result
    assert "[REDACTED]" in result
    # GitHub PAT (ghp_)
    result = rst("token ghp_abcdefghijklmnopqrstuvwxyz12345678")
    assert "ghp_" not in result
    assert "[REDACTED]" in result
    # AWS access key (AKIA prefix + 16 uppercase chars)
    result = rst("key=AKIAIOSFODNN7EXAMPLE")
    assert "AKIA" not in result
    assert "[REDACTED]" in result
    # Multiple secrets in one string — all redacted
    result = rst("sk-aaaaaaaaaaaaaaaaaaaaaa and ghp_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
    assert result.count("[REDACTED]") >= 2


# ---------------------------------------------------------------------------
# _scrub_url_path
# ---------------------------------------------------------------------------

def test_scrub_url_path() -> None:
    sup = _mod._scrub_url_path
    # No query string — unchanged
    assert sup("/v1/messages") == "/v1/messages"
    assert sup("") == ""
    # Sensitive params redacted
    out = sup("/v1/messages?api_key=topsecret&stream=true")
    assert "topsecret" not in out
    assert "REDACTED" in out
    assert "stream=true" in out
    # token param redacted
    out = sup("/api?token=abc123")
    assert "abc123" not in out
    assert "REDACTED" in out
    # access_token redacted
    out = sup("/api?access_token=bearer-xyz")
    assert "bearer-xyz" not in out
    # Non-sensitive params preserved intact
    out = sup("/api?model=claude&stream=false&n=10")
    assert "model=claude" in out
    assert "stream=false" in out
    assert "n=10" in out


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------

def main() -> None:
    tests = [
        test_percentile,
        test_window_seconds,
        test_bucket_seconds,
        test_bounded_int,
        test_cost_estimate,
        test_redact_headers,
        test_redact_json_value,
        test_redact_secrets_in_text,
        test_scrub_url_path,
    ]
    for fn in tests:
        fn()
        print(f"  ok  {fn.__name__}")
    print("gateway-unit-ok")


if __name__ == "__main__":
    main()
