#!/usr/bin/env python3
"""Deterministic security-boundary properties shared with the fuzz target."""

from __future__ import annotations

import random
import runpy
import string
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
GATEWAY = runpy.run_path(str(ROOT / "bin" / "apx-gateway"), run_name="apx_gateway_properties")


def fully_unquote(value: str) -> str:
    for _ in range(len(value) + 1):
        decoded = unquote(value)
        if decoded == value:
            return value
        value = decoded
    raise AssertionError("percent decoding did not converge")


def check_boundaries(data: bytes) -> None:
    text = data.decode("latin-1")
    path = GATEWAY["_safe_proxy_request_path"](text)
    if path is not None:
        assert path == text
        decoded = fully_unquote(path)
        path_only = decoded.split("?", 1)[0]
        assert path.startswith("/") and not path.startswith("//")
        assert not path_only.startswith("//")
        assert "\\" not in path_only
        assert all(ord(char) >= 32 and ord(char) != 127 for char in decoded)
        assert all(segment not in {".", ".."} for segment in path_only.split("/"))

    midpoint = len(text) // 2
    raw_name, raw_value = text[:midpoint], text[midpoint:]
    header = GATEWAY["_clean_http_header"](raw_name, raw_value)
    if header is not None:
        name, value = header
        assert name == raw_name and value == raw_value
        assert GATEWAY["_HTTP_FIELD_NAME_RE"].fullmatch(name)
        assert "\r" not in value and "\n" not in value

    correlation_id = GATEWAY["_safe_correlation_id"](text)
    if correlation_id is not None:
        assert correlation_id == text
        assert 1 <= len(correlation_id) <= 128
        assert GATEWAY["_CORRELATION_ID_RE"].fullmatch(correlation_id)


def main() -> None:
    corpus = [
        b"/v1/messages",
        b"//metadata",
        b"/%2525252e%2525252e/admin",
        b"/a\\b",
        b"x-request-id\r\nx-injected: yes",
        b"session-123:child",
    ]
    rng = random.Random(0xA9F00D)
    alphabet = (string.printable + "\x00\x7f\x80\xff").encode("latin-1")
    for _ in range(20_000):
        corpus.append(bytes(rng.choice(alphabet) for _ in range(rng.randrange(0, 257))))
    for item in corpus:
        check_boundaries(item)
    print("security-properties-ok")


if __name__ == "__main__":
    main()
