---
id: ai-assistant
title: AI assistant
layer: template
status: beta
summary: >-
  A conversational assistant: a thread of user and assistant message cards, a
  streaming answer announced to assistive technology, per-answer feedback, and a
  docked composer — built on the Helix AI avatar and gradient.
use-when: >-
  A product's AI chat or assistant surface, full-page or in a side panel.
avoid-when: >-
  A one-shot generate action (a button that fills a field) — that is a button with
  a loading state, not a conversation.
components:
  - HelixAiAvatarComponent
  - matButton
  - matIconButton
  - MatFormFieldModule
  - HelixEmptyStateComponent
hlx-classes:
  - hlx-btn-ai
  - hlx-gradient-ai
tokens:
  - surface-minimal
  - text-secondary
  - spacing-2
  - spacing-3
related-foundations:
  - ai
rules:
  - id: announce-streaming
    text: >-
      The streamed answer lives in an aria-live="polite" region so screen readers
      hear it as it arrives. The thinking/searching status is real text in that
      region, never CSS `content:`.
  - id: ai-avatar-for-assistant
    text: >-
      Mark assistant turns with hlx-ai-avatar; set `animated` only while a
      response is generating. The avatar already respects prefers-reduced-motion.
  - id: real-buttons
    text: >-
      Feedback (thumbs up/down, copy) and citations are real <button>s with
      aria-label and aria-pressed, never clickable <div>s.
  - id: distinct-turns
    text: >-
      User and assistant turns are visually distinct — a right-aligned user bubble
      on surface-minimal, an assistant turn led by the avatar — and each turn is a
      list item in a labelled log (role="log").
  - id: composer
    text: >-
      One composer component: an autosizing textarea that submits on Enter (newline
      on Shift+Enter), disabled while generating, with a labelled send button.
  - id: citations-accessible
    text: >-
      Inline citations open an accessible popover (the rich tooltip), reachable by
      keyboard and focus, not a hover-only home-made div.
  - id: history-reuses-states
    text: >-
      The history sidebar reuses the app-shell drawer and Page states (loading
      skeleton, empty, error); rename/delete go through the Dialogs size presets.
  - id: disclose-ai
    text: >-
      Show a short AI-generated disclosure near the thread; keep answer copy in
      sentence case and address the user as "you".
anti-patterns:
  - id: no-live-region
    text: Streaming tokens into the DOM with no aria-live, so screen readers miss the answer.
  - id: status-in-css
    text: Putting the "Thinking…" status in CSS `content:` where assistive tech can't read it.
  - id: clickable-divs
    text: Feedback or citations as <div (click)> instead of real buttons.
  - id: runtime-cdn
    text: Loading a charting or markdown library from a CDN at runtime inside the chat.
  - id: duplicated-chat
    text: Copying the whole chat UI per surface (off-x-ui has it three times) instead of shared parts.
examples:
  - conversation
evidence:
  - cortellis-reg-ai-app: best conversation UI (cards, streaming indicator, citations, feedback, history) — but no aria-live, status in CSS content, clickable divs
  - cmc-gui-docker: best architecture (state/service split, tests), thinking animation, context-limit + error banners
  - off-x-ui: a How-was-this-generated trace, docked side-panel mode, messages-left quota — but chat UI built 3x and a runtime CDN script
---

## Overview

An assistant surface is a thread of turns the user and the model take, with a
composer docked at the bottom. Helix ships the pieces that make it feel like
Clarivate AI — the [AI avatar](/components/ai-avatar), the `hlx-btn-ai` gradient
button and the `hlx-gradient-ai` surface — and the [AI foundation](/foundations/ai)
covers the voice. All three audited apps built a capable chat UI; none made the
streamed answer accessible. This pattern keeps their structure and fixes that.

## Anatomy

- **Thread** — a `role="log"` list, centred (~760px), each turn a list item.
- **User turn** — a right-aligned bubble on `surface-minimal`.
- **Assistant turn** — led by `hlx-ai-avatar`; the answer renders into an
  `aria-live="polite"` region; below it, the feedback actions.
- **Streaming indicator** — the avatar `animated`, with the status
  ("Thinking…", "Searching…", "Generating answer…") as **text** in the live
  region.
- **Composer** — an autosizing textarea (Enter submits, Shift+Enter newlines),
  disabled while generating, and a labelled send button (`hlx-btn-ai`).

## Accessibility is the point here

```html
<!-- The whole answer area is one polite live region -->
<div class="assistant-turn" aria-live="polite">
  @if (generating()) {
    <p class="assistant-turn__status">{{ status() }}</p>
  }
  <div class="assistant-turn__answer">{{ answer() }}</div>
</div>
```

Screen readers announce the status and the answer as they change. The status is
real text, not `::before { content }`. Feedback is real buttons with
`aria-pressed`:

```html
<button matIconButton aria-label="Good answer" [attr.aria-pressed]="rating() === 'up'"
  (click)="rate('up')"><mat-icon>thumb_up</mat-icon></button>
```

## Citations, history, feedback detail

- **Citations** — render an inline numbered `<button>` that opens the
  [rich tooltip](/components/tooltips) as a popover (keyboard- and focus-
  reachable), showing the source excerpt and a link. Not a hover-only div.
- **History** — a drawer (the [App shell](/patterns/app-shell) drawer) grouped by
  date, with the [Page states](/patterns/page-states) for loading / empty /
  error, and rename / delete through the [Dialogs](/patterns/dialogs) size
  presets.
- **Thumbs-down** opens an inline reason form with a short privacy note.

## Markdown answers

Render model markdown through one shared, sanitised prose style — not per-app
`::ng-deep` on `innerHTML`. (A shared Helix prose style is a tracked gap; until
it lands, scope the prose styles to the answer component.)

## Do

- Put the streamed answer and status in an `aria-live` region.
- Mark assistant turns with `hlx-ai-avatar`; animate only while generating.
- Make feedback and citations real buttons with `aria-pressed` / `aria-label`.
- Share one set of chat parts across surfaces.

## Don't

- Stream tokens with no live region, or put status in CSS `content:`.
- Use clickable `<div>`s for feedback or citations.
- Load a library from a CDN at runtime inside the chat.
- Copy the whole chat UI per surface.
