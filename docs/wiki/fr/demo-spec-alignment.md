---
title: "Alignement entre démo et spécification"
summary: >-
  L'alignement entre la démo et la spécification est la pratique qui consiste à garder le comportement du prototype ou de la démo cohérent avec l'intention produit documentée, tout en mettant explicitement à jour la spécification lorsqu'une démo révèle un meilleur flux de travail.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Alignement entre démo et spécification

## Résumé

L'alignement entre la démo et la spécification est la pratique qui consiste à garder le comportement du prototype ou de la démo cohérent avec l'intention produit documentée, tout en mettant explicitement à jour la spécification lorsqu'une démo révèle un meilleur flux de travail.

## Pourquoi c'est important

Les démos sont utiles parce qu'elles rendent les flux de travail concrets. Elles sont risquées parce qu'un comportement visible est souvent traité comme une vérité produit approuvée alors que la documentation de base n'a jamais été mise à jour.

## Ordre d'autorité recommandé

1. spécification produit
2. directives d'implémentation
3. documentation de l'état actuel
4. démo ou comportement de l'implémentation
5. validation et tests

Cet ordre ne signifie pas que les démos sont secondaires. Il signifie qu’il faut les interpréter dans un cadre de décision documenté.

## Usage sain des démos

Utilisez les démos pour :

- exposer des problèmes de flux de travail
- révéler des problèmes d'utilisabilité
- tester des hypothèses avec des utilisateurs
- soutenir l'explication auprès des parties prenantes

N'utilisez pas les démos comme substituts silencieux aux décisions produit.

## Quand la démo doit guider

Si la démo révèle un flux de travail clairement meilleur, l'équipe doit :

1. revoir le changement de manière intentionnelle
2. mettre à jour la spécification et la documentation pertinentes
3. ajuster les attentes de validation ou de revue

Autrement dit, la démo peut inspirer la décision suivante, mais la décision mise à jour doit quand même être documentée.

## Contexte Let Books

Le dépôt Let Books distingue déjà les preuves documentaires canoniques du statut d'implémentation pour les écrits publics. C’est un garde-fou utile, car il évite que des prototypes deviennent par accident une autorité éditoriale.

## Pages Associées

- `spec-driven-development.md`
- `../learning/how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../blog/en/spec-driven-development-in-let-books.md`
