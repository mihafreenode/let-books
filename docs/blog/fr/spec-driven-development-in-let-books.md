---
article_id: spec-driven-development-in-let-books
canonical_language: en
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

Des exemples incluent :

- des règles de dénomination publique
- des règles d'implémentation de la documentation
- des attentes sur les métadonnées du site statique
- les limites de la démo
- des attentes sur la localisation et la vérification
- une politique éditoriale de preuve pour l'écriture publique

Cela compte dans le travail assisté par l'IA, parce que toute règle n'appartient pas à la spécification produit de long terme. Certaines règles sont tactiques, éditoriales ou spécifiques au dépôt. Garder cette distinction claire réduit le bruit et empêche la spécification produit de devenir un dépôt de détails d'implémentation.

## La couche de l'état actuel

`README.md` représente une troisième couche : une description de l'état actuel.

Il explique ce qui existe aujourd'hui, ce qui n'existe pas encore, à quoi sert la démo statique et comment le site public est publié. C'est une partie essentielle de l'alignement, car les projets échouent souvent quand les lecteurs confondent ambition et implémentation.

Dans Let Books, le README distingue explicitement les livrables actuels des plans futurs. Cela aide contributeurs, institutions et relecteurs à comprendre la maturité du projet sans deviner.

## La couche de documentation

La zone `docs/` ajoute une quatrième couche. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, les guides de style et la zone `sources` définissent la manière dont la connaissance doit être organisée, validée et publiée.

Ici, le dépôt devient plus qu'un ensemble de fichiers. Il devient une plateforme de connaissance avec :

- une architecture documentaire
- des règles de preuve éditoriale
- une structure de publication multilingue
- des règles de publication de la documentation publique
- des directives de développement et de validation

C'est exactement le type d'ossature qui aide la livraison assistée par l'IA à rester traçable.

## La couche de démo

La démo statique est importante, mais elle n'est volontairement pas la seule autorité. Les règles du blog et des sources distinguent déjà la documentation canonique du statut d'implémentation.

Cela signifie que la démo peut vérifier des flux de travail, révéler des problèmes d'utilisabilité et aider à expliquer le projet à des parties prenantes externes, sans devenir d'elle-même la vérité produit finale.

C'est une règle mature. Sans elle, les prototypes deviennent souvent des mécanismes de gouvernance accidentels. Une équipe commence à copier le prototype parce qu'il existe, et non parce qu'il reflète une décision produit approuvée.

## La couche de vérification

Let Books documente déjà aussi une manière de penser la vérification.

`docs/Development.md` et `docs/Deployment.md` décrivent des couches de validation telles que :

- des smoke tests de localisation
- la validation de fichiers structurés
- la génération de métadonnées
- la vérification des fichiers requis
- la vérification orthographique optionnelle et le linting
- l'automatisation du déploiement

Ce ne sont pas de simples détails d'outillage. C'est la preuve que le projet traite la qualité comme un système répétable.

## Pourquoi cela compte pour la livraison assistée par l'IA

Si un assistant IA contribue à Let Books, il n'a pas besoin d'inventer le produit à partir de zéro. Le dépôt contient déjà une chaîne d'intention :

1. direction produit dans `AGENTS.md`
2. règles tactiques de livraison dans `AGENTS-Implementation.md`
3. état actuel dans `README.md`
4. règles de connaissance et de publication dans `docs/`
5. statut du prototype exécutable dans la démo statique
6. directives de validation et de publication dans la documentation de développement et de déploiement

Cette chaîne n'élimine pas les erreurs. Mais elle les rend plus faciles à détecter et à relire.

## La leçon principale

Le développement guidé par les spécifications ne signifie pas seulement écrire un long document d'exigences avant de commencer à coder.

En pratique, cela signifie construire une chaîne fiable entre :

- l'intention produit
- les règles tactiques
- la documentation publique
- les démos
- la validation
- la publication

Let Books montre déjà qu'une telle chaîne peut exister avant même que le produit backend complet n'existe.

C'est l'un des arguments les plus forts en faveur du développement guidé par les spécifications dans un travail assisté par l'IA : plus la chaîne d'intention est claire, moins il est probable qu'une sortie rapide devienne une confusion rapide.

## Autres langues

- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
