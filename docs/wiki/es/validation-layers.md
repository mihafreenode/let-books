---
title: "Capas de validación"
summary: >-
  Las capas de validación son las diferentes formas en que un proyecto verifica si los artefactos de implementación, documentación y entrega aún coinciden con las reglas previstas y las expectativas de calidad.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Capas de validación

## Resumen

Las capas de validación son las diferentes formas en que un proyecto verifica si los artefactos de implementación, documentación y entrega aún coinciden con las reglas previstas y las expectativas de calidad.

## Por qué son importantes las capas

Ningún método de validación es suficiente.

- la documentación por sí sola no impone el comportamiento
- Las pruebas por sí solas pueden validar las suposiciones erróneas.
- CI por sí sola no puede definir las reglas que se supone debe hacer cumplir

Un enfoque por capas es más eficaz porque cada capa capta una clase diferente de deriva.

## Capas de validación comunes

### 1. Especificaciones y orientación

La primera capa define la regla.

Sin esta capa, los controles posteriores pueden ser estrictos pero arbitrarios.

### 2. Revisión manual

La revisión humana verifica la intención, los casos extremos y el significado del producto que aún no se pueden automatizar.

### 3. Validación local

Los scripts y las comprobaciones estructuradas detectan problemas rápidamente y repetibles antes de que los cambios lleguen a CI.

### 4. Pruebas

Las pruebas ejecutables verifican el comportamiento esperado, pero solo cuando están alineados con la especificación.

### 5. Puertas CI

CI hace que las comprobaciones sean repetibles y visibles entre contribuyentes y entornos.

### 6. Comprobaciones de implementación

Los flujos de trabajo de implementación confirman que los artefactos creados aún son publicables y estructuralmente sólidos.

## Cómo deben relacionarse las capas

Las capas deben reforzarse entre sí en orden:

- Los documentos y las especificaciones definen las expectativas.
- La revisión interpreta esas expectativas en contexto.
- Los scripts de validación y las pruebas automatizan partes estables de la revisión.
- CI ejecuta esas comprobaciones de forma consistente
- la implementación garantiza que la producción realmente pueda enviarse

## Buenos objetivos de validación temprana

Ejemplos de candidatos iniciales sólidos incluyen:

- presencia de archivo requerido
- integridad de la localización
- validez de sintaxis
- enlaces internos rotos
- citas editoriales prohibidas
- éxito en la generación de metadatos

Estos controles tienden a ser objetivos y económicos.

## Let Books contexto

El repositorio Let Books ya documenta varias capas, entre ellas:

- normas de producto y de implementación en `AGENTS.md` y `AGENTS-Implementation.md`
- validación de desarrollo e implementación en `docs/Development.md` y `docs/Deployment.md`
- normas de evidencia editorial en `docs/blog/README.md` y `docs/sources/README.md`
- guía de aprendizaje para la implementación de validación y CI por etapas

Eso hace que la validación sea un sistema documentado y no sólo una aspiración futura.

## Páginas relacionadas

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/es/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/es/documentation-is-part-of-the-product.md`