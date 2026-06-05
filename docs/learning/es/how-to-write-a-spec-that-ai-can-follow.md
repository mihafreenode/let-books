---
title: "Cómo escribir una especificación que la IA pueda seguir"
summary: >-
  Esta guía explica cómo escribir una especificación de producto o de funcionalidad que ayude a que la implementación asistida por IA siga alineada con objetivos reales del producto en lugar de desviarse hacia resultados genéricos.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Cómo escribir una especificación que la IA pueda seguir

## Resumen

Esta guía explica cómo escribir una especificación de producto o de funcionalidad para que la implementación asistida por IA siga alineada con los objetivos reales del producto en lugar de desviarse hacia resultados genéricos.

## Por qué importa esto

La IA puede generar código con rapidez, pero funciona mejor cuando la tarea tiene límites claros.

Si una especificación es vaga, la IA suele rellenar los huecos con valores por defecto plausibles:

- patrones de arquitectura comunes
- flujos de interfaz genéricos
- abstracciones innecesarias
- suposiciones inventadas sobre lo que debería hacer el producto

Ese resultado puede verse pulido y aun así estar equivocado.

## Qué debería incluir una especificación útil orientada a IA

### 1. Propósito del producto

Explica por qué existe la funcionalidad.

Mal:

> Añadir un formulario de libro.

Mejor:

> Añadir un formulario de entrada rápida que permita a una persona donante catalogar una copia física de un libro en segundos mientras está de pie junto a una estantería o una caja.

El propósito deja claro a quien implementa qué debe optimizar.

### 2. Límites de alcance

Indica qué está dentro del alcance y qué queda fuera.

Ejemplo:

- dentro del alcance: foto de portada, introducción de ISBN, ubicación de almacenamiento, guardar y continuar
- fuera del alcance: OCR, sincronización en la nube, flujo de revisión institucional

Esto evita que el asistente infle una tarea pequeña hasta convertirla en una mini plataforma.

### 3. Comportamiento requerido

Enumera las reglas no negociables.

Ejemplos del enfoque de Let Books:

- el flujo manual debe funcionar sin IA
- se deben permitir datos incompletos
- las copias físicas deben permanecer separadas de los registros bibliográficos
- el comportamiento visible para la persona usuaria debe seguir siendo localizable

Estas reglas importan más que el estilo de implementación.

### 4. Comportamiento de fallo y de respaldo

Las soluciones generadas por IA suelen optimizar el camino feliz. Una buena especificación explica qué ocurre cuando fallan sistemas opcionales.

Ejemplo:

- si falla la búsqueda de metadatos, la entrada manual sigue disponible
- si el OCR está desactivado, la entrada sigue funcionando
- si falla la validación de exportación, la persona usuaria recibe un informe claro en lugar de una importación parcial silenciosa

### 5. Criterios de aceptación

Escribe la condición de éxito en términos observables.

Ejemplo:

1. la persona usuaria selecciona una caja
2. la persona usuaria introduce o escanea un ISBN
3. la persona usuaria puede guardar aunque ningún proveedor de metadatos responda
4. el libro aparece en la ubicación seleccionada

Los criterios de aceptación ofrecen a las personas revisoras y a los sistemas de IA un objetivo estable.

## Qué evitar

- objetivos vagos como "mejorar la UX"
- detalle de implementación sin propósito de producto
- ideas futuras mezcladas y presentadas como requisitos actuales
- suposiciones ocultas sobre roles de usuario o calidad de los datos
- especificaciones basadas solo en nombres que no describen el flujo de trabajo

## Un patrón práctico de redacción

Usa esta estructura compacta al redactar una especificación de funcionalidad.

1. problema
2. usuario y contexto
3. flujo de trabajo dentro del alcance
4. elementos fuera del alcance
5. reglas requeridas
6. comportamiento de respaldo
7. criterios de aceptación
8. notas de verificación

## Cómo se aplica esto a Let Books

El repositorio ya demuestra este patrón en varios niveles:

- `AGENTS.md` define el propósito del producto, los flujos de trabajo y los criterios de aceptación
- `AGENTS-Implementation.md` define restricciones tácticas de entrega
- `README.md` separa el estado actual de la dirección futura

Ese enfoque por capas es útil porque la IA funciona mejor cuando la memoria del producto es explícita y revisable.

## Ejercicio

Toma una funcionalidad de Let Books, como el escaneo QR de cajas o la importación de decisiones desde Excel, y escribe una especificación de una página usando la estructura anterior.

Después pide a un asistente de programación que la implemente.

Luego revisa el resultado frente a la especificación antes de revisar el estilo del código. Ese orden importa.

## Lecturas adicionales

- `../spec-driven-content-program.md`
- `../wiki/es/spec-driven-development.md`
- `../wiki/es/demo-spec-alignment.md`
- `../blog/es/spec-driven-development-for-ai-projects.md`
