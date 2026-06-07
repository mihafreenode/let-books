#!/usr/bin/env node
"use strict";

/**
 * Use Case:
 * UC-001 Receive Books Into The Collection
 *
 * Source:
 * docs/use-cases/UC-001-receive-books-into-the-collection.md
 *
 * Purpose:
 * Verify that the static demo preserves a rapid intake promise: a user can
 * register a physical copy and continue to the next item without being forced
 * into full catalog completion first.
 */

const { assertVisible, gotoStaticDemo, withScenario } = require("./_helpers");

withScenario("UC-001 draft tutorial: receive books into the collection", async ({ page, baseUrl }) => {
  // Phase 1: start from an empty collection.
  // This protects the intake promise itself rather than any seeded sample flow.
  await gotoStaticDemo(page, baseUrl, "#/books/new", { seedPrompt: "dismiss" });

  // These anchors matter because quick intake must still expose the minimum
  // information needed to identify and place a received physical copy.
  await assertVisible(page.getByRole("heading", { name: "Add Book" }), "Expected Add Book heading.");
  await assertVisible(page.getByLabel("Title"), "Expected Title field.");
  await assertVisible(page.getByLabel("Authors"), "Expected Authors field.");
  await assertVisible(page.getByLabel("Box"), "Expected box assignment field.");
  await assertVisible(page.getByRole("button", { name: "Save & Add Next" }), "Expected Save & Add Next action.");

  // Phase 2: create a minimal but traceable received-book record.
  // The business capability being protected here is rapid intake under real
  // shelf or box-walking conditions, where only a small amount of metadata may
  // be available at first.
  await page.getByLabel("Title").fill("Draft Intake Book");
  await page.getByLabel("Authors").fill("Scenario Author");
  await page.getByRole("button", { name: "Save & Add Next" }).click();

  // Phase 3: confirm that the workflow stays in intake mode.
  // We intentionally do not assert generated ids or exact route details. The
  // durable promise is that the user can keep processing the next physical copy
  // immediately after saving the current one.
  await assertVisible(page.getByRole("heading", { name: "Add Book" }), "Expected intake flow to remain on Add Book after Save & Add Next.");
  await assertVisible(page.getByLabel("Title"), "Expected Title field on the next intake form.");

  // Known fragility:
  // - exact sheet header wording may change
  // - generated book ids are intentionally not asserted
  // - intake and richer editing still share one form in the current demo
});
