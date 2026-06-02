---
title: "Come trasformare una specifica di prodotto in un piano di implementazione"
summary: >-
  Questa guida spiega come tradurre una specifica di prodotto in un piano di implementazione concreto senza perdere l'intento, i confini o le regole del flusso di lavoro che rendevano utile la specifica in primo luogo.
topics:
  - spec-writing
  - implementation-planning
  - project-management
---
# Come trasformare una specifica di prodotto in un piano di implementazione

## Riepilogo

Questa guida spiega come tradurre una specifica di prodotto in un piano di implementazione concreto senza perdere l'intento, i confini o le regole del flusso di lavoro che rendevano utile la specifica in primo luogo.

## Perché questo passaggio è importante

Una specifica descrive che cosa il prodotto dovrebbe fare e perché dovrebbe farlo.

Un piano di implementazione descrive come il team consegnerà quel comportamento in una sequenza che sia rivedibile, verificabile e realistica.

Molti progetti falliscono proprio nel divario tra questi due documenti.

La specifica può essere buona, ma il piano diventa troppo vago, troppo tecnico o troppo scollegato dai flussi di lavoro degli utenti. Nel lavoro assistito dall'IA questo è ancora più comune, perché il codice generato può far sembrare che la pianificazione sia già avvenuta quando in realtà non è così.

## Inizia estraendo le decisioni di prodotto

Prima di trasformare una specifica in attività, identifica le decisioni che vincolano davvero l'implementazione.

Cerca:

- scopo del prodotto
- flusso di lavoro dell'utente
- confini dell'ambito
- regole non negoziabili
- comportamento di fallback
- criteri di accettazione

Queste sono le parti che dovrebbero sopravvivere al passaggio da specifica a piano.

Se il piano le perde, di solito diventa una lista tecnica di cose da fare invece che un piano di consegna.

## Separa il piano in livelli

Un buon piano di implementazione di solito ha almeno tre livelli.

### 1. Livello del flusso di lavoro

Descrivi il flusso rivolto all'utente con passaggi brevi e concreti.

Esempio:

1. l'utente seleziona una scatola di archiviazione
2. l'utente scansiona o inserisce un ISBN
3. l'utente può comunque continuare se la ricerca fallisce
4. l'utente salva la copia fisica nella posizione selezionata

Questo livello protegge il percorso utente dal venir sepolto sotto attività tecniche.

### 2. Livello di sistema

Descrivi le parti del sistema che devono supportare quel flusso di lavoro.

Esempi:

- modifiche al modello dati
- schermate o moduli UI
- regole di validazione
- comportamento di import/export
- aggiornamenti di localizzazione
- esigenze di verifica

Questo livello collega il comportamento di prodotto al lavoro tecnico.

### 3. Livello di consegna

Scomponi il lavoro di sistema in una sequenza che possa davvero essere implementata e rivista.

Esempi:

1. definire o aggiornare il modello di dominio
2. implementare il flusso UI principale
3. aggiungere il comportamento di fallback
4. aggiungere validazione e test
5. aggiornare documentazione ed esempi

Questo è il livello in cui il piano diventa pianificabile.

## Mantieni il piano modellato dai vincoli

I piani di implementazione spesso vanno in deriva quando vengono riscritti come passaggi ingegneristici generici.

Per evitarlo, mantieni visibili nel piano i vincoli chiave del prodotto.

Per un lavoro in stile Let Books, questo può includere vincoli come:

- i flussi manuali devono continuare a funzionare senza IA
- i dati incompleti devono essere consentiti
- le copie fisiche devono restare distinte dai record bibliografici
- la localizzazione non può essere trattata come rifinitura opzionale
- la documentazione dello stato attuale deve restare onesta su ciò che esiste ora

Questi vincoli non dovrebbero vivere solo nella specifica originale. Dovrebbero comparire anche nelle note di pianificazione e nei criteri di revisione.

## Usa i criteri di accettazione per modellare la scomposizione delle attività

Uno dei modi più semplici per trasformare una specifica in un piano è partire dai criteri di accettazione.

Per ogni criterio, chiediti:

- quale UI o flusso di lavoro lo supporta
- quale dato o comportamento di sistema lo supporta
- quale caso di fallimento deve comunque riuscire
- come lo verificheremo

Questo metodo mantiene il piano legato a risultati osservabili invece che a discussioni astratte di architettura.

## Pianificazione assistita dall'IA: cosa osservare

L'IA può aiutare a produrre rapidamente un piano di implementazione, ma spesso introduce problemi ricorrenti:

- astrazioni aggiuntive senza bisogno di prodotto
- attività raggruppate per tecnologia invece che per flusso di lavoro
- omissione ottimistica del comportamento di fallback
- assunzioni nascoste sulla disponibilità del backend o sulla qualità dei dati
- piani che sembrano completi ma ignorano documentazione e verifica

Quando rivedi un piano di implementazione generato dall'IA, chiediti se riflette ancora l'effettivo insieme di regole del prodotto.

## Un modello pratico di pianificazione

Usa una struttura come questa:

1. obiettivo della funzionalità
2. riepilogo del flusso di lavoro dell'utente
3. vincoli e regole non negoziabili
4. sezioni di consegna
5. strategia di verifica
6. aggiornamenti di documentazione richiesti

Per esempio, una sezione di consegna potrebbe essere:

- aggiungere il selettore della posizione di archiviazione al flusso di intake
- consentire il salvataggio anche senza successo della ricerca metadati
- persistere la copia fisica separatamente dai metadati bibliografici
- aggiornare il testo della guida e le note di verifica

Questo è molto più forte di una lista piatta come:

- creare un modulo
- aggiungere una chiamata API
- aggiungere test

## Esempio da Let Books

Il repository contiene già gli input grezzi per questo stile di pianificazione:

- `AGENTS.md` per scopo del prodotto, flussi di lavoro e criteri di accettazione
- `AGENTS-Implementation.md` per vincoli di consegna e regole del repository
- `README.md` per le aspettative sullo stato attuale
- `docs/Development.md` e `docs/Deployment.md` per il contesto di validazione e consegna

Questo significa che il piano di implementazione non deve inventare una propria logica. Dovrebbe tradurre questi livelli in una sequenza di consegna delimitata.

## Checklist di revisione

Prima di accettare un piano di implementazione, controlla:

1. Preserva il flusso di lavoro utente della specifica?
2. Mantiene visibili i vincoli di prodotto non negoziabili?
3. Include comportamento di fallback e di fallimento?
4. Include documentazione e verifica, non solo attività di codice?
5. Un altro collaboratore potrebbe implementare a partire da questo piano senza dover indovinare l'intento di prodotto?

## Ulteriori letture

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/it/spec-driven-development.md`
- `../blog/it/spec-driven-development-in-let-books.md`
