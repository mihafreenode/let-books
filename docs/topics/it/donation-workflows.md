---
title: "Workflow di donazione"
summary: "Come i sistemi di donazione di libri passano dall'inventario alla revisione, alla selezione, al recupero e alla consegna invece di fermarsi alla semplice creazione del catalogo."
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

# Workflow di donazione

I workflow di donazione descrivono il percorso pratico che un libro segue dallo stoccaggio privato verso revisione, selezione, recupero e consegna. In molti progetti questo workflow conta quanto i metadati stessi, perché il problema principale non è solo sapere che cosa sia il libro, ma anche rendere gestibile il trasferimento.

Un flusso di donazione completo di solito include intake, identificazione, tracciamento dello stoccaggio, decisioni dei revisori, pick list e aggiornamenti finali di stato. Se uno qualsiasi di questi passaggi è debole, il processo diventa più difficile sia per i donatori sia per le istituzioni. I libri possono essere catalogati ma mai revisionati, selezionati ma non trovati, oppure imballati senza una chiara traccia di audit.

Per questo i workflow di donazione dovrebbero essere modellati esplicitamente invece di essere trattati come un'aggiunta successiva alla catalogazione. Il livello dei metadati supporta la revisione, ma il livello del workflow supporta l'azione. Dice al sistema quali libri sono disponibili, quali sono desiderati, quali sono imballati e quali restano ancora irrisolti.

In Let Books questa è una delle idee che definiscono il progetto. La piattaforma non è presentata solo come scanner o strumento di metadati. È pensata per aiutare le persone a evitare di perdere libri educativi di valore rendendo pratico il vero processo di donazione. Questo include acquisizione mobile, revisione in Excel, recupero basato su scatole e cambi di stato tracciabili.

La specifica in `AGENTS.md` e il materiale di workflow già presente nella documentazione mostrano che questo livello operativo è di prima classe. La donazione non è solo un possibile esito della catalogazione. È una delle ragioni principali per cui il catalogo esiste.
