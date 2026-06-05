---
title: "Validacija dokumentacije izvan lintanja"
summary: "Zašto kvaliteta dokumentacije zahtijeva više slojeva validacije, uključujući lokalizaciju, pristupačnost, generirani izlaz i provjere ispisa, a ne samo jedan linting prolaz."
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

# Validacija dokumentacije izvan lintanja

Linting je koristan, ali pokriva samo dio kvalitete dokumentacije. Može uhvatiti greške u formatiranju, sintaktičke probleme ili neke klase narušene strukture. Sam po sebi ne može jamčiti da su generirane stranice ispravne, da lokalizirane varijante ostaju usklađene, da je navigacija dosljedna ili da je ispisivi izlaz čitljiv.

Zato kvalitetu dokumentacije treba tretirati kao inženjersku disciplinu s više slojeva validacije. Različiti validatori odgovaraju na različita pitanja.

- Validacija poveznica provjerava razrješavaju li se reference i dalje ispravno.
- Validacija lokalizacije provjerava ostaje li čitatelju vidljiv tekst preveden i dosljedan.
- Validacija pariteta provjerava postoje li važni odjeljci i dalje u jezičnim varijantama.
- Provjere pristupačnosti ispituju naslove, oznake i strukturnu upotrebljivost.
- Validacija generiranog HTML-a provjerava je li izvorni sadržaj postao ispravan izlaz.
- Validacija ispisa provjerava ostaju li podržani PDF i papirnati izlazi upotrebljivi.

Ovaj višeslojni model još je važniji u workflowima potpomognutima AI-jem. Sadržaj se može brzo pripremiti kao nacrt, brzo regenerirati i brzo lokalizirati. To ubrzava povratne petlje, ali i povećava rizik od objave uglađenih pogrešaka ako cjevovod testira samo površinsko formatiranje.

Teme su dobar primjer. Kad su Topics u LetBooksu postali punopravna vrsta dokumentacije, morali su naslijediti navigaciju, indeksiranje pretrage, generiranje sitemape, rukovanje lokalizacijom, validaciju generiranog weba i provjere ispisa. Put niže kvalitete stvorio bi novu vrstu sadržaja sa slabijim jamstvima od ostatka platforme.

Načelo je jednostavno: svaka nova vrsta dokumentacije mora naslijediti postojeću validaciju. Tako model kvalitete ostaje skalabilan. Umjesto izmišljanja iznimaka za svaki novi odjeljak, platforma ista očekivanja proširuje na svaki sadržaj namijenjen čitatelju.

Kvaliteta dokumentacije ide dalje od lintanja, jer čitatelji doživljavaju cijeli sustav, a ne samo izvorne datoteke.
