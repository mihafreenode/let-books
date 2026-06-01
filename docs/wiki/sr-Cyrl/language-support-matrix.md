---
title: "Матрица језичке подршке"
summary: >-
  Матрица језичке подршке бележи опсег локализације, правила писма, правописне белешке и преглед очекивања за подржане Let Books језике.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Матрица језичке подршке

## Резиме

Матрица језичке подршке бележи опсег локализације, правила писма, правописне белешке и преглед очекивања за подржане Let Books језике.

## Тренутни подржани локалитети

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | словеначки | латиница | сачувати `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | Српска латиница | латиница | одвојени локалитет, без аутоматске конверзије |
| `sr-Cyrl` | српска ћирилица | ћирилица | одвојени локал, преглед специфичан за скрипту |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | Албански | латиница | сачувати `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Правила

- Никад не претпостављајте да су латиница и ћирилица заменљиве.
- Очувајте Unicode верност у документима, извозима, снимцима екрана и метаподацима.
- Пратите зрелост и статус рецензента према локалитету.

## Повезане странице

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
