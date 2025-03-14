import { Component, HostBinding } from '@angular/core';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  imports: [PagesCommonModule],
})
export class SnackbarComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
