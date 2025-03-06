import { Component, HostBinding } from '@angular/core';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

import * as samples from './examples';

@Component({
  selector: 'app-dialog',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
