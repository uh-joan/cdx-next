import { Component } from '@angular/core';
import { HIGHCHARTS_HLX_THEME } from '@cdx/theme-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <highcharts-chart
        [options]="chartOptionsThemed"
    ></highcharts-chart>
</div>`;

const styleCode = `.story {
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
}

export const HighchartThemedComponent: InputViewerComponent = {
  exampleName: 'Highchart Themed',
  dynamicComponent: SampleComponent,
  height: 45,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { HighchartsChartComponent, providePartialHighcharts} from 'highcharts-angular';
// import { HIGHCHARTS_CDX_THEME } from '@cdx/theme-highcharts';


@Component({
    template: htmlCode,
    imports: [
        HighchartsChartComponent
    ],
    styles: [styleCode],
})
class SampleComponent {
    constructor() {
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
