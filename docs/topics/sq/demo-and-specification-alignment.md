---
title: "Përputhja e Demos dhe Specifikimit"
summary: "Pse demot janë dëshmi e dobishme për gjendjen e implementimit, por nuk duhet t'i zëvendësojnë në heshtje specifikimet si burimi kryesor i së vërtetës së produktit."
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

# Përputhja e Demos dhe Specifikimit

Një demo tregon atë që ekziston aktualisht. Një specifikim përshkruan se çfarë supozohet të jetë produkti. Të dyja lidhen me njëra-tjetrën, por nuk janë të këmbyeshme.

Ekipet shpesh e trajtojnë një demo funksionale si artefaktin më bindës në një projekt, dhe me të drejtë. Një demo e bën sjelljen konkrete. Ajo ekspozon boshllëqe rrjedhe pune, probleme përdorshmërie dhe zgjedhje implementimi që do të mbeteshin abstrakte në një dokument. Por një demo është gjithashtu dëshmi e paplotë. Ajo formësohet nga çdo gjë që është ndërtuar deri tani, përfshirë shkurtesa, eksperimente dhe mungesa të përkohshme.

Përputhja me specifikimin do të thotë t'i mbash këto dy shtresa në dialog. Nëse demoja devijon nga specifikimi, ose implementimi ka nevojë për korrigjim ose specifikimi ka nevojë për rishikim. Ajo që nuk duhet të ndodhë është devijimi i heshtur, ku demoja bëhet e vërteta e re thjesht sepse ekziston në një formë më të dukshme.

Kjo ka rëndësi veçanërisht në projekte që lëvizin shpejt. Një rrjedhë pune e ndihmuar nga AI mund të gjenerojë ndërfaqe dhe sjellje më shpejt sesa përditësohet dokumentacioni përreth. Pa një zakon të qartë për përputhje, kontribuesit mund të fillojnë të ndjekin çfarëdo që demoja aktuale ndodh të tregojë.

Let Books e përdor këtë dallim me kujdes. Depoja tashmë përmban një demo publike statike, specifikime produkti të nivelit të lartë, udhëzim implementimi dhe dokumente të lokalizuara. Demoja është e vlefshme sepse i bën të prekshme rrjedhat e punës së ruajtjes, QR-it dhe metadata-s. Ajo nuk është e mjaftueshme më vete për të ripërcaktuar rregulla të rrjedhës së punës që ende specifikohen diku tjetër. Artikulli i blogut [Kur Demoja Është Dëshmi dhe Kur Nuk Është](/docs/blog/sq/when-the-demo-is-evidence-and-when-it-is-not.html) e eksploron drejtpërdrejt këtë tension.

Rregulli praktik është i thjeshtë: një demo është dëshmi e implementimit, jo autoritet automatik i produktit. Përputhja kërkon krahasimin së bashku të demove, specifikimeve, dokumentacionit dhe rezultateve të validimit në vend që ndonjëra prej tyre të dominojë pa dashje.
