---
title: "Si të rishikohen përkthimet e ndihmuara nga AI"
summary: >-
  Ky udhëzues shpjegon si të rishikohen përkthimet e gjeneruara nga AI në lidhje me kuptimin, terminologjinë, aksesueshmërinë, tonin dhe nevojën për rishikim njerëzor.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Si të rishikohen përkthimet e ndihmuara nga AI

## Përmbledhje

Ky udhëzues shpjegon si të rishikohen përkthimet e gjeneruara nga AI në lidhje me kuptimin, terminologjinë, aksesueshmërinë, tonin dhe nevojën për rishikim njerëzor.

## Lista e kontrollit të rishikimit

- kontrollo më parë kuptimin, pastaj stilin
- verifiko terminologjinë kundrejt glosarit të projektit
- shqyrto me kujdes të veçantë formulimet e ndjeshme
- konfirmo që edhe teksti i aksesueshmërisë është lokalizuar
- shëno sinqerisht nivelin e pjekurisë së rishikimit

## Rast studimor slloven

### Drafti fillestar i AI-së

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Versioni i korrigjuar slloven

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Komentet e rishikimit njerëzor

### Çështja 1

- origjinali: `morajo moči`
- korrigjuar: `morajo imeti možnost, da`
- kategori: gramatikë, modalitet
- shkaku i mundshëm i gabimit të AI-së: përkthim fjalë për fjalë i një ndërtimi modal në anglisht
- arsyetimi i rishikuesit: formulimi origjinal është jogramatikor në sllovenisht; versioni i korrigjuar përdor ndërtimin natyror për gjuhën e politikave.

### Çështja 2

- origjinali: `po potrebi tudi izklopiti`
- korrigjuar: `da po potrebi izklopijo`
- kategori: rrjedhshmëri, rend fjalësh
- shkaku i mundshëm i gabimit të AI-së: rend i panatyrshëm nga gjuha burimore dhe kontroll i dobët i diskursit
- arsyetimi i rishikuesit: rendi i korrigjuar është më i qartë dhe heq një theksim të panevojshëm.

### Çështja 3

- origjinali: `morajo biti izrecne`
- korrigjuar: `morajo biti izrecno omogočene`
- kategori: terminologji, regjistër, formulim politikash të domenit
- shkaku i mundshëm i gabimit të AI-së: zgjedhje fjalori pa mjaftueshëm kontekst të produktit ose politikës
- arsyetimi i rishikuesit: kërkesa ka të bëjë me aktivizimin e qartë të pasurimeve me pagesë, jo me përshkrimin e tyre si "të qarta".

## Kategori të zakonshme të problemeve

- gramatikë
- modalitet
- terminologji
- regjistër
- rrjedhshmëri
- përkthim fjalë për fjalë
- paqartësi
- humbje konteksti
- rend fjalësh
- kolokacione
- shkrim ose ortografi
- formulim politikash të domenit
- formulim për aksesueshmëri

## Udhëzim për pikëzim

Për rishikime të përsëritshme përdor një shkallë të thjeshtë 0-3.

- `0`: i papranueshëm
- `1`: probleme të mëdha
- `2`: i përdorshëm me redaktime rishikuese
- `3`: i fortë ose pothuajse gati për publikim

Dimensionet e rekomanduara të vlerësimit:

- saktësia e kuptimit
- gramatika dhe rrjedhshmëria
- terminologjia dhe përshtatja me domenin
- regjistri dhe stili
- përpjekja e nevojshme e rishikimit

## Udhëzim për rekomandimin e publikimit

- `blocker`: jo i përshtatshëm për publikim ose ekspozim ndaj përdoruesve
- `major_revision`: kuptimi mund të jetë afërsisht i saktë, por duhet ende rishkrim i konsiderueshëm
- `minor_revision`: draft i përdorshëm me korrigjime të synuara nga folës vendas
- `ready_with_review_signoff`: i përshtatshëm pasi të përfundojë miratimi normal i rishikuesit

## Dokumento jo vetëm korrigjimin, por edhe arsyen

Për punë rishikimi të ripërdorshme regjistro:

- tekstin origjinal
- tekstin e korrigjuar
- kategorinë e gabimit
- hipotezën për shkakun rrënjësor
- arsyetimin e rishikuesit

## Mësime të ripërdorshme nga rishikimi slloven

- kuptimi gramatikor mund të jetë afër, ndërsa fjalia ende mbetet e papublikueshme për një folës vendas
- ndërtimet modale janë veçanërisht të ndjeshme ndaj përkthimit fjalë për fjalë
- terminologjia dhe formulimi i politikave shpesh kërkojnë rishkrim të vetëdijshëm për domenin
- QA e automatizuar ndihmon, por rrallë mjafton për çështje të holla regjistri

## Shënim Localization-at-Scale

Edhe kur kuptimi i përgjithshëm ruhet, përkthimet e gjeneruara nga AI mund të kërkojnë rishikim nga folës vendas për të korrigjuar probleme të holla në gramatikë, modalitet, terminologji dhe regjistër specifik të domenit. Këto probleme shpesh janë të vështira për t'u dalluar vetëm me metrika të automatizuara të cilësisë.

## Ku të ripërdoren shembuj të tillë

- materiale trajnimi për rishikues lokalizimi
- grupe të dhënash për vlerësimin e përkthimit me AI
- shembuj në udhëzuesin e stilit
- dokumentacion për rrjedha pune human-in-the-loop
- artikuj dhe udhëzues praktikash të mira për localization at scale

Shembuj të tillë i ndihmojnë rishikuesit të kalibrojnë pritshmëritë dhe u japin drejtuesve të lokalizimit material referues realist.

## Faqe të lidhura

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
