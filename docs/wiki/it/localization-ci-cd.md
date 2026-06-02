---
title: "Localizzazione CI e CD"
summary: >-
  La localizzazione CI/CD convalida continuamente i contenuti multilingue in modo da individuare tempestivamente le risorse mancanti, i collegamenti interrotti e le regressioni sull'accessibilità.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Localizzazione CI e CD

## Riepilogo

La localizzazione CI/CD convalida continuamente i contenuti multilingue in modo da individuare tempestivamente le risorse mancanti, i collegamenti interrotti e le regressioni sull'accessibilità.

## Controlli desiderati

- Coerenza dell'inventario locale
- convalida del collegamento
- generazione di articoli e pagine
- controllo ortografico ove disponibile
- Parità segnaposto
- prove di fumo di accessibilità
- controlli di copertura di screenshot e diagrammi

## Progressione della classe difettosa

L'IC di localizzazione dovrebbe tenere traccia di entrambi:

- `Localization Debt`
- `Open Defect Classes`

Il debito misura il lavoro rimanente sul contenuto della fonte.

Le classi di difetti aperte misurano se il sistema può ancora consentire la ricomparsa di una categoria di problema.

Non appena una classe di difetti raggiunge zero occorrenze, il suo validatore dovrebbe passare dall'avviso al blocco, ove possibile.

Esempi:

- pubblicazione bozza segnaposto
- riassunti non tradotti
- metadati non tradotti
- corpi non tradotti
- editoria in lingue miste

CI non è solo un gatekeeper. È il meccanismo che impedisce alle classi di difetti chiuse di riaprirsi silenziosamente.

## Ordine di generazione per la navigazione degli articoli

L'attuale contratto di navigazione di articoli pubblici è:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

La generazione e la convalida dovrebbero avvenire in questo ordine:

1. generare l'articolo HTML
2. generare pagine indice
3. eseguire l'eventuale post-elaborazione della navigazione rimanente solo se ancora necessario
4. convalidare l'output

Se un validatore si aspetta ancora il blocco legacy `topic-nav`, aggiorna il validatore al contratto corrente invece di applicare la patch generata HTML.

## Pagine correlate

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/it/how-to-run-localization-qa-in-ci.md`