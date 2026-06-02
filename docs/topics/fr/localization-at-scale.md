---
title: "Localisation à grande échelle"
summary: "Pourquoi la localisation à grande échelle relève de l'ingénierie, de l'accessibilité, de la gouvernance et de la publication plutôt que d'une simple étape finale de traduction."
topic_category: localization-at-scale
topics:
  - localization
  - continuous-localization
  - governance
related:
  blog:
    - localization-at-scale
  learning:
    - how-to-build-a-localization-pipeline
  wiki:
    - localization-at-scale
---

# Localisation à grande échelle

La localisation à grande échelle est la discipline qui consiste à rendre le contenu multilingue soutenable lorsque le nombre de pages, de langues, de contributeurs et de cycles de livraison dépasse la coordination manuelle ad hoc. Il ne s'agit pas seulement de traduire des chaînes. Il s'agit de contrôler la dérive entre contenu source, sortie générée, décisions de conception, terminologie, validation et workflows de publication.

Les petits projets peuvent parfois localiser de manière informelle. Une personne écrit le contenu, une autre le traduit et la sortie est relue manuellement. À plus grande échelle, ce modèle devient fragile. Les changements surviennent trop souvent et la qualité varie trop, à moins que le processus lui-même soit structuré.

C'est pourquoi la localisation à grande échelle est généralement traitée comme un problème de systèmes. Les équipes ont besoin de conventions source, de contrôle terminologique, de workflows de traduction, de contrôles de parité, de règles de publication et de validation en CI. Elles doivent aussi décider quels types de contenu exigent une couverture complète et lesquels peuvent tolérer un déploiement progressif. Le guide d'apprentissage sur la [construction d'un pipeline de localisation](/docs/learning/fr/how-to-build-a-localization-pipeline.html) explique la couche pratique du workflow.

Dans Let Books, la localisation à grande échelle fait partie de l'identité du projet parce que le produit a explicitement des ambitions multilingues, à la fois pour l'interface et pour la base de connaissances. Cela affecte non seulement les futures chaînes de l'application, mais aussi la documentation, les diagrammes, la sortie imprimée et la navigation interlangue. La page wiki de référence [Localisation à grande échelle](/docs/wiki/fr/localization-at-scale.html) décrit les principes durables, tandis que l'article de blog du même nom fournit un cadrage narratif.

La leçon générale est que le travail multilingue devient plus fiable lorsqu'il est traité comme une infrastructure : conçu intentionnellement, validé en continu et maintenu comme une partie du produit plutôt qu'après coup.
