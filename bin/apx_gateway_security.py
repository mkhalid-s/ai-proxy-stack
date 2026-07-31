"""Small, dependency-free trust-boundary validators used by apx-gateway."""

from __future__ import annotations

import re
from urllib.parse import unquote

_HTTP_FIELD_NAME_RE = re.compile(r"^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$")
_CORRELATION_ID_RE = re.compile(r"^[A-Za-z0-9._:-]{1,128}$")


def _clean_http_header(name: object, value: object) -> tuple[str, str] | None:
    """Return a CR/LF-free HTTP field or reject it without forwarding."""
    raw_name = str(name)
    raw_value = str(value)
    safe_name = re.sub(r"[^!#$%&'*+\-.^_`|~0-9A-Za-z]", "", raw_name)
    safe_value = raw_value.replace("\r", "").replace("\n", "")
    if (
        safe_name != raw_name
        or safe_value != raw_value
        or not _HTTP_FIELD_NAME_RE.fullmatch(safe_name)
    ):
        return None
    return safe_name, safe_value


def _safe_proxy_request_path(raw_path: str) -> str | None:
    """Keep proxy requests origin-relative and reject encoded traversal."""
    if not raw_path or not raw_path.startswith("/") or raw_path.startswith("//"):
        return None
    decoded = raw_path
    # Decode nested escapes to a fixed point. Reject excessive nesting after a
    # constant work bound instead of allowing it through or doing quadratic
    # work on an attacker-controlled request target.
    for _ in range(8):
        next_decoded = unquote(decoded)
        if next_decoded == decoded:
            break
        decoded = next_decoded
    else:
        return None
    path_only = decoded.split("?", 1)[0]
    if (
        path_only.startswith("//")
        or "\\" in path_only
        or any(ord(char) < 32 or ord(char) == 127 for char in decoded)
        or any(segment in {".", ".."} for segment in path_only.split("/"))
    ):
        return None
    return raw_path


def _safe_correlation_id(value: object) -> str | None:
    candidate = str(value)
    return candidate if _CORRELATION_ID_RE.fullmatch(candidate) else None
