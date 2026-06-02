# Static Demo Tests README

## Purpose

`tests/static-demo/` protects the runtime contract of the repository's local-first demo.

## Why It Exists

The static demo is a real executable artifact, not just a mock. Localization and runtime behavior can regress even when files still exist on disk.

This directory exists to catch contract-level drift such as:

- missing locale files
- mismatched translation keys
- runtime localization loader changes
- reintroduction of transliteration shortcuts that conflict with repository language rules

## Current Test Group

### `localization-smoke.js`

Purpose:
- verifies locale resource completeness and the intended localization runtime contract in `static-demo/app.js`.

Protects:
- required locale coverage
- key parity with English
- string-valued locale entries
- expected JSON locale loading path
- absence of deprecated runtime Serbian transliteration behavior

## Related Validators

- `tools/validate_environment.py`
- `tools/validate-localization-completeness.mjs` indirectly for reader-facing generated docs expectations

## Related Workflows

- `.github/workflows/ci.yml`

## Limitations

This test does not evaluate translation quality, UI layout, or full user interaction inside the demo.

It is intentionally a smoke test for localization completeness and runtime contract stability.
