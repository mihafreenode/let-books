---
title: "Guida all'implementazione"
summary: >-
  La guida all'implementazione definisce il modo in cui un team dovrebbe fornire il lavoro all'interno dell'attuale repository o ambiente di consegna senza sostituire le specifiche del prodotto stesso.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Guida all'implementazione

## Riepilogo

La guida all'implementazione definisce il modo in cui un team dovrebbe fornire il lavoro all'interno dell'attuale repository o ambiente di consegna senza sostituire le specifiche del prodotto stesso.

## Ruolo

La guida all'implementazione si trova sotto la specifica del prodotto.

Aiuta a rispondere a domande come:

- come dovrebbe funzionare la denominazione pubblica
- come dovrebbero essere strutturati i documenti
- quali aspettative di verifica si applicano ora
- quali regole specifiche del repository dovrebbero seguire i contributori
- dove le regole tattiche dovrebbero vivere man mano che il progetto evolve

## Differenza rispetto alle specifiche del prodotto

Il disciplinare di produzione definisce cosa è il prodotto e cosa deve raggiungere.

La guida all’implementazione definisce il modo in cui i contributori dovrebbero svolgere il lavoro nell’attuale contesto di fornitura.

Questa distinzione è utile perché non tutte le regole del repository sono una verità sul prodotto, e non tutte le verità sul prodotto dovrebbero essere sepolte in note tattiche.

## Esempi comuni

Le linee guida per l'implementazione spesso includono:

- regole di denominazione e branding
- norme di attuazione della documentazione
- vincoli di sito statico o demo
- verifica delle aspettative
- regole di modifica o di generazione del codice
- politiche dell'evidenza per la scrittura pubblica

Queste regole spesso convivono bene nei Markdown perché devono rimanere rivedibili, facili da aggiornare e vicine al resto del contesto del repository.

## Perché è importante nel lavoro assistito dall'intelligenza artificiale

Gli assistenti AI spesso seguono le istruzioni concrete più vicine. Se le regole specifiche del repository sono implicite, l'output diventa rapidamente incoerente.

Le linee guida per l’implementazione rendono tali regole visibili senza inquinare le specifiche del prodotto con dettagli tattici.

In pratica, ciò significa che un file di orientamento Markdown può svolgere due compiti contemporaneamente:

- spiegare il flusso di lavoro a un collaboratore umano
- indirizzare un agente AI verso gli strumenti, la sequenza e i vincoli preferiti

## Let Books contesto

Nei Let Books, `AGENTS-Implementation.md` è il livello di guida tattica.

Copre aree come:

- denominazione pubblica
- norme sulla documentazione
- sito pubblico e suddivisione dei documenti
- metadati e regole SEO per pagine statiche
- vincoli demo statici
- regole di localizzazione e accessibilità
- regole di verifica
- Politica sulle prove del blog

Ciò lo rende il complemento operativo del `AGENTS.md` e non il suo sostituto.

Altre indicazioni Markdown contenute nel pronti contro termine rafforzano lo stesso schema. Ad esempio:

- `docs/android-debugging.md` indirizza le scelte del flusso di lavoro di debug come i flussi di lavoro di collegamento CDP rispetto a quelli di patch sorgente
- `docs/style-guide/publishing/ubuntu-tooling.md` documenta gli strumenti previsti per la pubblicazione, la verifica, gli screenshot, il controllo ortografico e il debug del dispositivo

Questi documenti sono leggibili come guida umana, ma aiutano anche gli agenti a scegliere le azioni migliori invece di fare supposizioni in base a valori predefiniti generici.

## Pagine correlate

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/it/how-to-turn-a-product-spec-into-an-implementation-plan.md`