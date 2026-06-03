---
title: "Sigurimi i cilësisë së përkthimit"
summary: >-
  QA e përkthimit kombinon vërtetimin e automatizuar, kontrollin e drejtshkrimit, rishikimin e terminologjisë, kontrollet e aksesueshmërisë dhe gjykimin njerëzor.
topics:
  - translation-quality
  - qa
  - localization
---
# Sigurimi i cilësisë së përkthimit

## Përmbledhje

QA e përkthimit kombinon vërtetimin e automatizuar, kontrollin e drejtshkrimit, rishikimin e terminologjisë, kontrollet e aksesueshmërisë dhe gjykimin njerëzor.

## Kontrolle të zakonshme

- Mungojnë përkthimet
- Rrjedhje angleze
- Plotësia e lokalizimit me pamje nga lexuesi
- mospërputhjet e mbajtësve të vendeve
- lidhje të prishura
- rrëshqitje e fjalorit
- Mbulimi i tekstit të aksesueshmërisë
- pamje e ekranit dhe barazia e diagramit

## Vlerësuesi i lokalizimit me pamje nga lexuesi

Një klasë e verifikuesit duhet të dështojë në mënyrë eksplicite CI kur një faqe shfaqet e lokalizuar, por ende ekspozon përmbajtjen e gjuhës burimore që përballet me lexuesin.

Shembuj që duhet të dështojnë:

- titull i lokalizuar me përmbledhje në anglisht
- artikull i lokalizuar me etiketa në anglisht
- artikull i lokalizuar me tituj ose lista në anglisht
- artikull i lokalizuar me thirrje ose titra në anglisht
- artikull i lokalizuar me etiketa diagrame në anglisht ose tekst alt
- karta me përmbajtje të lidhur me gjuhë të përzier

Ky është një kusht dështimi, jo thjesht një paralajmërim, sepse lexuesit i përjetojnë faqe të tilla si dukshëm të papërfunduara.

## Auditimi i klasës së defektit

QA e përkthimit duhet të mbajë klasa të qarta defektesh me:

- përshkrim
- numërimi i dukurive
- shkaku rrënjësor
- Mbulimi i verifikuesit
- rreziku i përsëritjes
- plani i mbylljes

Kategoritë e kërkuara përfshijnë:

- përmbledhje të papërkthyera
- trupa të papërkthyer
- botimi i draftit të vendmbajtësit
- meta të dhëna të papërkthyera
- botim në gjuhë të përzier
- klasat e zbuluara në të ardhmen

Një klasë mbyllet vetëm kur numërimi i saj arrin zero dhe CI e pengon atë të kthehet pa dështim.

## Prova e rishikimit njerëzor

Cilësia e Përkthimit duhet gjithashtu të ruajë të dhëna të shkurtra të rishikimit njerëzor për korrigjimet përfaqësuese të asistuara nga AI.

Fushat minimale:

- teksti origjinal
- teksti i korrigjuar
- kategori gabimi
- hipoteza e shkakut rrënjësor
- arsyetimi recensues

Gjetjet e rishikimit nga folësit vendas duhet të ruhen si një korpus në rritje, jo si shënime të izoluara të njëhershme. Gjetjet e përsëritura duhet të ushqehen me dizajnin e verifikuesit, udhëzimet e kontribuesve dhe udhëzimet e ardhshme të agjentëve të AI.

Përpara nënshkrimit përfundimtar të një përkthimi të asistuar nga AI, rishikuesit duhet të:

- shqyrtojnë hyrjet përkatëse në korpusin e strukturuar të gjetjeve për atë gjuhë ose temë
- kontrollojnë modelet e përsëritura të defekteve nga rishikimet njerëzore
- konfirmojnë që drafti aktual nuk rifut çështje të njohura para nënshkrimit

Çdo defekt i raportuar nga një folës amtar duhet gjithashtu të vlerësohet për:

- korrigjimin e përmbajtjes
- përditësimin e udhëzimeve të rishikimit
- përditësimin e udhëzimeve terminologjike
- përmirësimin e prompt-it
- mundësinë për validator
- mundësinë për test regresioni

Kjo ka rëndësi sepse edhe kur kuptimi i përgjithshëm ruhet, përkthimet e krijuara nga AI mund të kërkojnë rishikim nga folësi amtare për të korrigjuar çështjet delikate në gramatikë, modalitet, terminologji dhe regjistër specifik të domenit. Këto çështje shpesh janë të vështira për t'u zbuluar vetëm nëpërmjet matjeve të automatizuara të cilësisë.

Gabimet konkrete të raportuara nga folësit amtarë nuk janë vetëm këshilluese. Secila prej tyre duhet të përfundojë e korrigjuar, e sistematizuar, e lënë qëllimisht e pazgjidhur me arsyetim, ose ende e ndjekur shprehimisht në korpusin e gjetjeve.

## Taksonomia e gabimeve të zakonshme të përkthimit të AI

- gramatikë
- modaliteti
- terminologjia
- regjistrohuni
- rrjedhshmëri
- përkthim fjalë për fjalë
- paqartësi
- humbje e kontekstit
- renditja e fjalëve
- bashkëvendosje
- shkrimi ose drejtshkrimi
- formulimi i politikave të domenit
- formulimi i aksesueshmërisë

## Rezultati i lehtë i pikës

Për vlerësimin e përsëritshëm të përkthimit të AI, përdorni një rubrikë të lehtë 0-3 në vend që të mbështeteni vetëm në gjykimin kalim/dështim.

Dimensionet e rekomanduara:

- do të thotë saktësi
- gramatika dhe rrjedhshmëria
- terminologjia dhe përshtatja e domenit
- regjistrimi dhe stili
- rishikoni përpjekjet

Etiketat e rekomanduara të lëshimit:

- bllokues
- rishikim i madh
- rishikim i vogël
- gati me shenjë rishikimi

Kjo krijon të dhëna miqësore me kartën e rezultateve pa kërkuar një kornizë të matjes së lokalizimit të peshave të rënda.

## Faqe të ngjashme

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/sq/how-to-run-localization-qa-in-ci.md`
