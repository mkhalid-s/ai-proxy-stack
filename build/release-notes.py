#!/usr/bin/env python3
"""Extract one version's curated GitHub Release notes from CHANGELOG.md."""

from __future__ import annotations

import re
import sys
from pathlib import Path


def extract_release_notes(changelog: str, version: str) -> str:
    heading = re.compile(rf"^## \[{re.escape(version)}\](?:\s+-\s+.*)?$", re.MULTILINE)
    match = heading.search(changelog)
    if match is None:
        raise ValueError(f"CHANGELOG.md has no section for {version}")

    next_heading = re.search(r"^## \[", changelog[match.end() :], re.MULTILINE)
    end = match.end() + next_heading.start() if next_heading else len(changelog)
    notes = changelog[match.start() : end].strip()
    if not re.search(r"^###\s+", notes, re.MULTILINE):
        raise ValueError(f"CHANGELOG.md section for {version} has no release notes")
    return notes + "\n"


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: release-notes.py VERSION CHANGELOG")
    version, path = sys.argv[1], Path(sys.argv[2])
    try:
        sys.stdout.write(extract_release_notes(path.read_text(), version))
    except ValueError as exc:
        raise SystemExit(str(exc)) from exc


if __name__ == "__main__":
    main()
