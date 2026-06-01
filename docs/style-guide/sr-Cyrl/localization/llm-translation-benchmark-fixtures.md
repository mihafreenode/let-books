# Benchmark примери за превођење помоћу LLM-а

## Сажетак

Овај водич дефинише мали структурирани формат за чување прегледаних примера AI превода као поново употребљивих benchmark примера.

## Сврха

Benchmark примери омогућавају пројекту да поново користи стварне примере прегледа у:

- обуци рецензената
- scorecard-има квалитета
- чланцима о локализацији у већем обиму
- документацији тока рада са човеком у петљи
- LLM benchmark евалуацијама

## Препоручена поља примера

Сваки пример треба да укључи:

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

Сваки проблем треба да укључи:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Поново употребљива таксономија

Препоручене вредности за `error_categories`:

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

## Употреба оцењивања

Примери попут овога могу да подрже интерну евалуацију следећег:

- да ли AI нацрт може да се објави без измена
- које категорије грешака се најчешће појављују по језику
- да ли prompt-ови смањују понављајуће обрасце неуспеха
- колико често преглед изворног говорника мења језик политика

## Лака рубрика оцењивања

Користите једноставну оцену 0-3 за сваку димензију.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Препоручене димензије:

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

## Ознаке препорука за издање

Након оцењивања доделите једну препоруку за издање:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Смернице за озбиљност записа проблема

Сваки проблем може додатно да буде означен нивоом озбиљности:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Како користити рубрику

1. оцените AI нацрт пре уређивања
2. забележите категорије и озбиљности на нивоу проблема
3. напишите исправљени текст
4. доделите препоруку за издање
5. по потреби забележите поузданост рецензента

Ово је намерно лакше од пуног MQM програма. Намењено је практичној поновљеној евалуацији унутар open-source тока рада локализације.

## Идеје за агрегацију scorecard-а

Кроз више примера пратите:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Предложено проширење примера

Сваки пример треба да укључи:

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

## Први пример

Први пример је словеначки пример AI прегледа модалности и терминологије:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Повезане странице

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
