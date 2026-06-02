---
title: "Usklađenost demoa i specifikacije"
summary: "Zašto su demo prikazi koristan dokaz stanja implementacije, ali ne bi smjeli tiho zamijeniti specifikacije kao glavni izvor istine o proizvodu."
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

# Usklađenost demoa i specifikacije

Demo pokazuje šta trenutno postoji. Specifikacija opisuje kakav bi proizvod trebalo da bude. To dvoje je povezano, ali nije zamjenjivo.

Timovi često radni demo tretiraju kao najuvjerljiviji artefakt u projektu, i to s dobrim razlogom. Demo ponašanje čini konkretnim. Otkriva praznine u tokovima rada, probleme upotrebljivosti i implementacijske izbore koji bi u dokumentu ostali apstraktni. Ali demo je i nepotpun dokaz. Oblikuje ga ono što je do sada izgrađeno, uključujući prečice, eksperimente i privremene izostanke.

Usklađenost sa specifikacijom znači održavati ta dva sloja u razgovoru. Ako demo odstupa od specifikacije, ili implementaciju treba ispraviti ili specifikaciju treba pregledati. Ono što se ne bi smjelo desiti jeste tiho odstupanje, u kojem demo postaje nova istina samo zato što postoji u vidljivijem obliku.

To je posebno važno u projektima koji se brzo kreću. Tok rada uz AI podršku može generisati interfejse i ponašanja brže nego što se okolna dokumentacija ažurira. Bez eksplicitne navike usklađivanja saradnici mogu početi pratiti ono što trenutni demo jednostavno prikazuje.

Let Books pažljivo koristi tu razliku. Repozitorij već sadrži javni statični demo, visokorazinske specifikacije proizvoda, implementacijske smjernice i lokalizovanu dokumentaciju. Demo je vrijedan jer tokove rada za pohranu, QR i metapodatke čini opipljivima. Sam po sebi nije dovoljan da redefiniše pravila tokova rada koja su još uvijek specificirana drugdje. Blog članak [Kada je demo dokaz, a kada nije](/docs/blog/bs/when-the-demo-is-evidence-and-when-it-is-not.html) direktno istražuje tu napetost.

Praktično pravilo je jednostavno: demo je dokaz implementacije, a ne automatski autoritet proizvoda. Usklađenost zahtijeva upoređivanje demoa, specifikacija, dokumentacije i rezultata validacije zajedno, umjesto da bilo koji od tih elemenata slučajno prevlada.
