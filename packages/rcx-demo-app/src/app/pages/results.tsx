import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, Divider, Grid, Link, Paper, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Results = () => {
  const data = {
    chart: {
      type: 'bar',
      width: 250,
      height: 300,
      backgroundColor: null,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Background', 'Basis', 'Support', 'Differ', 'Discuss'],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    credits: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false,
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        data: [3, 2, 0, 3, 1],
      },
    ],
  };

  return (
    <Box
      component="main"
      sx={{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        flexGrow: 1,
        py: 8,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xl={9} lg={9} sm={9} xs={9}>
          <Paper
            sx={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '850px',
              alignItems: 'start',
            }}
          >
            <Typography variant="h5">
              Hispatology of Alchool-Related Liver Diseases
            </Typography>
            <Typography sx={{ paddingTop: '1rem', paddingBottom: '.5rem' }}>
              <strong>By: </strong>
              <Link color="primary">Roth, NC</Link>
              (Roth, Niztan C.) <Link color="primary">[1]</Link>;
              <Link color="primary"> Quin, J</Link> (Quin Jia){' '}
              <Link color="primary"> [2] [3]</Link>
            </Typography>
            <Typography color="primary">
              <strong>CLINICS IN LIVER DISEASE 23</strong>
            </Typography>
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong>Volume: </strong> 23
              <strong> Issue: </strong> 1<strong> Page: </strong> 11+
            </Typography>
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong>Published: </strong> FEDB2019
            </Typography>
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong>Indexed: </strong>2019-01-10
            </Typography>
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong>Document type: </strong> Article
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ paddingTop: '1rem', fontWeight: 'bold' }}
            >
              Abstract
            </Typography>
            <Typography
              variant="body1"
              sx={{
                paddingTop: '.5rem',
                textAlign: 'left',
              }}
            >
              Excessive alchool consumption can lead to a spectrum of liver
              hispatology including Lorem ipsum dolor sit amet, consectetur
              adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
              ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Duis aute irure reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ paddingTop: '1rem', fontWeight: 'bold' }}
            >
              Keywords
            </Typography>
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong> Author Keywords: </strong>
              <Link color="primary">
                Alchhol related liver disease, alchool epatitis, Alchoolis
                steophatis, Alchoolic foames degeneration, Alchooolic fatty
                liver, Liver byopsy
              </Link>
            </Typography>
            <Typography
              variant="caption"
              sx={{ paddingTop: '1rem', textAlign: 'left' }}
            >
              <strong>Keywords plus: </strong>
              <Link color="primary">
                FATTY LIVER, DOAMY DEGENERATION, SAMPLING VARIABILITY,
                CLINICAL-TRIALS, SCORING SYSTEM, DIAGNOSIS, BIOPSY,
                STEATOEPHATITIS, PROGNOSIS, FAILURE
              </Link>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ paddingTop: '1rem', fontWeight: 'bold' }}
            >
              Author Information
            </Typography>
            <Typography
              variant="caption"
              sx={{ paddingTop: '1rem', textAlign: 'left' }}
            >
              <strong>Corresponding address:</strong> Roth, Nitzan C.
              (corresponding author)
              <Typography
                variant="caption"
                sx={{
                  paddingLeft: '2rem',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                Sandra Atlass bar Ctr Liver dis, Dept Med Northwell Hith 400,
                Community Dr, Mannhaset, NY 11030 USA
              </Typography>
            </Typography>
            <Typography
              variant="caption"
              sx={{ paddingTop: '1rem', fontWeight: 'bold', textAlign: 'left' }}
            >
              Addresses
              <Typography
                variant="caption"
                sx={{
                  paddingLeft: '2rem',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                1 Sandra Atlass bar Ctr Liver dis, Dept Med Northwell Hith 400,
                Community Dr, Mannhaset, NY 11030 USA
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  paddingLeft: '2rem',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                2 Dept Vetetan Affairs New York Arbour Healthcare S, Depth
                Pathol, 800 Poly PL Brooklyn, NY 11209 USA
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  paddingLeft: '2rem',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                3 188 East 93rd St, Apartment 3K, New Yor, NY 10128 USA
              </Typography>
            </Typography>
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong>Email Addresses: </strong> <Link>Nroth2@gmail.com</Link>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ paddingTop: '1rem', fontWeight: 'bold' }}
            >
              Categories/Classifications
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={3} xl={3} xs={3}>
          <Paper
            sx={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              height: '850px',
            }}
          >
            <Typography variant="subtitle2">
              <strong>Citation Network</strong>
            </Typography>
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong>In web of science Core Collection</strong>
            </Typography>
            <Typography
              color="primary"
              variant="subtitle2"
              sx={{ paddingTop: '1rem' }}
            >
              <strong>10</strong>
            </Typography>
            <Typography variant="caption">Citations</Typography>
            <Typography
              variant="caption"
              color="primary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '1rem',
              }}
            >
              <NotificationsIcon color="primary" />
              <strong>Create citation alert</strong>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'column',
                width: '100%',
                paddingTop: '2rem',
              }}
            >
              <Box sx={{ maxWidth: '50%', textAlign: 'left' }}>
                <Typography color="primary">
                  <strong>10</strong>
                </Typography>
                <Typography variant="caption">
                  Times cited in all databases
                </Typography>
              </Box>
              <Box sx={{ maxWidth: '50%', textAlign: 'left' }}>
                <Typography color="primary">
                  <strong>57</strong>
                </Typography>
                <Typography variant="caption">Cited references</Typography>
                <Typography variant="caption" color="primary">
                  <div>
                    <strong>View related records</strong>
                  </div>
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="caption"
              color="primary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '1rem',
                paddingBottom: '1rem',
              }}
            >
              <AddIcon color="primary" sx={{ paddingRight: '.5rem' }} />
              <strong>See more times cited</strong>
            </Typography>
            <Divider sx={{ width: '100%' }} />
            <Typography variant="caption" sx={{ paddingTop: '1rem' }}>
              <strong>Citing items by classification</strong>
            </Typography>
            <Typography
              variant="caption"
              sx={{ paddingTop: '.5rem', textAlign: 'left' }}
            >
              Breakdown of how this article has been mentioned, based on
              available citation context data and snippets from 3 citing item(s)
            </Typography>
            <HighchartsReact highcharts={Highcharts} options={data} />
            <Divider sx={{ paddingTop: '1rem', width: '100%' }} />
            <Typography sx={{ paddingTop: '.5rem' }}>
              You may also like...
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Results;
