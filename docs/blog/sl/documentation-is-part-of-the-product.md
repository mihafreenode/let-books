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

Mnoge ekipe še vedno govorijo o dokumentaciji, kot da se začne šele po pravem delu. Najprej se izdelek zgradi, nato nekdo opiše, kaj se je zgodilo. Ta model je bil šibek že pred AI-podprtim razvojem. Z AI postane dejavno tvegan.

Ko lahko kodo, besedilo, vmesnike in delovne tokove ustvarjamo zelo hitro, dokumentacija ni več le prijeten naknadni sloj. Postane del mehanizma, ki izdelek drži skupaj.

## Zakaj je to danes še pomembnejše

AI lahko generira implementacijo iz nepopolnega namena. To se pogosto predstavlja kot priročnost. V praksi pa pomeni, da vsaka nejasnost v projektu postane prostor, kjer lahko izdelek odtava.

Če je dokumentacija šibka ali zastarela, bodo različni ljudje in različna orodja iz istega repozitorija razbrali različne izdelke.

En sodelavec lahko sledi trenutnemu uporabniškemu vmesniku.
Drugi lahko sledi staremu README-ju.
AI pomočnik lahko sledi najbližji datoteki in si ostalo izmisli.

Težava ni le pravilnost na ravni kode. Težava je, ali projekt še vedno opisuje en sam izdelek namesto več prekrivajočih se ugibanj.

## Dokumentacija opravlja štiri produktne naloge

Dobra dokumentacija opravi veliko več kot le to, da naknadno razloži vmesnik.

Prvič, nosi namen. Prihodnjim sodelavcem pove, kaj produkt skuša doseči in kaj izrecno ne želi postati.

Drugič, postavlja pričakovanja. Bralci lahko razberejo, kaj obstaja zdaj, kaj je načrtovano in česa ne bi smeli opisovati, kot da je že implementirano.

Tretjič, zmanjšuje strošek usklajevanja. Novi sodelavci, pregledovalci, institucije in AI pomočniki se lahko orientirajo, ne da bi projekt sestavljali iz drobcev.

Četrtič, podpira zaupanje. Projekt, ki jasno ločuje trenutno stanje, načrtovano smer in eksperimentalni delovni tok, je lažje ocenjevati in lažje vzdrževati.

## Let Books je že zgrajen tako

Repozitorij Let Books že kaže tak večplasten pristop.

- `AGENTS.md` določa produktni namen, delovne tokove, meje domene in dolgoročno smer.
- `AGENTS-Implementation.md` določa taktična implementacijska in dokumentacijska pravila.
- `README.md` razloži trenutno stanje repozitorija in loči sedanje rezultate od prihodnjih načrtov.
- `docs/` določa platformo znanja s pravili za objavljanje, pisanje, lokalizacijo in preslikavo virov.

To pomeni, da dokumentacija tukaj ni le razlaga. Je del načina, kako projekt deluje.

## Zastarela dokumentacija je produktni dolg

Ekipe tehnični dolg pogosto prepoznajo šele, ko se pojavi v kodi. Toda zastarela dokumentacija ustvarja zelo podoben upor.

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

<!-- semantic-parity: broad-audiences -->
## Zakaj bi to moralo zanimati širše občinstvo

To ni samo tehnično vprašanje.

Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.

Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.

Splošne bralce bi to moralo zanimati, ker je izdelek z jasno dokumentacijo navadno tudi izdelek z bolj jasnimi odločitvami v ozadju.

<!-- semantic-parity: practical-test -->
## Praktični preizkus

Uporabno vprašanje za vsako ekipo je preprosto:

Če bi danes v repozitorij vstopil nov sodelavec ali AI pomočnik, bi mu dokumenti pomagali zgraditi nameravani izdelek ali predvsem nekaj, kar se zdi verjetno?

<!-- semantic-parity: documentation-as-product-distinction -->
Ta razlika je razlika med dokumentacijo kot komentarjem in dokumentacijo kot delom izdelka.

## Trajna lekcija

Dokumentacija ni ločena od kakovosti izdelka.

Oblikuje implementacijo, pregled, komunikacijo, validacijo in dolgoročno zaupanje. Še posebej v AI-podprtih projektih je dokumentacija del izdelka, ker je del sistema, ki preprečuje, da bi izdelek sam od sebe odtaval.

## Drugi jeziki

- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
- [English](../sl/documentation-is-part-of-the-product.md)
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
