# Marketing Mocks

This directory stores repository-approved concept visuals, engineering communication visuals, and their supporting sidecar files.

## Purpose

`marketing-mocks/` exists to preserve visual communication assets that help people understand the repository, the product direction, and the operational workflows around it.

This directory is part of the repository knowledge-preservation system.

It should help communicate:

- product direction and workflow concepts
- localized UI and documentation examples
- repository governance and engineering practices
- architecture and deployment understanding
- onboarding context for contributors and AI-assisted agents

Visuals in this directory supplement repository guidance.

Source of truth remains:

- validators
- tests
- workflows
- implementation guidance
- documentation

Visual assets should explain proven practices, not replace them.

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

Engineering-governance visuals belong under the `diagram` category.

These are not product-marketing posters. They exist to communicate proven repository practices such as validation layering, documentation governance, localization governance, CI/CD guarantees, and engineering workflow discipline.

The new `diagram-*-engineering-governance-overview.png` family should be treated as engineering communication material:

- explain repository practices already implemented or enforced
- prefer validator-backed and workflow-backed guarantees over aspirational future-state messaging
- do not present speculative product features as established engineering governance

Current category usage in this directory:

- `cover`: broad campaign and preservation-message visuals; currently partial locale coverage
- `tutorial`: localized workflow walkthrough visuals; currently broad locale coverage
- `diagram`: architecture, deployment, and engineering-governance visuals; currently the strongest category for reusable repository communication
- `dashboard`: summary/dashboard concept visuals; currently limited coverage
- `mobile-screen`: phone-first concept UI visuals; currently broad locale coverage
- `brand`: identity exploration visuals; currently limited coverage
- `proposal`: institutional framing and mission visuals; currently broad locale coverage

For `diagram` files, prefer short, consistent titles grouped by intent:

- platform-overview diagrams: `diagram-{language}-...platform...`
- infrastructure diagrams: `diagram-{language}-...infrastructure-architecture...` or a localized equivalent
- deployment overviews: `diagram-{language}-...deployment...`
- engineering governance overviews: `diagram-{language}-...engineering-governance-overview...`

Keep the localized title concise where possible. Prefer a direct architecture title over a longer "overview of architecture" phrase when both are reasonable.

## Documentation Usage

When documentation pages use visuals derived from this directory:

- use the localized mock that matches the documentation language or script whenever one exists
- do not default to English assets for non-English docs if a localized variant is available
- treat `sr-Latn` and `sr-Cyrl` as separate documentation asset targets with script-correct visuals
- copy selected assets into `docs/assets/images/` with stable descriptive names rather than linking to `marketing-mocks/` directly
- keep documentation visuals aligned with the project's supported locale set: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`

When using engineering-governance diagrams in documentation:

- place them near validator, workflow, tooling, or governance explanations
- treat them as supporting explanation, not as the primary source of truth
- keep the real guarantees in validators, tests, workflows, and repository guidance files

## Naming Convention

Files use this format:

`{category}-{filename-locale}-{localized-title}.{extension}`

Examples:

- `diagram-en-engineering-governance-overview.png`
- `diagram-sl-engineering-governance-overview.png`
- `tutorial-en-how-it-works-step-by-step-in-the-mobile-app.png`
- `tutorial-sl-kako-deluje-vodic-po-korakih-v-mobilni-aplikaciji.png`

Notes:

- filenames use ASCII-only slugs for portability
- locale segments in filenames are lowercase filename slugs, including `sr-latn` and `sr-cyrl`
- repository locale identifiers remain `sr-Latn` and `sr-Cyrl` in code, docs, validators, and workflows
- do not assume filename locale slugs are identical to repository locale identifiers

Category-specific guidance:

- `cover-*`: short preservation or campaign message
- `tutorial-*`: describe the workflow shown, not a vague slogan
- `diagram-*`: use intent-oriented titles such as architecture, deployment, infrastructure, or engineering governance
- `dashboard-*`: summarize the dashboard state or operational message shown
- `mobile-screen-*`: describe the visible concept message or UI emphasis
- `brand-*`: describe the institutional/identity concept succinctly
- `proposal-*`: use mission, partnership, or adoption framing titles

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

## Sidecar Files

This directory uses multiple sidecar file types.

### `.png`

- the visual asset itself

### `.json`

- OCR/output sidecar for review, searchability, and copy inspection

### `.md`

- source narrative, canonical copy, or review text for engineering-oriented visuals

For engineering-governance visuals, the `.md` file should be treated as part of the asset contract, not as an optional scratch file.

It helps preserve:

- intended message
- translation review text
- governance wording
- reusable engineering ideas represented by the visual

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

## Localization Expectations

Localized visuals should:

- use natural professional language suitable for engineers, operators, or institutional readers
- keep terminology consistent with repository guidance and documentation
- avoid mixed-language headings where a clean localized phrasing exists
- preserve script correctness for `sr-latn` and `sr-cyrl`
- avoid cross-language leakage such as Croatian/Serbian wording in Slovenian assets
- keep the same conceptual asset family aligned across locales even when the exact phrasing changes naturally

Engineering-governance visuals should prioritize clarity and terminology stability over literal word-for-word translation.

## Repository Knowledge Preservation

Prefer visuals that explain:

- how repository practices work
- why they exist
- what failures they prevent
- what lessons were learned
- what reusable engineering patterns emerged

Avoid keeping visuals that are only decorative if they no longer improve onboarding or understanding.

## Engineering Visualization Inventory

Engineering-oriented visuals currently represented here include:

- infrastructure architecture diagrams
- platform deployment overview diagrams
- engineering governance overview diagrams

The strongest reusable engineering visualization family is currently:

- `diagram-*-engineering-governance-overview.*`

That family represents proven patterns such as:

- validator-first governance
- documentation as product discipline
- test and regression documentation
- CI/CD quality enforcement
- reusable engineering practice capture
- continuous improvement cycles

These visuals have high reuse potential because they communicate practices that are broader than a single Let Books feature.

## Repository-Approved Assets

When a visual becomes repository-approved, it should be:

- committed
- documented here
- kept aligned with current repository practice
- reviewed for localization consistency when localized variants exist

Do not leave approved engineering-governance visuals permanently untracked.

The `diagram-*-engineering-governance-overview.{md,png}` family is repository-approved and should remain versioned alongside code, validators, workflows, and documentation.

## Current Review Notes

Current strengths:

- engineering-governance overview diagrams exist for all supported locales in this asset family
- diagram visuals are the strongest category for reusable repository communication
- tutorial, proposal, and most mobile-screen families already have broad locale coverage

Current gaps:

- `dashboard` and `brand` categories currently have limited locale coverage
- `cover` category does not yet cover every supported locale
- only the engineering-governance family currently uses `.md` source companions; that should remain intentional unless another visual family also benefits from canonical text-source files

Current naming rule:

- continue using existing lowercase ASCII filename locale slugs for consistency with the current asset set
- do not rename established families casually unless a repository-wide migration is justified

## Pattern Graduation

Engineering visuals should become permanent repository assets only when they:

- communicate proven practices
- remain useful beyond a single discussion
- improve onboarding or shared understanding
- stay understandable without heavy project-specific context

Prefer proven patterns over speculative concepts.

## Notes

- `cover-*` assets use collage imagery from The New York Public Library Digital Collections. The NYPL believes these items are in the public domain under U.S. law; copyright status may differ in other countries.
- engineering-governance diagram families should communicate proven repository practices, not generic startup-style process art
- Filenames are ASCII-only for portability.
- Localized titles are transliterated/sluggified when the source text contains non-ASCII characters.
- The OCR text is best-effort and may contain recognition noise.
