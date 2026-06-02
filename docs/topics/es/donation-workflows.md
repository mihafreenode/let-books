---
title: "Workflows de donación"
summary: "Cómo los sistemas de donación de libros pasan del inventario a la revisión, la selección, la recuperación y la entrega en lugar de detenerse en la simple creación de catálogo."
topic_category: book-and-library-metadata
topics:
  - book-donation
  - library-systems
  - validation
related:
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - product-specification
  blog:
    - spec-driven-development-in-let-books
---

# Workflows de donación

Los workflows de donación describen el camino práctico que sigue un libro desde el almacenamiento privado hasta la revisión, la selección, la recuperación y la entrega. En muchos proyectos, este workflow importa tanto como los propios metadatos porque el problema principal no es solo saber qué es el libro, sino también hacer manejable la transferencia.

Un flujo completo de donación suele incluir intake, identificación, seguimiento del almacenamiento, decisiones de revisores, listas de recogida y actualizaciones finales de estado. Si cualquiera de esas etapas es débil, el proceso se vuelve más difícil tanto para donantes como para instituciones. Los libros pueden catalogarse pero nunca revisarse, seleccionarse pero no encontrarse, o embalarse sin una pista de auditoría clara.

Por eso los workflows de donación deberían modelarse explícitamente en lugar de tratarse como una ocurrencia posterior a la catalogación. La capa de metadatos apoya la revisión, pero la capa de workflow apoya la acción. Le dice al sistema qué libros están disponibles, cuáles se quieren, cuáles están embalados y cuáles siguen sin resolverse.

En Let Books, esta es una de las ideas definitorias del proyecto. La plataforma no se presenta solo como un escáner o una herramienta de metadatos. Está pensada para ayudar a las personas a evitar perder libros educativos valiosos haciendo práctico el proceso real de donación. Eso incluye captura móvil, revisión en Excel, recuperación basada en cajas y cambios de estado trazables.

La especificación en `AGENTS.md` y el material de workflow ya existente en la documentación muestran que esta capa operativa es de primera clase. La donación no es solo un posible resultado de la catalogación. Es una de las principales razones por las que existe el catálogo.
