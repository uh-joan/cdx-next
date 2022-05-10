import * as Highcharts from 'highcharts';

export const CDX_FONT_FAMILY = '"Source Sans Pro", sans-serif';

// CDX Material primary color theme (lightest to darkest)
export const CDX_MATERIAL_THEME_COLORS: string[] = [
  '#eee7f8',
  '#d2c4ed',
  '#b49de2',
  '#9675d7',
  '#7f56ce',
  '#6738c5',
  '#5e33bf',
  '#4f2bb6',
  '#4125af',
  '#2818a2',
];

export const CDX_BRAND_PRIMARY_COLORS: string[] = [
  '#5e33bf',
  '#16ab03',
  '#cf005b',
  '#5693f5',
  '#ff4e3e',
  '#9c27b0',
  '#cddc39',
  '#00bcd4',
  '#304ffe',
  '#8bc34a',
];

export const CDX_BRAND_PRIMARY_HOVER_COLORS: string[] = [
  '#85a0e2',
  '#8ad581',
  '#e77fad',
  '#aac9fa',
  '#ffa69e',
  '#cd93d7',
  '#e1ea87',
  '#7fdeea',
  '#97a7ff',
  '#c5e1a4',
];

export const CDX_BRAND_SECONDARY_COLORS: string[] = [
  '#ff9800',
  '#00c853',
  '#0090a8',
  '#e91e63',
  '#ffc107',
  '#6200ea',
  '#001750',
  '#0091ea',
  '#ff5722',
  '#880e4f',
];

export const CDX_BRAND_SECONDARY_HOVER_COLORS: string[] = [
  '#ffc673',
  '#80e4a9',
  '#80c8d4',
  '#f48fb1',
  '#ffda6b',
  '#b180f5',
  '#808ba8',
  '#80c8f5',
  '#ff9a7a',
  '#c487a7',
];

export const CDX_BRAND_TERTIARY_COLORS: string[] = [
  '#00bfa5',
  '#607d8b',
  '#3f51b5',
  '#03a9f4',
  '#aeea00',
  '#ffab00',
  '#aa00ff',
  '#ff6d00',
  '#dd2c00',
  '#ffd600',
];

export const CDX_BRAND_TERTIARY_HOVER_COLORS: string[] = [
  '#7eded1',
  '#aebdc4',
  '#9ea7d9',
  '#80d3f9',
  '#d6f47e',
  '#ffcd67',
  '#d47eff',
  '#ffb57e',
  '#ee947e',
  '#ffe873',
];

export const HIGHCHARTS_CDX_THEME: Highcharts.Options = {
  chart: {
    borderColor: CDX_MATERIAL_THEME_COLORS[4],
    className: 'cdx-highcharts-container',
    style: {
      fontFamily: CDX_FONT_FAMILY,
    },
  },

  // When all colors are used, colors get recycled from the start
  colors: CDX_BRAND_PRIMARY_COLORS,

  credits: {
    // Disable the highcharts link
    enabled: false,
  },

  legend: {
    itemStyle: {
      font: '9pt ' + CDX_FONT_FAMILY,
      color: 'black',
    },
    itemHoverStyle: {
      color: 'gray',
    },
  },
};

export const HIGHCHARTS_CDX_SECONDARY_THEME: Highcharts.Options = {
  ...HIGHCHARTS_CDX_THEME,

  colors: CDX_BRAND_SECONDARY_COLORS,
};

export const HIGHCHARTS_CDX_TERTIARY_THEME: Highcharts.Options = {
  ...HIGHCHARTS_CDX_THEME,

  colors: CDX_BRAND_TERTIARY_COLORS,
};
