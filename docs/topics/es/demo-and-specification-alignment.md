---
title: "Alineación entre demo y especificación"
summary: "Por qué las demos son evidencia útil del estado de implementación pero no deberían sustituir silenciosamente a las especificaciones como fuente principal de verdad del producto."
topic_category: spec-driven-development
topics:
  - demo-alignment
  - spec-driven-development
  - validation
related:
  blog:
    - when-the-demo-is-evidence-and-when-it-is-not
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - demo-spec-alignment
---

# Alineación entre demo y especificación

Una demo muestra lo que existe actualmente. Una especificación describe lo que se supone que debe ser el producto. Ambas están relacionadas, pero no son intercambiables.

Los equipos suelen tratar una demo funcional como el artefacto más persuasivo de un proyecto, y con razón. Una demo vuelve concreto el comportamiento. Expone huecos de workflow, problemas de usabilidad y decisiones de implementación que permanecerían abstractos en un documento. Pero una demo también es evidencia incompleta. Está moldeada por todo lo que se ha construido hasta ahora, incluidos atajos, experimentos y omisiones temporales.

Alineación con la especificación significa mantener esas dos capas en conversación. Si la demo diverge de la especificación, o bien la implementación necesita corrección o bien la especificación necesita revisión. Lo que no debería ocurrir es una deriva silenciosa en la que la demo se convierte en la nueva verdad simplemente porque existe en una forma más visible.

Esto importa especialmente en proyectos que se mueven rápido. Un workflow asistido por IA puede generar interfaces y comportamiento más rápido de lo que se actualiza la documentación circundante. Sin un hábito explícito de alineación, los colaboradores pueden empezar a seguir simplemente lo que la demo actual muestre en ese momento.

Let Books usa esta distinción con cuidado. El repositorio ya contiene una demo estática pública, especificaciones de producto de alto nivel, guía de implementación y documentación localizada. La demo es valiosa porque hace tangibles los workflows de almacenamiento, QR y metadatos. No es suficiente por sí sola para redefinir reglas de workflow que siguen especificadas en otra parte. El artículo del blog [Cuándo la demo es evidencia y cuándo no lo es](/docs/blog/es/when-the-demo-is-evidence-and-when-it-is-not.html) explora directamente esa tensión.

La regla práctica es simple: una demo es evidencia de implementación, no autoridad automática del producto. La alineación requiere comparar demos, especificaciones, documentación y resultados de validación en conjunto en lugar de dejar que cualquiera de ellos domine por accidente.
