# Use conventional commits

- Status: accepted
- Date: 2022-01-29

## Context and Problem Statement

`@cdx` will be long-lived and have contributors from many different parts of the
Clarivate business, through an inner-source support model.

As such, a reasonable standard for quality commit messages is necessary to
support long-term project health.

## Considered Options

- no standardized commit message format
- [Conventional Commits](https://www.conventionalcommits.org/): commit message
  format and associated command-line tools

## Decision Outcome

Chosen option: use [Conventional Commits](https://www.conventionalcommits.org/)
and enforce compliance with [commitlint](https://commitlint.js.org/) and
[commitizen](https://commitizen-tools.github.io/commitizen/).

### Positive Consequences

- Writing good commit messages, although still challenging, is made much easier.
  The git log will be readable and supportable over time, leading to a highly
  maintainable product.

### Negative Consequences

- "quick and dirty" local commits will be more difficult to author (bleep,
  blorb, etc). Some will see this as a benefit, others will see this as a
  deteriment.
