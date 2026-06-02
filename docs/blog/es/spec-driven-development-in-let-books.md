---
article_id: spec-driven-development-in-let-books
canonical_language: en
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

Esto importa porque responde a preguntas a las que el código por sí solo no puede responder con claridad:

- por qué existe el proyecto
- qué flujos de trabajo son de primera clase
- qué debe funcionar sin IA
- qué son ideas futuras y no compromisos actuales
- qué cuenta como una primera demo exitosa

Esa es la diferencia entre una descripción general y una especificación real. Una especificación real limita las decisiones de implementación.

## La capa de directrices tácticas

`AGENTS-Implementation.md` añade una segunda capa. No sustituye la especificación del producto, sino que explica cómo debe realizarse hoy el trabajo en este repositorio.

Entre los ejemplos se incluyen:

- reglas de denominación pública
- reglas de implementación de la documentación
- expectativas sobre los metadatos del sitio estático
- límites de la demo
- expectativas sobre localización y verificación
- política editorial de evidencia para la escritura pública

Esto importa en el trabajo asistido por IA porque no toda regla pertenece a la especificación de producto a largo plazo. Algunas reglas son tácticas, editoriales o específicas del repositorio. Mantener clara esa distinción reduce el ruido y evita que la especificación del producto se convierta en un depósito de detalles de implementación.

## La capa del estado actual

`README.md` representa una tercera capa: una descripción del estado actual.

Explica qué existe hoy, qué aún no existe, para qué sirve la demo estática y cómo se publica el sitio público. Esta es una parte clave de la alineación, porque los proyectos suelen fallar cuando los lectores confunden ambición con implementación.

En Let Books, el README diferencia explícitamente entre los entregables actuales y los planes futuros. Eso ayuda a colaboradores, instituciones y revisores a comprender la madurez del proyecto sin adivinar.

## La capa de documentación

La zona `docs/` añade una cuarta capa. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, las guías de estilo y la zona `sources` definen cómo debe organizarse, validarse y publicarse el conocimiento.

Aquí el repositorio se convierte en algo más que una colección de archivos. Se convierte en una plataforma de conocimiento con:

- arquitectura de documentación
- reglas de evidencia editorial
- estructura de publicación multilingüe
- reglas de publicación de documentación pública
- directrices de desarrollo y validación

Ese es exactamente el tipo de andamiaje que ayuda a que la entrega asistida por IA siga siendo trazable.

## La capa de demo

La demo estática es importante, pero deliberadamente no es la única autoridad. Las reglas del blog y de las fuentes ya distinguen entre documentación canónica y estado de implementación.

Eso significa que la demo puede verificar flujos de trabajo, revelar problemas de usabilidad y ayudar a explicar el proyecto a actores externos, sin convertirse por sí sola en la verdad final del producto.

Esa es una regla madura. Sin ella, los prototipos suelen convertirse en mecanismos accidentales de gobernanza. Un equipo empieza a copiar el prototipo porque existe, no porque refleje una decisión de producto aprobada.

## La capa de verificación

Let Books ya documenta también una forma de pensar la verificación.

`docs/Development.md` y `docs/Deployment.md` describen capas de validación como:

- pruebas smoke de localización
- validación de archivos estructurados
- generación de metadatos
- comprobaciones de archivos obligatorios
- revisión ortográfica opcional y linting
- automatización de despliegue

No son solo detalles de herramientas. Son evidencia de que el proyecto trata la calidad como un sistema repetible.

## Por qué esto importa para la entrega asistida por IA

Si un asistente de IA contribuye a Let Books, no necesita inventar el producto desde cero. El repositorio ya contiene una cadena de intención:

1. dirección del producto en `AGENTS.md`
2. reglas tácticas de entrega en `AGENTS-Implementation.md`
3. estado actual en `README.md`
4. reglas de conocimiento y publicación en `docs/`
5. estado del prototipo ejecutable en la demo estática
6. directrices de validación y publicación en la documentación de desarrollo y despliegue

Esa cadena no elimina los errores. Pero sí hace que sean más fáciles de detectar y revisar.

## La lección principal

El desarrollo guiado por especificaciones no significa solo escribir un largo documento de requisitos antes de empezar a programar.

En la práctica, significa construir una cadena fiable entre:

- la intención del producto
- las reglas tácticas
- la documentación pública
- las demos
- la validación
- la publicación

Let Books ya muestra que una cadena así puede existir incluso antes de que exista el producto backend completo.

Ese es uno de los argumentos más fuertes a favor del desarrollo guiado por especificaciones en el trabajo asistido por IA: cuanto más clara sea la cadena de intención, menos probable es que una salida rápida se convierta en confusión rápida.

## Otros idiomas

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
- [Español](../es/spec-driven-development-in-let-books.md)
