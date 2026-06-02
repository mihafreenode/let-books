---
article_id: spec-driven-development-in-let-books
canonical_language: en
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Zhvillim i udhëhequr nga specifikimi në Let Books
summary: Si Let Books tashmë përdor specifikimin, udhëzimet e implementimit, dokumentimin, kufizimet e demove dhe rregullat e verifikimit si një sistem zhvillimi të udhëhequr nga specifikimi.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-in-let-books.md
status: draft
---

# Zhvillim i udhëhequr nga specifikimi në Let Books

Let Books është një rast i dobishëm studimor për zhvillimin e udhëhequr nga specifikimi, sepse depoja tashmë përmban disa shtresa të qëllimit të produktit dhe jo vetëm artefakte implementimi.

Projekti ende nuk është një aplikacion i plotë i hostuar. Aktualisht ai përfshin një specifikim produkti, udhëzime implementimi, dokumentim publik dhe një demo statike lokale. Kjo e bën një shembull të mirë të mënyrës se si një projekt mund të mbetet i qëndrueshëm përpara se të ekzistojë platforma përfundimtare e prodhimit.

## Shtresa e specifikimit

`AGENTS.md` është specifikimi kryesor i produktit. Ai përcakton qëllimin e projektit, modelin e domenit, rrjedhat e punës, kufijtë e fushës, drejtimin e lokalizimit, privatësinë, opsionalitetin e AI dhe kriteret e pranimit.

Kjo është e rëndësishme sepse u përgjigjet pyetjeve që vetëm kodi nuk mund t'i sqarojë qartë:

- pse ekziston projekti
- cilat rrjedha pune janë të klasit të parë
- çfarë duhet të funksionojë pa AI
- cilat janë ide të ardhshme dhe jo angazhime të tanishme
- çfarë llogaritet si demo e parë e suksesshme

Ky është dallimi midis një përshkrimi të përgjithshëm dhe një specifikimi të vërtetë. Një specifikim i vërtetë kufizon zgjedhjet e implementimit.

## Shtresa e udhëzimeve taktike

`AGENTS-Implementation.md` shton shtresën e dytë. Ai nuk e zëvendëson specifikimin e produktit, por shpjegon se si duhet të kryhet puna aktualisht në këtë depo.

Shembuj përfshijnë:

- rregulla të emërtimit publik
- rregulla të implementimit të dokumentimit
- pritshmëri për metadata të sajtit statik
- kufizime të demove
- pritshmëri për lokalizimin dhe verifikimin
- politikë editoriale të evidencës për shkrimin publik

Kjo është e rëndësishme në punën e asistuar nga AI, sepse jo çdo rregull i përket specifikimit afatgjatë të produktit. Disa rregulla janë taktike, editoriale ose specifike për depon. Mbajtja e kësaj dallese të qartë ul zhurmën dhe e pengon specifikimin e produktit të shndërrohet në depo të hollësive të implementimit.

## Shtresa e gjendjes aktuale

`README.md` përfaqëson shtresën e tretë: një përshkrim të gjendjes aktuale.

Ai shpjegon çfarë ekziston sot, çfarë ende nuk ekziston, për çfarë shërben demoja statike dhe si publikohet faqja publike. Kjo është pjesë kyçe e përafrimit, sepse projektet shpesh dështojnë kur lexuesit ngatërrojnë ambicien me implementimin.

Në Let Books, README dallon shprehimisht dorëzimet aktuale nga planet e ardhshme. Kjo i ndihmon bashkëpunëtorët, institucionet dhe rishikuesit të kuptojnë pjekurinë e projektit pa supozime.

## Shtresa e dokumentimit

Zona `docs/` shton shtresën e katërt. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, udhëzuesit e stilit dhe zona `sources` përcaktojnë se si duhet të organizohet, validohet dhe publikohet njohuria.

Këtu depoja bëhet më shumë se një koleksion skedarësh. Ajo bëhet një platformë dijeje me:

- arkitekturë dokumentimi
- rregulla të evidencës editoriale
- strukturë botimi shumëgjuhëshe
- rregulla të publikimit të dokumentimit publik
- udhëzime zhvillimi dhe validimi

Kjo është pikërisht lloji i skeletit që ndihmon dorëzimin e asistuar nga AI të mbetet i gjurmueshëm.

## Shtresa e demove

Demoja statike është e rëndësishme, por me qëllim nuk është autoriteti i vetëm. Rregullat për blogun dhe burimet tashmë bëjnë dallimin mes dokumentimit kanonik dhe statusit të implementimit.

Kjo do të thotë se demoja mund të verifikojë rrjedhat e punës, të zbulojë probleme përdorshmërie dhe të ndihmojë në shpjegim për aktorët e jashtëm, pa u bërë vetvetiu e vërteta përfundimtare e produktit.

Ky është një rregull i pjekur. Pa të, prototipet shpesh bëhen mekanizma të rastësishëm qeverisjeje. Një ekip fillon ta kopjojë prototipin sepse ekziston, jo sepse ai pasqyron një vendim të miratuar produkti.

## Shtresa e verifikimit

Let Books tashmë dokumenton edhe një mënyrë të menduari për verifikimin.

`docs/Development.md` dhe `docs/Deployment.md` përshkruajnë shtresa validimi si:

- teste smoke të lokalizimit
- validim të skedarëve të strukturuar
- gjenerim metadatash
- kontrolle për skedarët e detyrueshëm
- kontroll drejtshkrimor opsional dhe linting
- automatizim të publikimit

Këto nuk janë vetëm hollësi mjetesh. Ato janë provë se projekti e trajton cilësinë si sistem të përsëritshëm.

## Pse kjo ka rëndësi për dorëzimin e mbështetur nga AI

Nëse një asistent AI kontribuon te Let Books, nuk ka nevojë ta shpikë produktin nga fillimi. Depoja tashmë përmban një zinxhir synimi:

1. drejtimi i produktit në `AGENTS.md`
2. rregullat taktike të dorëzimit në `AGENTS-Implementation.md`
3. gjendja aktuale në `README.md`
4. rregullat e dijes dhe publikimit në `docs/`
5. statusi i prototipit të ekzekutueshëm në demon statik
6. udhëzimet e validimit dhe publikimit në dokumentacionin e zhvillimit dhe vendosjes

Ky zinxhir nuk i eliminon gabimet. Por i bën më të lehta për t'u zbuluar dhe shqyrtuar.

## Mësimi kryesor

Zhvillimi i udhëhequr nga specifikimi nuk do të thotë vetëm të shkruash një dokument të gjatë me kërkesa para se të fillojë kodimi.

Në praktikë, do të thotë të ndërtosh një zinxhir të besueshëm midis:

- qëllimit të produktit
- rregullave taktike
- dokumentimit publik
- demove
- validimit
- publikimit

Let Books tashmë tregon se një zinxhir i tillë mund të ekzistojë edhe përpara se të ekzistojë produkti i plotë backend.

Ky është një nga argumentet më të forta për zhvillimin e udhëhequr nga specifikimi në punën e mbështetur nga AI: sa më i qartë të jetë zinxhiri i qëllimit, aq më pak gjasa ka që dalja e shpejtë të shndërrohet në konfuzion të shpejtë.

## Gjuhë të tjera

- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
