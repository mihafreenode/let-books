---
title: "Livelli Di Validazione"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Livelli Di Validazione

## Riepilogo

I livelli di validazione sono i diversi modi con cui un progetto controlla se implementazione, documentazione e artefatti di consegna corrispondono ancora alle regole previste e alle aspettative di qualità.

## Perché i livelli contano

Nessun singolo metodo di validazione è sufficiente.

- la sola documentazione non impone il comportamento
- i soli test possono validare ipotesi sbagliate
- la sola CI non può definire le regole che dovrebbe applicare

Un approccio a livelli è più forte perché ogni livello intercetta una classe diversa di deriva.

## Livelli di validazione comuni

### 1. Specifica e linee guida

Il primo livello definisce la regola.

Senza questo livello, i controlli successivi possono essere severi ma arbitrari.

### 2. Revisione manuale

La revisione umana controlla intenzione, casi limite e significato del prodotto che potrebbero non essere ancora automatizzati.

### 3. Validazione locale

Script e controlli strutturati intercettano problemi rapidi e ripetibili prima che le modifiche arrivino alla CI.

### 4. Test

I test eseguibili verificano il comportamento atteso, ma solo quando sono allineati con la specifica.

### 5. Gate CI

La CI rende i controlli ripetibili e visibili tra collaboratori e ambienti diversi.

### 6. Controlli di distribuzione

I flussi di distribuzione confermano che gli artefatti generati restano pubblicabili e strutturalmente solidi.

## Come dovrebbero relazionarsi i livelli

I livelli dovrebbero rafforzarsi a vicenda in questo ordine:

- documenti e specifiche definiscono le aspettative
- la revisione interpreta queste aspettative nel contesto
- script di validazione e test automatizzano le parti stabili della revisione
- la CI esegue questi controlli in modo coerente
- la distribuzione assicura che l'output possa davvero essere rilasciato

## Buoni obiettivi iniziali di validazione

Esempi di candidati forti nelle fasi iniziali includono:

- presenza dei file richiesti
- completezza della localizzazione
- validità sintattica
- collegamenti interni rotti
- citazioni editoriali vietate
- generazione riuscita dei metadati

Questi controlli tendono a essere oggettivi e poco costosi.

## Contesto Let Books

Il repository Let Books documenta già diversi livelli, inclusi:

- regole di prodotto e implementazione in `AGENTS.md` e `AGENTS-Implementation.md`
- validazione di sviluppo e distribuzione in `docs/Development.md` e `docs/Deployment.md`
- regole editoriali sulle evidenze in `docs/blog/README.md` e `docs/sources/README.md`

Questo rende la validazione un sistema documentato invece che una semplice aspirazione futura.

## Pagine Correlate

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../learning/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../blog/en/documentation-is-part-of-the-product.md`
