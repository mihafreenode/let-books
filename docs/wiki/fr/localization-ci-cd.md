---
title: "Localisation CI et CD"
summary: >-
  La localisation CI/CD valide en permanence le contenu multilingue afin que les ressources manquantes, les liens rompus et les régressions en matière d'accessibilité soient détectés rapidement.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Localisation CI et CD

## Résumé

La localisation CI/CD valide en permanence le contenu multilingue afin que les ressources manquantes, les liens rompus et les régressions en matière d'accessibilité soient détectés rapidement.

## Chèques souhaités

- cohérence de l'inventaire local
- validation du lien
- génération d'articles et de pages
- vérification orthographique si disponible
- parité d'espace réservé
- tests de fumée d'accessibilité
- vérifications de la couverture des captures d'écran et des diagrammes

## Progression des classes de défauts

L'IC de localisation doit suivre à la fois :

- `Localization Debt`
- `Open Defect Classes`

La dette mesure le travail restant sur le contenu source.

Les classes de défauts ouverts mesurent si le système peut encore permettre à une catégorie de problèmes de réapparaître.

Dès qu'une classe de défaut atteint zéro occurrence, son validateur doit passer du statut consultatif au blocage lorsque cela est possible.

Exemples :

- publication de brouillon d'espace réservé
- résumés non traduits
- métadonnées non traduites
- corps non traduits
- édition en langues mixtes

CI n’est pas seulement un gardien. C’est le mécanisme qui empêche les classes de défauts fermées de rouvrir silencieusement.

## Ordre de génération pour la navigation dans les articles

Le contrat actuel de navigation dans les articles publics est :

- `post-article-nav`
- `related-content`
- `related-topic-nav`

La génération et la validation doivent avoir lieu dans cet ordre :

1. générer l'article HTML
2. générer des pages d'index
3. exécutez tout post-traitement de navigation restant uniquement s'il est toujours nécessaire
4. valider la sortie

Si un validateur attend toujours le bloc `topic-nav` hérité, mettez à jour le validateur avec le contrat actuel au lieu d'appliquer les correctifs générés HTML.

## Pages connexes

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/fr/how-to-run-localization-qa-in-ci.md`