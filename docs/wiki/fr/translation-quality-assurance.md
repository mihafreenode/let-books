---
title: "Assurance qualité des traductions"
summary: >-
  La QA de traduction combine validation automatisée, vérification orthographique, revue terminologique, contrôles d'accessibilité et jugement humain.
topics:
  - translation-quality
  - qa
  - localization
---
# Assurance qualité des traductions

## Résumé

La QA de traduction combine validation automatisée, vérification orthographique, revue terminologique, contrôles d'accessibilité et jugement humain.

## Vérifications courantes

- traductions manquantes
- fuites d'anglais
- complétude de la localisation visible par le lecteur
- parité structurelle par rapport à la sortie fraîchement générée
- lisibilité en langue maternelle et expression naturelle
- écarts de placeholders
- liens rompus
- dérive du glossaire
- couverture du texte d'accessibilité
- parité des captures d'écran et des diagrammes

## Exigence de sortie fraîchement générée

Avant la revue de parité structurelle, la revue sémantique ou la comparaison manuelle des articles :

1. régénérez le site à partir de l'état actuel du dépôt
2. exécutez les validateurs sur la sortie générée actuelle
3. inspectez les artefacts HTML générés
4. seulement ensuite, effectuez l'évaluation manuelle de la parité

Cette règle existe parce que le Markdown source et la sortie générée peuvent diverger temporairement pendant le développement, et que les constats de QA doivent se fonder sur des artefacts actuels plutôt que sur des fichiers générés obsolètes.

## Revue de parité structurelle

La revue de parité structurelle doit rechercher les pertes de valeur pour le lecteur même lorsque l'article localisé préserve encore globalement le sens.

Les signaux typiques incluent :

- sections principales manquantes
- hiérarchie de titres effondrée
- exemples manquants
- guidage pratique comprimé
- discussion de gouvernance réduite
- consignes de revue ou de validation raccourcies

Les avertissements des validateurs de parité structurelle sont des invitations à la revue, pas une preuve automatique d'une mauvaise traduction. Ils doivent être interprétés avec le HTML généré et, si nécessaire, avec la sortie rendue dans le navigateur.

## Revue de l'expression en langue maternelle

La QA de traduction doit aussi rechercher du texte techniquement correct mais qui n'est pas celui qu'un locuteur natif choisirait naturellement.

Cela inclut :

- structure de phrase anglaise directe
- traduction directe d'idiomes anglais
- formulations qui sonnent traduites plutôt qu'écrites comme texte original
- terminologie qui continue à trahir la langue source

Des exemples de ce modèle comprennent des formulations équivalentes à :

- contenu candidat
- stratégie de validation
- artefact de workflow
- outils sélectionnés
- compétences sélectionnées

Ce ne sont pas toujours des erreurs de traduction. Ce sont souvent des cas où un locuteur natif réécrirait instinctivement la phrase.

## Test de préférence du locuteur natif

Pour les sections de prose importantes, les reviewers devraient se demander :

> Si un locuteur natif compétent rédigeait cette idée à partir de zéro, l'écrirait-il probablement de cette façon ?

Si ce n'est pas le cas, les reviewers devraient :

- préserver le sens
- préserver la parité sémantique
- préserver la parité structurelle
- améliorer la formulation

Ce test est particulièrement utile pour :

- les introductions
- les résumés
- les explications pédagogiques
- les consignes pratiques
- les discussions de gouvernance
- les conclusions

## Revue de l'expression naturelle

Traitez une formulation techniquement correcte mais peu naturelle comme un problème de qualité.

Les reviewers devraient préférer des formulations qui sonnent naturellement rédigées dans la langue cible, même lorsque la traduction d'origine est compréhensible.

L'objectif n'est pas seulement une traduction correcte. L'objectif est un document qui donne l'impression d'avoir été écrit à l'origine pour des lecteurs natifs.

Les améliorations de langage naturel ne doivent pas affaiblir :

- la parité sémantique
- la parité structurelle
- la couverture pédagogique
- les exemples
- les consignes pratiques
- les consignes de gouvernance

## Validateur de localisation destiné au lecteur

Une classe de validateurs devrait explicitement faire échouer la CI lorsqu'une page semble localisée mais expose encore du contenu destiné au lecteur dans la langue source.

Exemples qui devraient échouer :

- titre localisé avec résumé en anglais
- article localisé avec tags en anglais
- article localisé avec titres ou listes en anglais
- article localisé avec callouts ou légendes en anglais
- article localisé avec étiquettes de diagramme en anglais ou texte alternatif
- cartes `related-content` en langues mixtes

Il s'agit d'une condition d'échec, et pas simplement d'un avertissement, car les lecteurs perçoivent ces pages comme visiblement inachevées.

## Audit des classes de défauts

La QA de traduction devrait maintenir des classes de défauts explicites avec les champs suivants :

- description
- nombre d'occurrences
- cause racine
- couverture du validateur
- risque de récurrence
- plan de clôture

Les catégories requises incluent :

- résumés non traduits
- corps de texte non traduits
- publication de brouillons avec placeholders
- métadonnées non traduites
- publication en langues mixtes
- classes découvertes ultérieurement

Une classe n'est close que lorsque son nombre d'occurrences atteint zéro et que la CI empêche son retour sans échec.

## Preuves de revue humaine

La QA de traduction devrait également conserver de courts enregistrements de revue humaine pour des corrections représentatives assistées par AI.

Champs minimaux :

- texte original
- texte corrigé
- catégorie d'erreur
- hypothèse de cause racine
- justification du reviewer

Les constats issus des revues de locuteurs natifs devraient être conservés comme un corpus croissant, et non comme des notes isolées sans suite. Les constats répétés devraient nourrir la conception des validateurs, la guidance des contributeurs et les futures instructions pour les agents AI.

Avant de valider une traduction assistée par AI, les reviewers devraient :

- lire les entrées pertinentes du corpus structuré de constats pour cette langue ou ce sujet
- vérifier les motifs récurrents de défauts issus des revues humaines
- confirmer que la version en cours ne réintroduit pas de problèmes connus avant validation

Chaque défaut signalé par un locuteur natif devrait aussi être évalué au regard de :

- la correction du contenu
- la mise à jour des consignes de revue
- la mise à jour des consignes terminologiques
- l'amélioration du prompt
- l'opportunité pour un validateur
- l'opportunité pour un test de régression

Cela a de l'importance parce que, même lorsque le sens global est préservé, les traductions générées par AI peuvent exiger une revue de locuteur natif pour corriger des problèmes subtils de grammaire, de modalité, de terminologie et de registre spécifique au domaine. Ces problèmes sont souvent difficiles à détecter avec des métriques automatisées de qualité seules.

Les erreurs concrètement signalées ne sont pas seulement indicatives. Chacune devrait finir corrigée, systématisée, laissée volontairement non résolue avec justification, ou encore explicitement suivie dans le corpus des constats.

## Taxonomie courante des erreurs de traduction de l'IA

- grammaire
- modalité
- terminologie
- registre
- fluidité
- traduction littérale
- ambiguïté
- perte de contexte
- ordre des mots
- collocation
- écriture ou orthographe
- formulation de politique de domaine
- formulation d'accessibilité

## Notation de référence légère

Pour une évaluation répétable des traductions AI, utilisez une rubrique légère de 0 à 3 au lieu de vous fier uniquement à un jugement réussite/échec.

Dimensions recommandées :

- exactitude du sens
- grammaire et fluidité
- terminologie et adéquation au domaine
- registre et style
- effort de revue

Libellés de publication recommandés :

- bloquant
- révision majeure
- révision mineure
- prêt avec validation de revue

Cela crée des données exploitables dans des scorecards sans nécessiter de cadre lourd de mesure de localisation.

## Pages connexes

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/fr/how-to-run-localization-qa-in-ci.md`
