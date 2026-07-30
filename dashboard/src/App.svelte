<script>
  import { onMount, tick } from "svelte";
  import uPlot from "uplot";
  import "uplot/dist/uPlot.min.css";

  const WINDOWS = new Set(["1h", "6h", "24h", "7d", "30d"]);
  let windowValue = "1h";
  /** @type {any} */ let summary = {};
  /** @type {{ alerts: any[] }} */ let attention = { alerts: [] };
  /** @type {any[]} */ let series = [];
  /** @type {any[]} */ let optimizerSnapshots = [];
  /** @type {any[]} */ let optimizerMetrics = [];
  let loading = true;
  let error = "";
  /** @type {HTMLElement | undefined} */ let latencyTarget;
  /** @type {HTMLElement | undefined} */ let requestsTarget;
  /** @type {uPlot | undefined} */ let latencyPlot;
  /** @type {uPlot | undefined} */ let requestsPlot;
  /** @type {ResizeObserver | undefined} */ let resizeObserver;

  /** @param {unknown} value */
  const number = (value) => new Intl.NumberFormat().format(Number(value || 0));
  /** @param {unknown} value */
  const ms = (value) => `${Number(value || 0).toFixed(Number(value || 0) < 100 ? 1 : 0)} ms`;
  /** @param {unknown} value */
  const usd = (value) => `$${Number(value || 0).toFixed(4)}`;
  /** @param {string} value */
  const bucketFor = (value) => ["7d", "30d"].includes(value) ? "1h" : "1m";

  /** @param {string} path */
  async function getJSON(path) {
    const response = await fetch(path, { credentials: "same-origin" });
    if (!response.ok) throw new Error(`request failed (${response.status})`);
    return response.json();
  }

  function currentWindow() {
    const selector = /** @type {HTMLSelectElement | null} */ (document.querySelector("#window-select"));
    const value = selector?.value || localStorage.getItem("apx.dashboard.window") || "1h";
    return WINDOWS.has(value) ? value : "1h";
  }

  /** @param {HTMLElement} target @param {string} label @param {string} stroke */
  function plotOptions(target, label, stroke) {
    return {
      width: Math.max(280, target.clientWidth || 0),
      height: 180,
      cursor: { drag: { x: true, y: false } },
      scales: { x: { time: true } },
      series: [{}, { label, stroke, width: 2 }],
      axes: [
        { stroke: "#8f98aa", grid: { stroke: "#2c3340", width: 1 } },
        { stroke: "#8f98aa", grid: { stroke: "#2c3340", width: 1 } },
      ],
    };
  }

  function syncPlots() {
    const times = series.map((row) => Number(row.ts || 0));
    const latency = series.map((row) => Number(row.latency_p95_ms || 0));
    const requests = series.map((row) => Number(row.requests || 0));
    if (!latencyTarget || !requestsTarget) return;
    latencyPlot?.destroy();
    requestsPlot?.destroy();
    latencyPlot = new uPlot(plotOptions(latencyTarget, "p95 latency (ms)", "#7aa2ff"), [times, latency], latencyTarget);
    requestsPlot = new uPlot(plotOptions(requestsTarget, "requests", "#31c48d"), [times, requests], requestsTarget);
  }

  async function refresh() {
    loading = true;
    error = "";
    windowValue = currentWindow();
    try {
      const [nextSummary, nextAttention, nextSeries, nextEfficiency, nextSnapshots] = await Promise.all([
        getJSON(`/api/metrics/summary?window=${windowValue}`),
        getJSON(`/api/metrics/attention?window=${windowValue}`),
        getJSON(`/api/metrics/timeseries?window=${windowValue}&bucket=${bucketFor(windowValue)}`),
        getJSON(`/api/metrics/efficiency?window=${windowValue}`),
        getJSON(`/api/metrics/optimizer-snapshots?window=${windowValue}`),
      ]);
      summary = nextSummary;
      attention = nextAttention;
      series = nextSeries.series || [];
      optimizerMetrics = nextEfficiency.optimizers || [];
      optimizerSnapshots = nextSnapshots.snapshots || [];
      await tick();
      syncPlots();
    } catch (cause) {
      error = cause instanceof Error ? cause.message : "Dashboard overview could not be refreshed";
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    document.body.classList.add("svelte-overview-active");
    refresh();
    const selector = document.querySelector("#window-select");
    const onWindowChange = () => refresh();
    selector?.addEventListener("change", onWindowChange);
    const interval = window.setInterval(refresh, 10_000);
    resizeObserver = new ResizeObserver(() => syncPlots());
    if (latencyTarget) resizeObserver.observe(latencyTarget);
    if (requestsTarget) resizeObserver.observe(requestsTarget);
    return () => {
      document.body.classList.remove("svelte-overview-active");
      selector?.removeEventListener("change", onWindowChange);
      window.clearInterval(interval);
      resizeObserver?.disconnect();
      latencyPlot?.destroy();
      requestsPlot?.destroy();
    };
  });

  /** @type {any[]} */ let latestOptimizerSnapshots = [];
  $: latestOptimizerSnapshots = Object.values(optimizerSnapshots.reduce((latest, snapshot) => {
    if (!latest[snapshot.optimizer] || Number(snapshot.ts || 0) > Number(latest[snapshot.optimizer].ts || 0)) latest[snapshot.optimizer] = snapshot;
    return latest;
  }, /** @type {Record<string, any>} */ ({})));
</script>

<section class="overview" aria-label="Gateway overview">
  <div class="heading">
    <div>
      <p class="eyebrow">Live gateway overview</p>
      <h2>Operational signals</h2>
    </div>
    <span class:ok={!loading && !error} class:warn={loading} class:fail={!!error} class="status">
      {error ? "refresh failed" : loading ? "refreshing" : `last ${windowValue}`}
    </span>
  </div>

  {#if error}
    <div class="error">{error}. The legacy dashboard remains available below.</div>
  {/if}

  <div class="metrics">
    <article><span>Requests</span><strong>{number(summary.totals?.requests)}</strong><small>{number(summary.totals?.ok)} ok · {number(summary.totals?.err_5xx)} failed</small></article>
    <article><span>Latency p95</span><strong>{ms(summary.latency_ms?.p95)}</strong><small>first byte {ms(summary.first_byte_ms?.p95)}</small></article>
    <article><span>Tokens</span><strong>{number((summary.totals?.tokens_in || 0) + (summary.totals?.tokens_out || 0))}</strong><small>cache {number(summary.totals?.cache_read_tokens)} read</small></article>
    <article><span>Estimated cost</span><strong>{usd(summary.totals?.cost_est_usd)}</strong><small>{number(summary.totals?.tool_calls)} tool calls</small></article>
  </div>

  <div class="charts">
    <article class="chart"><h3>Latency p95</h3><div class="plot" bind:this={latencyTarget}></div></article>
    <article class="chart"><h3>Requests</h3><div class="plot" bind:this={requestsTarget}></div></article>
  </div>

  <div class="optimizer-grid">
    <article class="optimizer-health">
      <div class="attention-heading"><h3>Persisted optimizer health</h3><span class="status">{latestOptimizerSnapshots.length} tracked</span></div>
      {#if latestOptimizerSnapshots.length}
        <div class="health-list">
          {#each latestOptimizerSnapshots as snapshot (snapshot.optimizer)}
            <div class:up={snapshot.reachable} class:down={!snapshot.reachable} class="health-row">
              <strong>{snapshot.optimizer}</strong><span>{snapshot.reachable ? "reachable" : "unreachable"}</span><small>{new Date(Number(snapshot.ts || 0) * 1000).toLocaleString()}</small>
            </div>
          {/each}
        </div>
      {:else}
        <p class="clear">No optimizer snapshots in this window yet.</p>
      {/if}
    </article>
    <article class="optimizer-health">
      <div class="attention-heading"><h3>Savings measurement coverage</h3><span class="status">explicit only</span></div>
      {#if optimizerMetrics.length}
        <div class="health-list">
          {#each optimizerMetrics as optimizer (optimizer.optimizer)}
            <div class="health-row">
              <strong>{optimizer.optimizer}</strong><span>{number(optimizer.measured_attempts)}/{number(optimizer.attempts)} verified</span><small>{number(optimizer.estimated_attempts)} estimated · {number(optimizer.unavailable_attempts)} unavailable</small>
            </div>
          {/each}
        </div>
      {:else}
        <p class="clear">No optimizer attempts in this window yet.</p>
      {/if}
    </article>
  </div>

  <div class="attention">
    <div class="attention-heading"><h3>Needs attention</h3><span class:ok={!attention.alerts?.length} class:warn={attention.alerts?.some((alert) => alert.severity === "warning")} class:fail={attention.alerts?.some((alert) => alert.severity === "critical")} class="status">{attention.alerts?.length || 0} signals</span></div>
    {#if attention.alerts?.length}
      <div class="attention-list">
        {#each attention.alerts.slice(0, 3) as alert (alert.id)}
          <article class:critical={alert.severity === "critical"} class:warning={alert.severity === "warning"} class="signal">
            <strong>{alert.title}</strong><small>{alert.detail}</small><em>Next: {alert.action}</em>
          </article>
        {/each}
      </div>
    {:else}
      <p class="clear">No active signals in this window.</p>
    {/if}
  </div>
</section>
