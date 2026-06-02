---
article_id: ai-will-not-replace-translators
canonical_language: en
language_variants:
  - ../en/ai-will-not-replace-translators.md
  - ../sl/ai-will-not-replace-translators.md
  - ../hr/ai-will-not-replace-translators.md
  - ../bs/ai-will-not-replace-translators.md
  - ../sr-Latn/ai-will-not-replace-translators.md
  - ../sr-Cyrl/ai-will-not-replace-translators.md
  - ../mk/ai-will-not-replace-translators.md
  - ../sq/ai-will-not-replace-translators.md
  - ../de/ai-will-not-replace-translators.md
  - ../it/ai-will-not-replace-translators.md
  - ../fr/ai-will-not-replace-translators.md
  - ../es/ai-will-not-replace-translators.md
title: L'IA ne remplacera pas les traducteurs
summary: Pourquoi l'IA modifie les flux de traduction, mais ne supprime pas le besoin de jugement linguistique humain, de contexte culturel et de relecture.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/fr/ai-will-not-replace-translators.md
status: draft
---

# L'IA ne remplacera pas les traducteurs

L'IA a déjà changé le travail de traduction. Elle peut produire rapidement des brouillons utilisables, élargir la couverture et réduire le coût de la première passe de localisation. C'est un progrès réel.

Ce n'est pas la même chose que remplacer les traducteurs.

## Ce que les traducteurs humains font encore

Les relecteurs humains décident si une traduction est :

- suffisamment exacte pour le contexte
- naturelle dans la langue cible
- appropriée pour des formulations sensibles
- cohérente avec la terminologie du projet
- accessible au public visé

Ce ne sont pas des finitions facultatives. Cela fait partie de la qualité.

## Là où l'IA aide le plus

L'IA est la plus utile lorsqu'elle sert à :

- créer des brouillons
- proposer des alternatives
- accélérer l'extension des glossaires
- réduire la quantité de contenu non traduit
- faire remonter les incohérences probables

## Pourquoi l'excès de confiance est dangereux

Le plus grand risque de la traduction par IA n'est pas seulement l'erreur. C'est la confiance sans relecture. Un texte généré par machine peut sembler fluide tout en restant faux, culturellement inadéquat ou terminologiquement instable.

## Un exemple concret de relecture en slovène

Un modèle utile est la traduction qui préserve le sens général mais échoue malgré tout à la relecture d'un locuteur natif.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Ce qui a changé :

- une modalité agrammaticale a été corrigée en slovène naturel
- un ordre des mots maladroit a été normalisé
- la formulation de la politique a été réécrite d'un adjectif littéral vers une expression plus adaptée au domaine

C'est exactement le type d'exemple qui explique pourquoi la relecture humaine reste essentielle. Le sens était proche, mais la grammaire, la modalité, la terminologie et le registre nécessitaient encore la correction d'un locuteur natif.

Même lorsque le sens général est préservé, les traductions générées par IA peuvent nécessiter une relecture par un locuteur natif pour corriger des problèmes subtils de grammaire, de modalité, de terminologie et de registre propre au domaine. Ces problèmes sont souvent difficiles à détecter à l'aide des seules métriques automatiques de qualité.

## Un exemple par catégorie de relecture

Des catégories différentes de constats de relecture exigent des formes différentes de jugement humain.

### Modalité et langage de politique

Brouillon initial de l'IA :

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Correction d'un locuteur natif :

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Leçon :

- préserver le sens ne suffit pas lorsque la grammaire, la modalité et la formulation de la politique sonnent encore faux pour des locuteurs natifs

### Optimisation du texte source pour la localisation

Titre anglais d'origine :

`The hidden exclusion of English-only systems`

Titre anglais amélioré :

`Why English-only systems exclude people`

Leçon :

- certains problèmes de localisation devraient être résolus en améliorant le texte source plutôt qu'en forçant chaque langue cible à compenser une formulation anglaise trop condensée

### Faux ami en terminologie technique

Expression anglaise d'origine :

`benchmark fixtures`

Localisation slovène incorrecte :

`primerjalne napeljave`

Localisation slovène améliorée :

`referenčni primeri za primerjalno vrednotenje`

Leçon :

- les termes techniques doivent être traduits selon leur sens de domaine ; dans les contextes de test et d'évaluation, `fixture` signifie un exemple de référence réutilisable ou un cas de test, et non une infrastructure physique

## Conclusion durable

L'avenir n'est pas traducteur contre IA. L'avenir pratique est une localisation assistée par IA, avec des étapes de relecture claires et des attentes de qualité transparentes.

## Pages associées

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Autres langues

L'anglais est la langue canonique de la première publication de cet article. Des chemins prêts pour la traduction sont réservés à toutes les localisations prises en charge par Let Books.
