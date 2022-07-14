# Expose framework-native services

- Status: [proposed]

## Context and Problem Statement

Functionality exposed by CDX services need to be consumable in various
frameworks.

## Decision Drivers

- there are at least 4 frameworks that CDX will eventually support: Angular,
  React, Vue, and Vanilla WebComponents

## Considered Options

- Reuse/re-expose CDX 1.X services
- Implement in Vanilla JS and create "adaptors" for the higher-level frameworks
- Implement in a "framework-native" approach, pulling up common functionality to
  a shared package

## Decision Outcome

Implent in a "framework-native" approach.

### Positive Consequences

- Best ergonomics (service injection works in the same way engineers are
  accustomed to)
- Best performance, as there are no additional layers
- Aligns with industry-standard approaches (ex.
  [Kendo](https://www.telerik.com/kendo-angular-ui) )

### Negative Consequences

- More surface area to maintain; can be mitigated by pulling-up common
  functionality
