import { Typography } from '@mui/material';
import { useContext } from 'react';

import { AnalyticsContext } from './app';

function Home() {
  const analyticsService = useContext(AnalyticsContext);

  analyticsService.trackPageView({
    title: 'home',
  });

  return (
    <div style={{ margin: '10rem 0' }}>
      <Typography variant="h1" gutterBottom>
        lorum ipsum text or something like that
      </Typography>
    </div>
  );
}

export default Home;
