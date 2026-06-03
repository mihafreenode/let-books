> After considerable experimentation, we have rediscovered several traditional best practices.
>
> Many of them turned out to be traditional for a reason.

# Principles

This file is a maintainer's notebook, not a tablet from the mountain.

## Build Things Others Can Continue

Knowledge should outlive the current maintainers, current tools, and current excitement.
If something matters, write it down where the next person can find it.

## Prefer Explicit Over Implied

Tribal knowledge scales poorly and retires unexpectedly.
Decisions, conventions, assumptions, and exceptions should be discoverable in the repository.

## Documentation Is Part of the Product

If users, contributors, or future maintainers need it to succeed, it is product work.
Good docs are not garnish for finished software. They preserve understanding, not just instructions.

## Make Language Less Expensive

Language should help people participate, not filter them out.
Write simply, localize carefully, and avoid turning fluency into a gatekeeping mechanism.

## Preserve Context

Code explains what changed.
History records when it changed and who changed it.
Context explains why it was worth changing.

Repositories are usually good at preserving code and history, and much worse at preserving assumptions, tradeoffs, constraints, and reasoning. Future maintainers should not need to reverse-engineer important decisions from commit history, issue numbers, service requests, or folklore alone.

Rationale is part of the artifact. Preserve enough reasoning that expensive understanding does not need to be rediscovered, because recreating why something exists is often harder than rewriting the code itself.

## Validate Early

Validation is usually cheaper than debate, memory, or confidence.
Checks, examples, tests, and reproducible steps settle many arguments without needing a meeting.

## Lower the Cost of Doing the Right Thing

Good practice should be the easy path, not the heroic path.
Templates, scripts, defaults, and clear examples are quiet forms of governance.

## Practice Beats Posturing

Progress usually comes from repeated useful work.
Small improvements, applied consistently, age surprisingly well.

## Human Judgment Owns the Result

Tools can suggest, accelerate, summarize, and occasionally hallucinate with great confidence.
People remain accountable for what gets merged, published, translated, shipped, and trusted.

## Practicality Wins

Purity is admirable right up to the point where it blocks delivery, learning, or maintenance.
Choose approaches that can be explained, reviewed, and kept working.

## Shared Standards Should Live in Workflows

Standards matter most when they appear in checklists, validators, tests, examples, and CI.
If a rule is important, it should show up somewhere more reliable than folklore.

## Curiosity Is a Maintenance Skill

Ask how things work, why they failed, and what could be simpler.
A repository improves when people are allowed to learn in public and leave useful traces behind.

## Leave Small Evidence of Care

Clear names, tidy diffs, accurate docs, thoughtful comments, and one less confusing step all compound.
Most quality is built out of these apparently minor acts.

> The cake may or may not be real.
