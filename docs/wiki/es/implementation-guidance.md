---
title: "Directrices De Implementación"
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Directrices De Implementación

## Resumen

Las directrices de implementación definen cómo un equipo debe entregar trabajo dentro del repositorio o del entorno de entrega actual sin sustituir la propia especificación del producto.

## Rol

Las directrices de implementación se sitúan por debajo de la especificación del producto.

Ayudan a responder preguntas como:

- cómo debe funcionar la denominación pública
- cómo debe estructurarse la documentación
- qué expectativas de verificación aplican ahora
- qué reglas específicas del repositorio deben seguir los colaboradores
- dónde deben vivir las reglas tácticas a medida que evoluciona el proyecto

## Diferencia frente a la especificación del producto

La especificación del producto define qué es el producto y qué debe lograr.

Las directrices de implementación definen cómo deben realizar el trabajo los colaboradores dentro del contexto actual de entrega.

Esta distinción es útil porque no toda regla del repositorio es una verdad del producto, y no toda verdad del producto debe quedar enterrada en notas tácticas.

## Ejemplos comunes

Las directrices de implementación suelen incluir:

- reglas de nombres y marca
- reglas de implementación de la documentación
- restricciones del sitio estático o de la demo
- expectativas de verificación
- reglas de edición o generación de código
- políticas de evidencia para la escritura pública

Estas reglas suelen funcionar bien en Markdown porque necesitan seguir siendo revisables, fáciles de actualizar y cercanas al resto del contexto del repositorio.

## Por qué importa en el trabajo asistido por IA

Los asistentes de IA suelen seguir la instrucción concreta más cercana. Si las reglas específicas del repositorio son implícitas, la salida se vuelve inconsistente con rapidez.

Las directrices de implementación hacen visibles esas reglas sin contaminar la especificación del producto con detalle táctico.

En la práctica, eso significa que un archivo guía en Markdown puede hacer dos trabajos a la vez:

- explicar el flujo de trabajo a un colaborador humano
- orientar a un agente de IA hacia las herramientas, la secuencia y las restricciones preferidas

## Contexto de Let Books

En Let Books, `AGENTS-Implementation.md` es la capa de guía táctica.

Cubre áreas como:

- denominación pública
- reglas de documentación
- separación entre sitio público y documentación
- reglas de metadatos y SEO para páginas estáticas
- restricciones de la demo estática
- reglas de localización y accesibilidad
- reglas de verificación
- política de evidencia del blog

Eso lo convierte en el acompañante operativo de `AGENTS.md`, no en su sustituto.

## Páginas Relacionadas

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../learning/how-to-turn-a-product-spec-into-an-implementation-plan.md`
