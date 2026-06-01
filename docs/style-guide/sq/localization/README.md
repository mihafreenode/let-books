# Lokalizim

## Përmbledhje

`docs/style-guide/localization/` përcakton se si përmbajtja shumëgjuhëshe e dijes duhet të përkthehet dhe të lidhet.

## Qëllimi

Të mbajë përkthimet të gjurmueshme, të sakta në drejtshkrim, të përputhura në strukturë me burimet kanonike në anglisht dhe të rishikueshme si një sistem afatgjatë lokalizimi, jo si një detyrë e njëhershme përkthimi.

## Struktura

- politika për locale
- politika për ID të artikujve
- rregulla për lidhje ndërgjuhësore
- rregulla për përputhje terminologjike
- rregulla për regjistrat e rishikimit AI
- benchmark fixtures për përkthim me LLM

## Parime themelore

- Anglishtja është gjuha kanonike e autorimit për platformën e dijes, përveç rasteve kur një dokument deklaron shprehimisht një politikë tjetër.
- Përkthimet janë dorëzime të klasit të parë, por trashëgojnë autoritetin kanonik të burimit nga origjinali anglisht.
- Lokalizimi është më i gjerë se përkthimi. Ai përfshin tekstin e aksesueshmërisë, diagramet, pamjet e ekranit, titrat, navigimin, metadatat dhe qeverisjen.
- Serbishtja latine dhe serbishtja cirilike janë locale të ndara.
- Maqedonishtja, shqipja dhe sllovenishtja duhet të ruajnë ortografinë e saktë vendase dhe karakteret Unicode.
- Përkthimi i gjeneruar nga AI lejohet vetëm si fazë drafti. Nuk e zëvendëson rishikimin.

## Kërkesa për artikuj shumëgjuhësh

Çdo artikull blogu i publikuar në këtë depo duhet të ndjekë këto rregulla:

### 1. Së pari anglishtja kanonike

Të gjithë artikujt e blogut duhet të shkruhen fillimisht në anglisht. Përkthimet rrjedhin nga versioni kanonik anglisht. Artikulli anglisht është burimi autoritativ për referencat e provave dhe specifikimeve.

Për blog frontmatter, `canonical_language` duhet të mbetet `en` edhe në skedarin e përkthyer. Fusha përshkruan autoritetin e burimit, jo locale-in e skedarit të përkthyer.

### 2. Frontmatter i kërkuar

Çdo artikull (kanonik dhe përkthim) duhet të përfshijë në YAML frontmatter një fushë `language_variants` që liston të 12 variantet gjuhësore me shtigje relative:

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

Locale të mbështetura: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Footer Other Languages

Çdo artikull i përkthyer duhet të përfshijë në fund një seksion footer "Other Languages" që liston të gjitha përkthimet e tjera të disponueshme me emrin vendas të gjuhës.

Edhe artikujt kanonikë në anglisht duhet ta përfshijnë këtë seksion për barazi.

### 4. Source-map stubs të lokalizuara

Çdo artikull kryesor anglisht duhet të ketë një source map përkatës nën `docs/sources/en/`. Çdo locale jo-anglisht duhet të ketë një source-map stub nën `docs/sources/<locale>/` që lidhet mbrapsht te source map-i kanonik anglisht.

Source-map stub-et nuk janë përkthime të plota. Ato janë skedarë të shkurtër me një tregues drejt origjinalit anglisht dhe kontekst të përshtatshëm për gjuhën.

### 5. Paketa derivative për LinkedIn

Çdo artikull kryesor anglisht duhet të ketë një paketë derivative për LinkedIn nën `docs/blog/en/linkedin/<article-id>.md` që përmban:

- një postim për audiencë të gjerë
- një postim institucional/bibliotekar
- një postim për studentë/nxënës
- një përmbledhje thread-i

Këto janë vetëm derivate për rrjete sociale. Nuk kërkojnë përkthim.

### 6. Versione HTML të artikujve

Çdo artikull blogu duhet të ketë një version HTML përkrah burimit Markdown. Versioni HTML ndjek të njëjtën strukturë si faqja ekzistuese HTML e dokumentacionit (`docs/<locale>/index.html`) dhe lidhet nga indeksi përkatës i dokumentacionit për atë locale.

Versionet HTML gjenerohen nga burimi Markdown duke përdorur pipeline-in standard të konvertimit (bazuar në pandoc) dhe duhet të ruajnë përputhjen me përmbajtjen Markdown.

### 7. Kërkesat për publikimin HTML

- `docs/<locale>/index.html` i çdo locale duhet të listojë artikujt e blogut të disponueshëm në atë locale me lidhje të drejtpërdrejta te faqet HTML të artikujve.
- Faqja HTML e artikullit përdor të njëjtin model header, footer, stylesheet dhe ndërrimi gjuhe si faqet ekzistuese të dokumentacionit.
- `<head>` duhet të përfshijë lidhje alternative `hreflang` për të 12 locale-t.
- Atributi `data-page-type` në `<body>` duhet të vendoset në `"article"`.

## Politika e source map

- Source map-et jetojnë në `docs/sources/<locale>/`.
- Source map-et në anglisht janë harta të plota provash që lidhin pohimet me dokumentacionin e depos.
- Source-map stub-et jo-anglisht janë skedarë të shkurtër që referojnë origjinalin anglisht.
- Source map-et krijohen vetëm për artikujt kryesorë, jo për çdo postim të vogël.

## Modeli i pjekurisë së përkthimit

Përdorni këto nivele kur diskutoni ose ndiqni cilësinë e përkthimit.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Ndiqni pjekurinë sipas locale-it dhe sipas kategorisë së përmbajtjes kur është praktike.

## Pritshmëri për lokalizim në shkallë të gjerë

- Lokalizoni përmbajtjen publike të dijes, jo vetëm UI strings.
- Lokalizoni metadata të aksesueshmërisë si alt text, titrat, etiketat ARIA dhe metadata gjuhësore.
- Jepni përparësi diagrameve të gjeneruara nga burime të strukturuara që variantet e përkthyera të mund të riprodhohen.
- Dokumentoni vendimet terminologjike, pritshmëritë e rishikuesve dhe rrugët e zgjidhjes së mosmarrëveshjeve.
- Mbajeni validimin dhe CI pranë rrjedhave të publikimit që regresionet e lokalizimit të trajtohen si çështje cilësie produkti.
- Ruani shembuj përfaqësues të rishikimit AI që korrigjimet e holla nga folës vendas të informojnë trajnimin, qeverisjen dhe vlerësimin.

## Regjistër për përditësime të zbatueshme të dokumentacionit

Shembulli slloven i rishikimit AI duhet të përditësojë së pari këto dokumente:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Përmbledhje change-record për PR ose rishikim governance:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Politika për paketat LinkedIn

- Paketat LinkedIn jetojnë në `docs/blog/en/linkedin/`.
- Vetëm artikujt kryesorë në anglisht kërkojnë paketa LinkedIn.
- Paketat LinkedIn janë Markdown, jo HTML.
- `docs/blog/README.md` duhet të listojë dosjen e paketave LinkedIn.

## Tema të lidhura

- Terminologjia
- Publikimi
- Sisteme shumëgjuhëshe
- Program përmbajtjeje i drejtuar nga specifikimet

## Artikuj të lidhur

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Udhëzues të lidhur të të nxënit

- `../../learning/README.md`

## Faqe wiki të lidhura

- `../../wiki/README.md`

## Lexim i mëtejshëm

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
