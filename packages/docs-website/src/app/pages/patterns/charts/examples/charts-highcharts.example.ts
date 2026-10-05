import { Component, ViewEncapsulation } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="chart-card">
  <highcharts-chart class="hlx-chart" [options]="options" [Highcharts]="Highcharts" />
</div>`;

// styledMode + the Helix Highcharts theme → colour, font and axes come from the
// design system. No `colors:` in the options; the series palette is the theme's.
const styleCode = `@import 'highcharts/css/highcharts.css';
@use '@cdx/theme-highcharts' as highcharts;

.hlx-chart {
  @include highcharts.hlx-highcharts-styled-mode-theme;
}

.chart-card {
  padding: 1rem;
}

.hlx-chart {
  display: block;
  width: 100%;
  height: 360px;
}`;

@Component({
  template: htmlCode,
  imports: [HighchartsChartComponent],
  styles: [styleCode],
  encapsulation: ViewEncapsulation.None,
})
class SampleComponent {
  readonly Highcharts = Highcharts;

  readonly options: Highcharts.Options = {
    chart: { type: 'column', styledMode: true },
    title: { text: 'Regulatory submissions by quarter' },
    subtitle: { text: 'Example data' },
    xAxis: {
      title: { text: 'Quarter' },
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    },
    yAxis: { title: { text: 'Submissions' } },
    accessibility: {
      enabled: true,
      description:
        'Regulatory submissions per quarter for three therapeutic areas.',
    },
    series: [
      { type: 'column', name: 'Oncology', data: [12, 15, 9, 18] },
      { type: 'column', name: 'Immunology', data: [8, 11, 13, 10] },
      { type: 'column', name: 'Neurology', data: [5, 7, 6, 9] },
    ],
    credits: { enabled: false },
  };
}

export const ChartsHighcharts: InputViewerComponent = {
  exampleName: 'Themed Highcharts column chart',
  dynamicComponent: SampleComponent,
  height: 46,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, ViewEncapsulation } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

// styledMode + hlx-highcharts-styled-mode-theme: the series palette, font and
// axes come from @cdx/theme-highcharts — no hardcoded colours in the options.
@Component({
  selector: 'app-submissions-chart',
  imports: [HighchartsChartComponent],
  encapsulation: ViewEncapsulation.None, // styled-mode CSS must reach the chart
  template: \`<highcharts-chart class="hlx-chart" [options]="options" [Highcharts]="Highcharts" />\`,
  styleUrl: './submissions-chart.scss', // @include highcharts.hlx-highcharts-styled-mode-theme
})
export class SubmissionsChart {
  readonly Highcharts = Highcharts;
  readonly options: Highcharts.Options = {
    chart: { type: 'column', styledMode: true },
    title: { text: 'Regulatory submissions by quarter' },
    xAxis: { title: { text: 'Quarter' }, categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    yAxis: { title: { text: 'Submissions' } },
    accessibility: { enabled: true },
    series: [
      { type: 'column', name: 'Oncology', data: [12, 15, 9, 18] },
      { type: 'column', name: 'Immunology', data: [8, 11, 13, 10] },
    ],
  };
}`,
};
