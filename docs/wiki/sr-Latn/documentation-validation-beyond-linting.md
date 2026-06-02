---
title: "Validacija dokumentacije izvan lintovanja"
summary: "Zašto kvalitet dokumentacije zahteva više slojeva validacije, uključujući lokalizaciju, pristupačnost, generisani izlaz i provere štampe, a ne samo jedan linting prolaz."
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

# Validacija dokumentacije izvan lintovanja

Linting je koristan, ali pokriva samo deo kvaliteta dokumentacije. Može uhvatiti greške u formatiranju, sintaksičke probleme ili neke klase narušene strukture. Sam po sebi ne može garantovati da su generisane stranice ispravne, da lokalizovane varijante ostaju usklađene, da je navigacija dosledna ili da je izlaz za štampu čitljiv.

Zato kvalitet dokumentacije treba tretirati kao inženjersku disciplinu sa više slojeva validacije. Različiti validatori odgovaraju na različita pitanja.

- Validacija linkova proverava da li se reference i dalje ispravno razrešavaju.
- Validacija lokalizacije proverava da li tekst vidljiv čitaocu ostaje preveden i dosledan.
- Validacija pariteta proverava da li važni delovi i dalje postoje u jezičkim varijantama.
- Provere pristupačnosti ispituju naslove, oznake i strukturnu upotrebljivost.
- Validacija generisanog HTML-a proverava da li je izvorni sadržaj postao ispravan izlaz.
- Validacija štampe proverava da li podržani PDF i papirni izlazi ostaju upotrebljivi.

Ovaj višeslojni model je još važniji u workflowima potpomognutim AI-jem. Sadržaj može brzo da se nacrta, brzo regeneriše i brzo lokalizuje. To ubrzava povratne petlje, ali i povećava rizik od objavljivanja uglađenih grešaka ako cevovod testira samo površinsko formatiranje.

Teme su dobar primer. Kada su Topics u LetBooksu postali prvoklasan tip dokumentacije, morali su da naslede navigaciju, indeksiranje pretrage, generisanje mape sajta, obradu lokalizacije, validaciju generisanog sajta i provere štampe. Put nižeg kvaliteta stvorio bi novu površinu sadržaja sa slabijim garancijama od ostatka platforme.

Princip je jednostavan: svaki novi tip dokumentacije mora da nasledi postojeću validaciju. Tako model kvaliteta ostaje skalabilan. Umesto izmišljanja izuzetaka za svaki novi odeljak, platforma ista očekivanja proširuje na svaku površinu namenjenu čitaocu.

Kvalitet dokumentacije ide dalje od lintovanja, jer čitaoci doživljavaju ceo sistem, a ne samo izvorne datoteke.
