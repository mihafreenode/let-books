#!/usr/bin/env node
/**
 * Purpose:
 * - Create missing localized blog Markdown stubs and matching source-map stubs.
 *
 * Why:
 * - The repo used a coverage-first workflow so every locale could participate before all
 *   natural-language review was complete.
 *
 * Detects / Enforces:
 * - Enforces file presence for localized blog variants.
 *
 * Examples:
 * - New English article exists but several locales still lack a source file.
 *
 * Limitations:
 * - Intentionally creates draft placeholders that downstream validators are expected to
 *   flag until human localization is complete.
 *
 * Related:
 * - tools/README.md
 * - tools/validate-content-parity.mjs
 * - tools/audit-localized-markdown-sources.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'docs', 'blog');
const SOURCES_DIR = path.join(ROOT, 'docs', 'sources');
const LOCALES = ['sl', 'hr', 'bs', 'sr-Latn', 'sr-Cyrl', 'mk', 'sq', 'de', 'it', 'fr', 'es'];

const LANGUAGE_LABELS = {
  en: 'English',
  sl: 'Slovenščina',
  hr: 'Hrvatski',
  bs: 'Bosanski',
  'sr-Latn': 'Srpski (latinica)',
  'sr-Cyrl': 'Српски (ћирилица)',
  mk: 'Македонски',
  sq: 'Shqip',
  de: 'Deutsch',
  it: 'Italiano',
  fr: 'Français',
  es: 'Español',
};

const OTHER_LANGUAGES_HEADINGS = {
  en: 'Other Languages',
  sl: 'Drugi jeziki',
  hr: 'Drugi jezici',
  bs: 'Drugi jezici',
  'sr-Latn': 'Drugi jezici',
  'sr-Cyrl': 'Други језици',
  mk: 'Други јазици',
  sq: 'Gjuhë të tjera',
  de: 'Andere Sprachen',
  it: 'Altre lingue',
  fr: 'Autres langues',
  es: 'Otros idiomas',
};

const DRAFT_NOTES = {
  // These notes are intentionally explicit because the generated files are not meant to be
  // mistaken for publication-ready localization. Other validators rely on recognizable
  // placeholder language so coverage-first workflows do not silently become publishing.
  sl: 'Ta lokalizirana objava je osnutek za popolno jezikovno pokritost. Spodaj je trenutno ohranjena kanonična angleška vsebina, dokler ne bo končan naravni jezikovni pregled.',
  hr: 'Ova lokalizirana objava je nacrt za potpunu jezičnu pokrivenost. Kanonski engleski sadržaj trenutačno je zadržan u nastavku dok se ne dovrši prirodna jezična revizija.',
  bs: 'Ova lokalizirana objava je nacrt za potpunu jezičku pokrivenost. Kanonski engleski sadržaj je trenutno zadržan u nastavku dok se ne završi prirodna jezička revizija.',
  'sr-Latn': 'Ova lokalizovana objava je nacrt za punu jezičku pokrivenost. Kanonski engleski sadržaj je trenutno zadržan u nastavku dok se ne završi prirodna jezička revizija.',
  'sr-Cyrl': 'Ова локализована објава је нацрт за пуну језичку покривеност. Канонски енглески садржај је тренутно задржан у наставку док се не заврши природна језичка ревизија.',
  mk: 'Оваа локализирана објава е нацрт за целосна јазична покриеност. Канонската англиска содржина засега е задржана подолу додека не заврши природната јазична ревизија.',
  sq: 'Ky publikim i lokalizuar është një draft për mbulim të plotë gjuhësor. Përmbajtja kanonike në anglisht ruhet përkohësisht më poshtë derisa të përfundojë rishikimi natyror gjuhësor.',
  de: 'Dieser lokalisierte Beitrag ist ein Entwurf für vollständige Sprachabdeckung. Der kanonische englische Inhalt bleibt vorerst unten erhalten, bis die natürliche sprachliche Überprüfung abgeschlossen ist.',
  it: 'Questo articolo localizzato è una bozza per la copertura linguistica completa. Il contenuto canonico in inglese è temporaneamente mantenuto qui sotto finché non sarà completata la revisione linguistica naturale.',
  fr: 'Cet article localisé est un brouillon destiné à garantir une couverture linguistique complète. Le contenu canonique anglais est provisoirement conservé ci-dessous jusqu’à la fin de la révision linguistique naturelle.',
  es: 'Este artículo localizado es un borrador para garantizar la cobertura lingüística completa. El contenido canónico en inglés se conserva provisionalmente a continuación hasta que termine la revisión lingüística natural.',
};

const TITLES = {
  'economics-of-localization': {
    sl: 'Ekonomika lokalizacije', hr: 'Ekonomika lokalizacije', bs: 'Ekonomika lokalizacije', 'sr-Latn': 'Ekonomika lokalizacije', 'sr-Cyrl': 'Економика локализације', mk: 'Економика на локализацијата', sq: 'Ekonomia e lokalizimit', de: 'Ökonomie der Lokalisierung', it: 'Economia della localizzazione', fr: 'Économie de la localisation', es: 'Economía de la localización',
  },
  'future-of-continuous-localization': {
    sl: 'Prihodnost neprekinjene lokalizacije', hr: 'Budućnost kontinuirane lokalizacije', bs: 'Budućnost kontinuirane lokalizacije', 'sr-Latn': 'Budućnost kontinuirane lokalizacije', 'sr-Cyrl': 'Будућност континуиране локализације', mk: 'Иднината на континуираната локализација', sq: 'E ardhmja e lokalizimit të vazhdueshëm', de: 'Die Zukunft der kontinuierlichen Lokalisierung', it: 'Il futuro della localizzazione continua', fr: 'L’avenir de la localisation continue', es: 'El futuro de la localización continua',
  },
  'multilingual-accessibility': {
    sl: 'Večjezična dostopnost', hr: 'Višejezična pristupačnost', bs: 'Višejezična pristupačnost', 'sr-Latn': 'Višejezična pristupačnost', 'sr-Cyrl': 'Вишејезична приступачност', mk: 'Повеќејазична пристапност', sq: 'Aksesueshmëria shumëgjuhëshe', de: 'Mehrsprachige Barrierefreiheit', it: 'Accessibilità multilingue', fr: 'Accessibilité multilingue', es: 'Accesibilidad multilingüe',
  },
  'preserving-smaller-languages-in-the-digital-age': {
    sl: 'Ohranjanje manjših jezikov v digitalni dobi', hr: 'Očuvanje manjih jezika u digitalnom dobu', bs: 'Očuvanje manjih jezika u digitalnom dobu', 'sr-Latn': 'Očuvanje manjih jezika u digitalnom dobu', 'sr-Cyrl': 'Очување мањих језика у дигиталном добу', mk: 'Зачувување на помалите јазици во дигиталната ера', sq: 'Ruajtja e gjuhëve më të vogla në epokën digjitale', de: 'Kleinere Sprachen im digitalen Zeitalter bewahren', it: 'Preservare le lingue più piccole nell’era digitale', fr: 'Préserver les langues plus petites à l’ère numérique', es: 'Preservar las lenguas más pequeñas en la era digital',
  },
  'the-cost-of-english-only-software': {
    sl: 'Cena programske opreme samo v angleščini', hr: 'Cijena softvera samo na engleskom', bs: 'Cijena softvera samo na engleskom', 'sr-Latn': 'Cena softvera samo na engleskom', 'sr-Cyrl': 'Цена софтвера само на енглеском', mk: 'Цената на софтверот само на англиски', sq: 'Kostoja e softuerit vetëm në anglisht', de: 'Die Kosten rein englischer Software', it: 'Il costo del software solo in inglese', fr: 'Le coût d’un logiciel uniquement en anglais', es: 'El costo del software solo en inglés',
  },
  'translation-and-learning': {
    sl: 'Prevajanje in učenje', hr: 'Prevođenje i učenje', bs: 'Prevođenje i učenje', 'sr-Latn': 'Prevođenje i učenje', 'sr-Cyrl': 'Превођење и учење', mk: 'Превод и учење', sq: 'Përkthimi dhe të mësuarit', de: 'Übersetzung und Lernen', it: 'Traduzione e apprendimento', fr: 'Traduction et apprentissage', es: 'Traducción y aprendizaje',
  },
  'united-in-diversity-and-open-source': {
    sl: 'Združeni v raznolikosti in odprti kodi', hr: 'Ujedinjeni u raznolikosti i otvorenom kodu', bs: 'Ujedinjeni u različitosti i otvorenom kodu', 'sr-Latn': 'Ujedinjeni u različitosti i otvorenom kodu', 'sr-Cyrl': 'Уједињени у различитости и отвореном коду', mk: 'Обединети во различноста и отворениот код', sq: 'Të bashkuar në larmi dhe në burim të hapur', de: 'In Vielfalt geeint und Open Source', it: 'Uniti nella diversità e nell’open source', fr: 'Unis dans la diversité et dans l’open source', es: 'Unidos en la diversidad y en el código abierto',
  },
  'ai-as-an-oracle': {
    sl: 'AI kot orakelj: zakaj je kultura preverjanja pomembnejša od pisanja pozivov', hr: 'AI kao proročište: zašto je kultura provjere važnija od promptanja', bs: 'AI kao proročište: zašto je kultura provjere važnija od promptanja', 'sr-Latn': 'AI kao proročište: zašto je kultura provere važnija od promptovanja', 'sr-Cyrl': 'AI као пророчиште: зашто је култура провере важнија од промптовања', mk: 'AI како оракул: зошто културата на проверка е поважна од промптирањето', sq: 'AI si orakull: pse kultura e verifikimit ka më shumë rëndësi se prompting-u', de: 'KI als Orakel: Warum Verifizierungskultur wichtiger ist als Prompting', it: 'L\'IA come oracolo: perché la cultura della verifica conta più del prompting', fr: 'L\'IA comme oracle : pourquoi la culture de la vérification compte davantage que le prompting', es: 'La IA como oráculo: por qué la cultura de la verificación importa más que el prompting',
  },
};

const ARTICLE_IDS = Object.keys(TITLES);

for (const articleId of ARTICLE_IDS) {
  const englishPath = path.join(BLOG_DIR, 'en', `${articleId}.md`);
  const englishContent = fs.readFileSync(englishPath, 'utf8');
  updateEnglishOtherLanguages(englishPath, englishContent);

  for (const locale of LOCALES) {
    ensureLocalizedArticle(articleId, locale, englishContent);
    ensureLocalizedSourceStub(articleId, locale);
  }
}

function ensureLocalizedArticle(articleId, locale, englishContent) {
  const targetPath = path.join(BLOG_DIR, locale, `${articleId}.md`);
  if (fs.existsSync(targetPath)) return;

  let content = englishContent;
  // Preserve the canonical English structure while swapping only the minimum locale-specific
  // fields needed for a draft article. That keeps stub generation deterministic and reviewable.
  content = content.replace(/^title:\s+.*$/m, `title: ${TITLES[articleId][locale]}`);
  content = content.replace(/^sources:\n\s+-\s+\.\.\/\.\.\/sources\/en\//m, `sources:\n  - ../../sources/${locale}/`);
  content = content.replace(/^# .*$/m, `# ${TITLES[articleId][locale]}`);

  const body = stripFrontmatter(content);
  const bodyWithNote = body.replace(/^# .*\n/m, `$&\n${DRAFT_NOTES[locale]}\n`);
  const localizedFooter = renderOtherLanguages(locale, articleId);
  // Replace the trailing language footer wholesale so the draft advertises the locale graph for
  // the current file instead of copying the English footer text unchanged.
  const replacedBody = bodyWithNote.replace(/## Other Languages[\s\S]*$/m, localizedFooter);
  const frontmatter = extractFrontmatter(content);

  fs.writeFileSync(targetPath, `${frontmatter}\n${replacedBody}`);
}

function ensureLocalizedSourceStub(articleId, locale) {
  const targetPath = path.join(SOURCES_DIR, locale, `${articleId}.md`);
  if (fs.existsSync(targetPath)) return;

  const articleTitle = TITLES[articleId][locale] || articleId;
  const stub = `---\nsource_map_for: ${articleId}\nlanguage: ${locale}\ncanonical_source_map: ../en/${articleId}.md\nstatus: draft\n---\n\n# ${articleTitle} - Source Map\n\nThis localized source map for the article \"${articleTitle}\" follows the canonical English map: [../en/${articleId}.md](../en/${articleId}.md).\n\nThe localized article should remain aligned with the canonical English claims, evidence, and editorial boundaries.\n`;
  fs.writeFileSync(targetPath, stub);
}

function updateEnglishOtherLanguages(englishPath, englishContent) {
  const articleId = path.basename(englishPath, '.md');
  const updated = englishContent.replace(/## Other Languages[\s\S]*$/m, renderOtherLanguages('en', articleId));
  fs.writeFileSync(englishPath, updated);
}

function renderOtherLanguages(locale, articleId) {
  const lines = [`## ${OTHER_LANGUAGES_HEADINGS[locale]}`, ''];
  for (const candidate of ['en', ...LOCALES]) {
    if (candidate === locale) continue;
    lines.push(`- [${LANGUAGE_LABELS[candidate]}](../${candidate}/${articleId}.md)`);
  }
  return `${lines.join('\n')}\n`;
}

function extractFrontmatter(content) {
  // Capture the raw frontmatter block verbatim. Stub generation wants to preserve formatting and
  // key order rather than parse and reserialize metadata.
  const match = content.match(/^---\n[\s\S]*?\n---\n/);
  return match ? match[0] : '';
}

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n/, '');
}
