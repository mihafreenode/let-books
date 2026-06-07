#!/usr/bin/env node
"use strict";

/**
 * Use Case:
 * UC-004 Review Collection State
 *
 * Source:
 * docs/use-cases/UC-004-review-collection-state.md
 *
 * Purpose:
 * Verify that the static demo provides a usable collection-level overview from
 * which a user can understand current state and continue into the next
 * meaningful workflow.
 */

const { assertVisible, gotoStaticDemo, withScenario } = require("./_helpers");

withScenario("UC-004 draft tutorial: review collection state", async ({ page, baseUrl }) => {
  // Phase 1: open a collection overview with meaningful sample state.
  // This use case is about reviewability of the collection as a whole, so the
  // sample dataset is useful here rather than incidental.
  await gotoStaticDemo(page, baseUrl, "#/dashboard", { seedPrompt: "accept" });

  const primaryNav = page.getByRole("navigation", { name: "Primary" });

  // These anchors protect the promise that collection review leads naturally
  // into other workflows. We do not bind that promise to one exact layout.
  await assertVisible(primaryNav.getByRole("link", { name: "Home" }), "Expected Home navigation anchor.");
  await assertVisible(primaryNav.getByRole("link", { name: "Boxes" }), "Expected Boxes navigation anchor.");
  // The same user-facing action can appear in more than one overview surface,
  // such as hero CTAs and quick actions. We accept the first visible match
  // because the capability matters more than the current placement.
  await assertVisible(page.getByRole("link", { name: /Scan Box QR/ }).first(), "Expected Scan Box QR action.");
  await assertVisible(page.getByRole("link", { name: /Scan ISBN/ }).first(), "Expected Scan ISBN action.");
  await assertVisible(page.getByRole("link", { name: /Add Book/ }).first(), "Expected Add Book action.");
  await assertVisible(page.getByRole("heading", { name: "Recent books" }).first(), "Expected Recent books section.");
  await assertVisible(page.getByRole("heading", { name: "Collections" }).first(), "Expected Collections section.");

  // Phase 2: move from review into action.
  // The business capability being protected is not the dashboard itself, but
  // that a collection overview helps the user continue into more concrete work.
  await primaryNav.getByRole("link", { name: "Boxes" }).click();
  await assertVisible(page.getByRole("heading", { name: "Boxes" }), "Expected Boxes view after moving from collection overview into storage work.");

  // Known fragility:
  // - hero messaging rotates and is intentionally not asserted
  // - exact summary values depend on seed data
  // - section ordering may evolve
});
