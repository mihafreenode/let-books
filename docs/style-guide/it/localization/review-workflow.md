# Flusso di revisione

## Riepilogo

La revisione della localizzazione dovrebbe passare dalla generazione della bozza a una revisione umana sempre più affidabile.

## Fasi consigliate

1. bozza di traduzione
2. validazione automatizzata
3. revisione terminologica
4. revisione dell'accessibilità
5. revisione da parte di madrelingua
6. revisione professionale facoltativa

## Requisiti per i record di revisione AI

Quando un revisore corregge testo generato da AI, la correzione deve essere documentata in un record riutilizzabile.

Campi richiesti:

- testo originale
- testo corretto
- categoria di errore
- ipotesi sulla causa radice
- motivazione del revisore

Questo mantiene il lavoro di revisione riutilizzabile per governance, training, calibrazione QA e valutazione dei modelli.

## Esempi di revisione

L'esempio sloveno in `ai-translation-review-records.md` mostra un modello comune: il significato generale è preservato, ma resta necessario un intervento di un madrelingua per grammatica, modalità, terminologia e registro.

## Pagine correlate

- `ai-translation-review-records.md`
