# Security Release Process

Security releases use the normal versioned release helper and additional
private-advisory coordination.

1. Develop the fix privately when public disclosure would increase user risk.
2. Add regression coverage that contains no real credentials or captured data.
3. Review the threat model and all adjacent security boundaries.
4. Prepare the version and changelog on `release/vVERSION`, open a pull request,
   and require an independent approval, CODEOWNERS review, resolved threads, and
   every protected-branch check before merge. Release tooling must never push a
   version commit directly to `main`.
5. From a clean local `main` synchronized to `origin/main`, run
   `build/release.sh VERSION --finalize --watch`. Finalization verifies complete
   CI and security runs for that exact merged SHA before creating the tag.
6. Require tag-scoped security, build, checksum, SBOM, provenance, and install
   gates before publication.
7. Verify every published artifact and attestation independently.
8. Publish affected versions, impact, mitigation, upgrade instructions, and
   credential-rotation guidance.
9. Request a CVE through the private advisory when appropriate.

Never bypass a failing security check to meet a release date. A break-glass
bypass requires a documented incident, a second reviewer, and a follow-up
review of the bypass within one business day.
