# Benchmark примери за превод со LLM

## Резиме

Овој водич дефинира мал структуриран формат за складирање на прегледани примери од AI превод како повторно употребливи benchmark примери.

## Цел

Benchmark примерите му овозможуваат на проектот повторно да користи реални примери од преглед во:

- обука на рецензенти
- scorecard-и за квалитет
- статии за локализација во поголем обем
- документација за работен тек со човек во јамка
- LLM benchmark евалуации

## Препорачани полиња на примерот

Секој пример треба да вклучува:

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

Секој проблем треба да вклучува:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Повторно употреблива таксономија

Препорачани вредности за `error_categories`:

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

## Употреба на бодирање

Ваквите примери можат да поддржат интерна евалуација на:

- дали AI нацрт е објавлив без уредувања
- кои категории на грешки се појавуваат најчесто по јазик
- дали prompt-ите ги намалуваат повторувачките начини на неуспех
- колку често преглед од мајчин говорител менува јазик на политика

## Лесна рубрика за бодирање

Користете едноставен резултат 0-3 за секоја димензија.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Препорачани димензии:

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

## Ознаки за препорака за издание

По бодирањето, доделете една препорака за издание:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Насоки за сериозност за записите на проблеми

Секој проблем може дополнително да се означи со сериозност:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Како да се користи рубриката

1. бодирајте го AI нацртот пред уредување
2. запишете ги категориите и сериозностите на ниво на проблем
3. напишете го исправениот текст
4. доделете препорака за издание
5. по потреба забележете ја сигурноста на рецензентот

Ова намерно е полесно од целосна MQM програма. Наменето е за практична повторлива евалуација во рамки на open-source работен тек за локализација.

## Идеи за агрегирање на scorecard

Низ повеќе примери, следете:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Предложено проширување на примерот

Секој пример треба да вклучува:

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

## Прв пример

Првиот пример е словенечкиот AI пример за преглед на модалност и терминологија:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Поврзани страници

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
