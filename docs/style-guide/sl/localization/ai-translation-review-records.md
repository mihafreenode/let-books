# Evidence pregledov AI-prevodov

## Povzetek

Ta vodnik pojasnjuje, kako naj človeški pregledovalci dokumentirajo popravke prevodov, ki jih je ustvaril AI, da je mogoče primere ponovno uporabiti pri upravljanju, učenju, QA in vrednotenju.

## Zakaj je to pomembno

Tudi kadar je splošni pomen ohranjen, lahko prevodi, ki jih ustvari AI, zahtevajo pregled rojenega govorca za popravke subtilnih težav v slovnici, modalnosti, terminologiji in strokovnem registru. Takšne težave je pogosto težko zaznati samo z avtomatiziranimi merili kakovosti.

## Zahtevana oblika evidence pregleda

Vsak pregledan primer mora zajeti:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Uporabite to predlogo:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Priporočena taksonomija napak

Kadar je ustrezno, uporabite eno ali več teh kategorij:

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

## Smernice za hipotezo o vzroku

Opombam pregledovalca ni treba izražati gotovosti. Dovolj je kratka hipoteza, če pomaga prihodnjim pregledovalcem in delu pri vrednotenju modelov.

Pogoste hipoteze vključujejo:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Slovenska študija primera

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

## Ponovno uporabne ugotovitve med jeziki

- Prevod lahko ohrani splošni pomen in še vedno ne doseže pričakovane kakovosti rojenega govorca.
- Modalne konstrukcije so pogosta slabost AI, ker neposredna slovnična ekvivalenca med jeziki pogosto ne velja.
- Jezik pravilnikov in specifikacij izdelka pogosto potrebuje strokovno ubeseditev, ne splošnih sopomenk.
- Avtomatizirani pregledi lahko ujamejo manjkajoče nize in pokvarjene ograde, vendar pogosto zgrešijo register, modalnost in subtilno odnašanje terminologije.
- Utemeljitev pregledovalca naj bo kratka, a izrecna, da lahko primeri pomagajo pri učenju prihodnjih pregledovalcev ter izboljšanju pozivov ali evalvacijskih naborov.

## Zapis priporočil

Takšne primere dodajte v te vire:

- gradiva za usposabljanje pregledovalcev lokalizacije
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- podatkovne zbirke za vrednotenje AI-prevodov
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- primere v slogovnem vodniku
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- dokumentacijo poteka dela s človekom v zanki
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- članke o lokalizaciji v večjem obsegu in vodnike dobrih praks
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Predlagana uporaba točkovnikov

Takšni primeri pregleda lahko podprejo interne točkovnike s sledenjem:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
