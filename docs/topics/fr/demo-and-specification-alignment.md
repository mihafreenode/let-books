---
title: "Alignement entre démo et spécification"
summary: "Pourquoi les démos sont des preuves utiles de l'état d'implémentation mais ne devraient pas remplacer silencieusement les spécifications comme source principale de vérité du produit."
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

# Alignement entre démo et spécification

Une démo montre ce qui existe actuellement. Une spécification décrit ce que le produit est censé être. Les deux sont liées, mais elles ne sont pas interchangeables.

Les équipes traitent souvent une démo fonctionnelle comme l'artefact le plus convaincant d'un projet, et pour de bonnes raisons. Une démo rend le comportement concret. Elle expose des lacunes de workflow, des problèmes d'utilisabilité et des choix d'implémentation qui resteraient abstraits dans un document. Mais une démo est aussi une preuve incomplète. Elle est façonnée par tout ce qui a été construit jusqu'à présent, y compris les raccourcis, les expérimentations et les omissions temporaires.

L'alignement sur la spécification consiste à maintenir ces deux couches en dialogue. Si la démo diverge de la spécification, soit l'implémentation doit être corrigée, soit la spécification doit être relue. Ce qui ne doit pas arriver, c'est une dérive silencieuse où la démo devient la nouvelle vérité simplement parce qu'elle existe sous une forme plus visible.

Cela compte particulièrement dans les projets qui avancent vite. Un workflow assisté par l'IA peut générer des interfaces et des comportements plus vite que la documentation environnante n'est mise à jour. Sans habitude explicite d'alignement, les contributeurs peuvent commencer à suivre simplement ce que montre la démo du moment.

Let Books utilise cette distinction avec soin. Le dépôt contient déjà une démo statique publique, des spécifications produit de haut niveau, des consignes d'implémentation et une documentation localisée. La démo est précieuse parce qu'elle rend tangibles les workflows de stockage, de QR et de métadonnées. Elle ne suffit pas à elle seule à redéfinir des règles de workflow encore spécifiées ailleurs. L'article de blog [Quand la démo est une preuve et quand elle ne l'est pas](/docs/blog/fr/when-the-demo-is-evidence-and-when-it-is-not.html) explore directement cette tension.

La règle pratique est simple : une démo est une preuve d'implémentation, pas une autorité produit automatique. L'alignement exige de comparer ensemble démos, spécifications, documentation et résultats de validation au lieu de laisser l'un d'entre eux dominer par accident.
