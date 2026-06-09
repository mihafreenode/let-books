# Tools README

## Purpose

`tools/` is the repository's engineering workflow layer.

It contains:

- documentation/site generators
- localization helpers
- publication-safety validators
- environment and layout checks
- Android/CDP debugging helpers
- a small number of focused maintenance utilities

This directory is not just a script dump. It is repository memory.

`Engineering Governance` is the authoritative owner of the portable governance rules behind this area, especially:

- keeping knowledge close to governed artifacts
- preferring validators and automated checks over human memory for recurring objective failures
- treating validation as a layered system rather than a single gate

See:

- `skills/engineering-governance.md`

This README applies those rules to the Let Books tooling layer and preserves the local context contributors need when working in `tools/`.

The local tooling standard is:

1. keep knowledge close to the implementation
2. prefer validators and automated checks over human memory
3. explain why a tool exists, not only what it does
4. capture proven patterns before they are forgotten
5. avoid speculative frameworks when a documented script is enough

## Engineering Knowledge Preservation Standard

`Engineering Governance` defines the portable principle.

This section defines the Let Books tooling adaptation of that principle.

Priority order for preserving engineering knowledge:

1. `tools/README.md`
2. tool and validator file headers
3. high-value inline comments
4. tests
5. additional documentation only when necessary

For non-trivial tools, preserve:

- rationale
- assumptions
- constraints
- historical lessons
- failure modes
- related workflows
- reuse potential

Comments should explain implementation choices.
Tests should demonstrate protected behavior.
Validators should enforce guarantees.

When a recurring tooling failure or maintenance burden can be checked automatically, prefer adding or extending a validator before writing prose-only guidance.

## Tooling Ecosystem

The tooling stack applies the repository's layered validation model to Let Books documentation, localization, and generated-site tooling.

Local toolchain order:

1. maintain localized Markdown sources
2. generate structured HTML and discovery artifacts
3. validate source quality
4. validate generated output
5. use focused helpers for repair, debugging, and maintenance

This layering matters because the repository treats documentation and localized publishing as product artifacts, not as secondary project notes.

## Tool Catalog

### Shared Configuration

#### `docs-config.json`

Purpose:
- Canonical list of supported locales and documentation content roots.

Why It Exists:
- Traversal rules and locale scope need one shared source of truth across generators and validators.

Detects / Enforces:
- Indirectly keeps tooling aligned on which locales and content types exist.

Limitations:
- Does not centralize all locale labels or page metadata yet; several tools still carry display strings locally.

Related Tools:
- Most `generate-*`, `validate-*`, and localization scripts.

Reuse Potential:
- High. Shared machine-readable config for multi-script tooling is a proven pattern.

### Site Generation

#### `generate_docs_content.py`

Purpose:
- Main Markdown-to-HTML generator for docs, blog, learning, wiki, topics, and shared content wrappers.

Why It Exists:
- The repository needs multilingual static pages, shared navigation, topic-aware linking, and publication rules that generic Markdown rendering would not preserve.

Detects / Enforces:
- Enforces the generated-site contract expected by downstream validators: localized wrappers, topic menus, language switching, and consistent article structure.

Limitations:
- Large and convention-heavy.
- Uses custom parsing and HTML rewriting, so behavior is partly repo-specific.

Related Tools:
- `generate-index-pages.mjs`
- `generate-search-index.mjs`
- `generate-sitemap.mjs`
- `generate-static-seo.mjs`
- `validate-generated-site-structure.mjs`

Reuse Potential:
- Medium. The pattern is reusable, but the implementation is tightly coupled to this docs site.

#### `generate-index-pages.mjs`

Purpose:
- Generates localized index pages for blog, learning, wiki, and topics.

Why It Exists:
- Landing pages, browse pages, and localized wrappers need to stay consistent across content families.

Detects / Enforces:
- Enforces index-page presence and localized navigation structure.

Limitations:
- Contains repo-specific labels and path conventions.

Related Tools:
- `generate_docs_content.py`
- `generate-search-index.mjs`
- `generate-sitemap.mjs`
- `generate-static-seo.mjs`

Reuse Potential:
- Medium.

#### `generate-search-index.mjs`

Purpose:
- Builds the client-side search index from Markdown frontmatter.

Why It Exists:
- Search needs a lightweight artifact without depending on runtime content parsing.

Detects / Enforces:
- Enforces that titles, summaries, locale, and URLs are exported in a predictable structure.

Limitations:
- Frontmatter-driven only; does not index full body text.

Related Tools:
- `generate_docs_content.py`
- `generate-index-pages.mjs`

Reuse Potential:
- High.

#### `generate-sitemap.mjs`

Purpose:
- Generates XML and human-readable sitemaps.

Why It Exists:
- The site needs both crawler-oriented and human-auditable discovery artifacts.

Detects / Enforces:
- Enforces that sitemap output only includes existing pages and consistent URL classes.

Limitations:
- Priority and frequency values are policy-driven, not inferred.

Related Tools:
- `generate-static-seo.mjs`
- `validate-blog.mjs`

Reuse Potential:
- High.

#### `generate-static-seo.mjs`

Purpose:
- Rewrites static `<head>` metadata across homepage, docs pages, and the static demo.

Why It Exists:
- Metadata drift across many static pages is easy to miss and expensive to fix manually.

Detects / Enforces:
- Enforces canonical URLs, hreflang alternates, favicon tags, social metadata, and manifest descriptions.

Limitations:
- Uses hand-maintained page maps and string replacement around `<head>` blocks.

Related Tools:
- `validate-blog.mjs`
- `validate-generated-site-structure.mjs`

Reuse Potential:
- High. Centralized metadata regeneration is a proven static-site safeguard.

#### `generate-articles-json.mjs`

Purpose:
- Generates `docs/blog/articles.json` from localized article frontmatter.

Why It Exists:
- The blog needs a single registry for validation, navigation, and article discovery.

Detects / Enforces:
- Enforces article ids, canonical language, and available language variants.

Limitations:
- English remains the discovery root for article enumeration.

Related Tools:
- `validate-blog.mjs`
- `generate-index-pages.mjs`

Reuse Potential:
- High.

#### `generate-topic-nav.mjs`

Purpose:
- Generates topic-oriented navigation for blog pages and blog indexes.

Why It Exists:
- Topic browsing was introduced to make documentation discovery less linear.

Detects / Enforces:
- Enforces topic-grouped browse output when this generator is used.

Limitations:
- Strongly tied to the current blog/topic conventions.
- Historical overlap with `generate_docs_content.py` means maintainers should confirm which generator owns a given output before changing behavior.

Related Tools:
- `add-md-frontmatter.mjs`
- `generate_docs_content.py`

Reuse Potential:
- Medium.

#### `add-md-frontmatter.mjs`

Purpose:
- Adds missing frontmatter and topic metadata to learning and wiki Markdown files.

Why It Exists:
- Topic-aware navigation and validation require structured metadata, but older content did not always have it.

Detects / Enforces:
- Enforces frontmatter presence for known pages.

Limitations:
- Uses hand-maintained topic maps.

Related Tools:
- `generate-topic-nav.mjs`
- `generate-search-index.mjs`

Reuse Potential:
- Medium.

#### `md-to-html.sh`

Purpose:
- Fast single-article wrapper around the main docs generator.

Why It Exists:
- Full-site generation is unnecessary for small blog edits.

Detects / Enforces:
- Enforces that the requested source article exists before rendering.

Limitations:
- Blog-only convenience wrapper.

Related Tools:
- `generate_docs_content.py`

Reuse Potential:
- Low to medium.

### Localization Maintenance

#### `localization_alignment.py`

Purpose:
- Shared Markdown block parser, alignment engine, and sidecar metadata helper.

Why It Exists:
- Localization maintenance needs stable block-level matching so small English changes do not force full-document retranslations.

Detects / Enforces:
- Enforces block segmentation, alignment strategies, and sidecar metadata structure used by downstream localization tools.

Limitations:
- Heuristic-heavy.
- Custom Markdown model rather than full CommonMark.

Related Tools:
- `generate_translation_sidecars.py`
- `localization_mt_draft.py`
- `localization_patch_assist.py`
- `validate_translation_parity.py`
- `tools/tests/test_localization_alignment.py`

Reuse Potential:
- High. Structural alignment plus sidecar metadata is a reusable pattern.

#### `generate_translation_sidecars.py`

Purpose:
- Generates `.l10n.json` sidecars for localized Markdown pairs.

Why It Exists:
- Persisted alignment metadata improves future patching and parity validation.

Detects / Enforces:
- Enforces sidecar format and block-to-block metadata mapping.

Limitations:
- Quality depends on the alignment engine.

Related Tools:
- `localization_alignment.py`
- `localization_patch_assist.py`

Reuse Potential:
- High.

#### `localization_mt_draft.py`

Purpose:
- Creates machine-translated Markdown drafts while preserving structure and non-translatable segments.

Why It Exists:
- Coverage-first multilingual workflows need drafts that are easier to review than raw MT output.

Detects / Enforces:
- Enforces preservation of code, links, diagrams, comments, and other fragile syntax during translation.

Limitations:
- Translation quality depends on available backends and still requires review.

Related Tools:
- `localization_alignment.py`
- `generate_translation_sidecars.py`
- `localization_patch_assist.py`

Reuse Potential:
- High.

#### `localization_patch_assist.py`

Purpose:
- Applies source-side diffs to localized docs by translating only changed aligned blocks.

Why It Exists:
- Small English edits should not force teams to manually retranslate entire documents.

Detects / Enforces:
- Enforces change-localized translation updates and reports low-confidence alignment cases.

Limitations:
- Depends on git history and alignment confidence.

Related Tools:
- `localization_alignment.py`
- `localization_mt_draft.py`
- `generate_translation_sidecars.py`

Reuse Potential:
- High.

#### `repair_localized_internal_links.py`

Purpose:
- Rewrites localized Markdown links away from English targets when local variants exist.

Why It Exists:
- English cross-link leakage is a recurring multilingual publishing failure.

Detects / Enforces:
- Enforces locale-local internal links where possible.

Limitations:
- Only handles known link forms.

Related Tools:
- `validate_translation_parity.py`
- `validate-localization-completeness.mjs`

Reuse Potential:
- High.

### Localization Validation And Audit

#### `validate_translation_parity.py`

Purpose:
- Fine-grained source-vs-target Markdown parity validator.

Why It Exists:
- File presence alone does not protect against dropped sections, unchanged English fragments, or broken semantic parity.

Detects / Enforces:
- Enforces structural presence, code and diagram parity, localized metadata, and suspicious-English detection.

Limitations:
- Uses heuristics and can require human review for edge cases.

Related Tools:
- `audit_translation_parity.py`
- `audit_translation_warnings.py`
- `localization_alignment.py`

Reuse Potential:
- High.

#### `validate_language_quality.py`

Purpose:
- Warning-only language-quality validator for localized Markdown.

Why It Exists:
- The repository needs a low-risk measurement stage for spelling, punctuation, typography, whitespace, and script-consistency issues before deciding which checks deserve stricter enforcement.

Detects / Enforces:
- Advisory findings only.
- Optional Hunspell-based spelling warnings when locale dictionaries exist.
- Regex and Unicode-driven warnings for punctuation, typography, and script mixing.
- Separate script reporting for acceptable whole-Latin terms in Cyrillic prose versus mixed-script likely defects.

Limitations:
- Intentionally non-blocking.
- Signal quality still depends on allowlists, locale-specific punctuation rules, and repository review.
- Warnings should be interpreted as triage input for human review rather than proof that the text is wrong.

Workflow Notes:
- Use mixed-script likely defects as the highest-confidence script warnings.
- Treat acceptable whole-Latin technical or product terms in Cyrillic locales as measured context, not as defects.
- Keep this stage warning-only until repeated repository use shows that a narrower subset is precise enough for stricter enforcement.

Related Tools:
- `validate_translation_parity.py`
- `validate-localization-completeness.mjs`

Reuse Potential:
- High as an early-warning stage; medium as a future enforcement layer until false-positive rates are better understood.

#### `audit_translation_parity.py`

Purpose:
- Runs parity validation and summarizes high-signal findings.

Why It Exists:
- Teams need triage output, not only raw validator findings.

Detects / Enforces:
- Enforces issue visibility and prioritization rather than a new guarantee.

Limitations:
- Reporting layer only.

Related Tools:
- `validate_translation_parity.py`
- `audit_translation_warnings.py`

Reuse Potential:
- Medium.

#### `audit_translation_warnings.py`

Purpose:
- Summarizes warning debt from parity JSON reports.

Why It Exists:
- Warning volume becomes hard to prioritize without aggregation by locale, file, and category.

Detects / Enforces:
- Enforces visibility into warning concentration.

Limitations:
- Depends on upstream report shape.

Related Tools:
- `validate_translation_parity.py`
- `audit_translation_parity.py`

Reuse Potential:
- Medium.

#### `audit-localized-markdown-sources.mjs`

Purpose:
- Audits localized Markdown source files for untranslated or placeholder reader-facing content.

Why It Exists:
- Coverage-first localization created real files before all source text was fully localized.

Detects / Enforces:
- Tracks defect classes such as untranslated summaries, untranslated bodies, placeholder publication, and navigation localization debt.

Limitations:
- Pattern-based and tailored to known localization debt classes.

Related Tools:
- `generate-missing-blog-localizations.mjs`
- `validate-localization-completeness.mjs`

Reuse Potential:
- High.

#### `validate-content-parity.mjs`

Purpose:
- Reports missing localized Markdown variants by content family.

Why It Exists:
- Coverage gaps need a lightweight inventory before semantic review.

Detects / Enforces:
- Enforces file-presence visibility across locales.

Limitations:
- Presence-only; does not measure translation quality.

Related Tools:
- `generate-missing-blog-localizations.mjs`
- `validate-localized-articles.mjs`

Reuse Potential:
- High.

#### `validate-localized-articles.mjs`

Purpose:
- Compares localized Markdown against English for suspicious shortening, missing structure, and high-value article-specific rules.

Why It Exists:
- Some regressions preserve file presence while silently losing examples, warnings, or structurally important passages.

Detects / Enforces:
- Enforces body-size heuristics, heading retention, blockquote/list retention, source-expansion heuristics for newly added substantive blocks, and bespoke semantic checkpoints for important articles.

Limitations:
- Some rules are article-specific and intentionally opinionated.
- Heuristic source-expansion checks flag likely missing examples or explanations for review; they do not prove semantic equivalence.

Related Tools:
- `validate-content-parity.mjs`
- `validate_translation_parity.py`
- `audit-localized-markdown-sources.mjs`

Reuse Potential:
- High.

#### `validate-structural-localization-parity.mjs`

Purpose:
- Detects structural degradation in localized long-form Markdown even when file presence and broad semantic intent still appear acceptable.

Why It Exists:
- Some localized articles keep partial meaning while collapsing section hierarchy, dropping examples, compressing case studies, or flattening practical guidance into short summaries.

Detects / Enforces:
- Warns on heading-count loss, heading-depth collapse, suspicious body compression, major-section coverage loss, likely missing educational sections, and accidental list-structure drift such as nested localized bullets where the source list is flat.

Limitations:
- Heuristic and review-oriented. It identifies likely degraded structure rather than proving exact translation defects.
- The list checks are intentionally lightweight and will not model every Markdown edge case or every justified editorial restructuring.

Interpretation:
- Warnings mean the localized article should be reviewed for structural compression or missing reader value.
- Warnings about list shape mean the localized Markdown may have changed sibling structure, nesting depth, or ordered/unordered intent compared with the canonical source.
- The validator does not fail by default; use `--warning-fail-threshold` when a workflow wants warnings to become blocking after a chosen count.

Expected False Positives:
- Legitimate editorial restructuring that preserves educational value with fewer headings.
- Language-driven section shortening that does not remove meaning or navigability.

Expected False Negatives:
- Articles that preserve heading shape while still weakening examples, prose quality, or conceptual clarity.
- Semantically subtle omissions inside sections that remain structurally similar.

Related Tools:
- `validate-content-parity.mjs`
- `validate-localized-articles.mjs`
- `validate_translation_parity.py`

Operational Rule:
- Use this validator on freshly generated artifacts during review workflows. Source Markdown, generated HTML, and browser-rendered output can temporarily diverge during development.

Example command:
- `node tools/validate-structural-localization-parity.mjs --include ai-technical-debt-is-not-about-ai-generated-code`

Reuse Potential:
- High.

#### `validate-localization-completeness.mjs`

Purpose:
- Compares localized generated HTML against English generated HTML to catch reader-facing English leakage.

Why It Exists:
- Source Markdown may look correct while generated wrappers, captions, navigation, or metadata still leak source-language text.

Detects / Enforces:
- Enforces rendered-output localization for titles, metadata, navigation, breadcrumbs, tags, body text, alt text, and diagram labels.

Limitations:
- Equality-based comparison can miss subtler translation issues and needs carefully managed exemptions.

Related Tools:
- `audit-localized-markdown-sources.mjs`
- `validate-localized-articles.mjs`

Reuse Potential:
- High.

### Publication And Site Quality Validators

#### `validate-blog.mjs`

Purpose:
- Broad validator for docs/blog structure, links, frontmatter refs, article registry consistency, canonical/hreflang output, diagram localization, and editorial-source policy.

Why It Exists:
- Publishing-safe documentation requires more than linting. Link integrity, source provenance, diagram localization, and article metadata all fail in different ways.

Detects / Enforces:
- Enforces internal reference validity, article registry structure, canonical/hreflang consistency, localized diagram assets, and citation policy for editorial content.

Limitations:
- Broad and monolithic; it verifies many guarantees in one pass.

Related Tools:
- `generate-articles-json.mjs`
- `generate-static-seo.mjs`
- `validate-generated-site-structure.mjs`

Reuse Potential:
- High.

#### `validate-generated-site-structure.mjs`

Purpose:
- Parses generated HTML to detect duplicated or misplaced UI structures.

Why It Exists:
- Generator regressions often produce valid HTML with broken layout semantics.

Detects / Enforces:
- Enforces one-copy structural elements, correct topic menu/language selector placement, and generated HTML hygiene.

Limitations:
- Warning-oriented by default.

Related Tools:
- `generate_docs_content.py`
- `generate-static-seo.mjs`

Reuse Potential:
- High.

#### `validate_environment.py`

Purpose:
- Checks whether a contributor machine has the required toolchain for docs generation and validation.

Why It Exists:
- Many repo checks fail for environmental reasons that are otherwise hard to diagnose quickly.

Detects / Enforces:
- Enforces minimum tool versions and Playwright launchability expectations.

Limitations:
- Depends on local CLI names and local install shape.

Related Tools:
- Most docs generators and validators.

Reuse Potential:
- High.

#### `validate_layout_structure.py`

Purpose:
- Runs browser-oriented layout validation with a temporary local static server when needed.

Why It Exists:
- Layout checks need a predictable serving environment, but contributors should not need to set one up manually for every run.

Detects / Enforces:
- Enforces that the layout validation script can run against a reachable docs base URL.

Limitations:
- Thin wrapper around another validation entry point.

Related Tools:
- `tests/docs/layout-validation.cjs`

Reuse Potential:
- Medium.

### Android And Device Debugging

#### `wsl-find-adb.sh`

Purpose:
- Finds `adb.exe` from WSL and caches the resolved path.

Why It Exists:
- Real-device Android debugging is a project requirement, and WSL path discovery is otherwise fragile and repetitive.

Detects / Enforces:
- Enforces a deterministic ADB discovery order: explicit override, cache, shell discovery, common install locations, slow fallback.

Limitations:
- WSL/Windows-specific.

Related Tools:
- `android-cdp-check.sh`

Reuse Potential:
- High.

#### `android-cdp-check.sh`

Purpose:
- End-to-end smoke test for Android Chrome DevTools Protocol connectivity over ADB forwarding.

Why It Exists:
- Mobile debugging failures often happen before browser automation starts. This script isolates device, socket, forwarding, and JSON endpoint problems.

Detects / Enforces:
- Enforces CDP reachability and prints the failure stage with next actions.

Limitations:
- Shell-driven and environment-specific.

Related Tools:
- `wsl-find-adb.sh`
- `android-cdp-probe.mjs`

Reuse Potential:
- High.

#### `android-cdp-probe.mjs`

Purpose:
- Connects to a CDP page target and prints runtime, network, console, dialog, and service-worker state.

Why It Exists:
- Some mobile browser problems require direct CDP inspection rather than higher-level browser tooling.

Detects / Enforces:
- Enforces visibility into page boot state and runtime failures.

Limitations:
- Assumes CDP is already exposed locally.

Related Tools:
- `android-cdp-check.sh`

Reuse Potential:
- High.

### Focused Utilities

#### `generate-missing-blog-localizations.mjs`

Purpose:
- Generates missing localized blog stubs and source-map stubs.

Why It Exists:
- The repository temporarily favored coverage-first localization so every language variant had a file placeholder.

Detects / Enforces:
- Enforces file presence for missing localized article variants.

Limitations:
- Intentionally creates draft content that later validators are expected to flag until human localization is complete.

Related Tools:
- `validate-content-parity.mjs`
- `audit-localized-markdown-sources.mjs`
- `validate-localization-completeness.mjs`

Reuse Potential:
- Medium. Coverage-first stub generation is useful, but only with strong downstream validators.

#### `fetch-nypl-hero-assets.js`

Purpose:
- Fetches selected NYPL image assets and records rights/source metadata.

Why It Exists:
- The site and demo need curated public or reusable visual assets with provenance.

Detects / Enforces:
- Enforces that downloaded assets keep a traceable manifest of source metadata.

Limitations:
- Environment-specific and intentionally narrow.

Related Tools:
- None tightly coupled.

Reuse Potential:
- Low to medium.

### Tests

#### `tools/tests/test_localization_alignment.py`

Purpose:
- Regression coverage for tricky localization block alignment cases.

Why It Exists:
- Alignment heuristics can silently regress by matching plausible but wrong headings.

Detects / Enforces:
- Enforces specific protected matches and non-matches for a known difficult article pair.

Limitations:
- Narrow regression coverage; not a full alignment test matrix.

Related Tools:
- `localization_alignment.py`
- `generate_translation_sidecars.py`
- `localization_patch_assist.py`

Reuse Potential:
- High. Real-document regression tests for heuristic aligners are a strong pattern.

## Reusable Engineering Patterns

The following patterns look proven enough to preserve intentionally:

### Validator-first governance

Problem solved:
- Repository rules were easy to discuss but easy to forget.

Solution adopted:
- Encode guarantees as validators and checks whenever practical.

Lessons learned:
- Documentation helps people understand a rule, but validators stop regressions.

Reuse potential:
- High.

### Source-first then rendered-output localization validation

Problem solved:
- Localized Markdown can look correct while generated wrappers still leak English.

Solution adopted:
- Audit source Markdown first, then validate generated HTML separately.

Lessons learned:
- Source quality and publication quality are different failure surfaces.

Reuse potential:
- High.

### Alignment sidecars for long-lived localization maintenance

Problem solved:
- Small source edits were too expensive to propagate manually across languages.

Solution adopted:
- Use block alignment plus sidecar metadata to patch localized documents incrementally.

Lessons learned:
- Heuristics need regression tests and explicit confidence thresholds.

Reuse potential:
- High.

### Generated artifact validation

Problem solved:
- Static generation can produce structurally wrong but syntactically valid output.

Solution adopted:
- Validate generated HTML, SEO metadata, diagrams, navigation, and article registries after generation.

Lessons learned:
- Linting alone is not enough for generated sites.

Reuse potential:
- High.

### Coverage-first workflows require debt-tracking validators

Problem solved:
- Placeholder localization files made coverage metrics look better than publication quality.

Solution adopted:
- Allow temporary stubs, but track the resulting debt explicitly with validators.

Lessons learned:
- Coverage-first workflows are only safe when they are paired with blocking publication checks.

Reuse potential:
- High.

### Failure-stage debugging helpers

Problem solved:
- Device debugging was slowed down by ambiguous failures.

Solution adopted:
- Separate discovery, smoke check, and deep probe utilities.

Lessons learned:
- Good debugging tools should identify the failing stage and suggest the next action.

Reuse potential:
- High.

## Pattern Graduation

Treat a solution as a reusable engineering pattern only when it:

- solves a recurring problem
- applies beyond a single feature
- reduces maintenance effort
- remains understandable without heavy project-specific context

Prefer proven patterns over speculative frameworks.
