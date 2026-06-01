# Semantic Parity for Localized Articles

## Purpose

Localized knowledge content in `docs/blog/` must preserve meaning, argument, examples, cautions, and conclusions from the canonical English source.

This is a semantic review standard, not a literal translation standard.

## Core Rule

A localized article should leave the reader with substantially the same understanding as the English source.

Coverage and quality are separate requirements.

- Coverage means the article exists in every supported language.
- Quality means the localized article preserves the same meaning and educational value.

Missing content is a coverage failure, not merely a quality warning.

That means preserving:

- key arguments
- important examples
- audience explanations
- rhetorical bridge sentences when they carry meaning
- cautions and disclaimers
- conclusions
- thought experiments
- calls to action

## What Does Not Need to Match Literally

Localized articles may:

- merge paragraphs
- reorganize sections
- use different sentence structure
- use different headings
- use different wording

They do not need to preserve paragraph counts or sentence-by-sentence structure.

## What Must Not Be Lost

Do not drop a concept just because the localized version reads more smoothly without it.

If the English source contains a meaningful distinction, warning, example, or conclusion, the localized version must still make that meaning available to the reader.

## Full-Language Coverage

Every public-facing article must exist in every supported language once it is published.

This applies to:

- blog articles
- wiki articles
- learning materials
- policy documents
- technical articles
- guides
- case studies
- flagship project documents

There is no concept of an English-only published article.

Initial translations may be machine-generated and improved later, but article availability must not depend on language.

## Preferred Editing Strategy

Do not rewrite localized articles from scratch when parity is missing.

Prefer targeted repairs such as:

- adding one missing paragraph
- restoring one missing example
- restoring one missing conclusion
- adding one missing audience explanation
- restoring one rhetorical bridge sentence

## Reviewer Checklist

When comparing a localized article with the English original, check whether the localized reader can still answer the same questions:

- What is the main claim?
- What evidence or examples support it?
- What cautions or limits does the article include?
- What practical action or review standard follows from it?
- What final conclusion should the reader keep?

## Validation Approach

The semantic localization validator should help reviewers detect likely drift, not enforce literal translation.

Coverage validation and semantic validation should be tracked independently.

- Missing localized files should fail CI.
- Broken language-switch mappings should fail CI.
- Missing diagrams or localized supporting assets should fail CI when they are required for the article.
- Semantic drift should fail CI only when there is strong evidence that a localized article lost a major concept or conclusion.

It should warn about:

- suspiciously shortened articles or sections
- missing blockquotes
- missing numbered or example-driven sections
- missing audience explanations
- missing conclusions
- missing calls to action

It should fail only when there is strong evidence that a localized article lost a significant concept, argument, example, warning, or conclusion present in the English source.

## Contributor Guidance

When localizing new content:

- preserve meaning rather than wording
- preserve conclusions rather than structure
- preserve examples rather than paragraph counts
- preserve arguments rather than exact headings

If in doubt, keep the reader's understanding aligned with the English source even if the localized prose takes a different shape.
