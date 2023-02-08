import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const RegisterBox = () => {
  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%',
      }}
    >
      <Container maxWidth="sm">
        <NavLink to="/">
          <Button startIcon={<ArrowBackIcon fontSize="small" />}>
            Dashboard
          </Button>
        </NavLink>

        <Paper>
          <form
            style={{
              padding: 30,
              margin: 30,
            }}
          >
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="First Name"
              margin="normal"
              name="firstName"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              name="lastName"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1,
              }}
            >
              <Checkbox name="policy" />
              <Typography color="textSecondary" variant="body2">
                I have read the{' '}
                <Link color="primary" underline="always" variant="subtitle2">
                  Terms and Conditions
                </Link>
              </Typography>
            </Box>

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account? <NavLink to="/login">Sign In</NavLink>
            </Typography>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};
