---
title: "Comment relire un travail assisté par IA à l’aune de la spécification"
summary: >-
  Ce guide explique comment relire une implémentation assistée par IA en la comparant à la spécification produit, aux règles de flux de travail, à la documentation et aux attentes de validation, plutôt qu’en jugeant seulement si le résultat paraît soigné ou techniquement plausible.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# Comment relire un travail assisté par IA à l’aune de la spécification

## Résumé

Ce guide explique comment relire une implémentation assistée par IA en la comparant à la spécification produit, aux règles de flux de travail, à la documentation et aux attentes de validation, plutôt qu’en jugeant seulement si le résultat semble soigné ou techniquement plausible.

## Pourquoi c’est important

L’IA peut produire très rapidement du code, du texte, des tests et des changements d’interface qui semblent complets.

Cette vitesse crée un risque de revue : les personnes qui relisent peuvent glisser sans s’en rendre compte de la question « Est-ce le bon comportement produit ? » à la question « Est-ce que cela paraît raisonnable ? ».

Ce n’est pas la même question.

Dans un travail piloté par les spécifications, la revue doit commencer par l’alignement, puis seulement passer à la qualité du code, au style et aux détails d’implémentation.

## Commencer par la source de vérité

Avant de relire le résultat, identifiez les documents qui définissent le comportement attendu.

Dans le dépôt Let Books, cela signifie généralement :

- `AGENTS.md` pour les règles produit, les flux de travail et le périmètre
- `AGENTS-Implementation.md` pour les contraintes tactiques de livraison
- `README.md` pour la présentation de l’état actuel
- la documentation pertinente sous `docs/` pour la publication, la vérification ou les consignes de flux de travail

Sans cette étape, la revue devient facilement subjective et trop locale.

## Relire dans le bon ordre

Utilisez cet ordre lorsque vous relisez un travail assisté par IA.

### 1. Alignement produit

Demandez-vous si le résultat correspond au flux de travail utilisateur prévu et à la frontière produit.

Exemples :

- la saisie manuelle fonctionne-t-elle toujours là où la spécification l’exige
- le changement préserve-t-il la séparation entre exemplaires physiques et notices bibliographiques
- ajoute-t-il un comportement qui n’a jamais été approuvé
- présente-t-il à tort des fonctions IA optionnelles comme obligatoires

Si l’alignement produit est mauvais, cela n’a pas beaucoup de valeur de passer d’abord du temps sur le polissage.

### 2. Alignement documentaire

Demandez-vous si la documentation autour du changement décrit toujours honnêtement la réalité.

Exemples :

- un flux de travail visible par l’utilisateur a-t-il changé sans mise à jour de la documentation
- le README décrit-il toujours correctement l’état actuel
- les nouvelles affirmations publiques correspondent-elles à la position produit réellement documentée

Les changements générés par IA modifient souvent le comportement sans penser à mettre à jour le récit qui l’entoure.

### 3. Validation et comportement de repli

Demandez-vous si le changement préserve les attentes de panne et de repli définies par la spécification.

Exemples :

- le flux de travail peut-il encore réussir lorsqu’un fournisseur optionnel échoue
- les entrées invalides sont-elles traitées explicitement
- les résultats incertains ou à faible confiance sont-ils traités comme des suggestions plutôt que comme des faits

C’est ici que de nombreuses implémentations plausibles échouent au véritable test produit.

### 4. Qualité technique

Ce n’est qu’après les vérifications ci-dessus que vous devez consacrer l’essentiel du temps à :

- la clarté
- la maintenabilité
- le nommage
- la duplication
- les tests
- la structure

La qualité technique reste importante. Elle ne doit simplement pas passer avant la justesse produit.

## Pièges de revue fréquents

Le travail assisté par IA tend à créer plusieurs pièges de revue répétitifs.

### Le piège du résultat soigné

Le résultat paraît propre, donc les personnes qui relisent supposent qu’il est correct.

### Le piège du contexte voisin

Le changement correspond à l’implémentation existante la plus proche, mais cette implémentation la plus proche peut déjà avoir dérivé.

### Le piège du périmètre implicite

L’assistant ajoute des fonctionnalités, des abstractions ou des hypothèses qui n’ont jamais été demandées, et la personne qui relit les accepte parce qu’elles ne semblent pas manifestement cassées.

### Le piège des tests qui passent

Les tests peuvent réussir parce qu’ils valident le comportement généré, et non parce qu’ils valident le comportement produit attendu.

## Une liste de revue pratique

Pour chaque changement substantiel assisté par IA, demandez-vous :

1. Quelle règle produit ou quel flux de travail ce changement est-il censé implémenter ?
2. Quelle spécification ou quelle documentation définit cette règle ?
3. Le résultat préserve-t-il les contraintes requises ?
4. Garde-t-il intact le comportement de repli ?
5. La documentation correspond-elle toujours au comportement résultant ?
6. Quelle validation ou quels tests soutiennent le changement ?
7. L’assistant a-t-il ajouté quelque chose qui devrait être retiré car hors périmètre ?

## Comment relire les tests générés

Les tests générés sont utiles, mais ils doivent eux aussi être relus par rapport à la spécification.

Demandez-vous :

- les tests vérifient-ils le flux de travail prévu
- couvrent-ils le comportement de repli
- reflètent-ils les conditions limites documentées
- valident-ils un comportement de confort qui n’a jamais été spécifié

Cela est particulièrement important dans un travail piloté par les spécifications, car une suite de tests faible peut figer la dérive.

## Exemples Let Books

Des exemples de questions au niveau de la spécification dans ce dépôt incluent :

- le flux de travail reste-t-il utile sans services IA payants
- la documentation de l’état actuel sépare-t-elle clairement le statut de la démo des plans futurs de backend
- la documentation publique évite-t-elle de traiter le code source comme preuve éditoriale canonique
- les étapes de validation restent-elles intégrées au flux de livraison au lieu de dépendre d’une mémoire facultative

Ces questions sont suffisamment précises pour guider la revue, ce qui est exactement ce qu’une spécification doit permettre.

## La leçon durable

La revue assistée par IA ne consiste pas à vérifier si l’assistant a produit quelque chose d’impressionnant. Elle consiste à vérifier si le résultat appartient toujours au produit visé.

La meilleure question de revue n’est généralement pas « Est-ce que cela fonctionne ? », mais « Est-ce que cela correspond à la spécification, y compris dans les parties qu’il est facile d’oublier ? ».

## Lectures complémentaires

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/fr/spec-driven-development.md`
- `../blog/fr/spec-driven-development-for-ai-projects.md`
