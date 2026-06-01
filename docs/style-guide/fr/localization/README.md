# Localisation

## Résumé

`docs/style-guide/localization/` définit comment le contenu de connaissance multilingue doit être traduit et lié.

## Objectif

Garder les traductions traçables, correctes sur le plan orthographique, alignées structurellement sur les sources anglaises canoniques et révisables comme un système de localisation de long terme, plutôt que comme une tâche de traduction ponctuelle.

## Structure

- politique de locale
- politique d'ID d'article
- règles de liaison interlangue
- règles d'alignement terminologique
- règles sur les enregistrements de révision IA
- benchmark fixtures de traduction LLM

## Principes fondamentaux

- L'anglais est la langue canonique de rédaction de la plateforme de connaissance, sauf si un document déclare explicitement une autre politique.
- Les traductions sont des livrables de premier ordre, mais héritent de l'autorité canonique de la source anglaise.
- La localisation est plus large que la traduction. Elle inclut texte d'accessibilité, diagrammes, captures d'écran, légendes, navigation, métadonnées et gouvernance.
- Le serbe latin et le serbe cyrillique sont des locales séparées.
- Le macédonien, l'albanais et le slovène doivent préserver l'orthographe native correcte et les caractères Unicode.
- La traduction générée par IA n'est autorisée qu'au stade de brouillon. Elle ne remplace pas la révision.

## Exigences pour les articles multilingues

Chaque article de blog publié dans ce dépôt doit suivre ces règles:

### 1. Anglais canonique d'abord

Tous les articles de blog doivent d'abord être écrits en anglais. Les traductions dérivent de la version canonique anglaise. L'article anglais est la source faisant autorité pour les références aux preuves et aux spécifications.

Pour le frontmatter du blog, `canonical_language` doit rester `en` même dans le fichier traduit. Ce champ décrit l'autorité de la source, pas la locale du fichier traduit.

### 2. Frontmatter requis

Chaque article (canonique et traduction) doit inclure dans son frontmatter YAML un champ `language_variants` listant les 12 variantes linguistiques avec des chemins relatifs:

```yaml
language_variants:
  - ../en/<article-id>.md
  - ../sl/<article-id>.md
  - ../hr/<article-id>.md
  - ../bs/<article-id>.md
  - ../sr-Latn/<article-id>.md
  - ../sr-Cyrl/<article-id>.md
  - ../mk/<article-id>.md
  - ../sq/<article-id>.md
  - ../de/<article-id>.md
  - ../it/<article-id>.md
  - ../fr/<article-id>.md
  - ../es/<article-id>.md
```

Locales prises en charge: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Pied de page Other Languages

Chaque article traduit doit inclure à la fin une section de pied de page "Other Languages" listant toutes les autres traductions disponibles avec le nom natif de la langue.

Les articles canoniques anglais doivent également inclure cette section pour des raisons de parité.

### 4. Source-map stubs localisés

Chaque article phare en anglais doit avoir une source map correspondante sous `docs/sources/en/`. Chaque locale non anglaise doit avoir un stub sous `docs/sources/<locale>/` renvoyant vers la source map canonique anglaise.

Les source-map stubs ne sont pas des traductions complètes. Ce sont de courts fichiers avec un pointeur vers l'original anglais et un contexte adapté à la langue.

### 5. Packs dérivés LinkedIn

Chaque article phare en anglais doit avoir un pack dérivé LinkedIn sous `docs/blog/en/linkedin/<article-id>.md` contenant:

- une publication grand public
- une publication institutionnelle/bibliothèque
- une publication pour étudiants/apprenants
- un plan de thread

Ce sont uniquement des dérivés de réseaux sociaux. Ils n'exigent pas de traduction.

### 6. Versions HTML des articles

Chaque article de blog doit avoir une version HTML à côté de la source Markdown. La version HTML suit la même structure que le site documentaire HTML existant (`docs/<locale>/index.html`) et est liée depuis l'index documentaire de la locale concernée.

Les versions HTML sont générées à partir de la source Markdown via le pipeline standard de conversion (basé sur pandoc) et doivent rester en parité avec le contenu Markdown.

### 7. Exigences de publication HTML

- `docs/<locale>/index.html` de chaque locale doit lister les articles de blog disponibles dans cette locale avec des liens directs vers leurs pages HTML.
- La page HTML d'article utilise le même modèle d'en-tête, pied de page, feuille de style et changement de langue que les pages documentaires existantes.
- Le `<head>` doit inclure des alternatives `hreflang` correctes pour les 12 locales.
- L'attribut `data-page-type` sur `<body>` doit être défini à `"article"`.

## Politique de source map

- Les source maps vivent dans `docs/sources/<locale>/`.
- Les source maps anglaises sont des cartes complètes de preuves reliant les affirmations à la documentation du dépôt.
- Les source-map stubs non anglaises sont de courts fichiers qui renvoient à l'original anglais.
- Les source maps ne sont créées que pour les articles phares, pas pour chaque publication mineure.

## Modèle de maturité de traduction

Utilisez ces niveaux pour discuter ou suivre la qualité de traduction.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Suivre la maturité par locale et par catégorie de contenu lorsque c'est pratique.

## Attentes pour la localisation à grande échelle

- Localiser le contenu de connaissance public, pas seulement les chaînes UI.
- Localiser les métadonnées d'accessibilité comme alt text, légendes, labels ARIA et métadonnées de langue.
- Préférer des diagrammes générés à partir de sources structurées afin que les variantes traduites puissent être reproduites.
- Documenter les décisions terminologiques, les attentes des réviseurs et les chemins de résolution des désaccords.
- Garder la validation et la CI proches des workflows de publication afin que les régressions de localisation soient traitées comme des problèmes de qualité produit.
- Préserver des exemples représentatifs de révision IA afin que des corrections subtiles de locuteurs natifs puissent nourrir l'entraînement, la gouvernance et l'évaluation.

## Registre des mises à jour documentaires exploitables

L'exemple slovène de révision IA doit d'abord mettre à jour ces documents:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Résumé du change record pour PR ou revue de gouvernance:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Politique des packs LinkedIn

- Les packs LinkedIn vivent dans `docs/blog/en/linkedin/`.
- Seuls les articles phares en anglais exigent des packs LinkedIn.
- Les packs LinkedIn sont en Markdown, pas en HTML.
- `docs/blog/README.md` doit lister le dossier des packs LinkedIn.

## Sujets liés

- Terminologie
- Publication
- Systèmes multilingues
- Programme de contenu piloté par les spécifications

## Articles liés

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Guides d'apprentissage liés

- `../../learning/README.md`

## Pages wiki liées

- `../../wiki/README.md`

## Lectures complémentaires

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
