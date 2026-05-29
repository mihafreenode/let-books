# LetBooks Development Guide

## Overview

This repository contains a static landing page, a multilingual documentation site, a local-first PWA demo, and the future BookDonationRegistry backend specification.

The current executable deliverable is the static demo under `static-demo/`.

No backend or database is needed for local development.

---

## Quick Start

### Prerequisites

- Python 3.x (for the local HTTP server)
- Node.js 22+ (for running tools and tests)
- A modern browser (Chrome, Firefox, Safari)

### Recommended

- ImageMagick (for screenshot workflows)
- Playwright (for UI verification) — installed separately via `playwright-cli`
- Hunspell with dictionaries for `en`, `sl`, `hr`, `bs`, `sr`, `mk`, `sq`, `de`, `it`, `fr`, `es`
- `jq` (for JSON processing in scripts)
- `yamllint` (for workflow validation)

### Serve the site locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:
- `http://127.0.0.1:8000/` — public landing page
- `http://127.0.0.1:8000/docs/` — documentation hub
- `http://127.0.0.1:8000/static-demo/` — static demo

### Serve only the docs

```bash
python3 -m http.server 8000 --directory docs
```

Then open `http://127.0.0.1:8000/en/index.html`.

---

## Repository Structure

```
root
├── index.html                 Public landing page
├── CNAME                      GitHub Pages custom domain
├── og-image.png               Social preview image
├── favicon/                   Favicon package with site.webmanifest
│
├── docs/                      Documentation site
│   ├── index.html             Language hub
│   ├── en/                    English docs (4 pages)
│   ├── sl/                    Slovenian docs (4 pages)
│   ├── hr/ bs/ sr-Latn/ ...   Other locale docs
│   ├── assets/                Shared CSS, JS, SVG icons, mock images
│   ├── style-guide/           Terminology, writing, localization, publishing
│   └── knowledge-platform-bootstrap.md
│
├── static-demo/               Local-first PWA demo
│   ├── index.html             App shell
│   ├── app.js                 Application code
│   ├── app.css                Application styles
│   ├── locales/*.json         UI translation files (12 locales)
│   ├── vendor/                Vendored browser libraries
│   └── service-worker.js      PWA service worker
│
├── tools/                     Development and build tools
│   ├── generate-static-seo.mjs  Regenerates <head> metadata for all pages
│   ├── android-cdp-check.sh     Android debugging helpers
│   └── ...
│
├── tests/
│   └── static-demo/
│       └── localization-smoke.js  Validates locale key completeness
│
├── .github/workflows/
│   ├── ci.yml                 Push and PR validation
│   └── docs.yml               GitHub Pages deployment
│
├── AGENTS.md                  Full product specification
├── AGENTS-Implementation.md   Tactical implementation guidance
└── README.md                  Project overview
```

---

## Node.js Tools

The project uses Node.js tools directly (no package.json). Run them with `node`:

```bash
# Regenerate SEO metadata for all HTML pages
node tools/generate-static-seo.mjs

# Run localization smoke test
node tests/static-demo/localization-smoke.js
```

---

## Localization

### Static-demo UI locales

All user-visible strings live in `static-demo/locales/*.json`.

Edit the `.json` files directly. After changes, run:

```bash
node tests/static-demo/localization-smoke.js
```

This checks that every locale has the same keys as English (`en.json`).

Required locales: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`
Optional: `es`

### Documentation locales

HTML pages live under `docs/<locale>/`. Shared assets reside in `docs/assets/`.

When adding a new locale:
1. Create `docs/<locale>/` with `index.html`, `individuals.html`, `institutions.html`, `administrators.html`
2. Add mock images to `docs/assets/images/` following the naming convention
3. Update `docs/assets/js/docs-lang.js` with the locale entry
4. Run `node tools/generate-static-seo.mjs` to regenerate metadata

### `.po` files

Application-level `.po` localization is defined but not yet implemented. Future backend UI will use gettext `.po` files under `localization/`.

---

## Playwright Setup

Playwright is used for UI verification, screenshot capture, and accessibility checks.

The project uses `playwright-cli` as a standalone tool (not npm-installed playwright).

See `static-demo/README.md` and `docs/style-guide/publishing/ubuntu-tooling.md` for detailed setup.

---

## Hunspell

Install Hunspell and dictionaries for spellchecking:

```bash
# Ubuntu / Debian
sudo apt install hunspell hunspell-en-us hunspell-sl hunspell-de-de
```

CI runs Hunspell when available (optional step, skipped if not installed).

---

## GitHub Actions

Two workflows in `.github/workflows/`:

| Workflow | Trigger | Purpose |
|---|---|---|
| `ci.yml` | push, pull_request | Validate locale integrity, JSON syntax, SEO metadata, required files |
| `docs.yml` | push to main | Build SEO metadata, run checks, deploy to GitHub Pages |

See `docs/Deployment.md` for the full deployment flow.
