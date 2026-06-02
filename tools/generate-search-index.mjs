#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'docs-config.json'), 'utf8'));

function isDirectory(filePath) {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch {
    return false;
  }
}

function readFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const get = (field) => yaml.match(new RegExp(`^${field}:\s+"?([\s\S]*?)"?\s*$`, 'm'))?.[1]?.trim();
  return {
    title: get('title') || path.basename(filePath, '.md'),
    summary: get('summary') || '',
  };
}

const entries = [];

for (const contentType of CONFIG.contentTypes) {
  for (const locale of CONFIG.locales) {
    const dir = path.join(DOCS_DIR, contentType, locale);
    const fallbackDir = path.join(DOCS_DIR, contentType);
    const effectiveDir = locale === 'en' ? fallbackDir : dir;
    if (!isDirectory(effectiveDir)) continue;

    for (const file of fs.readdirSync(effectiveDir).sort()) {
      if (!file.endsWith('.md') || file === 'README.md') continue;
      const filePath = path.join(effectiveDir, file);
      const slug = file.replace(/\.md$/, '');
      const metadata = readFrontmatter(filePath);
      entries.push({
        contentType,
        locale,
        slug,
        title: metadata.title,
        summary: metadata.summary,
        url: `/docs/${contentType}/${locale}/${slug}.html`,
      });
    }
  }
}

const outPath = path.join(DOCS_DIR, 'search-index.json');
fs.writeFileSync(outPath, JSON.stringify({ entries }, null, 2) + '\n');
console.log(`  ✓ ${path.relative(ROOT, outPath)} (${entries.length} entries)`);
