import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.html',
  styleUrls: ['./form-field.scss'],
  imports: [Page, ExampleViewer],
})
export class FormField {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
