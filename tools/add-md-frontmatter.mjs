#!/usr/bin/env node
/**
 * Purpose:
 * - Add missing frontmatter and topic metadata to learning and wiki Markdown files.
 *
 * Why:
 * - Topic-aware navigation and validation require structured metadata, but older content did
 *   not always include it.
 *
 * Detects / Enforces:
 * - Enforces frontmatter presence and topic coverage for known files.
 *
 * Limitations:
 * - Uses hand-maintained topic maps.
 *
 * Related:
 * - tools/README.md
 * - tools/generate-topic-nav.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const LEARNING_DIR = path.join(DOCS_DIR, 'learning');
const WIKI_DIR = path.join(DOCS_DIR, 'wiki');

const LOCALES = ['en', 'sl', 'hr', 'bs', 'sr-Latn', 'sr-Cyrl', 'mk', 'sq', 'de', 'it', 'fr', 'es'];

const LEARNING_TOPICS = {
  'how-to-write-a-spec-that-ai-can-follow': ['spec-writing', 'ai-assisted-delivery', 'documentation'],
  'how-to-turn-a-product-spec-into-an-implementation-plan': ['spec-writing', 'implementation-planning', 'project-management'],
  'how-to-keep-spec-docs-demo-and-code-aligned': ['demo-alignment', 'documentation', 'spec-driven-development'],
  'how-to-review-ai-assisted-work-against-the-spec': ['product-review', 'ai-assisted-delivery', 'spec-driven-development'],
  'how-to-add-validation-rules-and-ci-gates-in-stages': ['validation', 'ci-cd', 'spec-driven-development'],
};

const WIKI_TOPICS = {
  'spec-driven-development': ['spec-driven-development', 'documentation', 'product-quality'],
  'demo-spec-alignment': ['demo-alignment', 'spec-driven-development', 'product-review'],
  'product-specification': ['product-specification', 'spec-writing', 'spec-driven-development'],
  'implementation-guidance': ['implementation-planning', 'spec-driven-development', 'project-management'],
  'documentation-traceability': ['documentation', 'product-quality', 'spec-driven-development'],
  'validation-layers': ['validation', 'ci-cd', 'product-quality'],
  'markdown-in-product-development': ['documentation', 'product-quality', 'spec-driven-development'],
};

function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function isDirectory(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function hasFrontmatter(content) {
  return content.startsWith('---');
}

function extractTitle(content) {
  const m = content.match(/^#\s+(.+)/m);
  return m ? m[1].trim() : '';
}

function extractSummary(content) {
  const body = content.replace(/^---[\s\S]*?---\n*/, '');
  // Summary extraction intentionally looks for a `## Summary` section only. This keeps automated
  // frontmatter addition conservative instead of guessing from arbitrary introductory prose.
  const summaryMatch = body.match(/## Summary\s*\n+\s*(.+?)\s*(?:\n|$)/);
  if (summaryMatch) return summaryMatch[1].trim();
  return '';
}

function buildFrontmatter(title, summary, topics) {
  // Preserve wrapped summary text using YAML block-scalar syntax so generated metadata stays
  // readable and avoids one-line escaping noise.
  const summaryLine = summary ? `\nsummary: >-\n  ${summary.replace(/\n/g, '\n  ')}` : '';
  const topicsLines = topics.map((t) => `  - ${t}`).join('\n');
  return `---
title: "${title.replace(/"/g, '\\"')}"${summaryLine}
topics:
${topicsLines}
---
`;
}

function processDirectory(baseDir, topicMap, dirLabel) {
  let added = 0;
  let skipped = 0;

  for (const locale of LOCALES) {
    const localeDir = path.join(baseDir, locale);
    const dir = locale === 'en' ? baseDir : (isDirectory(localeDir) ? localeDir : baseDir);

    // Fallback to the base directory only for English or older content layouts. This script is a
    // migration helper, so it tolerates mixed directory conventions that newer generators avoid.

    if (!isDirectory(dir)) {
      console.warn(`  WARN: ${dirLabel} dir not found: ${dir}`);
      skipped++;
      continue;
    }

    const files = fs.readdirSync(dir).sort();
    for (const file of files) {
      if (!file.endsWith('.md') || file === 'README.md') continue;
      const articleId = file.replace(/\.md$/, '');
      const topics = topicMap[articleId];
      if (!topics) {
        console.warn(`  WARN: No topics defined for ${articleId}`);
        continue;
      }

      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf8');

      if (hasFrontmatter(content)) {
        console.log(`  SKIP ${path.relative(ROOT, filePath)} (has frontmatter)`);
        skipped++;
        continue;
      }

      const title = extractTitle(content);
      const summary = extractSummary(content);
      const frontmatter = buildFrontmatter(title, summary, topics);
      const newContent = frontmatter + content;

      fs.writeFileSync(filePath, newContent);
      console.log(`  ADD  ${path.relative(ROOT, filePath)} (topics: ${topics.join(', ')})`);
      added++;
    }
  }

  return { added, skipped };
}

function main() {
  console.log('=== Adding frontmatter to learning guides and wiki pages ===\n');

  console.log('Learning guides:\n');
  const learningResult = processDirectory(LEARNING_DIR, LEARNING_TOPICS, 'learning');
  console.log(`\n  → ${learningResult.added} added, ${learningResult.skipped} skipped\n`);

  console.log('Wiki pages:\n');
  const wikiResult = processDirectory(WIKI_DIR, WIKI_TOPICS, 'wiki');
  console.log(`\n  → ${wikiResult.added} added, ${wikiResult.skipped} skipped\n`);

  console.log('Done.');
}

main();
