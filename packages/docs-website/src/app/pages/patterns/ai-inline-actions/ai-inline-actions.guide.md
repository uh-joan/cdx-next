---
id: ai-inline-actions
title: Inline AI actions
layer: pattern
status: beta
summary: >-
  Bring the assistant to the content: AI actions (summarise, explain, ask about
  this) attached to a document or a selection, with the result shown in place or
  sent to the assistant — not a detour to a separate chat.
use-when: >-
  The user is reading content (a document, a row, a report section) and an AI
  action on that content would help without leaving the page.
avoid-when: >-
  A general, open-ended question (that's the assistant), or an action that would
  work better as a one-shot field edit.
components:
  - HelixAiAvatarComponent
  - matButton
  - matIcon
hlx-classes:
  - hlx-btn-ai
tokens:
  - surface-minimal
  - icon-accent
  - spacing-2
related-foundations:
  - ai
rules:
  - id: scoped-to-content
    text: >-
      Each action is scoped to specific content (this document, this selection,
      this section) and says so; the prompt it builds names that scope.
  - id: seed-or-inline
    text: >-
      Either seed the assistant composer with a scoped prompt (user edits, then
      sends) or show the result inline next to the content — don't silently fire a
      hidden request.
  - id: discoverable-not-noisy
    text: >-
      Attach actions where the content is (a per-item action row, or a floating
      "Ask AI" on text selection), marked with the AI treatment, without
      cluttering every element.
  - id: real-controls
    text: >-
      Actions are real buttons with labels/aria, keyboard-reachable; a
      selection-triggered button is also dismissible and focus-manageable.
  - id: result-is-ai
    text: >-
      An inline result is clearly AI (avatar/gradient) and carries the same
      disclosure and feedback as an assistant answer.
anti-patterns:
  - id: detour-to-chat
    text: Forcing the user into a separate chat to ask about what's on screen.
  - id: hidden-prompt
    text: Firing a hidden prompt with no chance to see or edit it.
  - id: actions-everywhere
    text: An AI action on every element, cluttering the page.
  - id: hover-only-selection
    text: A selection button that only works on hover and can't be reached by keyboard.
examples:
  - actions
evidence:
  - off-x-ui: floating "Ask AI assistant" button on text selection (selectAssistantText / sendQuestionForSelectedText)
  - cortellis-reg-ai-app: per-source-document Summarize and Compare actions that seed a prompt / open the workspace
---

## Overview

Sometimes the fastest path is to bring the assistant **to the content** rather than
sending the user to a chat. Attach AI actions — *summarise*, *explain*, *ask about
this* — to a document, a row, or a text selection, and either seed the assistant
with a scoped prompt or show the result in place. reg-ai does this with
per-document **Summarise / Compare** actions; off-x-ui with a floating **"Ask AI"**
on text selection. It builds on the
[AI assistant](/patterns/ai-assistant) and the
[AI foundation](/foundations/ai)'s *Assistive* principle.

## Two triggers

- **Per-item actions** — an action row on a document/card ("Summarise", "Ask about
  this"). Explicit and discoverable.
- **Selection action** — a floating "Ask AI" button near a text selection, for
  "what does this mean?". Keyboard-reachable and dismissible.

Both build a **scoped prompt** ("Summarise this document: …") and either seed the
composer (user edits, then sends) or render the result inline.

```ts
summarise(doc: Doc): void {
  // Seed the assistant with a scoped, editable prompt — the user stays in control.
  this.assistant.seed(`Summarise this document: ${doc.title}`);
}
```

## Do

- Scope each action to specific content and name that scope.
- Seed the composer or show the result inline; never fire a hidden prompt.
- Attach actions where the content is; mark them with the AI treatment.
- Make them real, keyboard-reachable controls.

## Don't

- Send the user to a separate chat to ask about what's on screen.
- Clutter every element with AI actions.
- Use a hover-only selection button with no keyboard path.
