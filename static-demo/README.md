# Let Books Local Demo

Let Books Local Demo is a real installable Progressive Web App (PWA) prototype for testing the future Let Books workflow without any backend.

## What It Is

This demo is designed to:

- test mobile usability while walking around a house or storage room
- test QR box workflows
- test ISBN scanning
- test photo capture for books
- test Excel export for libraries
- test whole-database ZIP transfer between devices
- demonstrate the concept to libraries, IZUM, and other partners

## What It Is Not

This is not a backend system yet.

It does not include:

- login
- backend APIs
- cloud sync
- Azure services
- OCR
- real COBISS integration
- payments or social features

## Local-Only Rules

- all data stays in the browser on the current device
- boxes, books, photos, lookup cache, and settings are stored locally in IndexedDB
- no server upload happens
- no automatic sync exists between devices

## Transfer Between Devices

There are two different transfer workflows:

1. QR workflow
- good for operational scanning
- good for opening/importing boxes
- not intended to transfer the full database

2. ZIP archive workflow
- use `Export Database ZIP` on one device
- use `Import Database ZIP` on another device
- this is the main workflow for moving the whole local demo between phone and desktop

ZIP archives contain:

- JSON data files
- local image files
- app manifest metadata for the archive

## Photo Support

Each book can store multiple local images, including:

- cover
- back
- inside front
- inside back
- spine
- condition
- other

Camera capture is the primary path.
File upload/gallery selection is also supported.

## Offline Support

Works offline:

- app shell
- local boxes and books
- local photos
- QR generation
- QR scanning
- ZIP export/import
- Excel export

Needs internet:

- Open Library lookup
- Let Books metadata API fallback lookup
- any remote metadata or cover URLs not already cached locally

## Metadata Lookup

- Open Library is queried first
- Let Books metadata API is used as the fallback
- manual entry remains available even when lookup fails
- successful and no-result lookups are cached locally by normalized ISBN
- provider/source is stored with the matched metadata

Useful verification ISBNs:

- `9780434912902` for the Open Library-first path
- `9789610167525` for the Let Books metadata API fallback path; this is a useful regression check because Open Library does not currently return it for the demo flow

## Install and Test

The live static demo app is published on GitHub Pages at https://letbooks.org/static-demo/. The public project landing page is available at https://letbooks.org/, and documentation is available at https://letbooks.org/docs/.

Serve the `static-demo/` folder with a static file server.

Example from repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/static-demo/
```

## AI Agent Playwright Skill

This project uses Playwright extensively for:

- UI regression testing
- end-to-end workflow verification
- localization validation
- accessibility checks
- screenshot-based documentation and tutorial generation
- responsive and mobile layout verification
- static demo validation before Blazor implementation
- behavioral and specification capture for future parity testing

For AI-assisted development, it is strongly recommended that contributors install a Playwright-oriented skill package for their coding agent environment.

Recommended curated skill:

- OpenAI Playwright Curated Skill: https://github.com/openai/skills/tree/main/skills/.curated/playwright

This recommendation is especially relevant for `Codex CLI`, `OpenCode`, `Claude Code`, `Roo Code`, `Continue.dev`, `Cursor` agent workflows, and similar MCP or agentic coding environments that support reusable skills.

Suggested contributor setup should include:

- skill installation steps
- Playwright browser installation
- headless and headed execution examples
- CI integration examples
- screenshot artifact storage guidance
- localization verification workflows
- mobile viewport testing configuration
- visual regression baseline management

Recommended contributor tooling stack:

Core tooling:

- Node.js
- Python
- Playwright
- Chrome or Chromium
- Hunspell dictionaries
- Docker and Docker Compose
- GitHub Actions CI
- ESLint and Prettier

Strongly recommended CLI utilities:

- `jq` for JSON processing, API response validation, localization file inspection, and build/config transformation
- ImageMagick (`convert`, `magick`) for screenshot comparison, image resizing and optimization, hero and banner asset processing, documentation and tutorial image generation, and visual regression helper workflows
- `ripgrep` (`rg`) for fast codebase search, localization auditing, translation completeness checks, and accessibility attribute verification
- `fd` for improved file discovery and cleaner scripting support than traditional `find`
- `bat` for better terminal file previews and syntax-highlighted logs/configs
- `delta` for improved Git diff readability
- `shellcheck` for shell script linting
- `yamllint` for CI and workflow validation
- `sqlite3` for lightweight local inspection and debugging
- `pandoc` for Markdown and document conversion workflows
- `ffmpeg` for tutorial and demo video generation plus animated workflow captures

Recommended Ubuntu or Debian installation:

```bash
sudo apt update
sudo apt install -y \
  jq \
  imagemagick \
  ripgrep \
  fd-find \
  bat \
  git-delta \
  shellcheck \
  yamllint \
  sqlite3 \
  pandoc \
  ffmpeg \
  hunspell \
  hunspell-en-us
```

Useful local setup examples:

```bash
npx playwright install
```

```bash
npx playwright test
```

```bash
npx playwright test --headed
```

```bash
npx playwright install-deps
```

Recommended browser coverage:

- Chromium
- Firefox
- WebKit
- Mobile Chrome emulation
- Mobile Safari emulation

AI-generated tests should verify:

- responsive layouts
- hamburger menu behavior
- localization rendering
- Unicode correctness
- keyboard navigation
- screen reader compatibility where feasible
- screenshot consistency
- hero and dashboard rendering
- demo-to-Blazor workflow parity
- offline and PWA behavior
- touch and mobile interactions

Localization validation should verify:

- proper Unicode rendering
- Slovenian `č`, `š`, `ž`
- Serbian Latin vs Serbian Cyrillic correctness
- Macedonian Cyrillic correctness
- no untranslated UI fragments
- screen reader compatibility where feasible
- mobile menu localization
- proper RTL handling if future languages require it

Screenshot and documentation workflows should support automated:

- screenshot capture
- UI regression baselines
- tutorial generation
- responsive viewport documentation
- localization screenshot matrices
- Markdown-to-document exports

If this repository adds or restores a Playwright test suite, keep screenshot artifacts, traces, and visual baselines in stable, reviewable locations and make locale coverage and mobile viewport coverage explicit in the test configuration.

For AI-assisted development, the Playwright skill improves browser automation, DOM inspection, UI assertions, visual regression workflows, screenshot capture, accessibility auditing, interactive debugging, and stable Playwright test generation. ImageMagick and Playwright should be treated as core infrastructure for screenshot, documentation, and regression workflows.

## Phone Testing Notes

Camera scanning usually requires:

- `localhost`, or
- HTTPS

If you test on a phone over the local network, camera permissions may fail on plain HTTP depending on the browser.

Practical options:

1. test on desktop first
2. use a localhost-capable mobile workflow if available
3. deploy the static demo to GitHub Pages or Azure Static Web Apps for HTTPS phone testing

## Language Support

The demo currently includes:

- English
- Slovenian
- Croatian
- Bosnian
- Serbian Latin
- Serbian Cyrillic
- Macedonian
- Albanian
- German
- Italian
- French
- Spanish

It defaults to browser language when supported and remembers the user's manual selection.

## Reset Demo Data

The app includes a `Reset Demo Data` action that restores the seeded local demo dataset.

## Visual Attribution

- Dashboard archival hero image courtesy of The New York Public Library Digital Collections (Public Domain)
