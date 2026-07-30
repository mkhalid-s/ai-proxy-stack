# Security Policy

LeanRelay (`apx`) runs local proxies and can observe LLM request/response traffic.
Treat its logs and dashboards as sensitive.

## Reporting

Please use [GitHub's private security advisory form](https://github.com/mkhalid-s/lean-relay/security/advisories/new)
for vulnerabilities. Do not open a public issue for a vulnerability or include
credentials, request bodies, dashboard exports, or logs in a report. Include a
minimal reproduction, affected version (`apx version`), impact, and any safe
mitigation you found.

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
