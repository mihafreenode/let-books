---
title: "Sigurimi i cilësisë së përkthimit"
summary: >-
  QA e përkthimit kombinon validimin e automatizuar, kontrollin drejtshkrimor, rishikimin terminologjik, kontrollet e aksesueshmërisë dhe gjykimin njerëzor.
topics:
  - translation-quality
  - qa
  - localization
---
# Sigurimi i cilësisë së përkthimit

## Përmbledhje

QA e përkthimit kombinon validimin e automatizuar, kontrollin drejtshkrimor, rishikimin terminologjik, kontrollet e aksesueshmërisë dhe gjykimin njerëzor.

## Kontrolle të zakonshme

- përkthime që mungojnë
- rrjedhje e anglishtes
- plotësia e lokalizimit të dukshëm për lexuesin
- paritet strukturor kundrejt daljes së gjeneruar rishtazi
- lexueshmëri në gjuhën amtare dhe shprehje natyrore
- mospërputhje të placeholder-ëve
- lidhje të prishura
- devijim nga glosari
- mbulim i tekstit të aksesueshmërisë
- paritet i pamjeve të ekranit dhe diagrameve

## Kërkesa për dalje të gjeneruar rishtazi

Përpara rishikimit të paritetit strukturor, rishikimit semantik ose krahasimit manual të artikujve:

1. rigjeneroni sajtin nga gjendja aktuale e depozitës
2. ekzekutoni validuesit mbi daljen aktuale të gjeneruar
3. inspektoni artefaktet HTML të gjeneruara
4. vetëm atëherë kryeni vlerësimin manual të paritetit

Ky rregull ekziston sepse Markdown-i burimor dhe dalja e gjeneruar mund të devijojnë përkohësisht gjatë zhvillimit, dhe gjetjet e QA-së duhet të bazohen në artefaktet aktuale, jo në skedarë të gjeneruar të vjetruar.

## Rishikimi i paritetit strukturor

Rishikimi i paritetit strukturor duhet të kërkojë humbje vlere për lexuesin edhe kur artikulli i lokalizuar ende e ruan në përgjithësi kuptimin.

Sinjalet tipike përfshijnë:

- mungesë seksionesh kryesore
- hierarki të shembur të titujve
- shembuj që mungojnë
- udhëzim praktik të ngjeshur
- diskutim të reduktuar mbi qeverisjen
- udhëzim të shkurtuar për rishikim ose validim

Paralajmërimet nga validuesit e paritetit strukturor janë nxitje për rishikim, jo provë automatike e një përkthimi të dobët. Ato duhet të interpretohen së bashku me HTML-në e gjeneruar dhe, kur nevojitet, me daljen e renderuar në shfletues.

## Rishikimi i shprehjes në gjuhën amtare

QA e përkthimit duhet të kërkojë edhe tekst që është teknikisht i saktë, por jo ai që një folës amtar do të zgjidhte natyrshëm.

Kjo përfshin:

- strukturë fjalie të drejtpërdrejtë angleze
- përkthim të drejtpërdrejtë të idiomave angleze
- formulime që tingëllojnë të përkthyera në vend që të tingëllojnë si të shkruara nga autori
- terminologji që ende zbulon gjuhën burimore

Shembuj të këtij modeli përfshijnë shprehje ekuivalente me:

- përmbajtje kandidate
- strategji validimi
- dokument i fluksit të punës
- mjete të përzgjedhura me kujdes
- aftësi të përzgjedhura me kujdes

Këto nuk janë gjithmonë gabime përkthimi. Shpesh janë raste ku një folës amtar do ta rishkruante instinktivisht fjalinë.

## Testi i preferencës së folësit amtar

Për seksione të rëndësishme në prozë, rishikuesit duhet të pyesin:

> Nëse një folës amtar kompetent do ta shkruante këtë ide nga e para, a ka gjasa ta shkruante kështu?

Nëse jo, rishikuesit duhet të:

- ruajnë kuptimin
- ruajnë paritetin semantik
- ruajnë paritetin strukturor
- përmirësojnë formulimin

Ky test është veçanërisht i dobishëm për:

- hyrje
- përmbledhje
- shpjegime edukative
- udhëzim praktik
- diskutime qeverisëse
- përfundime

## Rishikimi i shprehjes natyrore

Trajtoni formulimin teknikisht të saktë por jo natyror si çështje cilësie.

Rishikuesit duhet të preferojnë formulime që tingëllojnë si të shkruara natyrshëm në gjuhën synim, edhe kur përkthimi fillestar është i kuptueshëm.

Qëllimi nuk është vetëm një përkthim i saktë. Qëllimi është një dokument që ndihet sikur është shkruar fillimisht për lexues amtarë.

Përmirësimet në gjuhën natyrore nuk duhet të dobësojnë:

- paritetin semantik
- paritetin strukturor
- mbulimin edukativ
- shembujt
- udhëzimin praktik
- udhëzimin për qeverisje

## Vlerësuesi i lokalizimit me pamje nga lexuesi

Një klasë validuesish duhet ta dështojë në mënyrë të qartë CI-në kur një faqe duket e lokalizuar, por ende shfaq përmbajtje të dukshme për lexuesin në gjuhën burimore.

Shembuj që duhet të dështojnë:

- titull i lokalizuar me përmbledhje në anglisht
- artikull i lokalizuar me etiketa në anglisht
- artikull i lokalizuar me tituj ose lista në anglisht
- artikull i lokalizuar me callout-e ose captions në anglisht
- artikull i lokalizuar me etiketa diagrami në anglisht ose tekst alternativ
- karta `related-content` në gjuhë të përziera

Ky është kusht dështimi, jo vetëm paralajmërim, sepse lexuesit i përjetojnë këto faqe si dukshëm të papërfunduara.

## Auditimi i klasës së defektit

QA e përkthimit duhet të mbajë klasa të qarta defektesh me fushat vijuese:

- përshkrim
- numërim shfaqjesh
- shkak rrënjësor
- mbulim nga validuesi
- rrezik rikthimi
- plan mbylljeje

Kategoritë e kërkuara përfshijnë:

- përmbledhje të papërkthyera
- trupa tekstesh të papërkthyer
- publikim skicash me placeholder
- metadata të papërkthyera
- publikim me gjuhë të përziera
- klasa të ardhshme të zbuluara

Një klasë mbyllet vetëm kur numri i saj i shfaqjeve arrin në zero dhe CI e pengon rikthimin pa dështim.

## Prova e rishikimit njerëzor

QA e përkthimit duhet gjithashtu të ruajë shënime të shkurtra të rishikimit njerëzor për korrigjime përfaqësuese të asistuara nga AI.

Fushat minimale:

- teksti origjinal
- teksti i korrigjuar
- kategoria e gabimit
- hipoteza e shkakut rrënjësor
- arsyetimi i rishikuesit

Gjetjet nga rishikimet e folësve amtarë duhet të ruhen si një korpus në rritje, jo si shënime të izoluara njëherëshe. Gjetjet e përsëritura duhet të rikthehen në dizajnin e validuesve, udhëzimet për kontribuesit dhe udhëzimet e ardhshme për agjentët AI.

Përpara miratimit përfundimtar të një përkthimi të asistuar nga AI, rishikuesit duhet të:

- lexojnë hyrjet përkatëse nga korpusi i strukturuar i gjetjeve për atë gjuhë ose temë
- kontrollojnë modelet e përsëritura të defekteve nga rishikimi njerëzor
- konfirmojnë që drafti aktual nuk rifut probleme të njohura përpara miratimit

Çdo defekt i raportuar nga folësit amtarë duhet gjithashtu të vlerësohet për sa i përket:

- korrigjimit të përmbajtjes
- përditësimit të udhëzimit të rishikimit
- përditësimit të udhëzimit terminologjik
- përmirësimit të prompt-it
- mundësisë për validues
- mundësisë për test regresioni

Kjo ka rëndësi sepse edhe kur kuptimi i përgjithshëm ruhet, përkthimet e gjeneruara nga AI mund të kërkojnë rishikim nga folës amtarë për të korrigjuar probleme delikate në gramatikë, modalitet, terminologji dhe regjistër specifik për domenin. Këto probleme shpesh janë të vështira për t'u zbuluar vetëm përmes metrikave të automatizuara të cilësisë.

Gabimet konkrete të raportuara nuk janë vetëm këshilluese. Secili duhet të përfundojë i korrigjuar, i sistemuar, i lënë qëllimisht i pazgjidhur me arsyetim, ose ende i ndjekur në mënyrë të qartë në korpusin e gjetjeve.

## Taksonomia e gabimeve të zakonshme të përkthimit të AI

- gramatikë
- modalitet
- terminologji
- regjistër
- rrjedhshmëri
- përkthim fjalë për fjalë
- paqartësi
- humbje konteksti
- rend fjalësh
- kolokacion
- shkrim ose drejtshkrim
- formulim i politikës së domenit
- formulim i aksesueshmërisë

## Rezultati i lehtë i pikës

Për vlerësim të përsëritshëm të përkthimit me AI, përdorni një rubrikë të lehtë 0-3 në vend që të mbështeteni vetëm te gjykimi kalon/dështon.

Dimensionet e rekomanduara:

- saktësia e kuptimit
- gramatika dhe rrjedhshmëria
- terminologjia dhe përshtatja me domenin
- regjistri dhe stili
- përpjekja e rishikimit

Etiketat e rekomanduara të publikimit:

- bllokues
- rishikim madhor
- rishikim i vogël
- gati me miratim rishikimi

Kjo krijon të dhëna të përshtatshme për scorecard-e pa kërkuar një kornizë të rëndë matjeje të lokalizimit.

## Faqe të ngjashme

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/sq/how-to-run-localization-qa-in-ci.md`
