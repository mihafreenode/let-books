---
title: "Izdaja v primerjavi s fizičnim izvodom"
summary: "Zakaj sta bibliografska izdaja in posamezna shranjena knjiga povezani entiteti, vendar ju ne bi smeli obravnavati kot isti zapis."
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

# Izdaja v primerjavi s fizičnim izvodom

Izdaja je bibliografski koncept. Fizični izvod je resničen predmet. Oboje je povezano, vendar odgovarja na različna vprašanja.

Izdaja opisuje objavljeno obliko knjige: naslov, založnika, leto, jezik, ISBN in druge skupne metapodatke. Fizični izvod opisuje en dejanski predmet v skladiščenju ali obtoku: njegovo stanje, lastniške oznake, lokacijo škatle, fotografije, status donacije in zgodovino ravnanja.

Veliko knjižničnih in inventurnih težav izhaja iz tega, da se ti dve ravni zlijeta v eno. Če projekt modelira samo izdaje, ne more zanesljivo slediti temu, kateri izvod je poškodovan, zaželen, dostavljen ali še vedno leži v kletni škatli. Če modelira samo fizične izvode, lahko po nepotrebnem podvaja bibliografske metapodatke in oteži ujemanje.

Zato sodobni sistemi za ravnanje s knjigami pogosto obravnavajo izdajo in izvod kot ločeni, vendar povezani entiteti. Izdaja podpira identifikacijo in odkrivanje. Izvod podpira logistiko in odločanje.

Ta razlika je osrednja v Let Books, ker je projekt zgrajen okoli resničnih potekov dela za donacije in prevzem. Darovalec ima lahko pet izvodov istega učbenika, vsak z drugačnim stanjem ali lokacijo shranjevanja. Knjižnica morda želi le enega od njih. Brez razcepa med izdajo in izvodom ti poteki dela zelo hitro postanejo zmedeni.

Obstoječi članek [ISBN ni baza podatkov](/docs/blog/sl/isbn-not-a-database.html) to točko okrepi z vidika identifikatorjev. Ta tematska stran model pove neposredno: bibliografska istost ne izbriše fizične različnosti.
