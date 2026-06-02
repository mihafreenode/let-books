#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const DOCS_CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'docs-config.json'), 'utf8'));
const LOCALES = DOCS_CONFIG.locales;
const CONTENT_TYPES = DOCS_CONFIG.contentTypes;

const args = process.argv.slice(2);
const reportFile = readArg('--report-file');
const jsonReportFile = readArg('--json-report-file');
const requireFullCoverage = args.includes('--require-full-coverage');

const errors = [];
const warnings = [];
const reports = [];
const missingCoverage = [];

const STRONG_RULES = {
  'documentation-is-part-of-the-product': {
    locales: Object.fromEntries(
      LOCALES.filter((locale) => locale !== 'en').map((locale) => [locale, [
        /semantic-parity: broad-audiences/u,
        /semantic-parity: practical-test/u,
        /semantic-parity: documentation-as-product-distinction/u,
      ]]),
    ),
  },
  'spec-driven-development-for-ai-projects': {
    locales: {
      sl: [
        /^## Kaj to pomeni za ekipe, ki uporabljajo AI$/mu,
        /^To ni proti AI\. Tako AI postane zanesljiv\.$/mu,
        /^V AI-podprtih projektih specifikacija ni birokracija za nazaj\./mu,
      ],
      hr: [
        /^## Što to znači za timove koji koriste AI$/mu,
        /^Ovo nije protiv AI-ja\. Ovako AI postaje pouzdan\.$/mu,
        /^U projektima uz pomoć AI-ja specifikacija nije papirologija nakon činjenice\./mu,
      ],
      bs: [
        /^## Šta to znači za timove koji koriste AI$/mu,
        /^Ovo nije protiv AI-ja\. Ovako AI postaje pouzdan\.$/mu,
        /^U projektima uz pomoć AI-ja specifikacija nije papirologija nakon činjenice\./mu,
      ],
      'sr-Latn': [
        /^## Šta to znači za timove koji koriste AI$/mu,
        /^Ovo nije protiv AI-ja\. Ovako AI postaje pouzdan\.$/mu,
        /^U projektima uz pomoć AI-ja specifikacija nije papirologija posle činjenice\./mu,
      ],
      'sr-Cyrl': [
        /^## Шта то значи за тимове који користе AI$/mu,
        /^Ово није против AI-ја\. Овако AI постаје поуздан\.$/mu,
        /^У пројектима уз помоћ AI-ја спецификација није папирологија после чињенице\./mu,
      ],
      mk: [
        /^## Што значи ова за тимовите што користат AI$/mu,
        /^Ова не е против AI\. Вака AI станува доверлив\.$/mu,
        /^Во AI-поддржани проекти спецификацијата не е бирократија по завршувањето\./mu,
      ],
      sq: [
        /^## Çfarë do të thotë kjo për ekipet që përdorin AI$/mu,
        /^Kjo nuk është kundër AI\. Kështu AI bëhet i besueshëm\.$/mu,
        /^Në projektet e asistuara nga AI, specifikimi nuk është burokraci pas faktit\./mu,
      ],
      de: [
        /^## Was das für Teams bedeutet, die KI nutzen$/mu,
        /^Das ist nicht gegen KI gerichtet\. So wird KI verlässlich\.$/mu,
        /^In KI-gestützten Projekten ist die Spezifikation nicht nachträglicher Papierkram\./mu,
      ],
      it: [
        /^## Cosa significa questo per i team che usano l'IA$/mu,
        /^Questo non e anti-IA\. E il modo in cui l'IA diventa affidabile\.$/mu,
        /^Nei progetti assistiti dall'IA, la specifica non e burocrazia a posteriori\./mu,
      ],
      fr: [
        /^## Ce que cela signifie pour les équipes qui utilisent l'IA$/mu,
        /^Ce n'est pas anti-IA\. C'est ainsi que l'IA devient fiable\.$/mu,
        /^Dans les projets assistés par l'IA, la spécification n'est pas de la paperasserie après coup\./mu,
      ],
      es: [
        /^## Lo que esto significa para los equipos que usan IA$/mu,
        /^Esto no es anti-IA\. Es como la IA se vuelve fiable\.$/mu,
        /^En los proyectos asistidos por IA, la especificación no es papeleo posterior\./mu,
      ],
    },
  },
};

main();

function main() {
  for (const contentType of CONTENT_TYPES) {
    const englishDir = getEnglishDir(contentType);
    if (!fs.existsSync(englishDir)) {
      warnings.push(`${rel(englishDir)}: content type '${contentType}' is configured but has no semantic-validation source directory yet`);
      continue;
    }

    const englishFiles = fs.readdirSync(englishDir)
      .filter((name) => name.endsWith('.md') && name !== 'README.md')
      .sort();

    for (const fileName of englishFiles) {
      const articleId = fileName.replace(/\.md$/, '');
      const englishPath = path.join(englishDir, fileName);
      const englishContent = fs.readFileSync(englishPath, 'utf8');
      const englishBody = stripFrontmatter(englishContent);
      const englishStats = collectStats(englishBody);

      for (const locale of LOCALES) {
        if (locale === 'en') continue;

        const localizedPath = getLocalizedPath(contentType, locale, fileName);
        if (!fs.existsSync(localizedPath)) {
          missingCoverage.push({ contentType, articleId, locale, path: rel(localizedPath) });
          if (requireFullCoverage) {
            errors.push(`${rel(localizedPath)}: missing localized content`);
            reports.push({ contentType, articleId, locale, path: rel(localizedPath), severity: 'error', reasons: ['missing localized content'] });
          }
          continue;
        }

        const localizedContent = fs.readFileSync(localizedPath, 'utf8');
        const localizedBody = stripFrontmatter(localizedContent);
        const localizedStats = collectStats(localizedBody);
        const reasons = [];
        let severity = 'ok';

        const wordRatio = ratio(localizedStats.wordCount, englishStats.wordCount);
        const headingRatio = ratio(localizedStats.headingCount, englishStats.headingCount);
        const blockquoteGap = englishStats.blockquoteCount > localizedStats.blockquoteCount;
        const orderedListGap = englishStats.orderedListCount > localizedStats.orderedListCount;
        const shortBodyWithOtherGap = wordRatio < 0.70 && (headingRatio < 0.80 || blockquoteGap || orderedListGap);

        if (wordRatio < 0.60 || shortBodyWithOtherGap) {
          reasons.push(`suspiciously short body (${localizedStats.wordCount}/${englishStats.wordCount} words, ratio ${wordRatio.toFixed(2)})`);
          severity = 'warning';
        }

        if (headingRatio < 0.72) {
          reasons.push(`fewer major sections than English (${localizedStats.headingCount}/${englishStats.headingCount}, ratio ${headingRatio.toFixed(2)})`);
          severity = 'warning';
        }

        if (blockquoteGap) {
          reasons.push('missing one or more blockquotes present in English');
          severity = 'warning';
        }

        if (orderedListGap) {
          reasons.push('missing one or more numbered sections present in English');
          severity = 'warning';
        }

        const strongRule = contentType === 'blog' ? STRONG_RULES[articleId]?.locales?.[locale] : null;
        if (strongRule) {
          const missing = strongRule.filter((pattern) => !pattern.test(localizedBody));
          if (missing.length > 0) {
            reasons.push(`missing strong semantic signals (${missing.length})`);
            severity = 'error';
          }
        }

        if (severity === 'warning') {
          warnings.push(`${rel(localizedPath)}: ${reasons.join('; ')}`);
        }

        if (severity === 'error') {
          errors.push(`${rel(localizedPath)}: ${reasons.join('; ')}`);
        }

        if (severity !== 'ok') {
          reports.push({ contentType, articleId, locale, path: rel(localizedPath), severity, reasons });
        }
      }
    }
  }

  const markdownReport = renderMarkdownReport();
  const jsonReport = JSON.stringify({ errors, warnings, missingCoverage, reports }, null, 2);

  if (reportFile) {
    fs.writeFileSync(path.resolve(ROOT, reportFile), markdownReport);
  }

  if (jsonReportFile) {
    fs.writeFileSync(path.resolve(ROOT, jsonReportFile), jsonReport);
  }

  console.log(markdownReport);

  if (errors.length > 0) {
    process.exit(1);
  }
}

function readArg(name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  return args[index + 1] ?? null;
}

function getEnglishDir(contentType) {
  return contentType === 'blog'
    ? path.join(DOCS_DIR, contentType, 'en')
    : path.join(DOCS_DIR, contentType);
}

function getLocalizedPath(contentType, locale, fileName) {
  return path.join(DOCS_DIR, contentType, locale, fileName);
}

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n/, '');
}

function collectStats(body) {
  return {
    wordCount: countWords(body),
    headingCount: (body.match(/^##\s+/gm) ?? []).length,
    blockquoteCount: (body.match(/^>\s+/gm) ?? []).length,
    orderedListCount: (body.match(/^\d+\.\s+/gm) ?? []).length,
  };
}

function countWords(body) {
  return body
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[^\p{L}\p{N}\s-]+/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

function ratio(left, right) {
  if (right === 0) return 1;
  return left / right;
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function renderMarkdownReport() {
  const lines = [];
  lines.push('# Localization Semantic Review Report');
  lines.push('');
  lines.push(`- Errors: ${errors.length}`);
  lines.push(`- Warnings: ${warnings.length}`);
  lines.push(`- Missing coverage: ${missingCoverage.length}`);
  lines.push(`- Reviewed files with findings: ${reports.length}`);
  lines.push('');

  if (missingCoverage.length > 0) {
    lines.push('## Missing Coverage');
    lines.push('');
    for (const item of missingCoverage) {
      lines.push(`- ${item.path}`);
    }
    lines.push('');
  }

  if (errors.length > 0) {
    lines.push('## Errors');
    lines.push('');
    for (const report of reports.filter((item) => item.severity === 'error')) {
      lines.push(`- ${report.path}: ${report.reasons.join('; ')}`);
    }
    lines.push('');
  }

  if (warnings.length > 0) {
    lines.push('## Warnings');
    lines.push('');
    for (const report of reports.filter((item) => item.severity === 'warning')) {
      lines.push(`- ${report.path}: ${report.reasons.join('; ')}`);
    }
    lines.push('');
  }

  if (errors.length === 0 && warnings.length === 0) {
    lines.push('No semantic parity issues detected.');
    lines.push('');
  }

  return lines.join('\n');
}
