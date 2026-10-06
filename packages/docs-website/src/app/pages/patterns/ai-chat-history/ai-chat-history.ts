import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-chat-history',
  templateUrl: './ai-chat-history.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiChatHistory {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  groupSnippet = `// Group by recency, newest first — Today / Last 7 days / Older.
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
title(c: Conversation): string { return c.query || ''; }`;
}
