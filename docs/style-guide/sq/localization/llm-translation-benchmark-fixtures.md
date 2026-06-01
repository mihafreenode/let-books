# Benchmark fixtures për përkthim me LLM

## Përmbledhje

Ky udhëzues përcakton një format të vogël të strukturuar për ruajtjen e shembujve të rishikuar të përkthimit AI si benchmark fixtures të ripërdorshme.

## Qëllimi

Benchmark fixtures i lejojnë projektit të ripërdorë shembuj realë rishikimi në:

- trajnim rishikuesish
- scorecard të cilësisë
- artikuj për lokalizim në shkallë të gjerë
- dokumentacion të rrjedhës human-in-the-loop
- benchmark-e vlerësimi për LLM

## Fusha të rekomanduara të fixture-it

Çdo fixture duhet të përfshijë:

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

Çdo çështje duhet të përfshijë:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Taksonomi e ripërdorshme

Vlera të rekomanduara për `error_categories`:

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

## Përdorimi i pikëzimit

Fixture të tilla mund të mbështesin vlerësimin e brendshëm të:

- nëse një draft AI është i publikueshëm pa redaktime
- cilat kategori gabimesh shfaqen më shpesh sipas gjuhës
- nëse prompt-et zvogëlojnë mënyrat e përsëritura të dështimit
- sa shpesh rishikimi nga folës vendas ndryshon formulimin e politikave

## Rubrikë e lehtë vlerësimi

Përdorni një rezultat të thjeshtë 0-3 për secilin dimension.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Dimensione të rekomanduara:

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

## Etiketa të rekomandimit për publikim

Pas vlerësimit, caktoni një rekomandim publikimi:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Udhëzim për ashpërsinë e regjistrave të çështjeve

Çdo çështje mund të etiketohet edhe me ashpërsi:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Si të përdoret rubrika

1. vlerësoni draftin AI para redaktimit
2. regjistroni kategoritë dhe ashpërsitë në nivel çështjeje
3. shkruani tekstin e korrigjuar
4. caktoni një rekomandim publikimi
5. shënoni besimin e rishikuesit nëse duhet

Kjo është qëllimisht më e lehtë se një program i plotë MQM. Është menduar për vlerësim praktik të përsëritur brenda një rrjedhe open-source lokalizimi.

## Ide për agregim scorecard

Nëpër shumë fixture, ndiqni:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Zgjerim i sugjeruar i fixture-it

Çdo fixture duhet të përfshijë:

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

## Fixture-i i parë

Fixture-i i parë është shembulli slloven i rishikimit të modalitetit dhe terminologjisë nga AI:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Faqe të lidhura

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
