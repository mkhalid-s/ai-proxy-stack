# LeanRelay

**Local context-efficiency platform for LLMs — operated through the `apx` CLI.**

LeanRelay is a cross-platform orchestration and observability layer for local AI
proxies and context optimizers.
It gives Claude Code one durable base URL while allowing you to switch between
Headroom, pxpipe, Squeezr, direct provider access, or an ordered custom chain.
The proxy runtime can also run inside Linux/devcontainers without macOS
LaunchAgent management.

```text
Claude Code -> apx Gateway :8787 -> optional local optimizers -> upstream API
```

Claude Code always talks to the Gateway. Modes and chains change what happens
after the Gateway, so the client base URL remains stable.

> **LeanRelay** is the project name. The CLI, gateway, and Squeezr helper are
> `apx`, `apx-gateway`, and `apx-squeezr`.

## Why LeanRelay Exists

Local context and token-optimization proxies are useful, but operating several
of them independently creates recurring problems:

- every tool wants a different port, process lifecycle, configuration, and dashboard
- changing tools often requires editing and restarting Claude Code
- chained proxies can silently point at the wrong next hop
- comparing savings, latency, cache behavior, and errors across tools is difficult
- experimental installs leave caches, processes, settings, and binaries behind
- upgrades can break a working setup without a simple rollback path

LeanRelay was created to make those experiments repeatable. It centralizes routing,
service supervision, health checks, configuration, metrics, upgrades,
rollbacks, and uninstall safety while leaving each optimizer responsible for
its own transformation logic.

## What LeanRelay Does

- exposes a stable Anthropic-compatible Gateway on `127.0.0.1:8787`
- starts and supervises enabled local proxy services
- compiles named modes and freeform chains into explicit per-hop target URLs
- switches chains without changing Claude Code's base URL
- records local request metadata, latency, token, cache, cost-estimate, and session metrics
- aggregates supported Headroom, pxpipe, and Squeezr APIs into one dashboard
- provides versioned release installs, atomic switching, rollback, and cleanup
- supports manifest-backed, opt-in removal of dependencies and caches installed by apx
- protects full request/response capture behind an explicit acknowledgement

LeanRelay does **not** implement Headroom, pxpipe, or Squeezr compression algorithms.
It orchestrates those independent projects and normalizes selected operational
data from their APIs.

## Common Uses

- compare direct, Headroom, pxpipe, and Squeezr behavior on the same workload
- test different proxy orderings without repeatedly editing Claude settings
- keep one host Gateway available to Claude Code running inside a devcontainer
- inspect request/session latency, token usage, cache activity, and error rates
- run a local proxy stack through launchd and recover it after process failure
- pin, upgrade, roll back, or remove the complete apx stack predictably
- diagnose whether a failure originates in the Gateway, a local optimizer, or the final upstream

## Benefits

- **Stable client configuration:** one Claude Code base URL regardless of chain.
- **Reproducible experiments:** explicit modes, versions, ports, and target URLs.
- **Operational visibility:** health, logs, sessions, comparisons, and local metrics.
- **Safer lifecycle:** checksummed releases, retained prior versions, dry runs,
  guarded uninstall paths, and opt-in external cleanup.
- **Local-first control:** metadata and metrics remain on your machine by
  default; body capture is disabled unless explicitly enabled.
- **Low runtime complexity:** the Gateway uses Python's standard library and
  SQLite; the dashboard is vanilla HTML/CSS/JavaScript with no CDN or build step.

## Architecture

```text
Claude Code / compatible client
             |
             v
      apx-gateway :8787
             |
             +--> direct upstream
             |
             +--> Headroom :8788
             |
             +--> pxpipe :47821
             |
             +--> Squeezr :18780
             |
             `--> ordered combinations of the above
```

The Gateway is the stable ingress, metrics recorder, dashboard server, and
request-correlation point. `apx` is the lifecycle/configuration CLI and
supervisor. Third-party optimizers remain separate processes with their own
upstream projects, APIs, data formats, and release cycles.

## Platform Scope

- **macOS host:** launchd-managed user service.
- **Linux/devcontainer runtime:** first-class systemd-user, nohup fallback, and
  foreground `apx run` lifecycle backends.
- **Devcontainer using host apx:** use
  `http://host.docker.internal:8787`.
- **Same-machine client and apx:** use `http://127.0.0.1:8787`.

## Contents

- [Quick Install](#quick-install)
- [Linux and Devcontainers](docs/DEVCONTAINER.md)
- [Dashboard](#dashboard)
- [Updating](#updating)
- [First Session Guide](#first-session-guide)
- [Claude Code Setting](#claude-code-setting)
- [Modes and Chains](#modes-and-chains)
- [Upstream Target](#upstream-target)
- [Operations](#operations)
- [Runtime Layout](#runtime-layout)
- [Third-Party Projects and Credits](#third-party-projects-and-credits)
- [Limitations](#limitations)
- [Security and Privacy](#security-and-privacy)
- [Disclaimer](#disclaimer)
- [License](#license)

## Quick Install

LeanRelay ships as a self-contained `apx` release. Pick whichever install path
matches how you work.

## First Session Guide

After installation, this is the shortest safe path from “it started” to
understanding what it is doing:

```bash
apx status                 # confirm Gateway and selected optimizers are healthy
apx urls                   # print the local dashboard URL
apx optimizer              # see source and ownership before changing an optimizer
```

Open the dashboard, make a few normal model requests, then choose a time
window. Start with **Needs Attention**: it tells you whether an optimizer is
unreachable, telemetry is incomplete, or a traffic comparison needs review.
Then use **Token Consumption & Verified Savings** and **Optimizer Measurement
Coverage**. Do not treat an empty savings value as zero savings—it usually
means the optimizer did not supply per-request measurements.

Use these safe controls for common changes; they persist through service
restart and supported service backends:

```bash
apx pxpipe models set off                 # retain pxpipe, disable image conversion
apx headroom settings set tool-search off # change one safe Headroom feature
apx squeezr bypass on                     # bypass Squeezr compression temporarily
```

### What survives a restart?

| Item | Persists? | Where / how to change it |
| --- | --- | --- |
| Chain, targets, ports, pxpipe models, Headroom settings | Yes | `~/.config/apx/config.env` or the `apx` commands above |
| Squeezr bypass | Yes | Squeezr's own state; use `apx squeezr bypass` |
| Request history, sessions, optimizer attempts, health snapshots | Yes | Local SQLite/JSONL; controlled by metrics retention |
| Dashboard window and selected request/session | Yes | Browser local storage |
| Dashboard model chips and live charts | No | Runtime/UI state; refresh or service restart can reset them |

### When should I trust a savings number?

| Label | Meaning | Safe interpretation |
| --- | --- | --- |
| `measured` | Adapter supplied explicit before/after input tokens | Suitable for a verified savings total |
| `estimated` | Adapter supplied an estimate | Useful context; keep separate from verified totals |
| `unavailable` | No complete per-request measurement arrived | Do not infer savings from aggregate traffic |

Chain and model comparisons are observational: they compare aggregate traffic
in the same window, but cannot prove an optimizer caused a latency, cost, or
error-rate change. Compare like-for-like workloads before changing a chain.

### Release mode (single-file installer, no git required)

**One-liner** (fetches `apx.sh`, verifies its SHA-256 against the checksum published in the same release, then runs it):

```bash
curl -fsSL https://github.com/mkhalid-s/lean-relay/releases/latest/download/get.sh | bash
```

Interactive installs ask where Claude Code runs before writing
`ANTHROPIC_BASE_URL`. For noninteractive installs, choose explicitly:

```bash
# apx and Claude Code run on the same host/container
curl -fsSL https://.../get.sh | APX_CLIENT_TOPOLOGY=local bash

# apx runs on the host; Claude Code runs in a Docker Desktop devcontainer
curl -fsSL https://.../get.sh | APX_CLIENT_TOPOLOGY=docker-host bash

# preserve Claude settings and configure later
curl -fsSL https://.../get.sh | APX_CLIENT_TOPOLOGY=none bash
```

`get.sh` is a ~2 KB bootstrap you can audit end-to-end before running (it never executes `apx.sh` unless the checksum matches). Pin a specific version or pass through installer flags:

```bash
# pin a version
curl -fsSL https://.../get.sh | APX_VERSION=v0.5.0 bash

# forward flags to apx.sh (e.g. do not start the LaunchAgent)
curl -fsSL https://.../get.sh | bash -s -- --no-service --skip-deps
```

**Manual (two-step)** if you'd rather download and verify yourself:

```bash
curl -fsSLO https://github.com/mkhalid-s/lean-relay/releases/latest/download/apx.sh
curl -fsSL  https://github.com/mkhalid-s/lean-relay/releases/latest/download/apx.sh.sha256 | shasum -a 256 -c -
bash apx.sh
```

`apx.sh` is a small self-extracting bash installer that carries the runtime as an embedded base64 tarball. It installs into a versioned layout at `~/.local/share/apx/versions/vX.Y.Z/` and flips `~/.local/share/apx/current` to point at it. `~/.local/bin/apx*` are symlinks into `current/bin/`, so `apx use vX.Y.Z` and `apx rollback` are atomic.

Options:

```bash
bash apx.sh --print-version       # print embedded apx version and exit
bash apx.sh --no-service          # extract and set up files without starting a service
bash apx.sh --service-backend nohup  # force a lifecycle backend
bash apx.sh --skip-deps           # skip platform dependency installation
bash apx.sh --dry-run             # show what would happen; make no changes
bash apx.sh --force               # reinstall over an existing version
bash apx.sh --extract-to <dir>    # extract payload into <dir> and exit
```

Release-mode installs use `~/.config/apx/install.mode = release`, which switches `apx update` onto the release channel (verified download, no git clone required).

### Dev mode (git clone, hackable)

One-line install (clones into `~/.local/share/apx-src` and runs the installer):

```bash
curl -fsSL https://raw.githubusercontent.com/mkhalid-s/lean-relay/main/bootstrap.sh | bash
```

Pin a specific release tag:

```bash
APX_REF=v0.5.0 curl -fsSL https://raw.githubusercontent.com/mkhalid-s/lean-relay/main/bootstrap.sh | bash
```

Or clone manually:

```bash
git clone https://github.com/mkhalid-s/lean-relay.git
cd lean-relay
./install.sh --yes
```

Preview installer actions without changing anything:

```bash
./install.sh --check-only
```

The installer copies runtime files to user-writable paths, installs safe
dependencies with Homebrew, apt, dnf, or pacman, starts the selected service
backend, and validates health.

Existing runtime config is preserved on reinstall. The installer backs it up and appends any new default keys, so local port/mode experiments are not overwritten.

## Dashboard

Open [http://127.0.0.1:8787/](http://127.0.0.1:8787/) after installing to see a single pane that aggregates every component. The dashboard is served by `apx-gateway`; its primary overview is a bundled Svelte/uPlot module, while specialized controls retain a safe legacy fallback. Assets are revalidated after an apx upgrade so the overview does not remain stale.

It includes:

- gateway KPIs: request volume, status buckets, p95 latency, first-byte latency, token totals, cache token totals, estimated cost, and tool-call counts
- an at-a-glance overview with latency and request charts, persisted optimizer reachability, and verified/estimated/unavailable savings coverage
- a **Needs Attention** feed for unavailable measurements, optimizer outages, health degradations, and observational chain regressions; it recommends investigation and never claims causal proof
- current mode, chain diagram, apx version, and capture-level badge
- a comparative tool view that normalizes Headroom, pxpipe, and Squeezr savings/cache/request data side-by-side
- session rollups and drill-in details keyed by `X-Apx-Session-Id`
- per-tool cards that appear only when the tool is enabled or reachable:
  - Headroom: lifetime/session tokens saved, savings percentage, request failures, cache hits/entries
  - pxpipe: saved input tokens, all-spend savings percentage, compressed-request coverage, A/B cost split, PNG throughput
  - Squeezr: saved tokens, expand-rate quality signal, mode/circuit-breaker state, latency p95, technique breakdown
- live log tail via SSE for each service (`supervisor`, `gateway`, `headroom`, `pxpipe`, `squeezr`)
- native Headroom, pxpipe, and Squeezr dashboards load lazily from their own ports inside collapsed accordions when the gateway is loopback-only; the unified dashboard remains the remote-safe view, keeping third-party UI code off the authenticated apx dashboard origin

JSON APIs for scripting:

```text
GET /api/status                         overall mode + health + counters
GET /api/history?n=100                  recent gateway history (SQLite-backed when enabled)
GET /api/history/export.csv             filtered durable request metadata export (up to 10,000 rows)
GET /api/metrics/summary?window=1h      request/status/token/cost aggregate
GET /api/metrics/efficiency?window=1h   observed tokens + verified per-request optimizer savings
GET /api/metrics/efficiency/timeseries?window=1h  measured and estimated savings as separate series
GET /api/metrics/chains?window=24h      observed token/cost/latency/error comparison by chain
GET /api/metrics/model-quality?window=24h  direct-versus-optimized quality comparison per model
GET /api/metrics/operations?limit=10   metrics-store freshness, retention, and gateway lifecycle events
GET /api/metrics/attention?window=24h  conservative actionable dashboard signals
GET /api/metrics/optimizer-snapshots?window=24h  persisted optimizer health/counter snapshots
GET /api/metrics/timeseries?window=1h   bucketed latency/request/token series
GET /api/metrics/sessions?window=24h    grouped sessions
GET /api/metrics/session/<id>           per-request session detail
GET /api/tool/detect                    enabled/reachable/doing_work per tool
GET /api/tool/compare                   normalized Headroom/pxpipe/Squeezr rows
GET /api/tool/headroom                  Headroom /stats + Prometheus parse
GET /api/tool/pxpipe                    pxpipe /proxy-stats + /api/stats.json
GET /api/tool/squeezr                   Squeezr /health + /stats + /limits
GET /api/events/stream                  SSE fan-in for live dashboard updates
GET /api/logs/targets                   currently available log streams
GET /api/logs/stream?service=gateway    Server-Sent Events log tail
```

### Optimizer telemetry contract

An optimizer in the configured local chain may report request-level work with
the response header `X-Apx-Optimizer-Metrics`. Its value is a JSON object or
array; apx consumes it internally and does not relay it to clients.

```json
[{"optimizer":"pxpipe","applied":true,"input_tokens_before":1200,"input_tokens_after":480,"savings_confidence":"measured","optimizer_latency_ms":8.4}]
```

Supported fields are `optimizer`, `applied`, `bypass_reason`, `technique`,
`input_tokens_before`, `input_tokens_after`, `tokens_saved`,
`savings_confidence` (`measured`, `estimated`, or `unavailable`), and
`optimizer_latency_ms`. apx calculates a token delta only when the adapter
explicitly provides both before/after counts; it never infers savings from
aggregate traffic. Malformed or incomplete claims are retained as unavailable.

Disable the dashboard entirely by setting `APX_DASHBOARD_ENABLED=0` in `~/.config/apx/config.env`. The gateway keeps proxying normally either way.

### Reading savings and restart-safe data

For a first check, choose a time window, open **Needs Attention**, then inspect
**Token Consumption & Verified Savings** and **Optimizer Measurement Coverage**.
Only `measured` savings have explicit per-request before/after evidence;
`estimated` values remain separate, and `unavailable` means apx has no basis
to claim savings. Request history, sessions, optimizer attempts, health
snapshots, and dashboard selections are stored locally in SQLite/JSONL and
survive gateway restarts, subject to configured retention.

When exposing the Gateway beyond loopback, LeanRelay keeps Headroom, pxpipe,
and Squeezr on `APX_INTERNAL_HOST=127.0.0.1`. Native third-party dashboards
are intentionally hidden from a remotely bound LeanRelay dashboard: serving
their UI under the authenticated dashboard origin would give third-party code
access to that origin. Use the unified LeanRelay metrics dashboard remotely.

### Capture and Local Metrics

By default, apx records only metadata:

```bash
APX_CAPTURE=metadata
```

Metadata mode stores timing, status, path, model, request/session ids, token counts, cache token counts, byte counts, estimated cost, and tool-call count. It does **not** store request or response bodies.

Full capture is available for local debugging, but it is gated by an explicit acknowledgment:

```bash
APX_CAPTURE=full
APX_CAPTURE_FULL_ACK=i-understand
```

Full capture stores a truncated, redacted copy of request/response bodies in the local SQLite database. The gateway refuses to start if `APX_CAPTURE=full` is set without the acknowledgment. Known secret headers and common API-key/token/password fields are redacted before persistence.

Metrics are local-only:

```bash
APX_METRICS_DB="${HOME}/.local/state/apx/metrics.db"
APX_METRICS_RETENTION_DAYS=30
APX_METRICS_BACKFILL=1
APX_MAX_EVENT_STREAMS_PER_IP=4
```

Metrics directories are forced to mode `0700` and SQLite/JSONL files to `0600`.
Retention applies to both SQLite rows and dated JSONL history files. Set
`APX_METRICS_DB=""` (or `off`) to disable SQLite while keeping the JSONL
history log and its configured retention.

## Updating

`apx update` picks the right update channel automatically based on how you installed:

- **Release mode** (`apx.sh` installer): downloads the newest `apx.sh` from GitHub Releases, verifies its SHA256 against the co-published `.sha256` file, and re-extracts into a fresh `~/.local/share/apx/versions/vX.Y.Z/`. The old version stays on disk so rollback is instant.
- **Dev mode** (git clone): `git fetch` and fast-forward the recorded source clone, then rerun `install.sh --yes`.

Common commands (work in both modes):

```bash
apx check-updates             # compare installed vs origin/main
apx update                    # update in place using the appropriate channel
apx update --dry-run          # release mode: fetch + verify; dev mode: preview git changes
apx update --to v0.5.0        # release mode: install a specific release tag
apx update --to-latest        # release mode: latest release (default)
apx update --force            # reinstall even if already at latest
apx version                   # show installed version, mode, and channel
```

Release-mode users get atomic version management:

```bash
apx versions                  # list installed versions (current marked *)
apx use v0.5.0                # switch to a previously-installed version (atomic)
apx rollback                  # switch to the previous version
apx cleanup --keep 2          # prune older versions, keep current + one previous
apx cleanup --keep 2 --dry-run
```

Version switches are a single `ln -sfn` on the `~/.local/share/apx/current` symlink. The LaunchAgent survives the swap because `APX_ROOT` is set to `~/.local/share/apx/current`, so restarting the service after `apx use` picks up the new binaries automatically.

After an update, if you had installed shell completions with `apx completions install`, `apx update` warns you when they look stale so you can refresh them:

```bash
apx completions install       # detects your shell
apx completions install --shell zsh
apx completions uninstall     # remove installed completion files
```

Dev-mode-specific: if you cloned somewhere non-default and moved the directory, either:

```bash
echo /new/path/to/apx-source > ~/.config/apx/source.path
apx update
```

or just rerun `./install.sh --yes` from the new clone.

Releases are cut with `build/release.sh X.Y.Z --push --watch` or `build/release.sh --patch|--minor|--major --push --watch`. The helper verifies identity, requires a clean `main`, promotes the changelog's Unreleased notes, updates `VERSION`, validates, commits `Release X.Y.Z`, tags `vX.Y.Z`, pushes, and waits for the GitHub Release workflow. Use `--dry-run` to preview the next release without modifying files; use `--allow-empty-notes` only for intentional metadata-only releases. Every tagged build publishes both a source tarball and a self-extracting `apx.sh` (plus `apx.sh.sha256`) at [Releases](https://github.com/mkhalid-s/lean-relay/releases).

## Claude Code Setting

Inside a devcontainer, use the stable Gateway URL:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://host.docker.internal:8787"
  }
}
```

For host-only Claude sessions, `http://127.0.0.1:8787` also works.

Configure the client topology explicitly:

```bash
apx claude set local         # same host or same container
apx claude set docker-host   # devcontainer using Docker Desktop host apx
apx claude set https://...   # custom URL
apx claude sync
apx claude clear
```

`apx mode ...` keeps the configured value synced in `~/.claude/settings.json`.
Because the URL stays stable, switching modes does not require a Claude restart.
Interactive mode/chain switches show the configured topology and URL and ask
whether to use, reconfigure, or leave the Claude setting unchanged.

## Modes and chains

`apx` has one underlying routing model — an ordered chain of local services
between the gateway and Anthropic. `apx mode` gives that model a small
curated set of preset names; `apx chain` gives you the primitive directly
for arbitrary orderings and future services.

```bash
apx mode current
apx mode headroom-pxpipe        # preset -> chain "headroom,pxpipe"
apx mode pxpipe-headroom        # preset -> chain "pxpipe,headroom"
apx mode headroom
apx mode squeezr
apx mode headroom-squeezr
apx mode pxpipe
apx mode direct                 # empty chain
apx disable                     # gateway off; ANTHROPIC_BASE_URL removed

# Freeform ordering / power user:
apx chain get
apx chain set headroom,pxpipe
apx chain set headroom,squeezr
apx chain clear                 # equivalent to `apx mode direct`
apx chain ls                    # list known services
apx chain preset ls             # list preset chains
```

```text
headroom-pxpipe   Gateway :8787 -> Headroom :8788 -> pxpipe :47821 -> Anthropic
pxpipe-headroom   Gateway :8787 -> pxpipe :47821 -> Headroom :8788 -> Anthropic
headroom          Gateway :8787 -> Headroom :8788 -> Anthropic
squeezr           Gateway :8787 -> Squeezr :18780 -> Anthropic
headroom-squeezr  Gateway :8787 -> Headroom :8788 -> Squeezr :18780 -> Anthropic
pxpipe            Gateway :8787 -> pxpipe :47821 -> Anthropic
direct            Gateway :8787 -> Anthropic
off               Local proxy services disabled in config
disable           Stops services and removes ANTHROPIC_BASE_URL from Claude settings
```

`full` is kept as a deprecated alias of `headroom-pxpipe` for backward compat.

## Local Ports

Use `apx port` to move a local service off a conflicting port after install. The command updates the config, re-derives chain routing, and restarts the service by default:

```bash
apx port get
apx port get pxpipe
apx port set pxpipe 47822
apx port set pxpipe 47822 --no-restart
```

This writes `PXPIPE_PORT` in `~/.config/apx/config.env` and refreshes derived targets such as `HEADROOM_TARGET_API_URL` when the current chain routes through pxpipe. Prefer the CLI over hand-editing the config so chained modes do not keep pointing at the old port.

Other configurable local ports are `gateway`, `headroom`, `squeezr`, and `squeezr-mitm`.

Note: current Squeezr releases must be the final local service in an apx chain because Squeezr does not expose a configurable upstream for forwarding to another apx service. Valid Squeezr chains include `squeezr` and `headroom,squeezr`; invalid examples include `squeezr,headroom`.

## Upstream Target

By default, apx eventually forwards to Anthropic:

```bash
apx target get
# target: https://api.anthropic.com
```

Use `apx target set` to point the current chain at another Anthropic-compatible API endpoint:

```bash
apx target set https://api.anthropic.com
apx target set https://your-compatible-endpoint.example.com
apx target set https://your-compatible-endpoint.example.com --no-restart
apx target reset
```

`apx target set` writes `APX_TARGET_API_URL` to `~/.config/apx/config.env` and then re-derives `GATEWAY_TARGET_API_URL`, `HEADROOM_TARGET_API_URL`, `PXPIPE_TARGET_API_URL`, and `SQUEEZR_TARGET_API_URL` for the current `APX_CHAIN`. It validates the URL as `http(s)://host[:port][/base-path]`.

Current useful fallbacks:

```bash
apx mode squeezr            # first Squeezr experiment, no Headroom or pxpipe
apx mode pxpipe-headroom    # compare pxpipe before Headroom
apx mode pxpipe             # Headroom bypass; pxpipe only
apx mode direct             # bypass all optimizers, keep Gateway stable
apx disable                 # stop everything and remove Claude base URL
```

## First Squeezr Experiment

Squeezr is managed by the same LaunchAgent supervisor as the other components. The stack uses `18780` instead of Squeezr's default `8080` to avoid common local port conflicts, and pins `SQUEEZR_PACKAGE_SPEC` for reproducible apx-managed startup.

```bash
apx mode squeezr
apx status
apx logs squeezr
```

Expected route:

```text
Claude Code -> Gateway :8787 -> Squeezr :18780 -> Anthropic
```

Use `apx mode direct` to return to plain Gateway pass-through.

## Operations

```bash
apx status
apx urls
apx logs all
apx logs gateway
apx logs headroom
apx logs headroom.proxy
apx logs headroom.stdout
apx logs pxpipe
apx logs squeezr
apx install
apx run                              # foreground supervisor for containers
apx stop
apx uninstall                       # stop LaunchAgent; keep everything else
apx uninstall --purge --dry-run     # preview a full removal
apx uninstall --purge --yes         # remove binaries, config, state, share,
                                    # completions, and ANTHROPIC_BASE_URL from
                                    # ~/.claude/settings.json
apx uninstall --purge=state         # remove selectively
apx uninstall --purge=deps --dry-run
apx uninstall --purge=caches --dry-run
apx uninstall --purge=all,deps,caches --yes
```

Lifecycle backend selection:

```bash
APX_SERVICE_BACKEND=auto apx install   # launchd, systemd-user, then nohup
APX_SERVICE_BACKEND=systemd apx install
APX_SERVICE_BACKEND=nohup apx install
```

apx never enables systemd lingering automatically.

Any `--purge...` invocation first stops apx and removes its LaunchAgent plist, then removes the selected categories. Plain `--purge` removes apx-owned files: `binaries`, `share`, `state`, `config`, `claude`, and `completions`. The `source`, `deps`, and `caches` categories are explicit opt-ins.

- `deps` removes dependency installs apx recorded creating, currently the `headroom-ai` pipx app and any apx-recorded `ast-grep-cli` injection.
- `caches` removes manifest-gated install/prewarm caches, currently Headroom helper binaries, cached npm tarballs, and matching npx temp installs for `pxpipe-proxy` / `squeezr-ai`.
- `source` removes the recorded source clone only when the path is safe and the running `apx` binary is not inside it.

Run `--dry-run` first to see exact paths and commands. apx never removes Homebrew, Node/npm/npx, pipx, uv, global npm packages, unrelated pipx apps, `~/.headroom`, `~/.squeezr`, `~/.certs`, or `~/.cache/tiktoken`.

Debug everything at once:

```bash
apx logs all
apx logs gateway --tail 200 --no-follow
apx debug level get
apx debug level set debug       # persists APX_LOG_LEVEL and restarts managed service
apx debug level set trace --no-restart
apx support-bundle --output apx-support.tgz --tail 300
```

`logs headroom` follows both the stack-managed Headroom stdout log and Headroom's detailed proxy request log at `~/.headroom/logs/proxy.log`. Use `logs headroom.proxy` when you only want request/error details. `APX_LOG_LEVEL` accepts `info`, `debug`, or `trace`; the value is propagated to Gateway, Headroom, pxpipe, and Squeezr child processes. `support-bundle` creates a metadata-only tarball with redacted config and log tails; it intentionally excludes request/response bodies, metrics databases, history JSONL, certs, and dependency caches.

### Help me recover

Use this order when something does not look right:

1. Run `apx status`. A failed health check identifies the component to inspect.
2. Open the dashboard and read **Needs Attention**. An unavailable savings value means missing telemetry, not zero savings.
3. Run `apx doctor`, then inspect the affected log: `apx logs gateway`, `apx logs headroom`, `apx logs pxpipe`, or `apx logs squeezr`.
4. For a persistent issue, create a redacted bundle: `apx support-bundle --output apx-support.tgz --tail 300`.

Common fixes: use the persistent `apx pxpipe models set ...` and `apx headroom settings set ...` commands instead of one-shot environment variables; use `apx optimizer` before altering an optimizer command or package; and use `apx uninstall --purge --dry-run` before deleting local data.

Further self-service guides: [dashboard metrics](docs/DASHBOARD_METRICS.md) and [optimizer ownership](docs/OPTIMIZER_OWNERSHIP.md).

### Configuration advisor

Run the local, read-only advisor after installation, an upgrade, or when the
dashboard cannot explain token savings:

```bash
apx config advise
apx config advise --json                 # for scripts and support tooling
apx config advise --dismiss metrics-disabled
```

It checks only deterministic local facts: token-metrics availability, known
pxpipe model capability, externally exposed dashboard protection, non-local
HTTP upstreams, optimizer ownership, and the cached daily optimizer update
result. Every finding includes its impact and an exact next command. It never
contacts a registry, changes `config.env`, or restarts a service. Dismissals
are stored by advisory ID and guidance version under apx state; use `--show-all`
to review them later.

## URLs

```text
apx dashboard:    http://127.0.0.1:8787/
apx status API:   http://127.0.0.1:8787/api/status
Gateway health:   http://127.0.0.1:8787/livez
Headroom health:  http://127.0.0.1:8788/livez
Headroom stats:   http://127.0.0.1:8788/stats
pxpipe dashboard: http://127.0.0.1:47821/
Squeezr health:   http://127.0.0.1:18780/squeezr/health
Squeezr dashboard:http://127.0.0.1:18780/squeezr/dashboard
```

## pxpipe Image Models

`PXPIPE_MODELS` in `~/.config/apx/config.env` is the persistent source of truth for which model bases pxpipe may convert to images. Dashboard model chips are useful for live experiments, but they are runtime-only and reset when pxpipe restarts.

The default stack template opts in the current known model bases:

```bash
PXPIPE_MODELS="claude-fable-5,claude-opus-5,claude-opus-4-8,claude-opus-4-7,claude-sonnet-5,claude-sonnet-4-6,gpt-5.6,gpt-5.5"
```

Set `PXPIPE_MODELS=off` to disable image conversion while keeping pxpipe as a pass-through logging/dashboard proxy. pxpipe does not support a wildcard; add future model bases explicitly.

Use the CLI to make a persistent change and restart every supported service backend:

```bash
apx pxpipe models get
apx pxpipe models set claude-fable-5,gpt-5.6
apx pxpipe models set off
```

`PXPIPE_MODELS=... apx restart` is not a reliable override for launchd or
systemd because those supervisors deliberately start apx with a controlled
environment. `apx pxpipe models set` updates the active `config.env` instead.

### pxpipe package upgrades

Fresh installs use `PXPIPE_PACKAGE_SPEC="pxpipe-proxy@0.11.1"`. Existing
`PXPIPE_CMD` values are intentionally preserved on install/update, including
older defaults and custom commands. To opt into a newer package explicitly,
update both values in `~/.config/apx/config.env`, then run `apx restart`:

```bash
PXPIPE_PACKAGE_SPEC="pxpipe-proxy@0.11.1"
PXPIPE_CMD="npx -y pxpipe-proxy@0.11.1"
```

If `npx` is unavailable, use `PXPIPE_CMD="npm exec --yes
pxpipe-proxy@0.11.1"`. apx runs matching default commands directly, avoiding
an extra login-shell/npx resolution step; a fully custom command is preserved
and uses the compatibility shell path.

## Optimizer Controls

`apx` exposes the safe, high-signal controls of each optimizer while leaving
security-sensitive or cost-bearing advanced controls in their native tools.

```bash
# Persist a Headroom feature choice and restart apx.
apx headroom settings get
apx headroom settings set tool-search on
apx headroom settings set code-graph off

# Toggle Squeezr compression without stopping proxying or logging.
apx squeezr bypass get
apx squeezr bypass on
apx squeezr bypass off
```

Squeezr owns and persists its bypass state across restarts. Headroom settings
are written to apx's `config.env`; use `--no-restart` when batching changes.
TLS verification, telemetry, rate limiting, AI compression, backend choice,
and destructive cache/config actions remain explicit advanced configuration so
they cannot be changed accidentally from the common CLI path.

## Optimizer Ownership and Versions

Start here before changing an optimizer installation:

```bash
apx optimizer
apx status
```

`apx optimizer` is read-only. It shows each optimizer's source, configured
command or package spec, ownership label, and any locally reported Headroom
version. `apx status` includes the same ownership label next to service health.

Run `apx optimizer latest` for an on-demand registry comparison. Normal apx
commands also start a non-blocking registry check at most once per 24 hours;
the local cached result appears in `apx status` when an update is available.
This only reports availability—apx never automatically upgrades an optimizer.

- `external` means the optimizer was installed or configured by the user. apx
  will never install, upgrade, remove, or rewrite its command.
- `apx-managed` means an earlier apx install recorded ownership. Only these
  installs may become eligible for an explicit reconcile operation.
- `configured-default` means pxpipe uses apx's default `npx` command; it is
  not an apx-owned global npm package.
- `apx-managed-helper` means apx owns the local Squeezr launcher helper, not
  the underlying npm package cache.

Version reconciliation is intentionally dry-run-only at present:

```bash
apx optimizer reconcile headroom 1.2.3 --dry-run
```

It prints the planned official PyPI package change without installing,
upgrading, restarting, or deleting anything. It refuses external installs;
pxpipe and Squeezr reconciliation are not enabled yet. apx never performs an
automatic optimizer update.

## Runtime Layout

Source files live in this repository. Services use home-directory runtime
mirrors for macOS privacy compatibility and Linux XDG portability.

```text
~/.local/bin/apx
~/.local/bin/apx-gateway
~/.local/bin/apx-squeezr
~/.config/apx/config.env
~/.local/state/apx/
~/.local/share/apx/dashboard.html
~/Library/LaunchAgents/io.github.apx.plist
~/.config/systemd/user/io.github.apx.service
$XDG_RUNTIME_DIR/apx/
```

## Known Findings

Headroom runs in a lightweight default profile:

```text
Code-Aware: enabled
Tree-Sitter: loaded
Magika: enabled
CCR: enabled
Kompress ML: not installed
```

This is expected and stable. Startup lines such as these are informational:

```text
Kompress model not cached; deferring download to first use
Kompress: not installed (pip install headroom-ai[ml] for ML compression)
LiteLLM not available - cannot calculate costs
```

Install `headroom-ai[ml]` only if you want heavier optional ML compression. The default keeps the stack lighter.
Install `litellm` only if you want Headroom to estimate request costs; proxying and optimization still work without it.

For launchd-started Python tools, the stack exports `CA_BUNDLE_FILE` and `TIKTOKEN_CACHE_DIR` so Headroom can validate corporate/local CA bundles and use a stable tiktoken cache. If you see tokenizer TLS errors, check:

```bash
apx logs headroom.proxy
```

## Third-Party Projects and Credits

LeanRelay is an orchestration layer built around independent open-source projects.
The context optimization, rendering, parsing, and helper-tool functionality
comes from their maintainers and contributors. Please support those projects,
read their documentation, and report tool-specific bugs upstream.

| Project | How LeanRelay uses it | Reference |
|---|---|---|
| Headroom | Optional context-compression and cache-aware proxy | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [PyPI](https://pypi.org/project/headroom-ai/) |
| pxpipe | Optional text-to-image context proxy and savings telemetry | [teamchong/pxpipe](https://github.com/teamchong/pxpipe), [npm](https://www.npmjs.com/package/pxpipe-proxy) |
| Squeezr | Optional deterministic/semantic context-compression proxy | [sergioramosv/Squeezr](https://github.com/sergioramosv/Squeezr), [npm](https://www.npmjs.com/package/squeezr-ai) |
| ast-grep | AST-aware structural search used by Headroom code tooling | [ast-grep/ast-grep](https://github.com/ast-grep/ast-grep) |
| Difftastic | Structural diff helper optionally installed through Headroom | [Wilfred/difftastic](https://github.com/Wilfred/difftastic) |
| scc | Source-code statistics helper optionally installed through Headroom | [boyter/scc](https://github.com/boyter/scc) |
| pipx | Isolated installation and execution of Python CLI applications | [pypa/pipx](https://github.com/pypa/pipx) |
| Node.js, npm, npx | Runtime and package execution for Node-based proxies | [Node.js](https://nodejs.org/), [npm CLI](https://github.com/npm/cli) |
| Homebrew | Optional macOS dependency installation | [Homebrew](https://brew.sh/) |
| Python standard library | Gateway HTTP server, streaming proxy, process logic, and SQLite integration | [Python](https://www.python.org/), [sqlite3](https://docs.python.org/3/library/sqlite3.html) |

Claude Code and Anthropic are referenced because LeanRelay provides an
Anthropic-compatible local routing layer. LeanRelay is not an Anthropic product.

Third-party projects are not relicensed by LeanRelay. Each project retains its own
copyright, license, support policy, privacy behavior, and release lifecycle.
The list above describes direct operational dependencies and is not a complete
inventory of every transitive package. See `NOTICE` and each upstream package
for authoritative license information.

Capability, performance, and compression claims for Headroom, pxpipe, and
Squeezr are made by their respective maintainers. Verify them against each
project's own repository and documentation rather than this README before
relying on them operationally.

## Limitations

- Token reduction, latency, cache-hit, and cost outcomes are workload-, model-,
  provider-, and tool-version-dependent; no savings are guaranteed.
- Some optimizers intentionally transform, summarize, truncate, or render
  request context. Those transformations may be lossy or unsuitable for
  byte-exact identifiers, security-sensitive instructions, regulated data, or
  tasks requiring perfect reproduction.
- Cost values in the dashboard are estimates based on configured model pricing
  and observed usage fields. Unknown or changed pricing can make estimates
  incomplete or inaccurate.
- Provider APIs, OAuth classification, model capabilities, beta headers, and
  subscription policies can change without notice and may temporarily break a
  previously working chain.
- Linux/devcontainer lifecycle uses systemd-user when available, otherwise the
  portable nohup backend or explicit foreground `apx run`.
- The dashboard is local operational tooling, not a replacement for production
  tracing, billing reconciliation, compliance logging, or security monitoring.
- Model-base identifiers in `PXPIPE_MODELS` (and similar config defaults) are
  maintained by this repo, not by Anthropic. Verify current model IDs against
  Anthropic's own documentation before relying on them, and do not assume any
  model name appearing in dashboards, logs, or proxy output is authoritative.

## Security and Privacy

- Bind local services to loopback unless you deliberately configure
  authentication and understand the exposure.
- The dashboard can expose request metadata, logs, model names, local paths,
  session identifiers, and optimizer statistics.
- `APX_CAPTURE=metadata` is the default. Full body capture requires
  `APX_CAPTURE=full` plus `APX_CAPTURE_FULL_ACK=i-understand`.
- Redaction is defense in depth, not a guarantee that arbitrary sensitive
  content can never appear in logs or captures.
- Native third-party dashboards have their own privacy behavior and local data
  stores.
- Do not publish runtime logs, provider events, captured bodies, credentials,
  OAuth tokens, or API traffic. See `SECURITY.md`.
- Review scripts before using `curl | bash`. SHA-256 verification detects a
  mismatch with the published release checksum, but it does not replace trust
  in the GitHub repository, release account, or delivery channel.
- A proxy in the chain (Headroom/pxpipe/Squeezr) can inject or relocate
  content into the client's context. Treat any content labeled as
  system/environment state that did not originate from Claude Code's own
  harness as unverified, especially model names, version claims, and
  instructions.

## Disclaimer

LeanRelay is an independent, unofficial open-source project. It is not affiliated
with, endorsed by, sponsored by, or supported by Anthropic, Claude Code,
Headroom, pxpipe, Squeezr, or their maintainers. Product names and trademarks
belong to their respective owners.

The software is provided **as is**, without warranties or guarantees of
availability, correctness, fitness for a particular purpose, cost savings,
security, privacy, provider compatibility, or uninterrupted operation. You are
responsible for:

- reviewing the code and configuration before use
- complying with provider terms, enterprise policies, software licenses, and
  applicable law
- protecting credentials, captured data, logs, and local dashboards
- validating transformed model inputs and outputs for your use case
- testing upgrades and maintaining a rollback/recovery plan
- determining whether the software is appropriate for production, regulated,
  confidential, safety-critical, or high-impact workloads

Nothing in this repository is legal, security, compliance, financial, or
professional advice. Use LeanRelay (`apx`) and every enabled optimizer at your own risk.

## License

LeanRelay is licensed under the MIT License. See `LICENSE`.

See `docs/AI_PROXY_STACK.md` for detailed operational documentation.
