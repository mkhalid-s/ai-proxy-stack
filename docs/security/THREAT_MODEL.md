# LeanRelay Threat Model

Status: initial organizational baseline. Review when authentication, network
binding, proxy routing, optimizer execution, capture, installation, update, or
release behavior changes.

## Scope and security objectives

LeanRelay is a local Anthropic-compatible gateway that may route requests
through independently released optimizers. It must protect provider
credentials and LLM traffic, prevent unauthorized dashboard access, avoid
executing or deleting outside explicit ownership boundaries, and deliver
verifiable releases.

Availability of third-party providers and the internal correctness of external
optimizers are outside LeanRelay's control. LeanRelay must nevertheless fail
clearly and avoid widening their access.

## Assets

- Provider API keys and dashboard authentication tokens.
- Prompts, responses, tool calls, request metadata, and token measurements.
- `config.env`, runtime state, metrics SQLite database, logs, and support
  bundles.
- The `apx`, gateway, and Squeezr helper executables.
- Optimizer commands, packages, resolved versions, source metadata, and
  ownership records.
- GitHub source, workflows, tags, checksums, SBOMs, and release artifacts.
- Advisory policy, checksums, provenance attestations, cached policy, and
  configuration-ownership metadata.

## Trust boundaries

```text
Claude/client
    |
    v
APX gateway -----> dashboard browser
    |
    +-----> zero or more optimizer processes -----> provider API

Local filesystem <---- config, metrics, logs, binaries, manifests
GitHub/npm/PyPI  ----> release installer and optimizer acquisition
```

The client-to-gateway, browser-to-dashboard, gateway-to-optimizer,
optimizer-to-provider, process-to-filesystem, and release-channel transitions
are separate trust boundaries. `external` optimizers are not controlled by APX.

## Attacker profiles

- A remote network peer able to reach a non-loopback gateway bind.
- Malicious web content attempting browser requests against a local dashboard.
- A local unprivileged process reading state or manipulating paths.
- A compromised dependency, optimizer registry account, GitHub Action, or
  release credential.
- A contributor attempting command, workflow, proxy, or log injection.
- An operator making an unsafe configuration or sharing a sensitive bundle.

## Risk register

| ID | Threat | Initial risk | Required control and verification |
| --- | --- | --- | --- |
| TM-01 | Remote dashboard access without authentication | Critical | Refuse non-loopback dashboard startup without a token; CI negative test. |
| TM-02 | Token leakage through URL, logs, or referrer | High | Exchange query token for HttpOnly/SameSite cookie, redirect to a clean URL, redact logs, set restrictive referrer policy; browser/API tests. |
| TM-03 | CSRF against native optimizer mutations | High | Keep native dashboards local-only, require dashboard authentication, validate proxied mutation behavior and origin assumptions. |
| TM-04 | Proxy path/redirect rewriting escapes its optimizer prefix | High | Canonicalize routes and rewrite HTML, headers, and fragments; traversal and redirect tests. |
| TM-05 | SSRF through configurable upstream URLs | High | Treat arbitrary upstreams as explicit operator authority, warn on insecure remote HTTP, reject malformed schemes, never derive privileged metadata endpoints. |
| TM-06 | Command injection through configurable optimizer commands | Critical | Parse managed defaults without a login shell, quote persisted values, distinguish explicit user commands, and test shell metacharacters. |
| TM-07 | Prompt or credential disclosure through capture/logging | Critical | Metadata default, explicit full-capture acknowledgement, recursive redaction before truncation, restrictive permissions, adversarial fixtures. |
| TM-08 | Resource exhaustion through requests, streams, or metrics growth | High | Body/stream caps, retention, bounded queries, timeouts, and load-oriented negative tests. |
| TM-09 | Unsafe cleanup follows symlinks or deletes user-owned tools | Critical | Manifest-based ownership, canonical-path containment, external ownership preservation, symlink/race tests. |
| TM-10 | Compromised release or updater artifact | Critical | Exact-SHA CI, checksums, immutable Action pins, SBOM and provenance attestations, post-publication verification. |
| TM-11 | Malicious or substituted optimizer package | Critical | Record source, requested/resolved version and integrity when available; preserve external ownership; surface unverifiable acquisition. |
| TM-12 | Dependency or GitHub Action compromise | High | Dependency review, CodeQL, secret scan, pinned Action SHAs, scheduled updates, minimal workflow permissions. |
| TM-13 | Authentication brute force or reconnaissance is invisible | Moderate | Structured secret-free security events, bounded counters, rate limiting, and operator guidance. |
| TM-14 | Support bundle exposes secrets or captured traffic | High | Metadata-only collection, layered redaction, explicit inspection warning, seeded secret regression test. |
| TM-15 | A malicious, stale, or substituted advisory changes user configuration | High | Strict data-only schema, checksum and expiry validation, rollback refusal, bounded downloads, atomic last-known-good cache, compiled-in remediation allowlist, and no automatic remote actions. |

## Existing controls

- Loopback defaults and refusal of an unauthenticated remote dashboard.
- Dashboard bearer/cookie authentication with clean-URL redirect behavior.
- Request-size and event-stream limits.
- Metadata capture by default and recursive secret redaction.
- Restrictive config, metrics, and history permissions.
- Optimizer ownership reporting and preservation of external installations.
- Manifest-backed, containment-checked purge behavior.
- Checksum-verified release installs and exact-commit/tag CI release gates.
- A separately gated advisory policy with CODEOWNERS review, schema/checksum
  validation, GitHub provenance attestations, and local-only evaluation.

## Residual risks and decisions

- An explicitly configured upstream or custom optimizer command is operator
  authority. APX warns and records configuration but cannot prove that endpoint
  or executable is trustworthy.
- Third-party optimizer dashboards have independent authentication and CSRF
  properties. APX restricts their proxy exposure but does not certify them.
- Checksums fetched from the same release channel detect corruption but not a
  fully compromised publisher. Provenance attestations and protected release
  approval reduce, but do not eliminate, that risk.
- Advisory checksums fetched beside the policy do not protect against a fully
  compromised repository. The client therefore treats remote policy as
  non-executable advice, rejects unknown actions and fields, and never applies
  remote configuration changes automatically. Published attestations provide
  an independent audit signal but are not currently a mandatory runtime
  dependency.
- A process running as the same operating-system user can generally access that
  user's local state. Filesystem permissions primarily protect against other
  users and accidental disclosure.

## Review requirements

Every high or critical risk must map to an automated negative test or an
explicitly accepted residual-risk entry. Security-boundary changes require a
CODEOWNERS review. Reassess this document at least annually and after a security
incident.
