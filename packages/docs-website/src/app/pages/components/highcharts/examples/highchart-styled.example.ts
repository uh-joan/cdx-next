import { Component, ViewEncapsulation } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <highcharts-chart
        class="highcharts-styled-container"
        [options]="chartOptionsStyled"
    ></highcharts-chart>
</div>`;

const styleCode = `
@import 'highcharts/css/highcharts.css';
@use '@hlx/theme-highcharts' as highcharts;

.highcharts-styled-container {
  @include highcharts.hlx-highcharts-styled-mode-theme;
}

.story {
    padding: 1rem;
    display: flex;
    justify-content: center;

    highcharts-chart {
        width: 940px;
        height: 400px;
        display: block
    }
}`;

@Component({
  template: htmlCode,
  imports: [HighchartsChartComponent],
  styles: [styleCode],
  encapsulation: ViewEncapsulation.None,
})
class SampleComponent {
  chartOptionsStyled: Highcharts.Options = {
    chart: {
      type: 'column',
      className: 'highcharts-styled-container',
      styledMode: true,
    },
    title: {
      text: 'Monthly Average Rainfall',
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        type: 'column',
        name: 'Tokyo',
        data: [
          49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
      {
        type: 'column',
        name: 'New York',
        data: [
          83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
          92.3,
        ],
      },
      {
        type: 'column',
        name: 'London',
        data: [
          48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
          51.2,
        ],
      },
      {
        type: 'column',
        name: 'Berlin',
        data: [
          42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
          51.1,
        ],
      },
    ],
  };
}

export const HighchartStyledComponent: InputViewerComponent = {
  exampleName: 'Highchart Styled',
  dynamicComponent: SampleComponent,
  height: 45,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HIGHCHARTS_HLX_THEME } from '@hlx/theme-highcharts';


@Component({
    template: htmlCode,
    imports: [
        HighchartsChartComponent
    ],
    styles: [styleCode],
    providers: [providePartialHighcharts({})]
})
class SampleComponent {
    constructor() {
        Highcharts.setOptions(HIGHCHARTS_HLX_THEME);
    }
    chartOptionsThemed: Highcharts.Options = {
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016',
        },

        subtitle: {
            text: 'Source: thesolarfoundation.com',
        },

        yAxis: {
            title: {
                text: 'Number of Employees',
            },
        },
        xAxis: {
            tickInterval: 1,
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
                pointStart: 2010,
            },
        },
        series: [
        {
            name: 'Installation',
            type: 'line',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            name: 'Manufacturing',
            type: 'line',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
            name: 'Sales & Distribution',
            type: 'line',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
            name: 'Project Development',
            type: 'line',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
            name: 'Other',
            type: 'line',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
        ],
    };
}`,
};
