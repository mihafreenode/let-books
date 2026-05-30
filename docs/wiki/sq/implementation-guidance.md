---
title: "Udhëzime Për Implementim"
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Udhëzime Për Implementim

## Përmbledhje

Udhëzimet e implementimit përcaktojnë se si ekipi duhet ta dorëzojë punën brenda depos ose mjedisit aktual të dorëzimit, pa e zëvendësuar vetë specifikimin e produktit.

## Roli

Udhëzimet e implementimit qëndrojnë poshtë specifikimit të produktit.

Ato ndihmojnë për t'iu përgjigjur pyetjeve si:

- si duhet të funksionojë emërtimi publik
- si duhet të strukturohen dokumentet
- cilat pritje verifikimi vlejnë tani
- cilat rregulla specifike të depos duhet të ndjekin kontribuesit
- ku duhet të jetojnë rregullat taktike ndërsa projekti evoluon

## Dallimi nga specifikimi i produktit

Specifikimi i produktit përcakton çfarë është produkti dhe çfarë duhet të arrijë.

Udhëzimet e implementimit përcaktojnë si duhet ta kryejnë kontribuesit punën brenda kontekstit aktual të dorëzimit.

Ky dallim është i dobishëm sepse jo çdo rregull i depos është e vërtetë e produktit dhe jo çdo e vërtetë e produktit duhet të fshihet në shënime taktike.

## Shembuj të zakonshëm

Udhëzimet e implementimit shpesh përfshijnë:

- rregulla emërtimi dhe markimi
- rregulla për implementimin e dokumentacionit
- kufizime të sajtit statik ose demos
- pritje verifikimi
- rregulla redaktimi ose gjenerimi kodi
- politika provash për shkrimin publik

Këto rregulla shpesh funksionojnë mirë në Markdown sepse duhet të mbeten të rishikueshme, të lehta për t'u përditësuar dhe pranë pjesës tjetër të kontekstit të depos.

## Pse ka rëndësi në punën e asistuar nga IA

Asistentët IA shpesh ndjekin udhëzimin më të afërt dhe më konkret. Nëse rregullat specifike të depos janë të nënkuptuara, rezultatet bëhen shpejt të paqëndrueshme.

Udhëzimet e implementimit i bëjnë këto rregulla të dukshme pa e ndotur specifikimin e produktit me hollësi taktike.

Në praktikë kjo do të thotë se një skedar udhëzues Markdown mund të bëjë dy punë njëkohësisht:

- të shpjegojë rrjedhën e punës për një kontribues njerëzor
- të drejtojë një agjent IA drejt mjeteve, rendit dhe kufizimeve të preferuara

## Konteksti Let Books

Në Let Books, `AGENTS-Implementation.md` është shtresa e udhëzimit taktik.

Ai mbulon fusha si:

- emërtimi publik
- rregullat e dokumentacionit
- ndarja mes sajtit publik dhe dokumenteve
- rregullat e metadatave dhe SEO-së për faqe statike
- kufizimet e demos statike
- rregullat e lokalizimit dhe aksesueshmërisë
- rregullat e verifikimit
- politika e provave për blogun

Kjo e bën atë shoqëruesin operacional të `AGENTS.md`, jo zëvendësim të tij.

## Faqe Të Lidhura

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../learning/how-to-turn-a-product-spec-into-an-implementation-plan.md`
