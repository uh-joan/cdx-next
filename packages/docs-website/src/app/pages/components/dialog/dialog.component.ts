import { Component, HostBinding } from '@angular/core';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [PagesCommonModule],
})
export class DialogComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
