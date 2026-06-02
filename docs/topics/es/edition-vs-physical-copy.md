---
title: "Edición vs copia física"
summary: "Por qué una edición bibliográfica y un libro individual almacenado son entidades relacionadas pero no deberían tratarse como el mismo registro."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - book-donation
  - library-systems
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Edición vs copia física

Una edición es un concepto bibliográfico. Una copia física es un objeto real. Ambas están conectadas, pero responden a preguntas diferentes.

Una edición describe la forma publicada de un libro: título, editorial, año, idioma, ISBN y otros metadatos compartidos. Una copia física describe un objeto real en almacenamiento o circulación: su estado, marcas de propiedad, ubicación en caja, fotos, estado de donación e historial de manejo.

Muchos problemas de biblioteca e inventario provienen de colapsar juntos esos dos niveles. Si un proyecto solo modela ediciones, no puede seguir de forma fiable qué copia está dañada, solicitada, entregada o sigue en una caja del sótano. Si solo modela copias físicas, puede duplicar innecesariamente metadatos bibliográficos y dificultar el emparejamiento.

Por eso los sistemas modernos de gestión de libros suelen tratar la edición y la copia como entidades separadas pero vinculadas. La edición apoya la identificación y el descubrimiento. La copia apoya la logística y la toma de decisiones.

Esta distinción es central en Let Books porque el proyecto está construido en torno a workflows reales de donación y recuperación. Un donante puede tener cinco copias del mismo libro de texto, cada una con una condición o ubicación de almacenamiento diferente. Una biblioteca puede querer solo una de ellas. Sin la separación entre edición y copia, esos workflows se vuelven confusos muy rápidamente.

El artículo existente [ISBN no es una base de datos](/docs/blog/es/isbn-not-a-database.html) refuerza este punto desde el ángulo del identificador. Esta página temática expone el modelo directamente: la igualdad bibliográfica no borra la diferencia física.
