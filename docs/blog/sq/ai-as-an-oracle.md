---
article_id: ai-as-an-oracle
canonical_language: en
language_variants:
  - ../en/ai-as-an-oracle.md
  - ../sl/ai-as-an-oracle.md
  - ../hr/ai-as-an-oracle.md
  - ../bs/ai-as-an-oracle.md
  - ../sr-Latn/ai-as-an-oracle.md
  - ../sr-Cyrl/ai-as-an-oracle.md
  - ../mk/ai-as-an-oracle.md
  - ../sq/ai-as-an-oracle.md
  - ../de/ai-as-an-oracle.md
  - ../it/ai-as-an-oracle.md
  - ../fr/ai-as-an-oracle.md
  - ../es/ai-as-an-oracle.md
title: AI si orakull: pse kultura e verifikimit ka më shumë rëndësi se prompting-u
summary: Një model i dobishëm inxhinierik për AI nuk është koleg apo zëvendësim, por orakull: i dobishëm, i paqartë nga brenda dhe gjithmonë për t'u verifikuar.
topics:
  - ai-assisted-workflows
  - verification
  - documentation
  - spec-driven-development
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - docs/wiki/ai-assisted-knowledge-work.md
  - docs/wiki/spec-driven-development.md
  - docs/wiki/documentation-traceability.md
  - docs/wiki/validation-layers.md
  - docs/wiki/localization-governance.md
  - docs/wiki/let-books-localization-case-study.md
sources:
  - ../../sources/sq/ai-as-an-oracle.md
status: draft
---

# AI si orakull: pse kultura e verifikimit ka më shumë rëndësi se prompting-u

AI përshkruhet shpesh si mjet, asistent, koleg ose zëvendësim. Këto metafora nuk janë krejt të padobishme, por shpesh i shtyjnë inxhinierët drejt zakonit të gabuar. Ato e zhvendosin vëmendjen te delegimi, shpejtësia e përgjigjeve dhe ndjenja e produktivitetit, në vend që te verifikimi i rezultateve.

Një model më i dobishëm inxhinierik është ai i orakullit.

Qëllimi i kësaj analogjie nuk është mistika. Është disiplina operative.

## Çfarë është një orakull

Në shkencën teorike kompjuterike, një orakull është një kuti e zezë hipotetike që mund t'i përgjigjet një klase të caktuar pyetjesh pa zbuluar se si arriti te përgjigjja.

Në kriptografi, fjala përdoret në mënyrë më praktike për shërbime të ngjashme me orakullin, si orakujt e enkriptimit ose dekriptimit. Përdoruesi mund të dërgojë një hyrje dhe të vëzhgojë daljen, ndërsa mekanizmi i brendshëm mbetet i fshehur.

Një LLM nuk është fjalë për fjalë një orakull formal në asnjërin prej këtyre kuptimeve. Ai nuk është pjesë e një modeli prove dhe nuk është një primitiv kriptografik i kufizuar qartë.

Por nga këndvështrimi inxhinierik, në praktikë shpesh funksionon si orakull:

- bën një pyetje
- merr një përgjigje të besueshme në dukje
- brendësia e sistemit mbetet kryesisht e paqartë
- përgjigjja mund të jetë e dobishme pa qenë e besueshme

Pikërisht kjo pikë e fundit ka më shumë rëndësi.

## Pse analogjia e orakullit është më e mirë

Modeli i orakullit e drejton vëmendjen te pyetjet e duhura inxhinierike.

Modeli është i paqartë. Edhe kur dimë diçka për të dhënat e trajnimit, marrjen e kontekstit, mjetet ose dizajnin më të gjerë të sistemit, zakonisht nuk kemi një shpjegim të besueshëm pse u shfaq pikërisht ajo përgjigje.

Përgjigjet mund të jenë të vlefshme, por nuk janë të garantuara si të sakta. Ato mund të jenë të paplota, tepër të sigurta në vetvete, të ndjeshme ndaj kontekstit ose gabimisht subtile, dhe gabime të tilla shpesh zbulohen vetëm më vonë.

Kjo do të thotë se daljet duhen trajtuar si hipoteza, jo si fakte.

Do të thotë gjithashtu se verifikimi nuk është hap i mëvonshëm. Ai është pjesë e vetë rrjedhës së punës.

Këtu qëndron ndryshimi i vërtetë kulturor. Problemi nuk është se inxhinierët kanë nevojë për teknika më të mira prompting-u. Problemi është se shumë ekipe ende nuk kanë një kulturë të fortë verifikimi për punën e ndihmuar nga AI.

## Kulturë verifikimi, jo kulturë prompting-u

Prompting-u ka rëndësi, por nuk është qendra e problemit.

Një pyetje e ngushtë dhe e kufizuar mirë është e dobishme sepse e bën verifikimin më të lehtë.

Një prompt tepër i gjerë është i rrezikshëm sepse nxit besim të tepërt te përgjigjja.

Nëse një ekip e sheh ndërveprimin me AI kryesisht si aftësi prompting-u, ai zakonisht do të optimizojë për rrjedhshmëri, shpejtësi, ton të sigurt dhe pamje të plotësisë.

- rrjedhshmëri
- shpejtësi
- ton të sigurt
- pamje të plotësisë

Nëse, përkundrazi, e sheh AI si përdorim të një orakulli, ai do të optimizojë për pyetje të qarta, shtrirje të kufizuar, supozime të shprehura qartë, kontrolle të pavarura, arsyetim të ruajtur dhe validim të përsëritshëm.

- pyetje të qarta
- shtrirje të kufizuar
- supozime të shprehura qartë
- kontrolle të pavarura
- arsyetim të ruajtur
- validim të përsëritshëm

Lista e dytë është shumë më afër disiplinës reale inxhinierike.

## Si duket kjo në praktikë

### Zhvillimi i drejtuar nga specifikimet

Zhvillimi i drejtuar nga specifikimet niset pikërisht nga ideja se dalje e shpejtë nuk do të thotë dalje e saktë. Një specifikim i shkruar përcakton qëllimin, kufijtë, rrjedhat e punës dhe kriteret e pranimit përpara se një dalje e gjeneruar të trajtohet si ndryshim i vlefshëm.

Kjo është disiplina e orakullit. Përgjigjja duhet kontrolluar kundrejt një standardi të përcaktuar më parë.

### Puna njohëse e ndihmuar nga AI

Puna njohëse e ndihmuar nga AI bëhet më e besueshme kur rreth modelit ekzistojnë artefakte të qëndrueshme, rishikim i qartë dhe standarde të gjurmueshme. Vetëm biseda nuk është burim i qëndrueshëm i së vërtetës.

### Qeverisja e dokumentacionit

Ekipet e mira ndajnë specifikimin e produktit, udhëzimet e implementimit, dokumentacionin publik, hartat e burimeve dhe artefaktet e gjeneruara. Kjo ndarje ka rëndësi sepse pengon që një përgjigje bindëse të bëhet në heshtje e vërtetë e pranuar.

### Validatorët dhe testet

Ekipet shtojnë validatorë sepse kujtesa dhe vetëbesimi i tepruar janë kontrolle të dobëta. Kontrollet e lidhjeve, kontrollet strukturore, kontrollet e barazisë semantike, gjenerimi i metadata-ve, testet dhe validatorët e publikimit e kthejnë verifikimin në infrastrukturë.

### Ruajtja e kontekstit dhe arsyetimit

Një përgjigje e dobishme nga orakulli ende nuk mjafton vetë. Nëse puna duhet t'i mbijetojë kohës dhe ndryshimeve të ekipit, supozimet, provat, shënimet e rishikimit dhe arsyet për ta pranuar ose refuzuar përgjigjen duhet të mbeten të dukshme.

### Lokalizimi dhe barazia semantike

Lokalizimi është shembull i mirë pse verifikimi ka rëndësi. Një përkthim mund të duket i rrjedhshëm dhe megjithatë të dështojë në modalitet, terminologji, saktësi Unicode, tekst aksesueshmërie ose barazi semantike me burimin. Në këtë rrjedhë, dalja e AI nuk është e vërtetë për botim. Është një draft që duhet rishikuar.

## Shembuj konkretë

Modeli i orakullit bëhet më i qartë kur pyetjet bëhen konkrete.

### Kur i kërkon AI të shpjegojë kodin

Një LLM mund të shpjegojë shpejt dhe me kuptim një funksion, një rrjedhë të dhënash ose një bug.

Duhet verifikuar:

- nëse shpjegimi përputhet me rrugën reale të kodit
- nëse janë lënë jashtë rastet kufitare
- nëse përgjigjja ngatërron sjelljen aktuale me sjelljen e synuar
- nëse injoron specifikimet, testet ose komentet përreth

Kontroll i dobishëm:

- lexo kodin e cituar
- krahaso përgjigjen me testet ekzistuese
- kontrollo nëse shpjegimi përputhet me rrjedhën e dokumentuar

### Kur i kërkon AI të shkruajë një validator

Një LLM mund të prodhojë një validator që duket i pastër dhe bindës.

Duhet verifikuar:

- nëse kontrollon rregullin real ose vetëm një afrim të thjeshtuar
- nëse krijon një ndjenjë të rreme sigurie
- nëse mungojnë raste të rëndësishme gabimi
- nëse kodon saktë rregullin e dokumentuar

Kontroll i dobishëm:

- përgatit raste testimi pozitive dhe negative
- ekzekuto validatorin mbi dështime të njohura
- kontrollo nëse mbron vërtet klasën e defektit që të intereson

### Kur i kërkon AI të përkthejë dokumentacion

Një LLM mund të prodhojë shpejt një përkthim të lëmuar.

Duhet verifikuar:

- barazia semantike me burimin
- qëndrueshmëria terminologjike
- saktësia e shkrimit dhe Unicode-it
- etiketat e aksesueshmërisë dhe metadata-t
- nëse shembujt, lidhjet e ngjashme dhe materialet mbështetëse mbeten të harmonizuara

Kontroll i dobishëm:

- ekzekuto validatorët e lokalizimit dhe të paritetit
- krahaso strukturën e seksioneve mes burimit dhe gjuhës së synuar
- siguro rishikim nga një folës amtare për materialin e rëndësishëm

### Kur i kërkon AI të propozojë arkitekturë

Një LLM mund të propozojë një arkitekturë me shtresa, ndarje shërbimesh ose model integrimi që tingëllon i arsyeshëm.

Duhet verifikuar:

- nëse përputhet me shtrirjen reale të produktit
- nëse respekton kufizime të panegociueshme
- nëse shton kompleksitet të panevojshëm
- nëse presupozon infrastrukturë, buxhete ose pjekuri operative që nuk ekzistojnë

Kontroll i dobishëm:

- krahaso propozimin me specifikimin e produktit
- provoje kundrejt kufijve të shtrirjes dhe kritereve të pranimit
- shkruaj kompromiset përpara se ta pranosh

## Si duket verifikimi në praktikë

Verifikimi nuk do të thotë gjithmonë provë formale. Në punën reale inxhinierike zakonisht do të thotë kombinim i disa kontrolleve më të dobëta, por të dobishme.

- krahasoje përgjigjen me specifikimin
- kontrollo skedarët përkatës
- ekzekuto testet
- ekzekuto validatorët
- kontrollo lidhjet dhe artefaktet e gjeneruara
- ruaj shënimet e rishikimit dhe arsyetimin
- bëj një pyetje pasuese më të ngushtë kur përgjigjja e parë është tepër e gjerë

Pikërisht për këtë arsye kultura e verifikimit shkallëzohet më mirë se aftësia për të shkruar prompt-e. Ajo krijon pika kontrolli të ripërdorshme që mbijetojnë përtej bisedave të veçanta.

## Përfundim praktik

- Bëj pyetje të kufizuara.
- Regjistro supozimet.
- Verifiko pretendimet.
- Përdor teste dhe validatorë.
- Ruaj arsyetimin.
- Trajto daljen e AI si provë, jo si të vërtetë.

## Përfundim

AI nuk është as koleg dhe as motor kërkimi.

Ai është më afër një orakulli: një kuti e zezë që mund t'u përgjigjet pyetjeve çuditërisht të vështira, me kusht që të pyesësh me kujdes dhe t'i verifikosh përgjigjet.

Sfida e inxhinierisë së ndihmuar nga AI nuk është të mësosh si ta përdorësh orakullin. Është të mësosh si të mos i besosh tepër.

## Lexime të lidhura

- `../../wiki/ai-assisted-knowledge-work.md`
- `../../wiki/spec-driven-development.md`
- `../../wiki/validation-layers.md`
- `../../wiki/documentation-traceability.md`
- `../../wiki/localization-governance.md`
- `../../wiki/let-books-localization-case-study.md`
- `ai-workflows-beyond-software.md`
- `spec-driven-development-for-ai-projects.md`
- `documentation-is-part-of-the-product.md`

## Gjuhë të tjera

- [Deutsch](../de/ai-as-an-oracle.md)
- [Italiano](../it/ai-as-an-oracle.md)
- [Français](../fr/ai-as-an-oracle.md)
- [Español](../es/ai-as-an-oracle.md)
- [Slovenščina](../sl/ai-as-an-oracle.md)
- [Hrvatski](../hr/ai-as-an-oracle.md)
- [Bosanski](../bs/ai-as-an-oracle.md)
- [Srpski (latinica)](../sr-Latn/ai-as-an-oracle.md)
- [Српски (ћирилица)](../sr-Cyrl/ai-as-an-oracle.md)
- [Македонски](../mk/ai-as-an-oracle.md)
