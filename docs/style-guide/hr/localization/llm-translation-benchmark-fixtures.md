# Benchmark primjeri za prijevod s LLM-om

## Sažetak

Ovaj vodič definira mali strukturirani format za pohranu pregledanih primjera AI prijevoda kao ponovno upotrebljivih benchmark primjera.

## Svrha

Benchmark primjeri omogućuju projektu ponovno korištenje stvarnih primjera pregleda u:

- obuci pregledavatelja
- scorecardima kvalitete
- člancima o lokalizaciji u većem opsegu
- dokumentaciji tijeka rada s čovjekom u petlji
- LLM benchmark evaluacijama

## Preporučena polja primjera

Svaki primjer treba uključivati:

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

Svaki problem treba uključivati:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Ponovno upotrebljiva taksonomija

Preporučene vrijednosti za `error_categories`:

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

## Primjena bodovanja

Primjeri poput ovoga mogu podržati internu evaluaciju sljedećeg:

- može li se AI nacrt objaviti bez izmjena
- koje se kategorije pogrešaka najčešće pojavljuju po jeziku
- smanjuju li promptovi ponavljajuće načine neuspjeha
- koliko često pregled izvornog govornika mijenja jezik pravila

## Lagana rubrika bodovanja

Koristite jednostavnu ocjenu 0-3 za svaku dimenziju.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Preporučene dimenzije:

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

## Oznake preporuka za izdanje

Nakon bodovanja dodijelite jednu preporuku za izdanje:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Smjernice ozbiljnosti za zapise problema

Svaki problem može biti označen i razinom ozbiljnosti:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Kako koristiti rubriku

1. ocijenite AI nacrt prije uređivanja
2. zabilježite kategorije i ozbiljnosti na razini problema
3. napišite ispravljeni tekst
4. dodijelite preporuku za izdanje
5. po potrebi zabilježite pouzdanost pregledavatelja

Ovo je namjerno lakše od punog MQM programa. Namijenjeno je praktičnoj ponovljenoj evaluaciji unutar open-source tijeka rada lokalizacije.

## Ideje za agregaciju scorecarda

Kroz više primjera pratite:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Predloženo proširenje primjera

Svaki primjer treba uključivati:

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

## Prvi primjer

Prvi primjer je slovenski primjer pregleda modalnosti i terminologije uz AI:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Povezane stranice

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
