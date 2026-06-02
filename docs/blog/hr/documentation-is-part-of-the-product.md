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
title: Dokumentacija je dio proizvoda
summary: Zašto dokumentaciju treba tretirati kao operativno sredstvo koje oblikuje implementaciju, pregled, uvođenje i povjerenje u proizvod, a ne kao naknadno sređivanje nakon kodiranja.
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
  - ../../sources/hr/documentation-is-part-of-the-product.md
status: draft
---

# Dokumentacija je dio proizvoda

Mnogi timovi još uvijek govore o dokumentaciji kao da počinje tek nakon pravog posla. Najprije se proizvod izgradi, a zatim netko napiše što se dogodilo. Taj je model bio slab i prije razvoja uz pomoć AI-ja. S AI-jem postaje stvarni rizik.

Kad se kod, tekst, sučelja i tijekovi rada mogu generirati vrlo brzo, dokumentacija više nije samo naknadni sloj. Postaje dio mehanizma koji održava proizvod koherentnim.

## Zašto je to sada još važnije

AI može generirati implementaciju iz nepotpune namjere. To se često predstavlja kao praktičnost. U praksi to znači da svaka nejasnoća u projektu postaje mjesto na kojem proizvod može odlutati.

Ako je dokumentacija slaba ili zastarjela, različiti ljudi i različiti alati iz istog repozitorija zaključit će da postoje različiti proizvodi.

Jedan suradnik može slijediti trenutačno korisničko sučelje.
Drugi može slijediti stari README.
AI pomoćnik može slijediti najbližu datoteku i izmisliti ostalo.

Problem nije samo ispravnost na razini koda. Problem je opisuje li projekt još uvijek jedan proizvod umjesto više preklapajućih nagađanja.

## Dokumentacija obavlja četiri proizvodna posla

Dobra dokumentacija čini mnogo više od toga da naknadno objasni sučelje.

Prvo, nosi namjeru. Budućim suradnicima govori što proizvod pokušava postići i u što se izričito ne pokušava pretvoriti.

Drugo, postavlja očekivanja. Čitatelji mogu razabrati što postoji sada, što je planirano i što se ne bi smjelo opisivati kao već implementirano.

Treće, smanjuje trošak usklađivanja. Novi suradnici, recenzenti, institucije i AI pomoćnici mogu se svi orijentirati bez rekonstruiranja projekta iz fragmenata.

Četvrto, podupire povjerenje. Projekt koji jasno razdvaja trenutačno stanje, planirani smjer i eksperimentalni tijek rada lakše je vrednovati i lakše održavati.

## Let Books je već strukturiran tako

Repozitorij Let Books već pokazuje takav slojeviti pristup.

- `AGENTS.md` definira svrhu proizvoda, tijekove rada, granice domene i dugoročni smjer.
- `AGENTS-Implementation.md` definira taktička pravila implementacije i dokumentacije.
- `README.md` objašnjava trenutačno stanje repozitorija i razlikuje sadašnje isporuke od budućih planova.
- `docs/` definira platformu znanja s pravilima objave, pisanja, lokalizacije i mapiranja izvora.

To znači da dokumentacija ovdje nije samo objašnjenje. Ona je dio načina rada projekta.

## Zastarjela dokumentacija je proizvodni dug

Timovi često prepoznaju tehnički dug tek kada se pojavi u kodu. Ali zastarjela dokumentacija stvara sličnu vrstu trenja.

Zastarjela dokumentacija vodi do:

- pogrešnih implementacijskih pretpostavki
- ponavljanja već donesenih odluka
- demoa koji slučajno postaje proizvodna istina
- sporijeg uvođenja novih suradnika
- težeg pregleda jer standard nije jasan

U AI-podržanim tijekovima taj se dug nakuplja još brže jer pomoćnici vrlo dobro nastavljaju iz obližnjih, čak i zastarjelih pretpostavki.

## Dokumentacija i implementacija moraju činiti lanac

Pravi model nije kruta shema "najprije dokumentacija, zatim kod". Pravi model je održavani lanac:

- specifikacije definiraju namjeru
- dokumenti trenutačnog stanja objašnjavaju što postoji sada
- demo i implementacija čine tok konkretnim
- testovi i validacija provjeravaju očekivanja
- CI održava odstupanje vidljivim

Ako se promijeni jedna karika, treba pregledati i okolne.

<!-- semantic-parity: broad-audiences -->
## Zašto bi to trebalo zanimati širu publiku

Ovo nije samo tehničko pitanje.

Institucije bi to trebalo zanimati zato što dokumentacija utječe na upravljanje, povjerenje u nabavu, uvođenje novih ljudi, kontinuitet i mogućnost revizije.

Studentima bi to trebalo biti važno zato što je dokumentiranje namjere dio učenja izgradnje pouzdanih sustava, a ne administrativni dodatak.

Opću publiku bi to trebalo zanimati zato što je proizvod s jasnom dokumentacijom obično i proizvod s jasnijim odlukama u pozadini.

<!-- semantic-parity: practical-test -->
## Praktični test

Korisno pitanje za svaki tim je jednostavno:

Kad bi danas novi suradnik ili AI pomoćnik ušao u repozitorij, bi li mu dokumenti pomogli izgraditi namjeravani proizvod ili uglavnom nešto što zvuči uvjerljivo?

<!-- semantic-parity: documentation-as-product-distinction -->
Ta je razlika razlika između dokumentacije kao komentara i dokumentacije kao dijela proizvoda.

## Trajna lekcija

Dokumentacija nije odvojena od kvalitete proizvoda.

Ona oblikuje implementaciju, pregled, komunikaciju, validaciju i dugoročno povjerenje. U AI-podržanim projektima dokumentacija je dio proizvoda jer je dio sustava koji sprječava proizvodni odmak.

## Drugi jezici

- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
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
