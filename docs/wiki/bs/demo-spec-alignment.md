---
title: "Usklađenost između dema i specifikacije"
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Usklađenost između dema i specifikacije

## Sažetak

Usklađenost između dema i specifikacije praksa je održavanja dosljednosti između ponašanja prototipa ili dema i dokumentovane namjere proizvoda, uz eksplicitno ažuriranje specifikacije kada demo pokaže bolji tok rada.

## Zašto je važna

Demo je koristan jer tokove rada čini konkretnim. Rizik nastaje kada ljudi vidljivo ponašanje počnu tretirati kao odobrenu proizvodnu istinu iako dokumentacija nije ažurirana.

## Preporučeni redoslijed autoriteta

1. proizvodna specifikacija
2. implementacijske smjernice
3. dokumentacija trenutnog stanja
4. demo ili ponašanje implementacije
5. validacija i testovi

To ne znači da demo nije važan. Znači da ga treba tumačiti unutar dokumentovanog sistema odluka.

## Zdrava upotreba dema

Demo koristite za:

- otkrivanje problema u toku rada
- otkrivanje problema upotrebljivosti
- provjeru pretpostavki s korisnicima
- objašnjenje zainteresovanim stranama

Demo ne treba koristiti kao tihu zamjenu za proizvodne odluke.

## Kada demo treba voditi

Ako demo pokaže očigledno bolji tok rada, tim treba:

1. namjerno pregledati promjenu
2. ažurirati relevantnu specifikaciju i dokumentaciju
3. prilagoditi validaciju ili očekivanja pregleda

## Kontekst Let Books

U repozitoriju Let Books kanonski dokumentacijski izvori već su odvojeni od statusa implementacije. To je korisna zaštita jer sprečava da prototipi postanu slučajni urednički autoritet.
