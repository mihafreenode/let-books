---
title: "Metadatos del libro"
summary: "Cómo la información descriptiva de los libros apoya el descubrimiento, la revisión y las decisiones de donación, y por qué los metadatos siguen siendo más amplios que cualquier identificador único."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - library-systems
  - documentation
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Metadatos del libro

Los metadatos del libro son la información descriptiva utilizada para identificar, organizar y evaluar un libro. Los campos comunes incluyen título, subtítulo, autor, editorial, año de publicación, idioma, edición, ISBN e información temática. En contextos bibliotecarios y de catálogo, los metadatos también pueden incluir referencias de autoridad, identificadores externos, resúmenes y datos de procedencia.

Los metadatos importan porque los usuarios rara vez toman decisiones basándose solo en identificadores. Las bibliotecas necesitan suficiente información para juzgar la relevancia. Los donantes necesitan suficiente información para entender qué tienen. Los revisores necesitan suficiente información para emparejar una copia física con el registro bibliográfico correcto. Unos buenos metadatos hacen esas decisiones más rápidas y menos ambiguas.

Ningún campo único es suficiente por sí solo. El ISBN es útil pero incompleto. Los títulos pueden variar en ortografía o traducción. Los nombres de autor pueden aparecer en formas diferentes. Las fechas de publicación pueden ser poco claras en material antiguo. Por eso los flujos robustos de metadatos suelen combinar varios campos y preservar la fuente de cada valor.

En Let Books, los metadatos también están ligados a la distinción entre registros bibliográficos y copias físicas. Una copia física puede heredar metadatos a nivel de edición y aun así tener su propio estado de conservación, ubicación de almacenamiento y estado de workflow. La página temática independiente [Edición vs copia física](/docs/topics/es/edition-vs-physical-copy.html) explica ese modelo directamente.

Para un ejemplo práctico de cómo la búsqueda basada en ISBN encaja en un proceso más amplio de metadatos, consulta el tema [ISBN](/docs/topics/es/isbn.html), el artículo del blog [ISBN no es una base de datos](/docs/blog/es/isbn-not-a-database.html) y la nota del repositorio en `docs/book-metadata.md` que describe la cadena de lookup actual utilizada en la demo alpha.
