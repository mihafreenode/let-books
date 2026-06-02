---
title: "Specifiche del prodotto"
summary: >-
  Una specifica di prodotto definisce a cosa serve un prodotto, cosa deve fare, quali limiti deve rispettare e quali risultati contano come successo.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Specifiche del prodotto

## Riepilogo

Una specifica di prodotto definisce a cosa serve un prodotto, cosa deve fare, quali limiti deve rispettare e quali risultati contano come successo.

## Ruolo

La specifica del prodotto è la descrizione pratica di livello più elevato del comportamento previsto del prodotto.

Dovrebbe rispondere a domande come:

- perché il prodotto esiste
- a chi è rivolto
- quali flussi di lavoro sono di prima classe
- cosa deve funzionare anche in condizioni di guasto
- cosa è esplicitamente fuori ambito
- quali criteri di accettazione definiscono una demo o un rilascio significativo

## Ciò che appartiene a una specifica di prodotto

Il contenuto tipico delle specifiche include:

- scopo del prodotto
- filosofia di base
- modello di dominio
- definizioni del flusso di lavoro
- aspettative in materia di privacy e sicurezza
- non-obiettivi
- indicazioni sulla sequenza di implementazione laddove influiscono sull'ambito o sull'ordine di consegna
- criteri di accettazione

Le specifiche dovrebbero concentrarsi sulla verità del prodotto, non su tutti i dettagli dell'implementazione locale.

## Ciò che di solito non appartiene a questo posto

Questi elementi spesso appartengono ad altri a meno che non influiscano direttamente sugli impegni relativi al prodotto:

- convenzioni sui repository temporanei
- Impostazione degli strumenti locali
- Decisioni restrittive sulla lucidatura dell'interfaccia utente
- Guida al debug una tantum
- meccaniche editoriali o editoriali che non modifichino il modello del prodotto

## Perché è importante nel lavoro assistito dall'intelligenza artificiale

L’intelligenza artificiale può generare un’implementazione plausibile molto rapidamente. Senza una chiara specifica del prodotto, tale implementazione potrebbe essere ottimizzata per comodità anziché per intento.

La specifica fornisce ai revisori e ai contributori uno standard stabile per decidere se l'output generato appartiene ancora al prodotto previsto.

## Let Books contesto

Nei Let Books, `AGENTS.md` è la specifica principale del prodotto.

Definisce:

- scopo del progetto
- modello di dominio e flusso di lavoro
- direzione multi-tenant e localizzazione
- flusso di lavoro manuale e principi AI-opzionali
- criteri di accettazione per la prima demo

Ciò lo rende più di una panoramica. È la principale autorità di prodotto nel repository.

## Pagine correlate

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/it/how-to-write-a-spec-that-ai-can-follow.md`
