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

The Slovenian examples in `ai-translation-review-records.md` show common patterns: broad meaning preserved, but native-speaker correction still required for grammar, modality, terminology, register, English metaphor transfer, and translated-English sentence structure.

## Related Pages

- `ai-translation-review-records.md`
