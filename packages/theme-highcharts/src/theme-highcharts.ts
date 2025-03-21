export const HLX_FONT_FAMILY = '"Source Sans 3", sans-serif';

export const HLX_HIGHCHARTS_THEME_COLORS: string[] = [
  '#B175E1',
  '#18A381',
  '#3595F0',
  '#ED5564',
  '#5E33BF',
  '#003F51',
  '#A39300',
  '#EC40DB',
  '#C8582A',
  '#1E48DD',
  '#558B2F',
  '#282C75',
  '#EC407A',
  '#0277BD',
  '#165550',
  '#9F7D1C',
  '#AD1457',
  '#00897B',
  '#1565C0',
  '#D81B60',
  '#6B9E00',
  '#0378FF',
  '#8C1D66',
  '#EF6C00',
  '#933F1D',
  '#8E9926',
  '#00A0B5',
  '#E53935',
  '#5C6BC0',
  '#C28B00',
  '#00695C',
  '#F4511E',
  '#8E24AA',
  '#43A047',
  '#C2156E',
  '#B67325',
  '#AB47BC',
  '#2E7D32',
  '#1B809F',
  '#C13800',
];

// @ts-ignore
export const HIGHCHARTS_HLX_THEME: Highcharts.Options = {
  chart: {
    className: 'hlx-highcharts-container',
    style: {
      fontFamily: HLX_FONT_FAMILY,
    },
  },
  // When all colors are used, colors get recycled from the start
  colors: HLX_HIGHCHARTS_THEME_COLORS,

  legend: {
    itemStyle: {
      font: '9pt ' + HLX_FONT_FAMILY,
      color: 'black',
    },
    itemHoverStyle: {
      color: 'gray',
    },
  },
};
