# Licensing And Portability

## Why Explicit Licensing Was Added

The extracted skills are intended to become portable engineering assets rather than stay ambiguous repository notes.

Explicit licensing makes it clear that the skill definitions themselves may be:

- copied
- adapted
- redistributed
- reused in commercial and closed-source environments

## Why Skills Are Treated As Portable Assets

The extraction work identified reusable engineering capabilities rather than one-off documents. Without explicit package metadata, those capabilities are easy to confuse with Let Books internal documentation.

## Why Skill Definitions And Implementations Are Separated

The portable unit is the skill definition.

The repository adaptation contains:

- current validators
- current workflows
- current folder structures
- current conventions

That separation matters because a future repository may want the capability without inheriting the exact Let Books implementation.

## Expected Reuse Scenarios

- ERP
- DMS
- web application
- internal business application
- documentation repository

## Open Questions

- should the skills eventually live in a separate repository?
- should reusable validators be packaged separately from the skill definitions?
- should skill versions be tracked independently from Let Books repository changes?
- should future agent installations consume the manifest directly?
