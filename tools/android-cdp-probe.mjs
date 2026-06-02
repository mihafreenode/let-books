#!/usr/bin/env node
/**
 * Purpose:
 * - Connect directly to a CDP page target and print runtime, network, console, dialog,
 *   and service-worker state.
 *
 * Why:
 * - Some mobile browser failures are only visible through direct CDP inspection.
 *
 * Detects / Enforces:
 * - Enforces visibility into page boot state and runtime failures after CDP is reachable.
 *
 * Limitations:
 * - Assumes CDP is already exposed locally on 127.0.0.1:9222.
 *
 * Related:
 * - tools/README.md
 * - tools/android-cdp-check.sh
 */
const targetFilter = process.argv[2] || "letbooks";
const runSeconds = Number(process.argv[3] || 8);
const clearOriginData = process.argv.includes("--clear-data");

const targets = await fetchJson("http://127.0.0.1:9222/json/list");
// Pick a page target by URL substring rather than title because mobile Chrome titles can be
// transient or generic during boot, while the URL is a more stable routing signal.
const page = targets.find((target) => target.type === "page" && target.url.toLowerCase().includes(targetFilter.toLowerCase()));

if (!page) {
  console.error(`No page target matched filter: ${targetFilter}`);
  process.exit(1);
}

const ws = new WebSocket(page.webSocketDebuggerUrl);
const pending = new Map();
let nextId = 1;

function send(method, params = {}) {
  const id = nextId++;
  ws.send(JSON.stringify({ id, method, params }));
  // CDP commands are correlated by id. Keeping the pending map explicit makes it easier to debug
  // transport-level problems than hiding the protocol behind a heavier client abstraction.
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
  });
}

function formatValue(value) {
  if (typeof value === "undefined") return "undefined";
  if (value === null) return "null";
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function print(label, payload) {
  console.log(`\n[${label}]`);
  if (typeof payload === "string") {
    console.log(payload);
    return;
  }
  console.log(JSON.stringify(payload, null, 2));
}

async function evaluate(expression) {
  // Runtime.evaluate is used instead of injecting a custom helper script so the probe can inspect
  // the current page state without permanently mutating the running mobile session.
  const result = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  return result.result?.value;
}

ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id) {
    const item = pending.get(message.id);
    if (!item) return;
    pending.delete(message.id);
    if (message.error) {
      item.reject(message.error);
      return;
    }
    item.resolve(message.result);
    return;
  }

  if (message.method === "Runtime.consoleAPICalled") {
    print("console", {
      type: message.params.type,
      args: (message.params.args || []).map((arg) => arg.value ?? arg.description ?? arg.type),
      stack: message.params.stackTrace?.callFrames?.slice(0, 5) || []
    });
  } else if (message.method === "Runtime.exceptionThrown") {
    print("exception", {
      text: message.params.exceptionDetails?.text,
      lineNumber: message.params.exceptionDetails?.lineNumber,
      columnNumber: message.params.exceptionDetails?.columnNumber,
      url: message.params.exceptionDetails?.url,
      exception: message.params.exceptionDetails?.exception?.description || message.params.exceptionDetails?.exception?.value || null
    });
  } else if (message.method === "Log.entryAdded") {
    print("log", message.params.entry);
  } else if (message.method === "Network.loadingFailed") {
    print("network-failed", {
      url: message.params?.documentURL,
      errorText: message.params?.errorText,
      canceled: message.params?.canceled,
      blockedReason: message.params?.blockedReason,
      type: message.params?.type
    });
  } else if (message.method === "Page.javascriptDialogOpening") {
    print("dialog", message.params);
  }
});

await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

await send("Runtime.enable");
await send("Page.enable");
await send("Log.enable");
await send("Network.enable");

print("target", { title: page.title, url: page.url });

if (clearOriginData) {
  const origin = new URL(page.url).origin;
  // Clear origin data only on explicit request because service-worker/cache state is often the
  // bug being investigated. Default behavior should preserve the real session for diagnosis.
  await send("Storage.clearDataForOrigin", {
    origin,
    storageTypes: "all"
  });
  print("storage-cleared", { origin });
  await send("Page.reload", { ignoreCache: true });
  await new Promise((resolve) => setTimeout(resolve, 1500));
}

const initialState = await evaluate(`(async () => ({
  href: location.href,
  hash: location.hash,
  readyState: document.readyState,
  bodyClass: document.body?.className || '',
  hasBootSplash: !!document.getElementById('boot-splash'),
  rootText: document.getElementById('app-root')?.innerText?.slice(0, 500) || '',
  serviceWorkerController: navigator.serviceWorker?.controller?.scriptURL || null,
  serviceWorkerRegistrations: navigator.serviceWorker ? (await navigator.serviceWorker.getRegistrations()).map((r) => ({
    scope: r.scope,
    active: r.active?.scriptURL || null,
    waiting: r.waiting?.scriptURL || null,
    installing: r.installing?.scriptURL || null
  })) : [],
  lifecycle: window.__letBooksLifecycle || []
}))()`);
print("initial-state", initialState);

// Force one reload through CDP so network, console, lifecycle, and service-worker observations
// all describe the same fresh boot sequence.
await send("Page.reload", { ignoreCache: true });
await new Promise((resolve) => setTimeout(resolve, Math.max(1000, runSeconds * 1000)));

const finalState = await evaluate(`(async () => ({
  href: location.href,
  hash: location.hash,
  readyState: document.readyState,
  bodyClass: document.body?.className || '',
  hasBootSplash: !!document.getElementById('boot-splash'),
  rootText: document.getElementById('app-root')?.innerText?.slice(0, 800) || '',
  currentNav: Array.from(document.querySelectorAll('[data-nav].is-current')).map((node) => node.getAttribute('data-nav')),
  serviceWorkerController: navigator.serviceWorker?.controller?.scriptURL || null,
  serviceWorkerRegistrations: navigator.serviceWorker ? (await navigator.serviceWorker.getRegistrations()).map((r) => ({
    scope: r.scope,
    active: r.active?.scriptURL || null,
    waiting: r.waiting?.scriptURL || null,
    installing: r.installing?.scriptURL || null
  })) : [],
  resourceSummary: performance.getEntriesByType('resource').slice(-20).map((entry) => ({
    name: entry.name,
    initiatorType: entry.initiatorType,
    transferSize: entry.transferSize,
    duration: Math.round(entry.duration)
  })),
  lifecycle: window.__letBooksLifecycle || []
}))()`);
print("final-state", finalState);

ws.close();

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.json();
}
