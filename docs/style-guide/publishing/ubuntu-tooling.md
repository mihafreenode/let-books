# Ubuntu Tooling

## Summary

This document consolidates the Ubuntu or Debian tooling that contributors should install for LetBooks documentation, localization, screenshots, testing, visual workflows, and knowledge-platform publishing.

## Purpose

The current repository already depends on a mixed tooling workflow spread across:

- `static-demo/README.md`
- `marketing-mocks/README.md`
- `docs/android-debugging.md`

This page centralizes that tooling guidance for future knowledge-platform work.

## Core Tools

Install these as the general baseline:

- `nodejs` and `npm`
- `python3`
- `git`
- `ripgrep`
- `jq`
- `fd-find`
- `bat`
- `git-delta`
- `shellcheck`
- `yamllint`
- `sqlite3`
- `pandoc`
- `ffmpeg`
- `imagemagick`
- `hunspell`
- `hunspell-tools`

## Browser And UI Tools

Install or prepare these for UI and demo verification:

- Playwright browsers via `npx playwright install`
- Chromium or Chrome
- Firefox
- WebKit support where available through Playwright

Use these for:

- responsive checks
- localization checks
- accessibility review
- screenshot capture
- tutorial generation
- mobile simulation where real-device testing is not required

## Localization Dictionaries

Install the dictionary packages currently referenced by the repository:

- `hunspell-en-us`
- `hunspell-sl`
- `hunspell-hr`
- `hunspell-bs`
- `hunspell-sr`
- `hunspell-de-de`
- `hunspell-it`
- `hunspell-fr`
- `hunspell-es`
- `myspell-sq`

Notes:

- Serbian still needs manual script review even when `hunspell-sr` is installed.
- Macedonian dictionaries are often not available from default Ubuntu repositories, so `mk` still needs manual review or a custom dictionary.

## OCR And Mock-Asset Tools

Install these when working with `marketing-mocks/` and OCR sidecars:

- `tesseract-ocr`
- `tesseract-ocr-eng`
- `tesseract-ocr-slv`
- `tesseract-ocr-hrv`
- `tesseract-ocr-bos`
- `tesseract-ocr-srp`
- `tesseract-ocr-mkd`
- `tesseract-ocr-sqi`
- `tesseract-ocr-deu`
- `tesseract-ocr-ita`
- `tesseract-ocr-fra`
- `tesseract-ocr-spa`

Use these for:

- regenerating OCR JSON sidecars
- checking multilingual mock text
- promoting mock-derived visuals into docs assets

## Android And Device Debugging

For mobile debugging workflows documented in `docs/android-debugging.md`, prepare:

- Android platform tools with `adb`
- `curl`
- Playwright runtime with CDP attach support

On WSL, also use the repository helper:

- `tools/wsl-find-adb.sh`

## Recommended Ubuntu Or Debian Install Command

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
  hunspell-tools \
  hunspell-en-us \
  hunspell-sl \
  hunspell-hr \
  hunspell-bs \
  hunspell-sr \
  hunspell-de-de \
  hunspell-it \
  hunspell-fr \
  hunspell-es \
  myspell-sq \
  tesseract-ocr \
  tesseract-ocr-eng \
  tesseract-ocr-slv \
  tesseract-ocr-hrv \
  tesseract-ocr-bos \
  tesseract-ocr-srp \
  tesseract-ocr-mkd \
  tesseract-ocr-sqi \
  tesseract-ocr-deu \
  tesseract-ocr-ita \
  tesseract-ocr-fra \
  tesseract-ocr-spa
```

## JavaScript Setup

After Node.js is available, install Playwright browsers in the repository:

```bash
npx playwright install
```

Optional dependency setup for some environments:

```bash
npx playwright install-deps
```

## Related Topics

- Playwright
- Localization review
- OCR workflows
- Android debugging

## Related Articles

- None yet

## Related Learning Guides

- `../../../learning/README.md`

## Related Wiki Pages

- `../../../wiki/README.md`

## Further Reading

- `../../../../static-demo/README.md`
- `../../../../marketing-mocks/README.md`
- `../../../android-debugging.md`
