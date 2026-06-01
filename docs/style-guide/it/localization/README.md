# Localizzazione

## Riepilogo

`docs/style-guide/localization/` definisce come i contenuti di conoscenza multilingue devono essere tradotti e collegati.

## Scopo

Mantenere le traduzioni tracciabili, corrette sul piano ortografico, allineate strutturalmente con le fonti canoniche inglesi e revisionabili come sistema di localizzazione a lungo termine, non come attività di traduzione una tantum.

## Struttura

- policy per le locale
- policy per gli ID degli articoli
- regole di collegamento tra lingue
- regole di allineamento terminologico
- regole per i record di revisione AI
- benchmark fixture per la traduzione con LLM

## Principi fondamentali

- L'inglese è la lingua canonica di authoring della piattaforma della conoscenza, salvo diversa policy dichiarata esplicitamente da un documento.
- Le traduzioni sono deliverable di prima classe, ma ereditano l'autorità canonica della fonte dall'originale inglese.
- La localizzazione è più ampia della traduzione. Include testo per l'accessibilità, diagrammi, screenshot, didascalie, navigazione, metadati e governance.
- Il serbo latino e il serbo cirillico sono locale separate.
- Macedone, albanese e sloveno devono preservare corretta ortografia nativa e caratteri Unicode.
- La traduzione generata da AI è consentita solo come fase di bozza. Non sostituisce la revisione.

## Requisiti per articoli multilingue

Ogni articolo del blog pubblicato in questo repository deve seguire queste regole:

### 1. Prima l'inglese canonico

Tutti gli articoli del blog devono essere scritti prima in inglese. Le traduzioni derivano dalla versione canonica inglese. L'articolo inglese è la fonte autorevole per i riferimenti a prove e specifiche.

Per il frontmatter del blog, `canonical_language` deve restare `en` anche nel file tradotto. Il campo descrive l'autorità della fonte, non la locale del file tradotto.

### 2. Frontmatter richiesto

Ogni articolo (canonico e traduzione) deve includere nel frontmatter YAML un campo `language_variants` che elenchi tutte le 12 varianti linguistiche con percorsi relativi:

```yaml
language_variants:
  - ../en/<article-id>.md
  - ../sl/<article-id>.md
  - ../hr/<article-id>.md
  - ../bs/<article-id>.md
  - ../sr-Latn/<article-id>.md
  - ../sr-Cyrl/<article-id>.md
  - ../mk/<article-id>.md
  - ../sq/<article-id>.md
  - ../de/<article-id>.md
  - ../it/<article-id>.md
  - ../fr/<article-id>.md
  - ../es/<article-id>.md
```

Locale supportate: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Footer Other Languages

Ogni articolo tradotto deve includere alla fine una sezione footer "Other Languages" che elenca tutte le altre traduzioni disponibili con il nome nativo della lingua.

Anche gli articoli canonici inglesi devono includere questa sezione per parità.

### 4. Stub source-map localizzate

Ogni articolo principale inglese deve avere una source map corrispondente sotto `docs/sources/en/`. Ogni locale non inglese deve avere uno stub sotto `docs/sources/<locale>/` che rimanda alla source map canonica inglese.

Gli stub source-map non sono traduzioni complete. Sono file brevi con un puntatore all'originale inglese e un contesto appropriato alla lingua.

### 5. Pacchetti derivati LinkedIn

Ogni articolo principale inglese deve avere un pacchetto derivato LinkedIn sotto `docs/blog/en/linkedin/<article-id>.md` contenente:

- un post per pubblico ampio
- un post per istituzioni/biblioteche
- un post per studenti/apprendenti
- uno schema di thread

Questi sono solo derivati per social media. Non richiedono traduzione.

### 6. Versioni HTML degli articoli

Ogni articolo del blog deve avere una versione HTML accanto alla sorgente Markdown. La versione HTML segue la stessa struttura del sito documentale HTML esistente (`docs/<locale>/index.html`) ed è collegata dall'indice documentale della locale appropriata.

Le versioni HTML sono generate dalla sorgente Markdown tramite la pipeline standard di conversione (basata su pandoc) e devono mantenere parità con il contenuto Markdown.

### 7. Requisiti di pubblicazione HTML

- `docs/<locale>/index.html` di ogni locale deve elencare gli articoli del blog disponibili in quella locale con link diretti alle pagine HTML degli articoli.
- La pagina HTML dell'articolo usa lo stesso pattern di header, footer, stylesheet e cambio lingua delle pagine documentali esistenti.
- `<head>` deve includere alternates `hreflang` corretti per tutte le 12 locale.
- L'attributo `data-page-type` su `<body>` deve essere impostato su `"article"`.

## Policy per le source map

- Le source map si trovano in `docs/sources/<locale>/`.
- Le source map inglesi sono mappe complete delle prove che collegano le affermazioni alla documentazione del repository.
- Gli stub source-map non inglesi sono file brevi che fanno riferimento all'originale inglese.
- Le source map vengono create solo per articoli principali, non per ogni post minore.

## Modello di maturità della traduzione

Usa questi livelli quando discuti o tracci la qualità della traduzione.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Traccia la maturità per locale e per categoria di contenuto dove pratico.

## Aspettative per la localizzazione su larga scala

- Localizzare contenuti di conoscenza rivolti al pubblico, non solo stringhe UI.
- Localizzare metadati di accessibilità come alt text, didascalie, etichette ARIA e metadati linguistici.
- Preferire diagrammi generati da fonti strutturate così che le varianti tradotte possano essere riprodotte.
- Documentare decisioni terminologiche, aspettative dei revisori e percorsi di risoluzione delle dispute.
- Tenere validazione e CI vicini ai workflow di pubblicazione così che le regressioni di localizzazione siano trattate come problemi di qualità del prodotto.
- Preservare esempi rappresentativi di revisione AI così che correzioni sottili dei madrelingua possano informare training, governance e valutazione.

## Registro aggiornamenti documentali attuabili

L'esempio sloveno di revisione AI dovrebbe aggiornare per primi questi documenti:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Riepilogo del change record per PR o governance review:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Policy per i pacchetti LinkedIn

- I pacchetti LinkedIn si trovano in `docs/blog/en/linkedin/`.
- Solo gli articoli principali in inglese richiedono pacchetti LinkedIn.
- I pacchetti LinkedIn sono in Markdown, non HTML.
- `docs/blog/README.md` deve elencare la cartella dei pacchetti LinkedIn.

## Argomenti correlati

- Terminologia
- Pubblicazione
- Sistemi multilingue
- Programma di contenuti guidato dalle specifiche

## Articoli correlati

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Guide di apprendimento correlate

- `../../learning/README.md`

## Pagine wiki correlate

- `../../wiki/README.md`

## Ulteriori letture

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
