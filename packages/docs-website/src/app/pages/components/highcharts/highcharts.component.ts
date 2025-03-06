import { Component, HostBinding } from '@angular/core';

import * as samples from './examples';

@Component({
  selector: 'app-highcharts',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss'],
})
export class HighchartsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import * as Highcharts from 'highcharts';
  import { HighchartsChartModule } from 'highcharts-angular';
  import { HIGHCHARTS_CDX_THEME } from '@cdx/theme-highcharts';
  
  @NgModule({
    declarations: [MyHighchartsComponent],
    imports: [HighchartsChartModule],
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
