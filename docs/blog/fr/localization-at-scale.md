---
article_id: localization-at-scale
canonical_language: en
language_variants:
  - ../en/localization-at-scale.md
  - ../sl/localization-at-scale.md
  - ../hr/localization-at-scale.md
  - ../bs/localization-at-scale.md
  - ../sr-Latn/localization-at-scale.md
  - ../sr-Cyrl/localization-at-scale.md
  - ../mk/localization-at-scale.md
  - ../sq/localization-at-scale.md
  - ../de/localization-at-scale.md
  - ../it/localization-at-scale.md
  - ../fr/localization-at-scale.md
  - ../es/localization-at-scale.md
title: La localisation à grande échelle
summary: Pourquoi la localisation doit être traitée comme un système d'ingénierie, d'accessibilité, de gouvernance et d'apprentissage, et non comme une tâche de traduction tardive.
topics:
  - localization
  - engineering-systems
  - governance
  - continuous-localization
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/fr/localization-at-scale.md
status: draft
---

# La localisation à grande échelle

De nombreux projets logiciels traitent encore la localisation comme le moment où un texte anglais terminé est transmis aux traducteurs. Pour un logiciel moderne d'intérêt public, ce modèle est trop étroit.

La localisation à grande échelle est un système. Elle inclut l'écriture source, la terminologie, les diagrammes, les textes d'accessibilité, les métadonnées linguistiques, les captures d'écran, la relecture, la QA, la CI, la gouvernance et la maintenance à long terme.

## L'échec le plus courant

L'erreur la plus fréquente consiste à attendre trop longtemps.

Quand un projet décide de prendre en charge plusieurs langues, l'architecture de l'information, la navigation, les captures d'écran et les hypothèses de test sont souvent déjà façonnées uniquement pour l'anglais. La traduction devient alors coûteuse, car le système n'a jamais été conçu pour porter correctement plusieurs langues.

## Pourquoi le problème dépasse la traduction

Un utilisateur multilingue ne lit pas seulement les libellés des boutons. Il rencontre aussi :

- la navigation
- la validation des formulaires
- les captures d'écran
- les diagrammes
- le texte alternatif
- les sous-titres
- les exemples pédagogiques
- le changement de langue dans les lecteurs d'écran

Si tout cela reste en anglais, le produit n'est pas réellement localisé.

## Pourquoi c'est important pour Let Books

Let Books est explicitement conçu pour des collections multilingues de livres éducatifs et académiques en Slovénie, dans les pays de l'ex-Yougoslavie et dans la région au sens large. Le projet cite déjà l'anglais, le slovène, le croate, le bosnien, le serbe latin, le serbe cyrillique, le macédonien, l'albanais, l'allemand, le français, l'italien et l'espagnol comme langues cibles.

Cela signifie que la localisation n'est pas une couche finale optionnelle. Elle fait partie de la définition du produit.

## Un modèle pratique

Un modèle pratique de localisation à grande échelle comporte généralement cinq couches.

1. écrire une source facile à traduire
2. définir la terminologie et la gouvernance
3. générer ou maintenir des variantes linguistiques structurées
4. vérifier les liens, les espaces réservés, Unicode et l'accessibilité
5. améliorer les traductions par étapes au lieu de prétendre qu'elles sont parfaites immédiatement

## Le rôle de l'IA

L'IA aide. Elle réduit le coût des premières ébauches, repère les dérives terminologiques et élargit la couverture documentaire. Mais elle ne supprime pas le besoin de relecture, de vérification de l'accessibilité et de jugement linguistique.

C'est pourquoi les systèmes de localisation matures sont de plus en plus assistés par l'IA, et non AI-only.

## Conclusion durable

Si un projet veut une participation multilingue, la localisation doit faire partie de la conception du système, et non d'une exportation tardive.

## Related Pages

- `../../wiki/localization-at-scale.md`
- `../../wiki/localization-maturity-model.md`
- `../../learning/how-to-build-a-localization-pipeline.md`

## Other Languages

- English (../en/localization-at-scale.md)
