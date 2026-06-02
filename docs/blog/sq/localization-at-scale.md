---
article_id: localization-at-scale
canonical_language: en
language_variants:
  - ../en/localization-at-scale.md
  - ../sl/localization-at-scale.md
  - ../hr/localization-at-scale.md
  - ../bs/localization-at-scale.md
  - ../sr-Latn/localization-at-scale.md
  - ../sr-Cyrl/localization-at-scale.md
  - ../mk/localization-at-scale.md
  - ../sq/localization-at-scale.md
  - ../de/localization-at-scale.md
  - ../it/localization-at-scale.md
  - ../fr/localization-at-scale.md
  - ../es/localization-at-scale.md
title: Lokalizimi në shkallë të gjerë
summary: Pse lokalizimi duhet trajtuar si një sistem inxhinierik, i aksesueshmërisë, i qeverisjes dhe i edukimit, jo si një detyrë e vonë përkthimi.
topics:
  - localization
  - engineering-systems
  - governance
  - continuous-localization
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/sq/localization-at-scale.md
status: draft
---

# Lokalizimi në shkallë të gjerë

Shumë projekte softuerike ende e trajtojnë lokalizimin si momentin kur teksti përfundimtar në anglisht u dërgohet përkthyesve. Për softuerin modern me interes publik, ky model është tepër i ngushtë.

Lokalizimi në shkallë të gjerë është një sistem. Ai përfshin shkrimin burimor, terminologjinë, diagramet, tekstet e aksesueshmërisë, metadata-t gjuhësore, pamjet e ekranit, rishikimin, QA, CI, qeverisjen dhe mirëmbajtjen afatgjatë.

## Dështimi i zakonshëm

Dështimi më i zakonshëm është pritja e tepërt.

Kur një projekt vendos të mbështesë shumë gjuhë, arkitektura e informacionit, navigimi, pamjet e ekranit dhe supozimet e testimit shpesh janë formuar tashmë vetëm për anglishten. Atëherë përkthimi bëhet i kushtueshëm sepse sistemi nuk është projektuar kurrë për të mbajtur mirë më shumë se një gjuhë.

## Pse problemi nuk është vetëm përkthimi

Një përdorues shumëgjuhësh nuk lexon vetëm etiketat e butonave. Ai përjeton edhe:

- navigimin
- validimin e formularëve
- pamjet e ekranit
- diagramet
- tekstin alternativ
- titrat
- shembujt edukativë
- ndërrimin e gjuhës në lexuesit e ekranit

Nëse këto mbeten vetëm në anglisht, produkti nuk është i lokalizuar në mënyrë domethënëse.

## Pse kjo ka rëndësi për Let Books

Let Books është projektuar shprehimisht për koleksione shumëgjuhëshe librash arsimorë dhe akademikë në Slloveni, në vendet e ish-Jugosllavisë dhe në rajonin më të gjerë. Projekti tashmë përmend anglishten, sllovenishten, kroatishten, boshnjakishten, serbishten latine, serbishten cirilike, maqedonishten, shqipen, gjermanishten, frëngjishten, italishten dhe spanjishten si gjuhë objektiv.

Kjo do të thotë se lokalizimi nuk është një shtresë përfundimtare opsionale. Ai është pjesë e vetë përkufizimit të produktit.

## Një model praktik

Një model praktik për lokalizim në shkallë të gjerë zakonisht ka pesë shtresa.

1. shkruaj burimin në mënyrë të përshtatshme për përkthim
2. përcakto terminologjinë dhe rregullat e qeverisjes
3. gjenero ose mirëmbaj variante të strukturuara gjuhësore
4. kontrollo lidhjet, shenjat rezervë, Unicode-in dhe aksesueshmërinë
5. përmirëso përkthimet me faza në vend që të pretendosh se janë menjëherë të përsosura

## Roli i AI-së

AI ndihmon. Ajo ul koston e drafteve të para, zbulimit të devijimeve terminologjike dhe zgjerimit të mbulimit të dokumentacionit. Por nuk e heq nevojën për rishikim, kontrolle të aksesueshmërisë dhe gjykim gjuhësor.

Për këtë arsye sistemet e pjekura të lokalizimit po bëhen gjithnjë e më shumë të ndihmuara nga AI, jo vetëm AI.

## Përfundim i qëndrueshëm

Nëse një projekt dëshiron pjesëmarrje shumëgjuhëshe, lokalizimi duhet të jetë pjesë e dizajnit të sistemit, jo një hap i vonë eksporti.

## Faqe të lidhura

- `../../wiki/localization-at-scale.md`
- `../../wiki/localization-maturity-model.md`
- `../../learning/how-to-build-a-localization-pipeline.md`

## Gjuhë të tjera

Anglishtja është gjuha kanonike e botimit të parë të këtij artikulli. Rrugët e gatshme për përkthim janë rezervuar për të gjitha lokalizimet e mbështetura të Let Books.
