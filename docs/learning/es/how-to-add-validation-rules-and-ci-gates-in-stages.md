---
title: "Cómo añadir reglas de validación y controles de CI por etapas"
summary: >-
  Esta guía explica cómo añadir reglas de validación y comprobaciones de CI de forma incremental para que un proyecto pueda mejorar la consistencia y reducir la deriva sin intentar automatizarlo todo de una vez.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Cómo añadir reglas de validación y controles de CI por etapas

## Resumen

Esta guía explica cómo añadir reglas de validación y comprobaciones de CI de forma incremental para que un proyecto pueda mejorar la consistencia y reducir la deriva sin intentar automatizarlo todo de una vez.

## Por qué importa la aplicación por etapas

Los equipos suelen saber que necesitan una validación más sólida, pero cometen uno de dos errores.

O bien dejan los controles de calidad informales durante demasiado tiempo, o bien intentan introducir de golpe un sistema de CI grande y rígido y generan frustración.

Un enfoque por etapas funciona mejor.

Permite que el proyecto convierta expectativas de revisión repetidas en comprobaciones repetibles con el tiempo.

## Empieza por los errores recurrentes

Las mejores reglas de validación suelen comenzar como hallazgos repetidos en revisiones humanas.

Pregúntate:

- qué errores siguen ocurriendo
- qué reglas es fácil olvidar
- qué estructura debe mantenerse coherente en todo el repositorio
- qué controles de calidad ahorrarían tiempo a quienes revisan

Si el mismo problema aparece varias veces, es un buen candidato para automatizarlo.

## La validación debe seguir la cadena de autoridad

Las reglas de validación deben reforzar expectativas documentadas, no sustituirlas.

Eso significa:

- la especificación define la regla
- la documentación explica la regla
- la validación comprueba la regla cuando es práctico
- la CI ejecuta la validación de forma constante

Esto evita que el proyecto haga cumplir reglas que en realidad nunca se decidieron.

## Un modelo de madurez útil

### Etapa 1: lista de revisión manual

Empieza por nombrar la regla de forma explícita.

Ejemplos:

- todo texto nuevo visible para el usuario debe poder localizarse
- la documentación debe separar el estado actual de los planes futuros
- los nuevos artículos públicos deben citar especificaciones y documentación, no archivos fuente

A estas alturas, la regla es real, pero sigue aplicándose por personas.

### Etapa 2: validación local ligera

Añade un script pequeño o una comprobación estructurada que quienes contribuyen puedan ejecutar localmente.

Ejemplos:

- detección de claves de configuración regional faltantes
- comprobaciones de presencia de archivos obligatorios
- validación de generación de metadatos
- comprobaciones de resolución de enlaces

Esta etapa reduce errores evitables antes incluso de que se ejecute la CI.

### Etapa 3: visibilidad en CI

Ejecuta la comprobación en CI, aunque al principio no bloquee.

Esto da al equipo visibilidad sobre la frecuencia con la que falla la regla y sobre si la propia comprobación necesita ajustes.

### Etapa 4: control bloqueante en CI

Una vez que la regla es estable y se entiende bien, conviértela en obligatoria.

En este punto, el proyecto ha pasado de una expectativa informal a un estándar exigible.

## Qué automatizar primero

Los buenos candidatos iniciales suelen ser:

- coherencia estructural
- archivos obligatorios
- integridad de la localización
- validez de formato o sintaxis
- enlaces internos rotos
- citas editoriales prohibidas

Para la publicación multilingüe, trata el contenido visible para la persona lectora en idiomas mezclados como uno de los primeros controles de CI de mayor valor. Una página con un título localizado pero un resumen en inglés o etiquetas en inglés no está parcialmente lograda. Está incompleta.

Estas comprobaciones suelen ser baratas, objetivas y de gran valor.

## Qué no forzar demasiado pronto

Algunas comprobaciones son valiosas, pero pueden necesitar tiempo antes de convertirse en controles estrictos.

Ejemplos:

- corrector ortográfico en muchos idiomas
- comprobaciones de capturas o regresión visual
- comprobaciones de accesibilidad cuyo ajuste sigue en curso
- reglas de estilo o redacción que todavía no son estables

Pueden empezar como señales informativas antes de hacerse obligatorias.

## Ejemplos de Let Books

El repositorio ya documenta varios patrones de validación, entre ellos:

- pruebas básicas de localización
- validación de sintaxis JSON
- comprobaciones de archivos obligatorios
- generación de metadatos SEO
- corrector ortográfico y linting opcionales
- automatización de despliegue

La documentación y las guías de estilo también definen reglas editoriales que con el tiempo pueden convertirse en objetivos de validación, como usar las especificaciones y la documentación como evidencia canónica para artículos públicos.

Eso hace que Let Books sea un buen ejemplo de aplicación incremental en lugar de un proceso de todo a la vez.

## Un flujo práctico para convertir reglas

Usa este patrón al añadir una nueva regla de validación:

1. identifica el problema de revisión que se repite
2. escribe la regla con claridad en la documentación o guía
3. añade un script local o una comprobación si es práctico
4. ejecútalo en CI como retroalimentación visible
5. conviértelo en bloqueante solo cuando sea estable

Esto genera menos fricción que introducir un control estricto antes de que el equipo comprenda la regla.

## Preguntas que hacer antes de añadir un control

1. ¿La regla está documentada con claridad?
2. ¿La comprobación es lo bastante fiable como para confiar en ella?
3. ¿Quienes contribuyen entenderán cómo corregir los fallos?
4. ¿El valor de la comprobación justifica la fricción?
5. ¿Debería empezar solo como advertencia antes de ser obligatoria?

## Los proyectos asistidos por IA lo necesitan aún más

La IA aumenta el volumen de cambios y la velocidad del cambio. Eso significa más oportunidades de inconsistencia.

También hace que la retroalimentación rápida sea más valiosa. La pregunta práctica a menudo no es si la IA puede producir un primer intento perfecto. La pregunta más útil es si el entorno puede identificar de forma fiable el siguiente problema que hay que resolver.

La validación y la CI no están para frenar a los equipos. Están para evitar que la velocidad borre límites importantes.

En el trabajo guiado por especificaciones, el objetivo no es la automatización máxima. El objetivo es reforzar de forma fiable las reglas que más importan.

## La lección duradera

Los sistemas de validación más sólidos normalmente no aparecen completamente formados. Crecen al convertir juicios humanos repetidos en comprobaciones documentadas, revisables y exigibles.

Ese camino por etapas suele ser la forma más realista de hacer un proyecto más estricto sin volverlo frágil.

## Lista de comprobación para remediación desde el origen

Cuando falla una regla de validación:

1. inspecciona primero el Markdown de origen
2. inspecciona después los metadatos localizados
3. inspecciona las entradas de generación y los registros
4. regenera los artefactos
5. inspecciona el HTML generado solo después de las comprobaciones a nivel de origen

No corrijas la salida generada si la localización de origen está incompleta.

## Lecturas adicionales

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/es/spec-driven-development.md`
- `../blog/es/documentation-is-part-of-the-product.md`
