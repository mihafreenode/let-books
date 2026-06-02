---
title: "Regionalni jeziki"
summary: "Zakaj podpora regionalnim jezikom zahteva več kot široke tržne oznake in je pogosto odvisna od pisave, izobraževanja in institucionalnega konteksta."
topic_category: localization-at-scale
topics:
  - smaller-languages
  - language-rights
  - localization
related:
  blog:
    - preserving-smaller-languages-in-the-digital-age
  wiki:
    - language-support-matrix
    - unicode-and-script-correctness
---

# Regionalni jeziki

Regionalni jeziki so v načrtovanju programske opreme pogosto obravnavani kot robni primeri, v praksi pa predstavljajo resnične uporabnike, ustanove in skupnosti znanja. Da jih dobro podpremo, je običajno potrebno več kot le dodati splošno kategorijo »drugi jeziki«.

Izziv ni samo obseg prevodov. Vključuje tudi podporo pisavam, pravilnost Unicode, tipografijo, terminologijo, izobraževalne norme in razliko med jezikovnimi družinami, ki so si blizu, vendar niso zamenljive. Ena regija lahko vsebuje več pisav, več standardov in več različnih pričakovanj glede jezika v javni rabi.

To je pomembno v dokumentaciji, ker sta konceptualna natančnost in zaupanje uporabnikov močno povezana z izbiro jezika. Projekt, ki trdi, da je regionalno relevanten, vendar različne jezike ali pisave stisne v eno plast udobja, bo pogosto deloval nedokončano, tudi če osnovna tehnologija deluje.

Let Books je dober primer, ker njegov predvideni kontekst vključuje slovenščino ter več jezikovnih skupnosti nekdanje Jugoslavije in Balkana, vključno z latiničnim in ciriličnim zapisom. Specifikacija projekta te razlike obravnava kot prvovrstne, ne kot kozmetične. Podporno referenčno gradivo o [pravilnosti Unicode in pisav](/docs/wiki/sl/unicode-and-script-correctness.html) ter [matrika jezikovne podpore](/docs/wiki/sl/language-support-matrix.html) pokažeta, zakaj ta odločitev vpliva tako na implementacijo kot na objavljanje.

Podpora regionalnim jezikom torej ni funkcionalnost za znamčenje. Je del tega, ali sistem spoštuje skupnosti, ki jim trdi, da služi.
