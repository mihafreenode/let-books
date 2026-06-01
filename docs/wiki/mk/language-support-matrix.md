---
title: "Јазична поддршка матрица"
summary: >-
  Матрицата за поддршка на јазикот го запишува опсегот на локацијата, правилата за скрипти, белешките за правопис и очекувањата за прегледување за поддржаните јазици Let Books.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Јазична поддршка матрица

## Резиме

Матрицата за поддршка на јазикот го запишува опсегот на локацијата, правилата за скрипти, белешките за правопис и очекувањата за прегледување за поддржаните јазици Let Books.

## Тековни поддржани локации

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | Словенечки | Латински | зачувај `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | српски латински | Латински | посебна локација, без автоматска конверзија |
| `sr-Cyrl` | Српска кирилица | кирилица | посебна локација, преглед специфичен за скрипта |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | Албански | Латински | зачувај `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Правила

- Никогаш не претпоставувајте дека латиницата и кирилицата се заменливи.
- Зачувајте ја верноста Unicode низ документи, извоз, слики од екранот и метаподатоци.
- Следете ја зрелоста и статусот на рецензентот по локација.

## Поврзани страници

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
