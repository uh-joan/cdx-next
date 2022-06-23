# Use Minimal NPM Package to Expose Individual Colors From Theme

- Status: accepted
- Date: 2022-06-24

## Context and Problem Statement

- Consumers of CDX would like a way to access individual colors which are used
  by the CDX material theme and available to UX designers via Figma.
- Though material provides methods to access individal colors this support
  varies across frameworks (for exasmple primary-700 can be accessed in AM but
  not in MDC)

## Considered Options

- Expose only a few color values (i.e. primary-light, primary-dark)
- Expose all colors used in theme

## Decision Outcome

Chosen option: expose all colors with names matching the relevant hues provided
for each theme sub category (i.e. primary-50, primary-100...primary-900 etc.)

### Positive Consequences

- give designers/devs a bit more flexibility in regards to color choice w/o
  allowing for colors outside the theme

### Negative Consequences

- none?
