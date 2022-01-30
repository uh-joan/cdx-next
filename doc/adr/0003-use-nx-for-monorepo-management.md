# 3. Use Nx for monorepo management

Date: 2022-01-30

## Status

Accepted

## Context

Monorepos can be challenging and error-prone. We need a tool-chain that manages this complexity.

## Decision

We will use [Nx](https://nx.dev/) to manage the monorepo and builds against it.

Although there are several options available (`cdx-lite` uses [Lerna](https://lerna.js.org/), for example), Nx appears to be the most feature-rich and future-looking, especially as we transition to a more "micro ui" approach to feature composition.

Nx is the only one of the monorepo managers that is listed on the [ThoughtWorks technology radar](https://www.thoughtworks.com/en-ca/radar/tools/nx). As of Oct. 2021, it is listed as "Trial", with the note:

> In our teams we see a shift away from Lerna and a strong preference to use Nx for managing JavaScript-based monorepos.

## Consequences

With Nx, managing packages and builds in the monorepo is consistent and repeatable, and is only as challenging as understanding Nx conventions. There will be some learning curve associated with the adoption of Nx, but this risk is mitigated by a healthy and vibrary community supporting Nx and its extensive documentation.
