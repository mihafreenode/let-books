---
title: "Let Books Étude de cas de localisation"
summary: >-
  Let Books est une étude de cas vivante sur la création d'une plate-forme de connaissances multilingue et d'une vision produit avant qu'une application backend complète n'existe.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Let Books Étude de cas de localisation

## Résumé

Let Books est une étude de cas vivante sur la création d'une plate-forme de connaissances multilingue et d'une vision produit avant qu'une application backend complète n'existe.

Le modèle de programme central se trouve désormais aux `../localization-at-scale-program.md`. Cette page se concentre sur les preuves spécifiques au référentiel qui soutiennent ce manuel.

## Pourquoi c'est utile

Il montre comment un projet peut :

- définir tôt la portée des paramètres régionaux
- garder l'accessibilité liée à la localisation
- utiliser la rédaction en anglais d'abord sans se replier sur la publication en anglais uniquement
- documenter la gouvernance avant l'arrivée de l'échelle

## Exemple d'examen de l'IA slovène

Le référentiel comprend un exemple concret de révision en slovène dans lequel le projet d'IA préservait le sens large mais nécessitait toujours une correction par le locuteur natif pour la modalité, la fluidité et la formulation du registre politique.

Le dossier détaillé se trouve désormais dans la section Résultats de l'examen des locuteurs natifs du `../localization-at-scale-program.md` et du `../../style-guide/localization/ai-translation-review-records.md`.

Leçons clés :

- les erreurs de grammaire peuvent survivre même lorsque la phrase semble compréhensible
- la modalité est particulièrement vulnérable à la traduction littérale
- le langage des politiques et des spécifications de produits nécessite souvent un registre spécifique au domaine plutôt qu'une équivalence au niveau du dictionnaire
- les contrôles automatisés détectent rarement à eux seuls les problèmes subtils de fluidité et de modalité

## Exemple de publication en langues mixtes

Article source : `docs/blog/fr/the-cost-of-english-only-software.md`

Cette famille d'articles a fourni un exemple concret d'un titre localisé et d'une coque partiellement localisée coexistant avec des surfaces de publication en anglais destinées aux lecteurs.

L'interprétation détaillée au niveau du programme se trouve désormais dans la section Résultats de l'examen des locuteurs natifs du `../localization-at-scale-program.md` et du `../localization-audit-report.md`.

Leçons spécifiques au référentiel :

- la couverture n'est pas la même chose que l'exhaustivité
- les métadonnées sources sont importantes car les résumés peuvent s'infiltrer dans les surfaces de publication
- la localisation de la taxonomie est importante car les étiquettes de sujets en anglais sont des défauts visibles pour le lecteur
- les HTML générés doivent être validés et ne pas faire confiance aveuglément

## Exemples de référence réutilisables

Les exemples d'examen structuré doivent également être stockés en tant qu'exemples de référence réutilisables afin que les futures évaluations LLM puissent mesurer :

- fiabilité grammaticale
- gestion des modalités
- précision terminologique
- précision du registre des politiques
- qualité de la capture des justifications des évaluateurs

## Pages connexes

- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../../blog/fr/why-every-language-matters.md`