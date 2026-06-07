#!/usr/bin/env node
"use strict";

/**
 * Purpose:
 * Run all draft static-demo scenario tutorials in a single command.
 *
 * Why:
 * Keep the current scenario layer easy to exercise locally without turning it
 * into a CI-gated regression suite yet.
 *
 * Notes:
 * - intentionally draft and non-blocking at the repository governance level
 * - exits non-zero if any draft scenario script fails locally
 * - only targets `*.draft.js` files in this directory
 */

const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

const scenariosDir = __dirname;
const currentFile = path.basename(__filename);

const draftScripts = fs
  .readdirSync(scenariosDir)
  .filter((file) => file.endsWith(".draft.js"))
  .filter((file) => file !== currentFile)
  .sort();

if (!draftScripts.length) {
  console.log("No draft static-demo scenario scripts found.");
  process.exit(0);
}

console.log(`Running ${draftScripts.length} draft static-demo scenario scripts...`);

for (const script of draftScripts) {
  const scriptPath = path.join(scenariosDir, script);
  console.log(`\n==> ${script}`);
  childProcess.execFileSync(process.execPath, [scriptPath], {
    stdio: "inherit"
  });
}

console.log(`\nAll ${draftScripts.length} draft static-demo scenario scripts passed.`);
