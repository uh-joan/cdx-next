import { Component, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'demo-highcharts',
  templateUrl: './highcharts-demo.component.html',
  styleUrls: ['./highcharts-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HighchartsDemoComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
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
