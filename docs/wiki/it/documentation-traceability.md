---
title: "Tracciabilità della documentazione"
summary: >-
  La tracciabilità della documentazione è la pratica di rendere affermazioni importanti, descrizioni del flusso di lavoro e aspettative di qualità riconducibili a prove stabili del repository e decisioni esplicite.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Tracciabilità della documentazione

## Riepilogo

La tracciabilità della documentazione è la pratica di rendere affermazioni importanti, descrizioni del flusso di lavoro e aspettative di qualità riconducibili a prove stabili del repository e decisioni esplicite.

## Perché è importante

Senza tracciabilità, diventa difficile fidarsi della documentazione.

I lettori non possono dire:

- se una dichiarazione è attuale
- se un comportamento è intenzionale
- se un reclamo deriva dalle specifiche del prodotto o da un incidente di implementazione
- se un articolo pubblico riflette la direzione del prodotto approvata

La tracciabilità è particolarmente importante nel lavoro assistito dall’intelligenza artificiale perché il contenuto generato può sembrare sicuro anche quando non è radicato nella fonte giusta.

## Che aspetto ha la tracciabilità

Una buona tracciabilità della documentazione solitamente include:

- una catena di autorità conosciuta
- riferimenti stabili a documenti o specifiche pertinenti
- chiara separazione tra stato attuale e piani futuri
- distinzione esplicita tra documentazione canonica e stato di attuazione
- mappe delle fonti o note di evidenza per articoli pubblici sostanziali

È inoltre sempre più utile quando la documentazione è sufficientemente specifica da guidare il lavoro assistito dall’intelligenza artificiale, non solo dall’interpretazione umana.

## Un semplice modello di autorità

Un modello utile è:

1. specifica del prodotto
2. guida all'implementazione
3. documentazione sullo stato attuale
4. comportamento dimostrativo o di implementazione
5. test e risultati di validazione

Ciò aiuta i team a decidere quale artefatto dovrebbe rispondere a quale domanda.

## Scrittura pubblica e tracciabilità

Articoli pubblici, saggi e materiale didattico non dovrebbero fare affidamento su qualunque file sorgente si trovi nelle vicinanze.

Dovrebbero invece preferire documentazione stabile e riferimenti alle specifiche e utilizzare mappe sorgente quando le affermazioni sono sostanziali.

Ciò rende la scrittura pubblica più gestibile e meno fragile nel tempo.

## Tracciabilità sia per gli agenti che per gli esseri umani

La tracciabilità non significa solo aiutare una persona a capire da dove proviene un reclamo. Aiuta inoltre un agente AI a determinare quali artefatti del repository dovrebbero guidare l'azione.

Quando la documentazione indica chiaramente l'ordine del flusso di lavoro, le preferenze degli strumenti, i vincoli ambientali e i confini dell'autorità, diventa utilizzabile come contesto operativo per gli agenti e come contesto esplicativo per le persone.

Ciò è importante perché gli agenti spesso agiscono in base alle istruzioni più concrete nelle vicinanze. Il Markdown tracciabile aiuta a rendere visibili le istruzioni corrette.

## Let Books contesto

Il repository Let Books supporta già la tracciabilità attraverso:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- mappe sorgente ai `docs/sources/`

Contiene inoltre guide Markdown che fungono da contesto operativo tracciabile per il lavoro degli agenti, come ad esempio:

- `docs/android-debugging.md` per la scelta del flusso di lavoro di debug mobile e l'utilizzo dello strumento
- `docs/style-guide/publishing/ubuntu-tooling.md` per gli strumenti previsti e le capacità di verifica

Questa struttura aiuta il progetto a trattare la documentazione come un sistema supportato da prove piuttosto che come un insieme sciolto di note.

## Pagine correlate

- `product-specification.md`
- `implementation-guidance.md`
- `validation-layers.md`
- `../../learning/it/how-to-keep-spec-docs-demo-and-code-aligned.md`