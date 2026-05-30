---
title: "Cómo Escribir Una Especificación Que La IA Pueda Seguir"
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Cómo Escribir Una Especificación Que La IA Pueda Seguir

## Resumen

Esta guía explica cómo escribir una especificación de producto o de funcionalidad que ayude a la implementación asistida por IA a mantenerse alineada con los objetivos reales del producto.

## Por qué es importante

La IA puede generar código rápidamente, pero funciona mejor cuando tiene límites claros. Si la especificación es vaga, a menudo rellenará los huecos con supuestos genéricos.

## Qué debe contener una buena especificación

- el propósito de la función
- los límites del alcance
- reglas no negociables
- comportamiento ante errores y ruta de respaldo
- criterios de aceptación

## Qué evitar

- objetivos vagos como «mejorar la UX»
- detalles de implementación sin propósito de producto
- mezclar ideas futuras con requisitos actuales
- supuestos ocultos sobre el usuario o los datos

## Patrón práctico

Usa este orden:

1. problema
2. usuario y contexto
3. flujo dentro del alcance
4. elementos fuera del alcance
5. reglas requeridas
6. comportamiento de respaldo
7. criterios de aceptación
8. notas de verificación

## Contexto de Let Books

`AGENTS.md`, `AGENTS-Implementation.md` y `README.md` ya muestran cómo una especificación por capas de este tipo también ayuda a los asistentes de IA.
