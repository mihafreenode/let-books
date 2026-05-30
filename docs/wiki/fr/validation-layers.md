---
title: "Couches de validation"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Couches de validation

## Résumé

Les couches de validation sont les différentes façons dont un projet vérifie si l'implémentation, la documentation et les artefacts de livraison correspondent encore aux règles visées et aux attentes de qualité.

## Pourquoi les couches comptent

Aucune méthode unique de validation ne suffit.

- la documentation seule n'impose pas le comportement
- les tests seuls peuvent valider de mauvaises hypothèses
- la CI seule ne peut pas définir les règles qu'elle est censée faire respecter

Une approche en couches est plus forte, car chaque couche attrape une classe différente de dérive.

## Couches de validation courantes

### 1. Spécification et directives

La première couche définit la règle.

Sans cette couche, les vérifications suivantes peuvent être strictes mais arbitraires.

### 2. Revue manuelle

La revue humaine vérifie l'intention, les cas limites et le sens produit qui ne sont pas encore automatisés.

### 3. Validation locale

Des scripts et contrôles structurés capturent les problèmes rapides et répétables avant que les changements n'arrivent dans la CI.

### 4. Tests

Les tests exécutables vérifient le comportement attendu, mais seulement lorsqu'ils sont alignés sur la spécification.

### 5. Portes CI

La CI rend les contrôles répétables et visibles entre contributeurs et environnements.

### 6. Vérifications de déploiement

Les workflows de déploiement confirment que les artefacts construits restent publiables et structurellement sains.

## Comment les couches doivent se relier

Les couches doivent se renforcer dans cet ordre :

- les documents et spécifications définissent les attentes
- la revue interprète ces attentes dans leur contexte
- les scripts de validation et les tests automatisent les parties stables de la revue
- la CI exécute ces contrôles de manière cohérente
- le déploiement garantit que la sortie peut réellement être livrée

## Bonnes cibles de validation précoce

Parmi les bons candidats précoces :

- présence des fichiers requis
- complétude de la localisation
- validité syntaxique
- liens internes cassés
- citations éditoriales interdites
- génération de métadonnées réussie

Ces contrôles ont tendance à être objectifs et peu coûteux.

## Contexte Let Books

Le dépôt Let Books documente déjà plusieurs couches, notamment :

- les règles produit et d'implémentation dans `AGENTS.md` et `AGENTS-Implementation.md`
- la validation de développement et de déploiement dans `docs/Development.md` et `docs/Deployment.md`
- les règles éditoriales de preuve dans `docs/blog/README.md` et `docs/sources/README.md`

Cela fait de la validation un système documenté plutôt qu'une simple aspiration future.

## Pages Associées

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../learning/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../blog/en/documentation-is-part-of-the-product.md`
