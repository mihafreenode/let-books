---
title: "Directives D'Implémentation"
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Directives D'Implémentation

## Résumé

Les directives d'implémentation définissent comment une équipe doit livrer le travail dans le dépôt ou l'environnement de livraison actuel sans remplacer la spécification produit elle-même.

## Rôle

Les directives d'implémentation se situent sous la spécification produit.

Elles aident à répondre à des questions telles que :

- comment la dénomination publique doit fonctionner
- comment la documentation doit être structurée
- quelles attentes de vérification s'appliquent maintenant
- quelles règles propres au dépôt les contributeurs doivent suivre
- où les règles tactiques doivent vivre à mesure que le projet évolue

## Différence avec la spécification produit

La spécification produit définit ce qu'est le produit et ce qu'il doit accomplir.

Les directives d'implémentation définissent comment les contributeurs doivent réaliser le travail dans le contexte de livraison actuel.

Cette distinction est utile, car chaque règle de dépôt n'est pas une vérité produit, et chaque vérité produit ne doit pas être enfouie dans des notes tactiques.

## Exemples courants

Les directives d'implémentation incluent souvent :

- des règles de nommage et de marque
- des règles d'implémentation de la documentation
- des contraintes de site statique ou de démo
- des attentes de vérification
- des règles d'édition ou de génération de code
- des politiques de preuve pour les écrits publics

Ces règles fonctionnent souvent bien en Markdown parce qu'elles doivent rester révisables, faciles à mettre à jour et proches du reste du contexte du dépôt.

## Pourquoi c'est important dans le travail assisté par l'IA

Les assistants IA suivent souvent l'instruction concrète la plus proche. Si les règles propres au dépôt restent implicites, la sortie devient vite incohérente.

Les directives d'implémentation rendent ces règles visibles sans encombrer la spécification produit de détails tactiques.

En pratique, cela signifie qu'un fichier de guidance en Markdown peut faire deux choses à la fois :

- expliquer le flux de travail à un contributeur humain
- orienter un agent IA vers les outils, la séquence et les contraintes préférés

## Contexte Let Books

Dans Let Books, `AGENTS-Implementation.md` est la couche de guidance tactique.

Il couvre des domaines tels que :

- la dénomination publique
- les règles de documentation
- la séparation entre site public et documentation
- les règles de métadonnées et de SEO pour les pages statiques
- les contraintes des démos statiques
- les règles de localisation et d'accessibilité
- les règles de vérification
- la politique de preuve du blog

Cela en fait le compagnon opérationnel de `AGENTS.md`, et non son remplaçant.

## Pages Associées

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../learning/how-to-turn-a-product-spec-into-an-implementation-plan.md`
