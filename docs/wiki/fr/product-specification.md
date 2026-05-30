---
title: "Spécification produit"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Spécification produit

## Résumé

Une spécification produit définit à quoi sert un produit, ce qu'il doit faire, quelles limites il doit respecter et quels résultats comptent comme un succès.

## Rôle

La spécification produit est la description pratique la plus élevée du comportement produit attendu.

Elle doit répondre à des questions telles que :

- pourquoi le produit existe
- à qui il s'adresse
- quels flux de travail sont de première classe
- ce qui doit fonctionner même en cas de défaillance
- ce qui est explicitement hors périmètre
- quels critères d'acceptation définissent une démo ou une version significative

## Ce qui appartient à une spécification produit

Le contenu typique comprend :

- l'objectif du produit
- la philosophie de base
- le modèle de domaine
- les définitions de flux de travail
- les attentes de confidentialité et de sécurité
- les non-objectifs
- des indications sur la séquence d'implémentation lorsqu'elles influencent le périmètre ou l'ordre de livraison
- les critères d'acceptation

La spécification doit se concentrer sur la vérité produit, pas sur chaque détail local d'implémentation.

## Ce qui n'y appartient généralement pas

Ces éléments relèvent souvent d'un autre endroit, sauf s'ils affectent directement les engagements produit :

- conventions temporaires du dépôt
- configuration locale des outils
- décisions étroites de finition UI
- consignes ponctuelles de débogage
- mécanismes éditoriaux ou de publication qui ne changent pas le modèle produit

## Pourquoi c'est important dans le travail assisté par l'IA

L'IA peut générer très vite des implémentations plausibles. Sans spécification produit claire, cette implémentation peut optimiser la commodité plutôt que l'intention.

La spécification donne aux relecteurs et aux contributeurs un standard stable pour décider si le résultat généré appartient encore au produit visé.

## Contexte Let Books

Dans Let Books, `AGENTS.md` est la spécification produit centrale.

Il définit :

- le but du projet
- le modèle de domaine et de flux de travail
- l'orientation multi-tenant et localisation
- les principes du flux manuel et de l'IA optionnelle
- les critères d'acceptation pour la première démo

Cela en fait plus qu'une vue d'ensemble. C'est l'autorité produit principale du dépôt.

## Pages Associées

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../learning/how-to-write-a-spec-that-ai-can-follow.md`
