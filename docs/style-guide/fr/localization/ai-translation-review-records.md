# Enregistrements de révision des traductions IA

## Résumé

Ce guide explique comment les réviseurs humains doivent documenter les corrections apportées aux traductions générées par IA afin que les exemples puissent être réutilisés pour la gouvernance, l'entraînement, la QA et l'évaluation.

## Pourquoi c'est important

Même lorsque le sens global est préservé, les traductions générées par IA peuvent nécessiter une révision par un locuteur natif pour corriger des problèmes subtils de grammaire, modalité, terminologie et registre spécifique au domaine. Ces problèmes sont souvent difficiles à détecter avec les seules métriques automatiques de qualité.

## Format requis de l'enregistrement de révision

Chaque exemple révisé doit capturer:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Utilisez ce modèle:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Taxonomie d'erreurs recommandée

Utilisez une ou plusieurs de ces catégories lorsque c'est pertinent:

- grammar
- modality
- terminology
- register
- fluency
- literal translation
- ambiguity
- context loss
- word order
- collocation
- script or orthography
- domain-policy phrasing
- accessibility wording

## Guide pour l'hypothèse de cause racine

Les notes du réviseur n'ont pas besoin d'être certaines. Une courte hypothèse suffit si elle aide de futurs réviseurs et le travail d'évaluation des modèles.

Les hypothèses fréquentes incluent:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Étude de cas slovène

### Original AI draft

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Corrected Slovenian

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

### Review record

* Issue:
  Original: `morajo moči`
  Corrected: `morajo imeti možnost, da`
  Error Category: grammar, modality
  Root-Cause Hypothesis: literal translation of "must be able to"
  Reviewer Rationale: the original construction is ungrammatical in Slovenian; the corrected form is the natural modal formulation.

* Issue:
  Original: `po potrebi tudi izklopiti`
  Corrected: `da po potrebi izklopijo`
  Error Category: fluency, word order
  Root-Cause Hypothesis: unnatural source-language word order and weak discourse control
  Reviewer Rationale: the corrected order is clearer and removes unnecessary emphasis.

* Issue:
  Original: `morajo biti izrecne`
  Corrected: `morajo biti izrecno omogočene`
  Error Category: terminology, domain-policy phrasing, register
  Root-Cause Hypothesis: dictionary-equivalent adjective chosen without policy context
  Reviewer Rationale: the requirement is about explicit enablement of paid enrichment, not about the enrichments being "explicit" as a descriptive adjective.

## Leçons réutilisables entre langues

- Une traduction peut préserver le sens général et malgré tout ne pas répondre aux attentes de qualité des locuteurs natifs.
- Les constructions modales sont une faiblesse fréquente de l'IA, car l'équivalence grammaticale directe ne tient souvent pas entre langues.
- Le langage des politiques et des spécifications produit exige souvent des formulations spécifiques au domaine plutôt que des synonymes de langue générale.
- Les contrôles automatisés peuvent détecter des chaînes manquantes et des placeholders cassés, mais ratent souvent le registre, la modalité et la dérive terminologique subtile.
- La justification du réviseur doit être brève mais explicite afin que les exemples puissent former de futurs réviseurs et améliorer les prompts ou jeux d'évaluation.

## Registre des recommandations

Ajoutez des exemples comme celui-ci à ces ressources:

- supports de formation pour réviseurs en localisation
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- jeux de données d'évaluation de traduction IA
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- exemples du guide de style
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- documentation du workflow human-in-the-loop
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- articles et guides de bonnes pratiques sur la localisation à grande échelle
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Utilisation suggérée des scorecards

Des exemples de révision comme celui-ci peuvent soutenir des scorecards internes en suivant:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
