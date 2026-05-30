---
article_id: documentation-is-part-of-the-product
canonical_language: hr
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

## Dokumentacija obavlja četiri proizvodna posla

Dokumentacija:

- nosi namjeru
- postavlja očekivanja
- smanjuje trošak usklađivanja
- podupire povjerenje

Govori suradnicima, institucijama, recenzentima i AI pomoćnicima što projekt pokušava postići i u što se ne bi smio pretvoriti.

## Let Books je već strukturiran tako

U repozitoriju Let Books:

- `AGENTS.md` definira proizvodnu namjeru i tijekove rada
- `AGENTS-Implementation.md` definira taktička pravila izvođenja
- `README.md` pošteno opisuje trenutačno stanje
- `docs/` definira pravila objave, pisanja, lokalizacije i dokaza

To znači da dokumentacija ovdje nije samo objašnjenje. Ona je dio načina rada projekta.

## Zastarjela dokumentacija je proizvodni dug

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

## Trajna lekcija

Dokumentacija nije odvojena od kvalitete proizvoda. Ona oblikuje implementaciju, pregled, komunikaciju, validaciju i dugoročno povjerenje. U AI-podržanim projektima dokumentacija je dio proizvoda jer je dio sustava koji sprječava proizvodni odmak.

## Drugi jezici

- [English](../en/documentation-is-part-of-the-product.md)
- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
- [Bosanski](../bs/documentation-is-part-of-the-product.md)
- [Srpski (latinica)](../sr-Latn/documentation-is-part-of-the-product.md)
- [Српски (ћирилица)](../sr-Cyrl/documentation-is-part-of-the-product.md)
- [Македонски](../mk/documentation-is-part-of-the-product.md)
- [Shqip](../sq/documentation-is-part-of-the-product.md)
- [Deutsch](../de/documentation-is-part-of-the-product.md)
- [Italiano](../it/documentation-is-part-of-the-product.md)
- [Français](../fr/documentation-is-part-of-the-product.md)
- [Español](../es/documentation-is-part-of-the-product.md)
