# Security Test Matrix

| Threat | Current automated evidence | Planned extension |
| --- | --- | --- |
| TM-01 remote dashboard | Remote-bind refusal and API smoke | Authenticated remote-bind fixture |
| TM-02 token leakage | Strict cookie, clean redirect, referrer and redaction assertions | Browser referrer-policy coverage |
| TM-03 CSRF/native mutation | Native dashboard local-only checks | Origin and mutation matrix |
| TM-04 proxy escape | Optimizer fragment/redirect tests | Traversal and encoded-path fuzzing |
| TM-05 SSRF/config URL | Advisor loopback parsing tests | Scheme, credentials, IPv6 and metadata-host cases |
| TM-06 command injection | Managed command execution coverage | Metacharacter/property fixtures |
| TM-07 capture disclosure | Nested secret and truncation tests | Unicode, arrays and content-type corpus |
| TM-08 exhaustion | Request and stream caps | Concurrent/load bounds |
| TM-09 unsafe cleanup | Symlink and ownership tests | Hard-link and TOCTOU fixtures |
| TM-10 release compromise | Exact-SHA CI, checksums, SBOM and provenance workflow | Post-publication verification |
| TM-11 optimizer substitution | Ownership/source reporting | Resolved integrity manifest checks |
| TM-12 dependency compromise | CodeQL, dependency review, Gitleaks, npm audit and immutable Actions | Additional ecosystem coverage as dependencies grow |
| TM-13 invisible abuse | Secret-free structured authentication events | Bounded counters and rate-limit tests |
| TM-14 bundle disclosure | Seeded secret support-bundle test | Structured corpus and archive metadata checks |

Tests must use synthetic values, remain deterministic, and avoid printing body
content on failure.
