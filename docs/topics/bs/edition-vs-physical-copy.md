---
title: "Izdanje nasuprot fizičkom primjerku"
summary: "Zašto su bibliografsko izdanje i pojedinačno pohranjena knjiga povezani entiteti, ali ih ne treba tretirati kao isti zapis."
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

# Izdanje nasuprot fizičkom primjerku

Izdanje je bibliografski koncept. Fizički primjerak je stvaran predmet. To dvoje je povezano, ali odgovara na različita pitanja.

Izdanje opisuje objavljeni oblik knjige: naslov, izdavača, godinu, jezik, ISBN i druge zajedničke metapodatke. Fizički primjerak opisuje jedan stvarni predmet u pohrani ili opticaju: njegovo stanje, vlasničke oznake, lokaciju kutije, fotografije, status donacije i historiju rukovanja.

Mnogi bibliotečki i inventurni problemi proizlaze iz spajanja te dvije razine. Ako projekat modelira samo izdanja, ne može pouzdano pratiti koji je primjerak oštećen, tražen, isporučen ili još uvijek stoji u podrumskom sanduku. Ako modelira samo fizičke primjerke, može nepotrebno duplirati bibliografske metapodatke i otežati uparivanje.

Zato moderni sistemi za rukovanje knjigama često tretiraju izdanje i primjerak kao odvojene, ali povezane entitete. Izdanje podržava identifikaciju i otkrivanje. Primjerak podržava logistiku i donošenje odluka.

Ta je razlika centralna u Let Books jer je projekat izgrađen oko stvarnih tokova rada za donacije i preuzimanje. Donator može imati pet primjeraka istog udžbenika, svaki s drugačijim stanjem ili lokacijom pohrane. Biblioteka možda želi samo jedan od njih. Bez razdvajanja izdanja i primjerka ovi tokovi rada vrlo brzo postaju zbunjujući.

Postojeći članak [ISBN nije baza podataka](/docs/blog/bs/isbn-not-a-database.html) pojačava ovu tačku iz ugla identifikatora. Ova tematska stranica direktno iznosi model: bibliografska istost ne briše fizičku različitost.
