import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.html',
  styleUrls: ['./highcharts.scss'],
  imports: [Page, ExampleViewer, Highlight, MatDividerModule, ExternalLink],
})
export class Highcharts {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import * as Highcharts from 'highcharts';
  import { HighchartsChartComponent } from 'highcharts-angular';
  import { HIGHCHARTS_CDX_THEME } from '@cdx/theme-highcharts';
  
  @NgModule({
    declarations: [MyHighchartsComponent],
    imports: [HighchartsChartComponent],
  })
  export class MyHighchartsModule {
    constructor() {
      // Apply the CDX theme globally
      Highcharts.setOptions(HIGHCHARTS_CDX_THEME);
    }
  }`;

  stylesText = `import Highcharts from 'highcharts';
  import HighchartsAccessibilityModule from 'highcharts/modules/accessibility';
  
  // Initialize accessibility module
  HighchartsAccessibilityModule(Highcharts);}`;

  sampleList = Object.values(samples);
}
