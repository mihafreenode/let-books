---
title: "Livelli di convalida"
summary: >-
  I livelli di convalida sono i diversi modi in cui un progetto verifica se l'implementazione, la documentazione e gli artefatti di consegna corrispondono ancora alle regole previste e alle aspettative di qualità.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Livelli di convalida

## Riepilogo

I livelli di convalida sono i diversi modi in cui un progetto verifica se l'implementazione, la documentazione e gli artefatti di consegna corrispondono ancora alle regole previste e alle aspettative di qualità.

## Perché i livelli sono importanti

Nessun singolo metodo di validazione è sufficiente.

- La documentazione da sola non impone il comportamento
- I test da soli possono convalidare le ipotesi errate
- La CI da sola non può definire le regole che dovrebbe applicare

Un approccio a strati è più forte perché ogni strato rileva una diversa classe di deriva.

## Livelli di convalida comuni

### 1. Specifiche e linee guida

Il primo livello definisce la regola.

Senza questo livello, i controlli successivi potrebbero essere rigorosi ma arbitrari.

### 2. Revisione manuale

La revisione umana verifica l'intento, i casi limite e il significato del prodotto che potrebbe non essere ancora automatizzato.

### 3. Convalida locale

Gli script e i controlli strutturati rilevano problemi rapidi e ripetibili prima che le modifiche raggiungano il CI.

### 4. Test

I test eseguibili verificano il comportamento previsto, ma solo quando sono allineati con le specifiche.

### 5. Porte CI

La CI rende i controlli ripetibili e visibili tra contributori e ambienti.

### 6. Controlli sull'implementazione

I flussi di lavoro di distribuzione confermano che gli artefatti creati sono ancora pubblicabili e strutturalmente validi.

## Come dovrebbero relazionarsi gli strati

Gli strati dovrebbero rinforzarsi a vicenda in ordine:

- documenti e specifiche definiscono le aspettative
- la revisione interpreta tali aspettative nel contesto
- script e test di validazione automatizzano le parti stabili della revisione
- CI esegue tali controlli in modo coerente
- la distribuzione garantisce che l'output possa effettivamente essere spedito

## Buoni obiettivi di convalida anticipata

Esempi di forti candidati iniziali includono:

- presenza del file richiesto
- completezza della localizzazione
- validità della sintassi
- Collegamenti interni interrotti
- citazioni editoriali vietate
- Successo nella generazione dei metadati

Questi controlli tendono ad essere oggettivi e poco costosi.

## Let Books contesto

Il repository Let Books documenta già diversi livelli, tra cui:

- norme di prodotto e di attuazione ai `AGENTS.md` e `AGENTS-Implementation.md`
- convalida dello sviluppo e dell'implementazione nei `docs/Development.md` e `docs/Deployment.md`
- norme sulla prova editoriale nei `docs/blog/README.md` e `docs/sources/README.md`
- guida all'apprendimento per l'IC graduale e l'implementazione della convalida

Ciò rende la convalida un sistema documentato e non solo un’aspirazione futura.

## Pagine correlate

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/it/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/it/documentation-is-part-of-the-product.md`