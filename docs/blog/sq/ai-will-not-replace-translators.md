---
article_id: ai-will-not-replace-translators
canonical_language: en
language_variants:
  - ../en/ai-will-not-replace-translators.md
  - ../sl/ai-will-not-replace-translators.md
  - ../hr/ai-will-not-replace-translators.md
  - ../bs/ai-will-not-replace-translators.md
  - ../sr-Latn/ai-will-not-replace-translators.md
  - ../sr-Cyrl/ai-will-not-replace-translators.md
  - ../mk/ai-will-not-replace-translators.md
  - ../sq/ai-will-not-replace-translators.md
  - ../de/ai-will-not-replace-translators.md
  - ../it/ai-will-not-replace-translators.md
  - ../fr/ai-will-not-replace-translators.md
  - ../es/ai-will-not-replace-translators.md
title: AI nuk do t'i zëvendësojë përkthyesit
summary: Pse AI ndryshon rrjedhat e punës së përkthimit, por nuk e heq nevojën për gjykim gjuhësor njerëzor, kontekst kulturor dhe rishikim.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/sq/ai-will-not-replace-translators.md
status: draft
---

# AI nuk do t'i zëvendësojë përkthyesit

AI tashmë e ka ndryshuar punën e përkthimit. Ajo mund të prodhojë shpejt drafte të përdorshme, të zgjerojë mbulimin dhe të ulë koston e fazës së parë të lokalizimit. Ky është përparim i vërtetë.

Kjo nuk është e njëjta gjë me zëvendësimin e përkthyesve.

## Çfarë bëjnë ende përkthyesit njerëzorë

Rishikuesit njerëzorë vendosin nëse një përkthim është:

- mjaftueshëm i saktë për kontekstin
- i natyrshëm në gjuhën e synuar
- i përshtatshëm për formulime të ndjeshme
- në përputhje me terminologjinë e projektit
- i qasshëm për audiencën e synuar

Këto nuk janë prekje përfundimtare opsionale. Ato janë pjesë e cilësisë.

## Ku ndihmon më shumë AI

AI është më e fortë kur përdoret për të:

- krijuar drafte
- sugjeruar alternativa
- përshpejtuar zgjerimin e glosarëve
- zvogëluar sasinë e materialit të papërkthyer
- nxjerrë në pah mospërputhje të mundshme

## Pse vetëbesimi i tepruar është i rrezikshëm

Rreziku më i madh i përkthimit me AI nuk është vetëm gabimi. Është vetëbesimi pa rishikim. Teksti i gjeneruar nga makina mund të duket i rrjedhshëm, ndërkohë që prapë të jetë i gabuar, kulturalisht jashtë vendit ose terminologjikisht i paqëndrueshëm.

## Një shembull konkret shqyrtimi në sllovenisht

Një model i dobishëm është përkthimi që ruan kuptimin e përgjithshëm, por prapë dështon në rishikimin e një folësi amtar.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Çfarë ndryshoi:

- modaliteti jo gramatikor u korrigjua në sllovenishte natyrale
- renditja e sikletshme e fjalëve u normalizua
- formulimi i politikës u rishkrua nga një mbiemër literal në një shprehje më të përshtatshme për domenin

Ky është pikërisht lloji i shembullit që shpjegon pse rishikimi njerëzor ka ende rëndësi. Kuptimi ishte afër, por gramatika, modaliteti, terminologjia dhe regjistri kërkonin ende korrigjim nga një folës amtar.

Edhe kur kuptimi i përgjithshëm ruhet, përkthimet e gjeneruara nga AI mund të kërkojnë rishikim nga folës amtarë për të korrigjuar çështje delikate në gramatikë, modalitet, terminologji dhe regjistër specifik për domenin. Këto çështje shpesh janë të vështira për t'u zbuluar vetëm me metrika të automatizuara të cilësisë.

## Një shembull për çdo kategori rishikimi

Kategori të ndryshme të gjetjeve të rishikimit kërkojnë lloje të ndryshme gjykimi njerëzor.

### Modaliteti dhe gjuha e politikave

Drafti fillestar i AI-së:

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Korrigjimi i folësit amtar:

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Mësimi:

- ruajtja e kuptimit nuk mjafton kur gramatika, modaliteti dhe formulimi i politikës ende tingëllojnë gabim për folësit amtarë

### Optimizimi i tekstit burimor për lokalizim

Titulli origjinal në anglisht:

`The hidden exclusion of English-only systems`

Titulli i përmirësuar në anglisht:

`Why English-only systems exclude people`

Mësimi:

- disa probleme lokalizimi duhen zgjidhur duke përmirësuar tekstin burimor në vend që çdo gjuhë e synuar të detyrohet të kompensojë një formulim anglisht tepër të ngjeshur

### Mik i rremë në terminologjinë teknike

Shprehja origjinale në anglisht:

`benchmark fixtures`

Lokalizimi i pasaktë në sllovenisht:

`primerjalne napeljave`

Lokalizimi i përmirësuar në sllovenisht:

`referenčni primeri za primerjalno vrednotenje`

Mësimi:

- termat teknikë duhet të përkthehen sipas kuptimit të domenit; në kontekste testimi dhe vlerësimi, `fixture` do të thotë një shembull referues i ripërdorshëm ose një rast testimi, jo infrastrukturë fizike

## Përfundimi i qëndrueshëm

E ardhmja nuk është përkthyesi kundër AI-së. E ardhmja praktike është lokalizimi i asistuar nga AI me faza të qarta rishikimi dhe pritshmëri transparente për cilësinë.

## Faqe të lidhura

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Gjuhë të tjera

Anglishtja është gjuha kanonike e botimit të parë të këtij artikulli. Rrugët e gatshme për përkthim janë rezervuar për të gjitha lokalizimet e mbështetura të Let Books.
