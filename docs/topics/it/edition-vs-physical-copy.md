---
title: "Edizione vs copia fisica"
summary: "Perché un'edizione bibliografica e un singolo libro conservato sono entità collegate ma non dovrebbero essere trattate come lo stesso record."
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

# Edizione vs copia fisica

Un'edizione è un concetto bibliografico. Una copia fisica è un oggetto reale. Le due cose sono collegate, ma rispondono a domande diverse.

Un'edizione descrive la forma pubblicata di un libro: titolo, editore, anno, lingua, ISBN e altri metadati condivisi. Una copia fisica descrive un singolo oggetto reale in stoccaggio o in circolazione: il suo stato, i segni di proprietà, la posizione nella scatola, le foto, lo stato di donazione e la storia di gestione.

Molti problemi di biblioteca e inventario derivano dal collassare insieme questi due livelli. Se un progetto modella solo le edizioni, non può tracciare in modo affidabile quale copia è danneggiata, richiesta, consegnata o ancora in una scatola in cantina. Se modella solo le copie fisiche, può duplicare inutilmente i metadati bibliografici e rendere più difficile l'abbinamento.

Per questo i moderni sistemi di gestione dei libri trattano spesso edizione e copia come entità separate ma collegate. L'edizione supporta identificazione e scoperta. La copia supporta logistica e decisione.

Questa distinzione è centrale in Let Books perché il progetto è costruito attorno a workflow reali di donazione e recupero. Un donatore può possedere cinque copie dello stesso libro di testo, ciascuna con una condizione o una posizione di stoccaggio diversa. Una biblioteca potrebbe volerne solo una. Senza la separazione tra edizione e copia, questi workflow diventano molto rapidamente confusi.

L'articolo esistente [ISBN non è un database](/docs/blog/it/isbn-not-a-database.html) rafforza questo punto dall'angolo dell'identificatore. Questa pagina tema espone direttamente il modello: l'identità bibliografica non cancella la differenza fisica.
