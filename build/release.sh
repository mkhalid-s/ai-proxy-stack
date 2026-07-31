#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

usage() {
  cat <<'EOF'
Usage: build/release.sh VERSION [--push] [--watch] [--skip-tests]
       build/release.sh --patch|--minor|--major [--push] [--watch] [--skip-tests]
       build/release.sh VERSION --finalize [--watch]

Prepare a LeanRelay/apx release PR from a clean main branch, or finalize its
merged commit after required checks pass.

Steps:
  1. Verify identity, branch, clean tree, and release tag availability.
  2. Move CHANGELOG.md [Unreleased] notes into VERSION's dated section.
  3. Update VERSION.
  4. Run release validations and build dist/apx.sh.
  5. Create release/vVERSION and commit "Release VERSION".
  6. With --push, push that branch and open a pull request.
  7. After review and merge, run --finalize to verify exact-SHA CI and security,
     create tag "vVERSION", and optionally watch release.yml.

Options:
  --patch|--minor|--major  Compute the next version from VERSION.
  --dry-run                Print intended actions without modifying files.
  --allow-empty-notes      Allow releasing with an empty Unreleased changelog.
  --skip-tests             Skip lifecycle tests; still runs syntax/package checks.
  --push                   Push the release branch and open its pull request.
  --finalize               On synchronized main, verify checks and push the tag.
  --watch                  Wait for PR checks or the gated release publication.

Identity defaults protect this repo's personal-account release flow:
  APX_RELEASE_GH_USER=mkhalid-s
  APX_RELEASE_EXPECT_EMAIL=mkhalid-s@users.noreply.github.com

Examples:
  build/release.sh --patch --push --watch
  build/release.sh 0.5.4 --finalize --watch
  build/release.sh 0.5.4 --dry-run
EOF
}

version=""
bump=""
push=0
watch=0
skip_tests=0
dry_run=0
allow_empty_notes=0
finalize=0
while [[ $# -gt 0 ]]; do
  case "$1" in
    --push) push=1 ;;
    --watch) watch=1 ;;
    --skip-tests) skip_tests=1 ;;
    --dry-run) dry_run=1 ;;
    --finalize) finalize=1 ;;
    --allow-empty-notes) allow_empty_notes=1 ;;
    --patch|--minor|--major)
      if [[ -n "$bump" || -n "$version" ]]; then
        echo "error: pass exactly one VERSION or one bump flag" >&2
        usage >&2
        exit 2
      fi
      bump="${1#--}"
      ;;
    -h|--help) usage; exit 0 ;;
    --*) echo "unknown option: $1" >&2; usage >&2; exit 2 ;;
    *)
      if [[ -n "$version" || -n "$bump" ]]; then
        echo "error: pass exactly one VERSION or one bump flag" >&2
        usage >&2
        exit 2
      fi
      version="$1"
      ;;
  esac
  shift
done

if [[ "$watch" == "1" && "$finalize" != "1" ]]; then
  push=1
fi

current_version="$(head -n 1 VERSION | tr -d '[:space:]')"
if [[ -n "$bump" ]]; then
  version="$(python3 - "$current_version" "$bump" <<'BUMP_PY'
import re
import sys
current, bump = sys.argv[1:3]
m = re.fullmatch(r"(\d+)\.(\d+)\.(\d+)(?:[+-][A-Za-z0-9.]+)?", current)
if not m:
    raise SystemExit(f"VERSION must be semver-like X.Y.Z to use --{bump}: {current}")
major, minor, patch = map(int, m.groups())
if bump == "patch":
    patch += 1
elif bump == "minor":
    minor += 1
    patch = 0
elif bump == "major":
    major += 1
    minor = 0
    patch = 0
else:
    raise SystemExit(f"unknown bump: {bump}")
print(f"{major}.{minor}.{patch}")
BUMP_PY
)"
fi

if [[ -z "$version" ]]; then
  usage >&2
  exit 2
fi
if [[ ! "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+([+-][A-Za-z0-9.]+)?$ ]]; then
  echo "error: VERSION must be semver-like X.Y.Z, got: $version" >&2
  exit 2
fi
if [[ "$version" == "$current_version" ]]; then
  if [[ "$finalize" != "1" ]]; then
    echo "error: target version is already current: $version" >&2
    exit 2
  fi
elif [[ "$finalize" == "1" ]]; then
  echo "error: --finalize expects VERSION to match the merged VERSION file ($current_version)" >&2
  exit 2
fi

if [[ "$finalize" == "1" && ( "$push" == "1" || "$dry_run" == "1" || "$skip_tests" == "1" || "$allow_empty_notes" == "1" ) ]]; then
  echo "error: --finalize cannot be combined with --push, --dry-run, --skip-tests, or --allow-empty-notes" >&2
  exit 2
fi

tag="v$version"
expected_email="${APX_RELEASE_EXPECT_EMAIL:-mkhalid-s@users.noreply.github.com}"
expected_gh_user="${APX_RELEASE_GH_USER:-mkhalid-s}"

current_branch="$(git symbolic-ref --quiet --short HEAD || true)"
if [[ "$current_branch" != "main" ]]; then
  echo "error: releases must be cut from main, current branch is: ${current_branch:-detached}" >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "error: working tree is dirty; commit or stash changes before cutting a release" >&2
  git status --short >&2
  exit 1
fi

commit_email="$(git config user.email || true)"
if [[ "$commit_email" != "$expected_email" ]]; then
  echo "error: git user.email is $commit_email, expected $expected_email" >&2
  echo "set APX_RELEASE_EXPECT_EMAIL to override intentionally" >&2
  exit 1
fi

if git rev-parse -q --verify "refs/tags/$tag" >/dev/null; then
  echo "error: local tag already exists: $tag" >&2
  exit 1
fi
if [[ ( "$push" == "1" || "$finalize" == "1" ) && "$dry_run" != "1" ]]; then
  if ! command -v gh >/dev/null 2>&1; then
    echo "error: --push requires GitHub CLI (gh)" >&2
    exit 1
  fi
  gh_login="$(env -u GH_TOKEN gh api user --jq .login 2>/dev/null || true)"
  if [[ "$gh_login" != "$expected_gh_user" ]]; then
    echo "error: active GitHub CLI account is ${gh_login:-unknown}, expected $expected_gh_user" >&2
    echo "run: env -u GH_TOKEN gh auth switch -u $expected_gh_user" >&2
    exit 1
  fi
  if git ls-remote --exit-code --tags origin "refs/tags/$tag" >/dev/null 2>&1; then
    echo "error: remote tag already exists: $tag" >&2
    exit 1
  fi
fi

wait_for_exact_workflow() {
  local workflow="$1" label="$2" sha="$3" run_id=""
  echo "[apx:release] waiting for $label on $sha"
  for _ in $(seq 1 60); do
    run_id="$(env -u GH_TOKEN gh run list --workflow "$workflow" --limit 40 \
      --json databaseId,event,headBranch,headSha \
      --jq ".[] | select(.event == \"push\" and .headBranch == \"main\" and .headSha == \"$sha\") | .databaseId" \
      | head -n 1)"
    [[ -n "$run_id" ]] && break
    sleep 5
  done
  if [[ -z "$run_id" ]]; then
    echo "error: $label did not appear for merged release commit $sha; tag was not created" >&2
    exit 1
  fi
  if ! env -u GH_TOKEN gh run watch "$run_id" --exit-status; then
    echo "error: $label failed for merged release commit $sha; tag was not created" >&2
    exit 1
  fi
  echo "[apx:release] $label passed for $sha"
}

if [[ "$finalize" == "1" ]]; then
  if ! git fetch --quiet origin main; then
    echo "error: could not refresh origin/main" >&2
    exit 1
  fi
  head_sha="$(git rev-parse HEAD)"
  remote_sha="$(git rev-parse origin/main)"
  if [[ "$head_sha" != "$remote_sha" ]]; then
    echo "error: local main is not synchronized with origin/main" >&2
    echo "  local:  $head_sha" >&2
    echo "  remote: $remote_sha" >&2
    exit 1
  fi
  if ! python3 - "$version" <<'FINALIZE_CHANGELOG_PY'
import re
import sys
from pathlib import Path

version = sys.argv[1]
text = Path("CHANGELOG.md").read_text()
if not re.search(rf"^## \[?v?{re.escape(version)}\]?(?:\s|$)", text, re.M):
    raise SystemExit(1)
FINALIZE_CHANGELOG_PY
  then
    echo "error: CHANGELOG.md has no release heading for $version" >&2
    exit 1
  fi
  wait_for_exact_workflow ci.yml "full CI" "$head_sha"
  wait_for_exact_workflow security.yml "security checks" "$head_sha"
  git -c tag.gpgSign=false tag "$tag"
  env -u GH_TOKEN git \
    -c credential.helper= \
    -c credential.helper='!gh auth git-credential' \
    push origin "$tag"
  echo "[apx:release] pushed $tag at $head_sha"

  if [[ "$watch" == "1" ]]; then
    run_id=""
    for _ in $(seq 1 30); do
      run_id="$(env -u GH_TOKEN gh run list --workflow release.yml --limit 10 --json databaseId,headBranch,headSha --jq ".[] | select(.headBranch == \"$tag\" and .headSha == \"$head_sha\") | .databaseId" | head -n 1)"
      [[ -n "$run_id" ]] && break
      sleep 5
    done
    if [[ -z "$run_id" ]]; then
      echo "error: release workflow did not appear for $tag" >&2
      exit 1
    fi
    env -u GH_TOKEN gh run watch "$run_id" --exit-status
    env -u GH_TOKEN gh release view "$tag" --json tagName,url,isDraft,isPrerelease,publishedAt,assets
  fi
  exit 0
fi

release_branch="release/$tag"
if [[ "$dry_run" != "1" ]]; then
  if git show-ref --verify --quiet "refs/heads/$release_branch"; then
    echo "error: local release branch already exists: $release_branch" >&2
    exit 1
  fi
  if [[ "$push" == "1" ]] && git ls-remote --exit-code --heads origin "refs/heads/$release_branch" >/dev/null 2>&1; then
    echo "error: remote release branch already exists: $release_branch" >&2
    exit 1
  fi
  git switch -c "$release_branch"
fi

changelog_action="promote"
[[ "$dry_run" == "1" ]] && changelog_action="check"
python3 - "$version" "$changelog_action" "$allow_empty_notes" <<'CHANGELOG_PY'
import datetime
import re
import sys
from pathlib import Path

version, action, allow_empty = sys.argv[1], sys.argv[2], sys.argv[3] == "1"
root = Path.cwd()
path = root / "CHANGELOG.md"
text = path.read_text()
marker = "## [Unreleased]"
if marker not in text:
    raise SystemExit("CHANGELOG.md missing ## [Unreleased]")
match = re.search(r"^## \[Unreleased\]\n(?P<body>.*?)(?=^## \[)", text, re.M | re.S)
if not match:
    raise SystemExit("could not parse CHANGELOG.md Unreleased section")
body = match.group("body").strip()
if not body and not allow_empty:
    raise SystemExit("CHANGELOG.md Unreleased section is empty; add notes or pass --allow-empty-notes")
if re.search(rf"^## \[{re.escape(version)}\](?:\s|$)", text, re.M):
    raise SystemExit(f"CHANGELOG.md already contains release section for {version}")
if action == "check":
    print(f"[apx:release] changelog: {'non-empty' if body else 'empty allowed'} Unreleased section")
    raise SystemExit(0)
date = datetime.date.today().isoformat()
release_heading = f"## [{version}] - {date}"
if body:
    replacement = f"## [Unreleased]\n\n{release_heading}\n\n{body}\n\n"
else:
    replacement = f"## [Unreleased]\n\n{release_heading}\n\n"
text = text[:match.start()] + replacement + text[match.end():]
path.write_text(text)
(root / "VERSION").write_text(version + "\n")
CHANGELOG_PY

if [[ "$dry_run" == "1" ]]; then
  echo "[apx:release] dry run"
  echo "  version:      $current_version -> $version"
  echo "  changelog:    promote Unreleased to [$version]"
  echo "  branch:       release/$tag"
  echo "  commit:       Release $version"
  echo "  tag:          created later by --finalize"
  if [[ "$push" == "1" ]]; then
    echo "  push:         origin release/$tag and open a pull request"
  else
    echo "  push:         no"
  fi
  exit 0
fi

run_validations() {
  bash -n bin/apx get.sh bootstrap.sh install.sh tests/lifecycle.sh build/pack.sh build/header.sh build/release.sh
  python3 -m py_compile bin/apx-gateway tests/security_properties.py fuzz/gateway_boundaries_fuzzer.py
  python3 tests/security_properties.py
  git diff --check
  if command -v shellcheck >/dev/null 2>&1; then
    shellcheck --severity=warning install.sh bootstrap.sh get.sh bin/apx bin/apx-squeezr build/pack.sh build/header.sh tests/lifecycle.sh build/release.sh
  else
    echo "[apx:release] shellcheck not installed locally; release workflow will run it" >&2
  fi
  if [[ "$skip_tests" != "1" ]]; then
    unset FAKE_HOME
    bash tests/lifecycle.sh
  fi
  bash build/pack.sh
  embedded="$(bash dist/apx.sh --print-version)"
  if [[ "$embedded" != "$version" ]]; then
    echo "error: dist/apx.sh version $embedded does not match $version" >&2
    exit 1
  fi
  (cd dist && shasum -a 256 -c apx.sh.sha256)
  tmp="$(mktemp -d "${TMPDIR:-/tmp}/apx-release-${version}.XXXXXX")"
  trap 'rm -rf "$tmp"' RETURN
  bash dist/apx.sh --extract-to "$tmp" >/dev/null
  extracted="$(head -n 1 "$tmp/VERSION" | tr -d '[:space:]')"
  if [[ "$extracted" != "$version" ]]; then
    echo "error: extracted VERSION $extracted does not match $version" >&2
    exit 1
  fi
  bash -n "$tmp/bin/apx" "$tmp/bin/apx-squeezr" "$tmp/install.sh"
}

run_validations

git add VERSION CHANGELOG.md
git -c commit.gpgsign=false commit -m "Release $version"
head_sha="$(git rev-parse HEAD)"

echo "[apx:release] prepared release commit at $(git rev-parse --short HEAD)"

if [[ "$push" == "1" ]]; then
  env -u GH_TOKEN git \
    -c credential.helper= \
    -c credential.helper='!gh auth git-credential' \
    push --set-upstream origin "$release_branch"
  pr_url="$(env -u GH_TOKEN gh pr create \
    --base main \
    --head "$release_branch" \
    --title "Release $version" \
    --body "Prepare LeanRelay/apx $tag. After approval, required checks, and merge, finalize with: \`build/release.sh $version --finalize --watch\`")"
  echo "[apx:release] opened release PR: $pr_url"
  if [[ "$watch" == "1" ]]; then
    env -u GH_TOKEN gh pr checks "$release_branch" --watch --fail-fast
  fi
else
  echo "[apx:release] release commit is on $release_branch; inspect it before pushing"
fi
