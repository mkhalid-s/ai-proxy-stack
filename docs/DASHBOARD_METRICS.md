# Dashboard metrics guide

Start with `apx status`, then open the dashboard URL from `apx urls`. Select a
time window before comparing any number.

## What belongs on the dashboard

The dashboard is intentionally a focused decision surface, not an operations
console. Read it in this order:

1. **Needs Attention**: outages, health transitions, missing measurement
   coverage, and observational regression flags.
2. **Token efficiency**: observed tokens processed, verified tokens saved, and
   the proportion of optimizer attempts with evidence.
3. **Gateway and optimizer health**: enough context to decide whether the
   savings data is trustworthy.
4. **Token flow and savings evidence**: trend context, with verified and
   estimated savings kept separate.

For diagnosis, use `apx status`, `apx doctor`, `apx logs <service>`, and
`apx support-bundle`. Those tools are better suited to operational detail than
a crowded browser page.

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
