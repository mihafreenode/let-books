#!/usr/bin/env node
/**
 * Purpose:
 * - Report missing localized Markdown variants across docs content families.
 *
 * Why:
 * - Coverage gaps need a fast inventory before deeper semantic validation is useful.
 *
 * Detects / Enforces:
 * - Enforces visibility into file-presence parity by content type and locale.
 *
 * Limitations:
 * - Presence-only. It does not measure translation quality.
 *
 * Related:
 * - tools/README.md
 * - tools/generate-missing-blog-localizations.mjs
 * - tools/validate-localized-articles.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'docs-config.json'), 'utf8'));
const args = process.argv.slice(2);

const reportFile = readArg('--report-file');
const jsonReportFile = readArg('--json-report-file');

const coverage = [];
const missing = [];

for (const contentType of CONFIG.contentTypes) {
  const englishDir = contentType === 'blog'
    ? path.join(DOCS_DIR, contentType, 'en')
    : path.join(DOCS_DIR, contentType);

  if (!fs.existsSync(englishDir)) continue;

  const englishFiles = fs.readdirSync(englishDir)
    .filter((name) => name.endsWith('.md') && name !== 'README.md')
    .sort();

  for (const fileName of englishFiles) {
    const slug = fileName.replace(/\.md$/, '');
    const languages = ['en'];

    for (const locale of CONFIG.locales) {
      if (locale === 'en') continue;
      const localizedPath = path.join(DOCS_DIR, contentType, locale, fileName);
      if (fs.existsSync(localizedPath)) {
        languages.push(locale);
      } else {
        missing.push({ contentType, slug, locale, path: path.relative(ROOT, localizedPath) });
      }
    }

    coverage.push({
      contentType,
      slug,
      localizedCount: languages.length,
      totalLocales: CONFIG.locales.length,
      languages,
    });
  }
}

const markdown = renderMarkdownReport();
const json = JSON.stringify({ coverage, missing }, null, 2);

if (reportFile) {
  fs.writeFileSync(path.resolve(ROOT, reportFile), markdown);
}

if (jsonReportFile) {
  fs.writeFileSync(path.resolve(ROOT, jsonReportFile), json);
}

console.log(markdown);

function readArg(name) {
  const index = args.indexOf(name);
  return index === -1 ? null : args[index + 1] ?? null;
}

function renderMarkdownReport() {
  const lines = [];
  lines.push('# Documentation Parity Report');
  lines.push('');
  lines.push(`- Content entries reviewed: ${coverage.length}`);
  lines.push(`- Missing localized variants: ${missing.length}`);
  lines.push('');

  const byType = new Map();
  for (const item of coverage) {
    const items = byType.get(item.contentType) || [];
    items.push(item);
    byType.set(item.contentType, items);
  }

  lines.push('## Coverage by Content Type');
  lines.push('');
  lines.push('| Content Type | Entries | Average Locale Coverage |');
  lines.push('|---|---:|---:|');
  for (const [contentType, items] of byType.entries()) {
    const average = items.reduce((sum, item) => sum + item.localizedCount, 0) / items.length;
    lines.push(`| ${contentType} | ${items.length} | ${average.toFixed(2)} / ${CONFIG.locales.length} |`);
  }
  lines.push('');

  if (missing.length > 0) {
    lines.push('## Missing Variants');
    lines.push('');
    for (const item of missing) {
      lines.push(`- ${item.contentType}/${item.slug}: missing ${item.locale} at ${item.path}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}
