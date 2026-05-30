---
article_id: spec-driven-development-in-let-books
canonical_language: fr
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Développement guidé par les spécifications dans Let Books
summary: Comment Let Books utilise deja spécification, directives d'implémentation, documentation, contraintes de démo et règles de vérification comme système de développement guidé par les spécifications.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-in-let-books.md
status: draft
---

# Développement guidé par les spécifications dans Let Books

Let Books constitue un cas d'étude utile du développement guidé par les spécifications, parce que le dépôt contient déjà plusieurs couches d'intention produit et pas seulement des artefacts d'implémentation.

Le projet n'est pas encore une application hébergée complète. Il comprend actuellement une spécification produit, des directives d'implémentation, une documentation publique et une démo statique locale. Cela en fait un bon exemple de la manière dont un projet peut rester cohérent avant même que la pile de production finale n'existe.

## La couche de spécification

`AGENTS.md` est la spécification centrale du produit. Elle définit le but du projet, le modèle de domaine, les flux de travail, les limites de périmètre, la direction de la localisation, la confidentialité, le caractère optionnel de l'IA et les critères d'acceptation.

Elle répond à des questions comme :

- pourquoi le projet existe
- quels flux de travail sont de premier ordre
- ce qui doit fonctionner sans IA
- quelles idées relèvent du futur et non d'engagements actuels
- ce qui compte comme une première démo réussie

C'est la différence entre une description générale et une vraie spécification. Une vraie spécification contraint les choix d'implémentation.

## La couche des directives tactiques

`AGENTS-Implementation.md` ajoute une deuxième couche. Elle ne remplace pas la spécification produit, mais explique comment le travail doit être mené aujourd'hui dans ce dépôt.

On y trouve des règles sur la dénomination publique, la documentation, le site statique, la localisation, la vérification et la politique de preuve pour l'écriture publique. C'est important, car toute règle n'est pas une vérité produit. Certaines sont tactiques, éditoriales ou spécifiques au dépôt.

## La couche de l'état actuel

`README.md` représente une troisième couche : une description honnête de l'état actuel.

Il explique ce qui existe aujourd'hui, ce qui n'existe pas encore, à quoi sert la démo statique et comment le site public est publié. Cela aide les contributeurs, les institutions et les relecteurs à ne pas confondre ambition et implémentation.

## La couche de documentation

`docs/` ajoute une quatrième couche. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` et les guides de style définissent la manière dont la connaissance doit être organisée, publiée et vérifiée.

Ici, le dépôt devient plus qu'un ensemble de fichiers. Il devient une plateforme de connaissance avec :

- une architecture documentaire
- des règles de preuve éditoriale
- une structure de publication multilingue
- des règles de publication et de vérification

## La couche de démo

La démo statique est importante, mais elle n'est volontairement pas la seule autorité. Les règles du blog et des sources distinguent déjà la documentation canonique du statut d'implémentation.

Cela signifie que la démo peut vérifier des flux de travail, révéler des problèmes d'utilisabilité et aider à expliquer le projet à des parties prenantes externes, sans devenir d'elle-même la vérité produit finale.

## La couche de vérification

Let Books documente déjà aussi une manière de penser la vérification. `docs/Development.md` et `docs/Deployment.md` décrivent les smoke tests de localisation, la validation de fichiers structurés, la génération de métadonnées, les fichiers requis, les vérifications orthographiques et la publication automatisée.

Ce ne sont pas de simples détails d'outillage. C'est la preuve que le projet traite la qualité comme un système répétable.

## La leçon principale

Le développement guidé par les spécifications ne signifie pas seulement écrire un long document avant de coder. En pratique, cela signifie construire une chaîne fiable entre l'intention produit, les règles tactiques, la documentation publique, la démo, la vérification et la publication.

Let Books montre qu'une telle chaîne peut exister avant même une application backend complète. C'est précisément l'un des avantages les plus forts du développement guidé par les spécifications dans un travail soutenu par l'IA.

## Autres langues

- [English](../en/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
