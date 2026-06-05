---
title: "Cómo revisar trabajo asistido por IA frente a la especificación"
summary: >-
  Esta guía explica cómo revisar una implementación asistida por IA comprobándola frente a la especificación del producto, las reglas del flujo de trabajo, la documentación y las expectativas de validación, en lugar de juzgar solo si el resultado parece pulido o técnicamente plausible.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# Cómo revisar trabajo asistido por IA frente a la especificación

## Resumen

Esta guía explica cómo revisar una implementación asistida por IA comprobándola frente a la especificación del producto, las reglas del flujo de trabajo, la documentación y las expectativas de validación, en lugar de juzgar solo si el resultado parece pulido o técnicamente plausible.

## Por qué importa esto

La IA puede producir código, texto, pruebas y cambios de interfaz que parecen completos con mucha rapidez.

Esa velocidad crea un riesgo de revisión: quienes revisan pueden pasar sin darse cuenta de preguntarse "¿Es este el comportamiento correcto del producto?" a preguntarse "¿Esto parece razonable?".

No son la misma pregunta.

En el trabajo guiado por especificaciones, la revisión debería empezar por la alineación y solo después pasar a la calidad del código, el estilo y los detalles de implementación.

## Empieza por la fuente de verdad

Antes de revisar el resultado, identifica los documentos que definen el comportamiento previsto.

En el repositorio de Let Books, eso suele significar:

- `AGENTS.md` para reglas del producto, flujos de trabajo y alcance
- `AGENTS-Implementation.md` para restricciones tácticas de entrega
- `README.md` para la presentación del estado actual
- documentación relevante en `docs/` para publicación, verificación o guía de flujo de trabajo

Sin este paso, la revisión se vuelve fácilmente subjetiva y local.

## Revisa en el orden correcto

Usa este orden al revisar trabajo asistido por IA.

### 1. Alineación con el producto

Pregunta si el resultado coincide con el flujo de trabajo previsto para la persona usuaria y con el límite del producto.

Ejemplos:

- si la entrada manual sigue funcionando donde la especificación lo exige
- si el cambio preserva la separación entre copias físicas y registros bibliográficos
- si añade un comportamiento que nunca fue aprobado
- si presenta incorrectamente funciones opcionales de IA como obligatorias

Si la alineación con el producto es incorrecta, no tiene mucho valor dedicar primero mucho tiempo al pulido.

### 2. Alineación con la documentación

Pregunta si la documentación que rodea el cambio sigue describiendo la realidad de forma honesta.

Ejemplos:

- si se cambió un flujo de trabajo visible para el usuario sin actualizar la documentación
- si el README sigue describiendo correctamente el estado actual
- si las nuevas afirmaciones públicas coinciden con la posición del producto realmente documentada

Los cambios generados por IA a menudo modifican el comportamiento sin recordar actualizar la narrativa que lo rodea.

### 3. Validación y comportamiento de respaldo

Pregunta si el cambio preserva las expectativas de fallo y respaldo de la especificación.

Ejemplos:

- si el flujo de trabajo todavía puede completarse cuando falla un proveedor opcional
- si las entradas no válidas se manejan de forma explícita
- si los resultados de baja confianza o inciertos se tratan como sugerencias y no como hechos

Aquí es donde muchas implementaciones plausibles fallan la prueba real del producto.

### 4. Calidad técnica

Solo después de las comprobaciones anteriores deberías dedicar la mayor parte del tiempo a:

- claridad
- mantenibilidad
- nombres
- duplicación
- pruebas
- estructura

La calidad técnica sigue importando. Simplemente no debería estar por encima de la corrección del producto.

## Trampas habituales en la revisión

El trabajo asistido por IA tiende a crear varias trampas de revisión repetibles.

### La trampa del resultado pulido

El resultado se ve limpio, así que quienes revisan asumen que es correcto.

### La trampa del contexto cercano

El cambio coincide con la implementación existente más cercana, pero esa implementación cercana quizá ya se haya desviado.

### La trampa del alcance implícito

El asistente añade funciones, abstracciones o suposiciones que nunca se pidieron, y la persona revisora las acepta porque no parecen obviamente rotas.

### La trampa de las pruebas que pasan

Las pruebas pueden pasar porque validan el comportamiento generado, no porque validen el comportamiento del producto previsto.

## Una lista práctica de revisión

Para cada cambio sustancial asistido por IA, pregunta:

1. ¿Qué regla del producto o flujo de trabajo se supone que implementa este cambio?
2. ¿Qué especificación o documentación define esa regla?
3. ¿El resultado preserva las restricciones requeridas?
4. ¿Mantiene intacto el comportamiento de respaldo?
5. ¿La documentación sigue coincidiendo con el comportamiento resultante?
6. ¿Qué validación o pruebas respaldan el cambio?
7. ¿El asistente añadió algo que deba eliminarse por quedar fuera de alcance?

## Cómo revisar pruebas generadas

Las pruebas generadas son útiles, pero también deben revisarse frente a la especificación.

Pregunta:

- si las pruebas comprueban el flujo de trabajo previsto
- si cubren el comportamiento de respaldo
- si reflejan las condiciones límite documentadas
- si están afirmando un comportamiento de conveniencia que nunca se especificó

Esto es especialmente importante en el trabajo guiado por especificaciones porque una suite de pruebas débil puede fijar la deriva.

## Ejemplos de Let Books

Ejemplos de preguntas a nivel de especificación en este repositorio incluyen:

- si el flujo de trabajo sigue siendo útil sin servicios de IA de pago
- si la documentación del estado actual separa claramente el estado de la demo de los planes futuros de backend
- si la documentación pública evita tratar el código fuente como evidencia editorial canónica
- si los pasos de validación siguen formando parte del flujo de entrega en lugar de depender de memoria opcional

Esas preguntas son lo bastante específicas como para guiar la revisión, y eso es exactamente lo que una especificación debe permitir.

## La lección duradera

La revisión asistida por IA no consiste en comprobar si el asistente produjo algo impresionante. Consiste en comprobar si el resultado sigue perteneciendo al producto previsto.

La mejor pregunta de revisión normalmente no es "¿Esto funciona?". Es "¿Esto coincide con la especificación, incluidas las partes que es fácil olvidar?".

## Lecturas adicionales

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/es/spec-driven-development.md`
- `../blog/es/spec-driven-development-for-ai-projects.md`
