---
title: "Workflows de don"
summary: "Comment les systèmes de don de livres passent de l'inventaire à la relecture, à la sélection, à la récupération et à la livraison au lieu de s'arrêter à la simple création d'un catalogue."
topic_category: book-and-library-metadata
topics:
  - book-donation
  - library-systems
  - validation
related:
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - product-specification
  blog:
    - spec-driven-development-in-let-books
---

# Workflows de don

Les workflows de don décrivent le chemin pratique qu'un livre suit depuis un stockage privé jusqu'à la relecture, la sélection, la récupération et la livraison. Dans de nombreux projets, ce workflow compte autant que les métadonnées elles-mêmes parce que le problème principal n'est pas seulement de savoir ce qu'est le livre, mais aussi de rendre le transfert gérable.

Un flux de don complet comprend généralement l'entrée, l'identification, le suivi du stockage, les décisions des relecteurs, les listes de prélèvement et les mises à jour finales de statut. Si l'une de ces étapes est faible, le processus devient plus difficile à la fois pour les donateurs et pour les institutions. Les livres peuvent être catalogués mais jamais relus, sélectionnés mais introuvables, ou emballés sans piste d'audit claire.

C'est pourquoi les workflows de don doivent être modélisés explicitement au lieu d'être traités comme une réflexion après coup du catalogage. La couche de métadonnées soutient la relecture, mais la couche de workflow soutient l'action. Elle indique au système quels livres sont disponibles, lesquels sont souhaités, lesquels sont emballés et lesquels restent non résolus.

Dans Let Books, c'est l'une des idées fondatrices du projet. La plateforme n'est pas présentée uniquement comme un scanner ou un outil de métadonnées. Elle vise à aider les personnes à éviter la perte de livres éducatifs précieux en rendant pratique le véritable processus de don. Cela inclut la capture mobile, la relecture Excel, la récupération par boîte et des changements de statut traçables.

La spécification dans `AGENTS.md` et le matériau de workflow déjà présent dans la documentation montrent que cette couche opérationnelle est de premier rang. Le don n'est pas seulement un résultat possible du catalogage. C'est l'une des principales raisons pour lesquelles le catalogue existe.
