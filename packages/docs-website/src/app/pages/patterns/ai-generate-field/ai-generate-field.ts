import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-ai-generate-field',
  templateUrl: './ai-generate-field.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class AiGenerateField {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  flowSnippet = `readonly value = signal(initialText);
readonly proposal = signal<string | null>(null);
readonly status = signal<'idle' | 'generating' | 'error'>('idle');

rewrite(kind: 'draft' | 'shorten' | 'fix'): void {
  this.status.set('generating');
  this.ai.rewrite(kind, this.value()).subscribe({
    next: (text) => { this.proposal.set(text); this.status.set('idle'); },
    error: () => this.status.set('error'),
  });
}

accept(): void {
  this.previous.set(this.value());   // for undo
  this.value.set(this.proposal()!);
  this.proposal.set(null);
}

discard(): void { this.proposal.set(null); } // original untouched`;
}
