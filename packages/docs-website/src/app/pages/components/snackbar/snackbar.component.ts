import { Component, HostBinding } from '@angular/core';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

import * as samples from './examples';

@Component({
  selector: 'app-snackbar',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
