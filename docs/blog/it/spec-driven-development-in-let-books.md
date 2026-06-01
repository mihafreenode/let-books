---
article_id: spec-driven-development-in-let-books
canonical_language: en
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Sviluppo guidato dalle specifiche in Let Books
summary: Come Let Books usa gia specifica, linee guida di implementazione, documentazione, vincoli della demo e regole di verifica come sistema di sviluppo guidato dalle specifiche.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-in-let-books.md
status: draft
---

# Sviluppo guidato dalle specifiche in Let Books

Let Books e un utile caso di studio dello sviluppo guidato dalle specifiche perché il repository contiene gia piu livelli di intenzione di prodotto e non solo artefatti di implementazione.

Il progetto non e ancora un'applicazione ospitata completa. Al momento include una specifica di prodotto, linee guida di implementazione, documentazione pubblica e una demo statica locale. Per questo e un buon esempio di come un progetto possa restare coerente prima ancora che esista lo stack di produzione finale.

## Il livello della specifica

`AGENTS.md` e la specifica centrale di prodotto. Definisce lo scopo del progetto, il modello di dominio, i flussi di lavoro, i limiti di ambito, la direzione della localizzazione, la privacy, l'opzionalita dell'IA e i criteri di accettazione.

Risponde a domande come:

- perché esiste il progetto
- quali flussi di lavoro sono di prima classe
- cosa deve funzionare senza IA
- quali sono idee future e non impegni attuali
- cosa conta come prima demo riuscita

Questa e la differenza tra una descrizione generale e una vera specifica. Una vera specifica limita le scelte di implementazione.

## Il livello delle linee guida tattiche

`AGENTS-Implementation.md` aggiunge il secondo livello. Non sostituisce la specifica di prodotto, ma spiega come il lavoro debba essere svolto oggi in questo repository.

Qui rientrano regole su naming pubblico, documentazione, sito statico, localizzazione, verifica e politica delle prove per la scrittura pubblica. Questo e importante perché non ogni regola e una verita di prodotto. Alcune sono tattiche, editoriali o specifiche del repository.

## Il livello dello stato attuale

`README.md` rappresenta il terzo livello: una descrizione onesta dello stato attuale.

Spiega cosa esiste oggi, cosa ancora manca, a cosa serve la demo statica e come viene pubblicato il sito pubblico. Questo aiuta collaboratori, istituzioni e revisori a non confondere l'ambizione con l'implementazione.

## Il livello della documentazione

`docs/` aggiunge il quarto livello. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` e le guide di stile definiscono come la conoscenza debba essere organizzata, pubblicata e verificata.

Qui il repository diventa qualcosa di piu di una raccolta di file. Diventa una piattaforma di conoscenza con:

- architettura della documentazione
- regole di evidenza editoriale
- struttura di pubblicazione multilingue
- regole di pubblicazione e verifica

## Il livello della demo

La demo statica e importante, ma volutamente non e l'unica autorita. Le regole del blog e delle fonti distinguono gia tra documentazione canonica e stato di implementazione.

Questo significa che la demo puo verificare i flussi di lavoro, rivelare problemi di usabilita e aiutare a spiegare il progetto a soggetti esterni, senza diventare da sola la verita finale di prodotto.

## Il livello della verifica

Let Books documenta gia anche una mentalita di verifica. `docs/Development.md` e `docs/Deployment.md` descrivono smoke test di localizzazione, validazione di file strutturati, generazione di metadati, file obbligatori, controlli ortografici e pubblicazione automatizzata.

Questi non sono solo dettagli di strumenti. Sono la prova che il progetto tratta la qualita come un sistema ripetibile.

## La lezione principale

Lo sviluppo guidato dalle specifiche non significa solo scrivere un lungo documento prima di programmare. In pratica significa costruire una catena affidabile tra intenzione di prodotto, regole tattiche, documentazione pubblica, demo, verifica e pubblicazione.

Let Books mostra che una catena del genere puo esistere anche prima di un'applicazione backend completa. Questo e uno dei vantaggi piu forti dello sviluppo guidato dalle specifiche nel lavoro supportato dall'IA.

## Altre lingue

- [English](../en/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
