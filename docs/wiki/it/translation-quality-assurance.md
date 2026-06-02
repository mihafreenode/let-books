---
title: "Garanzia di qualità della traduzione"
summary: >-
  Il QA della traduzione combina convalida automatizzata, controllo ortografico, revisione della terminologia, controlli di accessibilità e giudizio umano.
topics:
  - translation-quality
  - qa
  - localization
---
# Garanzia di qualità della traduzione

## Riepilogo

Il QA della traduzione combina convalida automatizzata, controllo ortografico, revisione della terminologia, controlli di accessibilità e giudizio umano.

## Controlli comuni

- traduzioni mancanti
- Perdita di inglese
- completezza della localizzazione rivolta al lettore
- Mancate corrispondenze dei segnaposto
- collegamenti interrotti
- deriva del glossario
- copertura testuale sull'accessibilità
- parità di screenshot e diagrammi

## Convalidatore della localizzazione rivolto al lettore

Una classe di validazione dovrebbe fallire esplicitamente l'IC quando una pagina appare localizzata ma espone comunque contenuto rivolto al lettore nella lingua di origine.

Esempi che dovrebbero fallire:

- Titolo localizzato con riassunto in inglese
- articolo localizzato con tag inglesi
- articolo localizzato con titoli o elenchi in inglese
- Articolo localizzato con richiami o didascalie in inglese
- Articolo localizzato con etichette di diagrammi in inglese o testo alternativo
- schede con contenuti correlati in lingue miste

Questa è una condizione di fallimento, non semplicemente un avvertimento, perché i lettori percepiscono tali pagine come visibilmente incompiute.

## Audit della classe difetto

Il QA della traduzione dovrebbe mantenere classi di difetti esplicite con:

- descrizione
- conteggio delle occorrenze
- causa principale
- copertura del validatore
- rischio di recidiva
- piano di chiusura

Le categorie richieste includono:

- riassunti non tradotti
- corpi non tradotti
- pubblicazione bozza segnaposto
- metadati non tradotti
- editoria in lingue miste
- classi future scoperte

Una classe viene chiusa solo quando il suo conteggio raggiunge lo zero e CI ne impedisce il ritorno senza errori.

## Prove di revisione umana

Il controllo qualità della traduzione dovrebbe inoltre preservare brevi registrazioni di revisioni umane per correzioni rappresentative assistite dall’intelligenza artificiale.

Campi minimi:

- testo originale
- testo corretto
- categoria di errore
- ipotesi della causa principale
- motivazione del revisore

I risultati delle revisioni dei madrelingua dovrebbero essere preservati come un corpus in crescita, non come note isolate e una tantum. I risultati ripetuti dovrebbero avere un impatto sulla progettazione del validatore, sulla guida dei contributori e sulle future istruzioni dell'agente AI.

Ciò è importante perché anche quando il significato generale viene preservato, le traduzioni generate dall’intelligenza artificiale possono richiedere la revisione da parte di un madrelingua per correggere sottili problemi di grammatica, modalità, terminologia e registro specifico del dominio. Questi problemi sono spesso difficili da rilevare solo attraverso i parametri di qualità automatizzati.

## Tassonomia comune degli errori di traduzione dell'IA

- grammatica
- modalità
- terminologia
- registrarsi
- scioltezza
- traduzione letterale
- ambiguità
- perdita di contesto
- ordine delle parole
- collocazione
- Scrittura o ortografia
- formulazione della politica del dominio
- formulazione dell'accessibilità

## Punteggio benchmark leggero

Per una valutazione ripetibile della traduzione AI, utilizzare una rubrica leggera 0-3 invece di fare affidamento solo sul giudizio superato/fallito.

Dimensioni consigliate:

- significa precisione
- grammatica e fluidità
- terminologia e adattamento del dominio
- registro e stile
- rivedere lo sforzo

Etichette di rilascio consigliate:

- bloccante
- revisione importante
- revisione minore
- pronto con l'approvazione della revisione

Ciò crea dati compatibili con le scorecard senza richiedere un quadro di misurazione della localizzazione pesante.

## Pagine correlate

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/it/how-to-run-localization-qa-in-ci.md`