# Security Policy

LeanRelay (`apx`) runs local proxies and can observe LLM request/response traffic.
Treat its logs and dashboards as sensitive.

## Reporting

Please use [GitHub's private security advisory form](https://github.com/mkhalid-s/lean-relay/security/advisories/new)
for vulnerabilities. Do not open a public issue for a vulnerability or include
credentials, request bodies, dashboard exports, or logs in a report. Include a
minimal reproduction, affected version (`apx version`), impact, and any safe
mitigation you found.

Do not send vulnerability details to a personal email address. If GitHub's
private advisory form is unavailable, open a public issue containing only the
words "private security contact required" and no technical details or secrets.

## Supported Versions

The latest published release receives security fixes. The immediately previous
minor release may receive a critical fix for 30 days after it is superseded.
Older releases are unsupported and should be upgraded with `apx update`.

## Response Targets

These are maintainer response targets, not guarantees:

| Severity | Initial response | Mitigation or plan |
| --- | --- | --- |
| Critical | 1 business day | 3 calendar days |
| High | 2 business days | 7 calendar days |
| Moderate | 5 business days | 30 calendar days |
| Low | 10 business days | Next appropriate release |

Severity considers confidentiality of prompts and credentials, remote code
execution, authentication bypass, release-channel compromise, and destructive
filesystem behavior. Maintainers coordinate disclosure and assign a CVE when
appropriate. Security releases follow
[`docs/security/SECURITY_RELEASE_PROCESS.md`](docs/security/SECURITY_RELEASE_PROCESS.md).

## Operational Notes

- Bind to `127.0.0.1` unless you intentionally need remote access. The LeanRelay
  dashboard at `http://127.0.0.1:8787/` exposes request history and log tails;
  do not expose the gateway port to a public network. For a remote bind, set a
  strong `APX_DASHBOARD_TOKEN`; native third-party dashboards remain hidden.
- The dashboard token may be supplied once in a URL to establish an HttpOnly
  cookie. Do not paste token-bearing URLs into tickets, shell history, or chat.
- Metadata capture stores request metadata locally. Full capture additionally
  stores truncated, redacted bodies and requires `APX_CAPTURE_FULL_ACK`; use it
  only for local debugging and set a suitable `APX_METRICS_RETENTION_DAYS`.
- `apx support-bundle` is designed to redact configuration values and log
  secrets, but inspect any artifact before sharing it outside your environment.
- Review any third-party dependencies before installing them.
- `apx optimizer` reports ownership before optimizer changes. Never change an
  `external` optimizer through apx; use only explicit dry-run reconciliation
  for an `apx-managed` optimizer.
- Do not publish `~/.local/state/apx`, `~/.pxpipe`, `~/.headroom`, or
  `~/.squeezr` logs/caches.
- Do not commit API keys or provider tokens.

## Security Boundaries

LeanRelay protects its own gateway, dashboard, local state, installer, and
release artifacts. Third-party optimizers and providers remain separate trust
domains. An optimizer marked `external` is administered by its owner, while an
`apx-managed` optimizer is governed by the recorded source and version policy.
See [`docs/security/THREAT_MODEL.md`](docs/security/THREAT_MODEL.md) for the
system boundaries and accepted residual risks.
