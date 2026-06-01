# Benchmark fixtures para traducción con LLM

## Resumen

Esta guía define un pequeño formato estructurado para almacenar ejemplos revisados de traducción con IA como benchmark fixtures reutilizables.

## Propósito

Los benchmark fixtures permiten al proyecto reutilizar ejemplos reales de revisión para:

- formación de revisores
- scorecards de calidad
- artículos sobre localización a escala
- documentación del flujo human-in-the-loop
- benchmarks de evaluación de LLM

## Campos recomendados del fixture

Cada fixture debe incluir:

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

Cada issue debe incluir:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Taxonomía reutilizable

Valores recomendados para `error_categories`:

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

## Uso de la puntuación

Fixtures como este pueden apoyar la evaluación interna de:

- si un borrador de IA es publicable sin ediciones
- qué categorías de error aparecen con mayor frecuencia por idioma
- si los prompts reducen modos de fallo repetidos
- con qué frecuencia la revisión de un hablante nativo cambia el lenguaje de políticas

## Rúbrica ligera de puntuación

Usa una puntuación simple de 0 a 3 para cada dimensión.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Dimensiones recomendadas:

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

## Etiquetas de recomendación de publicación

Después de puntuar, asigna una recomendación de publicación:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Guía de severidad para registros de problemas

Cada issue también puede etiquetarse con severidad:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Cómo usar la rúbrica

1. puntuar el borrador de IA antes de editar
2. registrar categorías y severidades a nivel de issue
3. escribir el texto corregido
4. asignar una recomendación de publicación
5. anotar la confianza del revisor si hace falta

Esto es intencionadamente más ligero que un programa MQM completo. Está pensado para evaluación práctica repetida dentro de un flujo open-source de localización.

## Ideas para agregación de scorecards

A través de múltiples fixtures, seguir:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Extensión sugerida del fixture

Cada fixture debe incluir:

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

## Primer fixture

El primer fixture es el ejemplo esloveno de revisión de IA sobre modalidad y terminología:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Páginas relacionadas

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
