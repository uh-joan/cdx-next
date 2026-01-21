import { Component, HostBinding } from '@angular/core';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { PageComponent } from 'src/app/core/page/page.component';

import * as samples from './examples';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class FormFieldComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
