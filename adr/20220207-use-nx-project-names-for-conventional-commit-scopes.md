# Use Nx project names for conventional commit scopes

- Status: accepted
- Date: 2022-02-07

## Context and Problem Statement

We need a consistent pattern for applying
[scopes](https://git.clarivate.io/projects/CDX/repos/cdx-website/pull-requests/152/overview)
to conventional commit messages.

## Considered Options

- at the discretion of the the commiter
- Nx project names

## Decision Outcome

Chosen option: Nx project names through the
[@commitlint/config-nx-scopes](https://www.npmjs.com/package/@commitlint/config-nx-scopes)
shareable config.

### Positive Consequences

- with standardized scopes, a readable changelog can be generated, which we can
  filter/present by project

### Negative Consequences

- minor loss of flexibility for changes that don't necessarily apply to a single
  Nx project - in these cases, though, the scope can simply be left empty, with
  the understanding that empty scopes either impact _no_ projects directly, or
  _all_ projects indirectly
