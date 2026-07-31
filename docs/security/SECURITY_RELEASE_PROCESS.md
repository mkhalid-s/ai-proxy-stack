# Security Release Process

Security releases use the normal versioned release helper and additional
private-advisory coordination.

1. Develop the fix privately when public disclosure would increase user risk.
2. Add regression coverage that contains no real credentials or captured data.
3. Review the threat model and all adjacent security boundaries.
4. Require complete CI on the exact release commit before a tag can be created.
5. Require tag-scoped security, build, checksum, SBOM, provenance, and install
   gates before publication.
6. Verify every published artifact and attestation independently.
7. Publish affected versions, impact, mitigation, upgrade instructions, and
   credential-rotation guidance.
8. Request a CVE through the private advisory when appropriate.

Never bypass a failing security check to meet a release date. A break-glass
bypass requires a documented incident, a second reviewer, and a follow-up
review of the bypass within one business day.
