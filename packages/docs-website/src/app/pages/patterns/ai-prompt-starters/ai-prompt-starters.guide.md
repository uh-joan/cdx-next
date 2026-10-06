---
id: ai-prompt-starters
title: AI prompt starters
layer: pattern
status: beta
summary: >-
  The pre-conversation landing for an assistant: a short greeting, a few
  suggested-prompt cards that seed the composer, and the composer itself — so the
  user isn't facing a blank box.
use-when: >-
  The empty state of an AI assistant, before the first message, full-page or in a
  panel.
avoid-when: >-
  A conversation already in progress (that's the AI assistant thread), or a
  one-off generate button.
components:
  - HelixAiAvatarComponent
  - matButton
  - MatFormFieldModule
hlx-classes:
  - hlx-gradient-ai
tokens:
  - surface-minimal
  - text-secondary
  - spacing-2
  - spacing-3
related-foundations:
  - ai
rules:
  - id: seed-dont-send
    text: >-
      A starter card fills the composer with an editable prompt and focuses it; it
      does not send immediately — the user stays in control (the Assistive
      principle).
  - id: few-specific
    text: >-
      Offer three to six starters, each a specific, product-relevant task ("Compare
      the last two labels for…"), not generic filler ("Ask me anything"). Keep them
      short.
  - id: real-cards
    text: >-
      Starters are real buttons (keyboard-reachable, aria-labelled), laid out as a
      responsive grid that collapses to one column on small screens.
  - id: greeting-then-composer
    text: >-
      Lead with a brief greeting (AI avatar optional), then the starters, then the
      docked composer — the same composer the conversation uses.
  - id: ai-identity
    text: >-
      Signal that this is AI with the Helix AI treatment (avatar / gradient title),
      per the AI foundation, without overdoing it.
anti-patterns:
  - id: send-on-click
    text: A starter that fires the question immediately, denying the user a chance to edit.
  - id: generic-starters
    text: Vague starters ("Ask me anything") that don't teach what the assistant can do.
  - id: clickable-divs
    text: Starter tiles as clickable divs instead of real buttons.
examples:
  - home
evidence:
  - cortellis-reg-ai-app: chat-intro + hint-card (icon/title/desc tiles that pre-fill the composer) — the source
  - cmc-gui-docker: assistant-home (greeting, selectors, example cards)
  - off-x-ui: safety-assistant empty state (greeting, example-card grid, tips, quota notice)
---

## Overview

An assistant's first screen shouldn't be an empty box. Lead with a short
greeting, a few **suggested-prompt cards** that seed the composer, and the
composer itself. All three apps do this; reg-ai's `chat-intro` + `hint-card` is
the cleanest source. It pairs with the [AI assistant](/patterns/ai-assistant)
pattern (this is its empty state) and follows the
[AI foundation](/foundations/ai).

## Starters seed, they don't send

Clicking a starter fills the composer with an **editable** prompt and focuses it —
it never sends on click. That keeps the user in control (the foundation's
*Assistive* principle) and lets them tweak before asking.

```ts
readonly draft = signal('');

useStarter(prompt: string): void {
  this.draft.set(prompt);
  this.composer()?.nativeElement.focus();
}
```

## Pick good starters

Three to six, each a **specific, product-relevant** task — not generic filler:

- "Summarise the latest regulatory changes for pembrolizumab"
- "Compare the last two FDA labels for this drug"
- "Which trials for this target changed phase this quarter?"

## Do

- Seed the composer (editable, focused); never auto-send.
- Offer a few specific, product-relevant starters as real buttons.
- Reuse the conversation's composer.
- Signal AI with the Helix treatment, lightly.

## Don't

- Fire the question on card click.
- Use vague "ask me anything" starters.
- Build the tiles as clickable divs.
