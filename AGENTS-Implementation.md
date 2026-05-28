# AGENTS-Implementation.md

## Purpose

This file holds tactical implementation guidance that complements the product and architecture specification in `AGENTS.md`.

Use both files together:

- `AGENTS.md` defines product scope, principles, workflows, and long-term direction.
- `AGENTS-Implementation.md` defines naming, documentation, branding, verification, and other implementation details that evolve during delivery.

When adding new tactical guidance in future work, prefer adding it here instead of expanding `AGENTS.md` unless the change affects the product specification itself.

## Public Naming

- Public-facing product name: `Let Books`
- Documentation, demos, and generated UI copy should use `Let Books`
- `BookDonationRegistry` is an internal repository/project name and should not appear in public-facing documentation unless there is a strong implementation reason

## Documentation Rules

- Public documentation should be implemented as pure static HTML
- Use one shared stylesheet: `docs/assets/css/style.css`
- Reuse shared static-site behavior where practical instead of duplicating parallel implementations for the public landing page and docs pages
- Use shared brand assets under `docs/assets/images/`
- Copy any mock images used by the docs into `docs/assets/images/` with stable descriptive names instead of referencing files outside the docs tree
- When documentation uses images derived from `marketing-mocks/`, use the localized mock that matches the documentation language or script
- Do not reuse English mock images in non-English docs when a matching localized version exists
- Serbian Latin and Serbian Cyrillic documentation must use script-correct mock assets for `sr-Latn` and `sr-Cyrl` respectively; do not substitute one script for the other
- Logos should be SVG and reusable across deployments/instances
- Documentation should be multilingual from the start, beginning with English and Slovenian
- Documentation expansion should follow the supported locale set defined by the project: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`
- Keep the same page structure across languages so future languages can be added predictably
- Use repo-relative references only so the documentation is reproducible on another machine

## Public Site and Docs Split

- The canonical public landing page is the site root `/` and `index.html`
- The public landing page is the only static marketing-style entry point that should strongly promote or launch the static demo
- The documentation hub is `/docs/` and `docs/index.html`; it should act as a language chooser, not a second product landing page
- Avoid internal path explanations in public-facing hero copy unless they are genuinely useful to end users
- Keep the app demo clearly separated from documentation in both copy and navigation
- Localized docs pages should provide a path back to `/docs/`, a public-homepage link, and topic-preserving language switching where equivalents exist

## Shared Static Navigation Rules

- The public landing page and docs pages should use one shared responsive mobile-navigation pattern where feasible
- On mobile widths, headers should collapse to brand plus hamburger button; primary nav links should stay hidden until expanded
- Mobile nav rows should use compact utility-style heights rather than oversized landing-page pills
- Avoid horizontal scrolling, clipped nav content, or off-canvas ghost elements in static navigation
- Docs navigation should remain docs-focused: docs home/language index, public homepage, GitHub, and docs language selection
- Do not surface the demo as a primary docs-nav item
- For docs mobile language selection, prefer a native in-flow control such as `<select>` over custom popover/dropdown implementations
- On larger docs widths, keep language selection compact and utility-like; visible labels may be visually hidden if semantics remain intact for assistive technology

## Static Site Metadata Rules

- Static HTML pages must use real `<head>` metadata tags, not framework metadata APIs
- The public homepage canonical URL is `https://letbooks.org/`
- Documentation lives under `https://letbooks.org/docs/`
- The static demo lives under `https://letbooks.org/static-demo/`
- The favicon package should live under the repository root `favicon/` directory so published URLs resolve as `/favicon/...`
- Social preview image should live at the repository root as `og-image.png` and be referenced as `https://letbooks.org/og-image.png`
- Homepage, docs hub, localized docs pages, and the static demo should all include static SEO metadata in the HTML source
- Required static tags for public pages: `<title>`, `<meta name="description">`, canonical, robots, Open Graph tags, Twitter/X card tags, favicon tags, and theme-color
- Docs pages must include `hreflang` alternates across the full supported locale set plus `x-default`
- Each localized docs page must have its own localized title, description, canonical URL, `og:title`, `og:description`, and `og:url`
- Use English fallback metadata only when a locale-specific translation is genuinely missing
- Keep descriptions natural and concise, generally around 140 to 160 characters where practical
- Avoid SEO keyword stuffing and avoid making speculative implementation claims in metadata
- Use `LetBooks` in metadata and social tags; keep public branding consistent across homepage, docs, demo, and manifests
- The static demo should keep its own app manifest at `static-demo/manifest.webmanifest`, but can still use the shared `/favicon/` icon links for browser metadata
- The favicon manifest should be served from `/favicon/site.webmanifest` and use manifest-relative icon paths
- If metadata must be regenerated across many static pages, use or update the generator script at `tools/generate-static-seo.mjs` instead of manually editing dozens of heads
- If static metadata is present in HTML, shared docs JavaScript must not inject duplicate favicon or SEO tags at runtime

## Static Demo Rules

- The installable local workflow prototype lives under `static-demo/`
- It should be a pure static PWA with plain HTML, CSS, and JavaScript unless there is a strong reason to introduce tooling
- Prefer vendored browser libraries under `static-demo/vendor/` for offline reliability and reproducible demos
- The static demo is local-only: no backend, no login, no cloud sync, no Azure dependencies
- Use IndexedDB for persistent local storage; Dexie is allowed and preferred for schema handling
- The static demo should scaffold the serious institutional/public deployment locale set from the start: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`
- Default language should follow browser language and remember manual user selection locally
- Use portable ZIP archive export/import for whole-database transfer between devices
- ZIP export should include JSON data plus local image files
- QR generation and QR scanning should work offline for local workflows; cross-device transfer should rely on portable QR payloads or ZIP import/export rather than hidden sync assumptions
- Camera capture should be the primary path for photo collection, with file upload/gallery fallback always available
- Camera, scanning, and other mobile workflows must remain usable under translated UI labels and longer localized strings

## Static Demo Dashboard Hero

These rules apply specifically to the `static-demo/` dashboard hero/banner system.

Scope rules:

- Treat the dashboard hero as the only area allowed to use richer editorial/art-direction treatment inside the static demo dashboard
- Do not redesign the overall dashboard, navigation, workflows, forms, cards, interaction patterns, or application information architecture when working on the hero
- Preserve the rest of the app as a clean, structured, dashboard-style interface

Art-direction rules:

- The hero must feel like a designed collage composition, not a generic dashboard banner or wallpaper image with overlay text
- Target tone: museum exhibition poster, archival preservation campaign, literary/public-library institution, editorial collage, cinematic but still functional
- Prefer asymmetrical composition with copy on one side and layered archival material on the other side
- Avoid centered, symmetrical, generic landing-page hero layouts
- Typography should feel literary, elegant, editorial, and institutional rather than cramped, narrow, or widget-like
- Desktop headline wrapping should generally land in approximately 3 to 5 lines rather than many short stacked lines

Composition rules:

- Do not use the older decorative green “book stack” hero elements; the archival imagery should carry the composition
- Use the freed space to widen the text container and improve editorial line length
- Add only subtle, integrated archival collage elements such as checkout cards, botanical studies, book spines, stamps, seals, paper fragments, or map fragments
- These collage elements must feel embedded into the composition, not like floating stickers
- Allow selective frame-breaking overlap where it improves cinematic/editorial feel without creating clutter
- Keep the collage more restrained than theatrical: fewer elements, calmer rotations, and tighter visual hierarchy are preferred over busy decoration

Atmosphere and depth rules:

- Use soft vignette blending, subtle paper grain, layered overlap, atmospheric darkening, and soft shadows to create depth
- Maintain foreground/background separation so the copy remains readable and the collage remains legible
- Favor cinematic depth and tonal cohesion over high-contrast decorative noise

Theme and color rules:

- The hero system must support per-image art-direction metadata instead of assuming universal white overlay text
- Theme resolution should follow this model: image + lightweight palette/luminance analysis + manual curated override = final hero theme
- Automatic analysis may suggest readable palette values, but curated JSON overrides must remain the final control point
- Preserve WCAG-friendly contrast while harmonizing typography and CTA colors with the artwork palette
- Prefer archival palettes such as deep green-black, warm parchment, muted gold, sepia haze, moss green, and aged ivory

Implementation rules:

- Keep hero-specific implementation isolated to the dashboard hero system in `static-demo/app.js`, `static-demo/app.css`, and hero asset metadata under `static-demo/assets/hero/`
- Store curated per-image hero metadata in JSON, including theme preset, color overrides, effect overrides, and collage labels/content where needed
- Keep hero styling scoped to the dashboard hero so similarly named classes used by other screens are not unintentionally restyled
- Prefer small, reviewable hero-only edits instead of broad dashboard CSS refactors
- When adjusting typography, reduce size slightly before reducing container width; preserve editorial line length first
- On mobile, reduce collage density before removing readability aids; the hero should stay atmospheric but not crowded
- On refinement passes, prefer calmer geometry, slightly smaller decorative pieces, and stronger depth cues rather than adding more visual objects

Current implementation expectations:

- The dashboard hero currently uses curated per-image theme metadata from `static-demo/assets/hero/nypl/hero-banner.json`
- Hero themes support color overrides and effect overrides such as overlay opacity, vignette, grain, shadow, and highlight values
- The hero renderer performs lightweight image analysis only to support theme suggestion; it must not replace manual art-direction control
- The hero collage currently uses a restrained archival composition language rather than the earlier shelf/stack metaphor; future work should preserve that direction unless explicitly changed

## Static Demo Book Detail

These rules apply specifically to the `static-demo/` book detail screen.

- On mobile widths, the book detail screen should be metadata-first: title/status/details should appear before the large cover gallery in the reading order
- Do not rely only on CSS `order` for this behavior; prefer DOM order that already matches the intended mobile reading flow
- If wider layouts need the gallery on the left and metadata on the right, restore that with explicit grid placement in CSS rather than changing the DOM back to gallery-first
- The sticky mobile sheet header must clear the sticky topbar; do not allow the detail header to render underneath the top navigation chrome
- The detail screen should use a single-column layout on small screens; avoid two-column book-detail compositions at phone widths
- When a book has only a primary cover image, keep the gallery compact and avoid rendering redundant thumbnail/fallback blocks that create empty card space
- Fixed bottom navigation must not crowd the primary detail content; preserve enough bottom sheet spacing so the final cards do not feel pinned under the nav
- Verify book-detail refinements in Playwright using an actual navigation flow from the dashboard or boxes list into a seeded book, not only a direct hash route, because fresh local sessions may regenerate demo IDs

## Static Demo Navigation and Scroll

These rules apply specifically to route changes inside the `static-demo/` app shell.

- In-app navigation between tabs and screens should reset scroll position to the top unless a workflow has a clearly better target position
- Route-level scroll handling should stay centralized near the hash-routing/render pipeline rather than being scattered across individual screens
- Scanner-driven navigation should follow the same centralized scroll policy; after ISBN/barcode scan flows that open a new screen, default to the top of that destination unless a later workflow explicitly needs field focus or mid-page positioning
- If browser history restoration interferes with the intended workflow, keep `history.scrollRestoration` in manual mode for the static demo
- When verifying route scroll behavior in Playwright, prefer in-app hash navigation over full page reloads and be aware that the static demo service worker may cache stale behavior; unregister or bypass it if verification results do not match the current source

## Localization and Accessibility Rules

- All user-visible text must be localizable except protected trademarks and brand names
- Externalize hardcoded user-facing strings into translation resources and preserve stable semantic localization keys
- Prefer concise UI wording to reduce translation complexity
- Prefer icons with short labels where appropriate, but do not replace meaningful text with unlabeled icons
- Avoid embedding important text inside images, canvas surfaces, or screenshots
- Responsive layouts must tolerate longer translations without breaking action grouping, navigation, or accessibility
- Serbian Latin and Serbian Cyrillic must be treated as separate locales, not as a script toggle
- Language selection must remain independent from country selection
- Static demo and future app work should preserve Unicode fidelity and native orthography for all supported locales
- Avoid transliterated fallback text in production UI
- Do not machine-convert Serbian Cyrillic and Latin or Macedonian Cyrillic automatically unless explicitly validated for linguistic correctness
- Fonts should provide readable Latin and Cyrillic glyph coverage across supported locales
- Accessibility metadata must be localized too, including ARIA labels, accessibility descriptions, alt text, form labels, validation announcements, and status messages
- Keyboard navigation, focus order, tab navigation, modal accessibility, and mobile accessibility must remain sound under localized layouts
- Dynamically updated UI content should announce changes correctly to assistive technologies where feasible
- Playwright/UI regression verification should exercise multiple locales and include accessibility checks where feasible
- Add automated checks where practical for newly introduced hardcoded user-facing strings

## Static Demo Structure

Expected structure:

```text
static-demo/
  index.html
  app.css
  app.js
  manifest.webmanifest
  service-worker.js
  README.md
  icons/
  vendor/
```

## Documentation Structure

Expected first-pass structure:

```text
docs/
  assets/
    css/
      style.css
    images/
      logo-letbooks.svg
      logo-mark-symbol.svg
      icon-book.svg
      icon-qr.svg
      icon-library.svg
      icon-admin.svg
      icon-phone.svg
      icon-excel.svg
      icon-shield.svg
      icon-globe.svg
      icon-workflow.svg
      mock-en-workflow.png
      mock-en-institutions.png
      mock-architecture.png
      mock-sl-overview.png
      mock-sl-workflow.png
  en/
    index.html
    individuals.html
    institutions.html
    administrators.html
  sl/
    index.html
    posamezniki.html
    institucije.html
    skrbniki.html
```

## Brand and Tone Rules

Use the existing marketing mocks as the visual and editorial reference.

Required brand characteristics:

- warm
- respectful
- practical
- trustworthy
- educational
- mobile-first
- community-oriented

Prefer:

- cream or warm off-white backgrounds
- deep green primary accents
- rounded cards and panels
- clear hierarchy
- a serif-forward brand feel for hero headings where appropriate
- clean sans-serif body text
- visual references to books, QR workflows, boxes, and institutions

Avoid:

- AI-first positioning
- marketplace framing
- overclaiming integrations or current implementation status
- machine-generated generic marketing language

## Content Rules

- Documentation must be task-oriented and concrete
- Use realistic examples such as box/location codes and library review flows
- Emphasize that the manual workflow works without AI
- Present AI output as assistance, suggestion, or enrichment, never as unquestioned truth
- Be explicit that exchange, delivery arrangements, and agreements happen outside the platform unless a later feature explicitly changes that
- The institutions guide should be led by library workflows while explicitly including schools, universities, archives, and NGOs

## README Rules

- `README.md` should always reflect the current repository/application status
- Separate current state from future plans
- Do not describe planned features as implemented
- Use `Let Books` as the public-facing name in README content
- If `static-demo/` exists, the root README should explicitly describe it as the current executable app deliverable

## Verification Rules

- Use `hunspell` for spellcheck if available
- Use `playwright` for browser preview verification if available
- Verification should check both desktop and mobile layouts
- Verification should check navigation, language switching, and asset loading
- Verification for public pages should also check favicon URLs, canonical URLs, and representative Open Graph/metadata output where practical
- Keep commands and guidance reproducible across machines

## Code Generation Rules

- Generated code and docs should use repo-relative paths
- Shared assets should be reused instead of duplicated
- Prefer small, reviewable additions
- When future implementation details are discovered during work, add them here unless they belong in the product specification
