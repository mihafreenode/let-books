# Programa de localizacion a escala

## Resumen

Este manual define la localizacion a escala en Let Books como un modelo operativo de largo plazo para publicacion multilingue, revision, validacion, mantenimiento y aprendizaje continuo.

Su tesis central es sencilla:

> La localizacion a escala no es principalmente un problema de traduccion.
>
> Es un problema de diseno de sistemas de feedback y de un sistema multilingue de conocimiento.

## Idea central

El objetivo no es solo traducir palabras.

El objetivo es ayudar a las personas a aprender, participar, contribuir, ensenar, preservar conocimiento y acceder a informacion en la lengua que mejor entienden, manteniendo al mismo tiempo sostenible el sistema multilingue con el paso del tiempo.

## Capas del programa

- `docs/blog/` explica por que la localizacion importa en la practica.
- `docs/wiki/` define reglas, modelos y gobernanza duraderos.
- `docs/learning/` convierte el tema en flujos de trabajo operativos.
- `docs/style-guide/` define reglas para colaboradores, terminologia, revision y publicacion.
- `docs/sources/` mantiene trazables las afirmaciones principales.
- `docs/localization-audit-report.md` sigue la deuda, las clases de defectos y el estado de cierre.

## La localizacion es un sistema, no un proyecto

Muchos esfuerzos de localizacion se tratan como proyectos finitos:

```text
Traducir
Publicar
Terminar
```

La localizacion a escala trata la localizacion como un sistema operativo:

```text
Crear
Traducir
Validar
Mejorar
Mantener
Actualizar
Prevenir deriva
Repetir
```

La dificultad no es solo producir traducciones una vez.

La dificultad es operar un sistema multilingue de conocimiento con el tiempo sin perder cobertura, completitud, calidad ni frescura.

## La IA funciona mejor dentro de bucles de feedback

La IA es util en localizacion, pero su utilidad depende de la calidad del sistema de feedback que la rodea.

Las capas de feedback mas importantes son:

- comprobaciones en CI
- validadores estructurales
- correctores ortograficos
- comprobaciones terminologicas
- comprobaciones de paridad semantica
- comprobaciones de accesibilidad
- comprobaciones de navegador y renderizado
- validacion de enlaces
- revision por hablantes nativos

Un feedback rapido vale mas que un primer intento perfecto.

## Revision bidireccional

El ingles sigue siendo la lengua fuente canonica para publicacion y sincronizacion.

Sin embargo, conocimientos utiles pueden surgir en cualquier lengua.

Por eso la localizacion no debe tratarse como un proceso de una sola direccion:

```text
Ingles
↓
Traducciones
```

Sino como un sistema bidireccional:

```text
Ingles
↕
Traducciones
```

Fuente canonica no significa sabiduria canonica.

Si un cambio en una version localizada revela ambiguedad, un problema terminologico, falta de contexto o una formulacion hostil a la traduccion en la fuente inglesa, tambien debe mejorarse la fuente canonica y revisarse el resto de lenguas.

Ante cualquier cambio importante, pregunta:

- este cambio revela un problema en la lengua fuente
- deberian beneficiarse tambien otras lenguas
- deben cambiar las guias terminologicas
- deben cambiar las guias de revision
- deben cambiar los validadores

## Modelo de calidad de la localizacion

La calidad de la localizacion debe seguirse en cuatro dimensiones:

### Cobertura

Existe siquiera el contenido en esa lengua?

### Completitud

Esta localizado todo el contenido visible para el lector?

### Calidad

Es el texto natural, preciso y adecuado para la audiencia objetivo?

### Frescura

Refleja todavia la version localizada la fuente actual?

## Regla de completitud de la localizacion

Una pagina no esta completa solo porque se hayan localizado:

- la URL
- el titulo
- la navegacion
- la estructura de la pagina

Debe localizarse todo el contenido visible para el lector, incluyendo:

- resumenes
- metadatos
- etiquetas tematicas
- titulos y subtitulos
- cuerpo del articulo
- leyendas y texto alternativo
- diagramas y texto dentro de los diagramas
- contenido relacionado

La cobertura sin completitud conduce a publicacion con lenguas mezcladas.

## Corpus de hallazgos de hablantes nativos

El corpus detallado de hallazgos de hablantes nativos sigue siendo un entregable de primera clase en el manual canonico `../localization-at-scale-program.md`.

Su proposito es documentar casos en los que una traduccion fue:

- tecnicamente correcta
- fiel en el significado
- aprobada por comprobaciones automatizadas
- pero aun asi mejorable por un hablante nativo

Esos ejemplos son esenciales para el aprendizaje del sistema, la mejora de guias y el desarrollo de validadores.

## Aprendizaje continuo

Cada problema de localizacion deberia mejorar el sistema.

El bucle recomendado es:

```text
Encontrar el problema
↓
Corregir el problema
↓
Documentar el problema
↓
Clasificar el problema
↓
Mejorar el flujo de trabajo
↓
Agregar validacion cuando sea practico
↓
Prevenir la recurrencia
```

El resultado ideal es que un problema se corrija:

- una vez en el contenido
- una vez en el sistema

## Deuda, clases de defectos y deriva

Sigue ambos indicadores:

```text
Localization Debt = X
Open Defect Classes = Y
```

La deuda mide el trabajo de contenido restante.

Las clases de defectos miden la madurez del sistema.

La deriva de localizacion significa que existe contenido localizado pero ya no refleja la fuente actual.

## Regla: corrige primero la clase, luego el archivo

No optimices principalmente en torno al numero de archivos restantes.

Optimiza en torno al numero de clases de defectos restantes.

Proceso recomendado:

1. identifica la clase del problema
2. determina la causa raiz
3. corrige la fuente mas alta posible
4. actualiza el validador
5. actualiza el flujo de trabajo
6. despues corrige las apariciones restantes

## Madurez del repositorio

El repositorio deberia avanzar por estas fases:

1. traducir contenido
2. detectar problemas
3. crear validadores
4. automatizar la validacion
5. prevenir la reaparicion
6. gestionar la deriva de localizacion
7. ensenar a futuros colaboradores y sistemas de IA

## Objetivo operativo

El objetivo mas alto de la localizacion a escala es:

**cobertura linguistica completa, completitud de la localizacion, paridad semantica, legibilidad en lengua natural, adecuacion cultural, eficacia educativa, mejora continua, prevencion de defectos, gestion de deriva y publicacion multilingue sostenible mediante fuertes bucles de feedback.**

## Documentos relacionados

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
