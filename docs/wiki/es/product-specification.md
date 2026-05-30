---
title: "Especificación del producto"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Especificación del producto

## Resumen

Una especificación del producto define para qué existe un producto, qué debe hacer, qué límites debe respetar y qué resultados cuentan como éxito.

## Rol

La especificación del producto es la descripción práctica de más alto nivel del comportamiento previsto del producto.

Debe responder a preguntas como:

- por qué existe el producto
- para quién es
- qué flujos de trabajo son de primera clase
- qué debe funcionar incluso en condiciones de fallo
- qué está explícitamente fuera de alcance
- qué criterios de aceptación definen una demo o una versión significativa

## Qué pertenece a una especificación del producto

El contenido típico incluye:

- propósito del producto
- filosofía central
- modelo de dominio
- definiciones de flujos de trabajo
- expectativas de privacidad y seguridad
- no objetivos
- orientación sobre la secuencia de implementación cuando afecta al alcance o al orden de entrega
- criterios de aceptación

La especificación debe centrarse en la verdad del producto, no en cada detalle local de implementación.

## Qué normalmente no pertenece ahí

Estos elementos suelen ir en otro lugar, salvo que afecten directamente a compromisos del producto:

- convenciones temporales del repositorio
- configuración local de herramientas
- decisiones estrechas de pulido de interfaz
- orientación puntual de depuración
- mecánicas editoriales o de publicación que no cambian el modelo del producto

## Por qué importa en el trabajo asistido por IA

La IA puede generar implementaciones plausibles muy rápido. Sin una especificación clara del producto, esa implementación puede optimizar la conveniencia en lugar de la intención.

La especificación ofrece a revisores y colaboradores un estándar estable para decidir si la salida generada sigue perteneciendo al producto previsto.

## Contexto de Let Books

En Let Books, `AGENTS.md` es la especificación principal del producto.

Define:

- el propósito del proyecto
- el modelo de dominio y de flujos de trabajo
- la dirección de multiinquilinato y localización
- los principios de flujo manual y de IA opcional
- los criterios de aceptación para la primera demo

Eso lo convierte en algo más que una visión general. Es la principal autoridad de producto del repositorio.

## Páginas Relacionadas

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../learning/how-to-write-a-spec-that-ai-can-follow.md`
