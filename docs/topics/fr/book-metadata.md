---
title: "Métadonnées du livre"
summary: "Comment les informations descriptives sur les livres soutiennent la découverte, la relecture et les décisions de don, et pourquoi les métadonnées restent plus larges qu'un identifiant unique."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - library-systems
  - documentation
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Métadonnées du livre

Les métadonnées du livre sont les informations descriptives utilisées pour identifier, organiser et évaluer un livre. Les champs courants incluent le titre, le sous-titre, l'auteur, l'éditeur, l'année de publication, la langue, l'édition, l'ISBN et les informations de sujet. Dans les contextes de bibliothèque et de catalogue, les métadonnées peuvent aussi inclure des références d'autorité, des identifiants externes, des résumés et des données de provenance.

Les métadonnées comptent parce que les utilisateurs prennent rarement des décisions à partir des seuls identifiants. Les bibliothèques ont besoin d'assez d'informations pour juger de la pertinence. Les donateurs ont besoin d'assez d'informations pour comprendre ce qu'ils possèdent. Les relecteurs ont besoin d'assez d'informations pour faire correspondre un exemplaire physique au bon enregistrement bibliographique. De bonnes métadonnées rendent ces décisions plus rapides et moins ambiguës.

Aucun champ unique ne suffit à lui seul. L'ISBN est utile mais incomplet. Les titres peuvent varier selon l'orthographe ou la traduction. Les noms d'auteurs peuvent apparaître sous différentes formes. Les dates de publication peuvent être peu claires dans les documents plus anciens. C'est pourquoi les workflows de métadonnées robustes combinent généralement plusieurs champs et conservent la source de chaque valeur.

Dans Let Books, les métadonnées sont aussi liées à la distinction entre enregistrements bibliographiques et exemplaires physiques. Un exemplaire physique peut hériter de métadonnées au niveau de l'édition tout en ayant son propre état, son propre lieu de stockage et son propre statut de workflow. La page thématique distincte [Édition vs exemplaire physique](/docs/topics/fr/edition-vs-physical-copy.html) explique directement ce modèle.

Pour un exemple pratique de la manière dont la recherche basée sur l'ISBN s'insère dans un processus de métadonnées plus large, voir le thème [ISBN](/docs/topics/fr/isbn.html), l'article de blog [ISBN n'est pas une base de données](/docs/blog/fr/isbn-not-a-database.html) et la note du dépôt sur `docs/book-metadata.md` qui décrit la chaîne de lookup actuellement utilisée dans la démo alpha.
