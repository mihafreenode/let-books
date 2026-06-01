# Записи од преглед на AI превод

## Резиме

Овој водич објаснува како човечките рецензенти треба да ги документираат исправките на преводи генерирани од AI за примерите да можат повторно да се користат во управување, обука, QA и евалуација.

## Зошто ова е важно

Дури и кога општото значење е зачувано, преводите генерирани од AI може да бараат преглед од мајчин говорител за да се исправат суптилни проблеми во граматика, модалност, терминологија и доменски регистар. Овие проблеми често е тешко да се откријат само со автоматизирани метрики за квалитет.

## Задолжителен формат на запис за преглед

Секој прегледан пример треба да опфати:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Користете го овој шаблон:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Препорачана таксономија на грешки

Кога е применливо, користете една или повеќе од овие категории:

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

## Насоки за хипотеза за коренска причина

Белешките на рецензентот не мора да бидат сигурни. Доволна е кратка хипотеза ако им помага на идните рецензенти и на работата за евалуација на модели.

Вообичаени хипотези вклучуваат:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Словенечки студиски пример

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

## Повторно употребливи поуки низ јазици

- Превод може да го зачува општото значење и сепак да не ги исполни очекувањата за квалитет на мајчин говорител.
- Модалните конструкции се честа слабост на AI бидејќи директната граматичка еквиваленција често не важи меѓу јазиците.
- Јазикот на политики и спецификации на производ често бара доменски специфично формулирање наместо општи синоними.
- Автоматизираните проверки можат да фатат недостасувачки string-и и скршени placeholder-и, но често промашуваат регистар, модалност и суптилно оддалечување на терминологијата.
- Образложението на рецензентот треба да биде кратко, но експлицитно за примерите да можат да обучуваат идни рецензенти и да ги подобруваат prompt-ите или евалуациските сетови.

## Запис за препораки

Додавајте вакви примери во овие ресурси:

- материјали за обука на рецензенти за локализација
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- сетови на податоци за евалуација на AI превод
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- примери во стилскиот водич
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- документација за работен тек со човек во јамка
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- статии и водичи за добра практика за локализација во поголем обем
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Предложена употреба на scorecard

Ваквите примери за преглед можат да поддржат интерни scorecard-и преку следење на:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
