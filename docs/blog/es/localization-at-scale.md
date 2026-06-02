---
article_id: localization-at-scale
canonical_language: en
language_variants:
  - ../en/localization-at-scale.md
  - ../sl/localization-at-scale.md
  - ../hr/localization-at-scale.md
  - ../bs/localization-at-scale.md
  - ../sr-Latn/localization-at-scale.md
  - ../sr-Cyrl/localization-at-scale.md
  - ../mk/localization-at-scale.md
  - ../sq/localization-at-scale.md
  - ../de/localization-at-scale.md
  - ../it/localization-at-scale.md
  - ../fr/localization-at-scale.md
  - ../es/localization-at-scale.md
title: Localización a escala
summary: Por qué la localización debe tratarse como un sistema de ingeniería, accesibilidad, gobernanza y aprendizaje, y no como una tarea tardía de traducción.
topics:
  - localization
  - engineering-systems
  - governance
  - continuous-localization
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/es/localization-at-scale.md
status: draft
---

# Localización a escala

Muchos proyectos de software siguen tratando la localización como el momento en que el texto final en inglés se entrega a los traductores. Para el software moderno de interés público, ese modelo es demasiado pequeño.

La localización a escala es un sistema. Incluye redacción fuente, terminología, diagramas, textos de accesibilidad, metadatos lingüísticos, capturas de pantalla, revisión, QA, CI, gobernanza y mantenimiento a largo plazo.

## El fallo más común

El fallo más común es esperar demasiado.

Cuando un proyecto decide admitir varios idiomas, la arquitectura de la información, la navegación, las capturas y los supuestos de prueba suelen estar ya modelados solo para el inglés. Entonces traducir se vuelve costoso, porque el sistema nunca se diseñó para soportar bien más de un idioma.

## Por qué el problema no es solo la traducción

Una persona multilingüe no solo lee etiquetas de botones. También experimenta:

- navegación
- validación de formularios
- capturas de pantalla
- diagramas
- texto alternativo
- subtítulos
- ejemplos educativos
- cambio de idioma en lectores de pantalla

Si todo eso sigue estando solo en inglés, el producto no está realmente localizado.

## Por qué importa para Let Books

Let Books está diseñado explícitamente para colecciones multilingües de libros educativos y académicos en Eslovenia, los países de la antigua Yugoslavia y la región en general. El proyecto ya menciona inglés, esloveno, croata, bosnio, serbio latino, serbio cirílico, macedonio, albanés, alemán, francés, italiano y español como idiomas objetivo.

Eso significa que la localización no es una capa final opcional. Forma parte de la definición del producto.

## Un modelo práctico

Un modelo práctico de localización a escala suele tener cinco capas.

1. escribir una fuente fácil de traducir
2. definir terminología y gobernanza
3. generar o mantener variantes lingüísticas estructuradas
4. comprobar enlaces, marcadores, Unicode y accesibilidad
5. mejorar las traducciones por etapas en lugar de fingir que son perfectas desde el principio

## El papel de la IA

La IA ayuda. Reduce el coste de los primeros borradores, detecta deriva terminológica y amplía la cobertura documental. Pero no elimina la necesidad de revisión, comprobaciones de accesibilidad ni criterio lingüístico.

Por eso los sistemas maduros de localización son cada vez más asistidos por IA, no AI-only.

## Conclusión duradera

Si un proyecto quiere participación multilingüe, la localización debe formar parte del diseño del sistema y no ser un paso tardío de exportación.

## Páginas relacionadas

- `../../wiki/localization-at-scale.md`
- `../../wiki/localization-maturity-model.md`
- `../../learning/how-to-build-a-localization-pipeline.md`

## Otros idiomas

El inglés es la lengua canónica de la primera publicación de este artículo. Las rutas listas para traducción están reservadas para todas las localizaciones compatibles de Let Books.
