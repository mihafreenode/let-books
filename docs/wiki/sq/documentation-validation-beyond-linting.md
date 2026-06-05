---
title: "Validimi i dokumentacionit përtej linting-ut"
summary: "Pse cilësia e dokumentacionit kërkon disa shtresa validimi, duke përfshirë lokalizimin, aksesueshmërinë, daljen e gjeneruar dhe kontrollet e printimit, jo vetëm një kalim të vetëm linting-u."
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

# Validimi i dokumentacionit përtej linting-ut

Linting-u është i dobishëm, por mbulon vetëm një pjesë të cilësisë së dokumentacionit. Ai mund të kapë gabime formatimi, probleme sintaksore ose disa klasa të strukturës së prishur. Vetëm ai nuk mund të garantojë që faqet e gjeneruara janë të sakta, që variantet e lokalizuara mbeten të përputhura, që navigimi është i qëndrueshëm ose që dalja për printim është e lexueshme.

Prandaj cilësia e dokumentacionit duhet trajtuar si një disiplinë inxhinierike me disa shtresa validimi. Validatorë të ndryshëm u përgjigjen pyetjeve të ndryshme.

- Validimi i lidhjeve kontrollon nëse referencat ende zgjidhen saktë.
- Validimi i lokalizimit kontrollon nëse teksti i dukshëm për lexuesin mbetet i përkthyer dhe i qëndrueshëm.
- Validimi i paritetit kontrollon nëse seksionet e rëndësishme ekzistojnë ende në variantet gjuhësore.
- Kontrollet e aksesueshmërisë shqyrtojnë titujt, etiketat dhe përdorshmërinë strukturore.
- Validimi i HTML-së së gjeneruar kontrollon nëse përmbajtja burimore është bërë dalje e saktë.
- Validimi i printimit kontrollon nëse daljet e mbështetura PDF dhe në letër mbeten të përdorshme.

Ky model me shumë shtresa është edhe më i rëndësishëm në workflow-t e mbështetura nga AI. Përmbajtja mund të hartohet shpejt, të rigjenerohet shpejt dhe të lokalizohet shpejt. Kjo përshpejton ciklet e feedback-ut, por gjithashtu rrit rrezikun e publikimit të gabimeve që duken të lëmuara nëse pipeline teston vetëm formatimin sipërfaqësor.

Temat janë një shembull i mirë. Pasi Topics u bënë një lloj dokumentacioni i klasit të parë në LetBooks, atyre iu desh të trashëgonin navigimin, indeksimin e kërkimit, gjenerimin e sitemap-it, trajtimin e lokalizimit, validimin e faqes së gjeneruar dhe kontrollet e printimit. Një rrugë me cilësi më të ulët do të krijonte një lloj të ri përmbajtjeje me garanci më të dobëta se pjesa tjetër e platformës.

Parimi është i drejtpërdrejtë: çdo lloj i ri dokumentacioni duhet të trashëgojë validimin ekzistues. Kjo e mban modelin e cilësisë të shkallëzueshëm. Në vend që të shpiken përjashtime për çdo seksion të ri, platforma i zgjeron të njëjtat pritshmëri në çdo përmbajtje të dukshme për lexuesin.

Cilësia e dokumentacionit shkon përtej linting-ut, sepse lexuesit e përjetojnë të gjithë sistemin, jo vetëm skedarët burimorë.
