---
title: "Spécification du produit"
summary: >-
  Une spécification de produit définit à quoi sert un produit, ce qu'il doit faire, quelles limites il doit respecter et quels résultats comptent comme succès.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Spécification du produit

## Résumé

Une spécification de produit définit à quoi sert un produit, ce qu'il doit faire, quelles limites il doit respecter et quels résultats comptent comme succès.

## Rôle

La spécification du produit constitue la description pratique du plus haut niveau du comportement prévu du produit.

Il doit répondre à des questions telles que :

- pourquoi le produit existe
- à qui c'est
- quels flux de travail sont de première classe
- ce qui doit fonctionner même dans des conditions de panne
- ce qui est explicitement hors de portée
- quels critères d'acceptation définissent une démo ou une version significative

## Ce qui appartient à une spécification de produit

Le contenu typique d’une spécification comprend :

- objectif du produit
- philosophie de base
- modèle de domaine
- définitions de flux de travail
- les attentes en matière de confidentialité et de sécurité
- non-objectifs
- des conseils sur la séquence de mise en œuvre lorsque cela affecte la portée ou l'ordre de livraison
- critères d'acceptation

La spécification doit se concentrer sur la vérité du produit, et non sur tous les détails de mise en œuvre locale.

## Ce qui n'y appartient généralement pas

Ces éléments appartiennent souvent à ailleurs, à moins qu'ils n'affectent directement les engagements relatifs aux produits :

- conventions de dépôt temporaire
- configuration de l'outillage local
- décisions étroites de polissage de l'interface utilisateur
- conseils de débogage ponctuels
- des mécaniques éditoriales ou éditoriales qui ne changent pas le modèle du produit

## Pourquoi c'est important dans le travail assisté par l'IA

L’IA peut générer très rapidement une mise en œuvre plausible. Sans une spécification de produit claire, cette mise en œuvre peut être optimisée par commodité plutôt que par intention.

La spécification donne aux réviseurs et aux contributeurs une norme stable pour décider si le résultat généré appartient toujours au produit prévu.

## Let Books contexte

Aux Let Books, `AGENTS.md` est la spécification de base du produit.

Il définit :

- le but du projet
- modèle de domaine et de workflow
- direction multi-tenant et localisation
- flux de travail manuel et principes facultatifs de l'IA
- critères d'acceptation pour la première démo

Cela en fait plus qu’un aperçu. Il s'agit de la principale autorité produit dans le référentiel.

## Pages connexes

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/fr/how-to-write-a-spec-that-ai-can-follow.md`