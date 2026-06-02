---
title: "Lokalizacija v velikem obsegu"
summary: "Zakaj je lokalizacija v velikem obsegu vprašanje inženiringa, dostopnosti, upravljanja in objavljanja, ne pa zadnji prevajalski korak."
topic_category: localization-at-scale
topics:
  - localization
  - continuous-localization
  - governance
related:
  blog:
    - localization-at-scale
  learning:
    - how-to-build-a-localization-pipeline
  wiki:
    - localization-at-scale
---

# Lokalizacija v velikem obsegu

Lokalizacija v velikem obsegu je disciplina, ki večjezične vsebine naredi vzdržne, ko število strani, jezikov, sodelavcev in izdajnih ciklov preseže priložnostno ročno usklajevanje. Ne gre samo za prevajanje nizov. Gre za obvladovanje odmika med izvorno vsebino, generiranim izhodom, oblikovalskimi odločitvami, terminologijo, validacijo in poteki dela pri objavljanju.

Majhni projekti lahko lokalizirajo tudi neformalno. Ena oseba napiše vsebino, druga jo prevede, izhod pa se pregleda ročno. V večjem obsegu tak model postane krhek. Spremembe se dogajajo prepogosto, kakovost pa preveč niha, razen če je strukturiran sam proces.

Zato se lokalizacija v velikem obsegu običajno obravnava kot sistemski problem. Ekipe potrebujejo pravila za vir, nadzor terminologije, prevajalske poteke dela, preverjanje paritete, pravila objavljanja in validacijo v CI. Odločiti se morajo tudi, katere vrste vsebin zahtevajo polno pokritost in katere lahko prenesejo postopno uvajanje. Učni vodnik o [gradnji lokalizacijskega cevovoda](/docs/learning/sl/how-to-build-a-localization-pipeline.html) razloži praktično plast poteka dela.

V Let Books je lokalizacija v velikem obsegu del identitete projekta, ker je izdelek izrecno večjezičen tako v ambicijah uporabniškega vmesnika kot baze znanja. To ne vpliva le na prihodnje nize v aplikaciji, ampak tudi na dokumentacijo, diagrame, tiskani izhod in medjezikovno navigacijo. Referenčna wiki stran [Lokalizacija v velikem obsegu](/docs/wiki/sl/localization-at-scale.html) opisuje trajna načela, blog članek z istim imenom pa ponuja pripovedni okvir.

Splošna lekcija je, da večjezično delo postane zanesljivejše, ko ga obravnavamo kot infrastrukturo: načrtovano namerno, validirano neprekinjeno in vzdrževano kot del izdelka, ne šele po njem.
