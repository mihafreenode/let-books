---
title: "Come aggiungere in fasi regole di validazione e gate CI"
summary: >-
  Questa guida spiega come aggiungere in modo incrementale regole di validazione e controlli CI, così che un progetto possa migliorare la coerenza e ridurre il disallineamento senza cercare di automatizzare tutto in una sola volta.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Come aggiungere in fasi regole di validazione e gate CI

## Riepilogo

Questa guida spiega come aggiungere in modo incrementale regole di validazione e controlli CI, così che un progetto possa migliorare la coerenza e ridurre il disallineamento senza cercare di automatizzare tutto in una sola volta.

## Perché l'applicazione graduale conta

I team spesso sanno di avere bisogno di una validazione più forte, ma commettono uno di due errori.

O lasciano i controlli di qualità informali per troppo tempo, oppure provano a introdurre tutto insieme un grande sistema CI rigido e generano frustrazione.

Un approccio graduale funziona meglio.

Permette al progetto di trasformare nel tempo aspettative di revisione ricorrenti in controlli ripetibili.

## Partire dagli errori ricorrenti

Le migliori regole di validazione di solito nascono come rilievi ricorrenti nelle revisioni umane.

Chiediti:

- quali errori continuano a ripetersi
- quali regole sono facili da dimenticare
- quale struttura deve restare coerente in tutto il repository
- quali controlli di qualità farebbero risparmiare tempo ai revisori

Se lo stesso problema compare piu volte, e un buon candidato per l'automazione.

## La validazione dovrebbe seguire la catena di autorità

Le regole di validazione dovrebbero rafforzare aspettative documentate, non sostituirle.

Questo significa:

- la specifica definisce la regola
- la documentazione spiega la regola
- la validazione controlla la regola dove è pratico farlo
- la CI esegue la validazione in modo coerente

In questo modo il progetto non finisce per imporre regole che in realtà non sono mai state decise.

## Un utile modello di maturità

### Fase 1: checklist di revisione manuale

Inizia nominando la regola in modo esplicito.

Esempi:

- tutto il nuovo testo visibile all'utente deve essere localizzabile
- la documentazione deve separare lo stato attuale dai piani futuri
- i nuovi articoli pubblici devono citare specifiche e documentazione, non i file sorgente

In questa fase la regola è reale, ma viene ancora applicata dagli esseri umani.

### Fase 2: validazione locale leggera

Aggiungi un piccolo script o un controllo strutturato che i collaboratori possano eseguire in locale.

Esempi:

- rilevamento di chiavi di localizzazione mancanti
- controlli di presenza dei file richiesti
- validazione della generazione dei metadati
- controlli di risoluzione dei link

Questa fase riduce gli errori evitabili prima ancora che la CI si avvii.

### Fase 3: visibilità in CI

Esegui il controllo in CI, anche se inizialmente non è bloccante.

Questo dà al team visibilità sulla frequenza con cui la regola fallisce e se il controllo stesso ha bisogno di essere affinato.

### Fase 4: gate CI bloccante

Una volta che la regola è stabile e compresa, rendila obbligatoria.

A quel punto il progetto passa da un'aspettativa informale a uno standard applicabile.

## Cosa automatizzare per primo

I buoni candidati iniziali di solito sono:

- coerenza strutturale
- file richiesti
- completezza della localizzazione
- validità di formattazione o sintassi
- link interni rotti
- citazioni editoriali vietate

Per la pubblicazione multilingue, tratta i contenuti visibili al lettore in lingua mista come uno dei primi gate CI ad alto valore. Una pagina con un titolo localizzato ma con un riepilogo in inglese o tag in inglese non è parzialmente riuscita. È incompleta.

Questi controlli di solito sono economici, oggettivi e di alto valore.

## Cosa non forzare troppo presto

Alcuni controlli sono preziosi, ma possono aver bisogno di tempo prima di diventare gate rigidi.

Esempi:

- controllo ortografico in molte lingue
- controlli di screenshot o regressione visiva
- controlli di accessibilità mentre la calibrazione è ancora in corso
- regole di stile o formulazione che non sono ancora stabili

Questi possono iniziare come segnali informativi prima di diventare obbligatori.

## Esempi da Let Books

Il repository documenta già diversi modelli di validazione, tra cui:

- smoke test della localizzazione
- validazione della sintassi JSON
- controlli dei file richiesti
- generazione di metadati SEO
- spellcheck e linting opzionali
- automazione della pubblicazione

La documentazione e le guide di stile definiscono anche regole editoriali che col tempo possono diventare obiettivi di validazione, come l'uso di specifiche e documentazione come prove canoniche per gli articoli pubblici.

Questo rende Let Books un buon esempio di applicazione incrementale invece che di processo tutto-in-una-volta.

## Un flusso pratico di conversione delle regole

Usa questo modello quando aggiungi una nuova regola di validazione:

1. identifica il problema ricorrente emerso nelle revisioni
2. scrivi la regola in modo chiaro nella documentazione o nelle linee guida
3. aggiungi uno script o un controllo locale se è pratico
4. eseguilo in CI come feedback visibile
5. rendilo bloccante solo quando è stabile

Questo crea meno attrito che introdurre un gate rigido prima che il team abbia compreso la regola.

## Domande da porsi prima di aggiungere un gate

1. La regola è documentata chiaramente?
2. Il controllo è abbastanza affidabile da meritare fiducia?
3. I collaboratori capiranno come correggere i fallimenti?
4. Il valore del controllo giustifica l'attrito che introduce?
5. Dovrebbe iniziare solo come avviso prima di diventare obbligatorio?

## I progetti assistiti dall'IA ne hanno ancora più bisogno

L'IA aumenta il volume dei cambiamenti e la velocità del cambiamento. Questo significa più occasioni di incoerenza.

Per questo il feedback rapido diventa ancora più prezioso. La domanda pratica spesso non è se l'IA possa produrre un primo tentativo perfetto. La domanda più utile è se l'ambiente possa identificare in modo affidabile il problema successivo da risolvere.

La validazione e la CI non servono a rallentare i team. Servono a impedire che la velocità cancelli confini importanti.

Nel lavoro guidato da specifiche, l'obiettivo non è la massima automazione. L'obiettivo è il rafforzamento affidabile delle regole che contano di più.

## La lezione duratura

I sistemi di validazione più solidi di solito non appaiono già perfettamente formati. Crescono trasformando il giudizio umano ricorrente in controlli documentati, rivedibili e applicabili.

Questo percorso graduale è spesso il modo più realistico per rendere un progetto più rigoroso senza renderlo fragile.

## Checklist di correzione partendo dalla fonte

Quando una regola di validazione fallisce:

1. ispeziona prima il Markdown sorgente
2. ispeziona poi i metadati localizzati
3. ispeziona gli input di generazione e i registri
4. rigenera gli artefatti
5. ispeziona l'HTML generato solo dopo i controlli a livello di sorgente

Non correggere l'output generato se la localizzazione sorgente è incompleta.

## Ulteriori letture

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/it/spec-driven-development.md`
- `../blog/it/documentation-is-part-of-the-product.md`
