# Runtime Security Events

Gateway security events use the existing timestamped log stream and contain a
`security_event` marker followed by compact JSON. They never include request or
response bodies, authorization values, cookies, or dashboard tokens.

Currently emitted:

| Code | Meaning | Operator response |
| --- | --- | --- |
| `dashboard_auth_failed` | A protected dashboard or API request did not provide a valid token. | Confirm the client, review bind exposure, and rotate the dashboard token if failures are unexpected or sustained. |

Startup refusal for an unauthenticated non-loopback dashboard, request-size
rejections, unsafe cleanup paths, and release verification failures are also
security-relevant, but their existing messages have not yet been migrated to
the structured event format.

Forward only metadata-only gateway logs to organizational logging. Apply
retention and access controls appropriate for developer activity metadata.
