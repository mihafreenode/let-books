---
title: "Governance della localizzazione"
summary: >-
  La governance della localizzazione definisce chi può proporre, rivedere, approvare e contestare le modifiche ai contenuti multilingue.
topics:
  - governance
  - localization
  - terminology
---
# Governance della localizzazione

## Riepilogo

La governance della localizzazione definisce chi può proporre, rivedere, approvare e contestare le modifiche ai contenuti multilingue.

## Aree di governo

- proprietà della fonte
- ruoli dei manutentori linguistici
- approvazioni terminologiche
- risoluzione delle controversie
- tracciamento dello stato di revisione
- tracciamento degli esempi di revisione riutilizzabili
- freschezza degli artefatti di revisione
- obblighi di documentazione degli strumenti
- qualità della revisione in lingua madre

## Perché è importante

Senza governance, i contenuti multilingue divergono per tono, terminologia e aspettative di qualità.

La governance della revisione dovrebbe anche definire come gli esempi di correzione assistiti dall'AI vengono archiviati e riutilizzati in attività di formazione, scorecard e valutazione.

## Freschezza degli artefatti di revisione

La governance dovrebbe richiedere ai revisori di distinguere tra:

- Markdown sorgente
- HTML generato
- output del sito pubblicato
- output renderizzato nel browser

Prima dell'approvazione della parità, i revisori dovrebbero confermare che gli artefatti generati sotto esame siano stati rigenerati dallo stato corrente del repository.

## Governance degli strumenti

Nuovi generatori, renderer, trasformatori, validatori, strumenti di audit e altri strumenti di elaborazione dei contenuti dovrebbero essere trattati come artefatti di governance, non solo come dettagli implementativi.

Non sono completi finché:

- il loro scopo e i loro limiti non sono documentati
- le loro regole e heuristics non ovvie non sono spiegate
- la documentazione pertinente di flussi di lavoro e validazione non è aggiornata
- i manutentori non possono interpretare avvisi, errori e punti ciechi senza ricostruire l'intento dal solo codice

## Qualità della revisione in lingua madre

La governance della localizzazione dovrebbe richiedere una revisione non solo per la correttezza, ma anche per un'espressione naturale nella lingua madre.

Lo standard è che un documento localizzato debba sembrare come se fosse stato scritto originariamente nella lingua di destinazione.

Ciò significa che i revisori dovrebbero trattare come rilievi di qualità quanto segue:

- struttura della frase inglese resa alla lettera
- traduzione diretta di modi di dire inglesi
- linguaggio di governance o aziendale che suona tradotto
- terminologia che conserva inutilmente la formulazione della fonte

La governance dovrebbe anche dare priorità a questa revisione innanzitutto per:

- contenuti creati di recente
- contenuti ampliati di recente
- contenuti attualmente in modifica

I contenuti localizzati più vecchi dovrebbero poi essere migliorati progressivamente nel tempo, anziché tramite un'unica riscrittura dell'intero repository.

## Pagine correlate

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
