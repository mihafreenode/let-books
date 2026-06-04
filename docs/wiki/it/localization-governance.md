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
- Ruoli di manutentore del linguaggio
- approvazioni terminologiche
- risoluzione delle controversie
- monitoraggio dello stato di revisione
- tracciamento riutilizzabile degli esempi di revisione
- freschezza degli artefatti di revisione
- obblighi di documentazione degli strumenti

## Perché è importante

Senza governance, i contenuti multilingue variano nel tono, nella terminologia e nelle aspettative di qualità.

La governance delle revisioni dovrebbe anche definire il modo in cui gli esempi di correzione assistita da AI vengono archiviati e riutilizzati nella formazione, nelle scorecard e nel lavoro di valutazione.

## Freschezza degli artefatti di revisione

La governance dovrebbe richiedere ai revisori di distinguere tra:

- Markdown sorgente
- HTML generato
- output del sito distribuito
- output renderizzato nel browser

Prima dell'approvazione della parità, i revisori dovrebbero confermare che gli artefatti generati che stanno esaminando siano stati rigenerati dallo stato corrente del repository.

## Governance degli strumenti

Nuovi generatori, renderer, trasformatori, validatori, strumenti di audit e altri strumenti di elaborazione dei contenuti dovrebbero essere trattati come artefatti di governance, non soltanto come dettagli di implementazione.

Non sono completi finché:

- il loro scopo e i loro limiti non sono documentati
- le loro regole ed euristiche non ovvie non sono spiegate
- la documentazione pertinente su flussi di lavoro e validazione non è aggiornata
- i manutentori non possono interpretare avvisi, errori e punti ciechi senza ricostruire l'intento dal solo codice

## Pagine correlate

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
