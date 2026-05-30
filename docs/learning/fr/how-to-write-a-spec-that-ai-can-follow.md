---
title: "Comment écrire une spécification que l'IA peut suivre"
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Comment écrire une spécification que l'IA peut suivre

## Résumé

Ce guide explique comment écrire une spécification de produit ou de fonctionnalité qui aide l'implémentation assistée par l'IA à rester alignée sur les objectifs réels du produit.

## Pourquoi c'est important

L'IA peut générer du code rapidement, mais elle fonctionne mieux lorsqu'elle a des limites claires. Si la spécification est vague, elle remplira souvent les trous avec des hypothèses génériques.

## Ce qu'une bonne spécification doit contenir

- le but de la fonctionnalité
- les limites du périmètre
- des règles non négociables
- le comportement en cas d'erreur et le chemin de repli
- les critères d'acceptation

## Ce qu'il faut éviter

- des objectifs vagues comme « améliorer l'UX »
- des détails d'implémentation sans but produit
- mélanger idées futures et exigences actuelles
- des hypothèses cachées sur l'utilisateur ou les données

## Modèle pratique

Utilisez cet ordre :

1. problème
2. utilisateur et contexte
3. flux dans le périmètre
4. éléments hors périmètre
5. règles requises
6. comportement de repli
7. critères d'acceptation
8. notes de vérification

## Contexte Let Books

`AGENTS.md`, `AGENTS-Implementation.md` et `README.md` montrent déjà comment une telle spécification en couches aide aussi les assistants IA.
