---
title: "Guía de implementación"
summary: >-
  La guía de implementación define cómo un equipo debe entregar el trabajo dentro del repositorio o entorno de entrega actual sin reemplazar la especificación del producto en sí.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Guía de implementación

## Resumen

La guía de implementación define cómo un equipo debe entregar el trabajo dentro del repositorio o entorno de entrega actual sin reemplazar la especificación del producto en sí.

## Rol

La guía de implementación se encuentra debajo de la especificación del producto.

Ayuda a responder preguntas como:

- cómo debería funcionar la denominación pública
- cómo deben estructurarse los documentos
- qué expectativas de verificación se aplican ahora
- qué reglas específicas del repositorio deben seguir los contribuyentes
- dónde deberían residir las reglas tácticas a medida que evoluciona el proyecto

## Diferencia con respecto a la especificación del producto

La especificación del producto define qué es el producto y qué debe lograr.

La guía de implementación define cómo los contribuyentes deben realizar el trabajo dentro del contexto de entrega actual.

Esta distinción es útil porque no todas las reglas del repositorio son una verdad del producto, y no todas las verdades del producto deben quedar ocultas en notas tácticas.

## Ejemplos comunes

La guía de implementación a menudo incluye:

- reglas de denominación y marca
- reglas de implementación de la documentación
- restricciones de sitio estático o demostración
- expectativas de verificación
- reglas de edición o generación de código
- políticas de evidencia para la escritura pública

Estas reglas a menudo se encuentran bien en Markdown porque deben seguir siendo revisables, fáciles de actualizar y cercanas al resto del contexto del repositorio.

## Por qué es importante el trabajo asistido por IA

Los asistentes de IA suelen seguir las instrucciones concretas más cercanas. Si las reglas específicas del repositorio están implícitas, la salida se vuelve inconsistente rápidamente.

La guía de implementación hace que esas reglas sean visibles sin contaminar las especificaciones del producto con detalles tácticos.

En la práctica, esto significa que un expediente de orientación del artículo Markdown puede realizar dos tareas a la vez:

- explicar el flujo de trabajo a un colaborador humano
- Dirigir a un agente de IA hacia las herramientas, secuencias y limitaciones preferidas.

## Let Books contexto

En Let Books, `AGENTS-Implementation.md` es la capa de guía táctica.

Abarca áreas como:

- denominación pública
- reglas de documentación
- sitio público y documentos divididos
- metadatos y reglas SEO para páginas estáticas
- restricciones de demostración estática
- reglas de localización y accesibilidad
- reglas de verificación
- política de evidencia de blogs

Eso lo convierte en el complemento operativo del `AGENTS.md`, no en su reemplazo.

Otras orientaciones del artículo Markdown del repositorio refuerzan el mismo patrón. Por ejemplo:

- `docs/android-debugging.md` dirige las opciones de flujo de trabajo de depuración, como CDP adjuntar versus flujos de trabajo de parche de origen
- `docs/style-guide/publishing/ubuntu-tooling.md` documenta las herramientas esperadas para publicación, verificación, capturas de pantalla, corrección ortográfica y depuración de dispositivos.

Estos documentos se pueden leer como guía humana, pero también ayudan a los agentes a elegir mejores acciones en lugar de adivinar valores predeterminados genéricos.

## Páginas relacionadas

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/es/how-to-turn-a-product-spec-into-an-implementation-plan.md`