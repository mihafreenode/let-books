---
title: "Validación de documentación más allá del linting"
summary: "Por qué la calidad de la documentación requiere varias capas de validación, incluidas la localización, la accesibilidad, la salida generada y las comprobaciones de impresión, y no solo un único paso de linting."
topics:
  - validation
  - documentation
  - localization
related:
  blog:
    - documentation-is-part-of-the-product
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Validación de documentación más allá del linting

El linting es útil, pero solo cubre una parte de la calidad de la documentación. Puede detectar errores de formato, problemas de sintaxis o algunas clases de estructura rota. Por sí solo no puede garantizar que las páginas generadas sean correctas, que las variantes localizadas sigan alineadas, que la navegación sea coherente o que la salida impresa sea legible.

Por eso la calidad de la documentación debe tratarse como una disciplina de ingeniería con varias capas de validación. Distintos validadores responden a preguntas distintas.

- La validación de enlaces comprueba si las referencias siguen resolviéndose correctamente.
- La validación de localización comprueba si el texto visible para la persona lectora sigue traducido y consistente.
- La validación de paridad comprueba si las secciones importantes siguen existiendo en las variantes lingüísticas.
- Las comprobaciones de accesibilidad examinan encabezados, etiquetas y usabilidad estructural.
- La validación del HTML generado comprueba si el contenido fuente se convirtió en una salida correcta.
- La validación de impresión comprueba si las salidas PDF y en papel compatibles siguen siendo utilizables.

Este modelo en varias capas es aún más importante en workflows asistidos por IA. El contenido puede redactarse rápido, regenerarse rápido y localizarse rápido. Eso acelera los ciclos de feedback, pero también aumenta el riesgo de publicar errores con aspecto pulido si el pipeline solo prueba el formato superficial.

Los Topics son un buen ejemplo. Cuando pasaron a ser un tipo de documentación de primera clase en LetBooks, tuvieron que heredar navegación, indexación de búsqueda, generación de sitemap, tratamiento de localización, validación del sitio generado y comprobaciones de impresión. Un camino de menor calidad habría creado una nueva superficie de contenido con garantías más débiles que el resto de la plataforma.

El principio es sencillo: todo nuevo tipo de documentación debe heredar la validación existente. Así el modelo de calidad sigue siendo escalable. En lugar de inventar excepciones para cada nueva sección, la plataforma extiende las mismas expectativas a toda superficie orientada a la persona lectora.

La calidad de la documentación va más allá del linting, porque quienes leen experimentan el sistema completo, no solo los archivos fuente.
