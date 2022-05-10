import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsAccessibilityModule from 'highcharts/modules/accessibility';
import { HighchartsChartModule } from 'highcharts-angular';

import { HighchartsDemoComponent } from './highcharts-demo.component';
import { HIGHCHARTS_CDX_THEME } from './highcharts-demo.config';

// Initialize accessibility module
HighchartsAccessibilityModule(Highcharts);

@NgModule({
  imports: [CommonModule, HighchartsChartModule],
  declarations: [HighchartsDemoComponent],
  exports: [HighchartsDemoComponent],
})
export class HighchartsDemoModule {
  constructor() {
    // Apply the CDX theme globally
    Highcharts.setOptions(HIGHCHARTS_CDX_THEME);
  }
}
