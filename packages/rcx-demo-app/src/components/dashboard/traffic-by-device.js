import './traffic-by-device.scss';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import Highcharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official';

export const TrafficByDevice = () => {
  const theme = useTheme();

  const devices = [
    {
      title: 'Desktop',
      value: 63,
      icon: LaptopMacIcon,
      color: theme.palette.primary.main,
    },
    {
      title: 'Tablet',
      value: 15,
      icon: TabletIcon,
      color: theme.palette.secondary.main,
    },
    {
      title: 'Mobile',
      value: 22,
      icon: PhoneIcon,
      color: theme.palette.info.main,
    },
  ];

  const options = {
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
            color: theme.palette.primary.main,
          },
          {
            y: 15,
            name: 'Tablet',
            color: theme.palette.secondary.main,
          },
          {
            y: 22,
            name: 'Mobile',
            color: theme.palette.info.main,
          },
        ],
      },
    ],
  };

  return (
    <Card>
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 340,
            position: 'relative',
            width: '100%',
            p: 2,
          }}
        >
          <div className="pie-chart">
            <PieChart highcharts={Highcharts} options={options} />
          </div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center',
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
