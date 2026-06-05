---
title: "Garantía de calidad de la traducción"
summary: >-
  La QA de traducción combina validación automatizada, corrección ortográfica, revisión terminológica, comprobaciones de accesibilidad y juicio humano.
topics:
  - translation-quality
  - qa
  - localization
---
# Garantía de calidad de la traducción

## Resumen

La QA de traducción combina validación automatizada, corrección ortográfica, revisión terminológica, comprobaciones de accesibilidad y juicio humano.

## Controles comunes

- traducciones faltantes
- filtración de inglés
- integridad de la localización de cara al lector
- paridad estructural frente a la salida generada recientemente
- legibilidad en lengua materna y expresión natural
- discrepancias en los marcadores de posición
- enlaces rotos
- deriva del glosario
- cobertura del texto de accesibilidad
- paridad de capturas de pantalla y diagramas

## Requisito de salida generada recientemente

Antes de la revisión de paridad estructural, la revisión semántica o la comparación manual de artículos:

1. regenere el sitio a partir del estado actual del repositorio
2. ejecute los validadores sobre la salida generada actual
3. inspeccione los artefactos HTML generados
4. solo entonces realice la evaluación manual de paridad

Esta regla existe porque el Markdown fuente y la salida generada pueden divergir temporalmente durante el desarrollo, y los hallazgos de QA deben basarse en los artefactos actuales en lugar de en archivos generados obsoletos.

## Revisión de paridad estructural

La revisión de paridad estructural debe buscar pérdidas de valor para el lector incluso cuando el artículo localizado todavía conserva en términos generales el significado.

Las señales típicas incluyen:

- ausencia de secciones principales
- jerarquía de encabezados colapsada
- ejemplos faltantes
- orientación práctica comprimida
- discusión reducida sobre gobernanza
- guía de revisión o validación abreviada

Las advertencias de los validadores de paridad estructural son avisos de revisión, no una prueba automática de una mala traducción. Deben interpretarse junto con el HTML generado y, cuando sea necesario, con la salida renderizada en el navegador.

## Revisión de la expresión en lengua materna

La QA de traducción también debe buscar texto que sea técnicamente correcto pero no lo que un hablante nativo elegiría de forma natural.

Esto incluye:

- estructura oracional inglesa directa
- traducción directa de modismos ingleses
- redacción que suena traducida en lugar de redactada originalmente
- terminología que todavía revela el idioma de origen

Ejemplos de este patrón incluyen frases equivalentes a:

- contenido candidato
- estrategia de validación
- documento del flujo de trabajo
- herramientas cuidadosamente seleccionadas
- habilidades cuidadosamente seleccionadas

No siempre se trata de errores de traducción. A menudo son casos en los que un hablante nativo reescribiría instintivamente la frase.

## Prueba de preferencia del hablante nativo

En las secciones importantes de prosa, los revisores deberían preguntarse:

> Si un hablante nativo competente estuviera escribiendo esta idea desde cero, ¿probablemente la escribiría así?

Si no, los revisores deberían:

- preservar el significado
- preservar la paridad semántica
- preservar la paridad estructural
- mejorar la redacción

Esta prueba es especialmente útil para:

- introducciones
- resúmenes
- explicaciones educativas
- orientación práctica
- debates de gobernanza
- conclusiones

## Revisión de la expresión natural

Trate la redacción técnicamente correcta pero poco natural como un problema de calidad.

Los revisores deberían preferir formulaciones que suenen escritas de forma natural en el idioma de destino, incluso cuando la traducción original sea comprensible.

El objetivo no es solo una traducción correcta. El objetivo es un documento que se sienta como si hubiera sido escrito originalmente para lectores nativos.

Las mejoras de lenguaje natural no deben debilitar:

- la paridad semántica
- la paridad estructural
- la cobertura educativa
- los ejemplos
- la orientación práctica
- la guía de gobernanza

## Validador de localización orientado al lector

Una clase de validadores debería hacer fallar explícitamente la CI cuando una página parece localizada pero aún expone contenido orientado al lector en el idioma de origen.

Ejemplos que deberían fallar:

- título localizado con resumen en inglés
- artículo localizado con etiquetas en inglés
- artículo localizado con títulos o listas en inglés
- artículo localizado con avisos destacados o leyendas en inglés
- artículo localizado con etiquetas de diagramas en inglés o texto alternativo
- tarjetas `related-content` en idiomas mixtos

Esta es una condición de fallo, no simplemente una advertencia, porque los lectores experimentan esas páginas como visiblemente inacabadas.

## Auditoría de clases de defectos

La QA de traducción debe mantener clases de defectos explícitas con los siguientes campos:

- descripción
- recuento de ocurrencias
- causa raíz
- cobertura del validador
- riesgo de recurrencia
- plan de cierre

Las categorías requeridas incluyen:

- resúmenes no traducidos
- cuerpos de texto no traducidos
- publicación de borradores con marcadores de posición
- metadatos no traducidos
- publicación en idiomas mixtos
- clases futuras descubiertas

Una clase solo se cierra cuando su recuento llega a cero y la CI impide que regrese sin fallar.

## Evidencia de revisión humana

La QA de traducción también debe conservar registros breves de revisión humana para correcciones representativas asistidas por IA.

Campos mínimos:

- texto original
- texto corregido
- categoría de error
- hipótesis de causa raíz
- justificación del revisor

Los hallazgos de revisiones de hablantes nativos deben conservarse como un corpus en crecimiento, no como notas aisladas de una sola vez. Los hallazgos repetidos deberían retroalimentar el diseño del validador, la guía para colaboradores y las futuras instrucciones para agentes de IA.

Antes de aprobar una traducción asistida por IA, los revisores deberían:

- leer las entradas pertinentes del corpus estructurado de hallazgos para ese idioma o tema
- comprobar los patrones recurrentes de defectos procedentes de revisiones humanas
- confirmar que el borrador actual no reintroduce problemas conocidos antes de la aprobación

Todo defecto reportado por un hablante nativo también debería evaluarse en cuanto a:

- corrección del contenido
- actualización de la guía de revisión
- actualización de la guía terminológica
- mejora del prompt
- oportunidad para un validador
- oportunidad para una prueba de regresión

Esto importa porque, incluso cuando se preserva el significado general, las traducciones generadas por IA pueden requerir la revisión de un hablante nativo para corregir problemas sutiles de gramática, modalidad, terminología y registro específico del dominio. Estos problemas suelen ser difíciles de detectar únicamente mediante métricas de calidad automatizadas.

Los errores concretos reportados no son solo orientativos. Cada uno debería terminar corregido, sistematizado, intencionalmente no resuelto con justificación, o todavía seguido explícitamente en el corpus de hallazgos.

## Taxonomía de errores de traducción de IA comunes

- gramática
- modalidad
- terminología
- registro
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

Para una evaluación repetible de la traducción con IA, use una rúbrica ligera de 0 a 3 en lugar de confiar únicamente en el criterio de aprobado/reprobado.

Dimensiones recomendadas:

- precisión del significado
- gramática y fluidez
- terminología y adecuación al dominio
- registro y estilo
- esfuerzo de revisión

Etiquetas de lanzamiento recomendadas:

- bloqueador
- revisión mayor
- revisión menor
- listo con aprobación de revisión

Esto crea datos compatibles con scorecards sin necesidad de un marco pesado de medición de localización.

## Páginas relacionadas

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/es/how-to-run-localization-qa-in-ci.md`
