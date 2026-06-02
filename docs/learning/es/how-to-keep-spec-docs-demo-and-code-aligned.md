---
title: "Cómo mantener alineados la especificación, la documentación, la demo y el código"
summary: >-
  Esta guía describe un flujo de trabajo práctico para mantener alineados con el tiempo la especificación del producto, la documentación, el comportamiento de la demo y el trabajo de implementación.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Cómo mantener alineados la especificación, la documentación, la demo y el código

## Resumen

Esta guía describe un flujo de trabajo práctico para mantener alineados con el tiempo la especificación del producto, la documentación, el comportamiento de la demo y el trabajo de implementación.

## El problema central

La deriva del producto rara vez empieza con un error dramático. Suele comenzar con pequeños desajustes.

Ejemplos:

- la demo añade un nuevo flujo de trabajo pero la especificación nunca se actualiza
- la documentación describe una función que ya no se comporta así
- el código implementa un atajo conveniente que viola una regla del producto
- las comprobaciones de validación solo hacen cumplir la sintaxis, no la intención del producto

La IA puede acelerar todo esto si el flujo de alineación es débil.

## El modelo de alineación

Usa este orden de autoridad:

1. especificación del producto
2. guía de implementación
3. documentación del estado actual
4. comportamiento de la demo o de la aplicación
5. pruebas y reglas de validación

Las capas inferiores deben respaldar a las superiores. Si entran en conflicto, actualiza la cadena de forma intencionada en lugar de dejar que el artefacto más visible gane por defecto.

## Flujo de trabajo recomendado

### 1. Empieza por el cambio en la especificación

Si cambia un flujo de trabajo visible para el usuario o una regla del producto, actualiza primero la especificación o guía correspondiente.

Usa:

- `AGENTS.md` para reglas y flujos de trabajo a nivel de producto
- `AGENTS-Implementation.md` para reglas tácticas del repositorio y de la entrega

### 2. Actualiza la documentación del estado actual

Si el cambio afecta a lo que existe ahora, actualiza la documentación que describe el estado actual.

Ejemplos típicos:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- contenido nuevo o revisado de aprendizaje, wiki o blog cuando corresponda

### 3. Actualiza la demo o la implementación

Solo después de que la intención esté clara se debe cambiar la demo o la aplicación.

Esto ayuda a evitar el patrón habitual en el que un prototipo se convierte silenciosamente en la fuente de verdad.

### 4. Añade o actualiza la validación

Después pregunta qué se puede comprobar automáticamente.

Ejemplos:

- integridad de claves de localización
- presencia de archivos obligatorios
- generación de metadatos
- validación de enlaces
- pruebas específicas del flujo de trabajo

No todas las reglas pueden automatizarse de inmediato, pero las reglas importantes no deberían depender solo de la memoria.

### 5. Revisa con respecto a la especificación, no solo al resultado

Al revisar cambios, no te quedes en:

- funciona
- se ve bien
- pasan las pruebas

Pregunta también:

- coincide con el flujo de trabajo documentado
- preserva el límite de producto requerido
- la documentación y la presentación del estado actual siguieron siendo honestas

## Cómo tratar los descubrimientos de la demo

A veces la demo enseña al equipo algo mejor que la especificación original.

Eso es útil. La respuesta correcta es:

1. documentar el descubrimiento
2. decidir si el cambio de flujo de trabajo es intencionado
3. actualizar la especificación y la documentación
4. mantener la implementación alineada con la decisión actualizada

La respuesta incorrecta es dejar que la demo gane en silencio porque ya existe.

## Cómo tratar la implementación asistida por IA

Con IA, este flujo de trabajo se vuelve aún más importante porque los asistentes suelen optimizar la plausibilidad local.

Un buen ciclo de alineación es:

1. escribir o actualizar la especificación
2. generar la implementación
3. comparar el resultado con la especificación
4. actualizar la documentación si cambió el comportamiento actual
5. añadir validación cuando sea práctico

## Ejemplo de Let Books

El repositorio ya contiene una cadena de alineación útil:

- `AGENTS.md` para la dirección del producto
- `AGENTS-Implementation.md` para reglas tácticas
- `README.md` para la presentación del estado actual
- `docs/` para reglas de conocimiento y publicación
- documentación de despliegue y desarrollo para la guía de validación

Esa estructura debe usarse de forma intencionada siempre que se añadan nuevas funciones, documentación o explicaciones públicas.

## Lista de comprobación

Antes de fusionar un cambio importante, comprueba:

1. ¿La regla o el flujo de trabajo del producto quedó documentado con claridad?
2. ¿La documentación del estado actual sigue coincidiendo con la realidad?
3. ¿La demo o la implementación reflejan la regla pretendida?
4. ¿Hay al menos un mecanismo de validación o revisión que proteja el cambio?
5. ¿Otra persona colaboradora podría entender más tarde la decisión?

## Lecturas adicionales

- `../spec-driven-content-program.md`
- `../wiki/es/demo-spec-alignment.md`
- `../wiki/es/spec-driven-development.md`
- `../blog/es/spec-driven-development-in-let-books.md`
