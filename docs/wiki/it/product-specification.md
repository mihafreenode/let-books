---
title: "Specifica di prodotto"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Specifica di prodotto

## Riepilogo

Una specifica di prodotto definisce a cosa serve un prodotto, che cosa deve fare, quali limiti deve rispettare e quali risultati contano come successo.

## Ruolo

La specifica di prodotto è la descrizione pratica di livello più alto del comportamento di prodotto previsto.

Dovrebbe rispondere a domande come:

- perché il prodotto esiste
- per chi è pensato
- quali flussi di lavoro sono di prima classe
- che cosa deve funzionare anche in condizioni di guasto
- che cosa è esplicitamente fuori ambito
- quali criteri di accettazione definiscono una demo o una release significativa

## Cosa appartiene a una specifica di prodotto

Il contenuto tipico include:

- scopo del prodotto
- filosofia di base
- modello di dominio
- definizioni dei flussi di lavoro
- aspettative di privacy e sicurezza
- non-obiettivi
- indicazioni sulla sequenza di implementazione quando incidono sull'ambito o sull'ordine di consegna
- criteri di accettazione

La specifica dovrebbe concentrarsi sulla verità del prodotto, non su ogni dettaglio locale di implementazione.

## Cosa di solito non appartiene qui

Questi elementi spesso appartengono altrove, a meno che non incidano direttamente sugli impegni di prodotto:

- convenzioni temporanee del repository
- configurazione locale degli strumenti
- decisioni ristrette di rifinitura UI
- indicazioni di debugging una tantum
- meccaniche editoriali o di pubblicazione che non cambiano il modello di prodotto

## Perché conta nel lavoro assistito dall'IA

L'IA può generare implementazioni plausibili molto rapidamente. Senza una specifica di prodotto chiara, quell'implementazione può ottimizzare la comodità invece dell'intento.

La specifica offre a revisori e collaboratori uno standard stabile per decidere se l'output generato appartiene ancora al prodotto previsto.

## Contesto Let Books

In Let Books, `AGENTS.md` è la specifica di prodotto principale.

Definisce:

- lo scopo del progetto
- il modello di dominio e dei flussi di lavoro
- la direzione per multi-tenancy e localizzazione
- i principi del flusso manuale e dell'IA opzionale
- i criteri di accettazione per la prima demo

Questo lo rende più di una panoramica. È l'autorità di prodotto principale nel repository.

## Pagine Correlate

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../learning/how-to-write-a-spec-that-ai-can-follow.md`
