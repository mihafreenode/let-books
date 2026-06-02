# Docs Tests README

## Purpose

`tests/docs/` protects the browser-facing behavior of generated documentation pages.

These tests exist because generated HTML can pass validators while still failing in the actual reader experience.

## Why It Exists

Historical risk areas in docs generation include:

- duplicated or misplaced page chrome
- broken language selector behavior
- print views that expose navigation or duplicate branding
- viewport-specific layout regressions
- article pages that keep source-layout remnants after generator refactors

This directory keeps those risks close to the tests that exercise them.

## Test Groups

### `layout-validation.cjs`

Purpose:
- validates representative docs pages across multiple viewports.

Protects:
- one-header/one-main/one-footer structure
- expected header/article/footer ordering
- absence of oversized stray branding on article pages
- absence of duplicate page chrome inside article bodies

### `print-validation.cjs`

Purpose:
- validates the print rendering contract for representative docs pages.

Protects:
- print stylesheet presence
- print-only header/footer/endnote visibility
- hidden website chrome in print
- avoidance of duplicate branding and disclaimer blocks

### `language-selector-smoke.js`

Purpose:
- checks language switching across representative generated page types.

Protects:
- complete language option coverage
- HTML-target links rather than source-markdown links
- absence of fallback placeholder paths where generated variants exist

### `blog-language-selector.js`

Purpose:
- narrower regression test for localized blog article switching.

Protects:
- correct English/Slovenian article routing
- correct current-language selection state
- footer equivalent-language list behavior on article pages

## Related Validators

- `tools/validate-generated-site-structure.mjs`
- `tools/validate-blog.mjs`
- `tools/validate-localization-completeness.mjs`

Validators enforce file- and output-level guarantees.
These tests verify that the resulting pages still behave correctly in a browser.

## Related Workflows

- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`

## Limitations

These tests intentionally do not provide exhaustive visual regression coverage for every page.

They use representative pages and high-signal assertions so the suite stays maintainable while still catching the kinds of generator regressions that matter most.
