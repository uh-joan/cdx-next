import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsAccessibilityModule from 'highcharts/modules/accessibility';
import { HighchartsChartModule } from 'highcharts-angular';

import { HighchartsStyledComponent } from './highcharts-styled.component';

HighchartsAccessibilityModule(Highcharts);

@NgModule({
  imports: [CommonModule, HighchartsChartModule],
  declarations: [HighchartsStyledComponent],
  exports: [HighchartsStyledComponent],
})
export class HighchartsStyledModule {}
