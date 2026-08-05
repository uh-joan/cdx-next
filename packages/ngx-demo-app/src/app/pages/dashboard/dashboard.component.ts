import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { HighchartsChartComponent } from 'highcharts-angular';

import { DataBoxComponent } from '../../components/data-box/data-box.component';
import { devices, enrollmentOptions, options } from './dashboard.data';

@Component({
  imports: [
    CommonModule,
    DataBoxComponent,
    HighchartsChartComponent,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    TranslatePipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  devices = devices;
  options = options;
  enrollmentOptions = enrollmentOptions;

  constructor() {
    //Highcharts.setOptions(HIGHCHARTS_HLX_THEME);
  }
}
