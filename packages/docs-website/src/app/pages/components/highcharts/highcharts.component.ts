import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss'],
  imports: [
    PageComponent,
    ExampleViewerComponent,
    HighlightComponent,
    MatDividerModule,
    ExternalLinkComponent,
  ],
})
export class HighchartsComponent {
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
