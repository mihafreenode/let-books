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

Questo è importante perché risponde a domande a cui il solo codice non può dare una risposta chiara:

- perché esiste il progetto
- quali flussi di lavoro sono di prima classe
- cosa deve funzionare senza IA
- quali sono idee future e non impegni attuali
- cosa conta come prima demo riuscita

Questa e la differenza tra una descrizione generale e una vera specifica. Una vera specifica limita le scelte di implementazione.

## Il livello delle linee guida tattiche

`AGENTS-Implementation.md` aggiunge il secondo livello. Non sostituisce la specifica di prodotto, ma spiega come il lavoro debba essere svolto oggi in questo repository.

Esempi includono:

- regole di denominazione pubblica
- regole di implementazione della documentazione
- aspettative sui metadati del sito statico
- limiti della demo
- aspettative su localizzazione e verifica
- politica editoriale delle prove per la scrittura pubblica

Questo è importante nel lavoro assistito dall'IA perché non ogni regola appartiene alla specifica di prodotto a lungo termine. Alcune regole sono tattiche, editoriali o specifiche del repository. Mantenere chiara questa distinzione riduce il rumore e impedisce che la specifica di prodotto diventi un deposito di dettagli implementativi.

## Il livello dello stato attuale

`README.md` rappresenta il terzo livello: una descrizione dello stato attuale.

Spiega cosa esiste oggi, cosa ancora manca, a cosa serve la demo statica e come viene pubblicato il sito pubblico. Questa è una parte fondamentale dell'allineamento, perché i progetti spesso falliscono quando i lettori confondono l'ambizione con l'implementazione.

In Let Books, il README distingue esplicitamente tra i risultati attuali e i piani futuri. Questo aiuta collaboratori, istituzioni e revisori a comprendere la maturità del progetto senza supposizioni.

## Il livello della documentazione

L'area `docs/` aggiunge il quarto livello. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, le guide di stile e l'area `sources` definiscono come la conoscenza debba essere organizzata, validata e pubblicata.

Qui il repository diventa qualcosa di piu di una raccolta di file. Diventa una piattaforma di conoscenza con:

- architettura della documentazione
- regole di evidenza editoriale
- struttura di pubblicazione multilingue
- regole di pubblicazione della documentazione pubblica
- linee guida di sviluppo e validazione

Questo è esattamente il tipo di impalcatura che aiuta la consegna assistita dall'IA a rimanere tracciabile.

## Il livello della demo

La demo statica e importante, ma volutamente non e l'unica autorita. Le regole del blog e delle fonti distinguono gia tra documentazione canonica e stato di implementazione.

Questo significa che la demo puo verificare i flussi di lavoro, rivelare problemi di usabilita e aiutare a spiegare il progetto a soggetti esterni, senza diventare da sola la verita finale di prodotto.

Questa è una regola matura. Senza di essa, i prototipi diventano spesso meccanismi di governance accidentale. Un team inizia a copiare il prototipo perché esiste, non perché rifletta una decisione di prodotto approvata.

## Il livello della verifica

Let Books documenta già anche una mentalità di verifica.

`docs/Development.md` e `docs/Deployment.md` descrivono livelli di validazione come:

- smoke test di localizzazione
- validazione di file strutturati
- generazione di metadati
- controlli sui file obbligatori
- controllo ortografico opzionale e linting
- automazione della pubblicazione

Questi non sono solo dettagli di strumenti. Sono la prova che il progetto tratta la qualita come un sistema ripetibile.

## Perché questo conta per la consegna assistita dall'IA

Se un assistente IA contribuisce a Let Books, non deve inventare il prodotto da zero. Il repository contiene già una catena di intenzione:

1. direzione del prodotto in `AGENTS.md`
2. regole tattiche di consegna in `AGENTS-Implementation.md`
3. stato attuale in `README.md`
4. regole di conoscenza e pubblicazione in `docs/`
5. stato del prototipo eseguibile nella demo statica
6. linee guida di validazione e pubblicazione nella documentazione di sviluppo e distribuzione

Questa catena non elimina gli errori. Ma li rende più facili da individuare e da rivedere.

## La lezione principale

Lo sviluppo guidato dalle specifiche non significa soltanto scrivere un lungo documento di requisiti prima di iniziare a programmare.

In pratica, significa costruire una catena affidabile tra:

- intenzione di prodotto
- regole tattiche
- documentazione pubblica
- demo
- validazione
- pubblicazione

Let Books mostra già che una catena del genere può esistere prima ancora che esista il prodotto backend completo.

Questo è uno degli argomenti più forti a favore dello sviluppo guidato dalle specifiche nel lavoro assistito dall'IA: più chiara è la catena dell'intento, meno è probabile che un output rapido diventi una rapida confusione.

## Altre lingue

- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
