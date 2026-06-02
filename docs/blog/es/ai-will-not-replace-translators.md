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
title: La IA no sustituirá a los traductores
summary: Por qué la IA cambia los flujos de trabajo de traducción, pero no elimina la necesidad de juicio lingüístico humano, contexto cultural y revisión.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/es/ai-will-not-replace-translators.md
status: draft
---

# La IA no sustituirá a los traductores

La IA ya ha cambiado el trabajo de traducción. Puede producir rápidamente borradores utilizables, ampliar la cobertura y reducir el coste de la primera pasada de localización. Eso es un progreso real.

No es lo mismo que sustituir a los traductores.

## Lo que siguen haciendo los traductores humanos

Los revisores humanos deciden si una traducción es:

- lo bastante precisa para el contexto
- natural en la lengua de destino
- adecuada para formulaciones sensibles
- coherente con la terminología del proyecto
- accesible para la audiencia prevista

No son retoques finales opcionales. Forman parte de la calidad.

## Dónde ayuda más la IA

La IA es más fuerte cuando se usa para:

- crear borradores
- sugerir alternativas
- acelerar la ampliación de glosarios
- reducir la cantidad de material sin traducir
- sacar a la luz posibles incoherencias

## Por qué la confianza excesiva es peligrosa

El mayor riesgo de la traducción con IA no es solo el error. Es la confianza sin revisión. El texto generado por máquina puede parecer fluido y aun así estar equivocado, ser culturalmente inadecuado o terminológicamente inestable.

## Un ejemplo concreto de revisión en esloveno

Un patrón útil es la traducción que conserva el significado general pero aun así no supera la revisión de un hablante nativo.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Qué cambió:

- la modalidad agramatical se corrigió a un esloveno natural
- se normalizó un orden de palabras incómodo
- la redacción de la política se reescribió desde un adjetivo literal hacia una formulación más adecuada para el dominio

Este es exactamente el tipo de ejemplo que explica por qué la revisión humana sigue importando. El significado estaba cerca, pero la gramática, la modalidad, la terminología y el registro seguían necesitando corrección de un hablante nativo.

Incluso cuando se conserva el significado general, las traducciones generadas por IA pueden requerir revisión de hablantes nativos para corregir problemas sutiles de gramática, modalidad, terminología y registro específico del dominio. Estos problemas suelen ser difíciles de detectar solo con métricas automatizadas de calidad.

## Un ejemplo por cada categoría de revisión

Diferentes categorías de hallazgos de revisión requieren distintos tipos de juicio humano.

### Modalidad y lenguaje de políticas

Borrador original de la IA:

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Corrección de un hablante nativo:

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Lección:

- preservar el significado no basta cuando la gramática, la modalidad y la redacción de la política siguen sonando mal para hablantes nativos

### Optimización del texto fuente para la localización

Encabezado original en inglés:

`The hidden exclusion of English-only systems`

Encabezado mejorado en inglés:

`Why English-only systems exclude people`

Lección:

- algunos problemas de localización deberían resolverse mejorando el texto fuente en lugar de obligar a cada lengua de destino a compensar una formulación inglesa demasiado comprimida

### Falso amigo en terminología técnica

Expresión original en inglés:

`benchmark fixtures`

Localización eslovena incorrecta:

`primerjalne napeljave`

Localización eslovena mejorada:

`referenčni primeri za primerjalno vrednotenje`

Lección:

- los términos técnicos deben traducirse según su significado de dominio; en contextos de prueba y evaluación, `fixture` significa un ejemplo de referencia reutilizable o un caso de prueba, no infraestructura física

## Conclusión duradera

El futuro no es traductor contra IA. El futuro práctico es la localización asistida por IA, con etapas de revisión claras y expectativas de calidad transparentes.

## Páginas relacionadas

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Otros idiomas

El inglés es la lengua canónica de la primera publicación de este artículo. Las rutas listas para traducción están reservadas para todas las localizaciones compatibles de Let Books.
