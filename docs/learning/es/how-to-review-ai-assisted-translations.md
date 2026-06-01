---
title: "Cómo revisar traducciones asistidas por IA"
summary: >-
  Esta guía explica cómo revisar traducciones generadas por IA en cuanto a significado, terminología, accesibilidad, tono y necesidad de revisión humana.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Cómo revisar traducciones asistidas por IA

## Resumen

Esta guía explica cómo revisar traducciones generadas por IA en cuanto a significado, terminología, accesibilidad, tono y necesidad de revisión humana.

## Lista de revisión

- revisar primero el significado y después el estilo
- verificar la terminología frente al glosario del proyecto
- revisar con especial cuidado la redacción sensible
- confirmar que también se ha localizado el texto de accesibilidad
- marcar con honestidad el nivel de madurez de la revisión

## Caso de estudio esloveno

### Borrador original de IA

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Versión eslovena corregida

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Comentarios de revisión humana

### Problema 1

- original: `morajo moči`
- corregido: `morajo imeti možnost, da`
- categorías: gramática, modalidad
- causa probable del error de IA: traducción literal de una construcción modal inglesa
- razonamiento del revisor: la formulación original es agramatical en esloveno; la versión corregida usa la construcción natural para lenguaje normativo o de policy.

### Problema 2

- original: `po potrebi tudi izklopiti`
- corregido: `da po potrebi izklopijo`
- categorías: fluidez, orden de palabras
- causa probable del error de IA: orden de palabras poco natural heredado de la lengua de origen y control débil del discurso
- razonamiento del revisor: el orden corregido es más claro y elimina un énfasis innecesario.

### Problema 3

- original: `morajo biti izrecne`
- corregido: `morajo biti izrecno omogočene`
- categorías: terminología, registro, formulación de política de dominio
- causa probable del error de IA: elección léxica de diccionario sin suficiente contexto de producto o política
- razonamiento del revisor: el requisito trata de habilitar explícitamente enriquecimientos de pago, no de describirlos como «explícitos».

## Categorías comunes de problemas

- gramática
- modalidad
- terminología
- registro
- fluidez
- traducción literal
- ambigüedad
- pérdida de contexto
- orden de palabras
- colocación
- escritura u ortografía
- formulación de política de dominio
- redacción de accesibilidad

## Guía de puntuación

Para revisiones repetibles, usa una escala sencilla de 0 a 3.

- `0`: inaceptable
- `1`: problemas importantes
- `2`: usable con ediciones de revisión
- `3`: sólido o casi listo para publicar

Dimensiones de puntuación recomendadas:

- exactitud del significado
- gramática y fluidez
- terminología y ajuste al dominio
- registro y estilo
- esfuerzo de revisión necesario

## Guía de recomendación de publicación

- `blocker`: no apto para publicación o exposición a usuarios
- `major_revision`: el significado puede ser cercano, pero aún hace falta una reescritura importante
- `minor_revision`: borrador utilizable con correcciones puntuales de un hablante nativo
- `ready_with_review_signoff`: apto una vez completada la aprobación normal del revisor

## Documentar no solo la corrección, sino también la razón

Para trabajo de revisión reutilizable, registra:

- texto original
- texto corregido
- categoría del error
- hipótesis de causa raíz
- razonamiento del revisor

## Lecciones reutilizables del caso esloveno

- el significado gramatical puede estar cerca y, aun así, la frase seguir sin ser publicable para un hablante nativo
- las construcciones modales son especialmente vulnerables a la traducción literal
- la terminología y la redacción de políticas suelen requerir una reformulación consciente del dominio
- el QA automatizado ayuda, pero rara vez basta para problemas sutiles de registro

## Nota Localization-at-Scale

Incluso cuando se conserva el significado general, las traducciones generadas por IA pueden requerir revisión de un hablante nativo para corregir problemas sutiles de gramática, modalidad, terminología y registro específico del dominio. Estos problemas suelen ser difíciles de detectar de forma fiable solo con métricas automáticas de calidad.

## Dónde reutilizar este tipo de ejemplos

- materiales de formación para revisores de localización
- conjuntos de datos de evaluación de traducción con IA
- ejemplos en la guía de estilo
- documentación human-in-the-loop
- artículos de localization at scale y guías de buenas prácticas

Este tipo de ejemplos ayuda a los revisores a calibrar expectativas y proporciona a los responsables de localización material de referencia realista.

## Páginas relacionadas

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
