---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: en
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

Voilà le bon côté des démos.

Le côté dangereux est que, dès qu'un prototype existe, les gens commencent souvent à traiter son comportement comme la vérité du produit, qu'une telle décision ait été officiellement prise ou non.

## Pourquoi les prototypes deviennent une autorité accidentelle

Les choses visibles sont persuasives. Un écran qui fonctionne porte souvent plus d'autorité informelle qu'une règle écrite, même lorsqu'il a été construit comme expérience.

C'est compréhensible. Les gens font confiance à ce qu'ils peuvent voir.

Mais dans le travail produit, en particulier dans le travail produit assisté par l'IA, cet instinct peut créer de la confusion.

Une démo peut montrer :

- une manière rapide de tester un flux
- un compromis temporaire
- une implémentation locale simplifiée
- une interprétation inachevée du produit visé

Rien de cela ne signifie automatiquement que la démo devrait redéfinir le produit.

## Quand la démo est une bonne preuve

Une démo est une preuve précieuse lorsqu'elle aide à répondre à des questions comme :

- Le flux semble-t-il utilisable ?
- La mise en page mobile soutient-elle la vraie tâche ?
- Le flux de scan ou de saisie est-il compréhensible ?
- Les utilisateurs réagissent-ils positivement ou négativement à l'ordre des étapes ?

Dans ces cas, la démo est une preuve d'utilisabilité, de faisabilité, de séquencement et de communication.

Ce type de preuve est extrêmement utile.

## Quand la démo n'est pas l'autorité

La démo ne devrait pas silencieusement dépasser la spécification produit.

Ce n'est pas la bonne autorité principale pour des questions telles que :

- ce flux est-il officiellement dans le périmètre
- s'agit-il d'un raccourci temporaire ou d'un engagement produit
- ce comportement annule-t-il une règle existante
- la documentation publique doit-elle le décrire comme système cible

Ces questions demandent une décision explicite et une mise à jour de la documentation.

## La règle de Let Books est un bon modèle

Le dépôt contient déjà une règle éditoriale saine pour cela. L'écriture publique devrait traiter les spécifications et la documentation comme preuve canonique, tandis que la démo ou le comportement de l'application peuvent être mentionnés comme statut d'implémentation.

Cette règle importe parce qu'elle empêche une gouvernance accidentelle par prototype.

Si la démo statique révèle un meilleur flux pour les boîtes, un meilleur flux mobile ou une meilleure interaction de saisie, c'est précieux. Mais ce meilleur flux ne devrait devenir une véritable autorité qu'après la mise à jour de la spécification et de la documentation associée.

## Pourquoi cela compte encore plus avec l'IA

L'IA amplifie ce qui paraît le plus concret dans le contexte actuel.

Si la chose la plus concrète dans le dépôt est une démo, les assistants et même les contributeurs humains peuvent copier son comportement sans demander s'il correspond à la frontière produit voulue.

Cela peut être utile lorsque la démo est déjà alignée.
Cela peut aussi diffuser rapidement des hypothèses temporaires lorsqu'elle ne l'est pas.

Voilà pourquoi les équipes ont besoin d'un ordre d'autorité visible.

## Une chaîne d'autorité pratique

Pour un travail de ce type, un ordre utile est :

1. spécification produit
2. directives d'implémentation
3. documentation de l'état actuel
4. démo ou prototype
5. tests et validation

La démo reste importante. Elle compte simplement à l'intérieur d'un système documenté au lieu d'en remplacer un.

## Que faire quand la démo vous apprend quelque chose de nouveau

Parfois, le prototype a raison et la spécification est erronée, incomplète ou trop abstraite.

Ce n'est pas un échec. C'est précisément l'une des raisons de construire des démos.

La bonne réponse est :

1. consigner la découverte
2. décider si le nouveau comportement doit devenir intentionnel
3. mettre à jour la spécification et la documentation
4. puis préserver l'alignement pour la suite

La mauvaise réponse consiste à laisser la documentation inchangée et à espérer que tout le monde se souvienne que la démo est maintenant la véritable source de vérité.

## Pourquoi cela devrait intéresser les institutions et les étudiants

Les institutions doivent savoir si elles évaluent un concept, un prototype ou un modèle de flux de travail approuvé.

Les étudiants doivent apprendre que les prototypes ne se justifient pas eux-mêmes. Une bonne pratique logicielle consiste aussi à comprendre quand traiter l'implémentation comme une preuve et quand la traiter comme une expérience en attente de décision.

## La leçon durable

Les démos sont précieuses parce qu'elles rendent les idées produit testables. Elles deviennent dangereuses lorsqu'elles deviennent silencieusement politiques.

Le modèle le plus sain est simple : laisser les démos informer le produit, mais faire en sorte que les spécifications et la documentation enregistrent la décision finale.

## Autres langues

- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
