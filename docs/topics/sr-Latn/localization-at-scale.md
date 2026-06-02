---
title: "Lokalizacija u velikom obimu"
summary: "Zašto je lokalizacija u velikom obimu pitanje inženjerstva, pristupačnosti, upravljanja i objavljivanja, a ne završni prevodilački korak."
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

# Lokalizacija u velikom obimu

Lokalizacija u velikom obimu disciplina je koja višejezični sadržaj čini održivim kada broj stranica, jezika, saradnika i ciklusa izdanja preraste ad hoc ručnu koordinaciju. Ne radi se samo o prevođenju nizova. Radi se o kontrolisanju odstupanja između izvornog sadržaja, generisanog izlaza, dizajnerskih odluka, terminologije, validacije i tokova rada objavljivanja.

Mali projekti ponekad mogu lokalizovati neformalno. Jedna osoba piše sadržaj, druga ga prevodi, a izlaz se ručno pregledava. U većem obimu taj model postaje krhak. Promene se dešavaju prečesto, a kvalitet previše varira, osim ako je sam proces strukturisan.

Zato se lokalizacija u velikom obimu obično tretira kao sistemski problem. Timovi trebaju konvencije za izvor, kontrolu terminologije, prevodilačke tokove rada, provere pariteta, pravila objavljivanja i validaciju u CI-ju. Takođe treba da odluče koje vrste sadržaja zahtevaju potpunu pokrivenost, a koje mogu podneti postepeno uvođenje. Vodič za učenje o [izgradnji lokalizacionog cevovoda](/docs/learning/sr-Latn/how-to-build-a-localization-pipeline.html) objašnjava praktični sloj toka rada.

U Let Books lokalizacija u velikom obimu deo je identiteta projekta jer je proizvod izričito višejezičan i u ambicijama korisničkog interfejsa i u bazi znanja. To utiče ne samo na buduće nizove aplikacije, nego i na dokumentaciju, dijagrame, štampani izlaz i međujezičku navigaciju. Referentna wiki stranica [Lokalizacija u velikom obimu](/docs/wiki/sr-Latn/localization-at-scale.html) opisuje trajna načela, dok istoimeni blog članak pruža narativni okvir.

Opšta lekcija je da višejezični rad postaje pouzdaniji kada se tretira kao infrastruktura: namerno dizajnirana, kontinuirano validirana i održavana kao deo proizvoda, a ne naknadno.
