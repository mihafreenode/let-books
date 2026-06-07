#!/usr/bin/env node
"use strict";

/**
 * Use Case:
 * UC-003 Organize And Inspect Physical Storage
 *
 * Source:
 * docs/use-cases/UC-003-organize-and-inspect-physical-storage.md
 *
 * Purpose:
 * Verify that users can continue work from physical storage context and do not
 * need to reconstruct location information manually before taking the next
 * storage-related action.
 */

const { assertVisible, gotoStaticDemo, withScenario } = require("./_helpers");

withScenario("UC-003 draft tutorial: organize and inspect physical storage", async ({ page, baseUrl }) => {
  // Phase 1: load seeded collection data.
  // This use case only becomes meaningful when real box context exists, so the
  // draft scenario deliberately accepts the sample collection prompt.
  await gotoStaticDemo(page, baseUrl, "#/boxes", { seedPrompt: "accept" });

  // These anchors matter because they show the application is exposing storage
  // as a first-class workflow, not as hidden metadata behind books.
  await assertVisible(page.getByRole("heading", { name: "Boxes" }), "Expected Boxes heading.");
  await assertVisible(page.getByRole("button", { name: "Create Box" }), "Expected Create Box action.");
  await assertVisible(page.getByRole("link", { name: "Open" }).first(), "Expected at least one box entry with an Open action.");

  // Phase 2: move into a specific storage container.
  // We intentionally avoid asserting which box opens because seeded ordering is
  // not the contract. The durable promise is that any real container can become
  // the user's current work context.
  await page.getByRole("link", { name: "Open" }).first().click();
  await page.getByRole("link", { name: "Add books here" }).waitFor({ state: "visible", timeout: 10000 });

  // Once inside a box, the user should be able to continue intake, scanning,
  // or storage-specific actions without leaving that physical context behind.
  await assertVisible(page.getByRole("button", { name: /Show QR/ }).first(), "Expected Show QR action in box context.");
  await assertVisible(page.getByRole("link", { name: "Add books here" }), "Expected Add books here action.");
  await assertVisible(page.getByRole("link", { name: "Scan ISBN" }), "Expected Scan ISBN action.");
  await assertVisible(page.getByRole("heading", { name: "Books in this box" }), "Expected box contents heading.");

  // Phase 3: verify that storage inspection can be narrowed by state.
  // This protects the business capability of working through a container by
  // relevance, not just by raw visual browsing.
  await page.getByRole("link", { name: "Ready" }).click();
  await assertVisible(page.getByRole("heading", { name: "Books in this box" }), "Expected box contents to remain visible after applying a filter.");

  // Known fragility:
  // - seeded box ordering is intentionally not asserted
  // - box ids are generated per run
  // - current box visuals are non-contractual and may change during redesign
});
