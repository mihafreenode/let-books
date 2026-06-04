---
title: "Gobernanza de la localización"
summary: >-
  La gobernanza de la localización define quién puede proponer, revisar, aprobar y disputar cambios de contenido multilingüe.
topics:
  - governance
  - localization
  - terminology
---
# Gobernanza de la localización

## Resumen

La gobernanza de la localización define quién puede proponer, revisar, aprobar y disputar cambios de contenido multilingüe.

## Áreas de gobernanza

- propiedad de la fuente
- roles de mantenedor del idioma
- aprobaciones de terminología
- resolución de disputas
- seguimiento del estado de revisión
- seguimiento reutilizable de ejemplos de reseñas
- vigencia de los artefactos de revisión
- obligaciones de documentación de herramientas

## Por qué es importante

Sin gobernanza, el contenido multilingüe pierde tono, terminología y expectativas de calidad.

La gobernanza de la revisión también debe definir cómo se almacenan y reutilizan los ejemplos de corrección asistida por AI en el trabajo de capacitación, cuadros de mando y evaluación.

## Vigencia de los artefactos de revisión

La gobernanza debe exigir que quienes revisan distingan entre:

- Markdown fuente
- HTML generado
- salida del sitio desplegado
- salida renderizada en el navegador

Antes de aprobar la paridad, quienes revisan deben confirmar que los artefactos generados que están inspeccionando se regeneraron a partir del estado actual del repositorio.

## Gobernanza de herramientas

Los nuevos generadores, renderizadores, transformadores, validadores, herramientas de auditoría y otras herramientas de procesamiento de contenido deben tratarse como artefactos de gobernanza, no solo como detalles de implementación.

No están completos hasta que:

- su propósito y sus límites estén documentados
- sus reglas y heurísticas no evidentes estén explicadas
- la documentación relevante de flujos de trabajo y validación esté actualizada
- las personas mantenedoras puedan interpretar advertencias, fallos y puntos ciegos sin reconstruir la intención únicamente a partir del código

## Páginas Relacionadas

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
