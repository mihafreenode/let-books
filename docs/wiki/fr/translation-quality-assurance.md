---
title: "Assurance qualité des traductions"
summary: >-
  Le contrôle qualité des traductions combine la validation automatisée, la vérification orthographique, la révision terminologique, les contrôles d'accessibilité et le jugement humain.
topics:
  - translation-quality
  - qa
  - localization
---
# Assurance qualité des traductions

## Résumé

Le contrôle qualité des traductions combine la validation automatisée, la vérification orthographique, la révision terminologique, les contrôles d'accessibilité et le jugement humain.

## Vérifications courantes

- traductions manquantes
- Fuite en anglais
- exhaustivité de la localisation destinée au lecteur
- incompatibilités d'espace réservé
- liens brisés
- dérive du glossaire
- couverture du texte d'accessibilité
- capture d'écran et parité du diagramme

## Validateur de localisation destiné au lecteur

Une classe de validateur doit explicitement échouer à CI lorsqu'une page apparaît localisée mais expose toujours le contenu destiné au lecteur en langue source.

Exemples qui devraient échouer :

- titre localisé avec résumé en anglais
- article localisé avec des balises anglaises
- article localisé avec des titres ou des listes en anglais
- article localisé avec légendes ou légendes en anglais
- article localisé avec des étiquettes de diagramme en anglais ou un texte alternatif
- des cartes de contenu connexe en langues mixtes

Il s’agit d’une condition d’échec, et pas seulement d’un avertissement, car les lecteurs considèrent ces pages comme visiblement inachevées.

## Audit de classe de défauts

Le contrôle qualité de la traduction doit conserver des classes de défauts explicites avec :

- descriptif
- nombre d'occurrences
- la cause première
- couverture du validateur
- risque de récidive
- plan de fermeture

Les catégories obligatoires incluent :

- résumés non traduits
- corps non traduits
- publication de brouillon d'espace réservé
- métadonnées non traduites
- édition en langues mixtes
- futures classes découvertes

Une classe n'est fermée que lorsque son décompte atteint zéro et que CI l'empêche de revenir sans échec.

## Preuve d'examen humain

L’assurance qualité des traductions doit également conserver de courts enregistrements de révision humaine pour les corrections représentatives assistées par l’IA.

Champs minimaux :

- texte original
- texte corrigé
- catégorie d'erreur
- hypothèse de cause profonde
- justification de l'examinateur

Les résultats des analyses réalisées auprès de locuteurs natifs doivent être conservés sous la forme d’un corpus croissant, et non sous la forme de notes isolées et ponctuelles. Les résultats répétés devraient être répercutés sur la conception du validateur, les conseils des contributeurs et les futures instructions des agents IA.

Cela est important car même lorsque le sens global est préservé, les traductions générées par l’IA peuvent nécessiter une révision par un locuteur natif pour corriger des problèmes subtils de grammaire, de modalité, de terminologie et de registre spécifique au domaine. Ces problèmes sont souvent difficiles à détecter uniquement grâce aux mesures de qualité automatisées.

## Taxonomie courante des erreurs de traduction de l'IA

- grammaire
- modalité
- terminologie
- s'inscrire
- maîtrise
- traduction littérale
- ambiguïté
- perte de contexte
- l'ordre des mots
- colocalisation
- scénario ou orthographe
- formulation de la politique de domaine
- formulation d'accessibilité

## Notation de référence légère

Pour une évaluation reproductible de la traduction IA, utilisez une rubrique légère de 0 à 3 au lieu de vous fier uniquement au jugement de réussite/échec.

Dimensions recommandées :

- c'est-à-dire l'exactitude
- grammaire et maîtrise
- terminologie et adéquation au domaine
- s'inscrire et styler
- efforts de révision

Étiquettes de version recommandées :

- bloqueur
- révision majeure
- révision mineure
- prêt avec l'approbation de l'examen

Cela crée des données adaptées aux tableaux de bord sans nécessiter un cadre de mesure de localisation lourd.

## Pages connexes

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/fr/how-to-run-localization-qa-in-ci.md`