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
- generazione fresca del sito prima della revisione di parità
- convalida del collegamento
- generazione di articoli e pagine
- controllo ortografico ove disponibile
- Parità segnaposto
- prove di fumo di accessibilità
- controlli di copertura di screenshot e diagrammi

## Regola della generazione fresca

I flussi di CI e revisione della localizzazione non devono basare i risultati di parità su artefatti generati obsoleti.

Sequenza richiesta:

1. generare il sito dallo stato corrente del repository
2. eseguire i validatori sull'output appena generato
3. quando necessario, esaminare l'HTML generato
4. quando necessario, esaminare l'output renderizzato

Questo è importante perché Markdown sorgente, HTML generato, output distribuito e comportamento renderizzato nel browser possono divergere temporaneamente durante lo sviluppo.

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

1. generare l'HTML dell'articolo
2. generare le pagine indice
3. eseguire l'eventuale post-elaborazione residua della navigazione solo se ancora necessaria
4. convalidare l'output appena generato
5. esaminare l'HTML generato o l'output renderizzato se il flusso di lavoro richiede una valutazione umana della parità

Se un validatore si aspetta ancora il blocco legacy `topic-nav`, aggiorna il validatore al contratto corrente invece di applicare la patch generata HTML.

## Pagine correlate

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/it/how-to-run-localization-qa-in-ci.md`
