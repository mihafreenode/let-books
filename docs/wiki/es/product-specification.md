---
title: "Especificación de producto"
summary: >-
  Una especificación de producto define para qué sirve un producto, qué debe hacer, qué límites debe respetar y qué resultados se consideran éxito.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Especificación de producto

## Resumen

Una especificación de producto define para qué sirve un producto, qué debe hacer, qué límites debe respetar y qué resultados se consideran éxito.

## Rol

La especificación del producto es la descripción práctica de más alto nivel del comportamiento esperado del producto.

Debe responder preguntas como:

- por qué existe el producto
- para quién es
- qué flujos de trabajo son realmente centrales
- lo que debe funcionar incluso en condiciones de falla
- lo que está explícitamente fuera de alcance
- qué criterios de aceptación definen una demostración o lanzamiento significativo

## Qué pertenece a la especificación de un producto

El contenido de especificación típico incluye:

- propósito del producto
- filosofía central
- modelo de dominio
- definiciones de flujo de trabajo
- expectativas de privacidad y seguridad
- lo que no forma parte de los objetivos
- guía de secuencia de implementación cuando afecte el alcance o el orden de entrega
- criterios de aceptación

La especificación debe centrarse en lo que define de verdad al producto, no en cada detalle de implementación local.

## Lo que normalmente no pertenece allí

Estos elementos suelen pertenecer a otra parte, a menos que afecten directamente a los compromisos de productos:

- convenciones de repositorio temporal
- configuración de herramientas locales
- decisiones estrechas de pulido de la interfaz de usuario
- guía de depuración única
- Mecánica editorial o editorial que no cambia el modelo del producto.

## Por qué es importante el trabajo asistido por IA

La IA puede generar una implementación plausible muy rápidamente. Sin una especificación clara del producto, esa implementación puede optimizarse por conveniencia en lugar de por intención.

La especificación brinda a los revisores y contribuyentes un estándar estable para decidir si la producción generada aún pertenece al producto previsto.

## Let Books contexto

En Let Books, `AGENTS.md` es la especificación principal del producto.

Define:

- propósito del proyecto
- modelo de dominio y flujo de trabajo
- dirección de localización y multiinquilino
- flujo de trabajo manual y principios opcionales de IA
- criterios de aceptación para la primera demostración

Por eso es más que una visión general. Es la referencia principal sobre el producto en el repositorio.

## Páginas relacionadas

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/es/how-to-write-a-spec-that-ai-can-follow.md`
