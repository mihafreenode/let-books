---
title: "Localización CI y CD"
summary: >-
  La CI/CD de localización valida continuamente el contenido multilingüe para que los recursos faltantes, los enlaces rotos y las regresiones de accesibilidad se detecten pronto.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Localización CI y CD

## Resumen

La CI/CD de localización valida continuamente el contenido multilingüe para que los recursos faltantes, los enlaces rotos y las regresiones de accesibilidad se detecten pronto.

## Controles deseados

- coherencia del inventario de configuraciones regionales
- regeneración fresca del sitio antes de la revisión de paridad
- validación de enlaces
- generación de artículos y páginas
- revisión ortográfica cuando esté disponible
- paridad de marcadores de posición
- pruebas rápidas de accesibilidad
- comprobaciones de cobertura de capturas de pantalla y diagramas

## Regla de generación reciente

Los flujos de CI y revisión de localización no deben basar los hallazgos de paridad en artefactos generados obsoletos.

Secuencia requerida:

1. genere el sitio a partir del estado actual del repositorio
2. ejecute los validadores sobre la salida recién generada
3. inspeccione el HTML generado cuando sea necesario
4. inspeccione la salida renderizada cuando sea necesario

Esto importa porque el Markdown fuente, el HTML generado, la salida desplegada y el comportamiento renderizado en el navegador pueden divergir temporalmente durante el desarrollo.

## Prioridad de revisión

Aplique primero la revisión más estricta de paridad y en lengua materna a:

- contenido recién creado
- contenido ampliado recientemente
- contenido que se está editando actualmente

Luego extienda progresivamente los mismos estándares de revisión al contenido localizado más antiguo.

## Progresión de clases de defectos

La CI de localización debe seguir ambas cosas:

- `Localization Debt`
- `Open Defect Classes`

La deuda mide el trabajo pendiente sobre el contenido fuente.

Las clases de defectos abiertas miden si el sistema aún puede permitir que vuelva a aparecer una categoría de problema.

En cuanto una clase de defectos alcance cero ocurrencias, su validador debería pasar de consultivo a bloqueante cuando sea práctico.

Ejemplos:

- publicación de borradores con marcadores de posición
- resúmenes sin traducir
- metadatos sin traducir
- cuerpos de texto sin traducir
- publicación en idiomas mixtos

La CI no es solo un guardián. Es el mecanismo que evita que las clases de defectos cerradas se reabran en silencio.

## Orden de generación para la navegación de artículos

El contrato actual de navegación pública de artículos es:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

La generación y la validación deben ocurrir en este orden:

1. genere el HTML de los artículos
2. genere las páginas de índice
3. ejecute cualquier posprocesamiento de navegación restante solo si sigue siendo necesario
4. valide la salida recién generada
5. revise el HTML generado o la salida renderizada si el flujo de trabajo requiere una evaluación humana de la paridad

Si un validador todavía espera el bloque heredado `topic-nav`, actualice el validador al contrato actual en lugar de parchear el HTML generado.

## Páginas relacionadas

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/es/how-to-run-localization-qa-in-ci.md`
