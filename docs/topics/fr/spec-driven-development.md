---
title: "Développement piloté par les spécifications"
summary: "Pourquoi les spécifications servent de modèle opérationnel pratique pour l'implémentation, la relecture et la communication plutôt que de documentation séparée ajoutée après coup."
topic_category: spec-driven-development
topics:
  - spec-driven-development
  - documentation
  - product-specification
related:
  blog:
    - spec-driven-development-in-let-books
  learning:
    - how-to-write-a-spec-that-ai-can-follow
  wiki:
    - spec-driven-development
---

# Développement piloté par les spécifications

Le développement piloté par les spécifications est une approche dans laquelle l'implémentation suit une description explicite du comportement du produit, des contraintes et de l'intention. La spécification n'est pas seulement un document d'exigences. Elle devient un point de référence partagé pour les développeurs, les relecteurs, les mainteneurs et les parties prenantes.

En pratique, une bonne spécification explique ce qu'un système doit faire, ce qu'il ne doit pas faire, quelles règles de qualité s'appliquent et comment le succès sera évalué. C'est ce qui la distingue d'un item de backlog, d'une démo ou d'un croquis d'architecture. Ces artefacts peuvent être utiles, mais ils portent rarement le même niveau d'intention durable.

La valeur d'un travail piloté par les spécifications n'est pas théorique. Il réduit l'ambiguïté. Lorsque plusieurs personnes touchent la même fonctionnalité au fil du temps, ou lorsqu'un assistant IA génère une partie de l'implémentation, la spécification limite la dérive en rendant visible le résultat attendu avant que les décisions de codage ne s'accumulent.

Cette approche n'exige pas un processus en cascade rigide. Les spécifications peuvent évoluer. Elles peuvent être petites ou grandes. Ce qui compte, c'est que l'implémentation puisse être vérifiée par rapport à quelque chose de plus stable que la mémoire ou l'habitude. C'est pourquoi le travail piloté par les spécifications est étroitement lié aux [couches de validation](/docs/topics/fr/validation-layers.html), à la [traçabilité de la documentation](/docs/topics/fr/documentation-traceability.html) et au workflow présenté dans le guide d'apprentissage sur [la transformation d'une spécification produit en plan d'implémentation](/docs/learning/fr/how-to-turn-a-product-spec-into-an-implementation-plan.html).

Dans Let Books, le développement piloté par les spécifications est particulièrement utile parce que le projet couvre la conception produit, la documentation multilingue, la logistique de stockage, la gestion des métadonnées et de futurs workflows assistés par l'IA. Un changement dans un domaine peut facilement créer des hypothèses dans un autre. La spécification du projet dans `AGENTS.md`, le matériau de référence dans le wiki et le matériau d'implémentation guidée dans les pages d'apprentissage travaillent ensemble pour réduire ce risque.

L'objectif n'est pas la documentation pour elle-même. L'objectif est de rendre l'implémentation plus fiable, la relecture plus concrète et la maintenance à long terme moins dépendante d'un contexte non écrit. L'article de blog associé [Développement piloté par les spécifications dans Let Books](/docs/blog/fr/spec-driven-development-in-let-books.html) montre comment ce principe façonne déjà le dépôt.
