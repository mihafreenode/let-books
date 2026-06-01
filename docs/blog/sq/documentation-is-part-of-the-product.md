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

## Dokumentimi kryen katër punë produkti

Dokumentimi:

- mban qëllimin
- vendos pritshmëri
- ul koston e koordinimit
- mbështet besimin

Ai u tregon bashkëpunëtorëve, institucioneve, rishikuesve dhe ndihmësve AI çfarë projekti po përpiqet të arrijë dhe çfarë nuk duhet të bëhet.

## Let Books tashmë është ndërtuar kështu

Në depon Let Books:

- `AGENTS.md` përcakton qëllimin e produktit dhe rrjedhat e punës
- `AGENTS-Implementation.md` përcakton rregullat taktike të zbatimit
- `README.md` përshkruan me ndershmëri gjendjen aktuale
- `docs/` përcakton rregullat e publikimit, shkrimit, lokalizimit dhe evidencës

Kjo do të thotë se dokumentimi këtu nuk është vetëm shpjegim. Ai është pjesë e mënyrës si funksionon projekti.

## Dokumentimi i vjetruar është borxh produkti

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

## Mësimi i qëndrueshëm

Dokumentimi nuk është i ndarë nga cilësia e produktit. Ai formëson implementimin, rishikimin, komunikimin, validimin dhe besimin afatgjatë. Në projektet e mbështetura nga AI, dokumentimi është pjesë e produktit sepse është pjesë e sistemit që pengon devijimin e produktit.

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
