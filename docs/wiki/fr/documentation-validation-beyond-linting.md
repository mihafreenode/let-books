---
title: "Validation de la documentation au-delà du linting"
summary: "Pourquoi la qualité de la documentation exige plusieurs couches de validation, y compris la localisation, l'accessibilité, la sortie générée et les contrôles d'impression, plutôt qu'un simple passage de linting."
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

# Validation de la documentation au-delà du linting

Le linting est utile, mais il ne couvre qu'une partie de la qualité documentaire. Il peut détecter des erreurs de formatage, des problèmes de syntaxe ou certaines classes de structure cassée. À lui seul, il ne peut pas garantir que les pages générées sont correctes, que les variantes localisées restent alignées, que la navigation est cohérente ou que la sortie imprimée reste lisible.

La qualité de la documentation doit donc être traitée comme une discipline d'ingénierie avec plusieurs couches de validation. Des validateurs différents répondent à des questions différentes.

- La validation des liens vérifie si les références se résolvent encore correctement.
- La validation de la localisation vérifie si le texte visible par le lecteur reste traduit et cohérent.
- La validation de parité vérifie si les sections importantes existent toujours dans les variantes linguistiques.
- Les contrôles d'accessibilité examinent les titres, les libellés et l'utilisabilité structurelle.
- La validation du HTML généré vérifie si le contenu source est devenu une sortie correcte.
- La validation d'impression vérifie si les sorties PDF et papier prises en charge restent utilisables.

Ce modèle en plusieurs couches est encore plus important dans les workflows assistés par IA. Le contenu peut être esquissé rapidement, régénéré rapidement et localisé rapidement. Cela accélère les boucles de retour, mais augmente aussi le risque de publier des erreurs au rendu soigné si le pipeline ne teste que le formatage de surface.

Les Topics en sont un bon exemple. Lorsqu'ils sont devenus un type de documentation de première classe dans LetBooks, ils ont dû hériter de la navigation, de l'indexation de recherche, de la génération de sitemap, de la gestion de la localisation, de la validation du site généré et des contrôles d'impression. Une voie de moindre qualité aurait créé une nouvelle surface de contenu avec des garanties plus faibles que le reste de la plateforme.

Le principe est simple : chaque nouveau type de documentation doit hériter de la validation existante. Ainsi, le modèle de qualité reste extensible. Au lieu d'inventer des exceptions pour chaque nouvelle section, la plateforme étend les mêmes attentes à toute surface destinée au lecteur.

La qualité documentaire va au-delà du linting, car les lecteurs font l'expérience du système entier, pas seulement des fichiers source.
