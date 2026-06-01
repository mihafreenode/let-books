# Benchmark fixtures pour la traduction LLM

## Résumé

Ce guide définit un petit format structuré pour stocker des exemples révisés de traduction IA sous forme de benchmark fixtures réutilisables.

## Objectif

Les benchmark fixtures permettent au projet de réutiliser de vrais exemples de révision pour:

- la formation des réviseurs
- les scorecards de qualité
- les articles sur la localisation à grande échelle
- la documentation du workflow human-in-the-loop
- les benchmarks d'évaluation LLM

## Champs recommandés du fixture

Chaque fixture doit inclure:

- `fixture_id`
- `source_language`
- `target_language`
- `content_type`
- `domain`
- `source_text`
- `ai_draft`
- `corrected_text`
- `issues`
- `scoring_rubric`
- `example_scorecard`
- `overall_lesson`
- `recommended_uses`

Chaque issue doit inclure:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Taxonomie réutilisable

Valeurs recommandées pour `error_categories`:

- `grammar`
- `modality`
- `terminology`
- `register`
- `fluency`
- `literal_translation`
- `ambiguity`
- `context_loss`
- `word_order`
- `collocation`
- `script_or_orthography`
- `domain_policy_phrasing`
- `accessibility_wording`

## Usage de la notation

De tels fixtures peuvent soutenir l'évaluation interne de:

- si un brouillon IA est publiable sans modification
- quelles catégories d'erreurs apparaissent le plus souvent selon la langue
- si les prompts réduisent les modes d'échec récurrents
- à quelle fréquence une révision par locuteur natif modifie le langage des politiques

## Rubrique légère de notation

Utilisez un score simple de 0 à 3 pour chaque dimension.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Dimensions recommandées:

- `meaning_accuracy`
  Does the draft preserve the intended meaning?
- `grammar_and_fluency`
  Does it read as correct and natural target-language text?
- `terminology_and_domain_fit`
  Does it use the right terminology and domain phrasing?
- `register_and_style`
  Does the tone fit policy, product, educational, or accessibility context?
- `review_effort`
  How close is the draft to approval from a native-speaker reviewer?

## Étiquettes de recommandation de publication

Après notation, attribuez une recommandation de publication:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Guide de sévérité pour les enregistrements de problèmes

Chaque issue peut aussi être étiquetée avec une sévérité:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Comment utiliser la rubrique

1. noter le brouillon IA avant modification
2. enregistrer catégories et sévérités au niveau des issues
3. écrire le texte corrigé
4. attribuer une recommandation de publication
5. noter la confiance du réviseur si nécessaire

Cette approche est volontairement plus légère qu'un programme MQM complet. Elle vise une évaluation pratique répétée dans un workflow open-source de localisation.

## Idées d'agrégation de scorecard

Sur plusieurs fixtures, suivre:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Extension suggérée du fixture

Chaque fixture doit inclure:

```json
{
  "scoring_rubric": {
    "scale": "0-3",
    "dimensions": [
      "meaning_accuracy",
      "grammar_and_fluency",
      "terminology_and_domain_fit",
      "register_and_style",
      "review_effort"
    ],
    "release_recommendations": [
      "blocker",
      "major_revision",
      "minor_revision",
      "ready_with_review_signoff"
    ]
  }
}
```

## Premier fixture

Le premier fixture est l'exemple slovène de révision IA sur modalité et terminologie:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Pages liées

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
