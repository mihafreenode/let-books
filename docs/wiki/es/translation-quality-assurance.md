---
title: "Garantía de calidad de la traducción"
summary: >-
  La traducción QA combina validación automatizada, revisión ortográfica, revisión terminológica, comprobaciones de accesibilidad y criterio humano.
topics:
  - translation-quality
  - qa
  - localization
---
# Garantía de calidad de la traducción

## Resumen

La traducción QA combina validación automatizada, revisión ortográfica, revisión terminológica, comprobaciones de accesibilidad y criterio humano.

## Controles comunes

- traducciones faltantes
- fuga inglesa
- discrepancias en los marcadores de posición
- enlaces rotos
- deriva del glosario
- cobertura de texto de accesibilidad
- paridad de captura de pantalla y diagrama

## Evidencia de revisión humana

La traducción QA también debe preservar breves registros de revisión humana para correcciones representativas asistidas por AI.

Campos mínimos:

- texto original
- texto corregido
- categoría de error
- hipótesis de causa raíz
- justificación del revisor

Esto es importante porque incluso cuando se preserva el significado general, las traducciones generadas por AI pueden requerir la revisión de un hablante nativo para corregir problemas sutiles en gramática, modalidad, terminología y registro específico del dominio. Estos problemas suelen ser difíciles de detectar únicamente mediante métricas de calidad automatizadas.

## Taxonomía de errores de traducción comunes AI

- gramática
- modalidad
- terminología
- registrarse
- fluidez
- traducción literal
- ambigüedad
- pérdida de contexto
- orden de las palabras
- colocación
- escritura u ortografía
- redacción de la política de dominio
- redacción de accesibilidad

## Páginas Relacionadas

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
