# Евиденција прегледа AI превода

## Сажетак

Овај водич објашњава како људски рецензенти треба да документују исправке превода које је генерисао AI како би примери могли поново да се користе у управљању, обуци, QA-у и евалуацији.

## Зашто је ово важно

Чак и када је опште значење сачувано, преводи које генерише AI могу захтевати преглед изворног говорника ради исправке суптилних проблема у граматици, модалности, терминологији и доменском регистру. Такве проблеме је често тешко открити само аутоматизованим метрикама квалитета.

## Обавезни формат записа прегледа

Сваки прегледани пример треба да забележи:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Користите овај шаблон:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Препоручена таксономија грешака

По потреби користите једну или више ових категорија:

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

## Смернице за хипотезу о узроку

Белешке рецензента не морају да буду сигурне. Довољна је кратка хипотеза ако помаже будућим рецензентима и раду на евалуацији модела.

Уобичајене хипотезе укључују:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Словеначка студија случаја

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

## Поново употребљиве лекције кроз језике

- Превод може да сачува опште значење и ипак не испуни очекивања квалитета изворног говорника.
- Модалне конструкције су честа слабост AI-ја јер директна граматичка еквиваленција између језика често не постоји.
- Језик политика и спецификација производа често захтева доменски специфично формулисање, а не опште језичке синониме.
- Аутоматизоване провере могу да ухвате недостајуће string-ове и покварене placeholder-е, али често пропуштају регистар, модалност и суптилно клизање терминологије.
- Образложење рецензента треба да буде кратко, али изричито како би примери могли да служе за обуку будућих рецензената и побољшање prompt-ова или евалуационих скупова.

## Запис препорука

Додајте овакве примере у ове ресурсе:

- материјале за обуку рецензената локализације
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- скупове података за евалуацију AI превода
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- примере у стилском водичу
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- документацију тока рада са човеком у петљи
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- чланке и водиче добре праксе о локализацији у већем обиму
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Предложена употреба scorecard-а

Примери прегледа попут овог могу да подрже интерне scorecard-е праћењем:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
