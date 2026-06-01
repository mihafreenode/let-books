---
title: "Matrice di supporto linguistico"
summary: >-
  La matrice di supporto della lingua registra l'ambito locale, le regole di scrittura, le note ortografiche e le aspettative di revisione per le lingue Let Books supportate.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Matrice di supporto linguistico

## Riepilogo

La matrice di supporto della lingua registra l'ambito locale, le regole di scrittura, le note ortografiche e le aspettative di revisione per le lingue Let Books supportate.

## Località attualmente supportate

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | Sloveno | latino | preservare `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | Latino serbo | latino | locale separato, nessuna conversione automatica |
| `sr-Cyrl` | Cirillico serbo | Cirillico | locale separato, revisione specifica dello script |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | Albanese | latino | preservare `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Regole

- Non dare mai per scontato che il latino e il cirillico siano intercambiabili.
- Preserva la fedeltà Unicode tra documenti, esportazioni, screenshot e metadati.
- Tieni traccia della maturità e dello stato del revisore in base alla località.

## Pagine correlate

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
