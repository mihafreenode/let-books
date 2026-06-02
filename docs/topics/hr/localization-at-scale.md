---
title: "Lokalizacija u velikom opsegu"
summary: "Zašto je lokalizacija u velikom opsegu pitanje inženjerstva, pristupačnosti, upravljanja i objavljivanja, a ne završni prevoditeljski korak."
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

# Lokalizacija u velikom opsegu

Lokalizacija u velikom opsegu disciplina je koja višejezični sadržaj čini održivim kada broj stranica, jezika, suradnika i ciklusa izdanja preraste ad hoc ručnu koordinaciju. Ne radi se samo o prevođenju nizova. Radi se o kontroliranju odstupanja između izvornog sadržaja, generiranog izlaza, dizajnerskih odluka, terminologije, validacije i tijekova rada objavljivanja.

Mali projekti ponekad mogu lokalizirati neformalno. Jedna osoba piše sadržaj, druga ga prevodi, a izlaz se ručno pregledava. U većem opsegu taj model postaje krhak. Promjene se događaju prečesto, a kvaliteta previše varira, osim ako je sam proces strukturiran.

Zato se lokalizacija u velikom opsegu obično tretira kao sustavni problem. Timovi trebaju konvencije za izvor, kontrolu terminologije, prevoditeljske tijekove rada, provjere pariteta, pravila objavljivanja i validaciju u CI‑ju. Također trebaju odlučiti koje vrste sadržaja zahtijevaju potpunu pokrivenost, a koje mogu podnijeti postupno uvođenje. Vodič za učenje o [izgradnji lokalizacijskog cjevovoda](/docs/learning/hr/how-to-build-a-localization-pipeline.html) objašnjava praktični sloj tijeka rada.

U Let Books lokalizacija u velikom opsegu dio je identiteta projekta jer je proizvod izričito višejezičan i u ambicijama korisničkog sučelja i u bazi znanja. To utječe ne samo na buduće nizove aplikacije, nego i na dokumentaciju, dijagrame, ispisni izlaz i međujezičnu navigaciju. Referentna wiki stranica [Lokalizacija u velikom opsegu](/docs/wiki/hr/localization-at-scale.html) opisuje trajna načela, dok istoimeni blog članak pruža narativni okvir.

Opća je lekcija da višejezični rad postaje pouzdaniji kada se tretira kao infrastruktura: namjerno dizajnirana, kontinuirano validirana i održavana kao dio proizvoda, a ne naknadno.
