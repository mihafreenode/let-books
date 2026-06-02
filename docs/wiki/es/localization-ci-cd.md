---
title: "Localización CI y CD"
summary: >-
  La localización CI/CD valida el contenido multilingüe continuamente para que los recursos faltantes, los enlaces rotos y las regresiones de accesibilidad se detecten tempranamente.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Localización CI y CD

## Resumen

La localización CI/CD valida el contenido multilingüe continuamente para que los recursos faltantes, los enlaces rotos y las regresiones de accesibilidad se detecten tempranamente.

## Cheques deseados

- coherencia del inventario local
- validación de enlace
- generación de artículos y páginas
- corrector ortográfico donde esté disponible
- paridad de marcador de posición
- pruebas de humo de accesibilidad
- comprobaciones de cobertura de diagramas y capturas de pantalla

## Progresión de clase de defecto

La CI de localización debe realizar un seguimiento de ambos:

- `Localization Debt`
- `Open Defect Classes`

La deuda mide el trabajo restante en materia de fuente-contenido.

Las clases de defectos abiertos miden si el sistema aún puede permitir que reaparezca una categoría de problema.

Tan pronto como una clase de defecto llega a cero ocurrencias, su validador debe pasar de aviso a bloqueo cuando sea práctico.

Ejemplos:

- publicación de borrador de marcador de posición
- resúmenes no traducidos
- metadatos no traducidos
- cuerpos no traducidos
- publicación en idiomas mixtos

CI no es sólo un guardián. Es el mecanismo que evita que las clases de defectos cerradas se vuelvan a abrir silenciosamente.

## Orden de generación para la navegación del artículo.

El contrato de navegación de artículos públicos vigente es:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

La generación y validación deben realizarse en este orden:

1. generar artículo HTML
2. generar páginas de índice
3. Ejecute el posprocesamiento de navegación restante solo si aún es necesario
4. validar la salida

Si un validador aún espera el bloque heredado `topic-nav`, actualice el validador al contrato actual en lugar de parchear el HTML generado.

## Páginas relacionadas

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/es/how-to-run-localization-qa-in-ci.md`