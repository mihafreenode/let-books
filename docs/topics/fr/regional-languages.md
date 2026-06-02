---
title: "Langues régionales"
summary: "Pourquoi le support des langues régionales exige plus que de larges étiquettes de marché et dépend souvent du script, de l'éducation et du contexte institutionnel."
topic_category: localization-at-scale
topics:
  - smaller-languages
  - language-rights
  - localization
related:
  blog:
    - preserving-smaller-languages-in-the-digital-age
  wiki:
    - language-support-matrix
    - unicode-and-script-correctness
---

# Langues régionales

Les langues régionales sont souvent traitées comme des cas limites dans la planification logicielle, mais en pratique elles représentent de vrais utilisateurs, institutions et communautés de savoir. Bien les prendre en charge exige généralement plus que l'ajout d'une simple catégorie générique « autres langues ».

Le défi ne tient pas seulement au volume de traduction. Il inclut aussi le support des scripts, la correction Unicode, la typographie, la terminologie, les normes éducatives et la différence entre des familles linguistiques proches mais non interchangeables. Une région peut contenir plusieurs systèmes d'écriture, plusieurs normes et plusieurs attentes distinctes quant à la langue employée en public.

Cela compte dans la documentation, car l'exactitude conceptuelle et la confiance des utilisateurs sont fortement liées au choix de la langue. Un projet qui revendique une pertinence régionale mais fusionne des langues ou des scripts distincts dans une seule couche de commodité paraîtra souvent inachevé même si la technologie sous-jacente fonctionne.

Let Books est un bon exemple parce que son contexte visé inclut le slovène ainsi que plusieurs communautés linguistiques de l'ex-Yougoslavie et des Balkans, y compris les écritures latines et cyrilliques. La spécification du projet traite ces distinctions comme des éléments de premier rang et non comme des détails cosmétiques. Le matériau de référence sur la [correction Unicode et des scripts](/docs/wiki/fr/unicode-and-script-correctness.html) et la [matrice de support des langues](/docs/wiki/fr/language-support-matrix.html) montre pourquoi cette décision affecte l'implémentation autant que la publication.

Le support des langues régionales n'est donc pas une fonction de marque. Il fait partie de la manière dont le système respecte les communautés qu'il prétend servir.
