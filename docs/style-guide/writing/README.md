# Writing

## Summary

`docs/style-guide/writing/` defines tone, structure, evidence standards, and educational writing conventions.

## Purpose

LetBooks content should feel human, educational, accurate, respectful, and traceable.

## Evidence Guidance

- Public editorial content should quote specs and docs, not application source code.
- Use documentation and specification files as the canonical basis for product behavior claims.
- When implementation status matters, say whether a feature is implemented yet without presenting source files as the proof text.
- Prefer stable document references over exact source-code line references, which drift quickly.

## Connected Reasoning Rule

Prefer connected reasoning over fragmented formatting.

Articles should primarily teach through developed prose rather than a rapid sequence of isolated headings, short paragraphs, and bullet lists. A durable engineering article should help the reader follow how an observation leads to an implication, how that implication is tested or refined, and how the conclusion was reached.

In practice, this means a strong section often develops a chain such as:

- observation
- implication
- example
- refinement
- conclusion

The purpose of that chain is not to force a formula. It is to preserve reasoning, not only outcomes.

## Section Design

Prefer a smaller number of substantial sections where related ideas are developed together.

If two adjacent sections are really part of the same argument, merge them unless the split improves understanding for the reader. Use headings to separate major ideas, not every intermediate thought.

Readers should be able to move from one paragraph to the next without feeling that each paragraph resets the topic.

## Fragmentation To Avoid

Avoid excessive micro-sections and slide-like formatting patterns such as:

- short heading
- one short paragraph
- another heading
- one short paragraph
- another heading
- a bullet list

That structure may be easy to scan, but it often weakens teaching value, hides the reasoning chain, and makes the piece feel more like notes than a durable engineering document.

## Lists Rule

Use lists when they genuinely improve clarity, especially for:

- requirements
- examples
- alternatives
- checklists
- comparisons

Do not replace explanatory prose with lists when the real goal is to explain why something matters or how a conclusion was reached.

## Reader Outcome

The article should read more like an engineering essay than a collection of independent observations.

By the end of a section, the reader should understand:

- what was observed
- why it matters
- how the conclusion was reached

not merely the final conclusion.

This aligns with the repository's broader goal of preserving intent, context, reasoning, and understanding rather than preserving conclusions alone.

## Structure

- tone guidance
- article structure guidance
- code example guidance
- diagram guidance

## Related Topics

- Educational writing
- Technical writing
- Public-interest journalism

## Related Articles

- `../../blog/README.md`

## Related Learning Guides

- `../../learning/README.md`

## Related Wiki Pages

- `../../wiki/README.md`

## Further Reading

- `../publishing/README.md`
- `../../knowledge-platform-bootstrap.md`
