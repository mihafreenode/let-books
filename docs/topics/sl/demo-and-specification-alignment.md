---
title: "Usklajenost med demo prikazom in specifikacijo"
summary: "Zakaj so demo prikazi uporaben dokaz stanja implementacije, vendar ne bi smeli potiho nadomestiti specifikacij kot glavnega vira resnice o izdelku."
topic_category: spec-driven-development
topics:
  - demo-alignment
  - spec-driven-development
  - validation
related:
  blog:
    - when-the-demo-is-evidence-and-when-it-is-not
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - demo-spec-alignment
---

# Usklajenost med demo prikazom in specifikacijo

Demo prikaz pokaže, kaj trenutno obstaja. Specifikacija opisuje, kakšen naj bi izdelek bil. Obe plasti sta povezani, vendar nista zamenljivi.

Ekipe delujoč demo pogosto obravnavajo kot najbolj prepričljiv artefakt v projektu, in to z dobrim razlogom. Demo konkretizira vedenje. Razkrije vrzeli v potekih dela, težave z uporabnostjo in implementacijske izbire, ki bi v dokumentu ostale abstraktne. Toda demo je tudi nepopoln dokaz. Oblikovan je glede na to, kar je bilo do zdaj zgrajeno, vključno z bližnjicami, eksperimenti in začasnimi opustitvami.

Usklajenost s specifikacijo pomeni ohranjati ti dve plasti v dialogu. Če demo odstopa od specifikacije, je treba bodisi popraviti implementacijo bodisi pregledati specifikacijo. Kar se ne bi smelo zgoditi, je tih odmik, pri katerem demo postane nova resnica zgolj zato, ker obstaja v bolj vidni obliki.

To je še posebej pomembno v projektih, ki se premikajo hitro. Potek dela z AI-podporo lahko vmesnike in vedenje generira hitreje, kot se posodablja spremljajoča dokumentacija. Brez eksplicitne navade usklajevanja lahko sodelavci začnejo slediti temu, kar pač prikazuje trenutni demo.

Let Books to razliko uporablja previdno. Repozitorij že vsebuje javni statični demo, visokoravni specifikaciji izdelka, izvedbena navodila in lokalizirano dokumentacijo. Demo je dragocen, ker naredi poteke dela za shranjevanje, QR in metapodatke otipljive. Sam po sebi pa ni dovolj, da bi na novo določil pravila potekov dela, ki so še vedno specificirana drugje. Blog članek [Kdaj je demo dokaz in kdaj ni](/docs/blog/sl/when-the-demo-is-evidence-and-when-it-is-not.html) to napetost obravnava neposredno.

Praktično pravilo je preprosto: demo je dokaz implementacije, ne samodejna avtoriteta o izdelku. Usklajenost zahteva, da demo prikaze, specifikacije, dokumentacijo in rezultate validacije primerjamo skupaj, namesto da bi kateri koli od teh elementov po naključju prevladal.
