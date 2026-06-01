---
title: "Matrica jezične podrške"
summary: >-
  Matrica jezične podrške bilježi opseg lokalizacije, pravila pisma, ortografske bilješke i očekivanja pregleda za podržane Let Books jezike.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Matrica jezične podrške

## Sažetak

Matrica jezične podrške bilježi opseg lokalizacije, pravila pisma, ortografske bilješke i očekivanja pregleda za podržane Let Books jezike.

## Trenutno podržane lokalne postavke

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | slovenski | latinica | sačuvati `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | srpska latinica | latinica | odvojeni jezik, bez automatske konverzije |
| `sr-Cyrl` | srpska ćirilica | ćirilica | odvojeni jezik, pregled specifičan za skriptu |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | albanski | latinica | sačuvati `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Pravila

- Nikad ne pretpostavljajte da su latinica i ćirilica međusobno zamjenjive.
- Očuvajte Unicode vjernost u dokumentima, izvozima, snimkama zaslona i metapodacima.
- Pratite zrelost i status recenzenta po lokalitetu.

## Povezane stranice

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
