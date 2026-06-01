---
title: "How to Review AI-Assisted Translations"
summary: >-
  This guide explains how to review AI-generated translation drafts for meaning, terminology, accessibility, and tone.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# How to Review AI-Assisted Translations

## Summary

This guide explains how to review AI-generated translation drafts for meaning, terminology, accessibility, and tone.

## Review checklist

- check meaning before style
- verify terminology against the project glossary
- inspect sensitive wording carefully
- confirm accessibility text is localized too
- mark review maturity honestly

## Slovenian review case study

### Original AI draft

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Corrected Slovenian

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Human-review feedback

### Issue 1

- original: `morajo moči`
- corrected: `morajo imeti možnost, da`
- categories: grammar, modality
- likely AI error cause: literal translation of an English modal construction
- reviewer rationale: the original phrasing is ungrammatical in Slovenian; the corrected version uses the natural policy-language construction.

### Issue 2

- original: `po potrebi tudi izklopiti`
- corrected: `da po potrebi izklopijo`
- categories: fluency, word order
- likely AI error cause: awkward source-language word order and weak discourse control
- reviewer rationale: the corrected order is clearer and removes unnecessary emphasis.

### Issue 3

- original: `morajo biti izrecne`
- corrected: `morajo biti izrecno omogočene`
- categories: terminology, register, domain-policy phrasing
- likely AI error cause: dictionary-level wording chosen without enough product-policy context
- reviewer rationale: the requirement is about explicit enablement of paid enrichment, not about describing the enrichments as inherently explicit.

## Common issue categories

- grammar
- modality
- terminology
- register
- fluency
- literal translation
- ambiguity
- context loss
- word order
- collocation
- script or orthography
- domain-policy phrasing
- accessibility wording

## Scoring guidance

Use a lightweight 0-3 scale for repeated review work.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong or near-publishable

Recommended scoring dimensions:

- meaning accuracy
- grammar and fluency
- terminology and domain fit
- register and style
- review effort

## Release recommendation guidance

- `blocker`: not suitable for publication or user exposure
- `major_revision`: meaning may be close, but substantial rewriting is still needed
- `minor_revision`: usable draft with targeted native-speaker edits
- `ready_with_review_signoff`: suitable once normal reviewer signoff is complete

## Document the correction, not only the fix

For reusable review work, capture:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

## Reusable lessons from Slovenian review

The Slovenian case-study pattern is broadly reusable across languages:

- grammatical meaning can be close while the sentence is still unpublishable to a native speaker
- modality is especially vulnerable to literal translation
- terminology and policy wording often need domain-aware rewriting
- automated QA is helpful but rarely sufficient on its own for subtle register issues

## Localization-at-Scale note

Even when the overall meaning is preserved, AI-generated translations may require native-speaker review to correct subtle issues in grammar, modality, terminology, and domain-specific register. These issues are often difficult to detect through automated quality metrics alone.

## Where to reuse examples

- reviewer training materials
- AI translation evaluation datasets
- style-guide examples
- human-in-the-loop workflow docs
- localization-at-scale articles and best-practice guides

These examples help reviewers calibrate expectations and give localization leads realistic benchmark material.

## Related Pages

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
