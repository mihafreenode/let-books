#!/usr/bin/env node
/**
 * Purpose:
 * - Audit localized Markdown sources for untranslated or placeholder reader-facing content.
 *
 * Why:
 * - Coverage-first localization created real files before all reader-facing text was fully
 *   localized. Source debt needs to stay visible instead of hiding behind file presence.
 *
 * Detects / Enforces:
 * - Tracks named defect classes such as untranslated summaries, untranslated bodies,
 *   placeholder publication text, and navigation localization debt.
 *
 * Limitations:
 * - Pattern-based and tuned to known debt classes.
 *
 * Related:
 * - tools/README.md
 * - tools/generate-missing-blog-localizations.mjs
 * - tools/validate-localization-completeness.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const DOCS_CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'docs-config.json'), 'utf8'));
const LOCALES = DOCS_CONFIG.locales.filter((locale) => locale !== 'en');

const findings = {
  localizationCompleteness: [],
  mixedLanguagePublishing: [],
  metadataLocalization: [],
  navigationLocalization: [],
};

const defectClasses = {
  untranslatedSummaries: {
    description: 'Localized source frontmatter still contains English summaries.',
    count: 0,
    rootCause: 'Coverage-first localized files were created without localized metadata.',
    preferredFixLocation: 'Source markdown frontmatter',
    validatorCoverage: 'Source audit warning; generated HTML completeness validator blocks rendered leakage.',
    recurrenceRisk: 'High until source audit becomes blocking.',
    closurePlan: 'When count reaches zero, make source-summary detection blocking in CI and document the rule in contributor and AI-agent guidance.',
  },
  untranslatedBodies: {
    description: 'Localized markdown still contains English reader-facing body content.',
    count: 0,
    rootCause: 'Localized files were published as partial stubs instead of completed article variants.',
    preferredFixLocation: 'Source markdown body content',
    validatorCoverage: 'Source audit warning; generated HTML completeness validator blocks visible leakage.',
    recurrenceRisk: 'High until source audit becomes blocking.',
    closurePlan: 'When count reaches zero, promote body-leak detection to blocking CI and keep regression coverage in the source audit.',
  },
  placeholderDraftPublishing: {
    description: 'Localized files still include draft placeholder text that acknowledges incomplete publication.',
    count: 0,
    rootCause: 'Workflow allowed partial localized sources to exist as publishable drafts.',
    preferredFixLocation: 'Source markdown plus workflow policy',
    validatorCoverage: 'Source audit warning only.',
    recurrenceRisk: 'High until placeholder detection becomes blocking.',
    closurePlan: 'When count reaches zero, make placeholder detection blocking, forbid the pattern in policy, and add regression coverage.',
  },
  untranslatedMetadata: {
    description: 'Localized metadata remains untranslated. Currently this is expressed through English summaries in frontmatter.',
    count: 0,
    rootCause: 'Metadata localization was treated as optional compared with title/path coverage.',
    preferredFixLocation: 'Source markdown metadata',
    validatorCoverage: 'Source audit warning; generated completeness validator catches rendered summaries.',
    recurrenceRisk: 'High until source audit becomes blocking.',
    closurePlan: 'When count reaches zero, block untranslated localized metadata in CI and keep source-first guidance in docs.',
  },
  mixedLanguagePublishing: {
    description: 'Generated localized pages expose reader-facing source-language content.',
    count: 0,
    rootCause: 'Historically caused by incomplete localized sources and permissive generation behavior.',
    preferredFixLocation: 'Source markdown first, with generated HTML validation as the final gate',
    validatorCoverage: 'Blocking via tools/validate-localization-completeness.mjs',
    recurrenceRisk: 'Medium if source audit remains advisory; low at generated HTML output level.',
    closurePlan: 'Already closed at generated-output level; keep blocking CI and update regression notes whenever related patterns are discovered.',
  },
};

for (const contentType of DOCS_CONFIG.contentTypes) {
  const dir = path.join(DOCS_DIR, contentType);
  if (fs.existsSync(dir)) {
    walk(dir);
  }
}

defectClasses.untranslatedSummaries.count = findings.metadataLocalization.length;
defectClasses.untranslatedBodies.count = findings.localizationCompleteness.length;
defectClasses.placeholderDraftPublishing.count = findings.mixedLanguagePublishing.length;
defectClasses.untranslatedMetadata.count = findings.metadataLocalization.length;
defectClasses.mixedLanguagePublishing.count = 0;

const localizationDebt = defectClasses.untranslatedSummaries.count
  + defectClasses.untranslatedBodies.count
  + defectClasses.placeholderDraftPublishing.count;
const openDefectClasses = Object.values(defectClasses).filter((item) => item.count > 0).length;
const blockingFindings = localizationDebt
  + findings.navigationLocalization.length;

for (const [category, items] of Object.entries(findings)) {
  if (items.length === 0) {
    continue;
  }
  console.warn(`::warning title=Localized markdown source audit::${category}: ${items.length} finding(s)`);
}

console.log('Localized markdown source audit');
console.log('');
console.log('This audit is blocking for closed defect classes.');
console.log('Fix source markdown and metadata first, then regenerate derived artifacts.');
console.log('');
console.log(`Localization Debt = ${localizationDebt}`);
console.log(`Open Defect Classes = ${openDefectClasses}`);
console.log('');

console.log('Defect classes');
for (const [name, item] of Object.entries(defectClasses)) {
  const status = item.count === 0 ? 'CLOSED' : 'OPEN';
  console.log(`- ${name}: ${status} (${item.count})`);
}
console.log('');

for (const [category, items] of Object.entries(findings)) {
  console.log(`${category}: ${items.length}`);
  for (const item of items.slice(0, 10)) {
    console.log(`- ${path.relative(ROOT, item.file)} :: ${item.reason}`);
  }
  if (items.length > 10) {
    console.log(`- ...and ${items.length - 10} more`);
  }
  console.log('');
}

console.log('Closure plans');
for (const [name, item] of Object.entries(defectClasses)) {
  console.log(`- ${name}`);
  console.log(`  description: ${item.description}`);
  console.log(`  count: ${item.count}`);
  console.log(`  root cause: ${item.rootCause}`);
  console.log(`  preferred fix location: ${item.preferredFixLocation}`);
  console.log(`  validator coverage: ${item.validatorCoverage}`);
  console.log(`  recurrence risk: ${item.recurrenceRisk}`);
  console.log(`  closure plan: ${item.closurePlan}`);
}

if (blockingFindings > 0) {
  console.error('');
  console.error(`Localized markdown source audit failed with ${blockingFindings} blocking finding(s).`);
  process.exit(1);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!entry.name.endsWith('.md') || entry.name === 'README.md') continue;
    inspect(fullPath);
  }
}

function inspect(filePath) {
  if (!LOCALES.some((locale) => filePath.includes(`${path.sep}${locale}${path.sep}`))) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  // Summary heuristic intentionally matches common English summary openers rather than any ASCII
  // text. This keeps the audit focused on likely untranslated metadata without flagging product
  // names or technical tokens.
  if (/^summary:\s*(What|Why|How|English-only)\b/m.test(content)) {
    findings.metadataLocalization.push({ file: filePath, reason: 'English frontmatter summary in localized source' });
  }

  // These helper headings are generator-/workflow-facing cues that should have been localized in
  // source files. Leaving them in English usually means the localized Markdown was never fully
  // finished even if the page can still be generated.
  if (/^## Related Pages$/m.test(content) || /^## Other Languages$/m.test(content)) {
    findings.navigationLocalization.push({ file: filePath, reason: 'English helper heading remains in localized markdown' });
  }

  // Placeholder detection relies on phrases known to appear in coverage-first draft notices.
  // This is intentionally phrase-based because the workflow debt class is historical and specific.
  if (/(coverage linguistique complète|cobertura lingüística completa|popolno jezikovno pokritost|potpunu jezičnu pokrivenost|potpunu jezičku pokrivenost|Sprachabdeckung|copertura linguistica completa|mbulim gjuhësor|јазична покриеност)/i.test(content)) {
    findings.mixedLanguagePublishing.push({ file: filePath, reason: 'Localized draft placeholder indicates knowingly incomplete publication source' });
  }

  // Body-leak detection uses known English sentence stems from article families that previously
  // shipped as mixed-language stubs. The audit is intentionally conservative and source-specific.
  if (/\n(English-only software can feel cheaper|Localization is becoming more continuous|Accessibility and localization are often split|People often learn best|Multilingual software is often described|Languages stay alive not only)/.test(content)) {
    findings.localizationCompleteness.push({ file: filePath, reason: 'Localized source still contains English article body text' });
  }
}
