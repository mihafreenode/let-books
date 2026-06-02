---
title: "Metapodaci o knjizi"
summary: "Kako opisne informacije o knjizi podržavaju otkrivanje, pregled i odluke o donacijama, te zašto su metapodaci širi od bilo kog pojedinačnog identifikatora."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - library-systems
  - documentation
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Metapodaci o knjizi

Metapodaci o knjizi su opisne informacije koje se koriste za identifikaciju, organizaciju i procenu knjige. Uobičajena polja uključuju naslov, podnaslov, autora, izdavača, godinu objave, jezik, izdanje, ISBN i predmetne informacije. U bibliotečkim i kataloškim kontekstima metapodaci mogu uključivati i normativne reference, spoljne identifikatore, sažetke i podatke o provenijenciji.

Metapodaci su važni jer korisnici retko donose odluke samo na osnovu identifikatora. Biblioteke trebaju dovoljno informacija za procenu relevantnosti. Donatori trebaju dovoljno informacija da razumeju šta imaju. Pregledaoci trebaju dovoljno informacija da fizički primerak usklade sa ispravnim bibliografskim zapisom. Dobri metapodaci ove odluke čine bržim i manje dvosmislenim.

Nijedno pojedinačno polje nije samo po sebi dovoljno. ISBN je koristan, ali nepotpun. Naslovi se mogu razlikovati u pravopisu ili prevodu. Imena autora mogu se pojaviti u različitim oblicima. Datumi objave mogu biti nejasni kod starijeg materijala. Zato robusni tokovi rada sa metapodacima obično kombinuju više polja i čuvaju izvor svake vrednosti.

U Let Books metapodaci su takođe povezani sa razlikom između bibliografskih zapisa i fizičkih primeraka. Fizički primerak može naslediti metapodatke na nivou izdanja, a ipak imati sopstveno stanje, lokaciju skladištenja i status u toku rada. Zasebna tematska stranica o [izdanju nasuprot fizičkom primerku](/docs/topics/sr-Latn/edition-vs-physical-copy.html) direktno objašnjava taj model.

Za praktičan primer kako se pretraživanje zasnovano na ISBN-u uklapa u širi proces metapodataka, pogledajte temu [ISBN](/docs/topics/sr-Latn/isbn.html), blog članak [ISBN nije baza podataka](/docs/blog/sr-Latn/isbn-not-a-database.html) i repozitorijumsku belešku u `docs/book-metadata.md` koja opisuje trenutni lanac pretraživanja korišćen u alfa demou.
