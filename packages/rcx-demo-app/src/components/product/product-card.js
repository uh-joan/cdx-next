import {
  Box,
  Card,
  Checkbox,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';

export const ProductCard = ({ article }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <Card sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
      <Box
        sx={{
          width: '6%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Checkbox />
        <Typography>{article.id}</Typography>
      </Box>

      <Box
        sx={{
          padding: '.5rem',
          flexGrow: 1,
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <NavLink className="nav-container__link" to="/results">
          <Typography color="primary" variant="h6">
            {article.title}
          </Typography>
        </NavLink>

        <Typography sx={{ paddingTop: '1rem', paddingBottom: '.5rem' }}>
          <Link color="primary" variant="subtitle3">
            {article.author}
          </Link>
        </Typography>
        <Typography>
          {article.releaseDate} | <Link>{article.argument}</Link> 23 (1),
          pp.11-+
        </Typography>
        <Typography
          variant="body1"
          sx={{
            paddingTop: '1rem',
            textAlign: 'left',
          }}
        >
          {article.description}
          <NavLink
            to={`/results/`}
            sx={{
              color: 'primary.main',
              fontWeight: 'bold',
              marginLeft: '0.5rem',
            }}
          >
            &nbsp;...show more
          </NavLink>
        </Typography>
      </Box>

      <Box
        sx={{
          width: '14%',
          flexDirection: 'column',
          display: 'flex',
          paddingLeft: '.5rem',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'start',
            display: 'flex',
          }}
        >
          <Typography color="primary" variant="subtitle1" sx={{ mb: 1 }}>
            {article.citations}
          </Typography>
          <Typography color="primary" variant="subtitle1" sx={{ mb: 1 }}>
            Citations
          </Typography>
          <Divider
            color="primary"
            sx={{
              width: '100%',
              backgroundColor: 'white',
            }}
          />

          <Typography
            sx={{ paddingTop: '1rem' }}
            color="primary"
            variant="subtitle1"
          >
            {article.references}
          </Typography>

          <Typography color="primary" variant="subtitle1">
            References
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: '100%',
          }}
        >
          <Divider
            color="primary"
            sx={{
              width: '100%',
              backgroundColor: 'white',
            }}
          />
          <Typography color="primary" variant="subtitle1">
            Related Records
          </Typography>
        </Box>
      </Box>
    </Card>

    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated on {new Date(article.updated).toLocaleDateString()}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <DownloadIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {article.totalDownloads} Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);
