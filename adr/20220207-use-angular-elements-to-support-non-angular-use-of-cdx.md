# Use Angular Elements to support non-Angular use of CDX

- Status: accepted
- Date: 2022-02-07

## Context and Problem Statement

Based on a product strategy that emerged after the initial investment into
CDX-Lite, we need a technical solution that allows non Angular applications to
make use of CDX components.

## Decision Drivers

- 2022 adoption pipeline
- internal market reseatch

## Considered Options

- Skinning MDC Web (fka CDX-Lite)
- Driving adopters to Common-UI
- Requiring adoption of Angular

## Decision Outcome

Use [Angular Elements](https://angular.io/guide/elements) to produce
web-components that can be used in any web framework. This will allow a single
point of engineering maintenance for both Angular and non-angular components
while ensuring that the rendering of the component in either Angular or native
HTML/CSS/JS are identical.

The goal of creating native-web components at build-time is to keep this process
should be as automatic as possible.

### Positive Consequences

- Pixel precision across Angular and native-web implementations
- Minimal maintenance points (not CDX-Lite, CommonUI and CDX)
- Remain within the CEDAR programs concept of guardrails instead of forcing a
  standard.

### Negative Consequences

- CDX-Lite will be deprecated almost as immediately as it was developed. (Based
  on an emergent product strategy this is a necessary and sunk investment cost.)
