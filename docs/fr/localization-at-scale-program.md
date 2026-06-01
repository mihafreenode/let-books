# Programme de localisation a grande echelle

## Resume

Ce manuel definit la localisation a grande echelle dans Let Books comme un modele operationnel de long terme pour la publication multilingue, la relecture, la validation, la maintenance et l'apprentissage continu.

Sa these centrale est simple:

> La localisation a grande echelle n'est pas d'abord un probleme de traduction.
>
> C'est un probleme de conception de systemes de feedback et de systeme de connaissance multilingue.

## Idee centrale

L'objectif n'est pas seulement de traduire des mots.

L'objectif est d'aider les personnes a apprendre, participer, contribuer, enseigner, preserver la connaissance et acceder a l'information dans la langue qu'elles comprennent le mieux, tout en gardant le systeme multilingue durable dans le temps.

## Couches du programme

- `docs/blog/` explique pourquoi la localisation compte en pratique.
- `docs/wiki/` definit des regles, modeles et formes de gouvernance durables.
- `docs/learning/` transforme le sujet en flux de travail operationnels.
- `docs/style-guide/` definit des regles pour les contributeurs, la terminologie, la relecture et la publication.
- `docs/sources/` maintient la tracabilite des affirmations principales.
- `docs/localization-audit-report.md` suit la dette, les classes de defauts et leur statut de fermeture.

## La localisation est un systeme, pas un projet

Beaucoup d'efforts de localisation sont traites comme des projets finis:

```text
Traduire
Publier
Terminer
```

La localisation a grande echelle traite la localisation comme un systeme d'exploitation:

```text
Creer
Traduire
Valider
Ameliorer
Maintenir
Mettre a jour
Prevenir la derive
Repeter
```

La difficulte n'est pas seulement de produire des traductions une fois.

La difficulte est d'exploiter un systeme de connaissance multilingue dans le temps sans perdre couverture, completude, qualite ou fraicheur.

## L'IA fonctionne mieux dans des boucles de feedback

L'IA est utile en localisation, mais son utilite depend de la qualite du systeme de feedback qui l'entoure.

Les couches de feedback les plus importantes sont:

- controles CI
- validateurs structurels
- correcteurs orthographiques
- controles terminologiques
- controles de parite semantique
- controles d'accessibilite
- controles de rendu et de navigateur
- validation des liens
- revue par des locuteurs natifs

Un feedback rapide vaut mieux qu'une premiere tentative parfaite.

## Revue bidirectionnelle

L'anglais reste la langue source canonique pour la publication et la synchronisation.

Cependant, des enseignements utiles peuvent emerger de n'importe quelle langue.

La localisation ne doit donc pas etre traitee comme un processus a sens unique:

```text
Anglais
↓
Traductions
```

Mais comme un systeme bidirectionnel:

```text
Anglais
↕
Traductions
```

Source canonique ne veut pas dire sagesse canonique.

Si un changement dans une version localisee revele une ambiguite, un probleme terminologique, un manque de contexte ou une formulation hostile a la traduction dans la source anglaise, la source canonique doit aussi etre amelioree et les autres langues revues.

Pour chaque changement important, poser les questions suivantes:

- ce changement revele-t-il un probleme dans la langue source
- d'autres langues devraient-elles en beneficier
- les regles terminologiques doivent-elles changer
- les consignes de relecture doivent-elles changer
- les validateurs doivent-ils changer

## Modele de qualite de la localisation

La qualite de la localisation doit etre suivie selon quatre dimensions:

### Couverture

Le contenu existe-t-il dans cette langue?

### Completude

Tout le contenu visible par le lecteur est-il localise?

### Qualite

Le texte est-il naturel, precis et approprie pour le public cible?

### Fraicheur

La version localisee reflete-t-elle encore la source actuelle?

## Regle de completude de la localisation

Une page n'est pas complete simplement parce que les elements suivants sont localises:

- URL
- titre
- navigation
- structure de page

Tout le contenu visible par le lecteur doit etre localise, y compris:

- resumes
- metadonnees
- etiquettes de sujet
- titres et sous-titres
- corps de l'article
- legendes et texte alternatif
- diagrammes et texte dans les diagrammes
- contenus associes

Une couverture sans completude conduit a une publication en langues mixtes.

## Corpus des constats de locuteurs natifs

Le corpus detaille des constats de locuteurs natifs reste un deliverable de premiere importance dans le manuel canonique `../localization-at-scale-program.md`.

Son but est de documenter les cas ou une traduction etait:

- techniquement correcte
- fidele dans le sens
- validee par les controles automatiques
- mais pouvait tout de meme etre amelioree par un locuteur natif

De tels exemples sont essentiels pour l'apprentissage du systeme, l'amelioration des consignes et le developpement des validateurs.

## Apprentissage continu

Chaque probleme de localisation doit ameliorer le systeme.

La boucle recommandee est:

```text
Trouver le probleme
↓
Corriger le probleme
↓
Documenter le probleme
↓
Classifier le probleme
↓
Ameliorer le flux de travail
↓
Ajouter de la validation lorsque c'est utile
↓
Empecher la recurrence
```

Le resultat ideal est qu'un probleme soit corrige:

- une fois dans le contenu
- une fois dans le systeme

## Dette, classes de defauts et derive

Suivre ces deux indicateurs:

```text
Localization Debt = X
Open Defect Classes = Y
```

La dette mesure le travail de contenu restant.

Les classes de defauts mesurent la maturite du systeme.

La derive de localisation signifie qu'un contenu localise existe mais ne reflete plus la source actuelle.

## Regle: corriger d'abord la classe, ensuite le fichier

Ne pas optimiser principalement autour du nombre de fichiers restants.

Optimiser autour du nombre de classes de defauts restantes.

Processus recommande:

1. identifier la classe du probleme
2. determiner la cause racine
3. corriger la source la plus haute possible
4. mettre a jour le validateur
5. mettre a jour le flux de travail
6. puis corriger les occurrences restantes

## Maturite du depot

Le depot devrait progresser a travers ces phases:

1. traduire le contenu
2. detecter les problemes
3. creer des validateurs
4. automatiser la validation
5. prevenir la recurrence
6. gerer la derive de localisation
7. enseigner aux futurs contributeurs et systemes d'IA

## Objectif operationnel

L'objectif le plus eleve de la localisation a grande echelle est:

**une couverture linguistique complete, la completude de la localisation, la parite semantique, la lisibilite en langue naturelle, l'adequation culturelle, l'efficacite pedagogique, l'amelioration continue, la prevention des defauts, la gestion de la derive et une publication multilingue durable grace a de fortes boucles de feedback.**

## Documents associes

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
