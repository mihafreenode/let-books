---
title: "Usklađenost Između Dema I Specifikacije"
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Usklađenost Između Dema I Specifikacije

## Sažetak

Usklađenost između dema i specifikacije praksa je održavanja dosljednosti između ponašanja prototipa ili dema i dokumentirane namjere proizvoda, uz eksplicitno ažuriranje specifikacije kada demo pokaže bolji tijek rada.

## Zašto je važna

Demo je koristan jer tijekove rada čini konkretnima. Rizik nastaje kada ljudi vidljivo ponašanje počnu tretirati kao odobrenu proizvodnu istinu iako dokumentacija nije ažurirana.

## Preporučeni redoslijed autoriteta

1. proizvodna specifikacija
2. implementacijske smjernice
3. dokumentacija trenutačnog stanja
4. demo ili ponašanje implementacije
5. validacija i testovi

To ne znači da demo nije važan. Znači da ga treba tumačiti unutar dokumentiranog sustava odluka.

## Zdrava upotreba dema

Demo koristite za:

- otkrivanje problema u tijeku rada
- otkrivanje problema upotrebljivosti
- provjeru pretpostavki s korisnicima
- objašnjenje dionicima

Demo ne treba koristiti kao tihu zamjenu za proizvodne odluke.

## Kada demo treba voditi

Ako demo pokaže očito bolji tijek rada, tim treba:

1. namjerno pregledati promjenu
2. ažurirati relevantnu specifikaciju i dokumentaciju
3. prilagoditi validaciju ili očekivanja pregleda

## Kontekst Let Books

U repozitoriju Let Books kanonski dokumentacijski izvori već su odvojeni od statusa implementacije. To je korisna zaštita jer sprječava da prototipi postanu slučajni urednički autoritet.
