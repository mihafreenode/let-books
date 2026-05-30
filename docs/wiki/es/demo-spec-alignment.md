---
title: "Alineación Entre Demo Y Especificación"
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Alineación Entre Demo Y Especificación

## Resumen

La alineación entre la demo y la especificación es la práctica de mantener el comportamiento del prototipo o de la demo coherente con la intención de producto documentada, al mismo tiempo que se actualiza explícitamente la especificación cuando una demo revela un mejor flujo de trabajo.

## Por qué es importante

Las demos son útiles porque hacen concretos los flujos de trabajo. Son arriesgadas porque el comportamiento visible suele empezar a tratarse como verdad de producto aprobada incluso cuando la documentación subyacente nunca se actualizó.

## Orden recomendado de autoridad

1. especificación del producto
2. directrices de implementación
3. documentación del estado actual
4. demo o comportamiento de la implementación
5. validación y pruebas

Este orden no significa que las demos no importen. Significa que deben interpretarse dentro de un sistema de decisiones documentado.

## Uso saludable de las demos

Usa las demos para:

- exponer problemas en los flujos de trabajo
- revelar problemas de usabilidad
- probar supuestos con usuarios
- apoyar explicaciones para las partes interesadas

No uses las demos como reemplazos silenciosos de las decisiones de producto.

## Cuándo la demo debe liderar

Si la demo revela un flujo de trabajo claramente mejor, el equipo debería:

1. revisar el cambio de forma intencional
2. actualizar la especificación y la documentación pertinente
3. ajustar las expectativas de validación o revisión

En otras palabras, la demo puede inspirar la siguiente decisión, pero la decisión actualizada debe seguir documentándose.

## Contexto de Let Books

El repositorio de Let Books ya distingue entre evidencia documental canónica y estado de implementación para la escritura pública. Esa es una protección útil porque evita que los prototipos se conviertan por accidente en autoridad editorial.

## Páginas Relacionadas

- `spec-driven-development.md`
- `../learning/how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../blog/en/spec-driven-development-in-let-books.md`
