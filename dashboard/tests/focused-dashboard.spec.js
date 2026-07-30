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
    totals: { requests: 12, ok: 12, warn_4xx: 0, err_5xx: 0, tokens_in: 1200, tokens_out: 300 },
    latency_ms: { p95: 42 },
  },
  attention: { alerts: [] },
  timeseries: { series: [{ ts: 1_700_000_000, tokens_in: 1200, tokens_out: 300 }] },
  efficiency: {
    durable: true,
    observed: { tokens_in: 1200, tokens_out: 300 },
    optimizers: [{ optimizer: "headroom", attempts: 4, measured_attempts: 3, estimated_attempts: 1, unavailable_attempts: 0, measured_tokens_saved: 300 }],
  },
  savings: { series: [{ ts: 1_700_000_000, measured_tokens_saved: 300, estimated_tokens_saved: 80 }] },
  snapshots: { snapshots: [{ ts: 1_700_000_000, optimizer: "headroom", reachable: true }] },
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
              : path === "/api/metrics/optimizer-snapshots" ? fixture.snapshots : null;
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

test("renders a focused, responsive token-efficiency overview", async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.getByRole("heading", { name: "What needs your attention" })).toBeVisible();
  await expect(page.getByText("Verified tokens saved")).toBeVisible();
  await expect(page.getByText("Tokens processed")).toBeVisible();
  await expect(page.getByText("Savings coverage")).toBeVisible();
  await expect(page.getByText("Gateway health")).toBeVisible();
  await expect(page.getByText("Advanced operational details")).toHaveCount(0);
  await expect(page.getByText("300", { exact: true })).toBeVisible();
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("label[for='window-select']")).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByText("Verified tokens saved")).toBeVisible();
  const layout = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    overflow: [...document.querySelectorAll("*")]
      .filter((element) => element.getBoundingClientRect().right > window.innerWidth + 1)
      .map((element) => `${element.tagName}.${element.className}`),
  }));
  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewport);
  expect(layout.overflow).toEqual([]);
});
