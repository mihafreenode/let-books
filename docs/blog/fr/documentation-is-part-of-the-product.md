---
article_id: documentation-is-part-of-the-product
canonical_language: en
language_variants:
  - ../en/documentation-is-part-of-the-product.md
  - ../sl/documentation-is-part-of-the-product.md
  - ../hr/documentation-is-part-of-the-product.md
  - ../bs/documentation-is-part-of-the-product.md
  - ../sr-Latn/documentation-is-part-of-the-product.md
  - ../sr-Cyrl/documentation-is-part-of-the-product.md
  - ../mk/documentation-is-part-of-the-product.md
  - ../sq/documentation-is-part-of-the-product.md
  - ../de/documentation-is-part-of-the-product.md
  - ../it/documentation-is-part-of-the-product.md
  - ../fr/documentation-is-part-of-the-product.md
  - ../es/documentation-is-part-of-the-product.md
title: La documentation fait partie du produit
summary: Pourquoi la documentation doit être traitée comme un actif opérationnel qui façonne l'implémentation, la revue, l'intégration et la confiance dans le produit, plutôt que comme un nettoyage après le code.
topics:
  - documentation
  - spec-driven-development
  - product-quality
  - ai-assisted-delivery
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/style-guide/writing/README.md
  - docs/style-guide/publishing/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/documentation-is-part-of-the-product.md
status: draft
---

# La documentation fait partie du produit

Beaucoup d'équipes parlent encore de la documentation comme si elle ne commençait qu'après le vrai travail. On construit d'abord le produit, puis quelqu'un écrit ce qui s'est passé. Ce modèle était déjà faible avant le développement assisté par l'IA. Avec l'IA, il devient un vrai risque.

Lorsque le code, le texte, les interfaces et les flux de travail peuvent être générés très vite, la documentation n'est plus seulement une couche tardive. Elle devient une partie du mécanisme qui garde le produit cohérent.

## Pourquoi cela compte encore plus aujourd'hui

L'IA peut générer une implémentation à partir d'une intention incomplète. Cela est souvent présenté comme une commodité. En pratique, cela signifie que chaque ambiguïté du projet devient un endroit où le produit peut dériver.

Si la documentation est faible ou dépassée, des personnes et des outils différents déduiront des produits différents à partir du même dépôt.

## La documentation remplit quatre fonctions produit

La documentation :

- porte l'intention
- fixe des attentes
- réduit le coût de coordination
- soutient la confiance

Elle indique aux contributeurs, aux institutions, aux relecteurs et aux assistants IA ce que le projet essaie d'accomplir et ce qu'il ne doit pas devenir.

## Let Books est déjà structuré ainsi

Dans le dépôt Let Books :

- `AGENTS.md` définit l'intention produit et les flux de travail
- `AGENTS-Implementation.md` définit des règles tactiques d'exécution
- `README.md` décrit honnêtement l'état actuel
- `docs/` définit les règles de publication, d'écriture, de localisation et de preuve

Cela signifie que la documentation ici n'est pas seulement une explication. Elle fait partie de la manière dont le projet fonctionne.

## Une documentation périmée est une dette produit

Une documentation périmée conduit à :

- de mauvaises hypothèses d'implémentation
- la répétition de décisions déjà prises
- des démos qui deviennent accidentellement la vérité produit
- une intégration plus lente de nouveaux contributeurs
- des revues plus difficiles parce que le standard n'est pas clair

Dans les flux soutenus par l'IA, cette dette s'accumule encore plus vite, parce que les assistants poursuivent très bien à partir d'hypothèses proches, même lorsqu'elles sont dépassées.

## Documentation et implémentation doivent former une chaîne

Le bon modèle n'est pas un schéma rigide « documentation d'abord, code ensuite ». Le bon modèle est une chaîne entretenue :

- les spécifications définissent l'intention
- les documents d'état actuel expliquent ce qui existe maintenant
- la démo et l'implémentation rendent le flux concret
- les tests et la validation vérifient les attentes
- la CI rend la dérive visible

Si un maillon change, ceux qui l'entourent doivent aussi être revus.

<!-- semantic-parity: broad-audiences -->
## Pourquoi un public plus large devrait aussi s'en soucier

Ce n'est pas seulement une question technique.

Les institutions devraient s'en soucier parce que la documentation influence la gouvernance, la confiance dans les achats, l'intégration, la continuité et l'auditabilité.

Les étudiants devraient s'en soucier parce que documenter l'intention fait partie de l'apprentissage de la construction de systèmes fiables, et non d'un supplément administratif.

Les lecteurs plus généraux devraient s'en soucier parce qu'un produit doté d'une documentation claire est généralement aussi un produit fondé sur des décisions plus claires.

<!-- semantic-parity: practical-test -->
## Le test pratique

Une question utile pour toute équipe est simple :

Si un nouveau contributeur ou un assistant IA entrait aujourd'hui dans le dépôt, les documents l'aideraient-ils à construire le produit voulu, ou surtout quelque chose qui paraît plausible ?

<!-- semantic-parity: documentation-as-product-distinction -->
Cette différence est la différence entre une documentation comme commentaire et une documentation comme partie du produit.

## La leçon durable

La documentation n'est pas séparée de la qualité du produit. Elle façonne l'implémentation, la revue, la communication, la validation et la confiance à long terme. Dans les projets soutenus par l'IA, la documentation fait partie du produit parce qu'elle fait partie du système qui empêche la dérive du produit.

## Autres langues

- [English](../en/documentation-is-part-of-the-product.md)
- [Shqip](../sq/documentation-is-part-of-the-product.md)
- [Deutsch](../de/documentation-is-part-of-the-product.md)
- [Italiano](../it/documentation-is-part-of-the-product.md)
- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
- [Hrvatski](../hr/documentation-is-part-of-the-product.md)
- [Bosanski](../bs/documentation-is-part-of-the-product.md)
- [Srpski (latinica)](../sr-Latn/documentation-is-part-of-the-product.md)
- [Српски (ћирилица)](../sr-Cyrl/documentation-is-part-of-the-product.md)
- [Македонски](../mk/documentation-is-part-of-the-product.md)
- [Español](../es/documentation-is-part-of-the-product.md)
