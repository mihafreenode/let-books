---
title: "Come rivedere il lavoro assistito dall'IA rispetto alla specifica"
summary: >-
  Questa guida spiega come rivedere un'implementazione assistita dall'IA verificandola rispetto alla specifica di prodotto, alle regole del flusso di lavoro, alla documentazione e alle aspettative di validazione, invece di giudicare solo se l'output appare curato o tecnicamente plausibile.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# Come rivedere il lavoro assistito dall'IA rispetto alla specifica

## Riepilogo

Questa guida spiega come rivedere un'implementazione assistita dall'IA verificandola rispetto alla specifica di prodotto, alle regole del flusso di lavoro, alla documentazione e alle aspettative di validazione, invece di giudicare solo se il risultato appare curato o tecnicamente plausibile.

## Perché conta

L'IA può produrre molto rapidamente codice, testo, test e modifiche di interfaccia che sembrano complete.

Questa velocità crea un rischio nella revisione: chi rilegge può passare inconsciamente dal chiedersi "È il comportamento di prodotto corretto?" al chiedersi "Sembra ragionevole?"

Non sono la stessa domanda.

Nel lavoro guidato da specifiche, la revisione dovrebbe iniziare dall'allineamento e solo dopo passare alla qualità del codice, allo stile e ai dettagli implementativi.

## Parti dalla fonte di verità

Prima di rivedere l'output, identifica i documenti che definiscono il comportamento previsto.

Nel repository Let Books questo di solito significa:

- `AGENTS.md` per regole di prodotto, flussi di lavoro e ambito
- `AGENTS-Implementation.md` per vincoli tattici di consegna
- `README.md` per la descrizione dello stato attuale
- documentazione rilevante sotto `docs/` per linee guida di pubblicazione, verifica o flusso di lavoro

Senza questo passaggio, la revisione diventa facilmente soggettiva e troppo legata al contesto immediato.

## Rivedi nell'ordine giusto

Usa questo ordine quando rivedi lavoro assistito dall'IA.

### 1. Allineamento di prodotto

Chiediti se l'output corrisponde al flusso utente previsto e al confine del prodotto.

Esempi:

- l'inserimento manuale continua a funzionare dove la specifica lo richiede
- la modifica preserva la separazione tra copie fisiche e record bibliografici
- aggiunge comportamenti che non sono mai stati approvati
- presenta in modo errato funzioni IA opzionali come obbligatorie

Se l'allineamento di prodotto è sbagliato, non ha molto valore spendere prima tempo sulla rifinitura.

### 2. Allineamento della documentazione

Chiediti se i documenti circostanti descrivono ancora onestamente la realtà.

Esempi:

- un flusso di lavoro visibile all'utente è stato cambiato senza aggiornare la documentazione
- il README descrive ancora correttamente lo stato attuale
- le nuove affermazioni pubbliche corrispondono alla reale posizione documentata del prodotto

I cambiamenti generati dall'IA spesso modificano il comportamento senza ricordarsi di aggiornare la narrazione intorno a quel comportamento.

### 3. Validazione e comportamento di fallback

Chiediti se la modifica preserva le aspettative della specifica relative a fallimenti e fallback.

Esempi:

- il flusso di lavoro può ancora riuscire quando un provider opzionale fallisce
- gli input non validi vengono gestiti in modo esplicito
- gli output a bassa confidenza o incerti vengono trattati come suggerimenti invece che come fatti

È qui che molte implementazioni plausibili falliscono il vero test di prodotto.

### 4. Qualità tecnica

Solo dopo i controlli precedenti dovresti dedicare la maggior parte del tempo a:

- chiarezza
- manutenibilità
- denominazione
- duplicazione
- test
- struttura

La qualità tecnica continua a contare. Semplicemente non dovrebbe superare la correttezza di prodotto.

## Trappole comuni nella revisione

Il lavoro assistito dall'IA tende a creare diverse trappole di revisione ripetibili.

### La trappola dell'output rifinito

L'output appare pulito, quindi i revisori presumono che sia corretto.

### La trappola del contesto vicino

La modifica si adatta all'implementazione esistente più vicina, ma quell'implementazione potrebbe essere già andata in deriva.

### La trappola dell'ambito implicito

L'assistente aggiunge funzionalità, astrazioni o assunzioni che non erano mai state richieste, e il revisore le accetta perché non sono palesemente rotte.

### La trappola dei test che passano

I test possono passare perché validano il comportamento generato, non perché validano il comportamento di prodotto previsto.

## Una checklist pratica di revisione

Per ogni modifica sostanziale assistita dall'IA, chiediti:

1. Quale regola di prodotto o flusso di lavoro dovrebbe implementare questa modifica?
2. Quale specifica o documentazione definisce quella regola?
3. L'output preserva i vincoli richiesti?
4. Mantiene intatto il comportamento di fallback?
5. La documentazione corrisponde ancora al comportamento risultante?
6. Quali validazioni o test supportano la modifica?
7. L'assistente ha aggiunto qualcosa che dovrebbe essere rimosso perché fuori ambito?

## Come rivedere i test generati

I test generati sono utili, ma dovrebbero essere rivisti anch'essi rispetto alla specifica.

Chiediti:

- i test verificano il flusso di lavoro previsto
- coprono il comportamento di fallback
- riflettono le condizioni di contorno documentate
- stanno affermando un comportamento comodo che non è mai stato specificato

Questo è particolarmente importante nel lavoro guidato da specifiche perché una suite di test debole può consolidare la deriva.

## Esempi da Let Books

Esempi di domande a livello di specifica in questo repository includono:

- il flusso di lavoro resta utile anche senza servizi IA a pagamento
- la documentazione dello stato attuale separa chiaramente lo stato della demo dai futuri piani backend
- la documentazione pubblica evita di trattare il codice sorgente come prova editoriale canonica
- i passaggi di validazione restano parte del flusso di consegna invece che memoria opzionale

Queste domande sono abbastanza specifiche da guidare la revisione, che è esattamente ciò che una specifica dovrebbe permettere.

## La lezione duratura

La revisione del lavoro assistito dall'IA non consiste nel controllare se l'assistente ha prodotto qualcosa di impressionante. Consiste nel controllare se l'output appartiene ancora al prodotto previsto.

La domanda di revisione più utile di solito non è "Funziona?", ma "Corrisponde alla specifica, comprese le parti che è facile dimenticare?"

## Ulteriori letture

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/it/spec-driven-development.md`
- `../blog/it/spec-driven-development-for-ai-projects.md`
