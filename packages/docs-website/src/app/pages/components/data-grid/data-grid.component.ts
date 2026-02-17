import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { InternalLinkComponent } from '../../../components/internal-link/internal-link.component';
import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-data-grid',

  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  imports: [
    PageComponent,
    ExampleViewerComponent,
    MatDividerModule,
    ExternalLinkComponent,
    InternalLinkComponent,
  ],
})
export class DataGridComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
