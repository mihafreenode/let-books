---
title: "Gjurmueshmëria e dokumentacionit"
summary: >-
  Gjurmueshmëria e dokumentacionit do të thotë që pretendimet e rëndësishme, përshkrimet e rrjedhës së punës dhe pritshmëritë për cilësinë të lidhen në mënyrë të besueshme me prova të qëndrueshme në depo dhe me vendime të marra qartë.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Gjurmueshmëria e dokumentacionit

## Përmbledhje

Gjurmueshmëria e dokumentacionit do të thotë që pretendimet e rëndësishme, përshkrimet e rrjedhës së punës dhe pritshmëritë për cilësinë të lidhen në mënyrë të besueshme me prova të qëndrueshme në depo dhe me vendime të marra qartë.

## Pse ka rëndësi

Pa gjurmueshmëri, dokumentacioni bëhet i vështirë për t'u besuar.

Lexuesit nuk mund të thonë:

- nëse një deklaratë është aktuale
- nëse një sjellje është e qëllimshme
- nëse një pretendim vjen nga specifikimi i produktit ose aksidenti i zbatimit
- nëse një artikull publik pasqyron drejtimin e miratuar të produktit

Gjurmueshmëria është veçanërisht e rëndësishme në punën e asistuar nga AI sepse përmbajtja e krijuar mund të tingëllojë e sigurt edhe kur nuk është e bazuar në burimin e duhur.

## Si duket gjurmueshmëria

Gjurmueshmëria e mirë e dokumentacionit zakonisht përfshin:

- një zinxhir autoriteti i përcaktuar qartë
- referenca të qëndrueshme ndaj dokumenteve ose specifikave përkatëse
- ndarje e qartë midis planeve të gjendjes aktuale dhe planeve të ardhshme
- dallimi i qartë ndërmjet dokumentacionit kanonik dhe statusit të zbatimit
- harta burimore ose shënime provash për artikuj të rëndësishëm publik

Është gjithashtu gjithnjë e më e dobishme që dokumentacioni të jetë mjaft i saktë për të drejtuar punën e asistuar nga AI, jo vetëm interpretimin njerëzor.

## Një model i thjeshtë autoriteti

Një model i dobishëm është:

1. specifikimet e produktit
2. udhëzues zbatimi
3. Dokumentacioni i gjendjes aktuale
4. sjellje demo ose zbatimi
5. testet dhe rezultatet e vlefshmërisë

Kjo i ndihmon ekipet të vendosin se cili artefakt duhet t'i përgjigjet cilës pyetje.

## Shkrimi publik dhe gjurmueshmëria

Artikujt publikë, esetë dhe materiali edukativ nuk duhet të mbështeten në çfarëdo skedari burimor që ndodh pranë.

Në vend të kësaj, ata duhet të preferojnë dokumentacion të qëndrueshëm dhe referenca të specifikimeve dhe të përdorin hartat burimore kur pretendimet janë thelbësore.

Kjo e bën shkrimin publik më të mirëmbajtur dhe më pak të brishtë me kalimin e kohës.

## Gjurmueshmëria si për agjentët ashtu edhe për njerëzit

Gjurmueshmëria nuk shërben vetëm që një njeri të kuptojë se nga vjen një pretendim. Ajo ndihmon edhe një agjent të AI të përcaktojë se cilat artefakte të depos duhet të udhëheqin veprimin e radhës.

Kur dokumentacioni shpreh qartë rendin e rrjedhës së punës, preferencat e veglave, kufizimet e mjedisit dhe kufijtë e autoritetit, ai bëhet i përdorshëm si kontekst operacional për agjentët, si dhe si kontekst shpjegues për njerëzit.

Kjo ka rëndësi sepse agjentët shpesh veprojnë sipas udhëzimeve më konkrete aty pranë. Markdown i gjurmueshëm ndihmon që udhëzimi i duhur të bëhet i dukshëm.

## Let Books kontekst

Depoja Let Books tashmë mbështet gjurmueshmërinë nëpërmjet:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- hartat burimore nën `docs/sources/`

Ai gjithashtu përmban udhëzues Markdown që funksionojnë si kontekst operacional i gjurmueshëm për punën e agjentëve, si p.sh.

- `docs/android-debugging.md` për zgjedhjen e rrjedhës së punës për korrigjimin e celularit dhe përdorimin e veglave
- `docs/style-guide/publishing/ubuntu-tooling.md` për aftësitë e pritshme të veglave dhe verifikimit

Kjo strukturë e ndihmon projektin ta trajtojë dokumentacionin si një sistem të mbështetur nga prova dhe jo si një grup shënimesh të lira.

## Faqe të ngjashme

- `product-specification.md`
- `implementation-guidance.md`
- `validation-layers.md`
- `../../learning/sq/how-to-keep-spec-docs-demo-and-code-aligned.md`
