# LLM Translation Benchmark Fixtures

## Summary

This guide defines a small structured format for storing reviewed AI-translation examples as reusable benchmark fixtures.

## Purpose

Benchmark fixtures let the project reuse real review examples across:

- reviewer training
- quality scorecards
- localization-at-scale articles
- human-in-the-loop workflow documentation
- LLM evaluation benchmarks

## Recommended fixture fields

Each fixture should include:

- `fixture_id`
- `source_language`
- `target_language`
- `content_type`
- `domain`
- `source_text`
- `ai_draft`
- `corrected_text`
- `issues`
- `scoring_rubric`
- `example_scorecard`
- `overall_lesson`
- `recommended_uses`

Each issue should include:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Reusable taxonomy

Recommended `error_categories` values:

- `grammar`
- `modality`
- `terminology`
- `register`
- `fluency`
- `literal_translation`
- `ambiguity`
- `context_loss`
- `word_order`
- `collocation`
- `script_or_orthography`
- `domain_policy_phrasing`
- `accessibility_wording`

## Scoring use

Fixtures like this can support internal evaluation of:

- whether an AI draft is publishable without edits
- which error categories appear most often by language
- whether prompts reduce repeated failure modes
- how often native-speaker review changes policy wording

## Lightweight scoring rubric

Use a simple 0-3 score for each dimension.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Recommended dimensions:

- `meaning_accuracy`
  Does the draft preserve the intended meaning?
- `grammar_and_fluency`
  Does it read as correct and natural target-language text?
- `terminology_and_domain_fit`
  Does it use the right terminology and domain phrasing?
- `register_and_style`
  Does the tone fit policy, product, educational, or accessibility context?
- `review_effort`
  How close is the draft to approval from a native-speaker reviewer?

## Release recommendation labels

After scoring, assign one release recommendation:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Severity guidance for issue records

Each issue may also be tagged with severity:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## How to use the rubric

1. score the AI draft before editing
2. record issue-level categories and severities
3. write the corrected text
4. assign a release recommendation
5. note reviewer confidence if needed

This is intentionally lighter than a full MQM program. It is meant for practical repeated evaluation inside an open-source localization workflow.

## Scorecard aggregation ideas

Across multiple fixtures, track:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Suggested fixture extension

Each fixture should include:

```json
{
  "scoring_rubric": {
    "scale": "0-3",
    "dimensions": [
      "meaning_accuracy",
      "grammar_and_fluency",
      "terminology_and_domain_fit",
      "register_and_style",
      "review_effort"
    ],
    "release_recommendations": [
      "blocker",
      "major_revision",
      "minor_revision",
      "ready_with_review_signoff"
    ]
  }
}
```

## First fixture

The first fixture is the Slovenian modality and terminology review example:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Related Pages

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
