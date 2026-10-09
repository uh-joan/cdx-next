import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-charts',
  templateUrl: './charts.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight, InternalLink],
})
export class Charts {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  themeSnippet = `@import 'highcharts/css/highcharts.css';
@use '@hlx/theme-highcharts' as highcharts;

.my-chart {
  @include highcharts.hlx-highcharts-styled-mode-theme;
}`;

  optionsSnippet = `chartOptions: Highcharts.Options = {
  chart: { type: 'column', styledMode: true },
  // no \`colors:\` here — the series palette comes from the theme
  title: { text: 'Regulatory activity by quarter' },
  xAxis: { title: { text: 'Quarter' }, categories: [...] },
  yAxis: { title: { text: 'Submissions' } },
  accessibility: { enabled: true },
};

// D3 / custom SVG — import the same palette:
import { HLX_HIGHCHARTS_THEME_COLORS } from '@hlx/theme-highcharts';`;
}
