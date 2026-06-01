---
title: "Обезбедување квалитет на преводот"
summary: >-
  Преводот QA комбинира автоматска валидација, проверка на правопис, преглед на терминологија, проверки на пристапност и човечко расудување.
topics:
  - translation-quality
  - qa
  - localization
---
# Обезбедување квалитет на преводот

## Резиме

Преводот QA комбинира автоматска валидација, проверка на правопис, преглед на терминологија, проверки на пристапност и човечко расудување.

## Вообичаени проверки

- недостасуваат преводи
- Протекување англиски јазик
- неусогласеност на местенка
- скршени врски
- речник лебдат
- Покриеност со текст за пристапност
- скриншот и паритет на дијаграмот

## Доказ за човечки преглед

Преводот QA исто така треба да зачува кратки записи за човечки прегледи за репрезентативни корекции со помош на AI.

Минимални полиња:

- оригинален текст
- поправен текст
- категорија на грешка
- хипотеза за основната причина
- образложението на рецензентот

Ова е важно затоа што дури и кога се зачува целокупното значење, преводите генерирани од AI може да бараат преглед од мајчин јазик за да се поправат суптилните проблеми во граматиката, модалитетот, терминологијата и регистарот специфични за доменот. Овие проблеми честопати е тешко да се откријат само преку автоматизирана метрика за квалитет.

## Вообичаена AI таксономија на грешки во преводот

- граматика
[[24]]]
- модалитет
- терминологија
- регистрирајте се
- флуентност
- буквален превод
- двосмисленост
- губење на контекстот
- редослед на зборови
- колокација
- писмо или правопис
[[34]]]
- Фразирање на домен-политика
- формулација за пристапност

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

## Поврзани страници

[[37]]]
- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
[[39]]]
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
[[41]]]
- `../learning/how-to-run-localization-qa-in-ci.md`
