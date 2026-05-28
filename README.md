# Let Books

Let Books is a practical tool for cataloging, offering, and retrieving donated educational books.

The project is designed around a simple real-world problem: valuable study books, textbooks, technical books, and academic materials often remain unused in basements, storage boxes, offices, and family collections even though libraries, schools, archives, NGOs, and other readers may still need them.

## Current Status

This repository now contains a real static local demo PWA in addition to the specification and documentation work.

The project is published on GitHub Pages at https://letbooks.org/, with the public landing page at the site root and documentation live under https://letbooks.org/docs/. The live static demo app is available at https://letbooks.org/static-demo/.

Public site structure:

- the canonical public landing page is `index.html` at the site root
- `docs/index.html` is the documentation language hub and localized documentation lives under `docs/`
- the static demo lives under `static-demo/`

What exists now:

- full product specification in `AGENTS.md`
- tactical implementation guidance in `AGENTS-Implementation.md`
- branded static HTML documentation portal under `docs/` for all supported languages
- shared branding assets and stylesheet for the documentation site
- installable local-first PWA demo under `static-demo/`
- local IndexedDB workflow prototype for boxes, books, photos, QR flows, Excel export, and ZIP transfer

What does not exist yet:

- backend system
- database schema or migrations
- hosted application built with the planned .NET/Blazor stack
- authentication setup
- AI or OCR integrations
- cloud sync or hosted multi-user environment

## Static Demo

The main executable deliverable is now the local PWA demo in `static-demo/`.

It is intended to:

- test home and storage-room workflows
- test QR box logistics
- test ISBN scanning
- test mobile usability
- demonstrate the concept to libraries, IZUM, and partners

The demo is intentionally:

- local-only
- offline-capable
- installable as a PWA
- multilingual
- free of backend/login/cloud dependencies

See:

- `static-demo/README.md`

Try these first:

1. create or scan a box
2. add a book with cover photos
3. test ISBN scanning and metadata lookup
4. export Excel or a ZIP archive from the device

## Book Metadata Lookup

Book metadata lookup currently follows a simple fallback chain:

- Open Library is queried first
- Let Books metadata API is used as the fallback
- manual entry is always available if enrichment does not return useful metadata
- provider/source is tracked on the book record
- the lookup architecture is designed so additional providers can be added behind the same normalized flow later

Useful verification ISBNs:

- `9780434912902` currently resolves through the Open Library-first path in the static demo
- `9789610167525` currently resolves through the Let Books metadata API fallback and is a good regression check because it is not currently found through Open Library

## Documentation

The first documentation pass is intended to help validate the app concept with real audience-focused pages.

Included documentation:

- `index.html` as the canonical public landing page and demo entry point
- `docs/index.html` as the documentation language hub
- locale-specific documentation under `docs/en/`, `docs/sl/`, `docs/hr/`, `docs/bs/`, `docs/sr-Latn/`, `docs/sr-Cyrl/`, `docs/mk/`, `docs/sq/`, `docs/de/`, `docs/it/`, `docs/fr/`, and `docs/es/`
- a shared page set for each locale covering overview, individuals, institutions, and administrators

The docs are:

- pure static HTML
- styled with one shared `style.css`
- backed by shared SVG branding assets
- aligned to the current marketing mock visual language

Documentation rule for all supported locales:

- when a docs page uses a mock derived from `marketing-mocks/`, it should use the localized version that matches the page language or script
- `sr-Latn` and `sr-Cyrl` should use distinct script-correct visual variants rather than reusing the same asset
- keep this rule consistently for all supported locales `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, and `es`

## Quick Start

### Run the Static Demo

Serve either the repository root or the `static-demo/` folder with a static file server.

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

- `http://127.0.0.1:8000/static-demo/`

Or serve `static-demo/` directly:

```bash
python3 -m http.server 8000 --directory static-demo
```

Then open:

- `http://127.0.0.1:8000/`

### Preview the Public Site and Documentation

For the GitHub Pages layout, serve the repository root so both `/` and `/docs/` are available.

Example:

```bash
python3 -m http.server 8000
```

Then open:

- `http://127.0.0.1:8000/`
- `http://127.0.0.1:8000/docs/`
- `http://127.0.0.1:8000/docs/en/index.html`

### Preview Only the Documentation Folder

To preview the documentation locally, serve the `docs/` folder with a simple static file server.

Example:

```bash
python3 -m http.server 8000 --directory docs
```

Then open:

- `http://127.0.0.1:8000/`
- `http://127.0.0.1:8000/en/index.html`
- `http://127.0.0.1:8000/sl/index.html`

## Developer Tooling

This project uses Playwright heavily for UI verification, localization checks, accessibility checks, responsive/mobile validation, screenshot-based documentation, and future parity testing.

Recommended curated skill:

- OpenAI Playwright Curated Skill: https://github.com/openai/skills/tree/main/skills/.curated/playwright

For AI-assisted development, strongly prefer a Playwright-oriented skill package when the environment supports reusable skills. See `static-demo/README.md` for the full contributor tooling stack, Playwright setup, localization validation expectations, and screenshot/documentation workflow guidance.

## Mobile Debugging

This project strongly prefers real-device Android debugging for camera, barcode, and QR workflows.

See:
- `docs/android-debugging.md`

The mobile debugging workflow is optimized for:
- Android Chrome via ADB
- Playwright CDP attachment
- real camera streams
- barcode/QR validation on physical devices
- rapid runtime instrumentation/debugging

## Product Direction

Let Books is not intended to be primarily an AI product.

Its core value is the combination of:

- manual inventory that still works without AI
- storage and retrieval logistics
- Excel-based review workflows for libraries
- multilingual documentation and future multilingual UI
- optional AI enrichment later
- preservation of educational and academic heritage

The early product direction prioritizes:

1. practical cataloging
2. storage location tracking
3. export for institutional review
4. import of review decisions
5. pick lists and retrieval workflows
6. mobile-first QR-based usage

## Guiding Files

Use both of these files when extending the project:

- `AGENTS.md`
- `AGENTS-Implementation.md`

In short:

- `AGENTS.md` holds the product specification
- `AGENTS-Implementation.md` holds evolving implementation guidance

## Verification Notes

The current repository work has been checked with:

- `hunspell` for spellcheck where available
- `playwright` for browser preview verification where available

## License

This repository is licensed under the Apache License 2.0.

- See `LICENSE`
- Copyright 2026 letbooks.org

## Near-Term Next Steps

Likely next repository milestones:

1. refine the static demo UX and content polish
2. expand localization and sample data quality
3. begin backend architecture when the local workflow has been validated
4. add status-accurate setup and migration guidance for future hosted versions
