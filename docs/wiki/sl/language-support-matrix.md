---
title: "Matrika jezikovne podpore"
summary: >-
  Matrika jezikovne podpore beleži obseg področne nastavitve, skriptna pravila, ortografske opombe in pričakovanja pregleda za podprte jezike Let Books.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Matrika jezikovne podpore

## Povzetek

Matrika jezikovne podpore beleži obseg področne nastavitve, skriptna pravila, ortografske opombe in pričakovanja pregleda za podprte jezike Let Books.

## Trenutne podprte lokalne nastavitve

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | slovenski | latinica | ohrani `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | srbska latinica | latinica | ločeno področje, brez samodejne pretvorbe |
| `sr-Cyrl` | srbska cirilica | cirilica | ločeno področje, pregled, specifičen za skript |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | albanski | latinica | ohrani `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Pravila

- Nikoli ne domnevajte, da sta latinica in cirilica zamenljivi.
- Ohranite zvestobo Unicode v dokumentih, izvozih, posnetkih zaslona in metapodatkih.
- Sledite zrelosti in statusu recenzenta glede na jezik.

## Sorodne strani

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
