---
title: "Validacija dokumentacije izvan lintanja"
summary: "Zašto kvalitet dokumentacije zahtijeva više slojeva validacije, uključujući lokalizaciju, pristupačnost, generisani izlaz i provjere štampe, a ne samo jedan linting prolaz."
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

Linting je koristan, ali pokriva samo dio kvaliteta dokumentacije. Može uhvatiti greške u formatiranju, sintaktičke probleme ili neke klase narušene strukture. Sam po sebi ne može garantovati da su generisane stranice ispravne, da lokalizovane varijante ostaju usklađene, da je navigacija dosljedna ili da je izlaz za štampu čitljiv.

Zato kvalitet dokumentacije treba tretirati kao inženjersku disciplinu sa više slojeva validacije. Različiti validatori odgovaraju na različita pitanja.

- Validacija linkova provjerava da li se reference i dalje ispravno razrješavaju.
- Validacija lokalizacije provjerava da li tekst vidljiv čitaocu ostaje preveden i dosljedan.
- Validacija pariteta provjerava da li važni dijelovi i dalje postoje u jezičkim varijantama.
- Provjere pristupačnosti ispituju naslove, oznake i strukturnu upotrebljivost.
- Validacija generisanog HTML-a provjerava da li je izvorni sadržaj postao ispravan izlaz.
- Validacija štampe provjerava da li podržani PDF i papirni izlazi ostaju upotrebljivi.

Ovaj višeslojni model je još važniji u workflowima potpomognutim AI-jem. Sadržaj se može brzo skicirati, brzo regenerisati i brzo lokalizovati. To ubrzava povratne petlje, ali i povećava rizik od objavljivanja uglađenih grešaka ako cjevovod testira samo površinsko formatiranje.

Teme su dobar primjer. Kada su Topics u LetBooksu postali prvorazredan tip dokumentacije, morali su naslijediti navigaciju, indeksiranje pretrage, generisanje sitemape, obradu lokalizacije, validaciju generisanog sajta i provjere štampe. Put nižeg kvaliteta stvorio bi novu površinu sadržaja sa slabijim garancijama od ostatka platforme.

Princip je jednostavan: svaki novi tip dokumentacije mora naslijediti postojeću validaciju. Tako model kvaliteta ostaje skalabilan. Umjesto izmišljanja izuzetaka za svaki novi odjeljak, platforma ista očekivanja proširuje na svaku površinu namijenjenu čitaocu.

Kvalitet dokumentacije ide dalje od lintanja, jer čitaoci doživljavaju cijeli sistem, a ne samo izvorne datoteke.
