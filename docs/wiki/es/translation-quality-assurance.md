---
title: "Garantía de calidad de la traducción"
summary: >-
  El control de calidad de la traducción combina validación automatizada, corrección ortográfica, revisión terminológica, comprobaciones de accesibilidad y juicio humano.
topics:
  - translation-quality
  - qa
  - localization
---
# Garantía de calidad de la traducción

## Resumen

El control de calidad de la traducción combina validación automatizada, corrección ortográfica, revisión terminológica, comprobaciones de accesibilidad y juicio humano.

## Controles comunes

- traducciones faltantes
- fuga inglesa
- integridad de la localización de cara al lector
- discrepancias en los marcadores de posición
- enlaces rotos
- deriva del glosario
- cobertura de texto de accesibilidad
- paridad de captura de pantalla y diagrama

## Validador de localización orientado al lector

Una clase de validador debería fallar explícitamente en CI cuando una página aparece localizada pero aún expone contenido de cara al lector en el idioma de origen.

Ejemplos que deberían fallar:

- título localizado con resumen en inglés
- artículo localizado con etiquetas en inglés
- artículo localizado con títulos o listas en inglés
- artículo localizado con leyendas o subtítulos en inglés
- artículo localizado con etiquetas de diagrama en inglés o texto alternativo
- tarjetas de contenido relacionado en varios idiomas

Esta es una condición de falla, no simplemente una advertencia, porque los lectores experimentan estas páginas como visiblemente inacabadas.

## Auditoría de clase de defecto

El control de calidad de la traducción debe mantener clases de defectos explícitas con:

- descripción
- recuento de ocurrencias
- causa raíz
- cobertura del validador
- riesgo de recurrencia
- plan de cierre

Las categorías requeridas incluyen:

- resúmenes no traducidos
- cuerpos no traducidos
- publicación de borrador de marcador de posición
- metadatos no traducidos
- publicación en idiomas mixtos
- futuras clases descubiertas

Una clase se cierra solo cuando su recuento llega a cero y CI impide que regrese sin fallar.

## Evidencia de revisión humana

El control de calidad de la traducción también debe preservar registros breves de revisión humana para correcciones representativas asistidas por IA.

Campos mínimos:

- texto original
- texto corregido
- categoría de error
- hipótesis de causa raíz
- justificación del revisor

Los resultados de las revisiones de hablantes nativos deben conservarse como un corpus en crecimiento, no como notas aisladas y únicas. Los hallazgos repetidos deberían retroalimentar el diseño del validador, la orientación de los contribuyentes y las futuras instrucciones de los agentes de IA.

Esto es importante porque incluso cuando se preserva el significado general, las traducciones generadas por IA pueden requerir la revisión de un hablante nativo para corregir problemas sutiles en gramática, modalidad, terminología y registro específico del dominio. Estos problemas suelen ser difíciles de detectar únicamente mediante métricas de calidad automatizadas.

## Taxonomía de errores de traducción de IA comunes

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

## Puntuación de referencia ligera

Para una evaluación repetible de la traducción de IA, utilice una rúbrica ligera de 0 a 3 en lugar de confiar únicamente en el criterio de aprobación/rechazo.

Dimensiones recomendadas:

- significado precisión
- gramática y fluidez
- terminología y adecuación al dominio
- registro y estilo
- esfuerzo de revisión

Etiquetas de lanzamiento recomendadas:

- bloqueador
- revisión importante
- revisión menor
- listo con aprobación de revisión

Esto crea datos compatibles con cuadros de mando sin necesidad de un marco de medición de localización pesado.

## Páginas relacionadas

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/es/how-to-run-localization-qa-in-ci.md`