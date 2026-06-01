# Localization at Scale Program

## Summary

This document defines the Let Books Localization at Scale initiative as a long-term knowledge, governance, accessibility, and implementation program.

## Purpose

Localization in Let Books is not treated as a translation afterthought.

It is a combined program for:

- multilingual participation
- educational accessibility
- cultural inclusion
- accessibility engineering
- public-interest software governance
- practical open-source implementation

## Core Thesis

The goal is not only to translate words.

The goal is to help people learn, participate, contribute, teach, preserve knowledge, and access information in the language they understand best.

## Program Layers

- `docs/blog/` explains why localization matters in practice and policy.
- `docs/wiki/` defines evergreen reference rules, models, and governance.
- `docs/learning/` turns the topic into practical study guides and implementation workflows.
- `docs/style-guide/` defines contributor, terminology, review, and publishing rules.
- `docs/sources/` keeps flagship claims traceable.

## Full-Language Coverage Policy

Every published content item should exist in every supported language.

- blog articles
- technical articles
- wiki pages
- learning guides
- policy notes
- case studies
- contributor guidance
- validation documentation

Coverage and maturity are separate dimensions.

- Coverage answers whether a reader can access the content in their language at all.
- Maturity answers how polished that version currently is.

Initial drafts may be AI-assisted or lightly reviewed. Missing published variants are not acceptable as a long-term operating model.

## Reader-Facing Localization Rule

Reader-facing content must be fully localized.

Localization coverage is not satisfied by any of the following on their own:

- localized URL
- localized title
- localized navigation
- localized page shell
- localized article stub

A localized page is considered complete only when all reader-facing content is localized.

Reader-facing content includes:

- titles
- subtitles
- summaries
- descriptions
- tags and category names
- article body copy
- headings
- lists
- callouts
- captions
- diagram labels
- alt text
- related-content descriptions
- localized breadcrumbs where variants exist

Source-language reader-facing content may remain visible only when it is:

- a quotation
- source material being discussed
- intentionally untranslated and clearly marked
- a proper noun
- a technical identifier

Everything else should be localized before the page is considered complete.

## Continuous Learning Rule

Every meaningful localization failure should leave the system stronger than before.

When a new category of issue is discovered:

1. fix the immediate occurrence
2. document the issue
3. add it to the native-speaker review corpus
4. update review guidance
5. add validator coverage where practical
6. add troubleshooting and prevention notes

The goal is not only to fix content. The goal is to improve the feedback loops that detect and prevent similar issues.

## Defect-Class Metrics

Localization work should track two numbers continuously:

```text
Localization Debt = X
Open Defect Classes = Y
```

Localization Debt measures remaining content work.

Open Defect Classes measure how many categories of localization failure are still not fully closed by workflow, policy, validators, and CI.

The goal is:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Incremental Class Closure

Resolved classes should be closed as soon as they reach zero occurrences.

That means:

1. detection becomes blocking in CI where practical
2. regression coverage remains in place
3. contributor guidance is updated
4. AI-agent troubleshooting guidance is updated
5. the class is marked closed in audit reporting

The repository should become progressively more resistant to localization regressions as experience accumulates.

## Source-First Remediation Policy

When a localization problem is discovered, fix the highest-level source that caused it.

Default investigation order:

1. source markdown
2. localization source files
3. metadata
4. article registries
5. generation scripts
6. intermediate generated artifacts
7. generated HTML

Do not patch generated HTML when the source localization is incomplete.

## Fast Feedback Principle

Fast feedback beats perfect first attempts.

The goal is to shorten the time between:

- creating content
- discovering problems
- correcting them

That principle applies to AI-assisted writing, localization, accessibility work, validation design, and CI policy.

## First-Wave English Deliverables

### Blog

- `blog/en/localization-at-scale.md`
- `blog/en/why-every-language-matters.md`
- `blog/en/translation-and-learning.md`
- `blog/en/multilingual-accessibility.md`
- `blog/en/the-cost-of-english-only-software.md`
- `blog/en/ai-will-not-replace-translators.md`
- `blog/en/economics-of-localization.md`
- `blog/en/preserving-smaller-languages-in-the-digital-age.md`
- `blog/en/united-in-diversity-and-open-source.md`
- `blog/en/future-of-continuous-localization.md`

### Wiki

- `wiki/localization-at-scale.md`
- `wiki/language-support-matrix.md`
- `wiki/localization-maturity-model.md`
- `wiki/ai-assisted-translation-policy.md`
- `wiki/multilingual-accessibility.md`
- `wiki/localization-governance.md`
- `wiki/translation-quality-assurance.md`
- `wiki/non-text-asset-localization.md`
- `wiki/localization-ci-cd.md`
- `wiki/unicode-and-script-correctness.md`

### Learning

- `learning/how-to-build-a-localization-pipeline.md`
- `learning/how-to-review-ai-assisted-translations.md`
- `learning/how-to-run-localization-qa-in-ci.md`
- `learning/how-to-localize-accessibility-content.md`
- `learning/how-to-localize-diagrams-and-screenshots.md`

## Let Books As Case Study

Let Books should document its own decisions openly.

That includes:

- what worked
- what failed
- what remains expensive
- what can be automated safely
- where human review remains essential

## Related Pages

- `README.md`
- `wiki/localization-at-scale.md`
- `wiki/localization-roadmap.md`
- `style-guide/localization/README.md`
