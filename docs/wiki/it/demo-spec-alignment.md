---
title: "Allineamento tra demo e specifica"
summary: >-
  L'allineamento tra demo e specifica è la pratica di mantenere coerente il comportamento del prototipo o della demo con l'intento di prodotto documentato, aggiornando esplicitamente la specifica quando la demo rivela un flusso di lavoro migliore.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Allineamento tra demo e specifica

## Riepilogo

L'allineamento tra demo e specifica è la pratica di mantenere coerente il comportamento del prototipo o della demo con l'intento di prodotto documentato, aggiornando esplicitamente la specifica quando la demo rivela un flusso di lavoro migliore.

## Perché è importante

Le demo sono utili perché rendono concreti i flussi di lavoro. Sono rischiose perché il comportamento visibile viene spesso trattato come verità di prodotto approvata anche quando la documentazione di base non è mai stata aggiornata.

## Ordine di autorità consigliato

1. specifica di prodotto
2. linee guida di implementazione
3. documentazione dello stato attuale
4. demo o comportamento dell'implementazione
5. validazione e test

Questo ordine non significa che le demo siano poco importanti. Significa che vanno interpretate dentro un sistema decisionale documentato.

## Uso sano delle demo

Usa le demo per:

- far emergere problemi nei flussi di lavoro
- rivelare problemi di usabilità
- testare ipotesi con gli utenti
- supportare spiegazioni per gli stakeholder

Non usare le demo come sostituti silenziosi delle decisioni di prodotto.

## Quando la demo dovrebbe guidare

Se la demo rivela un flusso di lavoro chiaramente migliore, il team dovrebbe:

1. rivedere il cambiamento in modo intenzionale
2. aggiornare la specifica e la documentazione rilevante
3. adeguare le aspettative di validazione o revisione

In altre parole, la demo può ispirare la decisione successiva, ma la decisione aggiornata deve comunque essere documentata.

## Contesto Let Books

Il repository Let Books distingue già tra prova documentale canonica e stato dell'implementazione per la scrittura pubblica. Questo è un utile guardrail perché impedisce ai prototipi di diventare autorità editoriale per accidente.

## Pagine Correlate

- `spec-driven-development.md`
- `../learning/how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../blog/en/spec-driven-development-in-let-books.md`
