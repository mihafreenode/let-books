#!/usr/bin/env node
/**
 * Purpose:
 * - Compare localized Markdown with English source Markdown for suspicious shortening,
 *   structure loss, and article-specific semantic regressions.
 *
 * Why:
 * - Some localization failures preserve file presence while dropping the examples,
 *   warnings, or structurally important sections that make the article useful.
 *
 * Detects / Enforces:
 * - Enforces body-size heuristics, heading retention, and strong article-specific semantic
 *   checkpoints.
 * - Warns when the English source appears to have gained a new substantive example, quoted
 *   artifact, code-style excerpt, diagram discussion, or other explanatory block that never made
 *   it into a localized variant.
 *
 * Limitations:
 * - Heuristic and partially article-specific by design.
 * - This validator cannot prove semantic equivalence. It can only flag likely cases where source
 *   expansion was not propagated.
 *
 * Related:
 * - tools/README.md
 * - tools/validate-content-parity.mjs
 * - tools/validate_translation_parity.py
 */
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
const includes = readArgs('--include');

const errors = [];
const warnings = [];
const reports = [];
const missingCoverage = [];

const STRONG_RULES = {
  // These targeted rules were added only for articles where generic length and structure
  // heuristics proved insufficient. They are intentionally specific because losing certain
  // named examples or conclusions would materially change the article's teaching value.
  'documentation-is-part-of-the-product': {
    locales: Object.fromEntries(
      LOCALES.filter((locale) => locale !== 'en').map((locale) => [locale, [
        // These semantic sentinels are intentionally short and stable. They prove that the
        // article's key conclusions survived translation instead of checking general style.
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
      if (!matchesInclude(rel(englishPath))) {
        continue;
      }
      const englishContent = fs.readFileSync(englishPath, 'utf8');
      const englishBody = stripFrontmatter(englishContent);
      const englishStats = collectStats(englishBody);

      for (const locale of LOCALES) {
        if (locale === 'en') continue;

        const localizedPath = getLocalizedPath(contentType, locale, fileName);
        if (!matchesInclude(rel(localizedPath)) && includes.length > 0) {
          continue;
        }
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

        const substantiveExpansionReasons = detectLikelyMissingSourceExpansion(englishStats, localizedStats);
        if (substantiveExpansionReasons.length > 0) {
          reasons.push(...substantiveExpansionReasons);
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

function readArgs(name) {
  const values = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === name && args[index + 1]) {
      values.push(args[index + 1]);
      index += 1;
    }
  }
  return values;
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
  // Body heuristics should compare reader-facing prose, not metadata density.
  return content.replace(/^---\n[\s\S]*?\n---\n/, '');
}

function collectStats(body) {
  const sections = collectSections(body);
  return {
    wordCount: countWords(body),
    // Count only major `##` sections. H2 density is a more stable cross-locale proxy for article
    // structure than lower-level headings, which vary more during translation.
    headingCount: (body.match(/^##\s+/gm) ?? []).length,
    blockquoteCount: (body.match(/^>\s+/gm) ?? []).length,
    orderedListCount: (body.match(/^\d+\.\s+/gm) ?? []).length,
    sections,
  };
}

function collectSections(body) {
  const lines = body.split(/\r?\n/);
  const headingIndexes = [];

  for (let index = 0; index < lines.length; index += 1) {
    const match = /^##\s+(.+?)\s*$/.exec(lines[index]);
    if (match) {
      headingIndexes.push({ title: match[1].trim(), line: index });
    }
  }

  const sections = [];
  for (let index = 0; index < headingIndexes.length; index += 1) {
    const current = headingIndexes[index];
    const next = headingIndexes[index + 1];
    const start = current.line + 1;
    const end = next ? next.line : lines.length;
    const sectionLines = lines.slice(start, end);
    const text = sectionLines.join('\n').trim();

    sections.push({
      title: current.title,
      wordCount: countWords(text),
      blockquoteCount: (text.match(/^>\s+/gm) ?? []).length,
      fencedBlockCount: countFencedBlocks(sectionLines),
      imageRefCount: (text.match(/^!\[[^\]]*\]\([^)]*\)/gm) ?? []).length,
      paragraphBlockCount: countParagraphBlocks(sectionLines),
    });
  }

  return sections;
}

function countFencedBlocks(lines) {
  let count = 0;
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      if (!inFence) {
        count += 1;
      }
    }
  }
  return count;
}

function countParagraphBlocks(lines) {
  let count = 0;
  let inParagraph = false;
  let inFence = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (/^```/.test(line)) {
      inFence = !inFence;
      inParagraph = false;
      continue;
    }

    if (inFence) {
      continue;
    }

    if (!line) {
      inParagraph = false;
      continue;
    }

    if (/^(#|>|-|\*|\d+\.|!\[)/.test(line)) {
      inParagraph = false;
      continue;
    }

    if (!inParagraph) {
      count += 1;
      inParagraph = true;
    }
  }

  return count;
}

function detectLikelyMissingSourceExpansion(sourceStats, localizedStats) {
  const reasons = [];
  const alignedCount = Math.min(sourceStats.sections.length, localizedStats.sections.length);

  for (let index = 0; index < alignedCount; index += 1) {
    const sourceSection = sourceStats.sections[index];
    const localizedSection = localizedStats.sections[index];
    const wordRatio = ratio(localizedSection.wordCount, sourceSection.wordCount || 1);

    // This check protects against a subtle but recurring localization failure: the source article
    // gains a new example, quoted artifact, validator comment, or diagram explanation inside an
    // existing section, while the localized file remains structurally valid and fully translated
    // but silently loses that added argument. Structure-only review will often miss this because
    // the heading still exists. The heuristic therefore looks for block-level signals of expansion
    // inside corresponding sections.

    const missingFencedArtifact = sourceSection.fencedBlockCount > localizedSection.fencedBlockCount;
    const missingQuoteArtifact = sourceSection.blockquoteCount > localizedSection.blockquoteCount;
    const missingDiagramDiscussion = sourceSection.imageRefCount > localizedSection.imageRefCount;
    const sourceHasMeaningfulExpansion = sourceSection.wordCount >= 90 && sourceSection.paragraphBlockCount >= 2;

    if (
      sourceHasMeaningfulExpansion
      && wordRatio < 0.78
      && (missingFencedArtifact || missingQuoteArtifact || missingDiagramDiscussion)
    ) {
      const missingKinds = [];
      if (missingFencedArtifact) missingKinds.push('fenced example/comment block');
      if (missingQuoteArtifact) missingKinds.push('quote block');
      if (missingDiagramDiscussion) missingKinds.push('diagram reference/discussion');
      reasons.push(
        `section "${sourceSection.title}" may be missing a substantive source addition `
        + `(${missingKinds.join(', ')}; localized/source words ${localizedSection.wordCount}/${sourceSection.wordCount}, ratio ${wordRatio.toFixed(2)})`,
      );
    }
  }

  return reasons;
}

function matchesInclude(relativePath) {
  if (includes.length === 0) return true;
  return includes.some((token) => relativePath.includes(token));
}

function countWords(body) {
  // Remove code spans, Markdown links, and punctuation before counting so the shortening
  // heuristic measures explanatory prose rather than markup density or URL length.
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
