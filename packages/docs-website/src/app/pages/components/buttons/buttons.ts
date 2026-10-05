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
  ButtonsAnchorComponent,
  ButtonsDisabledInteractiveComponent,
  ButtonsElevatedComponent,
  ButtonsExtendedFabComponent,
  ButtonsFabComponent,
  ButtonsFilledComponent,
  ButtonsIconComponent,
  ButtonsLargeSizeComponent,
  ButtonsMiniFabComponent,
  ButtonsOutlinedComponent,
  ButtonsProgressComponent,
  ButtonsSmallSizeComponent,
  ButtonsTextComponent,
  ButtonsTonalComponent,
  ButtonsXSmallSizeComponent,
  ButtonsXXSmallSizeComponent,
} from './examples';

@Component({
  selector: 'cdx-buttons',
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
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
export class Buttons {
  // Ordered by appearance, then shape, then state, then density.
  protected readonly sampleList = [
    ButtonsTextComponent,
    ButtonsFilledComponent,
    ButtonsOutlinedComponent,
    ButtonsElevatedComponent,
    ButtonsTonalComponent,
    ButtonsIconComponent,
    ButtonsFabComponent,
    ButtonsMiniFabComponent,
    ButtonsExtendedFabComponent,
    ButtonsAnchorComponent,
    ButtonsProgressComponent,
    ButtonsDisabledInteractiveComponent,
    ButtonsXXSmallSizeComponent,
    ButtonsXSmallSizeComponent,
    ButtonsSmallSizeComponent,
    ButtonsLargeSizeComponent,
  ];
}
