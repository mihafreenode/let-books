---
title: "Metadati del libro"
summary: "Come le informazioni descrittive sui libri supportano scoperta, revisione e decisioni di donazione e perché i metadati restano più ampi di qualsiasi singolo identificatore."
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

# Metadati del libro

I metadati del libro sono le informazioni descrittive usate per identificare, organizzare e valutare un libro. I campi comuni includono titolo, sottotitolo, autore, editore, anno di pubblicazione, lingua, edizione, ISBN e informazioni per soggetto. Nei contesti bibliotecari e di catalogo, i metadati possono includere anche riferimenti di autorità, identificatori esterni, riassunti e dati di provenienza.

I metadati contano perché gli utenti raramente prendono decisioni basandosi solo sugli identificatori. Le biblioteche hanno bisogno di informazioni sufficienti per valutare la rilevanza. I donatori hanno bisogno di informazioni sufficienti per capire che cosa possiedono. I revisori hanno bisogno di informazioni sufficienti per collegare una copia fisica al giusto record bibliografico. Buoni metadati rendono queste decisioni più rapide e meno ambigue.

Nessun singolo campo è sufficiente da solo. L'ISBN è utile ma incompleto. I titoli possono variare nella grafia o nella traduzione. I nomi degli autori possono comparire in forme diverse. Le date di pubblicazione possono essere poco chiare nel materiale più vecchio. Per questo i flussi robusti dei metadati di solito combinano più campi e preservano la fonte di ogni valore.

In Let Books i metadati sono anche legati alla distinzione tra record bibliografici e copie fisiche. Una copia fisica può ereditare metadati a livello di edizione pur avendo il proprio stato di conservazione, la propria posizione di stoccaggio e il proprio stato di workflow. La pagina tematica separata [Edizione vs copia fisica](/docs/topics/it/edition-vs-physical-copy.html) spiega direttamente questo modello.

Per un esempio pratico di come la ricerca basata su ISBN si inserisca in un processo di metadati più ampio, vedi il tema [ISBN](/docs/topics/it/isbn.html), l'articolo del blog [ISBN non è un database](/docs/blog/it/isbn-not-a-database.html) e la nota del repository su `docs/book-metadata.md` che descrive l'attuale catena di lookup usata nella demo alpha.
