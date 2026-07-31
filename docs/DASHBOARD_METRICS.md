# Dashboard metrics guide

Start with `apx status`, then open the dashboard URL from `apx urls`. Select a
time window before comparing any number.

## What belongs on the dashboard

The dashboard is intentionally a focused decision surface, not an operations
console. It uses three views so first-time users are not presented with every
detail at once:

1. **Overview — Outcome**: observed tokens processed, verified input saved,
   verified input reduction, and request health.
2. **Overview — Verified input journey**: the conservative pre-optimization
   baseline, actual input sent to the model, verified input removed, and
   measurement coverage in one explanation.
3. **Overview — Needs Attention**: a compact first signal with optional
   expansion for outages, missing measurements, and regression flags. Critical
   signals are ranked first even if an upstream response arrives unsorted.
4. **Overview — Trends**: token flow and verified-versus-estimated savings,
   kept separate, with exact window totals stated above each chart.
5. **Optimizers**: one card per optimizer combining window-scoped verified
   contribution, native aggregate counters, reachability, measurement
   coverage, latency, bypasses, cost savings when reported, and the native
   dashboard link.
6. **Activity**: local history size, top models, and recent sessions—including
   session-level verified savings—confirm what SQLite retained across restarts.

For diagnosis, use `apx status`, `apx doctor`, `apx logs <service>`, and
`apx support-bundle`. Those tools are better suited to operational detail than
a crowded browser page.

Each reachable optimizer row links to its native specialist dashboard:
Headroom at `/proxy/headroom`, pxpipe at `/proxy/pxpipe/`, and Squeezr at
`/proxy/squeezr/`. These open in a separate tab while LeanRelay remains the
cross-optimizer summary. Because those pages execute third-party frontend
code, their links and proxy routes are available only on local dashboard hosts.

## Token units

Token cards always show the literal `tokens` unit; they do not use an unlabeled
number or an implicit thousands suffix. **Tokens processed** is the observed
input-token count plus output-token count for gateway requests in the selected
window. For example, `1,500 tokens` can mean 1,200 input plus 300 output
tokens—it does not mean 1,500 requests or 1,500K tokens.

**Verified input saved** counts input tokens removed by optimizers only when a
request supplies consistent before/after token measurements. For example,
`300 tokens` means exactly 300 measured input tokens removed, not 300 requests
and not 300K tokens.

The **Verified input journey** uses:

```text
verified baseline input = observed input sent + verified input removed
verified input reduction = verified input removed / verified baseline input
```

This is deliberately conservative when evidence coverage is incomplete.
**Evidence coverage** is not a savings rate: it is the proportion of optimizer
attempts that supplied valid before/after counts.

## Savings confidence

`measured` requires explicit optimizer before/after input-token counts. If an
optimizer also supplies `tokens_saved`, it must equal the before/after delta.
Inconsistent or incomplete claims become `unavailable`. `estimated` remains
separate; apx does not manufacture savings from aggregate request traffic.

Headroom, pxpipe, and Squeezr also expose native aggregate savings counters.
The dashboard labels these as **optimizer-reported** because their scope and
measurement methods differ from apx's request-level verified evidence. Do not
add the two categories together.

## Persistence and privacy

Request metadata, sessions, optimizer attempts, service events, and optimizer
health snapshots are local SQLite/JSONL data and survive restarts, subject to
`APX_METRICS_RETENTION_DAYS`. Metadata capture does not retain request or
response bodies. Full capture requires its explicit acknowledgment; see the
README security section before enabling it.

The dashboard time-window selection is stored only in that browser's local
storage. It survives reloads but is not part of the metrics database.
