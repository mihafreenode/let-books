---
title: "Localizzazione CI e CD"
summary: >-
  La CI/CD della localizzazione convalida continuamente i contenuti multilingue in modo che asset mancanti, collegamenti interrotti e regressioni di accessibilità vengano individuati presto.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Localizzazione CI e CD

## Riepilogo

La CI/CD della localizzazione convalida continuamente i contenuti multilingue in modo che asset mancanti, collegamenti interrotti e regressioni di accessibilità vengano individuati presto.

## Controlli desiderati

- coerenza dell'inventario delle impostazioni locali
- rigenerazione fresca del sito prima della revisione di parità
- validazione dei collegamenti
- generazione di articoli e pagine
- controllo ortografico dove disponibile
- parità dei segnaposto
- controlli rapidi di accessibilità
- verifiche di copertura di screenshot e diagrammi

## Regola della generazione fresca

I flussi di lavoro di CI e revisione della localizzazione non devono basare i rilievi di parità su artefatti generati obsoleti.

Sequenza richiesta:

1. generate il sito dallo stato corrente del repository
2. eseguite i validatori sull'output appena generato
3. ispezionate l'HTML generato quando necessario
4. ispezionate l'output renderizzato quando necessario

Questo è importante perché Markdown sorgente, HTML generato, output distribuito e comportamento renderizzato nel browser possono divergere temporaneamente durante lo sviluppo.

## Priorità di revisione

Applicate per primi il controllo di parità e la revisione nella lingua madre più rigorosi a:

- contenuti creati di recente
- contenuti ampliati di recente
- contenuti attualmente in modifica

Poi estendete progressivamente gli stessi standard di revisione ai contenuti localizzati più vecchi.

## Progressione delle classi di difetto

La CI della localizzazione dovrebbe tenere traccia di entrambi:

- `Localization Debt`
- `Open Defect Classes`

Il debito misura il lavoro rimanente sul contenuto sorgente.

Le classi di difetto aperte misurano se il sistema può ancora consentire il ritorno di una categoria di problema.

Non appena una classe di difetto raggiunge zero occorrenze, il suo validatore dovrebbe passare da consultivo a bloccante dove pratico.

Esempi:

- pubblicazione di bozze segnaposto
- riepiloghi non tradotti
- metadati non tradotti
- corpi di testo non tradotti
- pubblicazione in lingue miste

La CI non è solo un guardiano. È il meccanismo che impedisce alle classi di difetto chiuse di riaprirsi silenziosamente.

## Ordine di generazione per la navigazione degli articoli

L'attuale contratto di navigazione pubblica degli articoli è:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generazione e validazione dovrebbero avvenire in questo ordine:

1. generate l'HTML degli articoli
2. generate le pagine indice
3. eseguite ogni post-elaborazione residua della navigazione solo se ancora necessaria
4. convalidate l'output appena generato
5. riesaminate l'HTML generato o l'output renderizzato se il flusso di lavoro richiede una valutazione umana della parità

Se un validatore si aspetta ancora il blocco legacy `topic-nav`, aggiornate il validatore al contratto corrente invece di correggere l'HTML generato.

## Pagine correlate

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/it/how-to-run-localization-qa-in-ci.md`
