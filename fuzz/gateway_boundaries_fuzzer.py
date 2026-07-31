#!/usr/bin/env python3
"""Atheris target for gateway request/response trust boundaries."""

from __future__ import annotations

import os
import sys

import atheris

with atheris.instrument_imports():
    bundle_root = getattr(sys, "_MEIPASS", os.path.dirname(os.path.dirname(__file__)))
    sys.path.insert(0, bundle_root)
    from tests.security_properties import check_boundaries


def TestOneInput(data: bytes) -> None:  # noqa: N802 - Atheris convention
    check_boundaries(data)


def main() -> None:
    atheris.Setup(sys.argv, TestOneInput)
    atheris.Fuzz()


if __name__ == "__main__":
    main()
