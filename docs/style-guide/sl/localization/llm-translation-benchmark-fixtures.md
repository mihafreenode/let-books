# Primeri za primerjalno preverjanje prevodov z LLM

## Povzetek

Ta vodnik določa majhen strukturiran format za shranjevanje pregledanih primerov AI-prevodov kot ponovno uporabnih primerjalnih vzorcev.

## Namen

Takšni vzorci projektu omogočajo ponovno uporabo resničnih primerov pregledov pri:

- usposabljanju pregledovalcev
- točkovnikih kakovosti
- člankih o lokalizaciji v večjem obsegu
- dokumentaciji poteka dela s človekom v zanki
- primerjalnih vrednotenjih LLM

## Priporočena polja vzorca

Vsak vzorec naj vključuje:

- `fixture_id`
- `source_language`
- `target_language`
- `content_type`
- `domain`
- `source_text`
- `ai_draft`
- `corrected_text`
- `issues`
- `scoring_rubric`
- `example_scorecard`
- `overall_lesson`
- `recommended_uses`

Vsaka težava naj vključuje:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Ponovno uporabna taksonomija

Priporočene vrednosti za `error_categories`:

- `grammar`
- `modality`
- `terminology`
- `register`
- `fluency`
- `literal_translation`
- `ambiguity`
- `context_loss`
- `word_order`
- `collocation`
- `script_or_orthography`
- `domain_policy_phrasing`
- `accessibility_wording`

## Uporaba ocenjevanja

Takšni vzorci lahko podprejo notranje vrednotenje tega:

- ali je osnutek AI mogoče objaviti brez popravkov
- katere kategorije napak se najpogosteje pojavljajo po jezikih
- ali pozivi zmanjšajo ponavljajoče se načine odpovedi
- kako pogosto pregled rojenega govorca spremeni jezik pravilnikov

## Lahka ocenjevalna rubrika

Za vsako dimenzijo uporabite preprosto oceno 0-3.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Priporočene dimenzije:

- `meaning_accuracy`
  Does the draft preserve the intended meaning?
- `grammar_and_fluency`
  Does it read as correct and natural target-language text?
- `terminology_and_domain_fit`
  Does it use the right terminology and domain phrasing?
- `register_and_style`
  Does the tone fit policy, product, educational, or accessibility context?
- `review_effort`
  How close is the draft to approval from a native-speaker reviewer?

## Oznake priporočil za izdajo

Po ocenjevanju dodelite eno priporočilo za izdajo:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Smernice za resnost zapisov težav

Vsaka težava je lahko označena tudi z resnostjo:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Kako uporabljati rubriko

1. ocenite osnutek AI pred urejanjem
2. zabeležite kategorije in resnosti na ravni težav
3. napišite popravljeno besedilo
4. dodelite priporočilo za izdajo
5. po potrebi zabeležite zaupanje pregledovalca

To je namenoma lažje od polnega programa MQM. Namenjeno je praktičnemu ponavljajočemu se vrednotenju znotraj odprtokodnega poteka dela lokalizacije.

## Ideje za agregacijo točkovnikov

Čez več vzorcev spremljajte:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Predlagana razširitev vzorca

Vsak vzorec naj vključuje:

```json
{
  "scoring_rubric": {
    "scale": "0-3",
    "dimensions": [
      "meaning_accuracy",
      "grammar_and_fluency",
      "terminology_and_domain_fit",
      "register_and_style",
      "review_effort"
    ],
    "release_recommendations": [
      "blocker",
      "major_revision",
      "minor_revision",
      "ready_with_review_signoff"
    ]
  }
}
```

## Prvi vzorec

Prvi vzorec je slovenski primer pregleda modalnosti in terminologije z AI:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Povezane strani

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
