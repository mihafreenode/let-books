---
title: "Matrice de prise en charge linguistique"
summary: >-
  La matrice de prise en charge des langues enregistre la portée des paramètres régionaux, les règles de script, les notes orthographiques et les attentes en matière de révision pour les langues Let Books prises en charge.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Matrice de prise en charge linguistique

## Résumé

La matrice de prise en charge des langues enregistre la portée des paramètres régionaux, les règles de script, les notes orthographiques et les attentes en matière de révision pour les langues Let Books prises en charge.

## Paramètres régionaux actuellement pris en charge

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | Slovène | latin | préserver `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | Latin serbe | latin | paramètres régionaux séparés, pas de conversion automatique |
| `sr-Cyrl` | Cyrillique serbe | cyrillique | paramètres régionaux séparés, révision spécifique au script |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | albanais | latin | préserver `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Règles

- Ne présumez jamais que le latin et le cyrillique sont interchangeables.
- Préservez la fidélité Unicode dans les documents, les exportations, les captures d'écran et les métadonnées.
- Suivez la maturité et le statut des réviseurs par région.

## Pages connexes

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
