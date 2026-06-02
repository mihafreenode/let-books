---
title: "Poteki dela za donacije"
summary: "Kako sistemi za donacije knjig prehajajo od inventarja do pregleda, izbire, prevzema in dostave, namesto da bi se ustavili pri preprostem ustvarjanju kataloga."
topic_category: book-and-library-metadata
topics:
  - book-donation
  - library-systems
  - validation
related:
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - product-specification
  blog:
    - spec-driven-development-in-let-books
---

# Poteki dela za donacije

Poteki dela za donacije opisujejo praktično pot, ki jo knjiga prehodi od zasebnega skladiščenja do pregleda, izbire, prevzema in dostave. V mnogih projektih je ta potek dela enako pomemben kot sami metapodatki, ker glavni problem ni samo vedeti, kaj knjiga je, temveč tudi narediti prenos obvladljiv.

Celoten donacijski tok običajno vključuje vnos, identifikacijo, sledenje shranjevanju, odločitve pregledovalcev, sezname za prevzem in končne posodobitve statusa. Če je katera od teh stopenj šibka, postane proces težji tako za darovalce kot za ustanove. Knjige so lahko katalogizirane, vendar nikoli pregledane, izbrane, vendar ne najdene, ali zapakirane brez jasne revizijske sledi.

Zato je treba poteke dela za donacije modelirati izrecno, namesto da bi jih obravnavali kot naknadno misel pri katalogizaciji. Plast metapodatkov podpira pregled, plast poteka dela pa podpira delovanje. Sistem pove, katere knjige so na voljo, katere so zaželene, katere so zapakirane in katere še vedno ostajajo nerešene.

V Let Books je to ena od opredelilnih idej projekta. Platforma ni predstavljena samo kot skener ali orodje za metapodatke. Namenjena je temu, da ljudem pomaga preprečiti izgubo dragocenih izobraževalnih knjig tako, da dejanski proces doniranja naredi praktičen. To vključuje mobilni zajem, pregled v Excelu, prevzem po škatlah in sledljive spremembe statusa.

Specifikacija v `AGENTS.md` in obstoječe gradivo o potekih dela v dokumentaciji kažeta, da je ta operativna plast prvovrstna. Donacija ni samo mogoč izid katalogizacije. Je eden glavnih razlogov, zakaj katalog sploh obstaja.
