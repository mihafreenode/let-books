---
title: "Comment écrire une spécification que l’IA peut suivre"
summary: >-
  Ce guide explique comment écrire une spécification produit ou fonctionnalité qui aide une implémentation assistée par IA à rester alignée sur de vrais objectifs produit au lieu de dériver vers une sortie générique.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Comment écrire une spécification que l’IA peut suivre

## Résumé

Ce guide explique comment rédiger une spécification produit ou de fonctionnalité de façon à ce qu’une implémentation assistée par IA reste alignée sur les vrais objectifs du produit, au lieu de glisser vers un résultat générique.

## Pourquoi c’est important

L’IA peut générer du code rapidement, mais elle fonctionne mieux lorsque la tâche a des frontières claires.

Si une spécification est vague, l’IA comble souvent les trous avec des valeurs par défaut plausibles :

- des modèles d’architecture courants
- des flux d’interface génériques
- des abstractions inutiles
- des hypothèses inventées sur ce que le produit devrait faire

Le résultat peut sembler soigné tout en restant faux.

## Ce qu’une spécification utile orientée IA doit contenir

### 1. Finalité du produit

Indiquez pourquoi la fonctionnalité existe.

Mauvais :

> Ajouter un formulaire de livre.

Meilleur :

> Ajouter un formulaire de saisie rapide permettant à un donateur de cataloguer un exemplaire physique de livre en quelques secondes tout en se tenant près d’une étagère ou d’une boîte.

La finalité indique clairement à la personne qui implémente ce qu’il faut optimiser.

### 2. Limites de périmètre

Indiquez ce qui est dans le périmètre et ce qui est hors périmètre.

Exemple :

- dans le périmètre : photo de couverture, saisie d’ISBN, emplacement de stockage, enregistrer et continuer
- hors périmètre : OCR, synchronisation cloud, flux de revue institutionnelle

Cela empêche l’assistant de gonfler une petite tâche en mini-plateforme.

### 3. Comportement requis

Listez les règles non négociables.

Exemples de l’approche Let Books :

- le flux manuel doit fonctionner sans IA
- les données incomplètes doivent être autorisées
- les exemplaires physiques doivent rester séparés des notices bibliographiques
- le comportement visible par l’utilisateur doit rester localisable

Ces règles comptent davantage que le style d’implémentation.

### 4. Comportement d’échec et de repli

Les solutions générées par IA optimisent souvent le chemin heureux. Une bonne spécification explique ce qui se passe quand des systèmes optionnels échouent.

Exemple :

- si la recherche de métadonnées échoue, la saisie manuelle reste disponible
- si l’OCR est désactivée, la saisie fonctionne quand même
- si la validation d’export échoue, l’utilisateur reçoit un rapport clair au lieu d’un import partiel silencieux

### 5. Critères d’acceptation

Écrivez la condition de réussite en termes observables.

Exemple :

1. l’utilisateur sélectionne une boîte
2. l’utilisateur saisit ou scanne un ISBN
3. l’utilisateur peut enregistrer même si aucun fournisseur de métadonnées ne répond
4. le livre apparaît dans l’emplacement sélectionné

Les critères d’acceptation donnent aux personnes qui relisent et aux systèmes IA une cible stable.

## Ce qu’il faut éviter

- des objectifs vagues comme « améliorer l’UX »
- des détails d’implémentation sans finalité produit
- des idées futures mélangées et présentées comme des exigences actuelles
- des hypothèses cachées sur les rôles utilisateur ou la qualité des données
- des spécifications qui ne font que nommer sans décrire le flux de travail

## Un modèle pratique de rédaction

Utilisez cette structure compacte lors de la rédaction d’une spécification de fonctionnalité.

1. problème
2. utilisateur et contexte
3. flux de travail dans le périmètre
4. éléments hors périmètre
5. règles requises
6. comportement de repli
7. critères d’acceptation
8. notes de vérification

## Comment cela se traduit dans Let Books

Le dépôt démontre déjà ce modèle à plusieurs niveaux :

- `AGENTS.md` définit la finalité produit, les flux de travail et les critères d’acceptation
- `AGENTS-Implementation.md` définit les contraintes tactiques de livraison
- `README.md` sépare l’état actuel de l’orientation future

Cette approche en couches est utile parce que l’IA fonctionne mieux lorsque ce qui définit le produit est consigné clairement et reste révisable.

## Exercice

Prenez une fonctionnalité Let Books, comme le scan QR de boîtes ou l’import de décisions Excel, et rédigez une spécification d’une page à l’aide de la structure ci-dessus.

Demandez ensuite à un assistant de programmation de l’implémenter.

Ensuite, relisez le résultat par rapport à la spécification avant de relire le style de code. Cet ordre compte.

## Lectures complémentaires

- `../spec-driven-content-program.md`
- `../wiki/fr/spec-driven-development.md`
- `../wiki/fr/demo-spec-alignment.md`
- `../blog/fr/spec-driven-development-for-ai-projects.md`
