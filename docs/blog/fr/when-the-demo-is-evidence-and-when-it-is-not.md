---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: fr
language_variants:
  - ../en/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../hr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../bs/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../mk/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sq/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../de/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../it/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../fr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../es/when-the-demo-is-evidence-and-when-it-is-not.md
title: Quand la démo est une preuve et quand elle ne l'est pas
summary: Comment utiliser les démos et prototypes comme preuves utiles d'implémentation sans les laisser devenir silencieusement la spécification produit.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
  - documentation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/style-guide/publishing/README.md
  - docs/style-guide/writing/README.md
  - docs/Development.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Quand la démo est une preuve et quand elle ne l'est pas

Une démo est puissante parce qu'elle transforme des idées abstraites en quelque chose auquel les gens peuvent réagir. Un flux qui semble raisonnable dans une note peut montrer immédiatement une vraie friction sur un téléphone ou dans un espace de stockage.

Voilà le bon côté de la démo. Le côté dangereux est que, dès qu'un prototype existe, les gens commencent souvent à traiter son comportement comme la vérité produit.

## Pourquoi les prototypes deviennent une autorité accidentelle

Les choses visibles sont persuasives. Un écran qui fonctionne obtient souvent plus d'autorité informelle qu'une règle écrite, même lorsqu'il a été construit seulement comme expérience.

Une démo peut montrer :

- une manière rapide de tester un flux
- un compromis temporaire
- une implémentation locale simplifiée
- une interprétation inachevée du produit visé

Rien de cela ne signifie automatiquement que la démo devrait redéfinir le produit.

## Quand la démo est une bonne preuve

La démo est utile lorsqu'elle aide à répondre à des questions comme :

- le flux est-il utilisable
- la mise en page mobile soutient-elle la vraie tâche
- le flux de scan est-il compréhensible
- comment les utilisateurs réagissent-ils à l'ordre des étapes

Alors, la démo est une preuve d'utilisabilité, de faisabilité et de communication.

## Quand la démo n'est pas l'autorité

La démo ne devrait pas surpasser silencieusement la spécification produit. Elle n'est pas la bonne autorité principale pour des questions comme :

- ce flux est-il officiellement dans le périmètre
- s'agit-il d'un raccourci temporaire ou d'un engagement produit
- ce comportement annule-t-il une règle existante
- la documentation publique doit-elle le décrire comme système cible

Ces questions demandent une décision explicite et une mise à jour de la documentation.

## La règle de Let Books est un bon modèle

Le dépôt définit déjà une règle saine : l'écriture publique doit utiliser spécifications et documentation comme preuve canonique, tandis que la démo ou le comportement de l'application peuvent être mentionnés comme statut d'implémentation.

Cela empêche les prototypes de devenir par accident un mécanisme de gouvernement du produit.

## Pourquoi cela compte encore plus avec l'IA

L'IA amplifie ce qui paraît le plus concret dans le contexte actuel. Si l'artefact le plus concret est une démo, assistants et humains copieront vite son comportement sans demander s'il respecte les limites du produit.

Les équipes ont donc besoin d'un ordre visible d'autorité :

1. spécification produit
2. directives d'implémentation
3. documentation de l'état actuel
4. démo ou prototype
5. tests et validation

## La leçon durable

La démo est précieuse parce qu'elle rend les idées produit testables. Elle devient dangereuse lorsqu'elle devient silencieusement politique. Le modèle sain est simple : que la démo informe le produit, mais que les spécifications et la documentation enregistrent la décision finale.

## Autres langues

- [English](../en/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
