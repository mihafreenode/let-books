---
article_id: documentation-is-part-of-the-product
canonical_language: sl
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
title: Dokumentacija je del izdelka
summary: Zakaj je treba dokumentacijo obravnavati kot operativno sredstvo, ki oblikuje implementacijo, pregled, uvajanje in zaupanje v izdelek, ne pa kot naknadno pospravljanje po kodiranju.
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
  - ../../sources/sl/documentation-is-part-of-the-product.md
status: draft
---

# Dokumentacija je del izdelka

Mnoge ekipe še vedno govorijo o dokumentaciji, kot da se začne šele po pravem delu. Najprej se izdelek zgradi, nato nekdo opiše, kaj se je zgodilo. Ta model je bil šibek že pred AI-podprtim razvojem. Z AI postane dejansko tvegan.

Ko lahko kodo, besedilo, vmesnike in delovne tokove ustvarjamo zelo hitro, dokumentacija ni več le prijeten naknadni sloj. Postane del mehanizma, ki izdelek drži skupaj.

## Zakaj je to danes še pomembnejše

AI lahko generira implementacijo iz nepopolnega namena. To se pogosto predstavlja kot priročnost. V praksi pa pomeni, da vsaka nejasnost v projektu postane prostor, kjer lahko izdelek odtava.

Če je dokumentacija šibka ali zastarela, bodo različni ljudje in različna orodja iz istega repozitorija razbrali različne izdelke.

## Dokumentacija opravlja štiri produktne naloge

Dokumentacija:

- nosi namen
- postavlja pričakovanja
- zmanjšuje strošek usklajevanja
- podpira zaupanje

Pove sodelavcem, institucijam, pregledovalcem in AI pomočnikom, kaj projekt skuša doseči in česa ne sme postati.

## Let Books je že zgrajen tako

V repozitoriju Let Books:

- `AGENTS.md` določa produktni namen in delovne tokove
- `AGENTS-Implementation.md` določa taktična pravila izvedbe
- `README.md` pošteno opiše trenutno stanje
- `docs/` določa pravila objave, pisanja, lokalizacije in dokazov

To pomeni, da dokumentacija tukaj ni le razlaga. Je del načina delovanja projekta.

## Zastarela dokumentacija je produktni dolg

Zastarela dokumentacija vodi v:

- napačne predpostavke implementacije
- ponavljanje že sprejetih odločitev
- demo, ki po nesreči postane produktna resnica
- počasnejše uvajanje novih sodelavcev
- težji pregled, ker standard ni jasen

V AI-podprtih tokovih se ta dolg kopiči še hitreje, ker pomočniki zelo dobro nadaljujejo iz bližnjih, tudi zastarelih predpostavk.

## Dokumentacija in implementacija morata tvoriti verigo

Pravi model ni toga shema »najprej dokumentacija, potem koda«. Pravi model je vzdrževana veriga:

- specifikacije določajo namen
- dokumenti trenutnega stanja pojasnijo, kaj obstaja zdaj
- demo in implementacija naredita tok konkreten
- testi in validacija preverjajo pričakovanja
- CI ohranja odmik viden

Če se spremeni en člen, je treba pregledati tudi okoliške.

## Trajna lekcija

Dokumentacija ni ločena od kakovosti izdelka. Oblikuje implementacijo, pregled, komunikacijo, validacijo in dolgoročno zaupanje. V AI-podprtih projektih je dokumentacija del izdelka, ker je del sistema, ki preprečuje produktni odmik.

## Drugi jeziki

- [English](../en/documentation-is-part-of-the-product.md)
- [Hrvatski](../hr/documentation-is-part-of-the-product.md)
- [Bosanski](../bs/documentation-is-part-of-the-product.md)
- [Srpski (latinica)](../sr-Latn/documentation-is-part-of-the-product.md)
- [Српски (ћирилица)](../sr-Cyrl/documentation-is-part-of-the-product.md)
- [Македонски](../mk/documentation-is-part-of-the-product.md)
- [Shqip](../sq/documentation-is-part-of-the-product.md)
- [Deutsch](../de/documentation-is-part-of-the-product.md)
- [Italiano](../it/documentation-is-part-of-the-product.md)
- [Français](../fr/documentation-is-part-of-the-product.md)
- [Español](../es/documentation-is-part-of-the-product.md)
