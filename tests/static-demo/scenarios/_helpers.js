#!/usr/bin/env node
"use strict";

/**
 * Shared harness for draft static-demo scenario tutorials.
 *
 * Purpose:
 * Keep the scenario files focused on use-case intent rather than repeated
 * server and browser bootstrapping.
 *
 * Why this matters:
 * The scenario layer is meant to preserve understanding of documented user
 * promises. These helpers support that layer, but they are not themselves the
 * contract being reviewed.
 */

const path = require("path");
const http = require("http");
const fs = require("fs");
const childProcess = require("child_process");

function loadPlaywright() {
  try {
    return require("playwright");
  } catch (_) {
    const pwPath = path.join(childProcess.execSync("npm root -g").toString().trim(), "playwright");
    return require(pwPath);
  }
}

const { chromium } = loadPlaywright();
const ROOT = path.resolve(__dirname, "../../..");

function createServer(port) {
  const mimeTypes = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".ico": "image/x-icon",
    ".webmanifest": "application/manifest+json",
    ".woff2": "font/woff2"
  };

  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${port}`);
    const normalizedPath = decodeURIComponent(url.pathname);
    const filePath = path.join(ROOT, normalizedPath === "/" ? "index.html" : normalizedPath.replace(/^\//, ""));
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    });
  });
}

async function startServer() {
  const server = createServer(0);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  return {
    server,
    port,
    baseUrl: `http://127.0.0.1:${port}`
  };
}

async function createPage() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ serviceWorkers: "block" });
  const page = await context.newPage();
  return { browser, context, page };
}

function installSeedPromptHandler(page, mode) {
  const handler = async (dialog) => {
    const message = dialog.message();
    if (!message.includes("Load demo data?")) {
      await dialog.dismiss();
      return;
    }

    if (mode === "accept") {
      await dialog.accept();
      return;
    }

    await dialog.dismiss();
  };

  page.on("dialog", handler);
  return () => page.off("dialog", handler);
}

async function gotoStaticDemo(page, baseUrl, hash, options = {}) {
  const stopHandlingDialog = installSeedPromptHandler(page, options.seedPrompt || "dismiss");
  try {
    await page.goto(`${baseUrl}/static-demo/index.html${hash}`, { waitUntil: "networkidle" });
    await page.getByRole("navigation", { name: "Primary" }).waitFor({ timeout: 10000 });

    // This wait protects scenario readability more than any one route detail.
    // The current demo does not expose a stable per-screen landmark, so the
    // harness waits for route content to become non-empty before scenario-level
    // assertions begin.
    await page.waitForFunction(() => {
      const root = document.getElementById("app-root");
      return Boolean(root && root.textContent && root.textContent.trim().length > 0);
    });
  } finally {
    stopHandlingDialog();
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function assertVisible(locator, description) {
  await locator.waitFor({ state: "visible", timeout: 10000 });
  const visible = await locator.isVisible();
  assert(visible, description);
}

async function withScenario(title, run) {
  const { server, baseUrl } = await startServer();
  const { browser, context, page } = await createPage();
  try {
    console.log(`\n--- ${title} ---`);
    await run({ page, baseUrl, context });
    console.log(`PASS: ${title}`);
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

module.exports = {
  assert,
  assertVisible,
  gotoStaticDemo,
  withScenario
};
