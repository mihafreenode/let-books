---
title: "Shtresat e Validimit"
summary: >-
  Shtresat e vlefshmërisë janë mënyrat e ndryshme se si një projekt kontrollon nëse objektet e zbatimit, dokumentacionit dhe dorëzimit përputhen ende me rregullat e synuara dhe pritshmëritë e cilësisë.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Shtresat e Validimit

## Përmbledhje

Shtresat e vlefshmërisë janë mënyrat e ndryshme se si një projekt kontrollon nëse objektet e zbatimit, dokumentacionit dhe dorëzimit përputhen ende me rregullat e synuara dhe pritshmëritë e cilësisë.

## Pse shtresat kanë rëndësi

Asnjë metodë e vetme e vërtetimit nuk është e mjaftueshme.

- vetëm dokumentacioni nuk e detyron sjelljen
- vetëm testet mund të vërtetojnë supozimet e gabuara
- CI i vetëm nuk mund të përcaktojë rregullat që supozohet të zbatojë

Një qasje e shtresuar është më e fortë sepse çdo shtresë kap një klasë të ndryshme zhvendosjeje.

## Shtresat e zakonshme të vërtetimit

### 1. Specifikimi dhe udhëzimi

Shtresa e parë përcakton rregullin.

Pa këtë shtresë, kontrollet e mëvonshme mund të jenë strikte, por arbitrare.

### 2. Rishikim manual

Rishikimi njerëzor kontrollon qëllimin, rastet anësore dhe kuptimin e produktit që mund të mos jenë ende të automatizuara.

### 3. Vleresimi lokal

Skriptet dhe kontrollet e strukturuara kapin probleme të shpejta dhe të përsëritshme përpara se ndryshimet të arrijnë CI.

### 4. Testet

Testet e ekzekutueshme verifikojnë sjelljen e pritshme, por vetëm kur ato janë në përputhje me specifikimet.

### 5. Portat CI

CI i bën kontrollet të përsëritshme dhe të dukshme në të gjithë kontribuesit dhe mjediset.

### 6. Kontrollet e vendosjes

Rrjedhat e punës së vendosjes konfirmojnë se artefaktet e ndërtuara janë ende të botueshme dhe strukturore të shëndosha.

## Si duhet të lidhen shtresat

Shtresat duhet të përforcojnë njëra-tjetrën sipas rendit:

- Dokumentet dhe specifikat përcaktojnë pritshmëritë
- rishikimi i interpreton ato pritshmëri në kontekst
- Skriptet dhe testet e vlefshmërisë automatizojnë pjesë të qëndrueshme të rishikimit
- CI i kryen ato kontrolle në mënyrë të vazhdueshme
- vendosja siguron që produkti të mund të dërgohet

## Objektiva të mira të vërtetimit të hershëm

Shembuj të kandidatëve të hershëm të fortë përfshijnë:

- prania e skedarit të kërkuar
- plotësia e lokalizimit
- vlefshmëria sintaksore
- lidhjet e brendshme të prishura
- citate editoriale të ndaluara
- suksesi i gjenerimit të meta të dhënave

Këto kontrolle priren të jenë objektive dhe të lira.

## Let Books kontekst

Depoja e Let Books tashmë dokumenton disa shtresa, duke përfshirë:

- rregullat e produktit dhe zbatimit në `AGENTS.md` dhe `AGENTS-Implementation.md`
- vlefshmëria e zhvillimit dhe vendosjes në `docs/Development.md` dhe `docs/Deployment.md`
- rregullat e provave editoriale në `docs/blog/README.md` dhe `docs/sources/README.md`
- Udhëzimet e të mësuarit për CI të shkallëzuar dhe prezantimin e vlefshmërisë

Kjo e bën vërtetimin një sistem të dokumentuar dhe jo vetëm një aspiratë të së ardhmes.

## Faqe të ngjashme

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/sq/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/sq/documentation-is-part-of-the-product.md`