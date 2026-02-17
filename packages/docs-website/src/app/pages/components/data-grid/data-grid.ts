import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-data-grid',

  templateUrl: './data-grid.html',
  styleUrls: ['./data-grid.scss'],
  imports: [Page, ExampleViewer, MatDividerModule, ExternalLink, InternalLink],
})
export class DataGrid {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
