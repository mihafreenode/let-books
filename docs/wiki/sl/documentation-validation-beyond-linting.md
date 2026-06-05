---
title: "Validacija dokumentacije onkraj lintanja"
summary: "Zakaj kakovost dokumentacije zahteva več validacijskih plasti, vključno z lokalizacijo, dostopnostjo, ustvarjenim izhodom in preverjanjem tiska, ne le en sam prehod lintanja."
topics:
  - validation
  - documentation
  - localization
related:
  blog:
    - documentation-is-part-of-the-product
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Validacija dokumentacije onkraj lintanja

Lintanje je uporabno, vendar pokrije le del kakovosti dokumentacije. Lahko ujame napake v oblikovanju, sintaksi ali nekatere razrede pokvarjene strukture. Samo po sebi pa ne more zagotoviti, da so ustvarjene strani pravilne, da lokalizirane različice ostanejo usklajene, da je navigacija dosledna ali da je tiskani izhod berljiv.

Zato je treba kakovost dokumentacije obravnavati kot inženirsko disciplino z več validacijskimi plastmi. Različni validatorji odgovarjajo na različna vprašanja.

- Validacija povezav preverja, ali se sklici še vedno pravilno razrešijo.
- Validacija lokalizacije preverja, ali bralcu vidno besedilo ostaja prevedeno in dosledno.
- Validacija paritete preverja, ali pomembni deli še vedno obstajajo v jezikovnih različicah.
- Preverjanja dostopnosti pregledajo naslove, oznake in strukturno uporabnost.
- Validacija ustvarjenega HTML-ja preveri, ali je izvorna vsebina postala pravilen izhod.
- Validacija tiska preverja, ali ostajata podprta izvoz v PDF in tisk uporabna.

Ta večplastni model je še pomembnejši v potekih dela, podprtih z AI. Vsebino je mogoče hitro pripraviti v osnutku, hitro ponovno ustvariti in hitro lokalizirati. To pospeši povratne zanke, vendar tudi poveča tveganje, da bodo navidezno uglajene napake izdane, če cevovod testira le površinsko oblikovanje.

Teme so dober primer. Ko so Teme v LetBooks postale prvovrsten tip dokumentacije, so morale podedovati navigacijo, iskalno indeksiranje, ustvarjanje zemljevida strani, obravnavo lokalizacije, validacijo ustvarjenega spletnega mesta in preverjanja tiska. Pot z nižjo kakovostjo bi ustvarila novo vrsto vsebine s šibkejšimi zagotovili kot preostala platforma.

Načelo je preprosto: vsak nov tip dokumentacije mora podedovati obstoječo validacijo. Tako model kakovosti ostane razširljiv. Namesto da za vsak nov odsek izmišljamo izjeme, platforma enaka pričakovanja razširi na vsako bralcu namenjeno vsebino.

Kakovost dokumentacije presega lintanje, ker bralci doživljajo celoten sistem, ne le izvorne datoteke.
