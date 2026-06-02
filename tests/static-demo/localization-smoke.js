#!/usr/bin/env node
"use strict";

/**
 * Purpose:
 * Verify the static demo's localization resource completeness and the
 * runtime localization contract expected by `static-demo/app.js`.
 *
 * Why:
 * Locale files can stay present while runtime assumptions drift. This
 * test protects against missing locale coverage, mismatched keys, and
 * reintroduction of transliteration shortcuts the repository no longer
 * permits.
 *
 * Protects:
 * - locale file presence
 * - key parity with English
 * - JSON-string locale values
 * - expected locale-loading implementation markers in `app.js`
 *
 * Limitations:
 * Does not evaluate translation quality, layout, or full interactive
 * demo behavior.
 *
 * Related:
 * - tests/static-demo/README.md
 * - static-demo/README.md
 * - .github/workflows/ci.yml
 */

const fs = require("fs");
const path = require("path");

const appJsPath = path.resolve(__dirname, "../../static-demo/app.js");
const localesDir = path.resolve(__dirname, "../../static-demo/locales");
const source = fs.readFileSync(appJsPath, "utf8");

const requiredLocales = ["en", "sl", "hr", "bs", "sr-Latn", "sr-Cyrl", "mk", "sq", "de", "it", "fr"];
const optionalLocales = ["es"];
const allLocales = [...requiredLocales, ...optionalLocales];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function readLocale(locale) {
  const filePath = path.join(localesDir, `${locale}.json`);
  assert(fs.existsSync(filePath), `Missing locale file: ${locale}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// These source markers intentionally protect the runtime contract, not
// just file presence. The locale set is only trustworthy if `app.js`
// still uses the expected JSON loading and validation flow.
assert(source.includes("const LOCALE_FILES = Object.fromEntries"), "Expected JSON locale loader in app.js.");
assert(source.includes("validateLocaleResources()"), "Expected locale validation in app.js.");
assert(!source.includes("transliterateSerbianUi"), "Runtime Serbian transliteration helper should not remain.");

const english = readLocale("en");
const englishKeys = Object.keys(english);
assert(englishKeys.length > 200, `Unexpectedly small English locale key set: ${englishKeys.length}`);

for (const locale of allLocales) {
  const data = readLocale(locale);
  const keys = Object.keys(data);
  assert(keys.length === englishKeys.length, `Locale ${locale} has ${keys.length} keys; expected ${englishKeys.length}.`);

  for (const key of englishKeys) {
    assert(Object.prototype.hasOwnProperty.call(data, key), `Locale ${locale} is missing key: ${key}`);
    assert(typeof data[key] === "string", `Locale ${locale} key ${key} is not a string.`);
  }
}

console.log("static-demo localization smoke check passed.");
