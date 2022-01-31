# Use Nx for monorepo management

- Status: accepted
- Date: 2022-01-30

## Context and Problem Statement

Monorepos can be challenging and error-prone. We need a tool-chain that manages
this complexity.

## Considered Options

- manual management with shell scripts (as in old CDX library)
- [Nx](https://nx.dev/): monorepo manager and build system for javascript
  applications
- [lerna](https://github.com/lerna/lerna): monorepo manager

## Decision Outcome

Chosen option: [Nx](https://nx.dev/) to manage the monorepo and builds against
it.

Although there are several options available (`cdx-lite` uses
[Lerna](https://lerna.js.org/), for example), Nx appears to be the most
feature-rich and future-looking, especially as we transition to a more "micro
ui" approach to feature composition.

Nx is the only one of the monorepo managers that is listed on the
[ThoughtWorks technology radar](https://www.thoughtworks.com/en-ca/radar/tools/nx).
As of Oct. 2021, it is listed as "Trial", with the note:

> In our teams we see a shift away from Lerna and a strong preference to use Nx
> for managing JavaScript-based monorepos.

### Positive Consequences

- consistent and repeatable management of projects in the monorepo
- support of a very active ecosystem of people, plugins, and documentation

### Negative Consequences

- somewhat steep learning curve associated with the Nx toolchain (mitigated by a
  healthy and vibrary community supporting Nx and its extensive documentation)
