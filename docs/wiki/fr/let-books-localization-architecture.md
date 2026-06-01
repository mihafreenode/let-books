---
title: "Let Books Architecture de localisation"
summary: >-
  Cette page résume comment Let Books organise les documents multilingues, les chaînes d'interface utilisateur, les générateurs, la validation et la politique de contenu prenant en charge les scripts.
topics:
  - let-books
  - localization
  - engineering-systems
---
# Let Books Architecture de localisation

## Résumé

Cette page résume comment Let Books organise les documents multilingues, les chaînes d'interface utilisateur, les générateurs, la validation et la politique de contenu prenant en charge les scripts.

## Couches actuelles

- documents statiques multilingues sous `docs/`
- chaînes d'interface utilisateur de démonstration statique localisées sous `static-demo/locales/`
- générateurs d'articles, de wiki et d'apprentissage sous `tools/`
- scripts de validation et workflows en `tools/` et `.github/workflows/`

## Pages connexes

- `let-books-localization-case-study.md`
- `let-books-accessibility-and-localization.md`
- `../blog/en/localization-at-scale.md`
