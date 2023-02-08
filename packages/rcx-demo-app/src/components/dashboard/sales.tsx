import './sales.scss';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
} from '@mui/material';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Sales = () => {
  const theme = useTheme();

  const chartOptions: Options = {
    chart: {
      type: 'Highmaps',
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
    },
    series: [
      {
        type: 'line',
        name: 'Economic subjects',
        data: [800, 700, 800, 1200, 1100, 1500, 1800],
        color: theme.palette.primary.main,
      },
      {
        type: 'line',
        name: 'Humanistic subjects',
        data: [900, 800, 900, 600, 900, 1200, 700],
        color: theme.palette.secondary.main,
      },
      {
        type: 'line',
        name: 'Scientific subjects',
        data: [900, 1100, 1300, 900, 1100, 900, 1200],
        color: theme.palette.info.main,
      },
    ],
    xAxis: {
      categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    },
    yAxis: {
      title: {
        text: 'Inscriptions',
      },
    },
  };

  return (
    <Card>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
            Last 7 days
          </Button>
        }
        title="Latest Inscriptions"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative',
          }}
        >
          <div className="high-chart">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};
