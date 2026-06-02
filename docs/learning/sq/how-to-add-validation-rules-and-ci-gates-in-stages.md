---
title: "Si të shtoni rregulla validimi dhe porta CI me faza"
summary: >-
  Ky udhëzues shpjegon si të shtoni rregulla validimi dhe kontrolle CI në mënyrë graduale që një projekt të mund të përmirësojë qëndrueshmërinë dhe të zvogëlojë devijimin pa u përpjekur të automatizojë gjithçka menjëherë.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Si të shtoni rregulla validimi dhe porta CI me faza

## Përmbledhje

Ky udhëzues shpjegon si të shtoni rregulla validimi dhe kontrolle CI në mënyrë graduale që një projekt të mund të përmirësojë qëndrueshmërinë dhe të zvogëlojë devijimin pa u përpjekur të automatizojë gjithçka menjëherë.

## Pse ka rëndësi zbatimi me faza

Ekipet shpesh e dinë se kanë nevojë për validim më të fortë, por bëjnë një nga dy gabimet.

Ose i lënë kontrollet e cilësisë joformale për shumë gjatë, ose përpiqen të sjellin menjëherë një sistem të madh e të ngurtë CI dhe krijojnë frustrim.

Një qasje me faza funksionon më mirë.

Ajo i lejon projektit t’i kthejë pritjet e përsëritura të rishikimit në kontrolle të përsëritshme me kalimin e kohës.

## Filloni nga gabimet që përsëriten

Rregullat më të mira të validimit zakonisht nisin si gjetje të përsëritura në rishikimet njerëzore.

Pyesni:

- cilat gabime vazhdojnë të ndodhin
- cilat rregulla harrohen lehtë
- cila strukturë duhet të mbetet e qëndrueshme në të gjithë depozitën
- cilat kontrolle cilësie do t’u kursenin kohë rishikuesve

Nëse i njëjti problem shfaqet disa herë, është kandidat i mirë për automatizim.

## Validimi duhet të ndjekë zinxhirin e autoritetit

Rregullat e validimit duhet të përforcojnë pritjet e dokumentuara, jo t’i zëvendësojnë ato.

Kjo do të thotë:

- specifikimi e përcakton rregullin
- dokumentacioni e shpjegon rregullin
- validimi e kontrollon rregullin kur kjo është praktike
- CI e ekzekuton validimin në mënyrë të qëndrueshme

Kjo e mban projektin larg zbatimit të rregullave që në fakt nuk janë vendosur kurrë.

## Një model i dobishëm pjekurie

### Faza 1: listë kontrolli për rishikim manual

Filloni duke e emërtuar qartë rregullin.

Shembuj:

- i gjithë teksti i ri i dukshëm për përdoruesin duhet të jetë i lokalizueshëm
- dokumentacioni duhet të ndajë gjendjen aktuale nga planet e ardhshme
- artikujt e rinj publikë duhet të citojnë specifikime dhe dokumentacion, jo skedarë burimorë

Në këtë fazë, rregulli është real, por ende zbatohet nga njerëzit.

### Faza 2: validim i lehtë lokal

Shtoni një skript të vogël ose një kontroll të strukturuar që kontribuuesit mund ta ekzekutojnë lokalisht.

Shembuj:

- zbulimi i çelësave të munguar të lokalizimit
- kontrollet për praninë e skedarëve të kërkuar
- validimi i gjenerimit të metadatave
- kontrollet për zgjidhjen e lidhjeve

Kjo fazë ul gabimet e shmangshme para se të ekzekutohet edhe vetë CI-ja.

### Faza 3: dukshmëri në CI

Ekzekutoni kontrollin në CI, edhe nëse në fillim nuk bllokon.

Kjo i jep ekipit dukshmëri mbi sa shpesh dështon rregulli dhe nëse vetë kontrolli ka nevojë për përmirësim.

### Faza 4: portë bllokuese në CI

Pasi rregulli të jetë i qëndrueshëm dhe i kuptuar, bëjeni të detyrueshëm.

Në këtë pikë, projekti ka kaluar nga një pritje joformale në një standard të zbatueshëm.

## Çfarë të automatizoni së pari

Kandidatët e mirë të hershëm zakonisht janë:

- qëndrueshmëria strukturore
- skedarët e kërkuar
- plotësia e lokalizimit
- vlefshmëria e formatimit ose sintaksës
- lidhjet e brendshme të prishura
- citimet editoriale të ndaluara

Për publikime shumëgjuhëshe, trajtojeni përmbajtjen e dukshme për lexuesin në gjuhë të përziera si një nga portat e para CI me vlerë të lartë. Një faqe me titull të lokalizuar, por me përmbledhje në anglisht ose etiketa në anglisht, nuk është pjesërisht e suksesshme. Ajo është e paplotë.

Këto kontrolle zakonisht janë të lira, objektive dhe me vlerë të lartë.

## Çfarë të mos detyroni shumë herët

Disa kontrolle janë të vlefshme, por mund të kërkojnë kohë para se të bëhen porta të forta.

Shembuj:

- kontroll drejtshkrimi në shumë gjuhë
- kontrolle pamjesh ekrani ose regresioni vizual
- kontrolle aksesueshmërie që janë ende duke u rregulluar
- rregulla stili ose formulimi që ende nuk janë të qëndrueshme

Ato mund të fillojnë si sinjale këshilluese para se të bëhen të detyrueshme.

## Shembuj nga Let Books

Depoja tashmë dokumenton disa modele validimi, duke përfshirë:

- testim të thjeshtë të lokalizimit
- validim të sintaksës JSON
- kontrolle të skedarëve të kërkuar
- gjenerim të metadatave SEO
- kontroll drejtshkrimi dhe linting opsional
- automatizim të vendosjes

Dokumentacioni dhe udhëzuesit e stilit përcaktojnë gjithashtu rregulla editoriale që me kohën mund të bëhen objektiva validimi, si përdorimi i specifikimeve dhe dokumentacionit si prova kanonike për artikuj publikë.

Kjo e bën Let Books një shembull të mirë të zbatimit gradual në vend të një procesi gjithçka menjëherë.

## Një rrjedhë praktike për kthimin e rregullave

Përdoreni këtë model kur shtoni një rregull të ri validimi:

1. identifikoni problemin e përsëritur të rishikimit
2. shkruajeni rregullin qartë në dokumentacion ose udhëzim
3. shtoni një skript lokal ose kontroll nëse është praktike
4. ekzekutojeni në CI si reagim të dukshëm
5. bëjeni bllokues vetëm kur të jetë i qëndrueshëm

Kjo krijon më pak fërkim sesa vendosja e një porte të fortë para se ekipi ta kuptojë rregullin.

## Pyetje që duhen bërë para se të shtoni një portë

1. A është rregulli i dokumentuar qartë?
2. A është kontrolli mjaftueshëm i besueshëm për t’iu besuar?
3. A do ta kuptojnë kontribuuesit si t’i rregullojnë dështimet?
4. A e justifikon vlera e kontrollit fërkimin?
5. A duhet të fillojë vetëm si paralajmërim para se të bëhet i detyrueshëm?

## Projektet me ndihmë nga AI kanë edhe më shumë nevojë për këtë

AI rrit vëllimin e ndryshimeve dhe shpejtësinë e ndryshimit. Kjo do të thotë më shumë mundësi për mospërputhje.

Po ashtu e bën reagimin e shpejtë më të vlefshëm. Pyetja praktike shpesh nuk është nëse AI mund të prodhojë një përpjekje të parë të përsosur. Pyetja më e dobishme është nëse mjedisi mund ta identifikojë me besueshmëri problemin tjetër që duhet zgjidhur.

Validimi dhe CI-ja nuk janë aty për të ngadalësuar ekipet. Ato janë aty për të mos lejuar që shpejtësia të fshijë kufijtë e rëndësishëm.

Në punën e drejtuar nga specifikimet, qëllimi nuk është automatizimi maksimal. Qëllimi është përforcimi i besueshëm i rregullave që kanë më shumë rëndësi.

## Mësimi afatgjatë

Sistemet më të forta të validimit zakonisht nuk shfaqen të gatshme që në fillim. Ato rriten duke kthyer gjykimin njerëzor të përsëritur në kontrolle të dokumentuara, të rishikueshme dhe të zbatueshme.

Kjo rrugë graduale është shpesh mënyra më realiste për ta bërë një projekt më të rreptë pa e bërë të brishtë.

## Listë kontrolli për korrigjim duke nisur nga burimi

Kur një rregull validimi dështon:

1. kontrolloni fillimisht Markdown-un burimor
2. kontrolloni më pas metadatat e lokalizuara
3. kontrolloni hyrjet e gjenerimit dhe regjistrat
4. rigjeneroni artefaktet
5. kontrolloni HTML-në e gjeneruar vetëm pas kontrolleve në nivel burimi

Mos e korrigjoni daljen e gjeneruar nëse lokalizimi burimor është i paplotë.

## Lexim i mëtejshëm

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/sq/spec-driven-development.md`
- `../blog/sq/documentation-is-part-of-the-product.md`
