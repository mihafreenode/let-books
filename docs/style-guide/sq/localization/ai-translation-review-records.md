# Regjistra të rishikimit të përkthimit AI

## Përmbledhje

Ky udhëzues shpjegon si rishikuesit njerëzorë duhet të dokumentojnë korrigjimet e përkthimeve të gjeneruara nga AI që shembujt të mund të ripërdoren në qeverisje, trajnim, QA dhe vlerësim.

## Pse ka rëndësi kjo

Edhe kur kuptimi i përgjithshëm ruhet, përkthimet e gjeneruara nga AI mund të kërkojnë rishikim nga folës vendas për të korrigjuar probleme të holla në gramatikë, modalitet, terminologji dhe regjistër specifik të fushës. Këto çështje shpesh janë të vështira për t'u zbuluar vetëm me metrika të automatizuara cilësie.

## Formati i kërkuar i regjistrit të rishikimit

Çdo shembull i rishikuar duhet të kapë:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Përdorni këtë shabllon:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Taksonomia e rekomanduar e gabimeve

Përdorni një ose më shumë nga këto kategori kur është e zbatueshme:

- grammar
- modality
- terminology
- register
- fluency
- literal translation
- ambiguity
- context loss
- word order
- collocation
- script or orthography
- domain-policy phrasing
- accessibility wording

## Udhëzime për hipotezën e shkakut rrënjësor

Shënimet e rishikuesit nuk kanë nevojë për siguri të plotë. Një hipotezë e shkurtër mjafton nëse ndihmon rishikuesit e ardhshëm dhe punën për vlerësimin e modelit.

Hipotezat e zakonshme përfshijnë:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Studim rasti slloven

### Original AI draft

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Corrected Slovenian

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

### Review record

* Issue:
  Original: `morajo moči`
  Corrected: `morajo imeti možnost, da`
  Error Category: grammar, modality
  Root-Cause Hypothesis: literal translation of "must be able to"
  Reviewer Rationale: the original construction is ungrammatical in Slovenian; the corrected form is the natural modal formulation.

* Issue:
  Original: `po potrebi tudi izklopiti`
  Corrected: `da po potrebi izklopijo`
  Error Category: fluency, word order
  Root-Cause Hypothesis: unnatural source-language word order and weak discourse control
  Reviewer Rationale: the corrected order is clearer and removes unnecessary emphasis.

* Issue:
  Original: `morajo biti izrecne`
  Corrected: `morajo biti izrecno omogočene`
  Error Category: terminology, domain-policy phrasing, register
  Root-Cause Hypothesis: dictionary-equivalent adjective chosen without policy context
  Reviewer Rationale: the requirement is about explicit enablement of paid enrichment, not about the enrichments being "explicit" as a descriptive adjective.

## Mësime të ripërdorshme ndërgjuhësore

- Një përkthim mund të ruajë kuptimin e gjerë dhe prapëseprapë të mos përmbushë pritshmëritë e cilësisë së folësit vendas.
- Ndërtimet modale janë një dobësi e zakonshme e AI sepse ekuivalenca e drejtpërdrejtë gramatikore shpesh nuk vlen mes gjuhëve.
- Gjuha e politikave dhe specifikimeve të produktit shpesh kërkon formulim specifik të fushës, jo sinonime të gjuhës së përgjithshme.
- Kontrollet e automatizuara mund të kapin string-e që mungojnë dhe placeholder-a të prishur, por shpesh humbasin regjistrin, modalitetin dhe zhvendosjen e hollë të terminologjisë.
- Arsyetimi i rishikuesit duhet të jetë i shkurtër por i qartë që shembujt të mund të trajnojnë rishikues të ardhshëm dhe të përmirësojnë prompt-et ose grupet e vlerësimit.

## Regjistër rekomandimesh

Shtoni shembuj si ky në këto burime:

- materiale trajnimi për rishikues lokalizimi
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- grupe të dhënash për vlerësimin e përkthimit AI
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- shembuj në udhëzuesin e stilit
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- dokumentacion të rrjedhës së punës human-in-the-loop
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- artikuj dhe udhëzues praktikash të mira për lokalizim në shkallë të gjerë
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Përdorim i sugjeruar i scorecard

Shembuj rishikimi si ky mund të mbështesin scorecard-e të brendshme duke ndjekur:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
