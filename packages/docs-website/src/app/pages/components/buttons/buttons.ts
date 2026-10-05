import { Component } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import {
  ButtonsAiComponent,
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
  imports: [Page, ExampleViewer],
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
    ButtonsAiComponent,
    ButtonsAnchorComponent,
    ButtonsProgressComponent,
    ButtonsDisabledInteractiveComponent,
    ButtonsXXSmallSizeComponent,
    ButtonsXSmallSizeComponent,
    ButtonsSmallSizeComponent,
    ButtonsLargeSizeComponent,
  ];
}
