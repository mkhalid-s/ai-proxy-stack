# Security Incident Response

This playbook covers suspected compromise of LeanRelay source, releases,
optimizer acquisition, credentials, dashboard access, or locally persisted LLM
traffic.

## Priorities

1. Protect users and preserve evidence without copying prompts or credentials.
2. Stop unsafe distribution or access.
3. Determine affected versions, artifacts, and trust boundaries.
4. Provide a safe mitigation and coordinated disclosure.

## Triage

- Open a private GitHub security advisory and assign an incident lead.
- Record timestamps, affected versions, commit and artifact digests, and the
  reporter's safe reproduction. Never paste live provider keys or request
  bodies into the incident record.
- Classify the incident using the severity targets in `SECURITY.md`.
- Identify whether it affects the gateway, dashboard, filesystem, installer,
  release channel, or a third-party optimizer.

## Containment

- Release compromise: stop publication, mark the affected release, rotate
  release credentials, and preserve workflow and attestation evidence.
- Credential exposure: revoke the credential at its provider before collecting
  additional diagnostics.
- Dashboard exposure: bind to loopback, set `APX_DASHBOARD_TOKEN`, restart, and
  review metadata-only logs.
- Optimizer compromise: disable the optimizer, preserve its resolved source and
  version metadata, and use a direct chain until reviewed.
- Local data exposure: stop the gateway, restrict state/config permissions, and
  avoid sharing the database or logs.

## Eradication and recovery

- Add a failing regression test before the fix when safe.
- Review adjacent trust boundaries, not only the reported line of code.
- Cut a patch release through the complete CI and release-security gates.
- Verify checksums, provenance, SBOM, clean installation, update, and rollback.
- Tell users exactly which versions are affected and how to rotate exposed
  credentials or remove sensitive local state.

## Closure

Document root cause, detection gap, affected versions, timeline, remediation,
residual risk, and follow-up owner. Review this playbook after every incident or
at least annually.
