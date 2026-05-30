---
title: "Come Scrivere Una Specifica Che L'IA Può Seguire"
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Come Scrivere Una Specifica Che L'IA Può Seguire

## Riepilogo

Questa guida spiega come scrivere una specifica di prodotto o di funzionalità che aiuti l'implementazione supportata dall'IA a restare allineata con gli obiettivi reali del prodotto.

## Perché è importante

L'IA può generare codice rapidamente, ma funziona meglio quando ha confini chiari. Se la specifica è vaga, spesso riempirà i vuoti con assunzioni generiche.

## Cosa dovrebbe contenere una buona specifica

- lo scopo della funzione
- i confini dell'ambito
- regole non negoziabili
- comportamento in caso di errore e percorso di fallback
- criteri di accettazione

## Cosa evitare

- obiettivi vaghi come “migliora la UX”
- dettagli di implementazione senza scopo di prodotto
- mescolare idee future con requisiti attuali
- assunzioni nascoste su utente o dati

## Modello pratico

Usa questo ordine:

1. problema
2. utente e contesto
3. flusso nell'ambito
4. elementi fuori ambito
5. regole richieste
6. comportamento di fallback
7. criteri di accettazione
8. note di verifica

## Contesto Let Books

`AGENTS.md`, `AGENTS-Implementation.md` e `README.md` mostrano già come una specifica a strati di questo tipo aiuti anche gli assistenti IA.
