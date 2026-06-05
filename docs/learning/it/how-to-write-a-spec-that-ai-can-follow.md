---
title: "Come scrivere una specifica che l'IA può seguire"
summary: >-
  Questa guida spiega come scrivere una specifica di prodotto o di funzionalità che aiuti l'implementazione assistita dall'IA a restare allineata agli obiettivi reali del prodotto invece di andare alla deriva verso un output generico.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Come scrivere una specifica che l'IA può seguire

## Riepilogo

Questa guida spiega come scrivere una specifica di prodotto o di funzionalità così che l'implementazione assistita dall'IA resti allineata agli obiettivi reali del prodotto, invece di scivolare verso un risultato generico.

## Perché conta

L'IA può generare codice rapidamente, ma funziona al meglio quando il compito ha confini chiari.

Se una specifica è vaga, l'IA colmerà spesso le lacune con impostazioni plausibili prese come predefinite:

- pattern architetturali comuni
- flussi UI generici
- astrazioni non necessarie
- assunzioni inventate su ciò che il prodotto dovrebbe fare

Questo risultato può sembrare ben rifinito ed essere comunque sbagliato.

## Cosa dovrebbe includere una specifica utile per l'IA

### 1. Scopo del prodotto

Indica perché la funzionalità esiste.

Male:

> Aggiungi un modulo per libro.

Meglio:

> Aggiungi un modulo di intake rapido che permetta a un donatore di catalogare una singola copia fisica di libro in pochi secondi mentre si trova vicino a uno scaffale o a una scatola.

Lo scopo indica chiaramente a chi implementa su che cosa deve ottimizzare.

### 2. Confini dell'ambito

Indica cosa è in ambito e cosa è fuori ambito.

Esempio:

- in ambito: foto della copertina, inserimento ISBN, posizione di archiviazione, salva e continua
- fuori ambito: OCR, sincronizzazione cloud, flusso di revisione istituzionale

Questo impedisce all'assistente di gonfiare un piccolo compito fino a trasformarlo in una mini-piattaforma.

### 3. Comportamento richiesto

Elenca le regole non negoziabili.

Esempi dall'approccio Let Books:

- il flusso manuale deve funzionare senza IA
- i dati incompleti devono essere consentiti
- le copie fisiche devono restare separate dai record bibliografici
- il comportamento visibile all'utente deve restare localizzabile

Queste regole contano più dello stile di implementazione.

### 4. Comportamento di errore e di fallback

Le soluzioni generate dall'IA spesso ottimizzano il percorso felice. Una buona specifica spiega cosa succede quando i sistemi opzionali falliscono.

Esempio:

- se la ricerca dei metadati fallisce, l'inserimento manuale resta disponibile
- se l'OCR è disabilitato, l'intake continua a funzionare
- se la validazione dell'export fallisce, l'utente riceve un report chiaro invece di un import parziale silenzioso

### 5. Criteri di accettazione

Scrivi la condizione di successo in termini osservabili.

Esempio:

1. l'utente seleziona una scatola
2. l'utente inserisce o scansiona un ISBN
3. l'utente può salvare anche se nessun provider di metadati risponde
4. il libro appare nella posizione selezionata

I criteri di accettazione danno a revisori e sistemi IA un obiettivo stabile.

## Cosa evitare

- obiettivi vaghi come "migliora la UX"
- dettagli implementativi senza scopo di prodotto
- idee future mescolate e presentate come requisiti attuali
- assunzioni nascoste su ruoli utente o qualità dei dati
- specifiche che si limitano al naming e non descrivono il flusso di lavoro

## Un modello pratico di scrittura

Usa questa struttura compatta quando prepari una specifica di funzionalità.

1. problema
2. utente e contesto
3. flusso di lavoro in ambito
4. elementi fuori ambito
5. regole richieste
6. comportamento di fallback
7. criteri di accettazione
8. note di verifica

## Come questo si mappa su Let Books

Il repository dimostra già questo modello a più livelli:

- `AGENTS.md` definisce scopo del prodotto, flussi di lavoro e criteri di accettazione
- `AGENTS-Implementation.md` definisce vincoli tattici di consegna
- `README.md` separa lo stato attuale dalla direzione futura

Questo approccio a strati è utile perché l'IA lavora meglio quando ciò che definisce il prodotto è scritto in modo chiaro e può essere rivisto.

## Esercizio

Prendi una funzionalità di Let Books come la scansione del QR della scatola o l'import delle decisioni Excel e scrivi una specifica di una pagina usando la struttura sopra.

Poi chiedi a un assistente di coding di implementarla.

Successivamente rivedi l'output rispetto alla specifica prima di rivedere lo stile del codice. Questo ordine conta.

## Ulteriori letture

- `../spec-driven-content-program.md`
- `../wiki/it/spec-driven-development.md`
- `../wiki/it/demo-spec-alignment.md`
- `../blog/it/spec-driven-development-for-ai-projects.md`
