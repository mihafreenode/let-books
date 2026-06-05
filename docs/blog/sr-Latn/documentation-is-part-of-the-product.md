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
title: Dokumentacija je deo proizvoda
summary: Zašto dokumentaciju treba tretirati kao operativno sredstvo koje oblikuje implementaciju, pregled, uvođenje i poverenje u proizvod, a ne kao naknadno sređivanje posle kodiranja.
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
  - ../../sources/sr-Latn/documentation-is-part-of-the-product.md
status: draft
---

# Dokumentacija je deo proizvoda

Mnogi timovi i dalje govore o dokumentaciji kao da počinje tek nakon pravog posla. Najpre se proizvod izgradi, a zatim neko napiše šta se dogodilo. Taj model je bio slab i pre razvoja uz pomoć AI-ja. Sa AI-jem postaje stvarni rizik.

Kada se kod, tekst, interfejsi i tokovi rada mogu generisati veoma brzo, dokumentacija više nije samo naknadni sloj. Postaje deo mehanizma koji održava proizvod koherentnim.

## Zašto je to sada još važnije

AI može da generiše implementaciju iz nepotpune namere. To se često predstavlja kao praktičnost. U praksi to znači da svaka nejasnoća u projektu postaje mesto na kojem proizvod može da odluta.

Ako je dokumentacija slaba ili zastarela, različiti ljudi i različiti alati iz istog repozitorijuma zaključiće da postoje različiti proizvodi.

Jedan saradnik može pratiti trenutno korisničko sučelje.
Drugi može pratiti stari README.
AI pomoćnik može pratiti najbližu datoteku i izmisliti ostatak.

Problem nije samo ispravnost na nivou koda. Problem je da li projekat i dalje opisuje jedan proizvod umesto više preklapajućih pretpostavki.

## Dokumentacija obavlja četiri proizvodna posla

Dobra dokumentacija radi mnogo više od naknadnog objašnjavanja interfejsa.

Prvo, nosi nameru. Budućim saradnicima govori šta proizvod pokušava da postigne i u šta se izričito ne pokušava pretvoriti.

Drugo, postavlja očekivanja. Čitaoci mogu da razaznaju šta postoji sada, šta je planirano i šta ne bi smelo da se opisuje kao već implementirano.

Treće, smanjuje trošak usklađivanja. Novi saradnici, recenzenti, institucije i AI pomoćnici mogu svi da se orijentišu bez rekonstruisanja projekta iz fragmenata.

Četvrto, podržava poverenje. Projekat koji jasno razdvaja trenutno stanje, planirani smer i eksperimentalni tok rada lakše je proceniti i lakše održavati.

## Let Books je već strukturiran tako

Repozitorijum Let Books već pokazuje takav slojevit pristup.

- `AGENTS.md` definiše svrhu proizvoda, tokove rada, granice domena i dugoročni smer.
- `AGENTS-Implementation.md` definiše taktička pravila implementacije i dokumentacije.
- `README.md` objašnjava trenutno stanje repozitorijuma i razlikuje sadašnje isporuke od budućih planova.
- `docs/` definiše platformu znanja sa pravilima objave, pisanja, lokalizacije i mapiranja izvora.

To znači da dokumentacija ovde nije samo objašnjenje. Ona je deo načina rada projekta.

## Zastarela dokumentacija je proizvodni dug

Timovi često prepoznaju tehnički dug tek kada se pojavi u kodu. Ali zastarela dokumentacija stvara sličnu vrstu trenja.

Zastarela dokumentacija vodi do:

- pogrešnih implementacionih pretpostavki
- ponavljanja već donetih odluka
- demoa koji slučajno postaje proizvodna istina
- sporijeg uvođenja novih saradnika
- težeg pregleda jer standard nije jasan

U AI-podržanim tokovima taj se dug gomila još brže jer pomoćnici veoma dobro nastavljaju iz obližnjih, čak i zastarelih pretpostavki.

## Dokumentacija i implementacija moraju činiti lanac

Pravi model nije kruta šema "najpre dokumentacija, zatim kod". Pravi model je održavani lanac:

- specifikacije definišu nameru
- dokumenti trenutnog stanja objašnjavaju šta postoji sada
- demo i implementacija čine tok konkretnim
- testovi i validacija proveravaju očekivanja
- CI održava odstupanje vidljivim

Ako se promeni jedna karika, treba pregledati i okolne.

<!-- semantic-parity: broad-audiences -->
## Zašto bi to trebalo da zanima širu publiku

Ovo nije samo tehničko pitanje.

Institucije bi to trebalo da zanima zato što dokumentacija utiče na upravljanje, poverenje pri nabavci, uvođenje novih ljudi, kontinuitet i mogućnost revizije.

Studentima bi to trebalo da bude važno zato što je dokumentovanje namere deo učenja izgradnje pouzdanih sistema, a ne administrativni dodatak.

Širu publiku bi to trebalo da zanima zato što je proizvod sa jasnom dokumentacijom obično i proizvod sa jasnijim odlukama u pozadini.

<!-- semantic-parity: practical-test -->
## Praktični test

Korisno pitanje za svaki tim je jednostavno:

Kad bi danas novi saradnik ili AI pomoćnik ušao u repozitorijum, da li bi mu dokumenti pomogli da izgradi nameravani proizvod ili uglavnom nešto što zvuči uverljivo?

<!-- semantic-parity: documentation-as-product-distinction -->
Ta razlika je razlika između dokumentacije kao komentara i dokumentacije kao dela proizvoda.

## Trajna lekcija

Dokumentacija nije odvojena od kvaliteta proizvoda.

Ona oblikuje implementaciju, pregled, komunikaciju, validaciju i dugoročno poverenje. U AI-podržanim projektima dokumentacija je deo proizvoda jer je deo sistema koji sprečava proizvodni odmak.

## Povezano štivo

- `../../wiki/documentation-traceability.md`
- `../../wiki/validation-layers.md`
- `ai-as-an-oracle.md`
- `spec-driven-development-in-let-books.md`

## Drugi jezici

- [English](../en/documentation-is-part-of-the-product.md)
- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
- [Hrvatski](../hr/documentation-is-part-of-the-product.md)
- [Bosanski](../bs/documentation-is-part-of-the-product.md)
- [Српски (ћирилица)](../sr-Cyrl/documentation-is-part-of-the-product.md)
- [Македонски](../mk/documentation-is-part-of-the-product.md)
- [Shqip](../sq/documentation-is-part-of-the-product.md)
- [Deutsch](../de/documentation-is-part-of-the-product.md)
- [Italiano](../it/documentation-is-part-of-the-product.md)
- [Français](../fr/documentation-is-part-of-the-product.md)
- [Español](../es/documentation-is-part-of-the-product.md)
