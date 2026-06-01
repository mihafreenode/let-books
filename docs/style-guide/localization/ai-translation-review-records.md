# AI Translation Review Records

## Summary

This guide explains how human reviewers should document corrections to AI-generated translations so examples can be reused in governance, training, QA, and evaluation work.

## Why this matters

Even when the overall meaning is preserved, AI-generated translations may require native-speaker review to correct subtle issues in grammar, modality, terminology, and domain-specific register. These issues are often difficult to detect through automated quality metrics alone.

## Required review record format

Each reviewed example should capture:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Use this template:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Recommended error taxonomy

Use one or more of these categories when applicable:

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

## Root-cause hypothesis guidance

Reviewer notes do not need certainty. A short hypothesis is enough if it helps future reviewers and model-evaluation work.

Common hypotheses include:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Slovenian case study

### Original AI draft

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Corrected Slovenian

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

### Review record

* Issue:
  Original: `morajo moči`
  Corrected: `morajo imeti možnost, da`
  Error Category: grammar, modality
  Root-Cause Hypothesis: literal translation of "must be able to"
  Reviewer Rationale: the original construction is ungrammatical in Slovenian; the corrected form is the natural modal formulation.

* Issue:
  Original: `po potrebi tudi izklopiti`
  Corrected: `da po potrebi izklopijo`
  Error Category: fluency, word order
  Root-Cause Hypothesis: unnatural source-language word order and weak discourse control
  Reviewer Rationale: the corrected order is clearer and removes unnecessary emphasis.

* Issue:
  Original: `morajo biti izrecne`
  Corrected: `morajo biti izrecno omogočene`
  Error Category: terminology, domain-policy phrasing, register
  Root-Cause Hypothesis: dictionary-equivalent adjective chosen without policy context
  Reviewer Rationale: the requirement is about explicit enablement of paid enrichment, not about the enrichments being "explicit" as a descriptive adjective.

## Reusable lessons across languages

- A translation can preserve broad meaning and still fail native-speaker quality expectations.
- Modal constructions are a common AI weakness because direct grammatical equivalence often does not hold across languages.
- Policy and product-spec wording often needs domain-specific phrasing rather than general-language synonyms.
- Automated checks can catch missing strings and broken placeholders, but they often miss register, modality, and subtle terminology drift.
- Reviewer rationale should be short but explicit so examples can train future reviewers and improve prompts or evaluation sets.

## Recommendation record

Add examples like this to these resources:

- Localization reviewer training materials
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- AI translation evaluation datasets
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- Style-guide examples
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- Human-in-the-loop workflow documentation
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- Localization-at-scale articles and best-practice guides
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Suggested scorecard use

Review examples like this can support internal scorecards by tracking:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
