---
title: "Usklađenost Između Dema I Specifikacije"
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Usklađenost Između Dema I Specifikacije

## Sažetak

Usklađenost između dema i specifikacije je praksa održavanja doslednosti između ponašanja prototipa ili dema i dokumentovane namere proizvoda, uz eksplicitno ažuriranje specifikacije kada demo pokaže bolji tok rada.

## Zašto je važna

Demo je koristan jer tokove rada čini konkretnim. Rizik nastaje kada ljudi vidljivo ponašanje počnu da tretiraju kao odobrenu proizvodnu istinu iako dokumentacija nije ažurirana.

## Preporučeni redosled autoriteta

1. proizvodna specifikacija
2. implementaciona uputstva
3. dokumentacija trenutnog stanja
4. demo ili ponašanje implementacije
5. validacija i testovi

To ne znači da demo nije važan. Znači da ga treba tumačiti unutar dokumentovanog sistema odluka.

## Zdrava upotreba dema

Demo koristite za:

- otkrivanje problema u toku rada
- otkrivanje problema upotrebljivosti
- proveru pretpostavki sa korisnicima
- objašnjenje zainteresovanim stranama

Demo ne treba koristiti kao tihu zamenu za proizvodne odluke.

## Kada demo treba da vodi

Ako demo pokaže očigledno bolji tok rada, tim treba:

1. namerno da pregleda promenu
2. da ažurira relevantnu specifikaciju i dokumentaciju
3. da prilagodi validaciju ili očekivanja pregleda

## Kontekst Let Books

U repozitorijumu Let Books kanonski dokumentacioni izvori već su odvojeni od statusa implementacije. To je korisna zaštita jer sprečava da prototipi postanu slučajni urednički autoritet.
