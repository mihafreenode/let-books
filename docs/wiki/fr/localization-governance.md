---
title: "Gouvernance de la localisation"
summary: >-
  La gouvernance de la localisation définit qui peut proposer, relire, approuver et contester les modifications de contenu multilingue.
topics:
  - governance
  - localization
  - terminology
---
# Gouvernance de la localisation

## Résumé

La gouvernance de la localisation définit qui peut proposer, relire, approuver et contester les modifications de contenu multilingue.

## Domaines de gouvernance

- propriété de la source
- rôles des responsables de langue
- approbations terminologiques
- résolution des litiges
- suivi de l'état de revue
- suivi des exemples de revue réutilisables
- fraîcheur des artefacts de revue
- obligations de documentation des outils
- qualité de la revue en langue maternelle

## Pourquoi c'est important

Sans gouvernance, le contenu multilingue dérive en ton, en terminologie et en attentes de qualité.

La gouvernance de revue devrait aussi définir comment les exemples de correction assistés par l'AI sont stockés et réutilisés dans la formation, les scorecards et le travail d'évaluation.

## Fraîcheur des artefacts de revue

La gouvernance devrait exiger que les reviewers distinguent :

- le Markdown source
- le HTML généré
- la sortie du site déployé
- la sortie rendue dans le navigateur

Avant toute validation de parité, les reviewers devraient confirmer que les artefacts générés examinés ont été régénérés à partir de l'état actuel du dépôt.

## Gouvernance des outils

Les nouveaux générateurs, moteurs de rendu, transformateurs, validateurs, outils d'audit et autres outils de traitement de contenu devraient être traités comme des artefacts de gouvernance, pas seulement comme des détails d'implémentation.

Ils ne sont pas complets tant que :

- leur objectif et leurs limites ne sont pas documentés
- leurs règles et heuristiques non évidentes ne sont pas expliquées
- la documentation pertinente des workflows et de validation n'est pas mise à jour
- les mainteneurs ne peuvent pas interpréter les avertissements, les échecs et les angles morts sans reconstruire l'intention à partir du seul code

## Qualité de la revue en langue maternelle

La gouvernance de la localisation devrait exiger une revue non seulement pour la justesse, mais aussi pour l'expression naturelle dans la langue maternelle.

Le standard est qu'un document localisé doit se lire comme s'il avait été rédigé à l'origine dans la langue cible.

Cela signifie que les reviewers devraient considérer les points suivants comme des constats de qualité :

- structure de phrase anglaise littérale
- traduction directe d'idiomes anglais
- langage de gouvernance ou d'entreprise qui sonne traduit
- terminologie qui conserve inutilement la formulation source

La gouvernance devrait aussi prioriser cette revue en premier pour :

- le contenu nouvellement créé
- le contenu récemment étendu
- le contenu en cours d'édition

Le contenu localisé plus ancien devrait ensuite être amélioré progressivement au fil du temps plutôt qu'au moyen d'une réécriture unique à l'échelle du dépôt.

## Pages connexes

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
