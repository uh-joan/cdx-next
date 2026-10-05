import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../components/internal-link/internal-link';
import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../components/usage-guideline/usage-guideline';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import {
  ButtonsAiFabComponent,
  ButtonsExtendedFabComponent,
  ButtonsFabComponent,
  ButtonsMiniFabComponent,
} from './examples';

@Component({
  selector: 'cdx-fab',
  templateUrl: './fab.html',
  styleUrl: './fab.scss',
  host: { class: 'cdx-section' },
  imports: [
    Page,
    ExampleViewer,
    MatDivider,
    InternalLink,
    UsageGuideline,
    UsageGuidelines,
  ],
})
export class Fab {
  // FAB, mini FAB, extended FAB, then the AI color across all three.
  protected readonly sampleList = [
    ButtonsFabComponent,
    ButtonsMiniFabComponent,
    ButtonsExtendedFabComponent,
    ButtonsAiFabComponent,
  ];
}
