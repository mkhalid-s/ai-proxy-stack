import { test, expect } from "@playwright/test";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dirname, "../..");
const assets = join(root, "share/dashboard");
let server;
let baseURL;

const fixture = {
  summary: {
    totals: { requests: 12, ok: 12, warn_4xx: 0, err_5xx: 0, tokens_in: 1200, tokens_out: 300, cache_read_tokens: 240, cache_write_tokens: 40, cost_est_usd: 0.0425, tool_calls: 5, streams: 10 },
    latency_ms: { p95: 42 },
    by_model: {
      "claude-sonnet-5": { requests: 10, tokens_in: 1000, tokens_out: 250, cost_usd: 0.035 },
      "claude-opus-5": { requests: 2, tokens_in: 200, tokens_out: 50, cost_usd: 0.0075 },
    },
  },
  attention: {
    alerts: [
      { id: "one", severity: "warning", title: "Optimizer unavailable", detail: "Headroom could not be reached.", action: "Run apx status." },
      { id: "two", severity: "info", title: "Savings unavailable", detail: "No verified attempt was reported.", action: "Check optimizer telemetry." },
      { id: "three", severity: "info", title: "Update available", detail: "A newer optimizer release is cached.", action: "Run apx optimizer latest." },
      { id: "four", severity: "critical", title: "Repeated failures", detail: "Requests failed in this window.", action: "Review apx service logs." },
    ],
  },
  timeseries: { series: [{ ts: 1_700_000_000, tokens_in: 500, tokens_out: 120 }, { ts: 1_700_000_060, tokens_in: 700, tokens_out: 180 }] },
  efficiency: {
    durable: true,
    observed: { tokens_in: 1200, tokens_out: 300 },
    optimizers: [{ optimizer: "headroom", attempts: 4, measured_attempts: 3, estimated_attempts: 1, unavailable_attempts: 0, measured_tokens_saved: 300 }],
  },
  savings: { series: [{ ts: 1_700_000_000, measured_tokens_saved: 120, estimated_tokens_saved: 30 }, { ts: 1_700_000_060, measured_tokens_saved: 180, estimated_tokens_saved: 50 }] },
  snapshots: {
    snapshots: [
      { ts: 1_700_000_000, optimizer: "headroom", reachable: true, normalized: { tokens_saved_lifetime: 840, savings_pct_session: 28.5, requests_total: 12, usd_saved_lifetime: 0.018 } },
      { ts: 1_700_000_000, optimizer: "pxpipe", reachable: true, normalized: {} },
      { ts: 1_700_000_000, optimizer: "squeezr", reachable: true, normalized: {} },
    ],
  },
  sessions: { sessions: [{ session_id: "session-1", last_model: "claude-sonnet-5", chain_mode: "headroom", requests: 12, tokens_in: 1200, tokens_out: 300, cost_usd: 0.0425, optimizer_attempts: 4, measured_tokens_saved: 300, measured_attempts: 3, unavailable_attempts: 0 }] },
  operations: { durable: true, requests: 240, db_size_bytes: 524288, retention_days: 30 },
};

async function sendAsset(response, filename, contentType) {
  try {
    response.writeHead(200, { "content-type": contentType, "cache-control": "no-cache" });
    response.end(await readFile(filename));
  } catch {
    response.writeHead(404).end();
  }
}

test.beforeAll(async () => {
  server = createServer(async (request, response) => {
    const path = new URL(request.url || "/", "http://dashboard.test").pathname;
    if (path === "/" || path === "/dashboard") return sendAsset(response, join(root, "share/dashboard.html"), "text/html; charset=utf-8");
    if (path === "/assets/app.js") return sendAsset(response, join(assets, "app.js"), "text/javascript; charset=utf-8");
    if (path === "/assets/app.css") return sendAsset(response, join(assets, "app.css"), "text/css; charset=utf-8");
    const payload = path === "/api/metrics/summary" ? fixture.summary
      : path === "/api/metrics/attention" ? fixture.attention
        : path === "/api/metrics/timeseries" ? fixture.timeseries
          : path === "/api/metrics/efficiency/timeseries" ? fixture.savings
            : path === "/api/metrics/efficiency" ? fixture.efficiency
              : path === "/api/metrics/optimizer-snapshots" ? fixture.snapshots
                : path === "/api/metrics/sessions" ? fixture.sessions
                  : path === "/api/metrics/operations" ? fixture.operations : null;
    if (payload) {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(payload));
      return;
    }
    response.writeHead(404).end();
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseURL = `http://127.0.0.1:${server.address().port}`;
});

test.afterAll(async () => new Promise((resolve) => server.close(resolve)));

test("renders a focused, responsive token-efficiency overview", async ({ page }, testInfo) => {
  const cssResponse = page.waitForResponse((response) => response.url().endsWith("/assets/app.css"));
  await page.goto(baseURL);
  expect((await cssResponse).status()).toBe(200);
  await expect(page.getByRole("heading", { name: "Token efficiency overview" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByText("Verified input saved")).toBeVisible();
  await expect(page.getByText("Tokens processed")).toBeVisible();
  await expect(page.getByText("Verified input reduction")).toBeVisible();
  await expect(page.getByText("Request health")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verified input journey" })).toBeVisible();
  await expect(page.getByText("Verified baseline input", { exact: true })).toBeVisible();
  await expect(page.getByText("20.0% verified reduction")).toBeVisible();
  await expect(page.getByText(/3 of 4 optimizer attempts supplied valid/)).toBeVisible();
  await expect(page.getByText("Advanced operational details")).toHaveCount(0);
  await expect(page.locator(".token-card strong")).toHaveText("300 tokens");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("#svelte-overview > .loading")).toHaveCount(0);
  await expect(page.locator("label[for='window-select']")).toBeVisible();
  await expect(page.getByRole("img", { name: /Token flow over 1h/ })).toBeVisible();
  await expect(page.getByText("Savings unavailable")).toHaveCount(0);
  await page.getByRole("button", { name: "Review all 4 signals" }).click();
  await expect(page.getByText("Repeated failures")).toBeVisible();
  await page.getByRole("button", { name: "Show only the first signal" }).click();
  await expect(page.getByText("Repeated failures")).toHaveCount(0);

  const desktopLayout = await page.evaluate(() => {
    const metrics = document.querySelector(".metrics");
    const charts = document.querySelector(".charts");
    const cards = [...document.querySelectorAll(".metrics > article")];
    const chartCards = [...document.querySelectorAll(".charts > article")];
    return {
      metricsDisplay: getComputedStyle(metrics).display,
      metricColumns: getComputedStyle(metrics).gridTemplateColumns.split(" ").length,
      chartColumns: getComputedStyle(charts).gridTemplateColumns.split(" ").length,
      cardBorder: getComputedStyle(cards[0]).borderTopWidth,
      chartWidths: chartCards.map((card) => card.getBoundingClientRect().width),
    };
  });
  expect(desktopLayout.metricsDisplay).toBe("grid");
  expect(desktopLayout.metricColumns).toBe(4);
  expect(desktopLayout.chartColumns).toBe(2);
  expect(desktopLayout.cardBorder).toBe("1px");
  expect(desktopLayout.chartWidths.every((width) => width < 700)).toBeTruthy();
  await page.screenshot({ path: testInfo.outputPath("dashboard-desktop.png"), fullPage: true });

  await page.getByRole("tab", { name: "Optimizers" }).click();
  await expect(page.getByRole("heading", { name: "Optimizer details" })).toBeVisible();
  await expect(page.getByText("Verified savings this window")).toBeVisible();
  await expect(page.locator(".optimizer-overview").getByText("75%")).toBeVisible();
  await expect(page.getByText("840 tokens")).toBeVisible();
  await expect(page.locator("a[href='/proxy/headroom']")).toContainText("Open dashboard");
  await expect(page.locator("a[href='/proxy/pxpipe/']")).toContainText("Open dashboard");
  await expect(page.locator("a[href='/proxy/squeezr/']")).toContainText("Open dashboard");
  await expect(page.locator(".metrics")).toHaveCount(0);
  await page.screenshot({ path: testInfo.outputPath("dashboard-optimizers.png"), fullPage: true });

  await page.getByRole("tab", { name: "Activity" }).click();
  await expect(page.getByRole("heading", { name: "Persisted activity" })).toBeVisible();
  await expect(page.getByText("240 requests stored")).toBeVisible();
  await expect(page.getByText(/300 verified saved/)).toBeVisible();
  await expect(page.locator(".optimizer-cards")).toHaveCount(0);
  await page.screenshot({ path: testInfo.outputPath("dashboard-activity.png"), fullPage: true });

  await page.locator("#window-select").selectOption("6h");
  await expect(page.locator("#window-select")).toHaveValue("6h");
  await page.reload();
  await expect(page.getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#window-select")).toHaveValue("6h");
  await expect(page.getByRole("img", { name: /Token flow over 6h/ })).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByText("Verified input saved")).toBeVisible();
  await expect.poll(() => page.evaluate(() => [...document.querySelectorAll(".plot")].every((plot) => {
    const rendered = plot.querySelector(".uplot");
    return !rendered || rendered.getBoundingClientRect().width <= plot.getBoundingClientRect().width + 1;
  }))).toBeTruthy();
  const layout = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    overflow: [...document.querySelectorAll("*")]
      .filter((element) => !element.closest(".plot") && element.getBoundingClientRect().right > window.innerWidth + 1)
      .map((element) => `${element.tagName}.${element.className}`),
    chartColumns: getComputedStyle(document.querySelector(".charts")).gridTemplateColumns.split(" ").length,
  }));
  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewport);
  expect(layout.overflow).toEqual([]);
  expect(layout.chartColumns).toBe(1);
  await page.screenshot({ path: testInfo.outputPath("dashboard-mobile.png"), fullPage: true });
});

test("labels unavailable request data without claiming the gateway is healthy", async ({ page }) => {
  await page.route("**/api/metrics/summary?**", (route) => route.fulfill({
    status: 503,
    contentType: "application/json",
    body: JSON.stringify({ error: "fixture unavailable" }),
  }));
  await page.goto(baseURL);
  await expect(page.getByRole("alert")).toBeVisible();
  await expect(page.getByText("Unavailable", { exact: true })).toBeVisible();
  await expect(page.getByText("Verified input saved")).toBeVisible();
  await page.getByRole("tab", { name: "Optimizers" }).click();
  await expect(page.getByText("840 tokens")).toBeVisible();
});
