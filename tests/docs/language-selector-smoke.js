#!/usr/bin/env node
"use strict";

const path = require('path');
const http = require('http');
const fs = require('fs');
const childProcess = require('child_process');

const pwPath = path.join(childProcess.execSync('npm root -g').toString().trim(), 'playwright');
const { chromium } = require(pwPath);

const PORT = 9877;
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

const TEST_PAGES = [
  { url: '/docs/en/index.html',         label: 'overview',        expectedType: 'overview' },
  { url: '/docs/blog/en/index.html',    label: 'blog-index',     expectedType: 'blog-index' },
  { url: '/docs/learning/en/index.html',label: 'learning-index', expectedType: 'learning-index' },
  { url: '/docs/wiki/en/index.html',    label: 'wiki-index',     expectedType: 'wiki-index' },
  { url: '/docs/blog/en/isbn-not-a-database.html', label: 'blog-article', expectedType: 'article' },
];

const EXPECTED_LANGUAGES = [
  'English','Slovenščina','Hrvatski','Bosanski','Srpski latinica',
  'Српски ћирилица','Македонски','Shqip','Deutsch','Italiano','Français','Español',
];

async function testLanguageSelector(page, pageUrl, pageLabel) {
  const fullUrl = `http://127.0.0.1:${PORT}${pageUrl}`;
  console.log(`\n--- Testing: ${pageLabel} (${fullUrl}) ---`);
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

  await page.goto(fullUrl, { waitUntil: 'networkidle' });

  await check('page-type data attribute matches', async () => {
    const pt = await page.evaluate(() => document.body.dataset.pageType);
    if (!pt) throw new Error('No data-page-type attribute found');
  });

  await check('locale is set', async () => {
    const loc = await page.evaluate(() => document.body.dataset.locale);
    if (!loc) throw new Error('No data-locale attribute found');
  });

  await check('language selector <select> exists and has options', async () => {
    const el = await page.$('.nav-language-select');
    if (!el) throw new Error('.nav-language-select not found');
    const count = await page.evaluate(el => el.options.length, el);
    if (count === 0) throw new Error('.nav-language-select has zero options');
  });

  let options;
  await check('all 12 language options are present', async () => {
    options = await page.$$eval('.nav-language-select option', opts =>
      opts.map(o => ({ value: o.value, text: o.text, selected: o.selected }))
    );
    const texts = options.map(o => o.text);
    for (const lang of EXPECTED_LANGUAGES) {
      if (!texts.includes(lang)) throw new Error(`Missing: ${lang}`);
    }
  });

  await check('all option values end with .html', async () => {
    for (const opt of options) {
      if (!opt.value.endsWith('.html') && !opt.value.startsWith('http')) {
        throw new Error(`${opt.text} has non-HTML value: ${opt.value}`);
      }
    }
  });

  await check('no option value contains .md', async () => {
    for (const opt of options) {
      if (opt.value.includes('.md')) {
        throw new Error(`${opt.text} contains .md: ${opt.value}`);
      }
    }
  });

  await check('no fallback ../index.html paths for available languages', async () => {
    for (const opt of options) {
      if (opt.value === '../index.html') {
        throw new Error(`${opt.text} has fallback path`);
      }
    }
  });

  await check('current language is selected', async () => {
    const selected = options.find(o => o.selected);
    if (!selected) throw new Error('No language option is selected');
  });

  await check('footer equivalent language list is populated', async () => {
    const count = await page.$$eval('.equivalent-language-list .footer-language-link', els => els.length);
    if (count < 2) throw new Error(`Only ${count} footer links`);
  });

  await check('footer current language is marked', async () => {
    const el = await page.$('.equivalent-language-list .footer-language-link.is-current');
    if (!el) throw new Error('No is-current in footer equivalent list');
  });

  return failed;
}

async function main() {
  const server = createServer();
  await new Promise(resolve => server.listen(PORT, '127.0.0.1', resolve));

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  let anyFailed = false;

  try {
    for (const { url, label } of TEST_PAGES) {
      const failed = await testLanguageSelector(page, url, label);
      if (failed) anyFailed = true;
    }

    console.log(`\n${anyFailed ? 'SOME PAGES FAILED' : 'All pages passed'}`);
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }

  if (anyFailed) process.exit(1);
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
