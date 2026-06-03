---
article_id: multilingual-accessibility
canonical_language: en
language_variants:
  - ../en/multilingual-accessibility.md
  - ../sl/multilingual-accessibility.md
  - ../hr/multilingual-accessibility.md
  - ../bs/multilingual-accessibility.md
  - ../sr-Latn/multilingual-accessibility.md
  - ../sr-Cyrl/multilingual-accessibility.md
  - ../mk/multilingual-accessibility.md
  - ../sq/multilingual-accessibility.md
  - ../de/multilingual-accessibility.md
  - ../it/multilingual-accessibility.md
  - ../fr/multilingual-accessibility.md
  - ../es/multilingual-accessibility.md
title: Вишејезична приступачност
summary: Зашто приступачност и локализацију треба пројектовати заједно кроз језичке метаподатке, читаче екрана, једноставан језик, титлове и alt текст.
topics:
  - accessibility
  - localization
  - multilingual-ux
evidence:
  - AGENTS.md
  - docs/style-guide/localization/README.md
  - docs/localization-at-scale-program.md
sources:
  - ../../sources/sr-Cyrl/multilingual-accessibility.md
status: draft
---

# Вишејезична приступачност

Приступачност и локализација често се третирају као одвојени токови рада. У пракси се стално преклапају.

Ако је страница преведена, али `lang` метаподаци, alt текст, титлови или ознаке за читаче екрана остану на другом језику, искуство није потпуно приступачно.

## Шта укључује вишејезична приступачност

То укључује више од преведених низова корисничког интерфејса.

- исправне језичке метаподатке
- локализоване ознаке образаца и поруке валидације
- локализовани alt текст и титлове
- једноставан језик где је потребан
- исправан приказ писма
- тестирање са помоћним технологијама кроз језике

## Зашто је то важно за мање језике

Мањи језици често први изгубе углађеност приступачности. То ствара другоразредно искуство управо за кориснике који се можда већ суочавају са већим језичким препрекама.

## Контекст Let Booksa

Let Books већ третира локализовани ARIA текст, alt текст, статусне поруке и исправност писма као захтеве производа. То је прави смер јер су метаподаци приступачности део значења интерфејса.

## Трајна порука

Вишејезични производ није приступачан по подразумеваним поставкама, а приступачан производ није вишејезичан по подразумеваним поставкама. Добри системи пројектују обоје заједно.

## Повезане странице

- `../../wiki/multilingual-accessibility.md`
- `../../wiki/unicode-and-script-correctness.md`
- `../../learning/how-to-localize-accessibility-content.md`

## Други језици

- [English](../sr-Cyrl/multilingual-accessibility.md)
- [Slovenščina](../sl/multilingual-accessibility.md)
- [Hrvatski](../hr/multilingual-accessibility.md)
- [Bosanski](../bs/multilingual-accessibility.md)
- [Srpski (latinica)](../sr-Latn/multilingual-accessibility.md)
- [Македонски](../mk/multilingual-accessibility.md)
- [Shqip](../sq/multilingual-accessibility.md)
- [Deutsch](../de/multilingual-accessibility.md)
- [Italiano](../it/multilingual-accessibility.md)
- [Français](../fr/multilingual-accessibility.md)
- [Español](../es/multilingual-accessibility.md)
