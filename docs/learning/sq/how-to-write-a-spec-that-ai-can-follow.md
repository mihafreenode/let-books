---
title: "Si të shkruani një specifikim që AI mund ta ndjekë"
summary: >-
  Ky udhëzues shpjegon si të shkruani një specifikim produkti ose veçorie që ndihmon implementimin e ndihmuar nga AI të mbetet i përafruar me qëllimet reale të produktit në vend që të devijojë drejt një rezultati të përgjithshëm.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Si të shkruani një specifikim që AI mund ta ndjekë

## Përmbledhje

Ky udhëzues shpjegon si të shkruani një specifikim produkti ose veçorie në mënyrë që implementimi i ndihmuar nga AI të mbetet i përafruar me qëllimet reale të produktit, në vend që të rrëshqasë drejt një rezultati të përgjithshëm.

## Pse kjo ka rëndësi

AI mund të gjenerojë kod shpejt, por funksionon më mirë kur detyra ka kufij të qartë.

Nëse një specifikim është i paqartë, AI shpesh i mbush boshllëqet me parazgjedhje të besueshme:

- modele të zakonshme arkitekture
- rrjedha të përgjithshme ndërfaqeje
- abstraksione të panevojshme
- supozime të shpikura për atë që duhet të bëjë produkti

Ky rezultat mund të duket i rregullt dhe prapëseprapë të jetë i gabuar.

## Çfarë duhet të përfshijë një specifikim i dobishëm për AI

### 1. Qëllimi i produktit

Shpjegoni pse ekziston veçoria.

Keq:

> Shto një formular libri.

Më mirë:

> Shto një formular të shpejtë regjistrimi që i lejon një dhuruesi të katalogojë një kopje fizike libri për disa sekonda ndërsa qëndron pranë një rafti ose kutie.

Qëllimi i tregon qartë implementuesit se për çfarë duhet të optimizojë.

### 2. Kufijtë e shtrirjes

Shpjegoni çfarë është brenda shtrirjes dhe çfarë është jashtë saj.

Shembull:

- brenda shtrirjes: foto kopertine, futje ISBN-je, vendndodhje ruajtjeje, ruaj dhe vazhdo
- jashtë shtrirjes: OCR, sinkronizim cloud, rrjedhë rishikimi institucional

Kjo e pengon ndihmësin ta fryjë një detyrë të vogël në një mini-platformë.

### 3. Sjellja e kërkuar

Renditni rregullat e panegociueshme.

Shembuj nga qasja Let Books:

- rrjedha manuale e punës duhet të funksionojë pa AI
- të dhënat e paplota duhet të lejohen
- kopjet fizike duhet të mbeten të ndara nga regjistrat bibliografikë
- sjellja e dukshme për përdoruesin duhet të mbetet e lokalizueshme

Këto rregulla kanë më shumë rëndësi se stili i implementimit.

### 4. Sjellja në dështim dhe sjellja rezervë

Zgjidhjet e gjeneruara nga AI shpesh optimizojnë rrugën e lumtur. Një specifikim i mirë shpjegon çfarë ndodh kur sistemet opsionale dështojnë.

Shembull:

- nëse kërkimi i metadatave dështon, hyrja manuale mbetet e disponueshme
- nëse OCR është çaktivizuar, regjistrimi vazhdon të funksionojë
- nëse validimi i eksportit dështon, përdoruesi merr një raport të qartë në vend të një importi të pjesshëm të heshtur

### 5. Kriteret e pranimit

Shkruajeni kushtin e suksesit me terma të vëzhgueshëm.

Shembull:

1. përdoruesi zgjedh një kuti
2. përdoruesi fut ose skanon ISBN-në
3. përdoruesi mund të ruajë edhe nëse asnjë ofrues metadatash nuk përgjigjet
4. libri shfaqet në vendndodhjen e zgjedhur

Kriteret e pranimit u japin rishikuesve dhe sistemeve AI një objektiv të qëndrueshëm.

## Çfarë të shmangni

- qëllime të paqarta si "përmirëso UX"
- hollësi implementimi pa qëllim produkti
- ide të ardhshme të përziera dhe të paraqitura si kërkesa aktuale
- supozime të fshehta për rolet e përdoruesve ose cilësinë e të dhënave
- specifikime që vetëm emërtojnë por nuk përshkruajnë rrjedhën e punës

## Një model praktik shkrimi

Përdoreni këtë strukturë kompakte kur hartoni një specifikim veçorie.

1. problemi
2. përdoruesi dhe konteksti
3. rrjedha e punës brenda shtrirjes
4. elementet jashtë shtrirjes
5. rregullat e kërkuara
6. sjellja rezervë
7. kriteret e pranimit
8. shënime verifikimi

## Si lidhet kjo me Let Books

Depoja tashmë e demonstron këtë model në disa nivele:

- `AGENTS.md` përcakton qëllimin e produktit, rrjedhat e punës dhe kriteret e pranimit
- `AGENTS-Implementation.md` përcakton kufizimet taktike të dorëzimit
- `README.md` ndan gjendjen aktuale nga drejtimi i ardhshëm

Kjo qasje me shtresa është e dobishme sepse AI funksionon më mirë kur ajo që e përcakton produktin është shkruar qartë dhe mbetet e rishikueshme.

## Ushtrim

Merrni një veçori të Let Books, si skanimi QR i kutive ose importimi i vendimeve nga Excel-i, dhe shkruani një specifikim njëfaqësh duke përdorur strukturën e mësipërme.

Më pas kërkoni nga një ndihmës programimi ta implementojë.

Pastaj rishikojeni rezultatin kundrejt specifikimit përpara se të rishikoni stilin e kodit. Ky rend ka rëndësi.

## Lexim i mëtejshëm

- `../spec-driven-content-program.md`
- `../wiki/sq/spec-driven-development.md`
- `../wiki/sq/demo-spec-alignment.md`
- `../blog/sq/spec-driven-development-for-ai-projects.md`
