#!/usr/bin/env node
/**
 * Purpose:
 * - Generate `docs/blog/articles.json` from localized article frontmatter.
 *
 * Why:
 * - A shared article registry is easier to validate and consume than re-scanning blog files
 *   independently in every workflow.
 *
 * Detects / Enforces:
 * - Enforces article ids, canonical language, and language-variant inventory.
 *
 * Limitations:
 * - Discovers articles from English source files.
 *
 * Related:
 * - tools/README.md
 * - tools/validate-blog.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'docs', 'blog');

const LOCALES = ['en', 'sl', 'hr', 'bs', 'sr-Latn', 'sr-Cyrl', 'mk', 'sq', 'de', 'it', 'fr', 'es'];

function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function readFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) return {};
  const yaml = m[1];
  const fm = {};

  // Extract title
  const titleMatch = yaml.match(/^title:\s+"?(.+?)"?\s*$/m);
  if (titleMatch) fm.title = titleMatch[1].replace(/^"(.*)"$/, '$1');

  // Extract canonical_language
  const langMatch = yaml.match(/^canonical_language:\s+(\S+)/m);
  if (langMatch) fm.canonical_language = langMatch[1];

  const idMatch = yaml.match(/^article_id:\s+(\S+)/m);
  if (idMatch) fm.article_id = idMatch[1];

  return fm;
}

function collectArticles() {
  const articles = {};

  // Discover articles from English files
  const enDir = path.join(BLOG_DIR, 'en');
  const files = fs.readdirSync(enDir).sort();
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const articleId = file.replace(/\.md$/, '');
    const fm = readFrontmatter(path.join(enDir, file));
    if (!fm.article_id && !fm.title) continue;
    articles[articleId] = { id: articleId, titles: {}, canonical_language: fm.canonical_language || 'en' };
  }

  // Extract titles for each locale
  for (const articleId of Object.keys(articles)) {
    for (const locale of LOCALES) {
      const mdFile = path.join(BLOG_DIR, locale, `${articleId}.md`);
      if (isFile(mdFile)) {
        const fm = readFrontmatter(mdFile);
        articles[articleId].titles[locale] = fm.title || articleId;
      }
    }
  }

  return articles;
}

function main() {
  const articles = collectArticles();
  const ids = Object.keys(articles).sort();
  const languages = LOCALES.map((code) => {
    const nativeLabels = {
      en: 'English', sl: 'Slovenščina', hr: 'Hrvatski', bs: 'Bosanski',
      'sr-Latn': 'Srpski latinica', 'sr-Cyrl': 'Српски ћирилица',
      mk: 'Македонски', sq: 'Shqip', de: 'Deutsch', it: 'Italiano',
      fr: 'Français', es: 'Español',
    };
    const labels = {
      en: 'English', sl: 'Slovenian', hr: 'Croatian', bs: 'Bosnian',
      'sr-Latn': 'Serbian Latin', 'sr-Cyrl': 'Serbian Cyrillic',
      mk: 'Macedonian', sq: 'Albanian', de: 'German', it: 'Italian',
      fr: 'French', es: 'Spanish',
    };
    return { code, label: labels[code] || code, native: nativeLabels[code] || code };
  });

  const output = {
    articles: ids.map((id) => {
      const a = articles[id];
      const langs = LOCALES.filter((l) => a.titles[l]);
      return {
        id: a.id,
        canonical_language: a.canonical_language,
        title: Object.fromEntries(langs.map((l) => [l, a.titles[l]])),
        languages: langs,
      };
    }),
    languages,
  };

  const outPath = path.join(BLOG_DIR, 'articles.json');
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');
  console.log(`  ✓ ${outPath} (${ids.length} articles, ${LOCALES.length} locales)`);
}

main();
