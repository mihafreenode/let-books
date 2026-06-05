---
title: "Come mantenere allineati specifica, documentazione, demo e codice"
summary: >-
  Questa guida descrive un flusso di lavoro pratico per mantenere allineati nel tempo la specifica di prodotto, la documentazione, il comportamento della demo e il lavoro di implementazione.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Come mantenere allineati specifica, documentazione, demo e codice

## Riepilogo

Questa guida descrive un flusso di lavoro pratico per mantenere nel tempo allineati la specifica di prodotto, la documentazione, il comportamento della demo e il lavoro di implementazione.

## Il problema centrale

La deriva del prodotto raramente inizia con un errore drammatico. Più spesso comincia con piccoli scarti.

Esempi:

- la demo aggiunge un nuovo flusso di lavoro ma la specifica non viene mai aggiornata
- la documentazione descrive una funzionalità che non si comporta più in quel modo
- il codice implementa una scorciatoia comoda che viola una regola del prodotto
- i controlli di validazione applicano solo la sintassi, non l'intento del prodotto

L'IA può accelerare ancora di più tutto questo se il flusso di allineamento è debole.

## Il modello di allineamento

Usa questo ordine di autorità:

1. specifica di prodotto
2. linee guida di implementazione
3. documentazione dello stato attuale
4. comportamento della demo o dell'applicazione
5. test e regole di validazione

I livelli inferiori dovrebbero supportare quelli superiori. Se entrano in conflitto, aggiorna intenzionalmente la catena invece di lasciare che vinca automaticamente l'artefatto più visibile.

## Flusso di lavoro consigliato

### 1. Inizia dalla modifica nella specifica

Se cambia un flusso di lavoro visibile all'utente o una regola di prodotto, aggiorna prima la specifica o la guida pertinente.

Usa:

- `AGENTS.md` per regole e flussi di lavoro a livello di prodotto
- `AGENTS-Implementation.md` per regole tattiche di repository e consegna

### 2. Aggiorna la documentazione dello stato attuale

Se il cambiamento influisce su ciò che esiste ora, aggiorna i documenti che descrivono lo stato attuale.

Esempi tipici:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- contenuti learning/wiki/blog nuovi o rivisti quando rilevanti

### 3. Aggiorna la demo o l'implementazione

Solo dopo che l'intento è chiaro andrebbero modificati la demo o l'applicazione.

Questo aiuta a prevenire il caso frequente in cui un prototipo diventa in silenzio la fonte di verità.

### 4. Aggiungi o aggiorna la validazione

Poi chiediti cosa può essere controllato automaticamente.

Esempi:

- completezza delle chiavi di localizzazione
- presenza dei file richiesti
- generazione dei metadati
- validazione dei link
- test specifici del flusso di lavoro

Non tutte le regole possono essere automatizzate subito, ma le regole importanti non dovrebbero restare dipendenti solo dalla memoria.

### 5. Rivedi rispetto alla specifica, non solo rispetto all'output

Quando rivedi le modifiche, non fermarti a:

- si esegue
- ha un bell'aspetto
- i test passano

Chiediti anche:

- corrisponde al flusso di lavoro documentato
- preserva il confine di prodotto richiesto
- la documentazione e la descrizione dello stato attuale sono rimaste oneste

## Gestire le scoperte fatte nella demo

A volte la demo insegna al team qualcosa di migliore rispetto alla specifica originale.

Questo è utile. La risposta corretta è:

1. documentare la scoperta
2. decidere se il cambiamento del flusso di lavoro è intenzionale
3. aggiornare specifica e documentazione
4. mantenere l'implementazione allineata alla decisione aggiornata

La risposta sbagliata è lasciare che la demo vinca in silenzio solo perché esiste già.

## Gestire l'implementazione assistita dall'IA

Con l'IA questo flusso di lavoro diventa ancora più importante perché gli assistenti spesso ottimizzano la plausibilità locale.

Un buon ciclo di allineamento è:

1. scrivere o aggiornare la specifica
2. generare l'implementazione
3. confrontare l'output con la specifica
4. aggiornare la documentazione se il comportamento attuale è cambiato
5. aggiungere validazione dove è pratico

## Esempio da Let Books

Il repository contiene già una utile catena di allineamento:

- `AGENTS.md` per la direzione del prodotto
- `AGENTS-Implementation.md` per le regole tattiche
- `README.md` per la descrizione dello stato attuale
- `docs/` per regole di conoscenza e pubblicazione
- documentazione di sviluppo e distribuzione per la guida sulla validazione

Questa struttura andrebbe usata in modo intenzionale ogni volta che si aggiungono nuove funzionalità, documenti o spiegazioni pubbliche.

## Lista di controllo

Prima di unire una modifica significativa, controlla:

1. La regola di prodotto o il flusso di lavoro è stato documentato chiaramente?
2. La documentazione dello stato attuale corrisponde ancora alla realtà?
3. La demo o l'implementazione riflettono la regola prevista?
4. Esiste almeno un meccanismo di validazione o revisione che protegga la modifica?
5. Un nuovo collaboratore potrebbe capire questa decisione più avanti?

## Ulteriori letture

- `../spec-driven-content-program.md`
- `../wiki/it/demo-spec-alignment.md`
- `../wiki/it/spec-driven-development.md`
- `../blog/it/spec-driven-development-in-let-books.md`
