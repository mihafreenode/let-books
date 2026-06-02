---
title: "Come revisionare le traduzioni assistite dall'IA"
summary: >-
  Questa guida spiega come revisionare traduzioni generate dall'IA rispetto a significato, terminologia, accessibilità, tono e necessità di revisione umana.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Come revisionare le traduzioni assistite dall'IA

## Riepilogo

Questa guida spiega come revisionare traduzioni generate dall'IA rispetto a significato, terminologia, accessibilità, tono e necessità di revisione umana.

## Checklist di revisione

- controlla prima il significato e solo dopo lo stile
- verifica la terminologia rispetto al glossario del progetto
- esamina con particolare attenzione le formulazioni sensibili
- conferma che anche il testo di accessibilità sia localizzato
- indica onestamente il livello di maturità della revisione

## Caso di studio sloveno

### Bozza AI originale

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Versione slovena corretta

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Feedback della revisione umana

### Problema 1

- originale: `morajo moči`
- corretto: `morajo imeti možnost, da`
- categorie: grammatica, modalità
- probabile causa dell'errore AI: traduzione letterale di una costruzione modale inglese
- motivazione del revisore: la formulazione originale è sgrammaticata in sloveno; la versione corretta usa la costruzione naturale per il linguaggio di policy.

### Problema 2

- originale: `po potrebi tudi izklopiti`
- corretto: `da po potrebi izklopijo`
- categorie: scorrevolezza, ordine delle parole
- probabile causa dell'errore AI: ordine delle parole innaturale dalla lingua di partenza e debole controllo del discorso
- motivazione del revisore: l'ordine corretto è più chiaro e rimuove un'enfasi non necessaria.

### Problema 3

- originale: `morajo biti izrecne`
- corretto: `morajo biti izrecno omogočene`
- categorie: terminologia, registro, formulazione di policy di dominio
- probabile causa dell'errore AI: scelta lessicale da dizionario senza sufficiente contesto di prodotto o policy
- motivazione del revisore: il requisito riguarda l'abilitazione esplicita degli arricchimenti a pagamento, non la descrizione degli arricchimenti come "espliciti".

## Categorie comuni di problemi

- grammatica
- modalità
- terminologia
- registro
- scorrevolezza
- traduzione letterale
- ambiguità
- perdita di contesto
- ordine delle parole
- collocazioni
- scrittura o ortografia
- formulazione di policy di dominio
- formulazione di accessibilità

## Guida al punteggio

Per revisioni ripetibili usa una semplice scala 0-3.

- `0`: inaccettabile
- `1`: problemi gravi
- `2`: utilizzabile con interventi di revisione
- `3`: forte o quasi pronto per la pubblicazione

Dimensioni di valutazione consigliate:

- accuratezza del significato
- grammatica e scorrevolezza
- terminologia e aderenza al dominio
- registro e stile
- sforzo di revisione richiesto

## Guida alla raccomandazione di rilascio

- `blocker`: non adatto alla pubblicazione o all'esposizione agli utenti
- `major_revision`: il significato può essere vicino, ma serve ancora una riscrittura sostanziale
- `minor_revision`: bozza utilizzabile con correzioni mirate da parte di un madrelingua
- `ready_with_review_signoff`: adatto una volta completata la normale approvazione del revisore

## Documentare non solo la correzione, ma anche la ragione

Per un lavoro di revisione riutilizzabile registra:

- testo originale
- testo corretto
- categoria di errore
- ipotesi sulla causa radice
- motivazione del revisore

## Lezioni riutilizzabili dalla revisione slovena

Lo schema del caso di studio sloveno è ampiamente riutilizzabile anche in altre lingue:

- il significato grammaticale può essere vicino, mentre la frase resta comunque non pubblicabile per un madrelingua
- le costruzioni modali sono particolarmente vulnerabili alla traduzione letterale
- terminologia e linguaggio di policy richiedono spesso riscrittura consapevole del dominio
- il QA automatizzato aiuta, ma raramente basta per problemi sottili di registro

## Nota Localization-at-Scale

Anche quando il significato complessivo è preservato, le traduzioni generate dall'IA possono richiedere la revisione di un madrelingua per correggere problemi sottili di grammatica, modalità, terminologia e registro specifico del dominio. Questi problemi sono spesso difficili da rilevare in modo affidabile con le sole metriche automatiche di qualità.

## Dove riutilizzare esempi di questo tipo

- materiali di formazione per revisori di localizzazione
- dataset di valutazione della traduzione con IA
- esempi nella guida di stile
- documentazione human-in-the-loop
- articoli sulla localization at scale e guide di buone pratiche

Esempi di questo tipo aiutano i revisori a calibrare le aspettative e forniscono ai responsabili della localizzazione materiale di riferimento realistico.

## Pagine correlate

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
