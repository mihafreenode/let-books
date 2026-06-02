---
title: "Shtresat e Validimit"
summary: "Si disa faza validimi i reduktojnë klasa të ndryshme gabimesh në përmbajtje, në rezultatet e gjeneruara, në implementim dhe në rrjedhat e publikimit."
topic_category: spec-driven-development
topics:
  - validation
  - product-quality
  - ci-cd
related:
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Shtresat e Validimit

Shtresat e validimit janë kontrolle të ndara që shqyrtojnë një sistem nga këndvështrime të ndryshme. Një shtresë mund të verifikojë sintaksën, një tjetër strukturën, një tjetër cilësinë e lokalizimit dhe një tjetër rezultatin e renderuar. Asnjë validator i vetëm nuk mund t'i kapë me besueshmëri të gjitha problemet domethënëse.

Qasja me shtresa ka rëndësi sepse dështimet shfaqen në faza të ndryshme. Një dokument burimor mund të jetë i formuar mirë, por semantikisht i dobët. Një faqe HTML e gjeneruar mund të jetë strukturalisht e vlefshme, por prapëseprapë të ekspozojë tekst UI të papërkthyer. Një demo mund të duket e saktë në ekran, ndërsa të shtypet keq. Secili prej këtyre problemeve kërkon një lloj tjetër kontrolli.

Kjo është arsyeja pse pipeline-at e pjekur të dokumentacionit dhe softuerit rrallë mbështeten në një hap të vetëm lintimi. Ata kombinojnë validim formati, kontrolle lidhjesh, kontrolle barazie, kontrolle qasshmërie, verifikim build-i dhe rishikim specifik për rezultatin. Udhëzuesi mësimor për [shtimin e rregullave të validimit dhe portave CI me faza](/docs/learning/sq/how-to-add-validation-rules-and-ci-gates-in-stages.html) përshkruan se si ekipet mund ta adoptojnë këtë gradualisht në vend që të përpiqen të automatizojnë gjithçka menjëherë.

Në Let Books, shtresat e validimit tashmë ekzistojnë nëpër rishikimin e lokalizimit, kontrollet e HTML-së së gjeneruar, krahasimet ndërgjuhësore dhe verifikimin e strukturës së sajtit. Trajtimi i daljes për shtypje si veçori e mbështetur e zgjeron të njëjtën logjikë. Nëse dokumentacioni synohet të funksionojë si PDF ose në letër, sjellja gjatë shtypjes ka nevojë për shtresën e vet të validimit në vend që të trajtohet si shqetësim kozmetik opsional.

Faqja wiki për [Shtresat e Validimit](/docs/wiki/sq/validation-layers.html) mbulon pamjen referente. Kjo faqe tematike thekson parimin e përgjithshëm: çdo rrugë e re dorëzimi ose lloj dokumentacioni duhet t'i trashëgojë shtresat ekzistuese që tashmë e mbrojnë cilësinë diku tjetër.
