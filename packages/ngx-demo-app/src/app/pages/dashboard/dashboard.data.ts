interface Device {
  title: string;
  value: number;
  color: string;
  icon: string;
}

export const devices: Device[] = [
  {
    title: 'Desktop',
    value: 63,
    color: 'primary',
    icon: 'laptop_mac',
  },
  {
    title: 'Tablet',
    value: 15,
    color: 'accent',
    icon: 'tablet_mac',
  },
  {
    title: 'Mobile',
    value: 22,
    color: 'warn',
    icon: 'smartphone',
  },
];

export const options = {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
  },
  title: {
    text: '',
  },
  series: [
    {
      data: [
        {
          y: 63,
          name: 'Desktop',
        },
        {
          y: 15,
          name: 'Tablet',
        },
        {
          y: 22,
          name: 'Mobile',
        },
      ],
    },
  ],
} as Highcharts.Options;

export const enrollmentOptions = {
  chart: {
    type: 'line', // Changed to line chart
    backgroundColor: 'transparent',
  },
  title: {
    text: '',
  },
  series: [
    {
      name: 'Economic Subjects', // Specific subject names
      data: [800, 700, 800, 1200, 1100, 1500, 1800],
    },
    {
      name: 'Humanistic Subjects',
      data: [900, 800, 900, 600, 900, 1200, 700],
    },
    {
      name: 'Scientific Subjects',
      data: [900, 1100, 1300, 900, 1100, 900, 1200],
    },
  ],
  xAxis: {
    categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  },
  yAxis: {
    title: {
      text: 'Enrollments',
    },
  },
} as Highcharts.Options;
