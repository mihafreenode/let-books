---
title: "Comment ajouter des règles de validation et des garde-fous CI par étapes"
summary: >-
  Ce guide explique comment ajouter progressivement des règles de validation et des vérifications CI afin qu’un projet puisse améliorer sa cohérence et réduire la dérive sans chercher à tout automatiser d’un seul coup.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Comment ajouter des règles de validation et des garde-fous CI par étapes

## Résumé

Ce guide explique comment ajouter progressivement des règles de validation et des vérifications CI afin qu’un projet puisse améliorer sa cohérence et réduire la dérive sans chercher à tout automatiser d’un seul coup.

## Pourquoi l’application progressive est importante

Les équipes savent souvent qu’elles ont besoin d’une validation plus solide, mais elles commettent généralement l’une de deux erreurs.

Soit elles laissent les contrôles qualité informels trop longtemps, soit elles essaient d’introduire d’un seul coup un grand système CI rigide et créent de la frustration.

Une approche progressive fonctionne mieux.

Elle permet au projet de transformer au fil du temps des attentes de revue répétées en contrôles répétables.

## Partir des erreurs récurrentes

Les meilleures règles de validation commencent généralement comme des constats répétés lors de revues humaines.

Demandez-vous :

- quelles erreurs reviennent sans cesse
- quelles règles sont faciles à oublier
- quelle structure doit rester cohérente dans l’ensemble du dépôt
- quels contrôles qualité feraient gagner du temps aux personnes qui relisent

Si le même problème apparaît plusieurs fois, c’est un bon candidat à l’automatisation.

## La validation doit suivre la chaîne d’autorité

Les règles de validation doivent renforcer des attentes documentées, pas les remplacer.

Cela signifie :

- la spécification définit la règle
- la documentation explique la règle
- la validation vérifie la règle lorsque c’est pratique
- la CI exécute la validation de manière cohérente

Cela évite au projet de faire respecter des règles qui n’ont jamais été réellement décidées.

## Un modèle de maturité utile

### Étape 1 : liste de contrôle de revue manuelle

Commencez par nommer explicitement la règle.

Exemples :

- tout nouveau texte visible par l’utilisateur doit pouvoir être localisé
- la documentation doit séparer l’état actuel des plans futurs
- les nouveaux articles publics doivent citer les spécifications et la documentation, pas les fichiers source

À ce stade, la règle est réelle, mais elle est encore appliquée par des humains.

### Étape 2 : validation locale légère

Ajoutez un petit script ou un contrôle structuré que les personnes contributrices peuvent exécuter localement.

Exemples :

- détection des clés de langue manquantes
- vérification de la présence des fichiers requis
- validation de la génération des métadonnées
- vérification de la résolution des liens

Cette étape réduit les erreurs évitables avant même que la CI ne s’exécute.

### Étape 3 : visibilité dans la CI

Exécutez le contrôle dans la CI, même s’il n’est pas encore bloquant au départ.

Cela donne à l’équipe de la visibilité sur la fréquence des échecs de la règle et sur le besoin éventuel d’affiner le contrôle lui-même.

### Étape 4 : garde-fou CI bloquant

Une fois que la règle est stable et comprise, rendez-la obligatoire.

À ce stade, le projet est passé d’une attente informelle à une norme applicable.

## Quoi automatiser en premier

Les bons premiers candidats sont généralement :

- la cohérence structurelle
- les fichiers requis
- l’exhaustivité de la localisation
- la validité du formatage ou de la syntaxe
- les liens internes cassés
- les citations éditoriales interdites

Pour la publication multilingue, traitez le contenu visible par le lecteur dans des langues mélangées comme l’un des premiers garde-fous CI à forte valeur. Une page avec un titre localisé mais un résumé en anglais ou des étiquettes en anglais n’est pas partiellement réussie. Elle est incomplète.

Ces contrôles sont généralement peu coûteux, objectifs et utiles.

## Ce qu’il ne faut pas imposer trop tôt

Certains contrôles sont utiles, mais peuvent nécessiter du temps avant de devenir des garde-fous stricts.

Exemples :

- vérification orthographique dans de nombreuses langues
- vérifications de captures d’écran ou de régression visuelle
- vérifications d’accessibilité encore en cours d’ajustement
- règles de style ou de formulation qui ne sont pas encore stables

Ils peuvent commencer comme des signaux informatifs avant de devenir obligatoires.

## Exemples Let Books

Le dépôt documente déjà plusieurs schémas de validation, notamment :

- tests de fumée de localisation
- validation de la syntaxe JSON
- vérification des fichiers requis
- génération des métadonnées SEO
- vérification orthographique et linting optionnels
- automatisation du déploiement

La documentation et les guides de style définissent aussi des règles éditoriales qui peuvent devenir des cibles de validation avec le temps, par exemple l’utilisation des spécifications et de la documentation comme preuve canonique pour les articles publics.

Cela fait de Let Books un bon exemple d’application incrémentale plutôt que de processus tout-en-un.

## Un flux pratique de conversion des règles

Utilisez ce modèle lorsque vous ajoutez une nouvelle règle de validation :

1. identifier le problème de revue récurrent
2. écrire clairement la règle dans la documentation ou les consignes
3. ajouter un script local ou un contrôle si c’est pratique
4. l’exécuter dans la CI comme retour visible
5. ne le rendre bloquant que lorsqu’il est stable

Cela crée moins de friction que d’introduire un garde-fou strict avant que l’équipe comprenne la règle.

## Questions à poser avant d’ajouter un garde-fou

1. La règle est-elle clairement documentée ?
2. Le contrôle est-il assez fiable pour qu’on lui fasse confiance ?
3. Les personnes contributrices comprendront-elles comment corriger les échecs ?
4. La valeur du contrôle justifie-t-elle la friction ?
5. Doit-il commencer comme simple avertissement avant de devenir obligatoire ?

## Les projets assistés par IA en ont encore plus besoin

L’IA augmente le volume de changements et la vitesse du changement. Cela signifie davantage d’occasions d’incohérence.

Elle rend aussi les retours rapides plus précieux. La question pratique n’est souvent pas de savoir si l’IA peut produire une première tentative parfaite. La question plus utile est de savoir si l’environnement peut identifier de manière fiable le problème suivant à résoudre.

La validation et la CI ne sont pas là pour ralentir les équipes. Elles sont là pour éviter que la vitesse n’efface des frontières importantes.

Dans un travail guidé par les spécifications, l’objectif n’est pas l’automatisation maximale. L’objectif est de renforcer de manière fiable les règles qui comptent le plus.

## La leçon durable

Les systèmes de validation les plus solides n’apparaissent généralement pas entièrement formés. Ils se développent en transformant des jugements humains répétés en contrôles documentés, révisables et applicables.

Cette progression par étapes est souvent la manière la plus réaliste de rendre un projet plus strict sans le rendre fragile.

## Liste de contrôle de remédiation en partant de la source

Lorsqu’une règle de validation échoue :

1. inspecter d’abord le Markdown source
2. inspecter ensuite les métadonnées localisées
3. inspecter les entrées de génération et les registres
4. régénérer les artefacts
5. inspecter le HTML généré seulement après les vérifications au niveau de la source

Ne corrigez pas la sortie générée si la localisation source est incomplète.

## Lectures complémentaires

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/fr/spec-driven-development.md`
- `../blog/fr/documentation-is-part-of-the-product.md`
