---
title: "Linee guida di implementazione"
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Linee guida di implementazione

## Riepilogo

Le linee guida di implementazione definiscono come un team dovrebbe consegnare il lavoro all'interno del repository o dell'ambiente di consegna corrente senza sostituire la specifica di prodotto stessa.

## Ruolo

Le linee guida di implementazione si collocano sotto la specifica di prodotto.

Aiutano a rispondere a domande come:

- come dovrebbe funzionare la denominazione pubblica
- come dovrebbe essere strutturata la documentazione
- quali aspettative di verifica si applicano ora
- quali regole specifiche del repository i collaboratori dovrebbero seguire
- dove dovrebbero vivere le regole tattiche mentre il progetto evolve

## Differenza rispetto alla specifica di prodotto

La specifica di prodotto definisce che cos'è il prodotto e che cosa deve ottenere.

Le linee guida di implementazione definiscono come i collaboratori dovrebbero svolgere il lavoro nel contesto di consegna corrente.

Questa distinzione è utile perché non ogni regola del repository è una verità di prodotto e non ogni verità di prodotto dovrebbe essere nascosta in note tattiche.

## Esempi comuni

Le linee guida di implementazione spesso includono:

- regole di naming e branding
- regole di implementazione della documentazione
- vincoli del sito statico o della demo
- aspettative di verifica
- regole di modifica o generazione del codice
- politiche sulle evidenze per la scrittura pubblica

Queste regole spesso funzionano bene in Markdown perché devono restare revisionabili, facili da aggiornare e vicine al resto del contesto del repository.

## Perché conta nel lavoro assistito dall'IA

Gli assistenti IA spesso seguono l'istruzione concreta più vicina. Se le regole specifiche del repository restano implicite, l'output diventa rapidamente incoerente.

Le linee guida di implementazione rendono visibili queste regole senza inquinare la specifica di prodotto con dettagli tattici.

In pratica, questo significa che un file guida in Markdown può svolgere due lavori insieme:

- spiegare il flusso di lavoro a un collaboratore umano
- orientare un agente IA verso strumenti, sequenze e vincoli preferiti

## Contesto Let Books

In Let Books, `AGENTS-Implementation.md` è il livello di guida tattica.

Copre aree come:

- denominazione pubblica
- regole della documentazione
- separazione tra sito pubblico e documenti
- regole di metadati e SEO per pagine statiche
- vincoli della demo statica
- regole di localizzazione e accessibilità
- regole di verifica
- politica delle evidenze del blog

Questo lo rende il compagno operativo di `AGENTS.md`, non un suo sostituto.

## Pagine Correlate

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../learning/how-to-turn-a-product-spec-into-an-implementation-plan.md`
