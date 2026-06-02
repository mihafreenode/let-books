# Tests README

## Purpose

`tests/` contains executable verification for repository behavior that is easiest to understand in a running browser or runnable demo surface.

Treat these tests as executable documentation.

They preserve:

- runtime expectations
- browser-facing regressions
- generated-page behavior
- navigation guarantees
- localization assumptions at runtime
- static-demo contract expectations

The goal is not only to catch failures.

The goal is to preserve why those failures matter.

## Why The Repository Contains Tests

This repository already has a strong validator layer under `tools/`.

That layer is necessary, but not sufficient.

Some failures only become obvious when content is loaded into a browser or when a demo artifact is exercised like a user would exercise it.

Examples:

- generated HTML is structurally valid but layout breaks at real viewports
- print output duplicates branding or shows hidden navigation
- language selectors exist in markup but resolve to the wrong page at runtime
- locale files exist but the static demo no longer loads them using the intended runtime contract

Tests keep those repository guarantees close to the behavior they protect.

## Knowledge Preservation Hierarchy

For test knowledge preservation, prefer:

1. `tests/README.md`
2. subdirectory README files
3. test file headers
4. high-value inline comments
5. additional documentation only when necessary

Keep knowledge close to the tests.

## Test Families

### `tests/docs/`

Purpose:
- Browser-facing checks for generated docs pages.

What this family protects:
- layout integrity across viewports
- print-mode behavior
- language selector behavior
- article/index navigation consistency
- generated pages that must behave correctly after all generators finish

Representative tests:
- `layout-validation.cjs`
- `print-validation.cjs`
- `language-selector-smoke.js`
- `blog-language-selector.js`

### `tests/static-demo/`

Purpose:
- Runtime smoke checks for the local-first installable demo.

What this family protects:
- locale file presence
- locale key parity
- `static-demo/app.js` localization contract assumptions
- removal of runtime transliteration shortcuts the repo no longer allows

Representative tests:
- `localization-smoke.js`

## Repository Guarantees Protected Through Testing

These tests help protect repository promises such as:

- browser-visible docs output stays usable across representative viewports
- print-mode docs output behaves like a curated printable document, not like a raw webpage
- language switching works on generated pages, not just in source templates
- static-demo localization remains complete enough to support the supported locale set
- runtime behavior remains consistent with the validators and generation pipeline

## Relationship To Validators

Repository governance follows this order:

1. validator or automated check
2. regression test
3. documentation
4. educational comments
5. visual explanation

In practice:

- validators enforce guarantees
- tests verify and protect behavior
- workflows orchestrate enforcement
- documentation explains intent

Example split in this repository:

- `tools/validate-blog.mjs` and `tools/validate-generated-site-structure.mjs` enforce generated-site guarantees
- `tests/docs/*.js` and `tests/docs/*.cjs` verify that the generated pages still behave correctly in a browser
- `.github/workflows/ci.yml` and `.github/workflows/docs.yml` decide when those checks run and whether failures block progress

## How To Run

Run from the repository root.

### Docs Layout Validation

Serve the repository first, then run either:

```bash
DOCS_BASE_URL=http://127.0.0.1:4173 python3 tools/validate_layout_structure.py
```

or the underlying browser test directly:

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

### Static Demo Localization Smoke Test

```bash
node tests/static-demo/localization-smoke.js
```

## Related Validators

- `tools/validate-generated-site-structure.mjs`
- `tools/validate-blog.mjs`
- `tools/validate-content-parity.mjs`
- `tools/validate-localization-completeness.mjs`
- `tools/validate_translation_parity.py`
- `tools/validate_environment.py`

## Related Workflows

- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`

Those workflows run tests after generation and validator stages because browser-facing checks are most useful once the repository already knows that the generated docs tree exists and the major file-level guarantees still hold.

## Reusable Testing Patterns

The current test suite already demonstrates several reusable patterns:

### Browser-facing validation for generated sites

Problem solved:
- generated HTML can be structurally correct but behaviorally wrong in a browser.

Reuse potential:
- high.

### Print-mode regression testing

Problem solved:
- print styles often regress silently because they are rarely exercised in routine UI review.

Reuse potential:
- high.

### Navigation smoke testing on generated artifacts

Problem solved:
- generated selectors, links, and localized routes can drift after generator changes.

Reuse potential:
- high.

### Runtime localization smoke testing

Problem solved:
- locale files may exist while the application runtime contract quietly changes underneath them.

Reuse potential:
- high.

## Pattern Graduation

A testing pattern should be treated as reusable only when it:

- solves a recurring problem
- applies beyond a single feature
- reduces maintenance effort
- remains understandable without heavy project-specific context

Prefer proven patterns over speculative frameworks.

## Engineering Knowledge Preservation

Tests are repository memory.

A well-documented test should function as both:

- executable verification
- a permanent record of why the behavior matters

Future contributors and AI-assisted agents should be able to understand what a test protects, why it exists, and which repository guarantee it supports without reconstructing that context from commit history.
