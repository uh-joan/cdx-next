---
id: ai-generation-trace
title: AI generation trace
layer: pattern
status: beta
summary: >-
  A collapsed "How was this generated?" disclosure under an AI answer, showing the
  steps the assistant took and the inputs it used — so users can understand and
  trust the result.
use-when: >-
  An AI answer whose provenance matters — which sources, filters or steps produced
  it — especially in regulated or high-stakes contexts.
avoid-when: >-
  A trivial response where a trace adds noise, or when the steps can't be
  described truthfully.
components:
  - MatExpansionModule
  - matIcon
hlx-classes: []
tokens:
  - surface-minimal
  - text-secondary
  - icon-positive
  - spacing-2
related-foundations:
  - ai
rules:
  - id: collapsed-by-default
    text: >-
      The trace is collapsed by default, below the answer, labelled "How was this
      generated?" — available but never in the way.
  - id: truthful-steps
    text: >-
      Show what actually happened — the real steps, tools, filters and source
      counts — not a decorative fake. If you can't describe it truthfully, don't
      show a trace (the Transparent and Trustworthy principles).
  - id: two-flavours
    text: >-
      Two shapes: a live step list that fills in as the answer streams (done
      markers on completed steps), and/or a static reasoning summary (the query,
      its classification, the filters applied).
  - id: accessible-disclosure
    text: >-
      Use a real disclosure (mat-expansion-panel or <details>) — keyboard-operable,
      with the expanded state exposed to assistive tech — not a hover or a
      click-div.
  - id: link-sources
    text: >-
      Where a step produced sources, link them (or point to the citations) so the
      user can verify, not just read a count.
anti-patterns:
  - id: always-open
    text: A trace expanded by default that pushes the answer down.
  - id: fake-steps
    text: A decorative "reasoning" that doesn't reflect what the model actually did.
  - id: hover-only
    text: Revealing the trace on hover, or via a clickable div with no keyboard support.
examples:
  - trace
evidence:
  - off-x-ui: safety-assistant <details> "How was this generated?" with an ordered step list of SSE messages + check_circle done markers; chat-bot expansion panel over internal messages + Request ID
  - cortellis-reg-ai-app: generation-explanation — query, classification, region/product filters, topics
---

## Overview

When provenance matters, give users a way to see how an answer was produced. A
collapsed **"How was this generated?"** disclosure under the answer, holding the
steps the assistant took and the inputs it used. off-x-ui's safety assistant is
the source for the live **step trace**; reg-ai's `generation-explanation` is the
**reasoning summary** (query, classification, filters). Both serve the AI
foundation's *Transparent* and *Trustworthy* principles. It extends the
[AI assistant](/patterns/ai-assistant) answer.

## Two shapes

- **Step trace** — an ordered list that fills in as the answer streams, each
  completed step marked done; the last line can show the in-flight step.
- **Reasoning summary** — a static recap of the query, how it was classified, and
  the filters applied, with any sources linked.

## Truthful, collapsed, accessible

```html
<mat-expansion-panel class="trace">
  <mat-expansion-panel-header>
    <mat-panel-title>How was this generated?</mat-panel-title>
  </mat-expansion-panel-header>

  <ol class="trace__steps">
    @for (step of steps(); track step.label) {
      <li [class.is-done]="step.done">
        <mat-icon>{{ step.done ? 'check_circle' : 'pending' }}</mat-icon>
        {{ step.label }}
      </li>
    }
  </ol>
</mat-expansion-panel>
```

The steps are what actually happened — real tools, filters and source counts. If
you can't describe the process truthfully, don't show a trace.

## Do

- Keep it collapsed, below the answer, clearly labelled.
- Show the real steps / filters / source counts; link sources.
- Use a real, keyboard-operable disclosure.

## Don't

- Expand it by default.
- Fabricate a "reasoning" that doesn't match what happened.
- Reveal it on hover or via a click-div.
