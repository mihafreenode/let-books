---
article_id: spec-driven-development-in-let-books
canonical_language: es
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Desarrollo guiado por especificaciones en Let Books
summary: Cómo Let Books ya utiliza especificación, directrices de implementación, documentación, límites de la demo y reglas de verificación como sistema de desarrollo guiado por especificaciones.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-in-let-books.md
status: draft
---

# Desarrollo guiado por especificaciones en Let Books

Let Books es un caso de estudio útil del desarrollo guiado por especificaciones porque el repositorio ya contiene varias capas de intención de producto, y no solo artefactos de implementación.

El proyecto aún no es una aplicación alojada completa. Actualmente incluye una especificación de producto, directrices de implementación, documentación pública y una demo estática local. Por eso es un buen ejemplo de cómo un proyecto puede mantenerse coherente incluso antes de que exista la plataforma final de producción.

## La capa de especificación

`AGENTS.md` es la especificación central del producto. Define el propósito del proyecto, el modelo de dominio, los flujos de trabajo, los límites de alcance, la dirección de localización, la privacidad, la opcionalidad de la IA y los criterios de aceptación.

Responde a preguntas como:

- por qué existe el proyecto
- qué flujos de trabajo son de primera clase
- qué debe funcionar sin IA
- qué son ideas futuras y no compromisos actuales
- qué cuenta como una primera demo exitosa

Esa es la diferencia entre una descripción general y una especificación real. Una especificación real limita las decisiones de implementación.

## La capa de directrices tácticas

`AGENTS-Implementation.md` añade una segunda capa. No sustituye la especificación del producto, sino que explica cómo debe realizarse hoy el trabajo en este repositorio.

Aquí entran reglas sobre denominación pública, documentación, sitio estático, localización, verificación y política de evidencia para la escritura pública. Esto es importante porque no toda regla es una verdad de producto. Algunas son tácticas, editoriales o específicas del repositorio.

## La capa del estado actual

`README.md` representa una tercera capa: una descripción honesta del estado actual.

Explica qué existe hoy, qué aún no existe, para qué sirve la demo estática y cómo se publica el sitio público. Eso ayuda a colaboradores, instituciones y revisores a no confundir ambición con implementación.

## La capa de documentación

`docs/` añade una cuarta capa. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` y las guías de estilo definen cómo debe organizarse, publicarse y verificarse el conocimiento.

Aquí el repositorio se convierte en algo más que una colección de archivos. Se convierte en una plataforma de conocimiento con:

- arquitectura de documentación
- reglas de evidencia editorial
- estructura de publicación multilingüe
- reglas de publicación y verificación

## La capa de demo

La demo estática es importante, pero deliberadamente no es la única autoridad. Las reglas del blog y de las fuentes ya distinguen entre documentación canónica y estado de implementación.

Eso significa que la demo puede verificar flujos de trabajo, revelar problemas de usabilidad y ayudar a explicar el proyecto a actores externos, sin convertirse por sí sola en la verdad final del producto.

## La capa de verificación

Let Books también documenta ya una forma de pensar la verificación. `docs/Development.md` y `docs/Deployment.md` describen pruebas smoke de localización, validación de archivos estructurados, generación de metadatos, archivos obligatorios, revisiones ortográficas y publicación automatizada.

No son solo detalles de herramientas. Son evidencia de que el proyecto trata la calidad como un sistema repetible.

## La lección principal

El desarrollo guiado por especificaciones no significa solo escribir un documento largo antes de programar. En la práctica significa construir una cadena fiable entre la intención del producto, las reglas tácticas, la documentación pública, la demo, la verificación y la publicación.

Let Books muestra que una cadena así puede existir incluso antes de una aplicación backend completa. Precisamente esa es una de las ventajas más fuertes del desarrollo guiado por especificaciones en el trabajo asistido por IA.

## Otros idiomas

- [English](../en/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
