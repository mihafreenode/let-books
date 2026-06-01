---
title: "Matrica jezičke podrške"
summary: >-
  Matrica jezičke podrške beleži opseg lokalizacije, pravila pisma, pravopisne beleške i pregled očekivanja za podržane Let Books jezike.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Matrica jezičke podrške

## Rezime

Matrica jezičke podrške beleži opseg lokalizacije, pravila pisma, pravopisne beleške i pregled očekivanja za podržane Let Books jezike.

## Trenutni podržani lokaliteti

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | slovenački | latinica | sačuvati `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | Srpska latinica | latinica | odvojeni lokalitet, bez automatske konverzije |
| `sr-Cyrl` | srpska ćirilica | ćirilica | odvojeni lokal, pregled specifičan za skriptu |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | Albanski | latinica | sačuvati `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Pravila

- Nikad ne pretpostavljajte da su latinica i ćirilica zamenljive.
- Očuvajte Unicode vernost u dokumentima, izvozima, snimcima ekrana i metapodacima.
- Pratite zrelost i status recenzenta prema lokalitetu.

## Povezane stranice

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
