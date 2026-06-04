---
title: "Gouvernance de la localisation"
summary: >-
  La gouvernance de la localisation définit qui peut proposer, réviser, approuver et contester les modifications de contenu multilingue.
topics:
  - governance
  - localization
  - terminology
---
# Gouvernance de la localisation

## Résumé

La gouvernance de la localisation définit qui peut proposer, réviser, approuver et contester les modifications de contenu multilingue.

## Domaines de gouvernance

- propriété des sources
- rôles de responsable de la langue
- approbations terminologiques
- résolution des litiges
- suivi de l'état de révision
- suivi des exemples de révision réutilisables
- fraîcheur des artefacts de revue
- obligations de documentation des outils

## Pourquoi c'est important

Sans gouvernance, le contenu multilingue dérive en termes de ton, de terminologie et d’attentes en matière de qualité.

La gouvernance des examens doit également définir la manière dont les exemples de correction assistée par AI sont stockés et réutilisés dans les formations, les cartes de pointage et les travaux d'évaluation.

## Fraîcheur des artefacts de revue

La gouvernance doit exiger que les relecteurs distinguent :

- le Markdown source
- le HTML généré
- la sortie du site déployé
- la sortie rendue dans le navigateur

Avant la validation de parité, les relecteurs doivent confirmer que les artefacts générés qu'ils examinent ont été régénérés à partir de l'état actuel du dépôt.

## Gouvernance des outils

Les nouveaux générateurs, moteurs de rendu, transformateurs, validateurs, outils d'audit et autres outils de traitement de contenu doivent être traités comme des artefacts de gouvernance, et non comme de simples détails d'implémentation.

Ils ne sont pas complets tant que :

- leur finalité et leurs limites ne sont pas documentées
- leurs règles et heuristiques non évidentes ne sont pas expliquées
- la documentation pertinente des workflows et de la validation n'est pas mise à jour
- les mainteneurs ne peuvent pas interpréter les avertissements, les échecs et les angles morts sans reconstruire l'intention à partir du seul code

## Pages connexes

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
