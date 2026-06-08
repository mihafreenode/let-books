# Localization

## Summary

`docs/style-guide/localization/` defines how multilingual knowledge content should be translated and linked.

The long-form program model, Native-Speaker Review Findings corpus, localization debt model, defect-class model, and drift model now live in `../../localization-at-scale-program.md`.

This guide focuses on contributor-facing rules and operational expectations.

## Purpose

Keep translations traceable, script-correct, structurally aligned with canonical English sources, and reviewable as a long-term localization system rather than a one-off translation task.

## Structure

- locale policy
- article ID policy
- cross-language linking rules
- terminology alignment rules
- AI review-record rules
- LLM translation benchmark fixtures

## Core Principles

- English is the canonical authoring language for the knowledge platform unless a document explicitly declares a different policy.
- Translations are first-class deliverables, but they inherit canonical source authority from the English original.
- Coverage is mandatory across all supported languages for published public-facing content. Maturity may vary, but missing articles are not acceptable.
- Localization is broader than translation. It includes accessibility text, diagrams, screenshots, captions, navigation, metadata, and governance.
- Semantic parity matters more than literal parity. Localized articles should preserve the same ideas, examples, warnings, and conclusions even when structure changes.
- Serbian Latin and Serbian Cyrillic are separate locales.
- Macedonian, Albanian, and Slovenian must preserve correct native orthography and Unicode characters.
- AI-generated translation is allowed as a draft stage only. It does not replace review.
- Every native-speaker correction should improve future translation, review, prompting, or validation work.
- Before translating, updating, or reviewing localized content, contributors and agents must review relevant native-speaker findings, terminology guidance, and localization review rules.
- Contributors and agents must explicitly consider whether known defect classes apply to the content being changed.
- Reader-facing content must be fully localized before a page is considered complete.
- Fix localization issues at the highest-level source first. Do not patch generated HTML when the markdown source or metadata is still incomplete.

## Rendered Output Rule

Localization is not complete merely because the source text was translated.

For all rendered content, including:

- Mermaid diagrams
- SVG diagrams
- charts
- generated graphics
- image overlays
- visual labels
- generated documentation assets

reviewers must verify that:

- translated text remains fully visible
- text is not clipped
- text is not truncated
- text does not overlap
- text remains readable
- spacing remains reasonable
- visual hierarchy remains understandable

Localized labels may require:

- shorter wording
- line breaks
- different node sizes
- different layout direction
- different spacing

For localized Mermaid diagrams, native SVG text rendering is the repository standard.

Published Mermaid diagrams should be rendered with:

- `htmlLabels: false`

because translated text often changes length, wrapping, and spacing requirements in ways that make `foreignObject`-based HTML labels more fragile.

Any intentional exception should be documented explicitly.

When translated labels become too long, prefer:

- shorter natural wording
- concept-level simplification
- line breaks
- restructuring the diagram

before:

- increasing diagram width
- shrinking text
- accepting crowded layouts

A diagram label should preserve the concept. It does not need to preserve the full article wording.

If a translated diagram appears to clip labels despite sufficient node space, review Mermaid rendering mode before redesigning the content.

Visual correctness is part of localization quality.

A linguistically correct translation that produces a visually broken diagram is not considered complete.

Source files remain authoritative.
Generated outputs must be regenerated and reviewed after localization changes.

## Natural Technical Language Rule

Do not mechanically translate technical terms simply because a direct equivalent exists.

Review whether the translated wording:

- sounds natural to experienced practitioners
- preserves meaning
- preserves intent
- preserves appropriate formality
- matches common usage within the target language community
- improves understanding instead of merely matching words

Prefer concept translation over word translation.

The primary review question should be:

`Would an experienced practitioner naturally explain the concept this way?`

rather than:

`Did we translate every word?`

When a literal translation sounds:

- awkward
- translated
- overly formal
- uncommon
- misleading

prefer a more natural equivalent while preserving meaning.

Terminology parity is not the goal.
Meaning parity and natural usage are the goal.

## High-Visibility Text Rule

Not all text carries equal localization risk.

Apply stricter review to:

- article titles
- headings
- summaries
- diagram labels
- navigation text
- topic names
- button labels
- table headers
- glossary terms

These locations have less surrounding context and expose awkward wording more quickly.

A phrase that is acceptable inside a paragraph may still be poor as a heading, summary, or diagram label.

## Translation-Smell Review

Reviewers should actively look for wording that:

- sounds translated rather than naturally written
- preserves words while weakening understanding
- preserves terminology while reducing readability
- is technically correct but uncommon among practitioners
- follows source wording too closely at the expense of the target language

These are review signals, not automatic errors.

Language-specific guidance may maintain examples of:

- suspicious terms
- awkward literal translations
- recurring false friends
- over-formal constructions
- terminology that requires manual review

When an English metaphor is not commonly used by practitioners in the target language, prefer translating the underlying concept rather than the metaphor itself.

Example directions for Slovenian review:

- `bridge layer` -> `vmesni korak`, `prehod med ...`, `povezovalni korak`
- `entry surface` -> `vstopna točka`, `izhodišče`
- `implementation surface` -> `implementacija`, `način izvedbe`, `uporabniški vmesnik` where appropriate
- `artifact chain` -> `zaporedje gradnikov`, `plasti`, `dokumenti`

Review question:

`Would a Slovenian developer naturally say this during a technical discussion?`

If not, prefer the underlying concept over the translated metaphor.

### Slovenian example

The English word `artifact` should not automatically become `artefakt`.

Choose context-appropriate alternatives such as:

- `plast`
- `gradnik`
- `rezultat`
- `dokument`
- `zapis`
- `datoteka`
- `ustvarjeni izhod`
- `objavljena različica`

depending on what is actually being described.

## Natural Practitioner Review Pass

Localization review should include a dedicated pass that asks:

`Would a native practitioner naturally write this?`

The relevant practitioner depends on the audience, for example:

- engineer
- developer
- librarian
- educator
- administrator
- domain specialist

The goal is not terminology parity.

The goal is:

- meaning parity
- strength parity
- natural usage
- audience appropriateness

## Multilingual Article Requirements

Every blog article published in this repository must follow these rules:

### 1. English Canonical First

All blog articles must be written in English first. Translations are derived from the English canonical version. The English article is the authoritative source for evidence and specification references.

For blog frontmatter, `canonical_language` should remain `en` in the translated file as well. The field describes source authority, not the locale of the translated file.

### 2. Required Frontmatter

Every article (canonical and translation) must include a `language_variants` field in its YAML frontmatter listing all 12 language variants with relative paths:

```yaml
language_variants:
  - ../en/<article-id>.md
  - ../sl/<article-id>.md
  - ../hr/<article-id>.md
  - ../bs/<article-id>.md
  - ../sr-Latn/<article-id>.md
  - ../sr-Cyrl/<article-id>.md
  - ../mk/<article-id>.md
  - ../sq/<article-id>.md
  - ../de/<article-id>.md
  - ../it/<article-id>.md
  - ../fr/<article-id>.md
  - ../es/<article-id>.md
```

Supported locales: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Other Languages Footer

Every translated article must include an "Other Languages" footer section at the end listing all other available translations with the locale's native name.

English canonical articles must also include this section for parity.

### 4. Semantic Parity

Localized articles must preserve the same meaning and reader outcome as the canonical English source.

They may merge or reorder sections, but they must not lose major arguments, examples, audience explanations, cautions, rhetorical bridges, or conclusions.

Every published article must also exist in every supported language. Coverage and semantic quality are tracked separately.

### 4a. Reader-Facing Localization Completeness

Localization coverage is not satisfied by a localized URL, title, navigation shell, or article stub.

A localized page is considered complete only when reader-facing content is localized, including:

- title and summary
- metadata descriptions
- tags and taxonomy labels
- headings, lists, and callouts
- article body copy
- captions, alt text, and diagram labels
- related-content descriptions
- localized breadcrumbs where variants exist

Localized Markdown must also preserve the structural shape of the canonical source unless a documented localization reason exists.

This includes:

- heading hierarchy
- list nesting
- ordered vs unordered lists
- blockquotes
- code blocks
- tables
- diagram references
- image placement
- excerpt blocks

Translated wording may differ. Accidental structural drift should not.

The same rule applies to newly added substantive content.

If a source article gains a new example, argument, explanatory subsection, case study, quoted artifact, diagram explanation, warning, or limitation discussion, supported localized variants must either:

- contain an equivalent localized addition
- or explicitly document why the addition is intentionally omitted

Silent omission is localization debt.

Allowed exceptions are limited to quotations, explicitly discussed source material, clearly marked intentional non-translation, proper nouns, and technical identifiers.

When an article quotes a repository artifact such as a use case, automation contract, ADR, validator, governance note, or similar engineering document, localized articles should prefer a localized excerpt whenever an equivalent localized rendering can reasonably be maintained.

Reader-facing localization completeness also includes rendered visual quality.

A localized page is not considered complete if a translated diagram, SVG, chart, or other visual asset is clipped, crowded, unreadable, or visibly broken in the final rendered output.

Localization is finished only when:

- meaning is preserved
- terminology is appropriate
- rendered content is readable
- diagrams remain usable
- navigation remains understandable
- generated outputs remain correct
- the content feels naturally written in the target language
- Markdown structure remains intentionally aligned with the canonical source

### 5. Localized Source-Map Stubs

Every flagship English blog article must have a corresponding source map under `docs/sources/en/`. Every non-English locale must have a stub source map under `docs/sources/<locale>/` that links back to the canonical English source map.

Source-map stubs are not full translations. They are short files with a pointer to the English original and language-appropriate context.

### 6. LinkedIn Derivative Packs

Every flagship English blog article must have a LinkedIn derivative pack under `docs/blog/en/linkedin/<article-id>.md` containing:

- a broad-audience post
- an institutional/library post
- a student/learner post
- a thread outline

These are social-media derivatives only. They do not require translation.

### 7. HTML Article Versions

Every blog article must have an HTML version alongside the Markdown source. The HTML version follows the same structure as the existing documentation HTML site (`docs/<locale>/index.html` pattern) and is linked from the appropriate locale's documentation index.

HTML versions are generated from the Markdown source using the standard conversion pipeline (pandoc-based) and must maintain parity with the Markdown content.

### 8. HTML Publishing Requirements

- Every locale's `docs/<locale>/index.html` must list blog articles available in that locale with direct links to the HTML article pages.
- The HTML article page uses the same header, footer, stylesheet, and language-switching pattern as the existing documentation pages.
- The `<head>` must include proper `hreflang` alternates for all 12 locales.
- The `data-page-type` attribute on `<body>` must be set to `"article"`.

## Source-Map Policy

- Source maps live in `docs/sources/<locale>/`.
- English source maps are full evidence maps tracing claims to repository documentation.
- Non-English source-map stubs are short files that reference the English original.
- Source maps are created only for flagship articles, not for every minor post.

## Translation Maturity Model

Use these levels when discussing or tracking translation quality.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Track maturity by locale and by content category where practical.

## Localization At Scale Expectations

- Localize public-facing knowledge content, not only UI strings.
- Localize accessibility metadata such as alt text, captions, ARIA labels, and language metadata.
- Prefer diagrams generated from structured sources so translated variants can be reproduced.
- Document terminology decisions, reviewer expectations, and dispute-resolution paths.
- Translate technical terms by domain meaning, not by the first dictionary meaning. In testing, benchmarking, and evaluation contexts, terms such as `fixture` usually mean reusable reference examples or test cases, not physical infrastructure.
- Keep validation and CI close to publishing workflows so localization regressions are treated as product-quality issues.
- Preserve representative AI-review examples so subtle native-speaker corrections can inform training, governance, and evaluation.
- Maintain the structured findings corpus at `native-speaker-findings-corpus.json` and treat it as reusable operational knowledge, not as a dead archive.
- Add targeted validators only for defects that have actually been observed and documented in the findings corpus.
- Fail CI when a known fixed regression reappears where practical.
- Require explicit justification for intentionally unresolved findings.
- Treat mixed-language publishing as a production bug, not as an editorial inconvenience.
- Review both meaning quality and rendered visual quality before approving localized content.
- Review Markdown structure as content correctness, not as cosmetic formatting.
- Prioritize recent and actively maintained content for rendered-output review when repository-wide review is not yet complete.
- Fix obvious low-risk wording and visual issues proactively.
- Avoid large-scale mechanical replacements that improve term uniformity while harming natural language quality.

## Source-First Remediation Workflow

When a localization validator fails, investigate in this order:

1. source markdown
2. localization metadata and frontmatter
3. article registries and cross-language references
4. generation scripts
5. intermediate generated artifacts
6. generated HTML

Preferred workflow for humans and AI agents:

```text
Find problem
↓
Identify source of truth
↓
Fix highest-level source
↓
Regenerate artifacts
↓
Run validation
↓
Repeat until clean
```

For rendered visual defects, the preferred remediation order is:

1. improve label wording
2. add better line breaks
3. improve diagram structure
4. adjust spacing or layout direction
5. increase render width only if the above are insufficient

Do not use larger SVG widths as the default fix for translated diagrams.

## Localization Debt And Defect Classes

Track both of these metrics throughout localization work:

- `Localization Debt`: remaining content debt such as untranslated summaries, untranslated bodies, placeholder draft pages, and other reader-facing source problems.
- `Open Defect Classes`: remaining categories of problems that are not yet fully prevented by policy, validators, workflow rules, and CI enforcement.

The objective is not only to reduce file counts. The objective is:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Defect-Class Closure Rule

When a defect class reaches zero occurrences:

1. make detection blocking in CI
2. add or retain regression coverage
3. update contributor guidance
4. update AI-agent guidance
5. mark the defect class as closed

Do not wait for the entire repository backlog to reach zero before closing individual defect classes.

## Family Processing Rule

Process article families as units.

For each family:

1. verify the source article
2. complete all localized variants
3. localize metadata and summaries
4. localize tags and taxonomy labels
5. localize diagrams and captions where present
6. remove placeholder content
7. regenerate artifacts
8. run validators
9. verify generated HTML, indexes, cards, and related content
10. recalculate localization debt metrics

Do not leave partially localized families behind.

## AI-Agent Localization Workflow

When an AI agent encounters repeated localization issues, it should switch from file-count thinking to defect-class thinking.

Preferred order:

1. fix generator issues affecting many files
2. fix metadata issues affecting many files
3. fix workflow issues affecting future files
4. fix validator gaps
5. fix individual content files family by family

When the same correction appears more than three times, stop and determine whether it should become a generator rule, validator rule, workflow rule, or policy rule.

Where practical, validators and review workflows should encourage:

- rendered-content review
- natural-language review
- terminology review
- visual localization review

- high-visibility text review
- translation-smell review

not merely source-text translation parity.

Natural technical language is part of correctness.

For publication-quality content, reviewers should ask questions such as:

- Would a native engineer naturally write or say this in a technical discussion?
- Does the wording preserve the engineering concept rather than the source-language sentence shape?
- Do role names, business terminology, and process language sound authored in the target language rather than translated into it?
- Do diagram references still match the rendered artifact direction, layout, and labels?

Meaning-preserving but translated-sounding wording should still fail review when it reads unlike native technical writing.

Validators may also emit warnings for:

- suspicious translated-sounding terminology
- unusually long diagram labels
- localization risk indicators
- generated-content review candidates

Validators should not attempt to rewrite language automatically.
Human review remains authoritative.

## Native-Speaker Review Corpus Categories

Maintain a growing corpus of real findings, including:

- parallel structure
- rhetorical transfer
- hidden-agent constructions
- anthropomorphic abstractions
- translationese
- educational-style mismatch
- public-sector style mismatch
- mixed-language publishing
- semantic preservation gaps

Each entry should record the source article, language, original text, improved text, explanation, category, and whether automated QA would likely detect it.

## Actionable documentation update record

The Slovenian AI-review example should update these documents first:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Change-record summary for PRs or governance review:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## LinkedIn Pack Policy

- LinkedIn packs live in `docs/blog/en/linkedin/`.
- Only English flagship articles require LinkedIn packs.
- LinkedIn packs are Markdown, not HTML.
- The `docs/blog/README.md` must list the LinkedIn pack folder.

## Related Topics

- Terminology
- Publishing
- Multilingual systems
- Spec-driven content program

## Related Articles

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`
- `semantic-parity.md`

## Related Learning Guides

- `../../learning/README.md`

## Related Wiki Pages

- `../../wiki/README.md`

## Further Reading

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `findings-system-roadmap.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
