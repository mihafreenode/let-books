# Registros de revisión de traducción con IA

## Resumen

Esta guía explica cómo los revisores humanos deben documentar correcciones de traducciones generadas por IA para que los ejemplos puedan reutilizarse en gobernanza, entrenamiento, QA y evaluación.

## Por qué importa

Incluso cuando se preserva el significado general, las traducciones generadas por IA pueden requerir revisión de hablantes nativos para corregir problemas sutiles de gramática, modalidad, terminología y registro específico del dominio. Estos problemas suelen ser difíciles de detectar solo con métricas automatizadas de calidad.

## Formato obligatorio del registro de revisión

Cada ejemplo revisado debe capturar:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Usa esta plantilla:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Taxonomía de errores recomendada

Usa una o más de estas categorías cuando aplique:

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

## Guía para la hipótesis de causa raíz

Las notas del revisor no necesitan certeza completa. Una hipótesis breve basta si ayuda a revisores futuros y al trabajo de evaluación de modelos.

Hipótesis comunes incluyen:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Caso de estudio esloveno

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

## Lecciones reutilizables entre idiomas

- Una traducción puede preservar el significado general y aun así no cumplir las expectativas de calidad de hablantes nativos.
- Las construcciones modales son una debilidad común de la IA porque la equivalencia gramatical directa a menudo no se mantiene entre idiomas.
- El lenguaje de políticas y especificaciones de producto suele requerir formulación específica del dominio, no sinónimos de lengua general.
- Las comprobaciones automatizadas pueden detectar cadenas faltantes y placeholders rotos, pero a menudo pasan por alto registro, modalidad y deriva terminológica sutil.
- El razonamiento del revisor debe ser breve pero explícito para que los ejemplos puedan formar a revisores futuros y mejorar prompts o conjuntos de evaluación.

## Registro de recomendaciones

Añade ejemplos como este a estos recursos:

- materiales de formación para revisores de localización
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- conjuntos de datos para evaluación de traducción con IA
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- ejemplos de la guía de estilo
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- documentación del flujo human-in-the-loop
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- artículos y guías de buenas prácticas sobre localización a escala
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Uso sugerido de scorecards

Ejemplos de revisión como este pueden respaldar scorecards internas mediante el seguimiento de:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
