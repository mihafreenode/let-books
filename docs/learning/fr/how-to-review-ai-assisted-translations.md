---
title: "Comment relire des traductions assistées par l'IA"
summary: >-
  Ce guide explique comment relire des traductions générées par l'IA du point de vue du sens, de la terminologie, de l'accessibilité, du ton et du besoin de relecture humaine.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Comment relire des traductions assistées par l'IA

## Résumé

Ce guide explique comment relire des traductions générées par l'IA du point de vue du sens, de la terminologie, de l'accessibilité, du ton et du besoin de relecture humaine.

## Checklist de relecture

- vérifier d'abord le sens, puis le style
- vérifier la terminologie par rapport au glossaire du projet
- examiner avec une attention particulière les formulations sensibles
- confirmer que le texte d'accessibilité est lui aussi localisé
- indiquer honnêtement le niveau de maturité de la relecture

## Étude de cas slovène

### Brouillon IA d'origine

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Version slovène corrigée

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Retour de relecture humaine

### Problème 1

- original : `morajo moči`
- corrigé : `morajo imeti možnost, da`
- catégories : grammaire, modalité
- cause probable de l'erreur IA : traduction littérale d'une construction modale anglaise
- justification du relecteur : la formulation d'origine est agrammaticale en slovène ; la version corrigée emploie la tournure naturelle pour un texte de politique ou de gouvernance.

### Problème 2

- original : `po potrebi tudi izklopiti`
- corrigé : `da po potrebi izklopijo`
- catégories : fluidité, ordre des mots
- cause probable de l'erreur IA : ordre des mots calqué sur la langue source et faible maîtrise du discours
- justification du relecteur : l'ordre corrigé est plus clair et supprime une insistance inutile.

### Problème 3

- original : `morajo biti izrecne`
- corrigé : `morajo biti izrecno omogočene`
- catégories : terminologie, registre, formulation de politique métier
- cause probable de l'erreur IA : choix lexical de dictionnaire sans assez de contexte produit ou politique
- justification du relecteur : l'exigence porte sur l'activation explicite des enrichissements payants, pas sur une description des enrichissements comme intrinsèquement « explicites ».

## Catégories courantes de problèmes

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
- formulation de politique métier
- formulation liée à l'accessibilité

## Guide de notation

Pour des relectures répétables, utiliser une échelle simple de 0 à 3.

- `0` : inacceptable
- `1` : problèmes majeurs
- `2` : utilisable avec corrections de relecture
- `3` : solide ou presque prêt à publier

Dimensions de notation recommandées :

- exactitude du sens
- grammaire et fluidité
- terminologie et adéquation au domaine
- registre et style
- effort de relecture nécessaire

## Guide de recommandation de mise en ligne

- `blocker` : impropre à la publication ou à l'exposition aux utilisateurs
- `major_revision` : le sens peut être proche, mais une réécriture importante reste nécessaire
- `minor_revision` : brouillon exploitable avec corrections ciblées d'un locuteur natif
- `ready_with_review_signoff` : approprié une fois la validation normale du relecteur effectuée

## Documenter non seulement la correction, mais aussi la raison

Pour un travail de relecture réutilisable, consigner :

- le texte original
- le texte corrigé
- la catégorie d'erreur
- l'hypothèse de cause racine
- la justification du relecteur

## Leçons réutilisables tirées de la relecture slovène

- le sens grammatical peut être proche alors que la phrase reste impropre à la publication pour un locuteur natif
- les constructions modales sont particulièrement vulnérables à la traduction littérale
- la terminologie et la formulation des politiques demandent souvent une reformulation consciente du domaine
- l'AQ automatisée aide, mais elle suffit rarement pour les problèmes fins de registre

## Note Localization-at-Scale

Même lorsque le sens global est préservé, les traductions générées par l'IA peuvent nécessiter une relecture par un locuteur natif pour corriger des problèmes subtils de grammaire, de modalité, de terminologie et de registre spécifique au domaine. Ces problèmes sont souvent difficiles à détecter de manière fiable avec les seules métriques automatisées de qualité.

## Où réutiliser de tels exemples

- supports de formation pour relecteurs en localisation
- jeux de données d'évaluation de traduction IA
- exemples dans le guide de style
- documentation human-in-the-loop
- articles de localization at scale et guides de bonnes pratiques

De tels exemples aident les relecteurs à calibrer leurs attentes et donnent aux responsables localisation un matériau de référence réaliste.

## Pages liées

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
