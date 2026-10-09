import { HIGHCHARTS_HLX_THEME } from '@hlx/theme-highcharts';
import {
  applicationConfig,
  type Meta,
  moduleMetadata,
  type StoryObj,
} from '@storybook/angular';
import Highcharts from 'highcharts';
import {
  HighchartsChartComponent,
  provideHighcharts,
} from 'highcharts-angular';

type ChartType = 'line' | 'spline' | 'area' | 'column' | 'bar' | 'pie';

type HighchartsArgs = {
  type: ChartType;
  hlxTheme: boolean;
  title: string;
  subtitle: string;
  seriesCount: number;
  stacking: 'none' | 'normal' | 'percent';
  dataLabels: boolean;
  legend: 'bottom' | 'right' | 'hidden';
};

const CATEGORIES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const SERIES: { name: string; data: number[] }[] = [
  { name: 'Tokyo', data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0] },
  { name: 'New York', data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5] },
  { name: 'London', data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3] },
  { name: 'Berlin', data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5] },
  { name: 'Paris', data: [36.1, 41.2, 52.3, 61.8, 70.4, 66.0] },
  { name: 'Madrid', data: [30.2, 28.5, 35.1, 44.7, 39.9, 21.3] },
];

function chartOptions(args: HighchartsArgs): Highcharts.Options {
  const series: Highcharts.SeriesOptionsType[] =
    args.type === 'pie'
      ? [
          {
            type: 'pie',
            name: 'Rainfall',
            data: SERIES.slice(0, Math.max(args.seriesCount, 2)).map((s) => ({
              name: s.name,
              y: s.data.reduce((a, b) => a + b, 0),
            })),
          },
        ]
      : (SERIES.slice(0, args.seriesCount).map((s) => ({
          type: args.type,
          name: s.name,
          data: s.data,
        })) as Highcharts.SeriesOptionsType[]);

  const options: Highcharts.Options = {
    title: { text: args.title },
    subtitle: { text: args.subtitle },
    xAxis: { categories: CATEGORIES },
    yAxis: { title: { text: 'Rainfall (mm)' } },
    legend:
      args.legend === 'hidden'
        ? { enabled: false }
        : args.legend === 'right'
          ? {
              enabled: true,
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
            }
          : { enabled: true },
    plotOptions: {
      series: {
        stacking: args.stacking === 'none' ? undefined : args.stacking,
        dataLabels: { enabled: args.dataLabels },
      },
    },
    series,
  };

  // Merge per chart (instead of the global Highcharts.setOptions used in
  // apps) so the theme can be toggled from the controls.
  return args.hlxTheme
    ? Highcharts.merge(HIGHCHARTS_HLX_THEME, options)
    : options;
}

const meta: Meta<HighchartsArgs> = {
  title: 'Components/Highcharts',
  decorators: [
    applicationConfig({
      providers: [
        provideHighcharts({
          modules: () => [import('highcharts/esm/modules/accessibility.js')],
        }),
      ],
    }),
    moduleMetadata({ imports: [HighchartsChartComponent] }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<highcharts-chart>` from `highcharts-angular` with the Helix theme `HIGHCHARTS_HLX_THEME` from `@hlx/theme-highcharts`. In an app, apply the theme once with `Highcharts.setOptions(HIGHCHARTS_HLX_THEME)`; here it is merged per chart so it can be toggled.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'spline', 'area', 'column', 'bar', 'pie'],
      description: 'Series type (`chart.type` / `series[].type`)',
    },
    hlxTheme: {
      control: 'boolean',
      description: 'Apply `HIGHCHARTS_HLX_THEME` (colors, typography, axes)',
    },
    title: { control: 'text', description: '`title.text`' },
    subtitle: { control: 'text', description: '`subtitle.text`' },
    seriesCount: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      description: 'Number of series (slices for pie)',
    },
    stacking: {
      control: 'inline-radio',
      options: ['none', 'normal', 'percent'],
      description: '`plotOptions.series.stacking` (not applicable to pie)',
    },
    dataLabels: {
      control: 'boolean',
      description: '`plotOptions.series.dataLabels.enabled`',
    },
    legend: {
      control: 'inline-radio',
      options: ['bottom', 'right', 'hidden'],
      description: 'Legend position, or hide it',
    },
  },
  args: {
    type: 'column',
    hlxTheme: true,
    title: 'Monthly average rainfall',
    subtitle: 'Source: WorldClimate.com',
    seriesCount: 4,
    stacking: 'none',
    dataLabels: false,
    legend: 'bottom',
  },
  render: (args) => ({
    props: { options: chartOptions(args) },
    template: `
      <div style="padding: 16px">
        <highcharts-chart
          [options]="options"
          [oneToOne]="true"
          style="display: block; width: 100%; height: 400px"
        ></highcharts-chart>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<HighchartsArgs>;

export const Playground: Story = {};

export const Line: Story = {
  args: { type: 'line', legend: 'right' },
};

export const StackedColumn: Story = {
  args: { type: 'column', stacking: 'normal' },
};

export const Pie: Story = {
  args: { type: 'pie', seriesCount: 5, dataLabels: true },
};

export const WithoutHelixTheme: Story = {
  args: { hlxTheme: false },
};
