---
title: "Shtresat e validimit"
summary: >-
  Shtresat e validimit janë mënyrat e ndryshme se si një projekt kontrollon nëse artefaktet e zbatimit, dokumentacionit dhe dorëzimit përputhen ende me rregullat e synuara dhe pritshmëritë për cilësinë.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Shtresat e validimit

## Përmbledhje

Shtresat e validimit janë mënyrat e ndryshme se si një projekt kontrollon nëse artefaktet e zbatimit, dokumentacionit dhe dorëzimit përputhen ende me rregullat e synuara dhe pritshmëritë për cilësinë.

## Pse shtresat kanë rëndësi

Asnjë mënyrë e vetme validimi nuk mjafton.

- vetëm dokumentacioni nuk e detyron sjelljen
- vetëm testet mund të vërtetojnë supozimet e gabuara
- CI i vetëm nuk mund të përcaktojë rregullat që supozohet të zbatojë

Një qasje me shtresa është më e fortë sepse çdo shtresë kap një lloj tjetër devijimi.

## Shtresat e zakonshme të validimit

### 1. Specifikimi dhe udhëzimi

Shtresa e parë përcakton rregullin.

Pa këtë shtresë, kontrollet e mëvonshme mund të jenë strikte, por arbitrare.

### 2. Rishikim manual

Rishikimi njerëzor kontrollon qëllimin, rastet anësore dhe kuptimin e produktit që mund të mos jenë ende të automatizuara.

### 3. Vleresimi lokal

Skriptet dhe kontrollet e strukturuara kapin shpejt probleme që përsëriten, përpara se ndryshimet të arrijnë te CI.

### 4. Testet

Testet e ekzekutueshme verifikojnë sjelljen e pritshme, por vetëm kur ato janë në përputhje me specifikimet.

### 5. Portat CI

CI i bën kontrollet të përsëritshme dhe të dukshme në të gjithë kontribuesit dhe mjediset.

### 6. Kontrollet e vendosjes

Rrjedhat e punës së vendosjes konfirmojnë se artefaktet e ndërtuara janë ende të botueshme dhe strukturore të shëndosha.

## Si duhet të lidhen shtresat

Shtresat duhet ta përforcojnë njëra-tjetrën në këtë rend:

- dokumentet dhe specifikimet përcaktojnë pritshmëritë
- rishikimi i interpreton ato pritshmëri në kontekst
- skriptet dhe testet e validimit automatizojnë pjesët më të qëndrueshme të rishikimit
- CI i kryen këto kontrolle në mënyrë të qëndrueshme
- vendosja siguron që produkti i përfunduar të mund të publikohet

## Objektiva të mira të validimit të hershëm

Shembuj të kandidatëve të hershëm të fortë përfshijnë:

- prania e skedarit të kërkuar
- plotësia e lokalizimit
- vlefshmëria e sintaksës
- lidhjet e brendshme të prishura
- citate editoriale të ndaluara
- suksesi i gjenerimit të meta të dhënave

Këto kontrolle priren të jenë objektive dhe të lira.

## Let Books kontekst

Depoja e Let Books tashmë dokumenton disa shtresa, duke përfshirë:

- rregullat e produktit dhe zbatimit në `AGENTS.md` dhe `AGENTS-Implementation.md`
- vlefshmëria e zhvillimit dhe vendosjes në `docs/Development.md` dhe `docs/Deployment.md`
- rregullat e provave editoriale në `docs/blog/README.md` dhe `docs/sources/README.md`
- udhëzime mësimore për vendosjen graduale të CI-së dhe të validimit

Kjo e bën validimin një sistem të dokumentuar, jo thjesht një synim për të ardhmen.

## Faqe të ngjashme

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/sq/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/sq/documentation-is-part-of-the-product.md`
