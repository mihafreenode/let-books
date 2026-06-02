---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: en
language_variants:
  - ../en/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../hr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../bs/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../mk/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sq/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../de/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../it/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../fr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../es/when-the-demo-is-evidence-and-when-it-is-not.md
title: Cuándo la demo es evidencia y cuándo no lo es
summary: Cómo usar demos y prototipos como evidencia útil de implementación sin dejar que se conviertan silenciosamente en la especificación del producto.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
  - documentation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/style-guide/publishing/README.md
  - docs/style-guide/writing/README.md
  - docs/Development.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Cuándo la demo es evidencia y cuándo no lo es

Una demo es poderosa porque convierte ideas abstractas en algo a lo que la gente puede reaccionar. Un flujo que parece razonable en una nota puede mostrar inmediatamente fricción real en un teléfono o en un almacén.

Ese es el lado bueno de las demos.

El lado peligroso es que, una vez que existe un prototipo, la gente suele empezar a tratar su comportamiento como si fuera la verdad del producto, tanto si alguien tomó oficialmente esa decisión como si no.

## Por qué los prototipos se convierten en autoridad accidental

Las cosas visibles son persuasivas. Una pantalla que funciona suele tener más autoridad informal que una regla escrita, incluso cuando esa pantalla se construyó como experimento.

Eso es comprensible. La gente confía en lo que puede ver.

Pero en el trabajo de producto, especialmente en el trabajo de producto asistido por IA, ese instinto puede crear confusión.

La demo puede mostrar:

- una forma rápida de probar un flujo
- un compromiso temporal
- una implementación local simplificada
- una interpretación incompleta del producto previsto

Nada de eso significa automáticamente que la demo deba redefinir el producto.

## Cuándo la demo es una buena evidencia

La demo es evidencia valiosa cuando ayuda a responder preguntas como:

- ¿El flujo resulta usable?
- ¿El diseño móvil apoya la tarea real?
- ¿Se entiende el flujo de escaneo o de entrada?
- ¿Los usuarios reaccionan positiva o negativamente a la secuencia de pasos?

En esos casos, la demo es evidencia sobre usabilidad, viabilidad, secuenciación y comunicación.

Ese tipo de evidencia es extremadamente útil.

## Cuándo la demo no es la autoridad

La demo no debería imponerse silenciosamente sobre la especificación del producto.

No es la autoridad primaria adecuada para preguntas como:

- si este flujo está oficialmente dentro del alcance
- si es un atajo temporal o un compromiso de producto
- si este comportamiento invalida una regla existente
- si la documentación pública debería describirlo como sistema objetivo

Esas preguntas requieren una decisión explícita y una actualización de la documentación.

## La regla de Let Books es un buen modelo

El repositorio ya contiene una regla editorial sana para esto. La escritura pública debería tratar las especificaciones y la documentación como evidencia canónica, mientras que el comportamiento de la demo o de la aplicación puede mencionarse como estado de implementación.

Esa regla importa porque evita una gobernanza accidental por prototipo.

Si la demo estática revela un mejor flujo para cajas, un mejor flujo móvil o una mejor interacción de intake, eso es valioso. Pero ese mejor flujo solo debería convertirse en verdadera autoridad después de actualizar la especificación y la documentación relacionada.

## Por qué esto importa aún más con IA

La IA amplifica lo que parece más concreto en el contexto actual.

Si lo más concreto en el repositorio es una demo, los asistentes e incluso los colaboradores humanos pueden copiar su comportamiento sin preguntarse si coincide con el límite de producto previsto.

Eso puede ser útil cuando la demo ya está alineada.
También puede propagar rápidamente supuestos temporales cuando no lo está.

Por eso los equipos necesitan un orden visible de autoridad.

## Una cadena práctica de autoridad

Para un trabajo como este, un orden útil es:

1. especificación del producto
2. directrices de implementación
3. documentación del estado actual
4. demo o prototipo
5. pruebas y validación

La demo sigue importando. Simplemente importa dentro de un sistema documentado, en lugar de sustituirlo.

## Qué hacer cuando la demo te enseña algo nuevo

A veces el prototipo tiene razón y la especificación está equivocada, incompleta o es demasiado abstracta.

Eso no es un fracaso. Precisamente esa es una de las razones para construir demos.

La respuesta correcta es:

1. registrar el descubrimiento
2. decidir si el nuevo comportamiento debe pasar a ser intencional
3. actualizar la especificación y la documentación
4. después preservar la alineación en adelante

La respuesta incorrecta es dejar la documentación sin cambios y esperar que todo el mundo recuerde que la demo ahora es la verdadera fuente de verdad.

## Por qué esto debería importarles a las instituciones y a los estudiantes

Las instituciones necesitan saber si están evaluando un concepto, un prototipo o un modelo de flujo de trabajo aprobado.

Los estudiantes deben aprender que los prototipos no se justifican solos. Una práctica sólida de software incluye entender cuándo tratar la implementación como evidencia y cuándo tratarla como un experimento que aún espera una decisión.

## La lección duradera

Las demos son valiosas porque hacen que las ideas de producto sean comprobables. Se vuelven peligrosas cuando pasan silenciosamente a ser política.

El modelo más sano es simple: dejar que las demos informen al producto, pero hacer que las especificaciones y la documentación registren la decisión final.

## Otros idiomas

- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
