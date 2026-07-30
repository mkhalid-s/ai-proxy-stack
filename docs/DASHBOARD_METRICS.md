# Dashboard metrics guide

Start with `apx status`, then open the dashboard URL from `apx urls`. Select a
time window before comparing any number.

## Read the dashboard in this order

1. **Needs Attention**: outages, health transitions, missing measurement
   coverage, and observational regression flags.
2. **Token Consumption & Verified Savings**: observed usage and only savings
   supported by request-level evidence.
3. **Optimizer Measurement Coverage**: why a savings total is measured,
   estimated, or unavailable.
4. **Chain / model comparisons**: investigate a flag with like-for-like
   workloads; aggregate traffic does not prove causality.

## Savings confidence

`measured` requires explicit optimizer before/after input-token counts.
`estimated` remains separate. `unavailable` means no conclusion can be drawn;
apx does not manufacture savings from aggregate request traffic.

## Persistence and privacy

Request metadata, sessions, optimizer attempts, service events, and optimizer
health snapshots are local SQLite/JSONL data and survive restarts, subject to
`APX_METRICS_RETENTION_DAYS`. Metadata capture does not retain request or
response bodies. Full capture requires its explicit acknowledgment; see the
README security section before enabling it.
