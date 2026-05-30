---
title: "Shtresat e validimit"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Shtresat e validimit

## Përmbledhje

Shtresat e validimit janë mënyrat e ndryshme me të cilat një projekt kontrollon nëse implementimi, dokumentacioni dhe artefaktet e dorëzimit përputhen ende me rregullat e synuara dhe pritjet e cilësisë.

## Pse shtresat kanë rëndësi

Asnjë metodë e vetme validimi nuk mjafton.

- vetëm dokumentacioni nuk e zbaton sjelljen
- vetëm testet mund të vërtetojnë supozime të gabuara
- vetëm CI nuk mund të përcaktojë rregullat që duhet të zbatojë

Një qasje me shtresa është më e fortë sepse secila shtresë kap një klasë tjetër devijimi.

## Shtresa të zakonshme validimi

### 1. Specifikimi dhe udhëzimet

Shtresa e parë përcakton rregullin.

Pa këtë shtresë, kontrollimet e mëvonshme mund të jenë të rrepta por arbitrare.

### 2. Rishikimi manual

Rishikimi njerëzor kontrollon qëllimin, rastet skajore dhe kuptimin e produktit që mund të mos jenë ende të automatizuara.

### 3. Validimi lokal

Skriptet dhe kontrollimet e strukturuara kapin shpejt çështje të përsëritshme para se ndryshimet të arrijnë te CI.

### 4. Testet

Testet e ekzekutueshme verifikojnë sjelljen e pritur, por vetëm kur janë në përputhje me specifikimin.

### 5. Portat e CI-së

CI i bën kontrollimet të përsëritshme dhe të dukshme përtej kontribuesve dhe mjediseve.

### 6. Kontrollimet e vendosjes

Rrjedhat e vendosjes konfirmojnë se artefaktet e ndërtuara mbeten të botueshme dhe strukturalisht të shëndosha.

## Si duhet të lidhen shtresat

Shtresat duhet ta përforcojnë njëra-tjetrën me radhë:

- dokumentet dhe specifikimet përcaktojnë pritjet
- rishikimi i interpreton këto pritje në kontekst
- skriptet e validimit dhe testet automatizojnë pjesët e qëndrueshme të rishikimit
- CI i ekzekuton këto kontrollime në mënyrë të qëndrueshme
- vendosja siguron që rezultati mund të dorëzohet realisht

## Objektiva të mira për validim të hershëm

Shembuj të kandidatëve të fortë për fillim përfshijnë:

- praninë e skedarëve të detyrueshëm
- plotësinë e lokalizimit
- vlefshmërinë sintaksore
- lidhje të brendshme të prishura
- citime editoriale të ndaluara
- gjenerim të suksesshëm të metadatave

Këto kontrollime priren të jenë objektive dhe jo të kushtueshme.

## Konteksti Let Books

Depoja e Let Books tashmë dokumenton disa shtresa, duke përfshirë:

- rregullat e produktit dhe implementimit në `AGENTS.md` dhe `AGENTS-Implementation.md`
- validimin e zhvillimit dhe vendosjes në `docs/Development.md` dhe `docs/Deployment.md`
- rregullat editoriale të provave në `docs/blog/README.md` dhe `docs/sources/README.md`

Kjo e bën validimin një sistem të dokumentuar dhe jo vetëm një aspiratë të ardhshme.

## Faqe Të Lidhura

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../learning/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../blog/en/documentation-is-part-of-the-product.md`
