# Marketing Mocks

This directory stores mock marketing visuals and their OCR output.

## Disclaimer

The images and mockups in this `marketing-mocks/` directory are AI-generated or AI-assisted concept visuals created using `AGENTS.md` as guidance and reference.

They are exploratory, best-effort representations of the project's intended direction, workflows, UX ideas, and overall spirit, including mobile-first intake, QR and box workflows, book donation logistics, multilingual usage, and educational book preservation. They are not final production UI, exact implementations, or authoritative design specifications.

These materials may contain inaccuracies, placeholder content, inconsistent UI patterns, incomplete interactions, non-final copy, unrealistic layouts, speculative features, or future-direction concepts.

Actual implementation should follow the real project specifications, documentation, and source code in this repository.

Any libraries, universities, archives, nonprofits, public institutions, companies, cloud providers, external systems, standards, platforms, or technologies mentioned in these mockups or their OCR text are referenced solely as conceptual examples or possible future integrations. Unless explicitly stated elsewhere in the repository, such references do not imply partnership, endorsement, sponsorship, approval, certification, affiliation, responsibility, funding, or deployment.

## Reusable Prompt

Use this short category prompt as a prefix for image-generation prompts in this directory:

```text
Using AGENTS.md as product guidance, create a mobile-first Let Books concept visual focused on educational book preservation and donation workflows, with warm, modern, respectful archival aesthetics. Show realistic app or operational workflow concepts, not generic futuristic AI art.
```

## Categories

The `english-classification` part of the filename indicates the mock category and its intended use.

- `cover`: broad campaign, hero, poster-style, or promotional overview visuals that communicate the project's tone, value proposition, and overall spirit
- `tutorial`: step-by-step workflow visuals showing how key flows work, especially mobile intake, QR scanning, donation handling, export/import, and pick-list processes
- `diagram`: architecture, deployment, integration, or system-overview visuals that explain structure rather than end-user UI
- `dashboard`: summary or home-screen style views that emphasize high-level status, counts, navigation, and operational overview
- `mobile-screen`: mobile-first product concepts focused on realistic phone UI, browsing, scanning, donation, and library workflow interactions
- `brand`: branding and adoption concepts, including standalone identity explorations and co-branded institution-adoption variants
- `proposal`: concept or partnership-style presentation visuals intended to communicate strategy, mission, ecosystem fit, or institutional framing

For `diagram` files, prefer short, consistent titles grouped by intent:

- platform-overview diagrams: `diagram-{language}-...platform...`
- infrastructure diagrams: `diagram-{language}-...infrastructure-architecture...` or a localized equivalent
- deployment overviews: `diagram-{language}-...deployment...`

Keep the localized title concise where possible. Prefer a direct architecture title over a longer "overview of architecture" phrase when both are reasonable.

## Documentation Usage

When documentation pages use visuals derived from this directory:

- use the localized mock that matches the documentation language or script whenever one exists
- do not default to English assets for non-English docs if a localized variant is available
- treat `sr-Latn` and `sr-Cyrl` as separate documentation asset targets with script-correct visuals
- copy selected assets into `docs/assets/images/` with stable descriptive names rather than linking to `marketing-mocks/` directly
- keep documentation visuals aligned with the project's supported locale set: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`

## Tooling

Shared contributor tooling for UI verification, screenshot generation, localization review, and documentation workflows lives in `../static-demo/README.md` under `Contributor Tooling`.

Use that shared baseline for:

- Playwright setup and browser installation
- ImageMagick-based image processing and screenshot workflows
- Hunspell-based localization review
- common CLI utilities such as `jq`, `rg`, `fd`, `bat`, `delta`, `shellcheck`, `yamllint`, `sqlite3`, `pandoc`, and `ffmpeg`

This directory adds mock-specific tooling on top of that baseline:

- Tesseract OCR and language packs for regenerating OCR JSON sidecars
- localized spellcheck review for mock copy before assets are promoted into `docs/assets/images/`
- ImageMagick-based resizing and optimization for exported documentation assets

## Filename Convention

Files use this format:

`{english-classification}-{language}-{localized-title}.{extension}`

Examples:

- `cover-en-cover-first-book-rescue.png`
- `brand-en-connecting-libraries-sharing-knowledge-strengthening-communities.png`
- `tutorial-sl-kako-deluje-vodic-po-korakih-v-mobilni-aplikaciji.png`
- `diagram-en-let-books-platform-deployment-overview.png`

## Parts

- `english-classification`: a short English category such as `cover`, `tutorial`, `diagram`, `dashboard`, `mobile-screen`, `brand`, or `proposal`
- `language`: the primary content language, such as `en`, `sl`, or `mk`
- `localized-title`: an ASCII-slug version of the image's visible title or best representative heading in its original language

## OCR Pairing

Each image may have a matching OCR JSON file with the same basename:

- `cover-en-cover-first-book-rescue.png`
- `cover-en-cover-first-book-rescue.json`

The JSON file stores:

```json
{
  "image": "cover-en-cover-first-book-rescue.png",
  "text": "OCR output..."
}
```

OCR in this directory was generated with Tesseract.

Additional Ubuntu or Debian packages for this directory:

```bash
sudo apt update
sudo apt install -y \
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

For localized spellcheck review in this directory, also install the Hunspell and MySpell dictionaries listed in `../static-demo/README.md`. In practice that usually means at least:

```bash
sudo apt install \
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
  myspell-sq
```

Notes:

- Macedonian Hunspell dictionaries are not usually available in the default Ubuntu repositories, so `mk` mock text may need custom dictionaries or manual review
- Serbian script differences still need manual checking even when `hunspell-sr` is installed
- install `jq` from the shared tooling baseline if it is not already available

The OCR JSON files were generated with this command from the `marketing-mocks/` directory:

```bash
for f in *.png; do
  out="${f%.png}.json"
  tmp=$(mktemp)
  tesseract "$f" stdout -l eng+slv+hrv+bos+srp+mkd+sqi+deu+ita+fra+spa --psm 6 2>/dev/null \
    | jq -Rs --arg image "$f" '{image:$image,text:.}' > "$tmp" \
    && mv "$tmp" "$out"
done
```

## Recreate OCR

To regenerate the OCR JSON files:

1. Install Tesseract and the required language packs using the Ubuntu command above.
2. Install the shared contributor tooling from `../static-demo/README.md`, including `jq` and the locale dictionaries you need for review.
3. Open a shell in `marketing-mocks/`.
4. Run the OCR generation command above.
5. Review the generated `.json` files. OCR is best-effort and may contain recognition noise.

## Notes

- `cover-*` assets use collage imagery from The New York Public Library Digital Collections. The NYPL believes these items are in the public domain under U.S. law; copyright status may differ in other countries.
- Filenames are ASCII-only for portability.
- Localized titles are transliterated/sluggified when the source text contains non-ASCII characters.
- The OCR text is best-effort and may contain recognition noise.
