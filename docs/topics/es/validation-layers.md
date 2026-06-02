---
title: "Capas de validación"
summary: "Cómo múltiples etapas de validación reducen distintas clases de error en contenido, salida generada, implementación y workflows de entrega."
topic_category: spec-driven-development
topics:
  - validation
  - product-quality
  - ci-cd
related:
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Capas de validación

Las capas de validación son comprobaciones separadas que examinan un sistema desde distintos ángulos. Una capa puede verificar la sintaxis, otra la estructura, otra la calidad de la localización y otra la salida renderizada. Ningún validador individual puede detectar de forma fiable todos los problemas significativos.

El enfoque por capas importa porque los fallos aparecen en distintas etapas. Un documento fuente puede estar bien formado pero ser semánticamente débil. Una página HTML generada puede ser estructuralmente válida y aun así mostrar texto de UI sin traducir. Una demo puede verse correcta en pantalla y aun así imprimirse mal. Cada uno de esos problemas requiere un tipo distinto de comprobación.

Por eso los pipelines maduros de documentación y software rara vez dependen de un solo paso de linting. Combinan validación de formato, comprobaciones de enlaces, comprobaciones de paridad, comprobaciones de accesibilidad, verificación de build y revisión específica de la salida. La guía de learning sobre [añadir reglas de validación y puertas de CI por etapas](/docs/learning/es/how-to-add-validation-rules-and-ci-gates-in-stages.html) describe cómo los equipos pueden adoptar esto gradualmente en lugar de intentar automatizarlo todo de una vez.

En Let Books, ya existen capas de validación en la revisión de localización, las comprobaciones de HTML generado, las comparaciones entre lenguas y la verificación de la estructura del sitio. Tratar la salida impresa como una funcionalidad soportada amplía esa misma lógica. Si la documentación está pensada para funcionar como PDF o papel, el comportamiento de impresión necesita su propia etapa de validación en lugar de tratarse como una preocupación cosmética opcional.

La página del wiki sobre [Capas de validación](/docs/wiki/es/validation-layers.html) cubre la vista de referencia. Esta página temática enfatiza el principio general: cada nueva vía de entrega o tipo de documentación debería heredar las capas existentes que ya protegen la calidad en otros lugares.
