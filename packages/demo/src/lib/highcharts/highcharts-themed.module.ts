import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HIGHCHARTS_CDX_THEME } from '@cdx/theme-highcharts';
import * as Highcharts from 'highcharts';
import HighchartsAccessibilityModule from 'highcharts/modules/accessibility';
import { HighchartsChartModule } from 'highcharts-angular';

import { HighchartsThemedComponent } from './highcharts-themed.component';

HighchartsAccessibilityModule(Highcharts);

@NgModule({
  imports: [CommonModule, HighchartsChartModule],
  declarations: [HighchartsThemedComponent],
  exports: [HighchartsThemedComponent],
})
export class HighchartsThemedModule {
  constructor() {
    // Apply the CDX theme globally
    Highcharts.setOptions(HIGHCHARTS_CDX_THEME);
  }
}
