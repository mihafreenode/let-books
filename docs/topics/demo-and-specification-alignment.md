---
title: "Demo and Specification Alignment"
summary: "Why demos are useful evidence for implementation state but should not silently replace specifications as the main source of product truth."
topic_category: spec-driven-development
topics:
  - demo-alignment
  - spec-driven-development
  - validation
related:
  blog:
    - when-the-demo-is-evidence-and-when-it-is-not
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - demo-spec-alignment
---

# Demo and Specification Alignment

A demo shows what currently exists. A specification describes what the product is supposed to be. The two are related, but they are not interchangeable.

Teams often treat a working demo as the most persuasive artifact in a project, and for good reason. A demo makes behavior concrete. It exposes workflow gaps, usability problems, and implementation choices that would remain abstract in a document. But a demo is also incomplete evidence. It is shaped by whatever has been built so far, including shortcuts, experiments, and temporary omissions.

Specification alignment means keeping those two layers in conversation. If the demo diverges from the spec, either the implementation needs correction or the specification needs review. What should not happen is silent drift, where the demo becomes the new truth simply because it exists in a more visible form.

This matters especially in projects that move quickly. An AI-assisted workflow can generate interfaces and behavior faster than the surrounding documentation is updated. Without an explicit alignment habit, contributors may start following whatever the current demo happens to show.

LetBooks uses this distinction carefully. The repository already contains a public static demo, high-level product specifications, implementation guidance, and localized docs. The demo is valuable because it makes storage, QR, and metadata workflows tangible. It is not sufficient on its own to redefine workflow rules that are still specified elsewhere. The blog article [When the Demo Is Evidence and When It Is Not](/docs/blog/en/when-the-demo-is-evidence-and-when-it-is-not.html) explores that tension directly.

The practical rule is simple: a demo is implementation evidence, not automatic product authority. Alignment requires comparing demos, specifications, docs, and validation results together rather than letting any one of them dominate by accident.
