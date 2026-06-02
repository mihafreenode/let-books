---
title: "Comment garder la spécification, la documentation, la démo et le code alignés"
summary: >-
  Ce guide décrit un flux de travail pratique pour garder alignés dans le temps la spécification produit, la documentation, le comportement de la démo et le travail d’implémentation.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Comment garder la spécification, la documentation, la démo et le code alignés

## Résumé

Ce guide décrit un flux de travail pratique pour garder alignés dans le temps la spécification produit, la documentation, le comportement de la démo et le travail d’implémentation.

## Le problème central

La dérive produit commence rarement par une erreur spectaculaire. Elle commence généralement par de petits désalignements.

Exemples :

- la démo ajoute un nouveau flux de travail mais la spécification n’est jamais mise à jour
- la documentation décrit une fonctionnalité qui ne se comporte plus ainsi
- le code implémente un raccourci pratique qui viole une règle produit
- les contrôles de validation n’appliquent que la syntaxe, pas l’intention produit

L’IA peut accélérer tout cela si le flux d’alignement est faible.

## Le modèle d’alignement

Utilisez cet ordre d’autorité :

1. spécification produit
2. consignes d’implémentation
3. documentation de l’état actuel
4. comportement de la démo ou de l’application
5. tests et règles de validation

Les couches inférieures doivent soutenir les couches supérieures. Si elles entrent en conflit, mettez la chaîne à jour intentionnellement au lieu de laisser l’artefact le plus visible l’emporter par défaut.

## Flux de travail recommandé

### 1. Commencer par le changement dans la spécification

Si un flux de travail visible par l’utilisateur ou une règle produit change, mettez d’abord à jour la spécification ou les consignes concernées.

Utilisez :

- `AGENTS.md` pour les règles et flux de travail au niveau produit
- `AGENTS-Implementation.md` pour les règles tactiques du dépôt et de la livraison

### 2. Mettre à jour la documentation de l’état actuel

Si le changement affecte ce qui existe maintenant, mettez à jour la documentation qui décrit l’état actuel.

Exemples typiques :

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- nouveau contenu ou contenu révisé dans learning/wiki/blog lorsque c’est pertinent

### 3. Mettre à jour la démo ou l’implémentation

Ce n’est qu’une fois l’intention claire que la démo ou l’application doit être modifiée.

Cela aide à éviter le schéma courant dans lequel un prototype devient silencieusement la source de vérité.

### 4. Ajouter ou mettre à jour la validation

Demandez ensuite ce qui peut être vérifié automatiquement.

Exemples :

- exhaustivité des clés de localisation
- présence des fichiers requis
- génération de métadonnées
- validation des liens
- tests spécifiques à un flux de travail

Toutes les règles ne peuvent pas être automatisées immédiatement, mais les règles importantes ne devraient pas dépendre uniquement de la mémoire.

### 5. Relire par rapport à la spécification, pas seulement au résultat

Lors de la revue des changements, ne vous arrêtez pas à :

- est-ce que cela s’exécute
- est-ce que cela a belle allure
- est-ce que les tests passent

Demandez aussi :

- est-ce que cela correspond au flux de travail documenté
- est-ce que cela préserve la frontière produit requise
- est-ce que la documentation et la présentation de l’état actuel sont restées honnêtes

## Gérer les découvertes issues de la démo

Parfois, la démo apprend à l’équipe quelque chose de meilleur que la spécification d’origine.

C’est utile. La bonne réponse est :

1. documenter la découverte
2. décider si le changement de flux de travail est intentionnel
3. mettre à jour la spécification et la documentation
4. garder l’implémentation alignée sur la décision mise à jour

La mauvaise réponse est de laisser la démo gagner en silence parce qu’elle existe déjà.

## Gérer l’implémentation assistée par IA

Avec l’IA, ce flux de travail devient encore plus important, car les assistants optimisent souvent la plausibilité locale.

Une bonne boucle d’alignement est :

1. écrire ou mettre à jour la spécification
2. générer l’implémentation
3. comparer le résultat à la spécification
4. mettre à jour la documentation si le comportement actuel a changé
5. ajouter de la validation lorsque c’est pratique

## Exemple Let Books

Le dépôt contient déjà une chaîne d’alignement utile :

- `AGENTS.md` pour l’orientation produit
- `AGENTS-Implementation.md` pour les règles tactiques
- `README.md` pour la présentation de l’état actuel
- `docs/` pour les règles de connaissance et de publication
- documentation de développement et de déploiement pour les consignes de validation

Cette structure doit être utilisée intentionnellement chaque fois que de nouvelles fonctionnalités, de la documentation ou des explications publiques sont ajoutées.

## Liste de contrôle

Avant de fusionner un changement important, vérifiez :

1. La règle produit ou le flux de travail a-t-il été clairement documenté ?
2. La documentation de l’état actuel correspond-elle toujours à la réalité ?
3. La démo ou l’implémentation reflète-t-elle la règle prévue ?
4. Y a-t-il au moins un mécanisme de validation ou de revue qui protège le changement ?
5. Une nouvelle personne contributrice pourrait-elle comprendre la décision plus tard ?

## Lectures complémentaires

- `../spec-driven-content-program.md`
- `../wiki/fr/demo-spec-alignment.md`
- `../wiki/fr/spec-driven-development.md`
- `../blog/fr/spec-driven-development-in-let-books.md`
