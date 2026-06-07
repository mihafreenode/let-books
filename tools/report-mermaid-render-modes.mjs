#!/usr/bin/env node
/**
 * Purpose:
 * - Report whether committed Mermaid-generated SVGs use native SVG text labels or
 *   foreignObject-backed HTML labels.
 *
 * Why:
 * - The repository standard for published Mermaid diagrams is `htmlLabels: false`.
 * - This script provides visibility into whether committed SVG artifacts follow that standard.
 *
 * Notes:
 * - This is a reporting tool, not a build gate.
 * - Human review is still required for diagram quality and any justified exceptions.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIAGRAMS_DIR = path.join(ROOT, 'docs', 'diagrams');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.name.endsWith('.svg')) {
      out.push(full);
    }
  }
  return out;
}

const svgFiles = walk(DIAGRAMS_DIR).sort();
const withForeignObject = [];
const withNativeTextOnly = [];

for (const file of svgFiles) {
  const svg = fs.readFileSync(file, 'utf8');
  if (svg.includes('foreignObject')) {
    withForeignObject.push(path.relative(ROOT, file));
  } else {
    withNativeTextOnly.push(path.relative(ROOT, file));
  }
}

console.log(`Mermaid render mode report`);
console.log(`- SVGs checked: ${svgFiles.length}`);
console.log(`- Native SVG text only: ${withNativeTextOnly.length}`);
console.log(`- foreignObject labels present: ${withForeignObject.length}`);

if (withForeignObject.length) {
  console.log('\nReview candidates (foreignObject labels present):');
  for (const file of withForeignObject) {
    console.log(`- ${file}`);
  }
}
