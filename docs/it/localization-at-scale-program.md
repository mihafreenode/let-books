# Programma di localizzazione su larga scala

## Sintesi

Questo manuale definisce la Localizzazione su larga scala in Let Books come un modello operativo di lungo periodo per pubblicazione multilingue, revisione, validazione, manutenzione e apprendimento continuo.

La sua tesi centrale è semplice:

> La localizzazione su larga scala non è principalmente un problema di traduzione.
>
> È un problema di progettazione di sistemi di feedback e un problema di sistema di conoscenza multilingue.

L'obiettivo non è soltanto tradurre parole.

L'obiettivo è aiutare le persone a imparare, partecipare, contribuire, insegnare, preservare conoscenza e accedere alle informazioni nella lingua che comprendono meglio, mantenendo nel tempo gestibile quel sistema multilingue.

## Livelli Del Programma

- `docs/blog/` spiega perché la localizzazione conta nella pratica.
- `docs/wiki/` definisce regole, modelli e governance durevoli.
- `docs/learning/` trasforma il tema in flussi di lavoro operativi.
- `docs/style-guide/` definisce regole per collaboratori, terminologia, revisione e pubblicazione.
- `docs/sources/` mantiene tracciabili le affermazioni principali.
- `docs/localization-audit-report.md` tiene traccia di debito, classi di difetto e stato di chiusura.

## Parte 1 - Perché La Localizzazione Conta

La localizzazione conta perché l'accessibilità linguistica fa parte dell'accesso reale.

Se un lettore non riesce a comprendere comodamente il contenuto, allora l'accesso esiste solo in un senso tecnico ristretto.

Per Let Books, la pubblicazione multilingue conta per ragioni pratiche:

- accessibilità educativa
- partecipazione culturale
- uguaglianza della conoscenza
- inclusione digitale
- tecnologia di interesse pubblico
- governance multilingue
- preservazione delle lingue più piccole
- supporto alle lingue ufficiali e regionali
- multilinguismo europeo nella pratica
- il principio di "Uniti nella diversità" applicato a software funzionante e sistemi della conoscenza

Questo non è un argomento a favore della traduzione simbolica.

È un argomento a favore di una partecipazione multilingue realmente usabile.

I lettori non incontrano solo titoli e menu. Incontrano spiegazioni, avvertenze, diagrammi, flussi di revisione, esempi, testo di accessibilità, metadati e inquadramento educativo. Se questi elementi restano solo in inglese, il sistema continua a privilegiare i lettori anglofoni anche quando esistono involucri localizzati.

## Parte 2 - La Localizzazione È Un Sistema, Non Un Progetto

Molti sforzi di localizzazione vengono gestiti come se fossero progetti finiti:

```text
Traduci
Pubblica
Finisci
```

Quel modello si rompe rapidamente.

I contenuti cambiano.

La terminologia evolve.

Le lingue evolvono.

I collaboratori cambiano.

I sistemi di IA migliorano.

I parlanti nativi scoprono nuovi problemi dopo la pubblicazione.

La Localizzazione su larga scala tratta quindi la localizzazione come un sistema operativo:

```text
Crea
Traduci
Valida
Migliora
Mantieni
Aggiorna
Previeni La Deriva
Ripeti
```

Il problema difficile non è creare traduzioni una sola volta.

Il problema difficile è gestire nel tempo un sistema di conoscenza multilingue senza perdere copertura, parità, qualità, aggiornamento o fiducia dei revisori.

## Parte 3 - L'IA Funziona Meglio Dentro I Cicli Di Feedback

L'IA è utile nella localizzazione, ma la sua utilità dipende dalla qualità del sistema di feedback circostante.

Kent Beck ha riassunto chiaramente la versione ingegneristica di questo principio:

> "L'ottimismo è un rischio professionale della programmazione; il feedback è la cura."

Norbert Wiener ne ha descritto la versione sistemica:

> "Il feedback è un metodo di controllo di un sistema mediante il reinserimento in esso dei risultati delle sue prestazioni passate."

Questo è il modello giusto anche per la pubblicazione multilingue.

L'IA funziona meglio quando il suo output è immediatamente esposto a feedback come:

- controlli CI
- validatori strutturali
- correttori ortografici
- controlli terminologici
- controlli di parità semantica
- controlli di accessibilità
- controlli di browser e rendering
- validazione dei link
- revisione di parlanti nativi

Un feedback rapido batte tentativi iniziali perfetti.

L'obiettivo non è pretendere bozze perfette da umani o IA.

L'obiettivo è accorciare il ciclo tra:

- creazione dei contenuti
- scoperta dei difetti
- correzione dei difetti
- prevenzione delle ricorrenze

## Parte 3A - Revisione Bidirezionale

L'inglese resta la lingua sorgente canonica per scopi di pubblicazione e sincronizzazione.

Tuttavia, intuizioni utili possono nascere in qualsiasi lingua.

Esempi:

- una revisione di parlanti nativi individua una formulazione sorgente poco naturale
- un traduttore scopre un'ambiguità
- un revisore trova contesto mancante
- un articolo localizzato acquisisce un esempio migliore
- la terminologia migliora in una lingua non inglese
- una revisione culturale rivela un problema di accessibilità

Questi rilievi possono giustificare modifiche alla stessa fonte canonica.

### Principio Di Revisione Bidirezionale

La localizzazione non dovrebbe essere trattata come un processo a senso unico:

```text
English
↓
Translations
```

Invece:

```text
English
↕
Translations
```

L'inglese resta canonico.

La conoscenza può fluire in entrambe le direzioni.

### Evento Di Revisione Interlinguistica

Qualsiasi cambiamento sostanziale di contenuto dovrebbe attivare una revisione delle lingue correlate.

Se cambia l'inglese, riesaminare:

- tutte le versioni localizzate
- la parità semantica
- i metadati
- i riepiloghi
- diagrammi e screenshot, dove rilevanti

Se cambia una versione localizzata, riesaminare:

- se il rilievo migliora la fonte canonica
- se altre lingue dovrebbero beneficiarne
- se la guida terminologica dovrebbe cambiare
- se la guida di revisione dovrebbe cambiare
- se i validatori dovrebbero cambiare

### Miglioramento Della Fonte Tramite La Localizzazione

La revisione di localizzazione può rivelare:

- ambiguità
- complessità non necessaria
- formulazioni ostili alla traduzione
- assunzioni implicite
- espressioni culturalmente specifiche
- terminologia poco accessibile

Quando accade, migliorare la fonte può essere meglio che compensare separatamente in ogni traduzione.

```text
Problema scoperto in sloveno
↓
Causa radice trovata in inglese
↓
Inglese migliorato
↓
Tutte le lingue ne beneficiano
```

### Prompt Di Revisione Per Agenti IA

Quando modifichi una versione in qualsiasi lingua, chiedi:

```text
Questo cambiamento rivela un problema della lingua sorgente?
Questo cambiamento migliora altre versioni linguistiche?
La guida terminologica dovrebbe cambiare?
La guida di revisione dovrebbe cambiare?
I validatori dovrebbero cambiare?
```

La risposta può essere:

```text
Nessuna azione necessaria
```

oppure:

```text
Apri attività di revisione interlinguistica
```

### Principio Di Base

Fonte canonica non significa saggezza canonica.

L'inglese può essere la fonte di sincronizzazione.

Conoscenza, miglioramenti, rilievi di revisione e intuizioni sulla qualità possono nascere da qualsiasi lingua supportata.

Un progetto multilingue dovrebbe permettere che i miglioramenti scoperti in una lingua vadano a beneficio di tutte le lingue.

## Parte 4 - Modello Di Qualità Della Localizzazione

La qualità della localizzazione dovrebbe essere monitorata su quattro dimensioni.

### Copertura

La copertura chiede se il lettore può accedere ai contenuti nella propria lingua.

Esempi:

- L'articolo esiste in sloveno?
- La guida pratica esiste in macedone?
- La pagina di policy esiste in serbo cirillico?

La copertura è binaria a livello di pubblicazione.

Il contenuto esiste per quel pubblico oppure no.

### Completezza

La completezza chiede se tutte le parti della pagina rivolte al lettore sono localizzate.

Esempi:

- titolo localizzato ma riepilogo in inglese
- corpo localizzato ma tag in inglese
- articolo localizzato ma etichette del diagramma non tradotte
- involucro della pagina localizzato ma schede dei contenuti correlati in inglese

La copertura senza completezza produce pubblicazione in lingua mista.

### Qualità

La qualità chiede se il testo localizzato si legge in modo naturale, accurato e appropriato per il suo pubblico.

Esempi:

- formulazione tecnicamente corretta ma traduttese
- significato preservato ma retorica innaturale
- testo di policy accurato ma non all'altezza della pubblicazione
- spiegazione educativa corretta ma difficile da apprendere

La qualità è il punto in cui la revisione di parlanti nativi apporta il valore più distintivo.

### Aggiornamento

L'aggiornamento chiede se la versione localizzata riflette ancora la fonte corrente.

Esempi:

- nuova avvertenza aggiunta in inglese ma assente nelle traduzioni
- conclusione della fonte cambiata ma le pagine tradotte usano ancora il vecchio inquadramento
- diagramma o screenshot aggiornato non ancora localizzato

L'aggiornamento è il volto operativo della deriva di localizzazione.

## Parte 5 - Completezza Della Localizzazione

### Regola Di Localizzazione Rivolta Al Lettore

Una pagina non è completa solo perché uno qualunque dei seguenti elementi è localizzato:

- URL
- titolo
- navigazione
- involucro della pagina
- bozza dell'articolo

Tutti i contenuti rivolti al lettore devono essere localizzati prima che una pagina sia considerata completa.

I contenuti rivolti al lettore includono:

- titoli
- sottotitoli
- riepiloghi
- descrizioni
- tag ed etichette di categoria
- intestazioni
- corpo degli articoli
- elenchi
- riquadri informativi
- didascalie
- diagrammi
- testo alternativo
- testo dei contenuti correlati
- metadati mostrati ai lettori
- breadcrumb localizzati, dove esistono varianti

Le eccezioni consentite sono limitate:

- citazioni
- materiale in lingua sorgente chiaramente indicato e oggetto di discussione
- nomi propri
- identificatori tecnici
- non traduzione intenzionale esplicitamente dichiarata

### Schema Di Fallimento Della Pubblicazione In Lingua Mista

Una delle lezioni più importanti di questa iniziativa è che la pubblicazione in lingua mista spesso appare superficialmente riuscita.

La pagina può avere:

- un percorso localizzato
- un titolo localizzato
- un paragrafo iniziale localizzato

e comunque deludere i lettori perché riepiloghi, tag, intestazioni o sezioni del corpo restano in inglese.

Per questo la completezza viene monitorata separatamente dalla copertura.

## Parte 6 - Rilievi Della Revisione Di Parlanti Nativi

Questa sezione è un deliverable di prima classe.

Dovrebbe crescere nel tempo.

Non dovrebbe essere condensata in conclusioni brevi.

Il suo scopo è documentare casi reali in cui:

- la traduzione era tecnicamente corretta
- la traduzione preservava il significato inteso
- la traduzione superava la validazione automatizzata
- la traduzione superava il controllo ortografico
- la traduzione avrebbe probabilmente superato i controlli di parità semantica
- un parlante nativo ha comunque individuato un'opportunità di migliorarla

Qui vive il valore educativo.

Mostra che cosa rimane dopo che i moderni strumenti di localizzazione hanno già fatto il loro lavoro.

### Formato Del Record Del Corpus

Ogni record dovrebbe catturare:

- articolo sorgente
- lingua
- testo inglese originale
- testo localizzato originale
- testo localizzato migliorato
- spiegazione
- categoria
- se il QA automatizzato rileverebbe probabilmente il problema
- lezioni apprese

### Indice Delle Categorie

Le categorie attuali e previste includono:

- struttura parallela
- trasferimento retorico dall'inglese
- costruzioni con agente nascosto
- astrazioni antropomorfiche
- traduttese
- disallineamento con lo stile educativo
- disallineamento con lo stile del settore pubblico
- terminologia innaturale
- trasferimento di schemi discorsivi
- adattamento culturale
- disallineamento con le aspettative del pubblico
- miglioramento della leggibilità
- miglioramento del tono
- preservazione semantica con perdita di fluidità
- pubblicazione in lingua mista
- terminologia inglese non necessaria
- gergo professionale non localizzato
- ottimizzazione del testo sorgente per la localizzazione
- falso amico della terminologia tecnica

### Ottimizzazione Del Testo Sorgente Per La Localizzazione

Definizione:

Una frase sorgente può essere tecnicamente corretta e tuttavia inutilmente difficile da tradurre in modo naturale in più lingue.

Linea guida:

Quando problemi di traduzione ricorrenti nascono dalla stessa formulazione sorgente, migliora il testo sorgente invece di compensare ripetutamente in ogni lingua di destinazione.

Principio operativo:

> Un testo sorgente migliore spesso produce traduzioni migliori in ogni lingua.

### Falso Amico Della Terminologia Tecnica

Definizione:

Un termine tecnico viene tradotto con il significato sbagliato relativo al dominio professionale, anche se il significato di superficie da dizionario appare plausibile.

Linea guida:

Traduci il vocabolario tecnico in base al contesto di dominio attivo. Nella localizzazione software, i termini di testing, QA, benchmarking e valutazione dovrebbero essere risolti prima attraverso quei domini, non tramite significati fisici o quotidiani non correlati.

### Rilievo 1 - Struttura Parallela

- Articolo sorgente: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Lingua: Sloveno
- Testo inglese originale: `what the project is trying to achieve and what it is explicitly not trying to become`
- Testo localizzato originale: `kaj projekt skuša doseči in česa ne sme postati`
- Testo localizzato migliorato: `kaj projekt skuša doseči in kaj ne sme postati`
- Spiegazione: La frase slovena originale è grammaticalmente corretta e comprensibile. Preserva il significato inteso. Probabilmente supererebbe controlli ortografici, di parità semantica e QA generali. Il problema è stilistico e strutturale. La formulazione ricalca troppo da vicino la struttura di contrasto dell'inglese e perde la forma parallela più pulita che un autore sloveno madrelingua sceglierebbe normalmente.
- Categoria: struttura parallela; fluidità in lingua nativa; traduttese
- Il QA automatizzato lo rileverebbe probabilmente?: No.
- Lezioni apprese: Preservare il significato non basta per una prosa di qualità editoriale. Le strutture parallele spesso sopravvivono alla traduzione automatica in forme tecnicamente accettabili ma leggermente estranee.

### Rilievo 2 - Trasferimento Retorico Dall'Inglese

- Articolo sorgente: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Lingua: Sloveno
- Testo inglese originale: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Testo localizzato originale: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Testo localizzato migliorato: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Spiegazione: La versione slovena originale è comprensibile e semanticamente allineata, ma trasferisce troppo direttamente le abitudini retoriche dell'inglese. `Bi morale to zanimati` non è sbagliato, ma suona più come un'argomentazione tradotta che come una prosa esplicativa slovena scritta in modo naturale. La versione migliorata usa una costruzione più idiomatica per la prosa istituzionale.
- Categoria: trasferimento di schemi retorici inglesi; trasferimento di schemi discorsivi; disallineamento con lo stile del settore pubblico
- Il QA automatizzato lo rileverebbe probabilmente?: No.
- Lezioni apprese: La qualità in lingua nativa dipende spesso dagli schemi retorici preferiti, non solo dalla correttezza lessicale. La scrittura istituzionale e di interesse pubblico può richiedere abitudini di frase diverse da quelle suggerite dagli originali inglesi.

### Rilievo 3 - Costruzione Con Agente Nascosto

- Articolo sorgente: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Lingua: Sloveno
- Testo inglese originale: `Why documentation cannot wait until later`
- Testo localizzato originale: `Zakaj dokumentacija ne sme čakati`
- Testo localizzato migliorato: `Zakaj se z dokumentacijo ne sme čakati`
- Spiegazione: L'intestazione inglese implica un agente umano nascosto: le persone non dovrebbero rimandare la documentazione. La versione slovena letterale trasferisce l'azione al sostantivo astratto stesso, come se fosse la documentazione l'attore che non deve aspettare. Il risultato è comprensibile ma retoricamente fuori fuoco. La versione migliorata ripristina l'agency umana implicita mantenendo l'intestazione compatta.
- Categoria: costruzione con agente nascosto; astrazione antropomorfica; trasferimento letterale del soggetto
- Il QA automatizzato lo rileverebbe probabilmente?: No.
- Lezioni apprese: Le intestazioni sono particolarmente vulnerabili agli errori di agente nascosto perché l'inglese tollera astrazioni compresse che non sempre si trasferiscono in modo naturale in altre lingue.

### Rilievo 4 - Preservazione Semantica Senza Fluidità Nativa

- Articolo sorgente: `docs/blog/sl/ai-will-not-replace-translators.md`
- Lingua: Sloveno
- Testo inglese originale: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Testo localizzato originale: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Testo localizzato migliorato: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Spiegazione: Questo è uno degli esempi più chiari nel repository del perché la revisione di parlanti nativi resti necessaria dopo il QA automatizzato. La bozza preserva il significato generale. Comunica la direzione della policy. Probabilmente supererebbe molti controlli non nativi. Eppure contiene ancora tre distinti problemi di lingua nativa: modalità sgrammaticata in `morajo moči`, ordine delle parole goffo in `po potrebi tudi izklopiti` e formulazione di policy inappropriata al dominio in `morajo biti izrecne`. La versione migliorata non è solo più elegante. Trasforma il testo da bozza comprensibile a linguaggio di policy naturale.
- Categoria: preservazione semantica con perdita di fluidità; modalità; formulazione di policy di dominio; registro; miglioramento della leggibilità
- Il QA automatizzato lo rileverebbe probabilmente?: Parzialmente, al massimo. Gli strumenti grammaticali potrebbero segnalare `morajo moči`, ma il QA automatizzato probabilmente non coglierebbe il problema di registro di policy né il miglioramento specifico di dominio da `izrecne` a `izrecno omogočene`.
- Lezioni apprese: Una traduzione può preservare il significato ed essere comunque improponibile per la pubblicazione. Questo è uno degli argomenti più forti a favore della conservazione delle correzioni dei parlanti nativi come evidenza riutilizzabile invece di trattarle come semplici ritocchi di copy.

### Rilievo 5 - Pubblicazione In Lingua Mista

- Articolo sorgente: `docs/blog/sl/the-cost-of-english-only-software.md`
- Lingua: Sloveno
- Testo inglese originale: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Le etichette di argomento renderizzate in inglese, come `digital-inclusion`, `education` e `public-sector-software`, restavano anch'esse visibili nelle superfici di pubblicazione.
- Testo localizzato originale: La pagina slovena usava il titolo localizzato `Cena programske opreme samo v angleščini`, ma ai lettori erano ancora visibili riepilogo in inglese, etichette di argomento renderizzate in inglese e sezioni del corpo in inglese.
- Testo localizzato migliorato: L'articolo sloveno pubblicato ora usa il riepilogo localizzato `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Usa inoltre corpo localizzato ed etichette di argomento renderizzate localizzate, senza placeholder inglesi né perdite di lingua mista.
- Spiegazione: Questo è un esempio a livello di repository, non un esempio di singola frase, ma è essenziale. A prima vista la pagina sembrava tradotta. Esistevano un percorso localizzato e un titolo localizzato. Quel successo superficiale avrebbe facilmente potuto superare una revisione casuale. Un parlante nativo, però, avrebbe comunque percepito la pagina come visibilmente incompleta perché nelle superfici di pubblicazione rivolte al lettore restava dell'inglese. È anche qui che gergo professionale non localizzato e terminologia inglese non necessaria emergono spesso per primi: etichette tassonomiche, riepiloghi, metadati e testo di supporto trapelano prima che i paragrafi principali vengano sistemati.
- Categoria: pubblicazione in lingua mista; completezza della localizzazione; terminologia inglese non necessaria; gergo professionale non localizzato
- Il QA automatizzato lo rileverebbe probabilmente?: Sì, se sono attivi validatori di completezza del markdown sorgente e dell'HTML generato. No, se il workflow controlla solo l'esistenza dei file e non l'output rivolto al lettore.
- Lezioni apprese: La copertura senza completezza è un difetto di produzione. La pubblicazione in lingua mista dovrebbe essere trattata come un errore bloccante di qualità, non come un problema cosmetico.

### Rilievo 6 - Adesione Al Pubblico Educativo E Istituzionale

- Articolo sorgente: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Lingua: Sloveno
- Testo inglese originale: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Testo localizzato originale: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Testo localizzato migliorato: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Spiegazione: La frase localizzata originale ha senso ed è comprensibile, ma ancora una volta porta con sé abitudini retoriche inglesi e uno stile nominale leggermente pesante. La versione migliorata si legge in modo più naturale per un pubblico educativo, riduce l'astrazione non necessaria e si allinea meglio alla prosa esplicativa slovena.
- Categoria: disallineamento con lo stile educativo; disallineamento con le aspettative del pubblico; miglioramento del tono
- Il QA automatizzato lo rileverebbe probabilmente?: No.
- Lezioni apprese: L'educazione del lettore fa parte della qualità della localizzazione. Una frase può essere corretta e tuttavia non centrare la voce didattica naturale attesa dal suo pubblico.

### Rilievo 7 - Ottimizzazione Del Testo Sorgente Per La Localizzazione

- Articolo sorgente: `docs/blog/en/why-every-language-matters.md` e varianti localizzate della stessa famiglia di articoli
- Lingua: Fonte inglese con impatto interlocale sulla localizzazione; trigger della revisione osservato in sloveno
- Testo inglese originale: `The hidden exclusion of English-only systems`
- Testo localizzato originale: Sloveno: `Skrita izključitev angleško-izključnih sistemov`
- Testo localizzato migliorato: Inglese: `Why English-only systems exclude people` Sloveno: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Spiegazione: L'intestazione inglese originale è tecnicamente corretta, ma comprime troppo in uno schema nominale specifico dell'inglese. Si affida al sostantivo astratto `exclusion` e al modificatore compatto `English-only systems`. Questa combinazione è efficiente in inglese ma scomoda in molte lingue di destinazione. In sloveno ha prodotto una locuzione grammaticalmente possibile ma innaturale, `angleško-izključnih sistemov`, che richiede uno sforzo di decodifica aggiuntivo al lettore. Non si tratta principalmente di un fallimento della lingua di destinazione. È un problema di progettazione del testo sorgente. Riscrivere l'intestazione inglese come proposizione più esplicita migliora la leggibilità in inglese e facilita una traduzione naturale in tutta la famiglia di articoli.
- Categoria: ottimizzazione del testo sorgente per la localizzazione; prevenzione del traduttese; scrittura favorevole alla fonte
- Il QA automatizzato lo rileverebbe probabilmente?: No. QA strutturale, correttore ortografico, controlli di parità semantica e controlli di completezza probabilmente passerebbero tutti. Il problema emerge quando parlanti nativi valutano naturalezza e traducibilità tra lingue.
- Lezioni apprese: Alcuni problemi di localizzazione dovrebbero essere risolti a livello di fonte, non separatamente in ogni locale. Se più lingue faticano con la stessa costruzione inglese compressa, la formulazione sorgente dovrebbe essere riesaminata in ottica di facilità di localizzazione.

### Rilievo 8 - Falso Amico Della Terminologia Tecnica

- Articolo sorgente: `docs/wiki/let-books-localization-case-study.md` e `docs/wiki/sl/let-books-localization-case-study.md`
- Lingua: Rilievo di revisione sloveno attivato da terminologia tecnica inglese
- Testo inglese originale: `Benchmark fixture direction` e `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Testo localizzato originale: `Primerjalna smer napeljave` e `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Testo localizzato migliorato: `Referenčni primeri za primerjalno vrednotenje` e `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Spiegazione: Il problema non è grammaticale. È di interpretazione del dominio. Nei contesti di testing, benchmarking e valutazione, `fixture` di solito significa un esempio di riferimento riutilizzabile, un caso di test o un artefatto di valutazione. La traduzione slovena ha interpretato il termine con un significato relativo all'infrastruttura fisica, collegato a cablaggio o installazione. Questo ha prodotto un testo semanticamente fuorviante, anche se il traduttore può aver scelto un'accezione valida da dizionario. Questo è un classico falso amico della terminologia tecnica: ha vinto il dominio sbagliato.
- Categoria: falso amico della terminologia tecnica; terminologia di dominio; vocabolario di testing e valutazione
- Il QA automatizzato lo rileverebbe probabilmente?: No. Ortografia, grammatica e controlli semantici ampi possono tutti passare perché la frase resta superficialmente coerente. Il fallimento emerge quando una revisione umana consapevole del dominio verifica se il termine tecnico appartiene al giusto contesto professionale.
- Lezioni apprese: La terminologia tecnica dovrebbe essere tradotta in base al significato di dominio, non al significato di default da dizionario. Esempi riutilizzabili di benchmark, casi di test di benchmark o esempi di riferimento per la valutazione sono interpretazioni appropriate qui; i significati legati all'infrastruttura non lo sono.

### Regola Operativa Per Il Corpus

Ogni volta che si scopre una nuova categoria:

1. correggere il contenuto
2. aggiungere una voce al corpus
3. classificare il problema
4. aggiungere o affinare la guida
5. aggiungere copertura del validatore, se pratico
6. aggiungere copertura di regressione, se pratica
7. collegare il nuovo rilievo dalla documentazione di workflow e QA

I parlanti nativi qui sono più preziosi non perché correggono errori evidenti.

Sono più preziosi perché trasformano contenuti corretti in comunicazione naturale, culturalmente appropriata e di qualità editoriale.

## Parte 7 - Apprendimento Continuo

Ogni problema di localizzazione dovrebbe migliorare il sistema.

Il ciclo preferito è:

```text
Trova il problema
↓
Correggi il problema
↓
Documenta il problema
↓
Classifica il problema
↓
Migliora il workflow
↓
Aggiungi validazione dove pratico
↓
Previeni la ricorrenza
```

L'esito ideale è che un problema di localizzazione venga corretto:

- una volta nei contenuti
- una volta nel sistema

## Parte 8 - Evoluzione Dei Validatori

Per ogni problema significativo, chiedi:

> Si può rilevare automaticamente?

### Completamente Automatizzabile

Esempi:

- variante di articolo mancante
- riepilogo non tradotto
- metadati non tradotti
- pagina in lingua mista
- selettore di lingua rotto
- navigazione generata mancante

### Parzialmente Automatizzabile

Esempi:

- accorciamento sospetto
- probabile deriva semantica
- spiegazione per il pubblico mancante
- parità dei contenuti correlati mancante
- sospetto disallineamento del diagramma

### Revisione Umana

Esempi:

- naturalezza retorica
- fluidità
- appropriatezza culturale
- efficacia educativa
- registro della lingua nativa
- adeguatezza allo stile del settore pubblico

La domanda giusta non è se gli esseri umani o i validatori siano migliori.

La domanda giusta è quale classe di difetto appartenga a quale livello di feedback.

## Quando La Qualità Diventa Misurabile

All'inizio, la fiducia deriva soprattutto dall'ispezione manuale.

Gli sviluppatori leggono le pagine.

I revisori confrontano le traduzioni.

I collaboratori cercano i problemi uno per uno.

Con la maturazione del repository, la fiducia comincia a derivare da meccanismi di feedback accumulati:

- documentazione
- linee guida di revisione
- validatori
- controlli CI
- controlli di accessibilità
- controlli di parità semantica
- controlli di completezza della localizzazione
- rilievi di revisione di parlanti nativi
- test di regressione

A quel punto la domanda principale cambia.

Invece di chiedere:

> Abbiamo controllato manualmente tutto?

il progetto comincia a chiedere:

> Quali sistemi di feedback permetterebbero a un problema di sopravvivere inosservato?

Questa è la transizione dalla verifica dei contenuti alla verifica del sistema.

Un sistema di localizzazione maturo non è un sistema che non contiene mai difetti.

Un sistema di localizzazione maturo è un sistema in cui le classi di difetto note sono:

- documentate
- rilevabili
- riproducibili
- tracciate
- monitorate in continuo
- difficili da reintrodurre accidentalmente

## Parte 9 - Debito Di Localizzazione

Tieni traccia di `Localization Debt` come backlog residuo dei contenuti.

Il debito tipico include:

- riepiloghi non tradotti
- metadati non tradotti
- corpi non tradotti
- placeholder
- diagrammi non tradotti
- tag non tradotti
- link delle varianti linguistiche obsoleti

Il debito misura il lavoro di bonifica rimanente.

Il debito non dice se il sistema sta imparando.

## Parte 10 - Classi Di Difetto Aperte

Tieni traccia di `Open Defect Classes` come numero di categorie di problemi non ancora completamente prevenute da policy, workflow, validatori e CI.

Esempi:

- riepiloghi non tradotti
- corpi non tradotti
- pubblicazione di placeholder
- metadati non tradotti
- pubblicazione in lingua mista
- future classi scoperte

Il debito misura il lavoro che resta da fare.

Le classi di difetto misurano la maturità del sistema.

## Parte 11 - Correggere Le Classi Prima Dei File

Non ottimizzare principalmente in base a:

```text
47 file rimanenti
```

Ottimizza in base a:

```text
3 classi di difetto rimanenti
```

Processo preferito:

1. identificare la classe
2. determinare la causa radice
3. correggere la fonte di livello più alto
4. aggiornare il validatore
5. aggiornare il workflow
6. poi correggere i contenuti rimanenti

Lo stesso errore ripetuto in molti file di solito è un problema di sistema prima di essere un problema di file.

## Parte 12 - Chiusura Delle Classi Di Difetto

Quando una classe di difetto raggiunge zero occorrenze:

1. aggiungere copertura del validatore, se mancante
2. rendere la validazione bloccante, quando pratico
3. aggiungere controlli di regressione
4. aggiornare la guida per i collaboratori
5. aggiornare la guida per gli agenti IA
6. segnare la classe come chiusa

L'obiettivo non è:

> Nessuna occorrenza oggi.

L'obiettivo è:

> Il problema non può ritornare silenziosamente domani.

## Parte 13 - Bonifica A Partire Dalla Fonte

Ordine di indagine predefinito:

1. markdown sorgente
2. file sorgente della localizzazione
3. metadati
4. registry
5. generatori
6. artefatti generati
7. HTML generato

Correggi la fonte di livello più alto possibile.

Evita di rattoppare HTML generato quando il contenuto sorgente è errato.

Questo previene lavori di riparazione ripetuti a valle e mantiene il repository comprensibile.

## Parte 14 - Workflow Per Agenti IA

Il workflow standard di troubleshooting è:

```text
Trova il problema
↓
Trova la fonte di verità
↓
Correggi la fonte
↓
Rigenera
↓
Valida
↓
Ripeti
```

Quando lo stesso problema compare ripetutamente:

```text
Crea classe di difetto
↓
Crea validatore
↓
Crea guida
↓
Continua la bonifica
```

La quarta occorrenza dello stesso problema dovrebbe di solito attivare un miglioramento del sistema invece di un'altra correzione manuale isolata.

## Parte 15 - Deriva Di Localizzazione

La deriva di localizzazione significa che il contenuto localizzato esiste ma non riflette più la fonte.

I casi tipici di deriva includono:

- nuove sezioni sorgente
- nuovi esempi
- nuove avvertenze
- conclusioni modificate
- diagrammi modificati
- screenshot aggiornati
- guida per i collaboratori modificata

L'aggiornamento è il modo in cui la deriva diventa misurabile.

La gestione della deriva dovrebbe usare:

- consapevolezza delle revisioni della fonte
- confronto semantico, dove pratico
- CI basata su avvisi come primo passo
- CI bloccante dove la fiducia è alta
- attenzione esplicita del revisore durante gli aggiornamenti maggiori

## Parte 16 - Modello Di Maturità Del Repository

Il repository dovrebbe attraversare queste fasi:

1. Tradurre i contenuti.
2. Individuare i problemi.
3. Creare validatori.
4. Automatizzare la validazione.
5. Prevenire le ricorrenze.
6. Gestire la deriva di localizzazione.
7. Istruire futuri collaboratori e sistemi IA.

È così che si accumula la conoscenza istituzionale.

Il lavoro precedente smette di essere usa e getta perché i sistemi successivi lo ereditano.

## Parte 17 - Roadmap Dei Contenuti

Il programma dovrebbe mantenere una copertura multilingue coerente su:

- articoli del blog che spiegano perché la localizzazione conta
- pagine wiki che definiscono policy e regole di riferimento
- guide pratiche che insegnano i workflow
- guide di stile che insegnano scrittura, terminologia e pratica di revisione
- documenti di audit e governance che monitorano maturità e difetti
- casi di studio che preservano evidenze pratiche

La roadmap dovrebbe dare priorità a:

1. completezza canonica dell'inglese
2. copertura linguistica completa in tutte le lingue supportate
3. completezza rivolta al lettore in ogni lingua
4. copertura dei validatori ad alto valore
5. crescita del corpus dei parlanti nativi
6. monitoraggio della deriva per i contenuti di punta

Tutti i documenti principali dovrebbero collegarsi aggressivamente tra loro in modo che i lettori possano passare dal principio al workflow, alla policy e all'evidenza.

## Parte 18 - Criteri Di Successo

Un lettore che passa da una lingua supportata all'altra dovrebbe incontrare:

- gli stessi concetti di base
- gli stessi esempi
- le stesse avvertenze
- lo stesso valore educativo
- la stessa guida pratica

Allo stesso tempo, ogni lingua dovrebbe sembrare scritta in modo naturale per il proprio pubblico.

L'obiettivo più alto della Localizzazione su larga scala è:

**copertura linguistica completa, completezza della localizzazione, parità semantica, leggibilità in lingua nativa, appropriatezza culturale, efficacia educativa, miglioramento continuo, prevenzione dei difetti, gestione della deriva e pubblicazione multilingue sostenibile tramite forti cicli di feedback.**

## Metriche Operative

Tieni traccia continua di questi numeri:

```text
Localization Debt = X
Open Defect Classes = Y
```

L'obiettivo di lungo periodo è:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Documenti Correlati

- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `wiki/localization-governance.md`
- `wiki/localization-maturity-model.md`
- `wiki/let-books-localization-case-study.md`
- `style-guide/localization/README.md`
- `style-guide/localization/ai-translation-review-records.md`
- `learning/how-to-build-a-localization-pipeline.md`
- `learning/how-to-review-ai-assisted-translations.md`
- `learning/how-to-run-localization-qa-in-ci.md`
- `localization-audit-report.md`
