# Review Workflow

## Summary

Localization review should move from draft generation to increasingly reliable human review.

Before translating, updating, or reviewing localized content, agents and human contributors must review relevant native-speaker findings, terminology guidance, and localization review rules.

## Required stages

1. draft translation
2. review relevant native-speaker findings, terminology guidance, and localization review rules
3. automated validation
4. terminology review
5. accessibility review
6. native-speaker review
7. optional professional review

## Mandatory pre-review checks

Before changing localized content, the reviewer must:

- review relevant native-speaker findings from `native-speaker-findings-corpus.json`
- review relevant terminology guidance
- review localization review rules for the content type
- explicitly consider whether known defect classes apply to the current content
- check whether previously rejected wording patterns reappear in the current draft
- check whether English idioms, metaphors, management jargon, or rhetorical phrasing were transferred too literally into Slovenian

## Tone Inflation Checklist

Use this checklist when reviewing recently created or recently expanded localized content.

Check whether the translation unintentionally:

- increases authority beyond the source
- increases certainty beyond the source
- introduces legal, compliance, audit, or evidentiary tone not present in the source
- introduces academic or governance jargon where the source is simpler
- replaces a practical word with a more formal or institution-sounding one

Common examples to review carefully:

- `evidence` rendered as something closer to legal proof than supporting material
- `artifact` rendered as jargon when `record`, `document`, or `material` would be clearer
- `draft` rendered as if it were formal evidence or official publication text
- English governance or management language translated into wording that sounds more authoritative than the original

Preferred reviewer action:

- make targeted edits
- preserve the author's intended meaning and strength
- prefer natural reader-facing wording over terminology fidelity when literal wording changes connotation

## Rhetorical Rhythm Checklist

Check whether the translation preserves English rhetorical rhythm too literally.

Watch for:

- very short repeated sentences
- one-line paragraphs that sound abrupt in the target language
- repeated sentence openings
- English emphasis achieved through fragmentation rather than natural phrasing

Review whether the target language would more naturally:

- combine short sentences
- use commas or conjunctions
- turn fragments into a list
- keep emphasis while smoothing the rhythm

Translate the rhetorical effect, not the exact sentence cadence.

## Enumeration Checklist

Check repeated English enumeration patterns such as:

- `To engineers.`
- `To teachers.`
- `To editors.`

Many target languages will prefer:

- a single sentence
- a coordinated list
- comma-separated phrases

Preserve the emphasis, but do not preserve English formatting if it reads as translationese.

## Literal Governance Vocabulary Checklist

Review governance phrasing that is easy to translate too literally.

Examples:

- `approval boundaries`
- `approval workflows`
- `escalation paths`
- `lines of responsibility`
- `process mechanics`
- `planning artifacts`

Prefer natural governance language used by native speakers. Translate the function of the term, not its surface form.

## Literal AI Terminology Checklist

Review AI-adjacent wording that often drifts into awkward literal translation.

Examples:

- `plausibility`
- `fluency`
- `smooth`
- `seamless`
- `evidence`
- `artifact`
- `curated`

Translate the intended meaning in context rather than the nearest dictionary equivalent.

## Artificial Noun Phrase Checklist

Watch for understandable but unnatural noun phrases that reveal the source language.

Examples:

- `procesna mehanika`
- `potrditveni delovni tokovi`
- `načrtovalni artefakti`
- `validacijske strategije`

When a phrase sounds translated even though it is semantically correct, rewrite it into a form a native speaker would naturally use.

## Source Map Terminology Review

Review translations of `source map` and `source maps` before translating them literally.

Do not assume every use refers to a JavaScript or CSS debugging artifact.

Distinguish the context:

- In software build or debugging contexts, a source-code-oriented translation may be correct.
- In documentation, governance, localization, provenance, or traceability contexts, prefer wording that reflects mapping claims back to sources, documenting origins, or tracking evidence.

Possible direction depending on locale and context:

- `source map` as debugging metadata: source-code map terminology
- `source map` as documentation provenance: source-reference map, source record, source traceability wording

Translate the function, not the label. The reader should understand the concept immediately without reconstructing the original English phrase.

## Review summary requirements

When producing a review summary, reviewers should state:

- which findings influenced the translation or review decision
- which known defect classes were checked
- whether any previously rejected wording patterns were considered
- whether any finding was intentionally left unresolved and why

## Continuous-improvement rule

Every localization defect should improve the system.

When a native speaker reports a defect, do not stop at fixing the current sentence. Also decide whether the finding should become:

- review guidance
- terminology guidance
- prompt guidance
- validator logic
- regression coverage
- a reusable corpus record

Add targeted validators only for defects that have actually been observed and documented.

When practical, CI should fail if a known fixed regression reappears.

## AI review record requirements

When a reviewer corrects AI-generated text, the correction should be documented in a reusable record.

Required fields:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Recommended additional fields:

- finding id
- language
- source text
- preferred localized text
- validator possible
- related files
- date added

Store structured records in `native-speaker-findings-corpus.json` when the issue teaches a reusable lesson or should block recurrence.

If a finding remains intentionally unresolved, record the justification explicitly in the corpus.

This keeps review work reusable for governance, training, QA calibration, and model evaluation.

## Review examples

The Slovenian examples in `ai-translation-review-records.md` show common patterns: broad meaning preserved, but native-speaker correction still required for grammar, modality, terminology, register, English metaphor transfer, translated-English sentence structure, and technical-writing naturalness.

Publication-quality review must also check whether the localized text sounds like natural technical writing in the target language, not only whether it preserves broad meaning.

Review prompts should explicitly ask:

- Would a native engineer naturally say this?
- Is the engineering concept clear without copying the source-language sentence structure?
- Do role names, process terms, and business examples sound native in context?
- Do rendered diagrams and their textual references still match orientation and layout?
- Did the localized Markdown accidentally change list nesting, quote structure, or other section shape compared with the canonical source?

Treat text that explains a diagram as part of the diagram itself.

If a diagram changes orientation, structure, labels, or meaning, review all associated explanatory prose, captions, alt text, and localized variants before considering the review complete.

The same rule applies to lists, examples, and quoted blocks: translated prose may vary, but accidental Markdown structure drift is still a defect.

## Related Pages

- `ai-translation-review-records.md`
