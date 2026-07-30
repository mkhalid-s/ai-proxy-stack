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
  /** @type {{ observed?: any, optimizers?: any[], durable?: boolean, note?: string }} */ let efficiency = {};
  /** @type {any[]} */ let savingsSeries = [];
  let loading = true;
  let error = "";
  let showAllSignals = false;
  /** @type {HTMLElement | undefined} */ let tokenTarget;
  /** @type {HTMLElement | undefined} */ let savingsTarget;
  /** @type {uPlot | undefined} */ let tokenPlot;
  /** @type {uPlot | undefined} */ let savingsPlot;
  /** @type {ResizeObserver | undefined} */ let resizeObserver;

  /** @param {unknown} value */
  const number = (value) => new Intl.NumberFormat().format(Number(value || 0));
  /** @param {unknown} value */
  const ms = (value) => `${Number(value || 0).toFixed(Number(value || 0) < 100 ? 1 : 0)} ms`;
  /** @param {unknown} numerator @param {unknown} denominator */
  const percentage = (numerator, denominator) => Number(denominator || 0) ? `${(Number(numerator || 0) / Number(denominator) * 100).toFixed(0)}%` : "not measured";
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
    const value = selector?.value || windowValue;
    return WINDOWS.has(value) ? value : "1h";
  }

  function savedWindow() {
    try {
      return localStorage.getItem("apx.dashboard.window") || "";
    } catch {
      return "";
    }
  }

  /** @param {string} value */
  function saveWindow(value) {
    try {
      localStorage.setItem("apx.dashboard.window", value);
    } catch {
      // Browser storage is optional; the selected window still works for this page.
    }
  }

  /** @param {HTMLElement} target @param {any[]} plotSeries */
  function plotOptions(target, plotSeries) {
    return {
      width: Math.max(280, target.clientWidth || 0),
      height: 180,
      cursor: { drag: { x: true, y: false } },
      scales: { x: { time: true } },
      series: [{}, ...plotSeries],
      axes: [
        { stroke: "#8f98aa", grid: { stroke: "#2c3340", width: 1 } },
        { stroke: "#8f98aa", grid: { stroke: "#2c3340", width: 1 } },
      ],
    };
  }

  function syncPlots() {
    const times = series.map((row) => Number(row.ts || 0));
    const input = series.map((row) => Number(row.tokens_in || 0));
    const output = series.map((row) => Number(row.tokens_out || 0));
    const savingsTimes = savingsSeries.map((row) => Number(row.ts || 0));
    const measured = savingsSeries.map((row) => Number(row.measured_tokens_saved || 0));
    const estimated = savingsSeries.map((row) => Number(row.estimated_tokens_saved || 0));
    if (!tokenTarget || !savingsTarget) return;
    tokenPlot?.destroy();
    savingsPlot?.destroy();
    tokenPlot = new uPlot(plotOptions(tokenTarget, [
      { label: "input tokens", stroke: "#7aa2ff", width: 2 },
      { label: "output tokens", stroke: "#76e4b7", width: 2 },
    ]), [times, input, output], tokenTarget);
    savingsPlot = new uPlot(plotOptions(savingsTarget, [
      { label: "verified saved", stroke: "#76e4b7", width: 2 },
      { label: "estimated saved", stroke: "#ffc56d", width: 2, dash: [6, 4] },
    ]), [savingsTimes, measured, estimated], savingsTarget);
  }

  async function refresh() {
    loading = true;
    error = "";
    windowValue = currentWindow();
    try {
      const [nextSummary, nextAttention, nextSeries, nextEfficiency, nextSavingsSeries, nextSnapshots] = await Promise.all([
        getJSON(`/api/metrics/summary?window=${windowValue}`),
        getJSON(`/api/metrics/attention?window=${windowValue}`),
        getJSON(`/api/metrics/timeseries?window=${windowValue}&bucket=${bucketFor(windowValue)}`),
        getJSON(`/api/metrics/efficiency?window=${windowValue}`),
        getJSON(`/api/metrics/efficiency/timeseries?window=${windowValue}&bucket=${bucketFor(windowValue)}`),
        getJSON(`/api/metrics/optimizer-snapshots?window=${windowValue}`),
      ]);
      summary = nextSummary;
      attention = nextAttention;
      series = nextSeries.series || [];
      efficiency = nextEfficiency;
      savingsSeries = nextSavingsSeries.series || [];
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
    const preferredWindow = savedWindow();
    if (WINDOWS.has(preferredWindow)) windowValue = preferredWindow;
    const selector = /** @type {HTMLSelectElement | null} */ (document.querySelector("#window-select"));
    if (selector) selector.value = windowValue;
    refresh();
    const onWindowChange = () => {
      windowValue = currentWindow();
      saveWindow(windowValue);
      showAllSignals = false;
      refresh();
    };
    selector?.addEventListener("change", onWindowChange);
    const interval = window.setInterval(refresh, 10_000);
    resizeObserver = new ResizeObserver(() => syncPlots());
    if (tokenTarget) resizeObserver.observe(tokenTarget);
    if (savingsTarget) resizeObserver.observe(savingsTarget);
    return () => {
      selector?.removeEventListener("change", onWindowChange);
      window.clearInterval(interval);
      resizeObserver?.disconnect();
      tokenPlot?.destroy();
      savingsPlot?.destroy();
    };
  });

  /** @type {any[]} */ let latestOptimizerSnapshots = [];
  $: latestOptimizerSnapshots = Object.values(optimizerSnapshots.reduce((latest, snapshot) => {
    if (!latest[snapshot.optimizer] || Number(snapshot.ts || 0) > Number(latest[snapshot.optimizer].ts || 0)) latest[snapshot.optimizer] = snapshot;
    return latest;
  }, /** @type {Record<string, any>} */ ({})));
  $: optimizerMetrics = efficiency.optimizers || [];
  $: observed = efficiency.observed || {};
  $: totalTokens = Number(observed.tokens_in || summary.totals?.tokens_in || 0) + Number(observed.tokens_out || summary.totals?.tokens_out || 0);
  $: verifiedSaved = optimizerMetrics.reduce((total, optimizer) => total + Number(optimizer.measured_tokens_saved || 0), 0);
  $: measuredAttempts = optimizerMetrics.reduce((total, optimizer) => total + Number(optimizer.measured_attempts || 0), 0);
  $: optimizerAttempts = optimizerMetrics.reduce((total, optimizer) => total + Number(optimizer.attempts || 0), 0);
  $: failures = Number(summary.totals?.err_5xx || 0) + Number(summary.totals?.warn_4xx || 0);
  $: hasRequestData = !!summary.totals;
  $: requestHealth = error
    ? hasRequestData ? "Stale data" : "Unavailable"
    : !hasRequestData && loading
      ? "Loading"
      : failures
        ? `${number(failures)} issue${failures === 1 ? "" : "s"}`
        : "Healthy";
  $: visibleAlerts = showAllSignals ? (attention.alerts || []) : (attention.alerts || []).slice(0, 3);

</script>

<section class="overview" aria-label="Gateway overview">
  <div class="heading">
    <div>
      <p class="eyebrow">LeanRelay · token efficiency</p>
      <h2>What needs your attention</h2>
    </div>
    <span aria-live="polite" class:ok={!loading && !error} class:warn={loading} class:fail={!!error} class="status">
      {error ? "retrying" : loading ? "refreshing" : `last ${windowValue}`}
    </span>
  </div>

  {#if error}
    <div class="error" role="alert">{error}. Retrying automatically; use <code>apx status</code> if the problem persists.</div>
  {/if}

  <div class="attention">
    <div class="attention-heading"><h3>Needs attention</h3><span class:ok={!attention.alerts?.length} class:warn={attention.alerts?.some((alert) => alert.severity === "warning")} class:fail={attention.alerts?.some((alert) => alert.severity === "critical")} class="status">{attention.alerts?.length || 0} signals</span></div>
    {#if attention.alerts?.length}
      <div class="attention-list">
        {#each visibleAlerts as alert (alert.id)}
          <article class:critical={alert.severity === "critical"} class:warning={alert.severity === "warning"} class="signal">
            <strong>{alert.title}</strong><small>{alert.detail}</small><em>Next: {alert.action}</em>
          </article>
        {/each}
      </div>
      {#if attention.alerts.length > 3}
        <button class="signals-toggle" type="button" aria-expanded={showAllSignals} onclick={() => showAllSignals = !showAllSignals}>
          {showAllSignals ? "Show fewer signals" : `Show ${attention.alerts.length - 3} more signal${attention.alerts.length - 3 === 1 ? "" : "s"}`}
        </button>
      {/if}
    {:else}
      <p class="clear">No active signals in this window.</p>
    {/if}
  </div>

  <div class="metrics" aria-label="Token efficiency summary">
    <article><span>Tokens processed</span><strong>{number(totalTokens)}</strong><small>{number(observed.tokens_in)} input · {number(observed.tokens_out)} output</small></article>
    <article class="token-card"><span>Verified tokens saved</span><strong>{number(verifiedSaved)}</strong><small>Explicit pre/post optimizer measurements only</small></article>
    <article><span>Savings coverage</span><strong>{percentage(measuredAttempts, optimizerAttempts)}</strong><small>{number(measuredAttempts)} of {number(optimizerAttempts)} optimizer attempts verified</small></article>
    <article><span>Request health</span><strong class:healthy={hasRequestData && failures === 0 && !error}>{requestHealth}</strong><small>{number(summary.totals?.requests)} requests · p95 {ms(summary.latency_ms?.p95)}</small></article>
  </div>

  <div class="charts">
    <article class="chart"><div class="chart-heading"><div><h3>Token flow</h3><small>Observed input and output tokens</small></div><span class="status">{windowValue}</span></div><div class="plot" role="img" aria-label={`Token flow over ${windowValue}: ${number(observed.tokens_in)} input and ${number(observed.tokens_out)} output tokens.`} bind:this={tokenTarget}></div></article>
    <article class="chart"><div class="chart-heading"><div><h3>Savings evidence</h3><small>Verified savings is distinct from estimates</small></div><span class="status">explicit</span></div><div class="plot" role="img" aria-label={`Savings over ${windowValue}: ${number(verifiedSaved)} verified tokens saved.`} bind:this={savingsTarget}></div></article>
  </div>

  <div class="optimizer-grid">
    <article class="optimizer-health">
      <div class="attention-heading"><h3>Optimizer health</h3><span class="status">{latestOptimizerSnapshots.length} tracked</span></div>
      {#if latestOptimizerSnapshots.length}
        <div class="health-list">
          {#each latestOptimizerSnapshots as snapshot (snapshot.optimizer)}
            <div class:up={snapshot.reachable} class:down={!snapshot.reachable} class="health-row">
              <strong>{snapshot.optimizer}</strong><span>{snapshot.reachable ? "reachable" : "unreachable"}</span><small>last checked {new Date(Number(snapshot.ts || 0) * 1000).toLocaleString()}</small>
            </div>
          {/each}
        </div>
      {:else}
        <p class="clear">No optimizer snapshots in this window yet.</p>
      {/if}
    </article>
    <article class="optimizer-health">
      <div class="attention-heading"><h3>Measurement confidence</h3><span class:ok={efficiency.durable} class:warn={!efficiency.durable} class="status">{efficiency.durable ? "durable" : "not persistent"}</span></div>
      {#if optimizerMetrics.length}
        <div class="health-list">
          {#each optimizerMetrics as optimizer (optimizer.optimizer)}
            <div class="health-row">
              <strong>{optimizer.optimizer}</strong><span>{number(optimizer.measured_attempts)}/{number(optimizer.attempts)} verified</span><small>{number(optimizer.estimated_attempts)} estimated · {number(optimizer.unavailable_attempts)} unavailable</small>
            </div>
          {/each}
        </div>
      {:else}
        <p class="clear">No optimizer attempts in this window yet. {efficiency.note || "Savings will appear only when adapters emit measurements."}</p>
      {/if}
    </article>
  </div>
</section>
