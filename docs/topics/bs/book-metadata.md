---
title: "Metapodaci o knjizi"
summary: "Kako opisne informacije o knjizi podržavaju otkrivanje, pregled i odluke o donacijama te zašto su metapodaci širi od bilo kojeg pojedinačnog identifikatora."
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

Metapodaci o knjizi opisne su informacije koje se koriste za identifikaciju, organizaciju i procjenu knjige. Uobičajena polja uključuju naslov, podnaslov, autora, izdavača, godinu objave, jezik, izdanje, ISBN i predmetne informacije. U bibliotečkim i kataloškim kontekstima metapodaci mogu uključivati i normativne reference, vanjske identifikatore, sažetke i podatke o provenijenciji.

Metapodaci su važni jer korisnici rijetko donose odluke samo na osnovu identifikatora. Biblioteke trebaju dovoljno informacija za procjenu relevantnosti. Donatori trebaju dovoljno informacija da razumiju šta imaju. Pregledaoci trebaju dovoljno informacija da fizički primjerak usklade s ispravnim bibliografskim zapisom. Dobri metapodaci ove odluke čine bržim i manje dvosmislenim.

Nijedno pojedinačno polje nije samo po sebi dovoljno. ISBN je koristan, ali nepotpun. Naslovi se mogu razlikovati u pravopisu ili prevodu. Imena autora mogu se pojaviti u različitim oblicima. Datumi objave mogu biti nejasni kod starijeg materijala. Zato robusni tokovi rada s metapodacima obično kombinuju više polja i čuvaju izvor svake vrijednosti.

U Let Books metapodaci su također povezani s razlikom između bibliografskih zapisa i fizičkih primjeraka. Fizički primjerak može naslijediti metapodatke na nivou izdanja, a ipak imati vlastito stanje, lokaciju pohrane i status u toku rada. Zasebna tematska stranica o [izdanju nasuprot fizičkom primjerku](/docs/topics/bs/edition-vs-physical-copy.html) direktno objašnjava taj model.

Za praktičan primjer kako se pretraživanje zasnovano na ISBN-u uklapa u širi proces metapodataka, pogledajte temu [ISBN](/docs/topics/bs/isbn.html), blog članak [ISBN nije baza podataka](/docs/blog/bs/isbn-not-a-database.html) i repozitorijsku bilješku u `docs/book-metadata.md` koja opisuje trenutni lanac pretraživanja korišten u alfa demou.
