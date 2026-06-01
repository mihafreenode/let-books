---
title: "Осигурање квалитета превода"
summary: >-
  Превод QA комбинује аутоматизовану валидацију, проверу правописа, преглед терминологије, проверу приступачности и људско расуђивање.
topics:
  - translation-quality
  - qa
  - localization
---
# Осигурање квалитета превода

## Резиме

Превод QA комбинује аутоматизовану валидацију, проверу правописа, преглед терминологије, проверу приступачности и људско расуђивање.

## Уобичајене провере

- недостају преводи
- Енглеско цурење
- неподударања чувара места
- покварене везе
- глосар дрифт
- покривеност текста приступачности
- паритет снимака екрана и дијаграма

## Људски преглед доказа

Превод QA такође треба да сачува кратке записе о људским прегледима за репрезентативне исправке уз помоћ AI.

Минимални број поља:

- оригинални текст
- исправљен текст
- категорија грешке
- хипотеза о основном узроку
- образложење рецензента

Ово је важно јер чак и када је опште значење сачувано, преводи генерисани AI могу захтевати преглед изворног говорника да би се исправили суптилни проблеми у граматици, модалитету, терминологији и регистру специфичном за домен. Ове проблеме је често тешко открити само помоћу аутоматизованих метрика квалитета.

## Таксономија уобичајених грешака у преводу AI

- граматика
- модалитет
- терминологија
- регистар
- течност
- дослован превод
- двосмисленост
- губитак контекста
- ред речи
- колокација
- писмо или правопис
- фразирање политике домена
- формулације приступачности

## Lightweight benchmark scoring

For repeatable AI-translation evaluation, use a lightweight 0-3 rubric instead of relying only on pass/fail judgment.

Recommended dimensions:

- meaning accuracy
- grammar and fluency
- terminology and domain fit
- register and style
- review effort

Recommended release labels:

- blocker
- major revision
- minor revision
- ready with review signoff

This creates scorecard-friendly data without requiring a heavyweight localization-measurement framework.

## Повезане странице

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
