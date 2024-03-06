import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HIGHCHARTS_CDX_THEME } from '@cdx/theme-highcharts';
import { TranslateModule } from '@ngx-translate/core';
import * as Highcharts from 'highcharts/highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { DataBoxComponent } from '../../components/data-box/data-box.component';
import { devices, enrollmentOptions, options } from './dashboard.data';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DataBoxComponent,
    HighchartsChartModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    TranslateModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  Highcharts = Highcharts;
  devices = devices;
  options = options;
  enrollmentOptions = enrollmentOptions;

  constructor() {
    Highcharts.setOptions(HIGHCHARTS_CDX_THEME);
  }
}
