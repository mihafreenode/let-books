# Localización

## Resumen

`docs/style-guide/localization/` define cómo debe traducirse y vincularse el contenido de conocimiento multilingüe.

## Propósito

Mantener las traducciones trazables, ortográficamente correctas, alineadas estructuralmente con las fuentes canónicas en inglés y revisables como un sistema de localización a largo plazo, no como una tarea de traducción puntual.

## Estructura

- política de locales
- política de ID de artículos
- reglas de enlace entre idiomas
- reglas de alineación terminológica
- reglas para registros de revisión de IA
- benchmark fixtures para traducción con LLM

## Principios fundamentales

- El inglés es el idioma canónico de autoría de la plataforma de conocimiento, salvo que un documento declare explícitamente otra política.
- Las traducciones son entregables de primera clase, pero heredan la autoridad canónica de la fuente del original en inglés.
- La localización es más amplia que la traducción. Incluye texto de accesibilidad, diagramas, capturas de pantalla, pies de imagen, navegación, metadatos y gobernanza.
- El serbio en alfabeto latino y el serbio en cirílico son locales separadas.
- El macedonio, el albanés y el esloveno deben preservar ortografía nativa correcta y caracteres Unicode.
- La traducción generada por IA solo se permite como etapa de borrador. No sustituye la revisión.

## Requisitos para artículos multilingües

Todo artículo de blog publicado en este repositorio debe seguir estas reglas:

### 1. Primero el inglés canónico

Todos los artículos del blog deben escribirse primero en inglés. Las traducciones derivan de la versión canónica en inglés. El artículo en inglés es la fuente autorizada para referencias de evidencia y especificaciones.

En el frontmatter del blog, `canonical_language` debe seguir siendo `en` también en el archivo traducido. El campo describe la autoridad de la fuente, no la locale del archivo traducido.

### 2. Frontmatter obligatorio

Todo artículo (canónico y traducción) debe incluir en su frontmatter YAML un campo `language_variants` que enumere las 12 variantes lingüísticas con rutas relativas:

```yaml
language_variants:
  - ../en/<article-id>.md
  - ../sl/<article-id>.md
  - ../hr/<article-id>.md
  - ../bs/<article-id>.md
  - ../sr-Latn/<article-id>.md
  - ../sr-Cyrl/<article-id>.md
  - ../mk/<article-id>.md
  - ../sq/<article-id>.md
  - ../de/<article-id>.md
  - ../it/<article-id>.md
  - ../fr/<article-id>.md
  - ../es/<article-id>.md
```

Locales compatibles: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Pie de página Other Languages

Todo artículo traducido debe incluir al final una sección de pie de página "Other Languages" que enumere todas las demás traducciones disponibles con el nombre nativo del idioma.

Los artículos canónicos en inglés también deben incluir esta sección por paridad.

### 4. Stubs de source map localizados

Todo artículo principal en inglés debe tener un source map correspondiente en `docs/sources/en/`. Toda locale no inglesa debe tener un stub en `docs/sources/<locale>/` que remita al source map canónico en inglés.

Los stubs de source map no son traducciones completas. Son archivos breves con un puntero al original en inglés y contexto apropiado para la lengua.

### 5. Paquetes derivados para LinkedIn

Todo artículo principal en inglés debe tener un paquete derivado para LinkedIn en `docs/blog/en/linkedin/<article-id>.md` que contenga:

- una publicación para público amplio
- una publicación institucional/bibliotecaria
- una publicación para estudiantes/aprendices
- un esquema de hilo

Son solo derivados para redes sociales. No requieren traducción.

### 6. Versiones HTML de artículos

Todo artículo del blog debe tener una versión HTML junto a la fuente Markdown. La versión HTML sigue la misma estructura que el sitio de documentación HTML existente (`docs/<locale>/index.html`) y se enlaza desde el índice documental de la locale correspondiente.

Las versiones HTML se generan a partir de la fuente Markdown usando la canalización estándar de conversión (basada en pandoc) y deben mantener paridad con el contenido Markdown.

### 7. Requisitos de publicación HTML

- `docs/<locale>/index.html` de cada locale debe listar los artículos del blog disponibles en esa locale con enlaces directos a las páginas HTML de los artículos.
- La página HTML del artículo usa el mismo patrón de encabezado, pie, hoja de estilos y cambio de idioma que las páginas documentales existentes.
- `<head>` debe incluir alternates `hreflang` correctos para las 12 locales.
- El atributo `data-page-type` en `<body>` debe establecerse en `"article"`.

## Política de source map

- Los source maps viven en `docs/sources/<locale>/`.
- Los source maps en inglés son mapas completos de evidencia que rastrean afirmaciones hasta la documentación del repositorio.
- Los stubs de source map no ingleses son archivos breves que hacen referencia al original en inglés.
- Los source maps se crean solo para artículos principales, no para cada publicación menor.

## Modelo de madurez de traducción

Usa estos niveles al hablar o seguir la calidad de la traducción.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Rastrear la madurez por locale y por categoría de contenido cuando sea práctico.

## Expectativas para localización a escala

- Localizar contenido de conocimiento orientado al público, no solo cadenas de UI.
- Localizar metadatos de accesibilidad como alt text, pies de imagen, etiquetas ARIA y metadatos de idioma.
- Preferir diagramas generados a partir de fuentes estructuradas para que las variantes traducidas puedan reproducirse.
- Documentar decisiones terminológicas, expectativas de revisores y rutas de resolución de disputas.
- Mantener la validación y la CI cerca de los flujos de publicación para tratar las regresiones de localización como problemas de calidad del producto.
- Conservar ejemplos representativos de revisión de IA para que correcciones sutiles de hablantes nativos puedan informar entrenamiento, gobernanza y evaluación.

## Registro de actualizaciones documentales accionables

El ejemplo esloveno de revisión de IA debería actualizar primero estos documentos:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Resumen del change record para PR o revisión de gobernanza:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Política de paquetes LinkedIn

- Los paquetes LinkedIn viven en `docs/blog/en/linkedin/`.
- Solo los artículos principales en inglés requieren paquetes LinkedIn.
- Los paquetes LinkedIn son Markdown, no HTML.
- `docs/blog/README.md` debe listar la carpeta de paquetes LinkedIn.

## Temas relacionados

- Terminología
- Publicación
- Sistemas multilingües
- Programa de contenido guiado por especificaciones

## Artículos relacionados

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Guías de aprendizaje relacionadas

- `../../learning/README.md`

## Páginas wiki relacionadas

- `../../wiki/README.md`

## Lectura adicional

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
