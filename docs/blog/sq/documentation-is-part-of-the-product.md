---
article_id: documentation-is-part-of-the-product
canonical_language: en
language_variants:
  - ../en/documentation-is-part-of-the-product.md
  - ../sl/documentation-is-part-of-the-product.md
  - ../hr/documentation-is-part-of-the-product.md
  - ../bs/documentation-is-part-of-the-product.md
  - ../sr-Latn/documentation-is-part-of-the-product.md
  - ../sr-Cyrl/documentation-is-part-of-the-product.md
  - ../mk/documentation-is-part-of-the-product.md
  - ../sq/documentation-is-part-of-the-product.md
  - ../de/documentation-is-part-of-the-product.md
  - ../it/documentation-is-part-of-the-product.md
  - ../fr/documentation-is-part-of-the-product.md
  - ../es/documentation-is-part-of-the-product.md
title: Dokumentimi është pjesë e produktit
summary: Pse dokumentimi duhet trajtuar si aset operacional që formëson implementimin, rishikimin, hyrjen në projekt dhe besimin te produkti, dhe jo si pastrim i vonshëm pas kodimit.
topics:
  - documentation
  - spec-driven-development
  - product-quality
  - ai-assisted-delivery
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/style-guide/writing/README.md
  - docs/style-guide/publishing/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/documentation-is-part-of-the-product.md
status: draft
---

# Dokumentimi është pjesë e produktit

Shumë ekipe ende flasin për dokumentimin sikur ai të fillojë vetëm pasi të mbarojë puna e vërtetë. Së pari ndërtohet produkti, pastaj dikush shkruan çfarë ndodhi. Ky model ishte i dobët edhe para zhvillimit të ndihmuar nga AI. Me AI bëhet rrezik real.

Kur kodi, teksti, ndërfaqet dhe rrjedhat e punës mund të gjenerohen shumë shpejt, dokumentimi nuk është më vetëm një shtresë e vonshme. Ai bëhet pjesë e mekanizmit që e mban produktin koherent.

## Pse kjo ka edhe më shumë rëndësi tani

AI mund të gjenerojë implementim nga qëllim jo i plotë. Kjo shpesh paraqitet si komoditet. Në praktikë do të thotë se çdo paqartësi në projekt bëhet vend ku produkti mund të devijojë.

Nëse dokumentimi është i dobët ose i vjetruar, njerëz dhe mjete të ndryshme do të nxjerrin produkte të ndryshme nga i njëjti depo.

Një bashkëpunëtor mund të ndjekë ndërfaqen aktuale të përdoruesit.
Një tjetër mund të ndjekë një README të vjetër.
Një asistent AI mund të ndjekë skedarin më të afërt dhe të shpikë pjesën tjetër.

Problemi nuk është vetëm saktësia në nivel kodi. Problemi është nëse projekti vazhdon të përshkruajë një produkt në vend të disa supozimeve që mbivendosen.

## Dokumentimi kryen katër punë produkti

Dokumentimi i mirë bën shumë më tepër sesa të shpjegojë ndërfaqen pas faktit.

Së pari, mban qëllimin. U tregon kontribuesve të ardhshëm se çfarë po përpiqet të arrijë produkti dhe në çfarë shprehimisht nuk po përpiqet të shndërrohet.

Së dyti, vendos pritshmëri. Lexuesit mund të kuptojnë çfarë ekziston tani, çfarë është planifikuar dhe çfarë nuk duhet përshkruar si tashmë e implementuar.

Së treti, ul koston e koordinimit. Kontribuesit e rinj, rishikuesit, institucionet dhe asistentët AI mund të orientohen pa e rindërtuar projektin nga fragmente.

Së katërti, mbështet besimin. Një projekt që ndan qartë gjendjen aktuale, drejtimin e planifikuar dhe rrjedhën eksperimentale të punës është më i lehtë për t'u vlerësuar dhe më i lehtë për t'u mirëmbajtur.

## Let Books tashmë është ndërtuar kështu

Depoja Let Books tashmë e demonstron këtë qasje të shtresëzuar.

- `AGENTS.md` përcakton qëllimin e produktit, rrjedhat e punës, kufijtë e domenit dhe drejtimin afatgjatë.
- `AGENTS-Implementation.md` përcakton rregullat taktike të implementimit dhe dokumentimit.
- `README.md` shpjegon gjendjen aktuale të depos dhe dallon dorëzimet e tanishme nga planet e ardhshme.
- `docs/` përcakton një platformë njohurish me rregulla publikimi, shkrimi, lokalizimi dhe hartëzimi të burimeve.

Kjo do të thotë se dokumentimi këtu nuk është vetëm shpjegim. Ai është pjesë e mënyrës si funksionon projekti.

## Dokumentimi i vjetruar është borxh produkti

Ekipet shpesh e njohin borxhin teknik vetëm kur ai shfaqet në kod. Por dokumentimi i vjetruar krijon një lloj të ngjashëm fërkimi.

Dokumentimi i vjetruar çon në:

- supozime të gabuara implementimi
- përsëritje të vendimeve të marra më parë
- demo që aksidentalisht bëhen e vërteta e produktit
- hyrje më të ngadaltë të bashkëpunëtorëve të rinj
- rishikim më të vështirë sepse standardi nuk është i qartë

Në rrjedha të mbështetura nga AI ky borxh grumbullohet edhe më shpejt, sepse ndihmësit vazhdojnë shumë mirë nga supozime të afërta, edhe kur ato janë të vjetra.

## Dokumentimi dhe implementimi duhet të formojnë zinxhir

Modeli i duhur nuk është një skemë e ngurtë “fillimisht dokumentim, pastaj kod”. Modeli i duhur është një zinxhir i mirëmbajtur:

- specifikimet përcaktojnë qëllimin
- dokumentet e gjendjes aktuale shpjegojnë çfarë ekziston tani
- demoja dhe implementimi e bëjnë rrjedhën konkrete
- testet dhe validimi verifikojnë pritshmëritë
- CI e mban devijimin të dukshëm

Nëse ndryshon një hallkë, duhen rishikuar edhe të tjerat pranë saj.

<!-- semantic-parity: broad-audiences -->
## Pse kjo duhet t'i interesojë një audience më të gjerë

Kjo nuk është vetëm një çështje teknike.

Institucionet duhet të kujdesen për këtë sepse dokumentacioni ndikon te qeverisja, besimi në prokurim, integrimi i njerëzve të rinj, vazhdimësia dhe auditueshmëria.

Studentët duhet të kujdesen për këtë sepse dokumentimi i synimit është pjesë e të mësuarit për të ndërtuar sisteme të besueshme, jo një shtesë administrative.

Lexuesit e përgjithshëm duhet të kujdesen për këtë sepse një produkt me dokumentacion të qartë zakonisht është edhe një produkt me vendime më të qarta pas tij.

<!-- semantic-parity: practical-test -->
## Testi praktik

Një pyetje e dobishme për çdo ekip është e thjeshtë:

Nëse sot një kontribues i ri ose një asistent AI do të hynte në depo, a do ta ndihmonin dokumentet të ndërtonte produktin e synuar, apo kryesisht diçka që duket e besueshme?

<!-- semantic-parity: documentation-as-product-distinction -->
Ky dallim është dallimi midis dokumentacionit si koment dhe dokumentacionit si pjesë e produktit.

## Mësimi i qëndrueshëm

Dokumentimi nuk është i ndarë nga cilësia e produktit.

Ai formëson implementimin, rishikimin, komunikimin, validimin dhe besimin afatgjatë. Në projektet e mbështetura nga AI, dokumentimi është pjesë e produktit sepse është pjesë e sistemit që pengon devijimin e produktit.

## Lexime të lidhura

- `../../wiki/documentation-traceability.md`
- `../../wiki/validation-layers.md`
- `ai-as-an-oracle.md`
- `spec-driven-development-in-let-books.md`

## Gjuhë të tjera

- [English](../en/documentation-is-part-of-the-product.md)
- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
- [Hrvatski](../hr/documentation-is-part-of-the-product.md)
- [Bosanski](../bs/documentation-is-part-of-the-product.md)
- [Srpski (latinica)](../sr-Latn/documentation-is-part-of-the-product.md)
- [Српски (ћирилица)](../sr-Cyrl/documentation-is-part-of-the-product.md)
- [Македонски](../mk/documentation-is-part-of-the-product.md)
- [Deutsch](../de/documentation-is-part-of-the-product.md)
- [Italiano](../it/documentation-is-part-of-the-product.md)
- [Français](../fr/documentation-is-part-of-the-product.md)
- [Español](../es/documentation-is-part-of-the-product.md)
