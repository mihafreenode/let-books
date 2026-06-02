---
title: "Izdanje nasuprot fizičkom primerku"
summary: "Zašto su bibliografsko izdanje i pojedinačno uskladištena knjiga povezani entiteti, ali ih ne treba tretirati kao isti zapis."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - book-donation
  - library-systems
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Izdanje nasuprot fizičkom primerku

Izdanje je bibliografski koncept. Fizički primerak je stvaran predmet. To dvoje je povezano, ali odgovara na različita pitanja.

Izdanje opisuje objavljeni oblik knjige: naslov, izdavača, godinu, jezik, ISBN i druge zajedničke metapodatke. Fizički primerak opisuje jedan stvarni predmet u skladištenju ili opticaju: njegovo stanje, vlasničke oznake, lokaciju kutije, fotografije, status donacije i istoriju rukovanja.

Mnogi bibliotečki i inventarski problemi proizlaze iz spajanja ta dva nivoa. Ako projekat modeluje samo izdanja, ne može pouzdano pratiti koji je primerak oštećen, tražen, isporučen ili još uvek stoji u podrumskoj kutiji. Ako modeluje samo fizičke primerke, može nepotrebno duplirati bibliografske metapodatke i otežati uparivanje.

Zato moderni sistemi za rukovanje knjigama često tretiraju izdanje i primerak kao odvojene, ali povezane entitete. Izdanje podržava identifikaciju i otkrivanje. Primerak podržava logistiku i donošenje odluka.

Ta razlika je centralna u Let Books jer je projekat izgrađen oko stvarnih tokova rada za donacije i preuzimanje. Donator može imati pet primeraka istog udžbenika, svaki sa drugačijim stanjem ili lokacijom skladištenja. Biblioteka možda želi samo jedan od njih. Bez razdvajanja izdanja i primerka ovi tokovi rada veoma brzo postaju zbunjujući.

Postojeći članak [ISBN nije baza podataka](/docs/blog/sr-Latn/isbn-not-a-database.html) pojačava ovu tačku iz ugla identifikatora. Ova tematska stranica direktno iznosi model: bibliografska istost ne briše fizičku različitost.
