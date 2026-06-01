# Programa de localización a escala

## Resumen

Este manual define la Localización a escala en Let Books como un modelo operativo de largo plazo para la publicación multilingüe, la revisión, la validación, el mantenimiento y el aprendizaje continuo.

Su tesis central es sencilla:

> La localización a escala no es principalmente un problema de traducción.
>
> Es un problema de diseño de sistemas de feedback y un problema de sistema multilingüe de conocimiento.

El objetivo no es solo traducir palabras.

El objetivo es ayudar a las personas a aprender, participar, contribuir, enseñar, preservar conocimiento y acceder a la información en la lengua que mejor entienden, manteniendo ese sistema multilingüe sostenible con el paso del tiempo.

## Capas Del Programa

- `docs/blog/` explica por qué la localización importa en la práctica.
- `docs/wiki/` define reglas, modelos y gobernanza duraderos.
- `docs/learning/` convierte el tema en flujos de trabajo operativos.
- `docs/style-guide/` define reglas para colaboradores, terminología, revisión y publicación.
- `docs/sources/` mantiene trazables las afirmaciones principales.
- `docs/localization-audit-report.md` hace seguimiento de la deuda, las clases de defectos y el estado de cierre.

## Parte 1 - Por Qué Importa La Localización

La localización importa porque la accesibilidad lingüística forma parte del acceso real.

Si un lector no puede entender el contenido con comodidad, entonces el acceso solo existe en un sentido técnico limitado.

Para Let Books, la publicación multilingüe importa por razones prácticas:

- accesibilidad educativa
- participación cultural
- igualdad en el acceso al conocimiento
- inclusión digital
- tecnología de interés público
- gobernanza multilingüe
- preservación de las lenguas más pequeñas
- apoyo a las lenguas oficiales y regionales
- multilingüismo europeo en la práctica
- el principio de "Unidos en la diversidad" aplicado al software funcional y a los sistemas de conocimiento

Este no es un argumento a favor de la traducción simbólica.

Es un argumento a favor de una participación multilingüe usable de verdad.

Los lectores no se encuentran solo con títulos y menús. Se encuentran con explicaciones, advertencias, diagramas, flujos de revisión, ejemplos, texto de accesibilidad, metadatos y encuadre educativo. Si todo eso sigue estando solo en inglés, el sistema continúa privilegiando a los lectores anglófonos incluso cuando existen envoltorios localizados.

## Parte 2 - La Localización Es Un Sistema, No Un Proyecto

Muchos esfuerzos de localización se gestionan como si fueran proyectos finitos:

```text
Traducir
Publicar
Terminar
```

Ese modelo se rompe rápidamente.

El contenido cambia.

La terminología evoluciona.

Las lenguas evolucionan.

Los colaboradores cambian.

Los sistemas de IA mejoran.

Los hablantes nativos descubren nuevos problemas después de la publicación.

La Localización a escala trata, por tanto, la localización como un sistema operativo:

```text
Crear
Traducir
Validar
Mejorar
Mantener
Actualizar
Prevenir La Deriva
Repetir
```

El problema difícil no es crear traducciones una sola vez.

El problema difícil es operar con el tiempo un sistema multilingüe de conocimiento sin perder cobertura, paridad, calidad, vigencia ni confianza de los revisores.

## Parte 3 - La IA Funciona Mejor Dentro De Bucles De Feedback

La IA es útil en localización, pero su utilidad depende de la calidad del sistema de feedback que la rodea.

Kent Beck resumió con claridad la versión de ingeniería de este principio:

> "El optimismo es un riesgo profesional de la programación; el feedback es el tratamiento."

Norbert Wiener describió la versión de sistemas:

> "El feedback es un método de controlar un sistema reintroduciendo en él los resultados de su desempeño pasado."

Ese es también el modelo correcto para la publicación multilingüe.

La IA funciona mejor cuando su salida queda expuesta de inmediato a feedback como:

- comprobaciones de CI
- validadores estructurales
- correctores ortográficos
- comprobaciones terminológicas
- comprobaciones de paridad semántica
- comprobaciones de accesibilidad
- comprobaciones de navegador y renderizado
- validación de enlaces
- revisión por hablantes nativos

Un feedback rápido supera a unos primeros intentos perfectos.

El objetivo no es exigir borradores perfectos a humanos o a la IA.

El objetivo es acortar el ciclo entre:

- crear contenido
- descubrir defectos
- corregir defectos
- prevenir recurrencias

## Parte 3A - Revisión Bidireccional

El inglés sigue siendo la lengua fuente canónica para fines de publicación y sincronización.

Sin embargo, las ideas útiles pueden surgir en cualquier lengua.

Ejemplos:

- una revisión de hablantes nativos detecta una formulación fuente poco natural
- un traductor descubre una ambigüedad
- un revisor encuentra contexto faltante
- un artículo localizado gana un ejemplo mejor
- la terminología mejora en una lengua no inglesa
- una revisión cultural revela un problema de accesibilidad

Estos hallazgos pueden justificar cambios en la propia fuente canónica.

### Principio De Revisión Bidireccional

La localización no debería tratarse como un proceso de una sola dirección:

```text
English
↓
Translations
```

Sino así:

```text
English
↕
Translations
```

El inglés sigue siendo canónico.

El conocimiento puede fluir en ambas direcciones.

### Evento De Revisión Entre Lenguas

Cualquier cambio sustancial de contenido debería activar una revisión de las lenguas relacionadas.

Si cambia el inglés, revisar:

- todas las versiones localizadas
- la paridad semántica
- los metadatos
- los resúmenes
- diagramas y capturas de pantalla, cuando corresponda

Si cambia una versión localizada, revisar:

- si el hallazgo mejora la fuente canónica
- si otras lenguas deberían beneficiarse
- si la guía terminológica debería cambiar
- si la guía de revisión debería cambiar
- si los validadores deberían cambiar

### Mejora De La Fuente A Través De La Localización

La revisión de localización puede revelar:

- ambigüedad
- complejidad innecesaria
- redacción hostil a la traducción
- supuestos ocultos
- formulaciones culturalmente específicas
- terminología inaccesible

Cuando eso ocurre, mejorar la fuente puede ser mejor que compensar por separado en cada traducción.

```text
Problema descubierto en esloveno
↓
Causa raíz encontrada en inglés
↓
Inglés mejorado
↓
Todas las lenguas se benefician
```

### Prompt De Revisión Para Agentes De IA

Al modificar cualquier versión lingüística, pregúntate:

```text
¿Este cambio revela un problema en la lengua fuente?
¿Este cambio mejora otras versiones lingüísticas?
¿Debería cambiar la guía terminológica?
¿Debería cambiar la guía de revisión?
¿Deberían cambiar los validadores?
```

La respuesta puede ser:

```text
No se necesita ninguna acción
```

o bien:

```text
Abrir tarea de revisión entre lenguas
```

### Principio Básico

Fuente canónica no significa sabiduría canónica.

El inglés puede ser la fuente de sincronización.

El conocimiento, las mejoras, los hallazgos de revisión y las lecciones de calidad pueden originarse en cualquier lengua admitida.

Un proyecto multilingüe debería permitir que las mejoras descubiertas en una lengua beneficien a todas las demás.

## Parte 4 - Modelo De Calidad De La Localización

La calidad de la localización debe seguirse en cuatro dimensiones.

### Cobertura

La cobertura pregunta si el lector puede acceder al contenido en su lengua.

Ejemplos:

- ¿Existe el artículo en esloveno?
- ¿Existe la guía práctica en macedonio?
- ¿Existe la página de políticas en serbio cirílico?

La cobertura es binaria a nivel de publicación.

O bien el contenido existe para esa audiencia, o no existe.

### Integridad

La integridad pregunta si todas las partes de la página orientadas al lector están localizadas.

Ejemplos:

- título localizado pero resumen en inglés
- cuerpo localizado pero etiquetas en inglés
- artículo localizado pero etiquetas de diagrama sin traducir
- envoltorio de página localizado pero tarjetas de contenido relacionado en inglés

La cobertura sin integridad produce publicación en lengua mixta.

### Calidad

La calidad pregunta si el texto localizado se lee de forma natural, precisa y apropiada para su audiencia.

Ejemplos:

- formulación técnicamente correcta pero acartonada por traducción
- significado preservado pero retórica poco natural
- texto de políticas exacto pero no apto para publicación
- explicación educativa correcta pero difícil de aprender

La calidad es el punto en el que la revisión de hablantes nativos aporta el valor más singular.

### Vigencia

La vigencia pregunta si la versión localizada sigue reflejando la fuente actual.

Ejemplos:

- nueva advertencia añadida en inglés pero ausente en las traducciones
- la conclusión fuente cambió pero las páginas traducidas siguen usando el encuadre anterior
- diagrama o captura actualizados pero aún no localizados

La vigencia es la cara operativa de la deriva de localización.

## Parte 5 - Integridad De La Localización

### Regla De Localización Orientada Al Lector

Una página no está completa simplemente porque alguno de los siguientes elementos esté localizado:

- URL
- título
- navegación
- envoltorio de página
- esbozo del artículo

Todo el contenido orientado al lector debe estar localizado antes de considerar que una página está completa.

El contenido orientado al lector incluye:

- títulos
- subtítulos
- resúmenes
- descripciones
- etiquetas y rótulos de categoría
- encabezados
- cuerpos de artículos
- listas
- recuadros
- leyendas
- diagramas
- texto alternativo
- texto de contenido relacionado
- metadatos mostrados a los lectores
- rutas de navegación localizadas cuando existan variantes

Las excepciones permitidas son limitadas:

- citas
- material en lengua fuente claramente marcado y objeto de discusión
- nombres propios
- identificadores técnicos
- no traducción explícitamente intencional

### Patrón De Fallo De Publicación En Lengua Mixta

Una de las lecciones más importantes de esta iniciativa es que la publicación en lengua mixta a menudo parece exitosa a simple vista.

La página puede tener:

- una ruta localizada
- un título localizado
- un párrafo inicial localizado

y aun así fallar para los lectores porque los resúmenes, las etiquetas, los encabezados o las secciones del cuerpo siguen en inglés.

Por eso la integridad se sigue por separado de la cobertura.

## Parte 6 - Hallazgos De Revisión De Hablantes Nativos

Esta sección es un entregable de primera clase.

Debe crecer con el tiempo.

No debe condensarse en conclusiones breves.

Su propósito es documentar casos reales en los que:

- la traducción era técnicamente correcta
- la traducción preservaba el significado previsto
- la traducción superaba la validación automatizada
- la traducción superaba la corrección ortográfica
- la traducción probablemente superaba las comprobaciones de paridad semántica
- un hablante nativo aun así encontró una oportunidad de mejorarla

Aquí es donde vive el valor educativo.

Muestra lo que queda después de que las herramientas modernas de localización ya han hecho su trabajo.

### Formato De Registro Del Corpus

Cada registro debería capturar:

- artículo fuente
- lengua
- texto original en inglés
- texto localizado original
- texto localizado mejorado
- explicación
- categoría
- si el QA automatizado detectaría probablemente el problema
- lecciones aprendidas

### Índice De Categorías

Las categorías actuales y previstas incluyen:

- estructura paralela
- transferencia retórica desde el inglés
- construcciones con agente oculto
- abstracciones antropomórficas
- traduccionés
- desajuste con el estilo educativo
- desajuste con el estilo del sector público
- terminología poco natural
- transferencia de patrones discursivos
- adaptación cultural
- desajuste con las expectativas de la audiencia
- mejora de legibilidad
- mejora de tono
- preservación semántica con pérdida de fluidez
- publicación en lengua mixta
- terminología inglesa innecesaria
- jerga profesional no localizada
- optimización del texto fuente para la localización
- falso amigo de terminología técnica

### Optimización Del Texto Fuente Para La Localización

Definición:

Una frase fuente puede ser técnicamente correcta y aun así resultar innecesariamente difícil de traducir de forma natural a múltiples lenguas.

Guía:

Cuando problemas de traducción repetidos se originan en la propia redacción fuente, mejora el texto fuente en lugar de compensar repetidamente en cada lengua de destino.

Principio de trabajo:

> Un mejor texto fuente suele producir mejores traducciones en todas las lenguas.

### Falso Amigo De Terminología Técnica

Definición:

Un término técnico se traduce con el significado equivocado del dominio profesional, aunque el significado superficial de diccionario parezca plausible.

Guía:

Traduce el vocabulario técnico según el contexto activo del dominio. En localización de software, los términos de testing, QA, benchmarking y evaluación deben resolverse primero dentro de esos dominios, no a partir de significados físicos o cotidianos no relacionados.

### Hallazgo 1 - Estructura Paralela

- Artículo fuente: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Lengua: Esloveno
- Texto original en inglés: `what the project is trying to achieve and what it is explicitly not trying to become`
- Texto localizado original: `kaj projekt skuša doseči in česa ne sme postati`
- Texto localizado mejorado: `kaj projekt skuša doseči in kaj ne sme postati`
- Explicación: La frase original en esloveno es gramaticalmente correcta y comprensible. Preserva el significado previsto. Probablemente superaría comprobaciones ortográficas, de paridad semántica y de QA general. El problema es estilístico y estructural. La formulación refleja demasiado de cerca la estructura de contraste del inglés y pierde la forma paralela más limpia que normalmente elegiría un redactor nativo de esloveno.
- Categoría: estructura paralela; fluidez en lengua nativa; traduccionés
- ¿Lo detectaría probablemente el QA automatizado?: No.
- Lecciones aprendidas: Preservar el significado no basta para una prosa apta para publicación. Las estructuras paralelas suelen sobrevivir a la traducción automática en formas técnicamente aceptables pero ligeramente extrañas.

### Hallazgo 2 - Transferencia Retórica Desde El Inglés

- Artículo fuente: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Lengua: Esloveno
- Texto original en inglés: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Texto localizado original: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Texto localizado mejorado: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Explicación: La versión original en esloveno es comprensible y está alineada semánticamente, pero transfiere demasiado directamente hábitos retóricos del inglés. `Bi morale to zanimati` no es incorrecto, pero suena más a argumento traducido que a prosa explicativa en esloveno redactada de forma natural. La versión mejorada utiliza una construcción más idiomática para la prosa institucional.
- Categoría: transferencia de patrón retórico inglés; transferencia de patrones discursivos; desajuste con el estilo del sector público
- ¿Lo detectaría probablemente el QA automatizado?: No.
- Lecciones aprendidas: La calidad en lengua nativa suele depender de patrones retóricos preferidos, no solo de la corrección léxica. La escritura institucional y de interés público puede requerir hábitos oracionales diferentes de los que sugieren los originales en inglés.

### Hallazgo 3 - Construcción Con Agente Oculto

- Artículo fuente: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Lengua: Esloveno
- Texto original en inglés: `Why documentation cannot wait until later`
- Texto localizado original: `Zakaj dokumentacija ne sme čakati`
- Texto localizado mejorado: `Zakaj se z dokumentacijo ne sme čakati`
- Explicación: El encabezado en inglés implica un agente humano oculto: las personas no deberían posponer la documentación. La versión literal en esloveno transfiere la acción al propio sustantivo abstracto, como si la documentación fuera el actor que no debe esperar. El resultado es comprensible, pero retóricamente suena desviado. La versión mejorada restituye la agencia humana implícita y mantiene el encabezado compacto.
- Categoría: construcción con agente oculto; abstracción antropomórfica; transferencia literal del sujeto
- ¿Lo detectaría probablemente el QA automatizado?: No.
- Lecciones aprendidas: Los encabezados son especialmente vulnerables a los errores de agente oculto porque el inglés tolera abstracciones comprimidas que no siempre se transfieren de forma natural a otras lenguas.

### Hallazgo 4 - Preservación Semántica Sin Fluidez Nativa

- Artículo fuente: `docs/blog/sl/ai-will-not-replace-translators.md`
- Lengua: Esloveno
- Texto original en inglés: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Texto localizado original: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Texto localizado mejorado: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Explicación: Este es uno de los ejemplos más claros del repositorio de por qué la revisión de hablantes nativos sigue siendo necesaria después del QA automatizado. El borrador preserva el significado general. Comunica la dirección de la política. Probablemente superaría muchas comprobaciones no nativas. Sin embargo, todavía contiene tres problemas claros de lengua nativa: modalidad agramatical en `morajo moči`, orden de palabras incómodo en `po potrebi tudi izklopiti` y una formulación de política inapropiada para el dominio en `morajo biti izrecne`. La versión mejorada no es solo más bonita. Convierte el texto de un borrador comprensible en lenguaje de políticas natural.
- Categoría: preservación semántica con pérdida de fluidez; modalidad; formulación de política de dominio; registro; mejora de legibilidad
- ¿Lo detectaría probablemente el QA automatizado?: Parcialmente, como mucho. Las herramientas gramaticales podrían señalar `morajo moči`, pero el QA automatizado probablemente pasaría por alto el problema de registro de política y la mejora específica de dominio de `izrecne` a `izrecno omogočene`.
- Lecciones aprendidas: Una traducción puede preservar el significado y seguir siendo impropia para publicar. Este es uno de los argumentos más fuertes a favor de almacenar las correcciones de hablantes nativos como evidencia reutilizable en vez de tratarlas como simples retoques editoriales.

### Hallazgo 5 - Publicación En Lengua Mixta

- Artículo fuente: `docs/blog/sl/the-cost-of-english-only-software.md`
- Lengua: Esloveno
- Texto original en inglés: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Las etiquetas temáticas renderizadas en inglés, como `digital-inclusion`, `education` y `public-sector-software`, también seguían visibles en las superficies de publicación.
- Texto localizado original: La página en esloveno utilizaba el título localizado `Cena programske opreme samo v angleščini`, pero los lectores seguían viendo resumen en inglés, etiquetas temáticas renderizadas en inglés y secciones del cuerpo en inglés.
- Texto localizado mejorado: El artículo publicado en esloveno ahora utiliza el resumen localizado `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` También utiliza cuerpo localizado y etiquetas temáticas renderizadas localizadas, sin placeholders en inglés ni filtraciones de lengua mixta.
- Explicación: Este es un ejemplo a nivel de repositorio, más que de una sola frase, pero es esencial. A primera vista la página parecía traducida. Existían una ruta localizada y un título localizado. Ese éxito superficial podría haber superado fácilmente una revisión casual. Sin embargo, un hablante nativo seguiría percibiendo la página como visiblemente incompleta porque el inglés seguía presente en superficies de publicación orientadas al lector. También es aquí donde la jerga profesional no localizada y la terminología inglesa innecesaria suelen aflorar primero: etiquetas de taxonomía, resúmenes, metadatos y texto auxiliar se filtran antes de que se corrijan los párrafos principales.
- Categoría: publicación en lengua mixta; integridad de la localización; terminología inglesa innecesaria; jerga profesional no localizada
- ¿Lo detectaría probablemente el QA automatizado?: Sí, si están habilitados validadores de integridad del markdown fuente y del HTML generado. No, si el flujo de trabajo solo comprueba la existencia de archivos y no la salida orientada al lector.
- Lecciones aprendidas: La cobertura sin integridad es un defecto de producción. La publicación en lengua mixta debe tratarse como un fallo de calidad bloqueante, no como un problema cosmético.

### Hallazgo 6 - Ajuste A Audiencia Educativa E Institucional

- Artículo fuente: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Lengua: Esloveno
- Texto original en inglés: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Texto localizado original: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Texto localizado mejorado: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Explicación: La frase localizada original tiene sentido y es comprensible, pero vuelve a arrastrar hábitos retóricos del inglés y un estilo nominal algo pesado. La versión mejorada se lee con más naturalidad para una audiencia educativa, reduce abstracción innecesaria y encaja mejor con la prosa explicativa en esloveno.
- Categoría: desajuste con el estilo educativo; desajuste con las expectativas de la audiencia; mejora de tono
- ¿Lo detectaría probablemente el QA automatizado?: No.
- Lecciones aprendidas: La educación del lector forma parte de la calidad de la localización. Una frase puede ser correcta y aun así no dar con la voz didáctica natural que espera su audiencia.

### Hallazgo 7 - Optimización Del Texto Fuente Para La Localización

- Artículo fuente: `docs/blog/en/why-every-language-matters.md` y variantes localizadas de la misma familia de artículos
- Lengua: Fuente en inglés con impacto de localización entre locales; disparador de revisión observado en esloveno
- Texto original en inglés: `The hidden exclusion of English-only systems`
- Texto localizado original: Esloveno: `Skrita izključitev angleško-izključnih sistemov`
- Texto localizado mejorado: Inglés: `Why English-only systems exclude people` Esloveno: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Explicación: El encabezado original en inglés es técnicamente correcto, pero comprime demasiado dentro de un patrón nominal específico del inglés. Se apoya en el sustantivo abstracto `exclusion` y en el modificador compacto `English-only systems`. Esa combinación es eficiente en inglés, pero incómoda en muchas lenguas de destino. En esloveno produjo una frase gramaticalmente posible pero poco natural, `angleško-izključnih sistemov`, que exige un esfuerzo extra de decodificación al lector. No es principalmente un fallo de la lengua de destino. Es un problema de diseño del texto fuente. Reescribir el encabezado en inglés como una cláusula más explícita mejora la legibilidad en inglés y facilita una traducción natural en toda la familia de artículos.
- Categoría: optimización del texto fuente para la localización; prevención del traduccionés; redacción favorable a la localización
- ¿Lo detectaría probablemente el QA automatizado?: No. El QA estructural, la corrección ortográfica, las comprobaciones de paridad semántica y las comprobaciones de integridad probablemente pasarían todas. El problema aparece cuando hablantes nativos evalúan la naturalidad y la traducibilidad entre lenguas.
- Lecciones aprendidas: Algunos problemas de localización deben resolverse en la fuente, no por separado en cada locale. Si varias lenguas tropiezan con la misma construcción inglesa comprimida, la redacción fuente debería revisarse por su facilidad de localización.

### Hallazgo 8 - Falso Amigo De Terminología Técnica

- Artículo fuente: `docs/wiki/let-books-localization-case-study.md` y `docs/wiki/sl/let-books-localization-case-study.md`
- Lengua: Hallazgo de revisión en esloveno activado por terminología técnica inglesa
- Texto original en inglés: `Benchmark fixture direction` y `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Texto localizado original: `Primerjalna smer napeljave` y `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Texto localizado mejorado: `Referenčni primeri za primerjalno vrednotenje` y `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Explicación: El problema no es gramatical. Es de interpretación de dominio. En contextos de testing, benchmarking y evaluación, `fixture` suele significar un ejemplo de referencia reutilizable, un caso de prueba o un artefacto de evaluación. La traducción al esloveno interpretó el término con un significado de infraestructura física relacionado con cableado o instalación. Eso produjo un texto semánticamente engañoso, aunque el traductor pudiera haber elegido una acepción válida de diccionario. Este es un falso amigo clásico de terminología técnica: ganó el dominio equivocado.
- Categoría: falso amigo de terminología técnica; terminología de dominio; vocabulario de testing y evaluación
- ¿Lo detectaría probablemente el QA automatizado?: No. La ortografía, la gramática y las comprobaciones semánticas amplias pueden pasar porque la frase sigue siendo superficialmente coherente. El fallo aparece cuando una revisión humana con conocimiento del dominio comprueba si el término técnico pertenece al contexto profesional correcto.
- Lecciones aprendidas: La terminología técnica debe traducirse por significado de dominio, no por el significado de diccionario por defecto. Aquí son interpretaciones adecuadas ejemplos de benchmark reutilizables, casos de prueba de benchmark o ejemplos de referencia para evaluación; no lo son los significados relacionados con infraestructura.

### Regla Operativa Para El Corpus

Siempre que se descubra una nueva categoría:

1. corregir el contenido
2. añadir una entrada al corpus
3. clasificar el problema
4. añadir o refinar la guía
5. añadir cobertura de validador si es práctico
6. añadir cobertura de regresión si es práctico
7. enlazar el nuevo hallazgo desde la documentación de workflow y QA

Los hablantes nativos son más valiosos aquí no porque corrijan errores obvios.

Son más valiosos porque transforman contenido correcto en comunicación natural, culturalmente apropiada y apta para publicación.

## Parte 7 - Aprendizaje Continuo

Cada problema de localización debería mejorar el sistema.

El bucle preferido es:

```text
Encontrar el problema
↓
Corregir el problema
↓
Documentar el problema
↓
Clasificar el problema
↓
Mejorar el workflow
↓
Añadir validación cuando sea práctico
↓
Prevenir la recurrencia
```

El resultado ideal es que un problema de localización se corrija:

- una vez en el contenido
- una vez en el sistema

## Parte 8 - Evolución De Los Validadores

Para cada problema significativo, pregunta:

> ¿Puede detectarse automáticamente?

### Totalmente Automatizable

Ejemplos:

- variante de artículo faltante
- resumen sin traducir
- metadatos sin traducir
- página en lengua mixta
- cambio de idioma roto
- navegación generada faltante

### Parcialmente Automatizable

Ejemplos:

- acortamiento sospechoso
- probable deriva semántica
- explicación para la audiencia faltante
- paridad de contenido relacionado faltante
- desajuste sospechoso de diagrama

### Revisión Humana

Ejemplos:

- naturalidad retórica
- fluidez
- adecuación cultural
- eficacia educativa
- registro de lengua nativa
- adecuación al estilo del sector público

La pregunta correcta no es si las personas o los validadores son mejores.

La pregunta correcta es a qué capa de feedback pertenece cada clase de defecto.

## Cuando La Calidad Se Vuelve Medible

Al principio, la confianza proviene sobre todo de la inspección manual.

Los desarrolladores leen páginas.

Los revisores comparan traducciones.

Los colaboradores buscan problemas uno por uno.

A medida que el repositorio madura, la confianza empieza a venir de mecanismos acumulados de feedback:

- documentación
- guías de revisión
- validadores
- comprobaciones de CI
- comprobaciones de accesibilidad
- comprobaciones de paridad semántica
- comprobaciones de integridad de localización
- hallazgos de revisión de hablantes nativos
- pruebas de regresión

En ese punto, la pregunta principal cambia.

En lugar de preguntar:

> ¿Lo revisamos todo manualmente?

el proyecto empieza a preguntar:

> ¿Qué sistemas de feedback permitirían que un problema sobreviviera sin ser detectado?

Esa es la transición de la verificación de contenido a la verificación del sistema.

Un sistema de localización maduro no es uno que nunca contenga defectos.

Un sistema de localización maduro es aquel en el que las clases de defectos conocidas están:

- documentadas
- detectables
- reproducibles
- rastreadas
- monitorizadas continuamente
- son difíciles de reintroducir por accidente

## Parte 9 - Deuda De Localización

Haz seguimiento de `Localization Debt` como el backlog de contenido restante.

La deuda típica incluye:

- resúmenes sin traducir
- metadatos sin traducir
- cuerpos sin traducir
- placeholders
- diagramas sin traducir
- etiquetas sin traducir
- enlaces obsoletos de variantes de idioma

La deuda mide el trabajo de remediación que queda.

La deuda no dice si el sistema está aprendiendo.

## Parte 10 - Clases De Defectos Abiertas

Haz seguimiento de `Open Defect Classes` como el número de categorías de problemas que aún no están totalmente prevenidas por políticas, workflows, validadores y CI.

Ejemplos:

- resúmenes sin traducir
- cuerpos sin traducir
- publicación de placeholders
- metadatos sin traducir
- publicación en lengua mixta
- futuras clases descubiertas

La deuda mide el trabajo pendiente.

Las clases de defectos miden la madurez del sistema.

## Parte 11 - Corregir Las Clases Antes Que Los Archivos

No optimices principalmente en torno a:

```text
47 archivos pendientes
```

Optimiza en torno a:

```text
3 clases de defectos pendientes
```

Proceso preferido:

1. identificar la clase
2. determinar la causa raíz
3. corregir la fuente del nivel más alto
4. actualizar el validador
5. actualizar el workflow
6. después corregir el contenido restante

El mismo error repetido en muchos archivos suele ser un problema de sistema antes que un problema de archivo.

## Parte 12 - Cierre De Clases De Defectos

Cuando una clase de defectos llega a cero ocurrencias:

1. añadir cobertura de validador si falta
2. hacer que la validación sea bloqueante cuando sea práctico
3. añadir comprobaciones de regresión
4. actualizar la guía para colaboradores
5. actualizar la guía para agentes de IA
6. marcar la clase como cerrada

El objetivo no es:

> Ninguna ocurrencia hoy.

El objetivo es:

> El problema no puede volver silenciosamente mañana.

## Parte 13 - Remediación Empezando Por La Fuente

Orden de investigación predeterminado:

1. markdown fuente
2. archivos fuente de localización
3. metadatos
4. registros
5. generadores
6. artefactos generados
7. HTML generado

Corrige la fuente del nivel más alto posible.

Evita parchear HTML generado cuando el contenido fuente es incorrecto.

Eso evita trabajos repetidos de reparación aguas abajo y mantiene el repositorio explicable.

## Parte 14 - Workflow Para Agentes De IA

El workflow estándar de troubleshooting es:

```text
Encontrar el problema
↓
Encontrar la fuente de verdad
↓
Corregir la fuente
↓
Regenerar
↓
Validar
↓
Repetir
```

Cuando el mismo problema aparece repetidamente:

```text
Crear clase de defecto
↓
Crear validador
↓
Crear guía
↓
Continuar la remediación
```

La cuarta aparición del mismo problema normalmente debería activar una mejora del sistema en lugar de otra corrección manual aislada.

## Parte 15 - Deriva De Localización

La deriva de localización significa que el contenido localizado existe, pero ya no refleja la fuente.

Los casos típicos de deriva incluyen:

- nuevas secciones en la fuente
- nuevos ejemplos
- nuevas advertencias
- conclusiones cambiadas
- diagramas cambiados
- capturas de pantalla actualizadas
- guía para colaboradores modificada

La vigencia es la forma en que la deriva se vuelve medible.

La gestión de la deriva debería usar:

- conciencia de las revisiones de la fuente
- comparación semántica cuando sea práctico
- primero CI basada en advertencias
- CI bloqueante cuando la confianza sea alta
- atención explícita de revisores durante actualizaciones importantes

## Parte 16 - Modelo De Madurez Del Repositorio

El repositorio debería avanzar por estas etapas:

1. Traducir contenido.
2. Detectar problemas.
3. Crear validadores.
4. Automatizar la validación.
5. Prevenir la recurrencia.
6. Gestionar la deriva de localización.
7. Enseñar a futuros colaboradores y sistemas de IA.

Así es como se acumula el conocimiento institucional.

El trabajo anterior deja de ser desechable porque los sistemas posteriores lo heredan.

## Parte 17 - Hoja De Ruta De Contenido

El programa debería mantener una cobertura multilingüe coherente en:

- artículos de blog que expliquen por qué importa la localización
- páginas wiki que definan políticas y reglas de referencia
- guías prácticas que enseñen workflows
- guías de estilo que enseñen redacción, terminología y práctica de revisión
- documentos de auditoría y gobernanza que rastreen madurez y defectos
- estudios de caso que preserven evidencia práctica

La hoja de ruta debería priorizar:

1. integridad canónica del inglés
2. cobertura lingüística completa en todos los locales admitidos
3. integridad orientada al lector en cada locale
4. cobertura de validadores de alto valor
5. crecimiento del corpus de hablantes nativos
6. monitorización de deriva para contenido emblemático

Todos los documentos principales deberían enlazarse agresivamente entre sí para que los lectores puedan pasar de principio a workflow, a política y a evidencia.

## Parte 18 - Criterios De Éxito

Un lector que cambie entre lenguas admitidas debería encontrar:

- los mismos conceptos fundamentales
- los mismos ejemplos
- las mismas advertencias
- el mismo valor educativo
- la misma guía práctica

Al mismo tiempo, cada lengua debería sentirse escrita de forma natural para su audiencia.

El objetivo más alto de la Localización a escala es:

**cobertura lingüística completa, integridad de la localización, paridad semántica, legibilidad en lengua nativa, adecuación cultural, eficacia educativa, mejora continua, prevención de defectos, gestión de la deriva y publicación multilingüe sostenible mediante fuertes bucles de feedback.**

## Métricas Operativas

Haz seguimiento continuo de estos números:

```text
Localization Debt = X
Open Defect Classes = Y
```

La meta a largo plazo es:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Documentos Relacionados

- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `wiki/localization-governance.md`
- `wiki/localization-maturity-model.md`
- `wiki/let-books-localization-case-study.md`
- `style-guide/localization/README.md`
- `style-guide/localization/ai-translation-review-records.md`
- `learning/how-to-build-a-localization-pipeline.md`
- `learning/how-to-review-ai-assisted-translations.md`
- `learning/how-to-run-localization-qa-in-ci.md`
- `localization-audit-report.md`
