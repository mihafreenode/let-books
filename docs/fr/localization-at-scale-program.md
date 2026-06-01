# Programme de localisation à grande échelle

## Résumé

Ce manuel définit la localisation à grande échelle dans Let Books comme un modèle opérationnel de long terme pour la publication multilingue, la relecture, la validation, la maintenance et l'apprentissage continu.

Sa thèse centrale est simple :

> La localisation à grande échelle n'est pas d'abord un problème de traduction.
>
> C'est un problème de conception de systèmes de feedback et un problème de système de connaissances multilingue.

L'objectif n'est pas seulement de traduire des mots.

L'objectif est d'aider les personnes à apprendre, participer, contribuer, enseigner, préserver la connaissance et accéder à l'information dans la langue qu'elles comprennent le mieux, tout en gardant ce système multilingue maintenable dans le temps.

## Couches Du Programme

- `docs/blog/` explique pourquoi la localisation compte en pratique.
- `docs/wiki/` définit des règles, des modèles et une gouvernance durables.
- `docs/learning/` transforme le sujet en flux de travail opérationnels.
- `docs/style-guide/` définit les règles pour les contributeurs, la terminologie, la relecture et la publication.
- `docs/sources/` maintient la traçabilité des affirmations principales.
- `docs/localization-audit-report.md` suit la dette, les classes de défauts et l'état de clôture.

## Partie 1 - Pourquoi La Localisation Compte

La localisation compte parce que l'accessibilité linguistique fait partie de l'accès réel.

Si un lecteur ne peut pas comprendre le contenu avec aisance, alors l'accès n'existe que dans un sens technique étroit.

Pour Let Books, la publication multilingue compte pour des raisons pratiques :

- accessibilité éducative
- participation culturelle
- égalité d'accès au savoir
- inclusion numérique
- technologie d'intérêt public
- gouvernance multilingue
- préservation des langues plus petites
- soutien aux langues officielles et régionales
- multilinguisme européen dans la pratique
- le principe de « Unie dans la diversité » appliqué à des logiciels opérationnels et à des systèmes de connaissances

Ce n'est pas un plaidoyer pour une traduction symbolique.

C'est un plaidoyer pour une participation multilingue réellement utilisable.

Les lecteurs ne rencontrent pas seulement des titres et des menus. Ils rencontrent des explications, des mises en garde, des diagrammes, des workflows de relecture, des exemples, du texte d'accessibilité, des métadonnées et un cadrage pédagogique. Si tout cela reste en anglais, le système continue de privilégier les lecteurs anglophones, même lorsque des enveloppes localisées existent.

## Partie 2 - La Localisation Est Un Système, Pas Un Projet

De nombreux efforts de localisation sont gérés comme s'il s'agissait de projets finis :

```text
Traduire
Publier
Terminer
```

Ce modèle se casse rapidement.

Le contenu évolue.

La terminologie évolue.

Les langues évoluent.

Les contributeurs changent.

Les systèmes d'IA s'améliorent.

Les locuteurs natifs découvrent de nouveaux problèmes après publication.

La localisation à grande échelle traite donc la localisation comme un système d'exploitation :

```text
Créer
Traduire
Valider
Améliorer
Maintenir
Mettre à jour
Prévenir La Dérive
Répéter
```

Le problème difficile n'est pas de produire des traductions une seule fois.

Le problème difficile est d'exploiter dans le temps un système de connaissances multilingue sans perdre couverture, parité, qualité, fraîcheur ou confiance des relecteurs.

## Partie 3 - L'IA Fonctionne Mieux À L'Intérieur De Boucles De Feedback

L'IA est utile en localisation, mais son utilité dépend de la qualité du système de feedback qui l'entoure.

Kent Beck a résumé clairement la version ingénierie de ce principe :

> « L'optimisme est un risque professionnel de la programmation ; le feedback en est le traitement. »

Norbert Wiener en a décrit la version systémique :

> « Le feedback est une méthode de contrôle d'un système en y réinjectant les résultats de ses performances passées. »

C'est aussi le bon modèle pour la publication multilingue.

L'IA fonctionne le mieux lorsque sa sortie est immédiatement exposée à des feedbacks tels que :

- contrôles CI
- validateurs structurels
- correcteurs orthographiques
- contrôles terminologiques
- contrôles de parité sémantique
- contrôles d'accessibilité
- contrôles de navigateur et de rendu
- validation des liens
- relecture par des locuteurs natifs

Un feedback rapide vaut mieux qu'une première tentative parfaite.

L'objectif n'est pas d'exiger des brouillons parfaits des humains ou de l'IA.

L'objectif est de raccourcir la boucle entre :

- création du contenu
- découverte des défauts
- correction des défauts
- prévention de leur réapparition

## Partie 3A - Relecture Bidirectionnelle

L'anglais reste la langue source canonique pour des raisons de publication et de synchronisation.

Cependant, des enseignements utiles peuvent provenir de n'importe quelle langue.

Exemples :

- une relecture par un locuteur natif identifie une formulation source maladroite
- un traducteur découvre une ambiguïté
- un relecteur trouve un contexte manquant
- un article localisé gagne un meilleur exemple
- la terminologie s'améliore dans une langue autre que l'anglais
- une relecture culturelle révèle un problème d'accessibilité

Ces constats peuvent justifier des changements dans la source canonique elle-même.

### Principe De Relecture Bidirectionnelle

La localisation ne doit pas être traitée comme un processus à sens unique :

```text
English
↓
Translations
```

Mais plutôt comme ceci :

```text
English
↕
Translations
```

L'anglais reste canonique.

La connaissance peut circuler dans les deux sens.

### Événement De Relecture Interlangue

Tout changement substantiel de contenu doit déclencher une relecture des langues associées.

Si l'anglais change, vérifier :

- toutes les versions localisées
- la parité sémantique
- les métadonnées
- les résumés
- les diagrammes et captures d'écran lorsque c'est pertinent

Si une version localisée change, vérifier :

- si le constat améliore la source canonique
- si d'autres langues devraient en bénéficier
- si la guidance terminologique doit changer
- si la guidance de relecture doit changer
- si les validateurs doivent changer

### Amélioration De La Source Grâce À La Localisation

La relecture de localisation peut révéler :

- des ambiguïtés
- une complexité inutile
- des formulations hostiles à la traduction
- des hypothèses implicites
- des tournures culturellement spécifiques
- une terminologie peu accessible

Dans ce cas, améliorer la source peut être préférable à compenser séparément dans chaque traduction.

```text
Problème découvert en slovène
↓
Cause racine trouvée en anglais
↓
Anglais amélioré
↓
Toutes les langues en bénéficient
```

### Prompt De Relecture Pour Agent IA

Lorsque vous modifiez une version linguistique, posez-vous la question :

```text
Ce changement révèle-t-il un problème dans la langue source ?
Ce changement améliore-t-il d'autres versions linguistiques ?
La guidance terminologique doit-elle changer ?
La guidance de relecture doit-elle changer ?
Les validateurs doivent-ils changer ?
```

La réponse peut être :

```text
Aucune action nécessaire
```

ou :

```text
Ouvrir une tâche de relecture interlangue
```

### Principe Fondamental

Source canonique ne veut pas dire sagesse canonique.

L'anglais peut être la source de synchronisation.

La connaissance, les améliorations, les constats de relecture et les enseignements qualité peuvent provenir de n'importe quelle langue prise en charge.

Un projet multilingue devrait permettre à des améliorations découvertes dans une langue de bénéficier à toutes les langues.

## Partie 4 - Modèle De Qualité De La Localisation

La qualité de la localisation doit être suivie selon quatre dimensions.

### Couverture

La couverture demande si le lecteur peut accéder au contenu dans sa langue.

Exemples :

- L'article existe-t-il en slovène ?
- Le guide pratique existe-t-il en macédonien ?
- La page de politique existe-t-elle en serbe cyrillique ?

La couverture est binaire au niveau de la publication.

Soit le contenu existe pour ce public, soit il n'existe pas.

### Exhaustivité

L'exhaustivité demande si toutes les parties de la page orientées lecteur sont localisées.

Exemples :

- titre localisé mais résumé en anglais
- corps localisé mais tags en anglais
- article localisé mais libellés de diagramme non traduits
- enveloppe de page localisée mais cartes de contenus associés en anglais

La couverture sans exhaustivité produit une publication en langue mixte.

### Qualité

La qualité demande si le texte localisé se lit naturellement, avec exactitude et de manière appropriée pour son public.

Exemples :

- formulation techniquement correcte mais calquée sur la traduction
- sens préservé mais rhétorique peu naturelle
- texte de politique exact mais pas au niveau d'une publication
- explication pédagogique correcte mais difficile à assimiler

La qualité est l'endroit où la relecture par des locuteurs natifs apporte la valeur la plus spécifique.

### Fraîcheur

La fraîcheur demande si la version localisée reflète toujours la source actuelle.

Exemples :

- nouvel avertissement ajouté en anglais mais absent des traductions
- conclusion de la source modifiée mais pages traduites toujours cadrées selon l'ancienne version
- diagramme ou capture mis à jour mais pas encore localisé

La fraîcheur est la face opérationnelle de la dérive de localisation.

## Partie 5 - Exhaustivité De La Localisation

### Règle De Localisation Orientée Lecteur

Une page n'est pas complète simplement parce que l'un des éléments suivants est localisé :

- URL
- titre
- navigation
- enveloppe de page
- ébauche d'article

Tout le contenu orienté lecteur doit être localisé avant qu'une page soit considérée comme complète.

Le contenu orienté lecteur inclut :

- titres
- sous-titres
- résumés
- descriptions
- tags et libellés de catégorie
- intertitres
- corps des articles
- listes
- encadrés
- légendes
- diagrammes
- texte alternatif
- texte de contenu associé
- métadonnées affichées aux lecteurs
- fils d'Ariane localisés lorsqu'il existe des variantes

Les exceptions autorisées sont limitées :

- citations
- contenu clairement marqué en langue source et faisant l'objet de la discussion
- noms propres
- identifiants techniques
- non-traduction explicitement intentionnelle

### Schéma D'Échec De Publication En Langue Mixte

L'une des leçons les plus importantes de cette initiative est que la publication en langue mixte donne souvent l'impression superficielle d'avoir réussi.

La page peut avoir :

- un chemin localisé
- un titre localisé
- un paragraphe d'ouverture localisé

et pourtant échouer pour les lecteurs parce que les résumés, tags, intertitres ou sections du corps restent en anglais.

C'est pourquoi l'exhaustivité est suivie séparément de la couverture.

## Partie 6 - Constats De Relecture Par Des Locuteurs Natifs

Cette section est un livrable de premier ordre.

Elle doit s'enrichir avec le temps.

Elle ne doit pas être condensée en conclusions courtes.

Son objectif est de documenter des cas réels où :

- la traduction était techniquement correcte
- la traduction préservait le sens voulu
- la traduction passait la validation automatisée
- la traduction passait le correcteur orthographique
- la traduction passait probablement les contrôles de parité sémantique
- un locuteur natif trouvait malgré tout une occasion de l'améliorer

C'est là que réside la valeur pédagogique.

Cela montre ce qu'il reste une fois que les outils modernes de localisation ont déjà fait leur travail.

### Format D'Entrée Du Corpus

Chaque entrée doit capturer :

- l'article source
- la langue
- le texte anglais d'origine
- le texte localisé d'origine
- le texte localisé amélioré
- l'explication
- la catégorie
- si le QA automatisé détecterait probablement le problème
- les leçons apprises

### Index Des Catégories

Les catégories actuelles et attendues incluent :

- structure parallèle
- transfert rhétorique depuis l'anglais
- constructions à agent caché
- abstractions anthropomorphiques
- traductionese
- décalage avec le style pédagogique
- décalage avec le style du secteur public
- terminologie peu naturelle
- transfert de schémas discursifs
- adaptation culturelle
- décalage avec les attentes du public
- amélioration de la lisibilité
- amélioration du ton
- préservation sémantique avec perte de fluidité
- publication en langue mixte
- terminologie anglaise inutile
- jargon professionnel non localisé
- optimisation du texte source pour la localisation
- faux ami de terminologie technique

### Optimisation Du Texte Source Pour La Localisation

Définition :

Une phrase source peut être techniquement correcte tout en étant inutilement difficile à traduire naturellement dans plusieurs langues.

Directive :

Lorsque des problèmes de traduction répétés proviennent de la formulation source elle-même, améliorez le texte source au lieu de compenser à répétition dans chaque langue cible.

Principe de travail :

> Un meilleur texte source produit souvent de meilleures traductions dans toutes les langues.

### Faux Ami De Terminologie Technique

Définition :

Un terme technique est traduit avec le mauvais sens de domaine professionnel alors même que le sens apparent du dictionnaire semble plausible.

Directive :

Traduisez le vocabulaire technique selon le contexte de domaine actif. En localisation logicielle, les termes liés aux tests, au QA, au benchmarking et à l'évaluation doivent d'abord être résolus à partir de ces domaines, et non à partir de sens physiques ou quotidiens sans rapport.

### Constat 1 - Structure Parallèle

- Article source : `docs/blog/sl/documentation-is-part-of-the-product.md`
- Langue : Slovène
- Texte anglais d'origine : `what the project is trying to achieve and what it is explicitly not trying to become`
- Texte localisé d'origine : `kaj projekt skuša doseči in česa ne sme postati`
- Texte localisé amélioré : `kaj projekt skuša doseči in kaj ne sme postati`
- Explication : La phrase slovène d'origine est grammaticalement correcte et compréhensible. Elle préserve le sens voulu. Elle passerait probablement les contrôles d'orthographe, de parité sémantique et de QA général. Le problème est stylistique et structurel. La formulation reproduit trop étroitement la structure de contraste anglaise et perd la forme parallèle plus nette qu'un auteur slovène natif choisirait normalement.
- Catégorie : structure parallèle ; fluidité en langue maternelle ; traductionese
- Le QA automatisé le détecterait-il probablement ? : Non.
- Leçons apprises : La préservation du sens ne suffit pas pour une prose de qualité éditoriale. Les structures parallèles survivent souvent à la traduction automatique sous des formes techniquement acceptables mais légèrement étrangères.

### Constat 2 - Transfert Rhétorique Depuis L'Anglais

- Article source : `docs/blog/sl/documentation-is-part-of-the-product.md`
- Langue : Slovène
- Texte anglais d'origine : `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Texte localisé d'origine : `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Texte localisé amélioré : `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Explication : La version slovène d'origine est compréhensible et alignée sémantiquement, mais elle transfère trop directement les habitudes rhétoriques de l'anglais. `Bi morale to zanimati` n'est pas faux, mais cela sonne davantage comme un argument traduit que comme une prose explicative slovène rédigée naturellement. La version améliorée utilise une construction plus idiomatique pour une prose institutionnelle.
- Catégorie : transfert de schéma rhétorique anglais ; transfert de schéma discursif ; décalage avec le style du secteur public
- Le QA automatisé le détecterait-il probablement ? : Non.
- Leçons apprises : La qualité en langue maternelle dépend souvent des schémas rhétoriques privilégiés, et pas seulement de la justesse lexicale. L'écriture institutionnelle et d'intérêt public peut demander des habitudes phrastiques différentes de celles suggérées par les originaux anglais.

### Constat 3 - Construction À Agent Caché

- Article source : `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Langue : Slovène
- Texte anglais d'origine : `Why documentation cannot wait until later`
- Texte localisé d'origine : `Zakaj dokumentacija ne sme čakati`
- Texte localisé amélioré : `Zakaj se z dokumentacijo ne sme čakati`
- Explication : L'intitulé anglais implique un agent humain caché : les personnes ne devraient pas remettre la documentation à plus tard. La version slovène littérale transfère l'action au nom abstrait lui-même, comme si la documentation était l'acteur qui ne devait pas attendre. Le résultat reste compréhensible mais sonne faux sur le plan rhétorique. La version améliorée rétablit l'agentivité humaine implicite tout en gardant un titre compact.
- Catégorie : construction à agent caché ; abstraction anthropomorphique ; transfert littéral du sujet
- Le QA automatisé le détecterait-il probablement ? : Non.
- Leçons apprises : Les titres sont particulièrement vulnérables aux erreurs d'agent caché parce que l'anglais tolère des abstractions compressées qui ne se transfèrent pas toujours naturellement dans d'autres langues.

### Constat 4 - Préservation Sémantique Sans Fluidité Native

- Article source : `docs/blog/sl/ai-will-not-replace-translators.md`
- Langue : Slovène
- Texte anglais d'origine : `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Texte localisé d'origine : `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Texte localisé amélioré : `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Explication : C'est l'un des exemples les plus nets du dépôt montrant pourquoi la relecture par des locuteurs natifs reste nécessaire après le QA automatisé. Le brouillon préserve le sens général. Il communique l'orientation de la politique. Il passerait probablement de nombreux contrôles non natifs. Pourtant, il contient encore trois problèmes distincts de langue native : une modalité agrammaticale dans `morajo moči`, un ordre des mots maladroit dans `po potrebi tudi izklopiti` et une formulation de politique inadaptée au domaine dans `morajo biti izrecne`. La version améliorée n'est pas seulement plus élégante. Elle transforme le texte d'un brouillon compréhensible en langage de politique naturel.
- Catégorie : préservation sémantique avec perte de fluidité ; modalité ; formulation de politique liée au domaine ; registre ; amélioration de la lisibilité
- Le QA automatisé le détecterait-il probablement ? : Partiellement, au mieux. Les outils grammaticaux pourraient signaler `morajo moči`, mais le QA automatisé manquerait probablement le problème de registre politique et l'amélioration spécifique au domaine de `izrecne` vers `izrecno omogočene`.
- Leçons apprises : Une traduction peut préserver le sens et rester malgré tout impropre à la publication. C'est l'un des arguments les plus forts en faveur du stockage des corrections de locuteurs natifs comme preuves réutilisables au lieu de les traiter comme de simples retouches de copie.

### Constat 5 - Publication En Langue Mixte

- Article source : `docs/blog/sl/the-cost-of-english-only-software.md`
- Langue : Slovène
- Texte anglais d'origine : `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Des libellés de sujet rendus en anglais comme `digital-inclusion`, `education` et `public-sector-software` restaient également visibles sur les surfaces de publication.
- Texte localisé d'origine : La page slovène utilisait le titre localisé `Cena programske opreme samo v angleščini`, mais les lecteurs voyaient encore un résumé en anglais, des libellés de sujet rendus en anglais et des sections de corps en anglais.
- Texte localisé amélioré : L'article slovène publié utilise désormais le résumé localisé `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Il utilise aussi un corps localisé et des libellés de sujet rendus localisés, sans placeholder anglais ni fuite de langue mixte.
- Explication : Il s'agit d'un exemple au niveau du dépôt plutôt que d'une phrase isolée, mais il est essentiel. À première vue, la page semblait traduite. Un chemin localisé et un titre localisé existaient. Ce succès superficiel aurait facilement pu passer une revue rapide. Un locuteur natif, cependant, percevrait toujours la page comme visiblement incomplète parce que de l'anglais restait visible sur des surfaces de publication orientées lecteur. C'est aussi là que le jargon professionnel non localisé et la terminologie anglaise inutile apparaissent souvent d'abord : les libellés de taxonomie, les résumés, les métadonnées et le texte d'aide fuient avant que les paragraphes principaux soient corrigés.
- Catégorie : publication en langue mixte ; exhaustivité de la localisation ; terminologie anglaise inutile ; jargon professionnel non localisé
- Le QA automatisé le détecterait-il probablement ? : Oui, si des validateurs d'exhaustivité sur le markdown source et le HTML généré sont activés. Non, si le workflow vérifie seulement l'existence des fichiers et non la sortie orientée lecteur.
- Leçons apprises : La couverture sans exhaustivité est un défaut de production. La publication en langue mixte doit être traitée comme un échec qualité bloquant, et non comme un problème cosmétique.

### Constat 6 - Adéquation Au Public Pédagogique Et Institutionnel

- Article source : `docs/blog/sl/documentation-is-part-of-the-product.md`
- Langue : Slovène
- Texte anglais d'origine : `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Texte localisé d'origine : `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Texte localisé amélioré : `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Explication : La phrase localisée d'origine a du sens et reste compréhensible, mais elle porte encore des habitudes rhétoriques anglaises et un style nominal un peu lourd. La version améliorée se lit plus naturellement pour un public pédagogique, réduit l'abstraction inutile et correspond mieux à la prose explicative slovène.
- Catégorie : décalage avec le style pédagogique ; décalage avec les attentes du public ; amélioration du ton
- Le QA automatisé le détecterait-il probablement ? : Non.
- Leçons apprises : L'éducation du lecteur fait partie de la qualité de localisation. Une phrase peut être correcte tout en ratant la voix pédagogique naturelle attendue par son public cible.

### Constat 7 - Optimisation Du Texte Source Pour La Localisation

- Article source : `docs/blog/en/why-every-language-matters.md` et variantes localisées de la même famille d'articles
- Langue : Source anglaise avec impact de localisation interlocale ; déclencheur de relecture observé en slovène
- Texte anglais d'origine : `The hidden exclusion of English-only systems`
- Texte localisé d'origine : Slovène : `Skrita izključitev angleško-izključnih sistemov`
- Texte localisé amélioré : Anglais : `Why English-only systems exclude people` Slovène : `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Explication : Le titre anglais d'origine est techniquement correct, mais il condense trop d'éléments dans un schéma nominal propre à l'anglais. Il s'appuie sur le nom abstrait `exclusion` et sur le modificateur compact `English-only systems`. Cette combinaison est efficace en anglais mais maladroite dans de nombreuses langues cibles. En slovène, elle a produit une expression grammaticalement possible mais peu naturelle, `angleško-izključnih sistemov`, qui demande au lecteur un effort de décodage supplémentaire. Il ne s'agit pas d'abord d'un échec de la langue cible. C'est un problème de conception du texte source. Réécrire le titre anglais en proposition plus explicite améliore la lisibilité en anglais et facilite une traduction naturelle dans toute la famille d'articles.
- Catégorie : optimisation du texte source pour la localisation ; prévention du traductionese ; rédaction favorable à la localisation
- Le QA automatisé le détecterait-il probablement ? : Non. Le QA structurel, le correcteur orthographique, les contrôles de parité sémantique et les contrôles d'exhaustivité passeraient probablement tous. Le problème apparaît lorsque des locuteurs natifs évaluent le naturel et la traduisibilité à travers les langues.
- Leçons apprises : Certains problèmes de localisation doivent être résolus au niveau de la source, et non séparément dans chaque locale. Si plusieurs langues peinent avec la même construction anglaise compacte, la formulation source doit être revue pour sa compatibilité avec la localisation.

### Constat 8 - Faux Ami De Terminologie Technique

- Article source : `docs/wiki/let-books-localization-case-study.md` et `docs/wiki/sl/let-books-localization-case-study.md`
- Langue : Constat de relecture slovène déclenché par une terminologie technique anglaise
- Texte anglais d'origine : `Benchmark fixture direction` et `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Texte localisé d'origine : `Primerjalna smer napeljave` et `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Texte localisé amélioré : `Referenčni primeri za primerjalno vrednotenje` et `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Explication : Le problème n'est pas grammatical. Il relève de l'interprétation du domaine. Dans les contextes de test, de benchmarking et d'évaluation, `fixture` désigne généralement un exemple de référence réutilisable, un cas de test ou un artefact d'évaluation. La traduction slovène a interprété le terme selon un sens d'infrastructure physique lié au câblage ou à l'installation. Cela a produit un texte sémantiquement trompeur, même si le traducteur a pu choisir une acception plausible au dictionnaire. C'est un faux ami classique de terminologie technique : le mauvais domaine l'a emporté.
- Catégorie : faux ami de terminologie technique ; terminologie de domaine ; vocabulaire des tests et de l'évaluation
- Le QA automatisé le détecterait-il probablement ? : Non. L'orthographe, la grammaire et de larges contrôles sémantiques peuvent tous passer parce que la phrase reste superficiellement cohérente. L'échec apparaît lorsqu'une relecture humaine sensible au domaine vérifie que le terme technique appartient bien au bon contexte professionnel.
- Leçons apprises : La terminologie technique doit être traduite selon le sens du domaine, et non selon le sens par défaut du dictionnaire. Des exemples de benchmark réutilisables, des cas de test de benchmark ou des exemples de référence pour l'évaluation sont ici des interprétations appropriées ; les sens liés à l'infrastructure ne le sont pas.

### Règle Opérationnelle Pour Le Corpus

Chaque fois qu'une nouvelle catégorie est découverte :

1. corriger le contenu
2. ajouter une entrée au corpus
3. classifier le problème
4. ajouter ou affiner la guidance
5. ajouter une couverture de validateur si c'est pratique
6. ajouter une couverture de régression si c'est pratique
7. faire référence au nouveau constat depuis les documents de workflow et de QA

Les locuteurs natifs sont les plus précieux ici non pas parce qu'ils corrigent des erreurs évidentes.

Ils le sont parce qu'ils transforment un contenu correct en une communication naturelle, culturellement appropriée et publiable.

## Partie 7 - Apprentissage Continu

Chaque problème de localisation doit améliorer le système.

La boucle privilégiée est :

```text
Trouver le problème
↓
Corriger le problème
↓
Documenter le problème
↓
Classifier le problème
↓
Améliorer le workflow
↓
Ajouter de la validation lorsque c'est pratique
↓
Empêcher la réapparition
```

Le résultat idéal est qu'un problème de localisation soit corrigé :

- une fois dans le contenu
- une fois dans le système

## Partie 8 - Évolution Des Validateurs

Pour chaque problème significatif, posez la question :

> Peut-on le détecter automatiquement ?

### Entièrement Automatisable

Exemples :

- variante d'article manquante
- résumé non traduit
- métadonnées non traduites
- page en langue mixte
- changement de langue cassé
- navigation générée manquante

### Partiellement Automatisable

Exemples :

- raccourcissement suspect
- dérive sémantique probable
- explication pour le public manquante
- parité de contenus associés manquante
- décalage de diagramme suspect

### Relecture Humaine

Exemples :

- naturel rhétorique
- fluidité
- adéquation culturelle
- efficacité pédagogique
- registre de langue natif
- adéquation au style du secteur public

La bonne question n'est pas de savoir si les humains ou les validateurs sont meilleurs.

La bonne question est de savoir quelle classe de défaut appartient à quelle couche de feedback.

## Quand La Qualité Devient Mesurable

Au début, la confiance provient surtout de l'inspection manuelle.

Les développeurs lisent les pages.

Les relecteurs comparent les traductions.

Les contributeurs recherchent les problèmes un par un.

À mesure que le dépôt gagne en maturité, la confiance commence à venir de mécanismes de feedback accumulés :

- documentation
- consignes de relecture
- validateurs
- contrôles CI
- contrôles d'accessibilité
- contrôles de parité sémantique
- contrôles d'exhaustivité de localisation
- constats de relecture par des locuteurs natifs
- tests de régression

À ce stade, la question principale change.

Au lieu de demander :

> Avons-nous tout vérifié manuellement ?

le projet commence à demander :

> Quels systèmes de feedback permettraient à un problème de survivre sans être remarqué ?

C'est la transition entre vérification du contenu et vérification du système.

Un système de localisation mature n'est pas un système qui ne contient jamais de défauts.

Un système de localisation mature est un système où les classes de défauts connues sont :

- documentées
- détectables
- reproductibles
- suivies
- surveillées en continu
- difficiles à réintroduire accidentellement

## Partie 9 - Dette De Localisation

Suivez `Localization Debt` comme le backlog de contenu restant.

La dette typique inclut :

- résumés non traduits
- métadonnées non traduites
- corps non traduits
- placeholders
- diagrammes non traduits
- tags non traduits
- liens de variantes linguistiques obsolètes

La dette mesure le travail de remédiation restant.

La dette ne dit pas si le système apprend.

## Partie 10 - Classes De Défauts Ouvertes

Suivez `Open Defect Classes` comme le nombre de catégories de problèmes qui ne sont pas encore entièrement prévenues par la politique, le workflow, les validateurs et la CI.

Exemples :

- résumés non traduits
- corps non traduits
- publication de placeholders
- métadonnées non traduites
- publication en langue mixte
- futures classes découvertes

La dette mesure le travail restant à accomplir.

Les classes de défauts mesurent la maturité du système.

## Partie 11 - Corriger Les Classes Avant Les Fichiers

N'optimisez pas principalement autour de :

```text
47 fichiers restants
```

Optimisez autour de :

```text
3 classes de défauts restantes
```

Processus privilégié :

1. identifier la classe
2. déterminer la cause racine
3. corriger la source du niveau le plus élevé
4. mettre à jour le validateur
5. mettre à jour le workflow
6. puis corriger le contenu restant

La même erreur répétée dans de nombreux fichiers est généralement d'abord un problème de système avant d'être un problème de fichier.

## Partie 12 - Clôture Des Classes De Défauts

Lorsqu'une classe de défaut atteint zéro occurrence :

1. ajouter une couverture de validateur si elle manque
2. rendre la validation bloquante quand c'est pratique
3. ajouter des contrôles de régression
4. mettre à jour la guidance pour les contributeurs
5. mettre à jour la guidance pour les agents IA
6. marquer la classe comme clôturée

L'objectif n'est pas :

> Aucune occurrence aujourd'hui.

L'objectif est :

> Le problème ne peut pas revenir silencieusement demain.

## Partie 13 - Remédiation À La Source D'Abord

Ordre d'investigation par défaut :

1. markdown source
2. fichiers source de localisation
3. métadonnées
4. registres
5. générateurs
6. artefacts générés
7. HTML généré

Corrigez la source du niveau le plus élevé possible.

Évitez de patcher du HTML généré lorsque le contenu source est erroné.

Cela évite les réparations répétées en aval et garde le dépôt explicable.

## Partie 14 - Workflow D'Agent IA

Le workflow standard de dépannage est :

```text
Trouver le problème
↓
Trouver la source de vérité
↓
Corriger la source
↓
Régénérer
↓
Valider
↓
Répéter
```

Lorsque le même problème apparaît de façon répétée :

```text
Créer une classe de défaut
↓
Créer un validateur
↓
Créer une guidance
↓
Poursuivre la remédiation
```

La quatrième occurrence du même problème devrait généralement déclencher une amélioration du système plutôt qu'une nouvelle correction manuelle isolée.

## Partie 15 - Dérive De Localisation

La dérive de localisation signifie qu'un contenu localisé existe mais ne reflète plus la source.

Les cas typiques de dérive incluent :

- nouvelles sections source
- nouveaux exemples
- nouveaux avertissements
- conclusions modifiées
- diagrammes modifiés
- captures d'écran mises à jour
- guidance pour les contributeurs modifiée

La fraîcheur est la manière dont la dérive devient mesurable.

La gestion de la dérive doit s'appuyer sur :

- la prise en compte des révisions de la source
- la comparaison sémantique lorsque c'est pratique
- une CI d'abord basée sur des avertissements
- une CI bloquante lorsque la confiance est élevée
- une attention explicite des relecteurs lors des mises à jour majeures

## Partie 16 - Modèle De Maturité Du Dépôt

Le dépôt doit passer par ces étapes :

1. Traduire le contenu.
2. Détecter les problèmes.
3. Créer des validateurs.
4. Automatiser la validation.
5. Prévenir la réapparition.
6. Gérer la dérive de localisation.
7. Former les futurs contributeurs et systèmes d'IA.

C'est ainsi que la connaissance institutionnelle s'accumule.

Le travail antérieur cesse d'être jetable parce que les systèmes ultérieurs l'héritent.

## Partie 17 - Feuille De Route Du Contenu

Le programme doit maintenir une couverture multilingue cohérente à travers :

- les articles de blog qui expliquent pourquoi la localisation compte
- les pages wiki qui définissent les politiques et règles de référence
- les guides pratiques qui enseignent les workflows
- les guides de style qui enseignent l'écriture, la terminologie et la pratique de relecture
- les documents d'audit et de gouvernance qui suivent la maturité et les défauts
- les études de cas qui préservent des preuves pratiques

La feuille de route doit donner la priorité à :

1. l'exhaustivité canonique de l'anglais
2. la couverture linguistique complète sur toutes les locales prises en charge
3. l'exhaustivité orientée lecteur dans chaque locale
4. la couverture de validateurs à forte valeur
5. la croissance du corpus de locuteurs natifs
6. la surveillance de la dérive pour le contenu phare

Tous les documents majeurs doivent se croiser agressivement afin que les lecteurs puissent passer du principe au workflow, puis à la politique et à la preuve.

## Partie 18 - Critères De Réussite

Un lecteur qui passe d'une langue prise en charge à une autre doit rencontrer :

- les mêmes concepts fondamentaux
- les mêmes exemples
- les mêmes mises en garde
- la même valeur pédagogique
- la même guidance pratique

En même temps, chaque langue doit donner l'impression d'avoir été rédigée naturellement pour son public.

L'objectif le plus élevé de la localisation à grande échelle est :

**une couverture linguistique complète, l'exhaustivité de la localisation, la parité sémantique, la lisibilité en langue native, l'adéquation culturelle, l'efficacité pédagogique, l'amélioration continue, la prévention des défauts, la gestion de la dérive et une publication multilingue durable grâce à de fortes boucles de feedback.**

## Métriques Opérationnelles

Suivez ces nombres en continu :

```text
Localization Debt = X
Open Defect Classes = Y
```

La cible de long terme est :

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Documents Associés

- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `wiki/localization-governance.md`
- `wiki/localization-maturity-model.md`
- `wiki/let-books-localization-case-study.md`
- `style-guide/localization/README.md`
- `style-guide/localization/ai-translation-review-records.md`
- `learning/how-to-build-a-localization-pipeline.md`
- `learning/how-to-review-ai-assisted-translations.md`
- `learning/how-to-run-localization-qa-in-ci.md`
- `localization-audit-report.md`
