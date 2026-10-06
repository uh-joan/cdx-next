---
id: ai-chat-history
title: AI chat history
layer: pattern
status: beta
summary: >-
  A panel of past AI conversations, grouped by recency and titled by their first
  question, that the user can reopen, rename and delete — with real loading, empty
  and error states, not just the happy path.
use-when: >-
  An AI assistant keeps a history of conversations the user returns to, resumes,
  renames or cleans up.
avoid-when: >-
  A one-shot or stateless AI interaction with nothing worth keeping, or a single
  active conversation with no past sessions.
components:
  - matButton
  - matIcon
  - MatMenuModule
  - NgxSkeletonLoaderModule
hlx-classes:
  - hlx-btn-negative
tokens:
  - surface-minimal
  - border-secondary
  - text-secondary
  - spacing-2
related-foundations:
  - ai
rules:
  - id: group-by-recency
    text: >-
      Group conversations by recency (Today / Last 7 days / Older), newest first,
      so the user finds recent work without scanning the whole list.
  - id: title-from-first-message
    text: >-
      Label each conversation by its first question, truncated with the full text
      on a tooltip; a pending conversation shows a skeleton placeholder until its
      title arrives.
  - id: manage-in-place
    text: >-
      Let the user rename and delete a conversation from a per-item menu revealed on
      hover and focus — real, keyboard-reachable controls — and confirm a delete.
  - id: all-list-states
    text: >-
      The list has loading (skeletons), empty, and error-with-retry states, plus
      load-more and end-of-list for a long history — not just the loaded path.
  - id: mark-the-active
    text: >-
      Highlight the conversation currently open and scroll it into view; a new chat
      is one click from the header.
  - id: resume-on-open
    text: >-
      Each entry deep-links to its conversation and restores it where the user left
      off; remember whether the history panel is open.
anti-patterns:
  - id: flat-list
    text: An undated, ungrouped list where the user can't find recent chats.
  - id: untitled-entries
    text: Entries labelled only by id or timestamp, with no human-readable title.
  - id: no-management
    text: History you can read but can't rename, delete or clean up.
  - id: happy-path-only
    text: A list that renders loaded data but shows nothing while loading, empty or on error.
  - id: destructive-no-confirm
    text: Deleting a conversation with no confirmation.
examples:
  - panel
evidence:
  - cortellis-reg-ai-app: chat-history panel grouped Today / Last 7 days / Older, query-as-title with tooltip and skeleton placeholders, hover/focus more_vert menu (Rename, Delete, "In this chat" index), skeleton loading, empty icon, connection-error refresh, infinite scroll with load-more retry + back-to-top, active-entry highlight scrolled into view, new-chat button, panel-open persisted to localStorage
  - cmc-gui-docker: assistant-history-sidebar of past sessions
  - off-x-ui: minimal history
---

## Overview

An assistant the user returns to needs a **history** they can navigate — not a flat
log. Group past conversations by recency, title each by its first question, and let
the user reopen, rename and delete them, with every list state handled. reg-ai's
chat-history panel is the reference: grouped **Today / Last 7 days / Older**,
query-as-title with a tooltip, a per-item **Rename / Delete** menu on hover and
focus, and real loading, empty and error states. It's the
[AI foundation](/foundations/ai)'s *Trustworthy* principle applied to the user's own
record, and it pairs with the
[AI assistant](/patterns/ai-assistant).

## Grouped, titled, resumable

```ts
// Group by recency, newest first — Today / Last 7 days / Older.
readonly grouped = computed(() => {
  const now = new Date();
  const groups = new Map<string, Conversation[]>();
  for (const c of [...this.conversations()].sort(byNewest)) {
    const key = groupKey(new Date(c.timestamp), now); // 'Today' | 'Last 7 days' | 'Older'
    (groups.get(key) ?? groups.set(key, []).get(key)!).push(c);
  }
  return groups;
});

// Title from the first question; a pending conversation shows a skeleton.
title(c: Conversation): string { return c.query || ''; }
```

## Every state, not just the happy path

A real history has to render while **loading** (skeletons), when **empty** (a clear
message), and on **error** (a retry) — and, for a long list, load more on scroll and
show the end. Treat these as first-class, exactly like the
[Page states](/patterns/page-states) pattern.

## Do

- Group by recency and title by the first question.
- Rename and delete from a hover/focus menu; confirm deletes.
- Handle loading, empty and error states, plus load-more.
- Highlight the active conversation; offer a one-click new chat.

## Don't

- Ship a flat, undated list or id-only titles.
- Make history read-only with no way to clean up.
- Render only the loaded path.
- Delete without confirmation.
