# Contributing

Thanks for improving LeanRelay (`apx`).

## Development

Run these checks before sending changes:

```bash
bash -n install.sh
bash -n bootstrap.sh
bash -n bin/apx
bash -n bin/apx-squeezr
python3 -c "import ast; ast.parse(open('bin/apx-gateway').read())"
./install.sh --check-only
./tests/dashboard.sh
./tests/lifecycle.sh
(cd dashboard && npm run check && npm run build)
```

Keep scripts portable:

- Do not commit user-specific absolute paths.
- Do not commit runtime logs, PID files, or generated LaunchAgent output.
- Keep dependency installation explicit and visible to the user.
- Preserve external optimizer ownership: installer or update changes must not
  install, upgrade, remove, or rewrite an externally configured optimizer.
- Treat package-version changes as compatibility changes: update defaults,
  installer fallback coverage, release notes, and dashboard telemetry only
  after verifying the package executable and supported Node/Python versions.
- Update first-time-user documentation when changing a command, persistence,
  dashboard metric, ownership label, or security boundary.
- Preserve the `apx`, `apx-gateway`, and `apx-squeezr` command names; legacy
  `ai-proxy-stack*` shims are not installed.

## Releasing

Versions are tracked in the top-level `VERSION` file (semver `MAJOR.MINOR.PATCH`).
Existing installs read this at install time and expose it as `apx version`.

Use the release helper from a clean `main` branch:

```bash
# Prepare the VERSION/changelog release commit and vX.Y.Z tag locally.
build/release.sh 0.5.3

# Publish and wait for the GitHub Release workflow.
build/release.sh 0.5.3 --push --watch
```

The helper verifies the personal release identity by default:

- Git commit email: `mkhalid-s@users.noreply.github.com`
- GitHub CLI account for `--push`: `mkhalid-s`

Override intentionally with `APX_RELEASE_EXPECT_EMAIL` and
`APX_RELEASE_GH_USER` only when cutting a release from another authorized
personal account. The script commits `Release X.Y.Z` and creates the matching
`vX.Y.Z` tag without adding co-author/footer lines.

The `.github/workflows/release.yml` workflow verifies the tag matches
`VERSION`, runs lint/smoke checks, builds release artifacts with sha256
checksums, and publishes a GitHub Release.

Existing users pick up the new version by running `apx update`.

## Security

Do not include API keys, provider tokens, local credentials, or private logs in
issues or pull requests. Report vulnerabilities through the private process in
[SECURITY.md](SECURITY.md), not in a public issue.
