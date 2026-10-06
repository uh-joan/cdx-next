---
id: ai-usage-limits
title: AI usage & limits
layer: pattern
status: beta
summary: >-
  Tell the user where they stand against AI limits — responses left, a context
  that's too long, a rate limit — before and when they hit them, with a clear way
  forward, using hlx-notification.
use-when: >-
  An assistant with quotas, a bounded context window, or rate limits — anywhere a
  request can be refused for a limit rather than an error.
avoid-when: >-
  No limits apply, or a genuine failure (that's the error state, not a limit).
components:
  - HelixNotificationComponent
  - matButton
hlx-classes: []
tokens:
  - text-secondary
  - spacing-2
related-foundations:
  - ai
rules:
  - id: show-before-hitting
    text: >-
      Show remaining quota before it runs out (e.g. "8 of 10 responses left
      today"), quietly, near the composer — not only once it's gone.
  - id: limit-not-error
    text: >-
      A limit is not a failure. Use an hlx-notification (warn for approaching,
      negative only when blocked), with plain language and a way forward — not a
      red error toast.
  - id: way-forward
    text: >-
      Every limit state offers the next step: context too long → "Start a new
      chat"; quota reached → when it resets; rate limited → when to retry.
  - id: disable-at-block
    text: >-
      When a limit blocks input, disable the composer and the send/New-chat control
      that can't work, so the user isn't typing into a dead end.
  - id: announce
    text: >-
      Limit banners are announced to assistive tech (hlx-notification sets the role
      — status for warn, alert for negative); don't bury the state in muted text
      only.
anti-patterns:
  - id: only-when-gone
    text: No sign of the quota until the user is suddenly blocked.
  - id: red-error
    text: Treating a limit as a red error with no next step.
  - id: dead-composer
    text: Leaving the composer enabled when input can't be sent.
examples:
  - limits
evidence:
  - off-x-ui: messagesLeft quota threaded through both assistants; "out of AI responses for today" banner disables composer + New Chat at 0
  - cmc-gui-docker: reachedContextLimit() → context-limit banner ("conversation too long, start a new chat") + send-error banner
---

## Overview

Assistants have limits — a daily response quota, a bounded context window, a rate
limit. Tell the user where they stand *before* they hit one, and give a clear way
forward when they do. off-x-ui threads a **responses-left quota**; cmc shows a
**context-limit** banner that points to a new chat. Both use the
[notification](/components/notifications) component; this pairs with the
[AI assistant](/patterns/ai-assistant) and follows the
[AI foundation](/foundations/ai)'s *Trustworthy* principle.

## Three limit states

| State | When | Treatment |
| --- | --- | --- |
| **Quota remaining** | Normal | Quiet "N of M left today" near the composer |
| **Context too long** | The thread exceeds the window | `warn` banner → Start a new chat |
| **Quota reached / rate limited** | Blocked | `negative` banner + disable the composer; say when it resets |

```html
@if (contextTooLong()) {
  <hlx-notification severity="warn" title="This conversation is getting long"
    action="Start a new chat" (actionEvent)="newChat()">
    Start a new chat to keep answers accurate.
  </hlx-notification>
}
```

## Do

- Show remaining quota quietly, before it runs out.
- Use `hlx-notification` (warn approaching, negative when blocked), with a next step.
- Disable the composer when input can't be sent.

## Don't

- Hide the quota until the user is blocked.
- Treat a limit as a red error with no way forward.
- Leave the composer enabled when it can't send.
