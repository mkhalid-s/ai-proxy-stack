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
  /** @type {any[]} */ let sessions = [];
  /** @type {any} */ let operations = {};
  let loading = true;
  let error = "";
  let summaryError = false;
  let showAllSignals = false;
  let viewValue = "overview";
  /** @type {HTMLElement | undefined} */ let tokenTarget;
  /** @type {HTMLElement | undefined} */ let savingsTarget;
  /** @type {uPlot | undefined} */ let tokenPlot;
  /** @type {uPlot | undefined} */ let savingsPlot;
  /** @type {ResizeObserver | undefined} */ let resizeObserver;

  /** @param {unknown} value */
  const number = (value) => new Intl.NumberFormat().format(Number(value || 0));
  /** @param {unknown} value */
  const ms = (value) => `${Number(value || 0).toFixed(Number(value || 0) < 100 ? 1 : 0)} ms`;
  /** @param {unknown} value */
  const money = (value) => `$${Number(value || 0).toFixed(Number(value || 0) < 1 ? 4 : 2)}`;
  /** @param {unknown} value */
  const bytes = (value) => {
    const amount = Number(value || 0);
    return amount >= 1_048_576 ? `${(amount / 1_048_576).toFixed(1)} MB` : `${(amount / 1024).toFixed(1)} KB`;
  };
  /** @param {unknown} numerator @param {unknown} denominator */
  const percentage = (numerator, denominator) => Number(denominator || 0) ? `${(Number(numerator || 0) / Number(denominator) * 100).toFixed(0)}%` : "not measured";
  /** @param {string} value */
  const bucketFor = (value) => ["7d", "30d"].includes(value) ? "1h" : "1m";
  /** @param {string} optimizer */
  const optimizerDestination = (optimizer) => {
    const hostname = window.location.hostname.toLowerCase();
    if (!["127.0.0.1", "::1", "localhost", "host.docker.internal"].includes(hostname)) return null;
    return ({
      headroom: { href: "/proxy/headroom", label: "Open dashboard" },
      pxpipe: { href: "/proxy/pxpipe/", label: "Open dashboard" },
      squeezr: { href: "/proxy/squeezr/", label: "Open dashboard" },
    })[optimizer] || null;
  };

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
    const styles = getComputedStyle(document.documentElement);
    const axisColor = styles.getPropertyValue("--muted").trim() || "#8f98aa";
    const gridColor = styles.getPropertyValue("--border").trim() || "#2c3340";
    return {
      width: Math.max(240, target.clientWidth || 0),
      height: 180,
      cursor: { drag: { x: true, y: false } },
      legend: { show: false },
      scales: { x: { time: true } },
      series: [{}, ...plotSeries],
      axes: [
        { stroke: axisColor, grid: { stroke: gridColor, width: 1 } },
        { stroke: axisColor, grid: { stroke: gridColor, width: 1 } },
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
    tokenPlot = undefined;
    savingsPlot = undefined;
    tokenTarget.replaceChildren();
    savingsTarget.replaceChildren();
    if (times.length >= 2) {
      tokenPlot = new uPlot(plotOptions(tokenTarget, [
        { label: "input tokens", stroke: "#7aa2ff", width: 2 },
        { label: "output tokens", stroke: "#76e4b7", width: 2 },
      ]), [times, input, output], tokenTarget);
    }
    if (savingsTimes.length >= 2) {
      savingsPlot = new uPlot(plotOptions(savingsTarget, [
        { label: "verified saved", stroke: "#76e4b7", width: 2 },
        { label: "estimated saved", stroke: "#ffc56d", width: 2, dash: [6, 4] },
      ]), [savingsTimes, measured, estimated], savingsTarget);
    }
  }

  /** @param {"overview" | "optimizers" | "activity"} view */
  async function selectView(view) {
    if (view === viewValue) return;
    if (tokenTarget) resizeObserver?.unobserve(tokenTarget);
    if (savingsTarget) resizeObserver?.unobserve(savingsTarget);
    tokenPlot?.destroy();
    savingsPlot?.destroy();
    tokenPlot = undefined;
    savingsPlot = undefined;
    viewValue = view;
    await tick();
    if (view === "overview") {
      if (tokenTarget) resizeObserver?.observe(tokenTarget);
      if (savingsTarget) resizeObserver?.observe(savingsTarget);
      syncPlots();
    }
  }

  async function refresh() {
    loading = true;
    error = "";
    summaryError = false;
    windowValue = currentWindow();
    try {
      /** @type {{ name: string, promise: Promise<any>, apply: (value: any) => void }[]} */
      const requests = [
        { name: "usage", promise: getJSON(`/api/metrics/summary?window=${windowValue}`), apply: (value) => summary = value },
        { name: "attention", promise: getJSON(`/api/metrics/attention?window=${windowValue}`), apply: (value) => attention = value },
        { name: "token trend", promise: getJSON(`/api/metrics/timeseries?window=${windowValue}&bucket=${bucketFor(windowValue)}`), apply: (value) => series = value.series || [] },
        { name: "savings", promise: getJSON(`/api/metrics/efficiency?window=${windowValue}`), apply: (value) => efficiency = value },
        { name: "savings trend", promise: getJSON(`/api/metrics/efficiency/timeseries?window=${windowValue}&bucket=${bucketFor(windowValue)}`), apply: (value) => savingsSeries = value.series || [] },
        { name: "optimizer history", promise: getJSON(`/api/metrics/optimizer-snapshots?window=${windowValue}`), apply: (value) => optimizerSnapshots = value.snapshots || [] },
        { name: "sessions", promise: getJSON(`/api/metrics/sessions?window=${windowValue}&limit=5`), apply: (value) => sessions = value.sessions || [] },
        { name: "storage", promise: getJSON("/api/metrics/operations?limit=1"), apply: (value) => operations = value },
      ];
      const results = await Promise.allSettled(requests.map((request) => request.promise));
      /** @type {string[]} */
      const failed = [];
      results.forEach((result, index) => {
        if (result.status === "fulfilled") requests[index].apply(result.value);
        else failed.push(requests[index].name);
      });
      summaryError = failed.includes("usage");
      error = failed.length ? `Some data is temporarily unavailable: ${failed.join(", ")}` : "";
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
  $: optimizerReported = latestOptimizerSnapshots.map((snapshot) => {
    const normalized = snapshot.normalized || {};
    if (snapshot.optimizer === "headroom") {
      return { optimizer: "headroom", saved: normalized.tokens_saved_lifetime, rate: normalized.savings_pct_session, requests: normalized.requests_total, usd: normalized.usd_saved_lifetime };
    }
    if (snapshot.optimizer === "pxpipe") {
      return { optimizer: "pxpipe", saved: normalized.saved_input_tokens, rate: normalized.saved_pct_of_all_spend || normalized.saved_pct_input_only, requests: normalized.requests_total, usd: normalized.saved_usd };
    }
    return { optimizer: snapshot.optimizer, saved: normalized.total_saved_tokens, rate: normalized.savings_pct, requests: normalized.requests_total, usd: null };
  });
  $: optimizerMetrics = efficiency.optimizers || [];
  $: observed = efficiency.observed || {};
  $: totals = summary.totals || {};
  $: topModels = Object.entries(summary.by_model || {})
    .map(([model, values]) => ({ model, ...values }))
    .sort((a, b) => Number(b.tokens_in || 0) + Number(b.tokens_out || 0) - Number(a.tokens_in || 0) - Number(a.tokens_out || 0))
    .slice(0, 3);
  $: modelCount = Object.keys(summary.by_model || {}).length;
  $: totalTokens = Number(observed.tokens_in || summary.totals?.tokens_in || 0) + Number(observed.tokens_out || summary.totals?.tokens_out || 0);
  $: verifiedSaved = optimizerMetrics.reduce((total, optimizer) => total + Number(optimizer.measured_tokens_saved || 0), 0);
  $: measuredAttempts = optimizerMetrics.reduce((total, optimizer) => total + Number(optimizer.measured_attempts || 0), 0);
  $: optimizerAttempts = optimizerMetrics.reduce((total, optimizer) => total + Number(optimizer.attempts || 0), 0);
  $: failures = Number(summary.totals?.err_5xx || 0) + Number(summary.totals?.warn_4xx || 0);
  $: hasRequestData = !!summary.totals;
  $: requestHealth = summaryError
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
      <h2>{viewValue === "overview" ? "Token efficiency overview" : viewValue === "optimizers" ? "Optimizer details" : "Persisted activity"}</h2>
    </div>
    <span aria-live="polite" class:ok={!loading && !error} class:warn={loading || (!!error && hasRequestData)} class:fail={!!error && !hasRequestData} class="status">
      {error ? "partial data" : loading ? "refreshing" : `last ${windowValue}`}
    </span>
  </div>

  {#if error}
    <div class="error" role="alert">{error}. Available sections remain visible; use <code>apx status</code> if the problem persists.</div>
  {/if}

  <div class="view-tabs" aria-label="Dashboard views" role="tablist">
    <button type="button" role="tab" aria-selected={viewValue === "overview"} onclick={() => selectView("overview")}>Overview</button>
    <button type="button" role="tab" aria-selected={viewValue === "optimizers"} onclick={() => selectView("optimizers")}>Optimizers</button>
    <button type="button" role="tab" aria-selected={viewValue === "activity"} onclick={() => selectView("activity")}>Activity</button>
  </div>

  {#if viewValue === "overview"}
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

  {#if hasRequestData && Number(totals.requests || 0) === 0}
    <div class="empty-state">
      <strong>No requests in the last {windowValue}.</strong>
      <span>{number(operations.requests)} requests remain in local history. Choose a longer time window to include older activity.</span>
    </div>
  {/if}

  <div class="metrics" aria-label="Token efficiency summary">
    <article><span>Tokens processed</span><strong>{number(totalTokens)}<em class="metric-unit">&nbsp;tokens</em></strong><small>Observed in this window: {number(observed.tokens_in)} input + {number(observed.tokens_out)} output</small></article>
    <article class="token-card"><span>Verified tokens saved</span><strong>{number(verifiedSaved)}<em class="metric-unit">&nbsp;tokens</em></strong><small>Input tokens removed with matching per-request before/after evidence</small></article>
    <article><span>Savings coverage</span><strong>{percentage(measuredAttempts, optimizerAttempts)}</strong><small>{number(measuredAttempts)} of {number(optimizerAttempts)} optimizer attempts verified</small></article>
    <article><span>Request health</span><strong class:healthy={hasRequestData && failures === 0 && !summaryError}>{requestHealth}</strong><small>{number(summary.totals?.requests)} requests · p95 {ms(summary.latency_ms?.p95)}</small></article>
  </div>

  <div class="context-strip" aria-label="Usage context">
    <div><span>Cache reuse</span><strong>{number(totals.cache_read_tokens)}</strong><small>tokens read · {number(totals.cache_write_tokens)} written</small></div>
    <div><span>Estimated spend</span><strong>{money(totals.cost_est_usd)}</strong><small>based on configured model prices</small></div>
    <div><span>Models active</span><strong>{number(modelCount)}</strong><small>{topModels[0]?.model || "no model activity"}</small></div>
    <div><span>Tool activity</span><strong>{number(totals.tool_calls)}</strong><small>tool calls · {number(totals.streams)} streamed requests</small></div>
  </div>

  <div class="charts">
    <article class="chart"><div class="chart-heading"><div><h3>Token flow</h3><small>Observed input and output tokens</small></div><span class="status">{windowValue}</span></div><div class="chart-key"><span class="key-input">Input</span><span class="key-output">Output</span></div><div class:empty={series.length < 2} class="plot" role="img" aria-label={`Token flow over ${windowValue}: ${number(observed.tokens_in)} input and ${number(observed.tokens_out)} output tokens.`} bind:this={tokenTarget}></div>{#if series.length < 2}<p class="chart-empty">A trend appears after two time buckets.</p>{/if}</article>
    <article class="chart"><div class="chart-heading"><div><h3>Savings evidence</h3><small>Verified savings is distinct from estimates</small></div><span class="status">explicit</span></div><div class="chart-key"><span class="key-verified">Verified</span><span class="key-estimated">Estimated</span></div><div class:empty={savingsSeries.length < 2} class="plot" role="img" aria-label={`Savings over ${windowValue}: ${number(verifiedSaved)} verified tokens saved.`} bind:this={savingsTarget}></div>{#if savingsSeries.length < 2}<p class="chart-empty">A trend appears after two time buckets.</p>{/if}</article>
  </div>

  {:else if viewValue === "optimizers"}
  <div class="optimizer-grid">
    <article class="optimizer-health reported-savings">
      <div class="attention-heading"><h3>Optimizer-reported savings</h3><span class="status">native counters</span></div>
      <p class="section-note">Aggregate optimizer counters are shown separately from request-level verified savings.</p>
      {#if optimizerReported.length}
        <div class="health-list">
          {#each optimizerReported as optimizer (optimizer.optimizer)}
            <div class="health-row">
              <strong>{optimizer.optimizer}</strong><span>{number(optimizer.saved)} tokens</span>
              <small>{Number(optimizer.rate || 0).toFixed(1)}% reported savings · {number(optimizer.requests)} requests{optimizer.usd == null ? "" : ` · ${money(optimizer.usd)}`}</small>
            </div>
          {/each}
        </div>
      {:else}
        <p class="clear">No persisted optimizer counters in this window yet.</p>
      {/if}
    </article>
    <article class="optimizer-health">
      <div class="attention-heading"><h3>Optimizer health</h3><span class="status">{latestOptimizerSnapshots.length} tracked</span></div>
      {#if latestOptimizerSnapshots.length}
        <div class="health-list">
          {#each latestOptimizerSnapshots as snapshot (snapshot.optimizer)}
            {@const destination = optimizerDestination(snapshot.optimizer)}
            <div class:up={snapshot.reachable} class:down={!snapshot.reachable} class="health-row">
              <strong>{snapshot.optimizer}</strong><span>{snapshot.reachable ? "reachable" : "unreachable"}</span>
              <small>
                last checked {new Date(Number(snapshot.ts || 0) * 1000).toLocaleString()}
                {#if destination}
                  · <a class="optimizer-link" href={destination.href} target="_blank" rel="noopener">{destination.label}</a>
                {/if}
              </small>
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

  {:else}
  <div class="stored-grid" aria-label="Persisted activity">
    <article>
      <div class="attention-heading"><h3>Local history</h3><span class:ok={operations.durable} class:warn={!operations.durable} class="status">{operations.durable ? "durable" : "fallback"}</span></div>
      <div class="storage-value">{number(operations.requests)} requests stored</div>
      <small>{bytes(operations.db_size_bytes)} SQLite · {number(operations.retention_days)} day retention</small>
    </article>
    <article>
      <div class="attention-heading"><h3>Top models</h3><span class="status">{windowValue}</span></div>
      {#if topModels.length}
        <div class="health-list">
          {#each topModels as model (model.model)}
            <div class="health-row"><strong>{model.model}</strong><span>{number(model.requests)} requests</span><small>{number(Number(model.tokens_in || 0) + Number(model.tokens_out || 0))} tokens · {money(model.cost_usd)}</small></div>
          {/each}
        </div>
      {:else}
        <p class="clear">No model activity in this window.</p>
      {/if}
    </article>
    <article>
      <div class="attention-heading"><h3>Recent sessions</h3><span class="status">{sessions.length} shown</span></div>
      {#if sessions.length}
        <div class="health-list">
          {#each sessions as session (session.session_id)}
            <div class="health-row session-row"><strong title={session.session_id}>{session.last_model || "unknown model"}</strong><span>{number(session.requests)} requests</span><small>{session.chain_mode || "direct"} · {number(Number(session.tokens_in || 0) + Number(session.tokens_out || 0))} tokens · {money(session.cost_usd)}</small></div>
          {/each}
        </div>
      {:else}
        <p class="clear">No sessions in this window.</p>
      {/if}
    </article>
  </div>
  {/if}
</section>
