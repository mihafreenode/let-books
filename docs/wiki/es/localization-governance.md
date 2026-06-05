---
title: "Gobernanza de la localización"
summary: >-
  La gobernanza de la localización define quién puede proponer, revisar, aprobar y disputar los cambios de contenido multilingüe.
topics:
  - governance
  - localization
  - terminology
---
# Gobernanza de la localización

## Resumen

La gobernanza de la localización define quién puede proponer, revisar, aprobar y disputar los cambios de contenido multilingüe.

## Áreas de gobernanza

- propiedad de la fuente
- funciones de mantenimiento por idioma
- aprobaciones terminológicas
- resolución de disputas
- seguimiento del estado de revisión
- seguimiento de ejemplos de revisión reutilizables
- vigencia de los artefactos de revisión
- obligaciones de documentación de herramientas
- calidad de la revisión en lengua materna

## Por qué es importante

Sin gobernanza, el contenido multilingüe deriva en tono, terminología y expectativas de calidad.

La gobernanza de revisión también debería definir cómo se almacenan y reutilizan los ejemplos de corrección asistidos por IA en formación, scorecards y trabajo de evaluación.

## Vigencia de los artefactos de revisión

La gobernanza debería exigir que los revisores distingan entre:

- Markdown fuente
- HTML generado
- salida del sitio desplegado
- salida renderizada en el navegador

Antes de aprobar la paridad, los revisores deberían confirmar que los artefactos generados inspeccionados se regeneraron a partir del estado actual del repositorio.

## Gobernanza de herramientas

Los nuevos generadores, renderizadores, transformadores, validadores, herramientas de auditoría y otras herramientas de procesamiento de contenido deberían tratarse como artefactos de gobernanza, no solo como detalles de implementación.

No están completos hasta que:

- su propósito y sus límites estén documentados
- sus reglas y heurísticas no obvias estén explicadas
- la documentación pertinente de flujos de trabajo y validación esté actualizada
- los responsables de mantenimiento puedan interpretar advertencias, fallos y puntos ciegos sin reconstruir la intención solo a partir del código

## Calidad de la revisión en lengua materna

La gobernanza de la localización debería exigir revisión no solo por corrección, sino también por una expresión natural en lengua materna.

El estándar es que un documento localizado debe leerse como si se hubiera escrito originalmente en el idioma de destino.

Eso significa que los revisores deberían tratar lo siguiente como hallazgos de calidad:

- estructura oracional inglesa literal
- traducción directa de modismos ingleses
- lenguaje de gobernanza o corporativo que suena traducido
- terminología que conserva innecesariamente la redacción de origen

La gobernanza también debería dar prioridad a esta revisión primero para:

- contenido recién creado
- contenido ampliado recientemente
- contenido que se está editando actualmente

El contenido localizado más antiguo debería mejorarse después de forma progresiva con el tiempo, en lugar de mediante una única reescritura de todo el repositorio.

## Páginas relacionadas

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
