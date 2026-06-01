# Programma di localizzazione su larga scala

## Riepilogo

Questo manuale definisce la localizzazione su larga scala in Let Books come un modello operativo di lungo periodo per pubblicazione multilingue, revisione, validazione, manutenzione e apprendimento continuo.

La sua tesi centrale e semplice:

> La localizzazione su larga scala non e principalmente un problema di traduzione.
>
> E un problema di progettazione di sistemi di feedback e di un sistema di conoscenza multilingue.

## Idea centrale

L'obiettivo non e soltanto tradurre parole.

L'obiettivo e aiutare le persone a imparare, partecipare, contribuire, insegnare, conservare conoscenza e accedere alle informazioni nella lingua che comprendono meglio, mantenendo nel tempo sostenibile il sistema multilingue.

## Livelli del programma

- `docs/blog/` spiega perche la localizzazione conta nella pratica.
- `docs/wiki/` definisce regole, modelli e governance durevoli.
- `docs/learning/` trasforma il tema in flussi di lavoro operativi.
- `docs/style-guide/` definisce regole per collaboratori, terminologia, revisione e pubblicazione.
- `docs/sources/` mantiene tracciabili le affermazioni principali.
- `docs/localization-audit-report.md` monitora debito, classi di difetto e stato di chiusura.

## La localizzazione e un sistema, non un progetto

Molti sforzi di localizzazione vengono trattati come progetti finiti:

```text
Traduci
Pubblica
Finisci
```

La localizzazione su larga scala tratta invece la localizzazione come un sistema operativo:

```text
Crea
Traduci
Valida
Migliora
Mantieni
Aggiorna
Previeni il drift
Ripeti
```

La difficolta non e solo produrre traduzioni una volta.

La difficolta e gestire nel tempo un sistema di conoscenza multilingue senza perdere copertura, completezza, qualita o freschezza.

## L'AI funziona meglio dentro cicli di feedback

L'AI e utile nella localizzazione, ma la sua utilita dipende dalla qualita del sistema di feedback circostante.

I livelli di feedback piu importanti sono:

- controlli CI
- validatori strutturali
- controlli ortografici
- controlli terminologici
- controlli di parita semantica
- controlli di accessibilita
- controlli di browser e rendering
- validazione dei link
- revisione di parlanti nativi

Un feedback rapido vale piu di un primo tentativo perfetto.

## Revisione bidirezionale

L'inglese rimane la lingua sorgente canonica per pubblicazione e sincronizzazione.

Tuttavia, intuizioni utili possono nascere in qualsiasi lingua.

Per questo la localizzazione non deve essere trattata come un processo unidirezionale:

```text
Inglese
↓
Traduzioni
```

Ma come un sistema bidirezionale:

```text
Inglese
↕
Traduzioni
```

Fonte canonica non significa saggezza canonica.

Se una modifica in una versione localizzata rivela ambiguita, un problema terminologico, contesto mancante o formulazioni ostili alla traduzione nella fonte inglese, bisogna migliorare anche la fonte canonica e rivedere le altre lingue.

Per ogni cambiamento sostanziale chiedi:

- questo cambiamento rivela un problema nella lingua sorgente
- dovrebbe portare beneficio anche ad altre lingue
- le linee guida terminologiche devono cambiare
- le linee guida di revisione devono cambiare
- i validator devono cambiare

## Modello di qualita della localizzazione

La qualita della localizzazione deve essere monitorata in quattro dimensioni:

### Copertura

Il contenuto esiste affatto in quella lingua?

### Completezza

Tutto il contenuto visibile al lettore e localizzato?

### Qualita

Il testo e naturale, accurato e appropriato per il pubblico di destinazione?

### Freschezza

La versione localizzata riflette ancora la fonte corrente?

## Regola di completezza della localizzazione

Una pagina non e completa solo perche sono localizzati:

- URL
- titolo
- navigazione
- struttura della pagina

Deve essere localizzato tutto il contenuto visibile al lettore, inclusi:

- riepiloghi
- metadati
- etichette di argomento
- titoli e sottotitoli
- corpo dell'articolo
- didascalie e testo alternativo
- diagrammi e testo nei diagrammi
- contenuti correlati

Copertura senza completezza porta a pubblicazione a lingue miste.

## Corpus dei rilievi dei parlanti nativi

Il corpus dettagliato dei rilievi dei parlanti nativi resta un deliverable di prima classe nel manuale canonico `../localization-at-scale-program.md`.

Il suo scopo e documentare casi in cui la traduzione era:

- tecnicamente corretta
- fedele nel significato
- promossa dai controlli automatizzati
- ma comunque migliorabile da un parlante nativo

Questi esempi sono essenziali per l'apprendimento del sistema, il miglioramento delle linee guida e lo sviluppo dei validator.

## Apprendimento continuo

Ogni problema di localizzazione dovrebbe migliorare il sistema.

Il ciclo raccomandato e:

```text
Trova il problema
↓
Correggi il problema
↓
Documenta il problema
↓
Classifica il problema
↓
Migliora il flusso di lavoro
↓
Aggiungi validazione dove e pratico
↓
Previeni la ricorrenza
```

Il risultato ideale e che un problema venga corretto:

- una volta nel contenuto
- una volta nel sistema

## Debito, classi di difetto e drift

Monitora entrambi gli indicatori:

```text
Localization Debt = X
Open Defect Classes = Y
```

Il debito misura il lavoro di contenuto residuo.

Le classi di difetto misurano la maturita del sistema.

Il drift di localizzazione significa che il contenuto localizzato esiste ma non riflette piu la fonte corrente.

## Regola: correggi prima la classe, poi il file

Non ottimizzare principalmente intorno al numero di file rimanenti.

Ottimizza intorno al numero di classi di difetto rimanenti.

Processo raccomandato:

1. identifica la classe del problema
2. determina la causa radice
3. correggi la fonte piu alta possibile
4. aggiorna il validator
5. aggiorna il flusso di lavoro
6. poi correggi le occorrenze residue

## Maturita del repository

Il repository dovrebbe progredire attraverso queste fasi:

1. tradurre il contenuto
2. rilevare i problemi
3. creare validator
4. automatizzare la validazione
5. prevenire il ritorno del problema
6. gestire il drift di localizzazione
7. insegnare a futuri collaboratori e sistemi AI

## Obiettivo operativo

L'obiettivo piu alto della localizzazione su larga scala e:

**copertura linguistica completa, completezza della localizzazione, parita semantica, leggibilita in lingua naturale, appropriatezza culturale, efficacia educativa, miglioramento continuo, prevenzione dei difetti, gestione del drift e pubblicazione multilingue sostenibile tramite forti cicli di feedback.**

## Documenti correlati

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
