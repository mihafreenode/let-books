---
article_id: documentation-is-part-of-the-product
canonical_language: sr-Latn
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

## Dokumentacija obavlja četiri proizvodna posla

Dokumentacija:

- nosi nameru
- postavlja očekivanja
- smanjuje trošak usklađivanja
- podržava poverenje

Govori saradnicima, institucijama, recenzentima i AI pomoćnicima šta projekat pokušava da postigne i u šta ne bi smeo da se pretvori.

## Let Books je već strukturiran tako

U repozitorijumu Let Books:

- `AGENTS.md` definiše proizvodnu nameru i tokove rada
- `AGENTS-Implementation.md` definiše taktička pravila izvođenja
- `README.md` pošteno opisuje trenutno stanje
- `docs/` definiše pravila objave, pisanja, lokalizacije i dokaza

To znači da dokumentacija ovde nije samo objašnjenje. Ona je deo načina rada projekta.

## Zastarela dokumentacija je proizvodni dug

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

## Trajna lekcija

Dokumentacija nije odvojena od kvaliteta proizvoda. Ona oblikuje implementaciju, pregled, komunikaciju, validaciju i dugoročno poverenje. U AI-podržanim projektima dokumentacija je deo proizvoda jer je deo sistema koji sprečava proizvodni odmak.

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
