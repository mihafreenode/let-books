---
title: "Udhëzues Zbatimi"
summary: >-
  Udhëzimi i zbatimit përcakton se si një ekip duhet të dorëzojë punën brenda depove aktuale ose mjedisit të shpërndarjes pa zëvendësuar vetë specifikimin e produktit.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Udhëzues Zbatimi

## Përmbledhje

Udhëzimi i zbatimit përcakton se si një ekip duhet të dorëzojë punën brenda depove aktuale ose mjedisit të shpërndarjes pa zëvendësuar vetë specifikimin e produktit.

## Roli

Udhëzimet e zbatimit janë nën specifikimet e produktit.

Ndihmon për t'iu përgjigjur pyetjeve të tilla si:

- si duhet të funksionojë emërtimi publik
- si duhet të strukturohen dokumentet
- cilat pritshmëri verifikimi zbatohen tani
- cilat rregulla specifike të depove duhet të ndjekin kontribuuesit
- ku rregullat taktike duhet të jetojnë ndërsa projekti evoluon

## Ndryshimi nga specifikimi i produktit

Specifikimi i produktit përcakton se çfarë është produkti dhe çfarë duhet të arrijë.

Udhëzimi i zbatimit përcakton se si kontribuuesit duhet të kryejnë punën brenda kontekstit aktual të ofrimit.

Ky dallim është i dobishëm sepse jo çdo rregull i depove është një e vërtetë produkti dhe jo çdo e vërtetë e produktit duhet të varroset në shënime taktike.

## Shembuj të zakonshëm

Udhëzimet e zbatimit shpesh përfshijnë:

- rregullat e emërtimit dhe markës
- rregullat e zbatimit të dokumentacionit
- kufizimet e faqes statike ose demo
- pritjet e verifikimit
- Rregullat e redaktimit ose të gjenerimit të kodeve
- politikat e evidentimit për shkrimin publik

Këto rregulla shpesh jetojnë mirë në Markdown sepse ato duhet të qëndrojnë të rishikueshme, të lehta për t'u përditësuar dhe afër pjesës tjetër të kontekstit të depove.

## Pse ka rëndësi në punën e asistuar nga AI

Asistentët e AI shpesh ndjekin udhëzimet konkrete më të afërta. Nëse rregullat specifike të depove janë të nënkuptuara, prodhimi bëhet shpejt i paqëndrueshëm.

Udhëzimi i zbatimit i bën ato rregulla të dukshme pa e ndotur specifikimin e produktit me detaje taktike.

Në praktikë, kjo do të thotë se një skedar udhëzues Markdown mund të bëjë dy punë njëherësh:

- shpjegoni rrjedhën e punës një kontribuesi njerëzor
- drejtoni një agjent AI drejt mjeteve, sekuencës dhe kufizimeve të preferuara

## Let Books kontekst

Në Let Books, `AGENTS-Implementation.md` është shtresa e udhëzimit taktik.

Ai mbulon fusha të tilla si:

- emërtimi publik
- rregullat e dokumentacionit
- ndarja e faqes publike dhe dokumenteve
- rregullat e meta të dhënave dhe SEO për faqet statike
- kufizimet statike demonstruese
- Rregullat e lokalizimit dhe aksesueshmërisë
- rregullat e verifikimit
- Politika e dëshmive të blogut

Kjo e bën atë shoqërues operacional të `AGENTS.md`, jo një zëvendësim për të.

Udhëzime të tjera Markdown në repo përforcojnë të njëjtin model. Për shembull:

- `docs/android-debugging.md` drejton zgjedhjet e rrjedhës së punës për korrigjimin e gabimeve, si p.sh.
- `docs/style-guide/publishing/ubuntu-tooling.md` dokumenton mjetet e pritshme për publikimin, verifikimin, pamjet e ekranit, kontrollin drejtshkrimor dhe korrigjimin e pajisjes

Këto dokumente janë të lexueshme si udhëzime njerëzore, por ato gjithashtu ndihmojnë agjentët të zgjedhin veprime më të mira në vend që të hamendësojnë nga parazgjedhjet e përgjithshme.

## Faqe të ngjashme

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/sq/how-to-turn-a-product-spec-into-an-implementation-plan.md`