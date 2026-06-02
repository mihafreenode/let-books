---
title: "Let Books Caso di studio sulla localizzazione"
summary: >-
  Let Books è un caso di studio vivente sulla creazione di una piattaforma di conoscenza multilingue e di una visione del prodotto prima che esista un'applicazione backend completa.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Let Books Caso di studio sulla localizzazione

## Riepilogo

Let Books è un caso di studio vivente sulla creazione di una piattaforma di conoscenza multilingue e di una visione del prodotto prima che esista un'applicazione backend completa.

Il modello di programma centrale ora risiede nei `../localization-at-scale-program.md`. Questa pagina si concentra sulle prove specifiche del repository che supportano quel manuale.

## Perché è utile

Mostra come un progetto può:

- definire in anticipo l'ambito locale
- mantenere l'accessibilità legata alla localizzazione
- utilizzare la creazione in inglese senza cadere nella pubblicazione solo in inglese
- documentare la governance prima che arrivi la scala

## Esempio di revisione dell'intelligenza artificiale slovena

L’archivio include un esempio concreto di revisione slovena in cui la bozza di AI ha mantenuto il significato ampio ma richiedeva comunque la correzione da parte dei madrelingua per modalità, fluidità e formulazione del registro delle politiche.

Il resoconto dettagliato ora si trova nella sezione Risultati della revisione dei madrelingua del `../localization-at-scale-program.md` e nel `../../style-guide/localization/ai-translation-review-records.md`.

Lezioni chiave:

- Gli errori grammaticali possono sopravvivere anche quando la frase sembra comprensibile
- la modalità è particolarmente vulnerabile alla traduzione letterale
- Il linguaggio delle politiche e delle specifiche del prodotto spesso necessita di un registro specifico del dominio piuttosto che di un'equivalenza a livello di dizionario
- i controlli automatizzati raramente rilevano da soli sottili problemi di fluidità e modalità

## Esempio di pubblicazione in lingue miste

Articolo fonte: `docs/blog/it/the-cost-of-english-only-software.md`

Questa famiglia di articoli ha fornito un esempio concreto di un titolo localizzato e di un guscio parzialmente localizzato che coesiste con le superfici di pubblicazione inglesi rivolte al lettore.

L'interpretazione dettagliata a livello di programma ora si trova nella sezione Risultati della revisione dei madrelingua del `../localization-at-scale-program.md` e nel `../localization-audit-report.md`.

Lezioni specifiche del repository:

- la copertura non equivale alla completezza
- I metadati di origine sono importanti perché i riassunti possono penetrare nelle superfici delle pubblicazioni
- La localizzazione della tassonomia è importante perché le etichette degli argomenti in inglese sono difetti visibili per il lettore
- i HTML generati dovrebbero essere convalidati, non attendibili ciecamente

## Esempi di benchmark riutilizzabili

Gli esempi di revisione strutturata dovrebbero anche essere archiviati come esempi di benchmark riutilizzabili in modo che la futura valutazione LLM possa misurare:

- affidabilità grammaticale
- gestione delle modalità
- precisione terminologica
- accuratezza del registro delle politiche
- qualità della cattura delle motivazioni del revisore

## Pagine correlate

- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../../blog/it/why-every-language-matters.md`