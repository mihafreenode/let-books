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
- génération fraîche du site avant la revue de parité
- validation du lien
- génération d'articles et de pages
- vérification orthographique si disponible
- parité d'espace réservé
- tests de fumée d'accessibilité
- vérifications de la couverture des captures d'écran et des diagrammes

## Règle de génération fraîche

Les workflows de CI et de revue de localisation ne doivent pas fonder les constats de parité sur des artefacts générés obsolètes.

Séquence requise :

1. générer le site à partir de l'état actuel du dépôt
2. exécuter les validateurs sur la sortie fraîchement générée
3. si nécessaire, examiner le HTML généré
4. si nécessaire, examiner la sortie rendue

Cela importe parce que le Markdown source, le HTML généré, la sortie déployée et le comportement rendu dans le navigateur peuvent temporairement diverger pendant le développement.

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

1. générer le HTML de l'article
2. générer les pages d'index
3. exécuter tout post-traitement de navigation restant uniquement s'il est encore nécessaire
4. valider la sortie fraîchement générée
5. examiner le HTML généré ou la sortie rendue si le workflow exige une évaluation humaine de la parité

Si un validateur attend toujours le bloc `topic-nav` hérité, mettez à jour le validateur avec le contrat actuel au lieu d'appliquer les correctifs générés HTML.

## Pages connexes

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/fr/how-to-run-localization-qa-in-ci.md`
