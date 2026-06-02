# Tests README

## Purpose

`tests/` holds executable regression checks for browser-facing documentation behavior and the static demo.

This directory complements `tools/` validators.

- validators primarily enforce repository guarantees at the file, generation, and policy level
- tests primarily exercise runtime behavior in a browser or app-like environment

## Why It Exists

Some failures do not show up in source files or generated artifacts alone.

Examples:

- language selectors can look correct in HTML but navigate incorrectly at runtime
- print layouts can keep duplicate headers, navigation, or hidden content
- responsive docs layouts can break only in a browser viewport
- static-demo localization can drift even when locale JSON files still exist

The tests directory preserves those runtime expectations close to the implementation.

## Test Groups

### `tests/docs/`

Purpose:
- Browser-oriented checks for generated documentation pages.

Current tests:
- `layout-validation.cjs`: checks representative docs pages across multiple viewports for layout regressions and structural browser-visible failures
- `print-validation.cjs`: checks print-mode output for duplicated branding, visible navigation chrome, overflow, and missing print-only elements
- `language-selector-smoke.js`: verifies the docs language selector across representative page types
- `blog-language-selector.js`: regression-focused check for localized blog article language switching

Problems Prevented:
- broken language switching
- print stylesheet regressions
- viewport-specific layout failures
- generated pages that pass file-level validation but fail in a real browser

### `tests/static-demo/`

Purpose:
- Runtime smoke checks for the installable local demo.

Current tests:
- `localization-smoke.js`: verifies locale-file presence, locale key parity, and critical localization expectations in `static-demo/app.js`

Problems Prevented:
- missing locale files
- missing translation keys
- regression to runtime transliteration shortcuts that the repo no longer allows

### `tools/tests/`

Purpose:
- Focused regression tests for tooling internals.

Current tests:
- `test_localization_alignment.py`: protects known tricky source-to-localized block alignment cases used by localization maintenance tooling

Problems Prevented:
- wrong-but-plausible heading matches
- alignment regressions that would damage sidecars, patch-assist output, and parity validation

## How To Run

Run from the repository root.

Docs browser/layout tests usually expect Playwright to be installed.

### Static Demo Localization Smoke Test

```bash
node tests/static-demo/localization-smoke.js
```

### Docs Layout Validation

Serve the repository root first, then run:

```bash
DOCS_BASE_URL=http://127.0.0.1:4173 python3 tools/validate_layout_structure.py
```

Or run the underlying browser check directly:

```bash
node tests/docs/layout-validation.cjs
```

### Docs Print Validation

```bash
DOCS_BASE_URL=http://127.0.0.1:4173 node tests/docs/print-validation.cjs
```

### Docs Language Selector Checks

```bash
node tests/docs/language-selector-smoke.js
node tests/docs/blog-language-selector.js
```

### Tooling Alignment Regression Test

```bash
PYTHONPATH=tools python3 -m unittest tools/tests/test_localization_alignment.py
```

## Related Validators And Workflows

Related validators:
- `tools/validate-generated-site-structure.mjs`
- `tools/validate-blog.mjs`
- `tools/validate-content-parity.mjs`
- `tools/validate-localization-completeness.mjs`
- `tools/validate_translation_parity.py`

Related workflows:
- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`

The workflows orchestrate these tests after the docs/site generation steps. The order matters: browser-facing tests are more useful after generators and file-level validators have already established that the docs tree is present and structurally sane.

## Reuse Potential

This directory reflects a reusable pattern:

- validators enforce repository policy
- tests protect runtime behavior and browser-visible regressions

That split is useful in documentation-heavy repositories where generated static output is part of the product surface.
