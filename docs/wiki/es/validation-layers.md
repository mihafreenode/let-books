---
title: "Capas De Validación"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Capas De Validación

## Resumen

Las capas de validación son las distintas formas en que un proyecto comprueba si la implementación, la documentación y los artefactos de entrega siguen coincidiendo con las reglas previstas y las expectativas de calidad.

## Por qué importan las capas

Ningún método único de validación es suficiente.

- la documentación por sí sola no impone comportamiento
- las pruebas por sí solas pueden validar supuestos equivocados
- la CI por sí sola no puede definir las reglas que debe hacer cumplir

Un enfoque por capas es más sólido porque cada capa detecta una clase distinta de deriva.

## Capas de validación comunes

### 1. Especificación y directrices

La primera capa define la regla.

Sin esta capa, las comprobaciones posteriores pueden ser estrictas pero arbitrarias.

### 2. Revisión manual

La revisión humana comprueba la intención, los casos límite y el significado del producto que quizá todavía no estén automatizados.

### 3. Validación local

Los scripts y las comprobaciones estructuradas detectan problemas rápidos y repetibles antes de que los cambios lleguen a la CI.

### 4. Pruebas

Las pruebas ejecutables verifican el comportamiento esperado, pero solo cuando están alineadas con la especificación.

### 5. Puertas de CI

La CI hace que las comprobaciones sean repetibles y visibles entre colaboradores y entornos.

### 6. Comprobaciones de despliegue

Los flujos de despliegue confirman que los artefactos construidos siguen siendo publicables y estructuralmente sólidos.

## Cómo deben relacionarse las capas

Las capas deben reforzarse entre sí en este orden:

- los documentos y las especificaciones definen expectativas
- la revisión interpreta esas expectativas en contexto
- los scripts de validación y las pruebas automatizan las partes estables de la revisión
- la CI ejecuta esas comprobaciones de forma coherente
- el despliegue garantiza que la salida realmente pueda entregarse

## Buenos objetivos tempranos de validación

Ejemplos de candidatos sólidos tempranos incluyen:

- presencia de archivos requeridos
- completitud de la localización
- validez sintáctica
- enlaces internos rotos
- citas editoriales prohibidas
- generación correcta de metadatos

Estas comprobaciones tienden a ser objetivas y baratas.

## Contexto de Let Books

El repositorio Let Books ya documenta varias capas, incluidas:

- reglas de producto e implementación en `AGENTS.md` y `AGENTS-Implementation.md`
- validación de desarrollo y despliegue en `docs/Development.md` y `docs/Deployment.md`
- reglas editoriales de evidencia en `docs/blog/README.md` y `docs/sources/README.md`

Eso convierte la validación en un sistema documentado y no solo en una aspiración futura.

## Páginas Relacionadas

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../learning/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../blog/en/documentation-is-part-of-the-product.md`
