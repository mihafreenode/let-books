---
title: "Matrica jezičke podrške"
summary: >-
  Matrica jezičke podrške bilježi opseg lokalizacije, pravila pisma, pravopisne napomene i pregled očekivanja za podržane Let Books jezike.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Matrica jezičke podrške

## Rezime

Matrica jezičke podrške bilježi opseg lokalizacije, pravila pisma, pravopisne napomene i pregled očekivanja za podržane Let Books jezike.

## Trenutne podržane lokacije

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | slovenski | Latinica | sačuvati `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | Srpska latinica | Latinica | odvojena lokacija, bez automatske konverzije |
| `sr-Cyrl` | srpska ćirilica | ćirilica | zaseban lokal, pregled specifičan za skriptu |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | albanski | Latinica | sačuvati `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Pravila

- Nikada nemojte pretpostaviti da su latinica i ćirilica zamjenjive.
- Očuvajte Unicode vjernost u dokumentima, izvozima, snimcima ekrana i metapodacima.
- Pratite zrelost i status recenzenta prema lokalitetu.

## Povezane stranice

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
