# Let Books

Let Books is a practical tool for cataloging, offering, and retrieving donated educational books.

The project is designed around a simple real-world problem: valuable study books, textbooks, technical books, and academic materials often remain unused in basements, storage boxes, offices, and family collections even though libraries, schools, archives, NGOs, and other readers may still need them.

## Current Status

This repository now contains a real static local demo PWA in addition to the specification and documentation work.

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

## Documentation

The first documentation pass is intended to help validate the app concept with real audience-focused pages.

Included documentation:

- `docs/index.html` as the central language hub
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

### Preview the Documentation

To preview the documentation locally, serve the `docs/` folder with a simple static file server.

Example:

```bash
python3 -m http.server 8000 --directory docs
```

Then open:

- `http://127.0.0.1:8000/en/index.html`
- `http://127.0.0.1:8000/sl/index.html`

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
