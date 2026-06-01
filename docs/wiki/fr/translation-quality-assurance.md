---
title: "Assurance qualité des traductions"
summary: >-
  La traduction QA combine la validation automatisée, la vérification orthographique, la révision terminologique, les contrôles d'accessibilité et le jugement humain.
topics:
  - translation-quality
  - qa
  - localization
---
# Assurance qualité des traductions

## Résumé

La traduction QA combine la validation automatisée, la vérification orthographique, la révision terminologique, les contrôles d'accessibilité et le jugement humain.

## Contrôles communs

- traductions manquantes
- Fuite en anglais
- incompatibilités d'espace réservé
- liens brisés
- dérive du glossaire
- couverture du texte d'accessibilité
- capture d'écran et parité du diagramme

## Preuve d'examen humain

La traduction QA devrait également conserver de courts enregistrements de révision humaine pour les corrections représentatives assistées par AI.

Champs minimaux :

- texte original
- texte corrigé
- catégorie d'erreur
- hypothèse de cause profonde
- justification de l'examinateur

Cela est important car même lorsque le sens global est préservé, les traductions générées par AI peuvent nécessiter une révision par un locuteur natif pour corriger des problèmes subtils de grammaire, de modalité, de terminologie et de registre spécifique au domaine. Ces problèmes sont souvent difficiles à détecter uniquement grâce aux mesures de qualité automatisées.

## Taxonomie courante des erreurs de traduction AI

- grammaire
- modalité
- terminologie
- s'inscrire
- maîtrise
- traduction littérale
- ambiguïté
- perte de contexte
- l'ordre des mots
- colocalisation
- scénario ou orthographe
- formulation de la politique de domaine
- formulation d'accessibilité

## Lightweight benchmark scoring

For repeatable AI-translation evaluation, use a lightweight 0-3 rubric instead of relying only on pass/fail judgment.

Recommended dimensions:

- meaning accuracy
- grammar and fluency
- terminology and domain fit
- register and style
- review effort

Recommended release labels:

- blocker
- major revision
- minor revision
- ready with review signoff

This creates scorecard-friendly data without requiring a heavyweight localization-measurement framework.

## Pages connexes

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
