#!/usr/bin/env node
"use strict";

/**
 * Purpose:
 * Protect language selector behavior on a localized blog article page.
 *
 * Why:
 * Article pages are a high-risk routing surface because their language
 * links are derived from article ids plus locale-specific output paths.
 * This narrower regression test protects a known article route directly.
 *
 * Protects:
 * - article-to-article language switching
 * - current-language selection state
 * - footer equivalent-language routing
 *
 * Limitations:
 * Focused article regression only; broader selector coverage lives in
 * `language-selector-smoke.js`.
 *
 * Related:
 * - tests/docs/README.md
 * - tests/docs/language-selector-smoke.js
 * - tools/validate-blog.mjs
 */

const path = require('path');
const http = require('http');
const fs = require('fs');
const childProcess = require('child_process');

const pwPath = path.join(childProcess.execSync('npm root -g').toString().trim(), 'playwright');
const { chromium } = require(pwPath);

const PORT = 9876;
const ROOT = path.resolve(__dirname, '../..');

function createServer() {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
  };

  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
    let filePath = path.join(ROOT, url.pathname === '/' ? 'index.html' : url.pathname);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
}

async function main() {
  const server = createServer();
  await new Promise(resolve => server.listen(PORT, '127.0.0.1', resolve));

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const url = `http://127.0.0.1:${PORT}/docs/blog/sl/isbn-not-a-database.html`;
  let failed = false;

  async function check(description, fn) {
    try {
      await fn();
      console.log(`  PASS: ${description}`);
    } catch (err) {
      console.log(`  FAIL: ${description} — ${err.message}`);
      failed = true;
    }
  }

  try {
    console.log(`Opening ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForSelector('.nav-language-select', { timeout: 5000 });

    await check('language selector <select> exists', async () => {
      const el = await page.$('.nav-language-select');
      if (!el) throw new Error('.nav-language-select not found');
    });

    let options;
    await check('language options include English and Slovenian', async () => {
      options = await page.$$eval('.nav-language-select option', opts =>
        opts.map(o => ({ value: o.value, text: o.text, selected: o.selected }))
      );
      const texts = options.map(o => o.text);
      if (!texts.includes('English')) throw new Error('English missing');
      if (!texts.includes('Slovenščina')) throw new Error('Slovenian missing');
    });

    await check('English link resolves to /docs/blog/en/isbn-not-a-database.html', async () => {
      const en = options.find(o => o.text === 'English');
      const resolved = new URL(en.value, url).pathname;
      if (resolved !== '/docs/blog/en/isbn-not-a-database.html') {
        throw new Error(`Resolved: ${resolved}`);
      }
    });

    await check('Slovenian link resolves to /docs/blog/sl/isbn-not-a-database.html', async () => {
      const sl = options.find(o => o.text === 'Slovenščina');
      const resolved = new URL(sl.value, url).pathname;
      if (resolved !== '/docs/blog/sl/isbn-not-a-database.html') {
        throw new Error(`Resolved: ${resolved}`);
      }
    });

    await check('current language (Slovenian) is selected', async () => {
      const sl = options.find(o => o.text === 'Slovenščina');
      if (!sl || !sl.selected) throw new Error('Slovenian not selected');
    });

    // Historical failure:
    // article pages could expose placeholder fallback paths for
    // available languages after navigation refactors.
    await check('no fallback ../index.html paths for available languages', async () => {
      for (const opt of options) {
        if (opt.value === '../index.html') {
          throw new Error(`${opt.text} has fallback path`);
        }
      }
    });

    await check('footer equivalent language list is populated', async () => {
      const count = await page.$$eval('.equivalent-language-list .footer-language-link', els => els.length);
      if (count < 2) throw new Error(`Only ${count} footer links`);
    });

    await check('footer current language is marked and resolves correctly', async () => {
      const el = await page.$('.equivalent-language-list .footer-language-link.is-current');
      if (!el) throw new Error('No is-current in footer');
      const href = await el.getAttribute('href');
      const resolved = new URL(href, url).pathname;
      if (resolved !== '/docs/blog/sl/isbn-not-a-database.html') {
        throw new Error(`Footer SL resolves to: ${resolved}`);
      }
    });

    await check('page-type article is detected', async () => {
      const pt = await page.evaluate(() => document.body.dataset.pageType);
      if (pt !== 'article') throw new Error(`Got pageType: ${pt}`);
    });

    await check('all 12 language options are present', async () => {
      if (!options) {
        options = await page.$$eval('.nav-language-select option', opts =>
          opts.map(o => ({ value: o.value, text: o.text }))
        );
      }
      const expected = ['English','Slovenščina','Hrvatski','Bosanski','Srpski latinica',
        'Српски ћирилица','Македонски','Shqip','Deutsch','Italiano','Français','Español'];
      const texts = options.map(o => o.text);
      for (const lang of expected) {
        if (!texts.includes(lang)) throw new Error(`Missing: ${lang}`);
      }
    });

    console.log(`\n${failed ? 'SOME CHECKS FAILED' : 'All checks passed'}`);
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }

  if (failed) process.exit(1);
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
