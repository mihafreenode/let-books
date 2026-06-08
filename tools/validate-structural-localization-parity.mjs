#!/usr/bin/env node
/**
 * Purpose:
 * - Detect meaningful structural degradation between English source Markdown and localized
 *   Markdown for long-form educational docs.
 *
 * Scope:
 * - Reviews Markdown source structure for wiki, learning, blog, or explicitly selected content
 *   families.
 * - Focuses on long-form educational and documentation value rather than exact heading-title
 *   translation.
 *
 * Why:
 * - A localized article can preserve some meaning while still losing navigability, examples,
 *   guidance, and educational structure through aggressive compression.
 * - This validator exists to catch summary-like localized rewrites that still look semantically
 *   related but no longer teach the material with the same structure.
 *
 * Assumptions:
 * - English source Markdown is the structural baseline.
 * - Heading hierarchy, major section count, and section-relative size are useful proxies for
 *   educational structure.
 * - Natural localization drift is acceptable as long as the article still preserves meaningful
 *   reader-facing structure.
 *
 * Detects / Enforces:
 * - Warns on heading-count loss, heading-depth collapse, suspicious body compression,
 *   section-level compression, likely missing major sections, and obvious list-structure drift
 *   such as accidental nested bullets in localized Markdown where the source list is flat.
 * - Emits review-oriented findings rather than hard failures by default.
 *
 * Limitations:
 * - Heuristic by design. It flags likely review targets rather than exact translation defects.
 * - It does not prove semantic equivalence.
 * - It cannot reliably distinguish every justified structural adaptation from an accidental
 *   collapse.
 *
 * Expected False Positives:
 * - Legitimate editorial restructuring where a localized article preserves value with fewer
 *   headings.
 * - Source sections that are naturally shorter in another language without losing substance.
 * - Intentional list restructuring that was made for a documented localization reason.
 *
 * Expected False Negatives:
 * - Articles that preserve heading shape while still degrading prose quality or teaching value.
 * - Cases where structurally similar sections omit subtle examples or nuanced guidance.
 * - Complex Markdown constructs where a human would still need to judge whether the structure is
 *   intentionally equivalent.
 *
 * Warning vs Failure Interpretation:
 * - Warnings indicate likely structural review targets.
 * - Failures occur only when `--warning-fail-threshold` is set and the warning count reaches that
 *   threshold.
 *
 * Related:
 * - tools/validate-content-parity.mjs
 * - tools/validate-localized-articles.mjs
 * - tools/validate_translation_parity.py
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'docs-config.json'), 'utf8'));
const DEFAULT_CONTENT_TYPES = ['wiki', 'learning', 'blog'];
// These thresholds are intentionally conservative. The validator is designed to surface obvious
// structural degradation without requiring exact heading matching across languages.
const THRESHOLDS = {
  headingRatioWarning: 0.75,
  majorSectionRatioWarning: 0.80,
  wordRatioWarning: 0.65,
  averageSectionRatioWarning: 0.70,
  thinSectionRatioWarning: 0.45,
  collapsedSectionRatioWarning: 0.75,
  listLossSectionRatioWarning: 0.70,
  thinSectionWordFloor: 80,
  collapsedSectionWordFloor: 120,
};

const args = process.argv.slice(2);
const reportFile = readArg('--report-file');
const jsonReportFile = readArg('--json-report-file');
const includes = readArgs('--include');
const warningFailThreshold = Number.parseInt(readArg('--warning-fail-threshold') ?? '', 10);
const explicitContentTypes = readArg('--content-types')
  ?.split(',')
  .map((value) => value.trim())
  .filter(Boolean);
const contentTypes = explicitContentTypes?.length ? explicitContentTypes : DEFAULT_CONTENT_TYPES;

const reports = [];
const warnings = [];

main();

function main() {
  for (const contentType of contentTypes) {
    const englishDir = getEnglishDir(contentType);
    if (!fs.existsSync(englishDir)) continue;

    const englishFiles = fs.readdirSync(englishDir)
      .filter((name) => name.endsWith('.md') && name !== 'README.md')
      .sort();

    for (const fileName of englishFiles) {
      const englishPath = path.join(englishDir, fileName);
      if (!matchesInclude(rel(englishPath))) continue;

      const englishContent = fs.readFileSync(englishPath, 'utf8');
      const englishBody = stripFrontmatter(englishContent);
      const englishAnalysis = analyzeDocument(englishBody);

      for (const locale of CONFIG.locales) {
        if (locale === 'en') continue;

        const localizedPath = path.join(DOCS_DIR, contentType, locale, fileName);
        if (!fs.existsSync(localizedPath)) continue;
        if (!matchesInclude(rel(localizedPath)) && includes.length > 0) continue;

        const localizedContent = fs.readFileSync(localizedPath, 'utf8');
        const localizedBody = stripFrontmatter(localizedContent);
        const localizedAnalysis = analyzeDocument(localizedBody);

        const review = compareStructure({
          sourcePath: englishPath,
          localizedPath,
          locale,
          contentType,
          source: englishAnalysis,
          localized: localizedAnalysis,
        });

        if (review.reasons.length > 0) {
          reports.push(review);
          warnings.push(`${review.localizedFile}: ${review.reasons.join('; ')}`);
        }
      }
    }
  }

  const markdown = renderMarkdownReport();
  const json = JSON.stringify({ warnings, reports }, null, 2);

  if (reportFile) {
    fs.writeFileSync(path.resolve(ROOT, reportFile), markdown);
  }

  if (jsonReportFile) {
    fs.writeFileSync(path.resolve(ROOT, jsonReportFile), json);
  }

  console.log(markdown);

  if (Number.isInteger(warningFailThreshold) && warnings.length >= warningFailThreshold) {
    process.exit(1);
  }
}

function readArg(name) {
  const index = args.indexOf(name);
  return index === -1 ? null : args[index + 1] ?? null;
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

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function matchesInclude(relativePath) {
  if (includes.length === 0) return true;
  return includes.some((token) => relativePath.includes(token));
}

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n/, '');
}

function countWords(text) {
  return text
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[^\p{L}\p{N}\s-]+/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

function analyzeDocument(body) {
  const lines = body.split(/\r?\n/);
  const headings = [];

  for (let index = 0; index < lines.length; index += 1) {
    const match = /^(#{1,6})\s+(.+?)\s*$/.exec(lines[index]);
    if (!match) continue;
    headings.push({
      depth: match[1].length,
      title: match[2].trim(),
      line: index,
    });
  }

  const depthCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  for (const heading of headings) {
    depthCounts[heading.depth] += 1;
  }

  const majorSections = [];
  const h2Headings = headings.filter((heading) => heading.depth === 2);

  for (let index = 0; index < h2Headings.length; index += 1) {
    const current = h2Headings[index];
    const next = h2Headings[index + 1];
    const start = current.line + 1;
    const end = next ? next.line : lines.length;
    const sectionLines = lines.slice(start, end);
    const sectionText = sectionLines.join('\n').trim();
    const sectionHeadings = headings.filter((heading) => heading.line > current.line && heading.line < end);
    // H2 sections are used as the cross-locale unit of comparison because H3 titles often vary
    // more in translation, while H2 blocks tend to preserve the major teaching structure.
    majorSections.push({
      title: current.title,
      wordCount: countWords(sectionText),
      subheadingCount: sectionHeadings.filter((heading) => heading.depth >= 3).length,
      orderedListCount: (sectionText.match(/^\d+\.\s+/gm) ?? []).length,
      bulletListCount: (sectionText.match(/^[-*]\s+/gm) ?? []).length,
      blockquoteCount: (sectionText.match(/^>\s+/gm) ?? []).length,
      listBlocks: collectListBlocks(sectionLines),
      educationalSignals: collectEducationalSignals(current.title, sectionText),
    });
  }

  const averageSectionWords = majorSections.length > 0
    ? majorSections.reduce((sum, section) => sum + section.wordCount, 0) / majorSections.length
    : 0;

  return {
    wordCount: countWords(body),
    headingCount: headings.length,
    depthCounts,
    maxDepth: Math.max(...headings.map((heading) => heading.depth), 0),
    majorSections,
    averageSectionWords,
  };
}

function collectEducationalSignals(title, sectionText) {
  const haystack = `${title}\n${sectionText}`.toLowerCase();
  const signals = new Set();

  // These intentionally broad markers do not try to prove section identity. They only help turn
  // compression findings into actionable review guidance when the source likely contained a
  // pedagogically important element.
  if (/\bexample\b|\bexamples\b|for example|for instance/.test(haystack)) signals.add('examples');
  if (/case study/.test(haystack)) signals.add('case studies');
  if (/practical takeaway|durable lesson|takeaway|exercise/.test(haystack)) signals.add('practical takeaways');
  if (/warning|warn|risk|danger/.test(haystack)) signals.add('warnings');
  if (/governance|trust|security|authorization|gateway|access control/.test(haystack)) signals.add('governance discussion');
  if (/review|reviewer|critique|critically/.test(haystack)) signals.add('review guidance');
  if (/validator|validation|validate|checks?/.test(haystack)) signals.add('validation guidance');
  if (/workflow|how to|start with|preserve context|practical/.test(haystack)) signals.add('practical guidance');

  return [...signals];
}

function compareStructure({ sourcePath, localizedPath, locale, contentType, source, localized }) {
  const reasons = [];
  const recommendedReviewAreas = new Set();
  const suspectedMissingSections = [];

  const headingRatio = ratio(localized.headingCount, source.headingCount);
  const wordRatio = ratio(localized.wordCount, source.wordCount);
  const sourceMajorCount = source.majorSections.length;
  const localizedMajorCount = localized.majorSections.length;
  const averageSectionRatio = ratio(localized.averageSectionWords, source.averageSectionWords || 1);

  if (localized.headingCount + 2 <= source.headingCount && headingRatio < THRESHOLDS.headingRatioWarning) {
    reasons.push(`localized article contains ${localized.headingCount} headings; source contains ${source.headingCount}`);
  }

  if (localizedMajorCount + 1 <= sourceMajorCount && ratio(localizedMajorCount, sourceMajorCount) < THRESHOLDS.majorSectionRatioWarning) {
    reasons.push(`localized article contains ${localizedMajorCount} major sections; source contains ${sourceMajorCount}`);
  }

  if (source.maxDepth >= 3 && localized.maxDepth < 3) {
    reasons.push(`source uses heading depth ${source.maxDepth}; localized article collapses to depth ${localized.maxDepth}`);
  }

  if (source.depthCounts[3] > 0 && localized.depthCounts[3] === 0) {
    reasons.push('source uses meaningful subsection hierarchy but localized article has no level-3 headings');
  }

  if (wordRatio < THRESHOLDS.wordRatioWarning) {
    reasons.push(`localized article is ${(wordRatio * 100).toFixed(0)}% of source length`);
  }

  if (averageSectionRatio < THRESHOLDS.averageSectionRatioWarning && localizedMajorCount <= sourceMajorCount) {
    reasons.push(`localized average major-section length is ${(averageSectionRatio * 100).toFixed(0)}% of source average`);
  }

  const alignedCount = Math.min(sourceMajorCount, localizedMajorCount);
  for (let index = 0; index < alignedCount; index += 1) {
    const sourceSection = source.majorSections[index];
    const localizedSection = localized.majorSections[index];
    const sectionRatio = ratio(localizedSection.wordCount, sourceSection.wordCount || 1);
    const subsectionLoss = sourceSection.subheadingCount > 0 && localizedSection.subheadingCount === 0;
    const listLoss = sourceSection.orderedListCount > localizedSection.orderedListCount
      || sourceSection.blockquoteCount > localizedSection.blockquoteCount;
    const listDrift = compareListBlocks(sourceSection.listBlocks, localizedSection.listBlocks);

    // Section-level checks are where most educational-structure loss is expected to appear.
    // A localized article can keep the overall file size while still flattening one major section
    // into a much thinner summary.
    const structurallyThin = sourceSection.wordCount >= THRESHOLDS.thinSectionWordFloor
      && sectionRatio < THRESHOLDS.thinSectionRatioWarning;
    const structurallyCollapsed = sourceSection.wordCount >= THRESHOLDS.collapsedSectionWordFloor
      && subsectionLoss
      && sectionRatio < THRESHOLDS.collapsedSectionRatioWarning;

    if (structurallyThin || structurallyCollapsed || (listLoss && sectionRatio < THRESHOLDS.listLossSectionRatioWarning)) {
      suspectedMissingSections.push(sourceSection.title);
      for (const signal of sourceSection.educationalSignals) {
        recommendedReviewAreas.add(signal);
      }
    }

    // List shape is part of content correctness, not mere formatting. If the source article
    // teaches with a flat sibling list and a localized Markdown file accidentally nests one item,
    // readers no longer see the same structure. This lightweight check protects against the common
    // indentation mistakes we have already observed in localized articles.
    for (const issue of listDrift) {
      reasons.push(`section "${sourceSection.title}" list structure drift: ${issue}`);
      recommendedReviewAreas.add('markdown structure');
    }
  }

  if (localizedMajorCount < sourceMajorCount) {
    for (let index = localizedMajorCount; index < sourceMajorCount; index += 1) {
      const sourceSection = source.majorSections[index];
      suspectedMissingSections.push(sourceSection.title);
      for (const signal of sourceSection.educationalSignals) {
        recommendedReviewAreas.add(signal);
      }
    }
  }

  if (suspectedMissingSections.length > 0) {
    reasons.push(`possible missing major section coverage: ${unique(suspectedMissingSections).join(', ')}`);
  }

  if (recommendedReviewAreas.size > 0) {
    reasons.push(`recommended review areas: ${[...recommendedReviewAreas].sort().join(', ')}`);
  }

  return {
    severity: 'warning',
    locale,
    contentType,
    sourceFile: rel(sourcePath),
    localizedFile: rel(localizedPath),
    headingStats: {
      source: source.headingCount,
      localized: localized.headingCount,
      sourceDepths: source.depthCounts,
      localizedDepths: localized.depthCounts,
      sourceMajorSections: sourceMajorCount,
      localizedMajorSections: localizedMajorCount,
    },
    sizeStats: {
      sourceWords: source.wordCount,
      localizedWords: localized.wordCount,
      wordRatio: round(wordRatio),
      sourceAverageSectionWords: round(source.averageSectionWords),
      localizedAverageSectionWords: round(localized.averageSectionWords),
      averageSectionRatio: round(averageSectionRatio),
    },
    suspectedMissingSections: unique(suspectedMissingSections),
    recommendedReviewAreas: [...recommendedReviewAreas].sort(),
    reasons,
  };
}

function collectListBlocks(sectionLines) {
  const blocks = [];
  let inFence = false;
  let current = null;

  for (let index = 0; index < sectionLines.length; index += 1) {
    const line = sectionLines[index];
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      if (!inFence) {
        current = null;
      }
      continue;
    }

    if (inFence) {
      continue;
    }

    const match = /^(\s*)([-*]|\d+\.)\s+(.+?)\s*$/.exec(line);
    if (!match) {
      // The validator is intentionally lightweight: once a block is interrupted by non-list text,
      // we treat the next list as a new block. That is enough to catch accidental nesting and list
      // type drift without trying to fully model every Markdown edge case.
      if (line.trim() !== '') {
        current = null;
      }
      continue;
    }

    const indent = match[1].replace(/\t/g, '    ').length;
    const depth = Math.floor(indent / 2);
    const marker = match[2];
    const itemText = match[3].trim();
    const kind = /\d+\./.test(marker) ? 'ordered' : 'unordered';

    if (!current) {
      current = {
        kind,
        itemCount: 0,
        maxDepth: 0,
        depthSequence: [],
        sampleItems: [],
      };
      blocks.push(current);
    }

    current.itemCount += 1;
    current.maxDepth = Math.max(current.maxDepth, depth);
    current.depthSequence.push(depth);
    if (current.sampleItems.length < 3) {
      current.sampleItems.push(itemText);
    }
  }

  return blocks;
}

function compareListBlocks(sourceBlocks, localizedBlocks) {
  const issues = [];
  if (sourceBlocks.length === 0 && localizedBlocks.length === 0) {
    return issues;
  }

  if (sourceBlocks.length !== localizedBlocks.length) {
    issues.push(`expected ${sourceBlocks.length} list block(s), found ${localizedBlocks.length}`);
  }

  const alignedCount = Math.min(sourceBlocks.length, localizedBlocks.length);
  for (let index = 0; index < alignedCount; index += 1) {
    const source = sourceBlocks[index];
    const localized = localizedBlocks[index];

    if (source.kind !== localized.kind) {
      issues.push(`expected ${source.kind} list, found ${localized.kind} list`);
    }

    if (source.itemCount !== localized.itemCount) {
      issues.push(`expected ${source.itemCount} list item(s), found ${localized.itemCount}`);
    }

    if (source.maxDepth !== localized.maxDepth) {
      issues.push(
        `expected max nesting depth ${source.maxDepth}, found ${localized.maxDepth} `
        + `(source examples: ${formatSamples(source.sampleItems)}; localized examples: ${formatSamples(localized.sampleItems)})`,
      );
    }

    const sourceDepths = source.depthSequence.join(',');
    const localizedDepths = localized.depthSequence.join(',');
    if (sourceDepths !== localizedDepths) {
      issues.push(`expected depth sequence [${sourceDepths}], found [${localizedDepths}]`);
    }
  }

  return issues;
}

function formatSamples(items) {
  return items.map((item) => `"${item}"`).join('; ');
}

function ratio(left, right) {
  if (!right) return 1;
  return left / right;
}

function round(value) {
  return Number.isFinite(value) ? Number(value.toFixed(2)) : value;
}

function unique(items) {
  return [...new Set(items)];
}

function renderMarkdownReport() {
  const lines = [];
  lines.push('# Structural Localization Parity Report');
  lines.push('');
  lines.push(`- Reviewed files with warnings: ${reports.length}`);
  lines.push(`- Total warnings: ${warnings.length}`);
  lines.push('');

  if (reports.length === 0) {
    lines.push('No structural localization parity issues detected.');
    lines.push('');
    return lines.join('\n');
  }

  for (const report of reports) {
    lines.push(`## ${report.localizedFile}`);
    lines.push('');
    lines.push(`- Source file: \
\`${report.sourceFile}\``);
    lines.push(`- Heading statistics: localized ${report.headingStats.localized} vs source ${report.headingStats.source}`);
    lines.push(`- Heading depth distribution: localized ${formatDepthCounts(report.headingStats.localizedDepths)} vs source ${formatDepthCounts(report.headingStats.sourceDepths)}`);
    lines.push(`- Major section coverage: localized ${report.headingStats.localizedMajorSections} vs source ${report.headingStats.sourceMajorSections}`);
    lines.push(`- Size statistics: localized ${report.sizeStats.localizedWords} words vs source ${report.sizeStats.sourceWords} words (ratio ${report.sizeStats.wordRatio})`);
    lines.push(`- Average section size: localized ${report.sizeStats.localizedAverageSectionWords} vs source ${report.sizeStats.sourceAverageSectionWords} (ratio ${report.sizeStats.averageSectionRatio})`);
    if (report.suspectedMissingSections.length > 0) {
      lines.push(`- Suspected missing sections: ${report.suspectedMissingSections.join('; ')}`);
    }
    if (report.recommendedReviewAreas.length > 0) {
      lines.push(`- Recommended review areas: ${report.recommendedReviewAreas.join(', ')}`);
    }
    lines.push('- Findings:');
    for (const reason of report.reasons) {
      lines.push(`  - ${reason}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function formatDepthCounts(depthCounts) {
  return `H1:${depthCounts[1]} H2:${depthCounts[2]} H3:${depthCounts[3]} H4:${depthCounts[4]} H5:${depthCounts[5]} H6:${depthCounts[6]}`;
}
