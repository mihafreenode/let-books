#!/usr/bin/env node
"use strict";

/**
 * Use Case:
 * UC-002 Catalog Physical Books
 *
 * Source:
 * docs/use-cases/UC-002-catalog-physical-books.md
 *
 * Purpose:
 * Verify that the static demo supports the full cataloging promise: create a
 * usable book record, reopen it, and improve it later without losing the book
 * as a meaningful collection item.
 */

const { assertVisible, gotoStaticDemo, withScenario } = require("./_helpers");

withScenario("UC-002 draft tutorial: catalog physical books", async ({ page, baseUrl }) => {
  // Phase 1: open the cataloging surface directly.
  // This keeps the test focused on the durable book-record workflow rather than
  // on whichever entry surface led the user here.
  await gotoStaticDemo(page, baseUrl, "#/books/new", { seedPrompt: "dismiss" });

  // These anchors represent the core promise that a physical copy can become a
  // usable record with identifying metadata.
  await assertVisible(page.getByRole("heading", { name: "Add Book" }), "Expected Add Book heading.");
  await assertVisible(page.getByLabel("Title"), "Expected Title field.");
  await assertVisible(page.getByLabel("Publisher"), "Expected Publisher field.");
  await assertVisible(page.getByLabel("ISBN-13"), "Expected ISBN-13 field.");
  await assertVisible(page.getByRole("button", { name: "Save", exact: true }), "Expected Save action.");

  // Phase 2: create a meaningful initial record.
  // This protects more than CRUD mechanics; it preserves the business
  // capability that a physical book can become identifiable and reviewable.
  await page.getByLabel("Title").fill("Cataloged Scenario Book");
  await page.getByLabel("Authors").fill("Catalog Scenario Author");
  await page.getByLabel("Publisher").fill("Scenario Press");
  await page.getByRole("textbox", { name: "Language", exact: true }).fill("en");
  await page.getByLabel("ISBN-13").fill("9781234567897");
  await page.getByRole("button", { name: "Save", exact: true }).click();

  // Phase 3: confirm the saved record becomes understandable as an item.
  // The detail surface matters because cataloging is only useful if the saved
  // result remains readable and actionable later.
  await assertVisible(page.getByRole("heading", { name: "Cataloged Scenario Book" }), "Expected saved book detail heading.");
  await assertVisible(page.getByText("Library review"), "Expected Library review section.");
  await assertVisible(page.getByRole("link", { name: "Edit" }).first(), "Expected Edit action on book detail.");

  // Phase 4: improve the record later.
  // This protects the promise that cataloging is iterative. A quick first pass
  // must not block later correction or enrichment.
  await page.getByRole("link", { name: "Edit" }).first().click();
  await assertVisible(page.getByRole("heading", { name: "Edit Book" }), "Expected Edit Book heading.");
  await page.getByLabel("Publisher").fill("Scenario Press Revised");
  await page.getByRole("button", { name: "Save", exact: true }).click();
  await assertVisible(page.getByText("Scenario Press Revised"), "Expected revised publisher to appear on the saved record.");

  // Known fragility:
  // - photo actions are intentionally not exercised here
  // - field grouping may evolve
  // - this tutorial avoids provider-specific lookup assumptions on purpose
});
