---
title: "Localisation CI et CD"
summary: >-
  La CI/CD de localisation valide en continu le contenu multilingue afin que les ressources manquantes, les liens rompus et les régressions d'accessibilité soient détectés tôt.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Localisation CI et CD

## Résumé

La CI/CD de localisation valide en continu le contenu multilingue afin que les ressources manquantes, les liens rompus et les régressions d'accessibilité soient détectés tôt.

## Vérifications souhaitées

- cohérence de l'inventaire des locales
- régénération fraîche du site avant la revue de parité
- validation des liens
- génération des articles et des pages
- vérification orthographique lorsque disponible
- parité des espaces réservés
- tests rapides d'accessibilité
- vérifications de couverture des captures d'écran et des diagrammes

## Règle de génération fraîche

Les workflows de CI et de revue de localisation ne doivent pas fonder les constats de parité sur des artefacts générés périmés.

Séquence requise :

1. générez le site à partir de l'état actuel du dépôt
2. exécutez les validateurs sur la sortie fraîchement générée
3. inspectez le HTML généré si nécessaire
4. inspectez la sortie rendue si nécessaire

Cette règle est importante parce que le Markdown source, le HTML généré, la sortie déployée et le comportement rendu dans le navigateur peuvent temporairement diverger pendant le développement.

## Priorité de revue

Appliquez d'abord la revue de parité et la revue en langue maternelle les plus strictes à :

- un contenu nouvellement créé
- un contenu récemment étendu
- un contenu en cours de modification

Étendez ensuite progressivement les mêmes standards de revue aux contenus localisés plus anciens.

## Progression des classes de défauts

La CI de localisation doit suivre les deux :

- `Localization Debt`
- `Open Defect Classes`

La dette mesure le travail restant sur le contenu source.

Les classes de défauts ouvertes mesurent si le système peut encore laisser réapparaître une catégorie de problème.

Dès qu'une classe de défauts atteint zéro occurrence, son validateur devrait passer d'un rôle consultatif à bloquant lorsque c'est praticable.

Exemples :

- publication de brouillons avec espaces réservés
- résumés non traduits
- métadonnées non traduites
- corps de texte non traduits
- publication en langue mixte

La CI n'est pas seulement un gardien. C'est le mécanisme qui empêche les classes de défauts closes de se rouvrir silencieusement.

## Ordre de génération pour la navigation dans les articles

Le contrat actuel de navigation publique des articles est :

- `post-article-nav`
- `related-content`
- `related-topic-nav`

La génération et la validation doivent se faire dans cet ordre :

1. générez le HTML des articles
2. générez les pages d'index
3. exécutez tout post-traitement de navigation restant uniquement s'il est encore nécessaire
4. validez la sortie fraîchement générée
5. examinez le HTML généré ou la sortie rendue si le workflow exige une évaluation humaine de la parité

Si un validateur attend encore le bloc hérité `topic-nav`, mettez à jour le validateur vers le contrat actuel au lieu de corriger le HTML généré.

## Pages connexes

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/fr/how-to-run-localization-qa-in-ci.md`
