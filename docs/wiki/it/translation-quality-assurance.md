---
title: "Garanzia di qualità della traduzione"
summary: >-
  La QA della traduzione combina validazione automatizzata, controllo ortografico, revisione terminologica, verifiche di accessibilità e giudizio umano.
topics:
  - translation-quality
  - qa
  - localization
---
# Garanzia di qualità della traduzione

## Riepilogo

La QA della traduzione combina validazione automatizzata, controllo ortografico, revisione terminologica, verifiche di accessibilità e giudizio umano.

## Controlli comuni

- traduzioni mancanti
- fuoriuscita dell'inglese
- completezza della localizzazione visibile al lettore
- parità strutturale rispetto all'output appena generato
- leggibilità nella lingua madre ed espressione naturale
- incongruenze dei segnaposto
- collegamenti interrotti
- deriva del glossario
- copertura del testo di accessibilità
- parità di screenshot e diagrammi

## Requisito di output generato di recente

Prima della revisione della parità strutturale, della revisione semantica o del confronto manuale degli articoli:

1. rigenerate il sito dallo stato corrente del repository
2. eseguite i validatori sull'output generato corrente
3. esaminate gli artefatti HTML generati
4. solo allora eseguite la valutazione manuale della parità

Questa regola esiste perché Markdown sorgente e output generato possono divergere temporaneamente durante lo sviluppo e i rilievi QA dovrebbero basarsi sugli artefatti correnti, non su file generati obsoleti.

## Revisione della parità strutturale

La revisione della parità strutturale dovrebbe cercare la perdita di valore per il lettore anche quando l'articolo localizzato conserva ancora in larga misura il significato.

I segnali tipici includono:

- sezioni principali mancanti
- gerarchia dei titoli collassata
- esempi mancanti
- guida pratica compressa
- discussione sulla governance ridotta
- guida di revisione o validazione abbreviata

Gli avvisi dei validatori di parità strutturale sono inviti alla revisione, non prova automatica di una cattiva traduzione. Devono essere interpretati insieme all'HTML generato e, dove necessario, all'output renderizzato nel browser.

## Revisione dell'espressione nella lingua madre

La QA della traduzione dovrebbe cercare anche testo che sia tecnicamente corretto ma non ciò che un madrelingua sceglierebbe in modo naturale.

Questo include:

- struttura della frase direttamente inglese
- traduzione diretta di idiomi inglesi
- formulazioni che suonano tradotte invece che scritte come testo originale
- terminologia che continua a rivelare la lingua di origine

Esempi di questo modello includono formulazioni equivalenti a:

- contenuto candidato
- strategia di validazione
- artefatto del flusso di lavoro
- strumenti curati
- competenze curate

Non si tratta sempre di errori di traduzione. Spesso sono casi in cui un madrelingua riscriverebbe istintivamente la frase.

## Test di preferenza del madrelingua

Per le sezioni di prosa importanti, i revisori dovrebbero chiedersi:

> Se un madrelingua competente stesse scrivendo questa idea da zero, probabilmente la scriverebbe in questo modo?

Se la risposta è no, i revisori dovrebbero:

- preservare il significato
- preservare la parità semantica
- preservare la parità strutturale
- migliorare la formulazione

Questo test è particolarmente utile per:

- introduzioni
- riepiloghi
- spiegazioni educative
- guida pratica
- discussioni di governance
- conclusioni

## Revisione dell'espressione naturale

Trattate la formulazione tecnicamente corretta ma innaturale come un problema di qualità.

I revisori dovrebbero preferire formulazioni che suonano naturalmente scritte nella lingua di destinazione, anche quando la traduzione originale è comprensibile.

L'obiettivo non è solo una traduzione corretta. L'obiettivo è un documento che sembri scritto originariamente per lettori madrelingua.

I miglioramenti del linguaggio naturale non devono indebolire:

- la parità semantica
- la parità strutturale
- la copertura educativa
- gli esempi
- la guida pratica
- la guida di governance

## Convalidatore della localizzazione rivolto al lettore

Una classe di validatori dovrebbe far fallire esplicitamente la CI quando una pagina sembra localizzata ma continua a esporre contenuti rivolti al lettore nella lingua di origine.

Esempi che dovrebbero fallire:

- titolo localizzato con riepilogo in inglese
- articolo localizzato con tag in inglese
- articolo localizzato con titoli o elenchi in inglese
- articolo localizzato con callout o didascalie in inglese
- articolo localizzato con etichette di diagrammi in inglese o testo alternativo
- schede `related-content` in lingue miste

Questa è una condizione di errore, non semplicemente un avviso, perché i lettori percepiscono tali pagine come visibilmente incompiute.

## Audit della classe di difetto

La QA della traduzione dovrebbe mantenere classi di difetto esplicite con i seguenti campi:

- descrizione
- conteggio delle occorrenze
- causa radice
- copertura del validatore
- rischio di ricorrenza
- piano di chiusura

Le categorie richieste includono:

- riepiloghi non tradotti
- corpi di testo non tradotti
- pubblicazione di bozze segnaposto
- metadati non tradotti
- pubblicazione in lingue miste
- classi future scoperte

Una classe è chiusa solo quando il suo conteggio raggiunge lo zero e la CI impedisce il suo ritorno senza fallimento.

## Prove di revisione umana

La QA della traduzione dovrebbe inoltre conservare brevi registrazioni di revisione umana per correzioni rappresentative assistite dall'AI.

Campi minimi:

- testo originale
- testo corretto
- categoria di errore
- ipotesi sulla causa radice
- motivazione del revisore

I rilievi delle revisioni dei madrelingua dovrebbero essere conservati come un corpus in crescita, non come note isolate una tantum. I rilievi ricorrenti dovrebbero rifluire nella progettazione dei validatori, nella guida per i contributori e nelle future istruzioni per gli agenti AI.

Prima di approvare una traduzione assistita dall'AI, i revisori dovrebbero:

- leggere le voci pertinenti del corpus strutturato dei rilievi per quella lingua o quel tema
- controllare i modelli ricorrenti di difetti provenienti dalla revisione umana
- confermare che la bozza corrente non reintroduca problemi noti prima dell'approvazione

Ogni difetto segnalato da un madrelingua dovrebbe inoltre essere valutato rispetto a:

- correzione del contenuto
- aggiornamento della guida di revisione
- aggiornamento della guida terminologica
- miglioramento del prompt
- opportunità di validatore
- opportunità di test di regressione

Questo è importante perché, anche quando il significato complessivo è preservato, le traduzioni generate dall'AI possono richiedere la revisione di un madrelingua per correggere problemi sottili di grammatica, modalità, terminologia e registro specifico del dominio. Questi problemi sono spesso difficili da rilevare con le sole metriche automatizzate di qualità.

Gli errori concreti segnalati non sono solo indicativi. Ognuno dovrebbe finire corretto, sistematizzato, intenzionalmente lasciato irrisolto con motivazione, oppure ancora esplicitamente tracciato nel corpus dei rilievi.

## Tassonomia comune degli errori di traduzione dell'IA

- grammatica
- modalità
- terminologia
- registro
- fluidità
- traduzione letterale
- ambiguità
- perdita di contesto
- ordine delle parole
- collocazione
- scrittura o ortografia
- formulazione della policy di dominio
- formulazione di accessibilità

## Punteggio benchmark leggero

Per una valutazione ripetibile della traduzione AI, utilizzate una rubrica leggera da 0 a 3 invece di affidarvi solo a un giudizio superato/non superato.

Dimensioni consigliate:

- accuratezza del significato
- grammatica e fluidità
- terminologia e aderenza al dominio
- registro e stile
- sforzo di revisione

Etichette di rilascio consigliate:

- bloccante
- revisione maggiore
- revisione minore
- pronto con approvazione della revisione

Questo crea dati adatti a scorecard senza richiedere un framework pesante di misurazione della localizzazione.

## Pagine correlate

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/it/how-to-run-localization-qa-in-ci.md`
