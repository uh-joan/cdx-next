import './app.scss';

import { CdxFooter, CdxFooterLinkGroup, CdxHeader } from '@cdx/rcx-branding';
import { clarivateTheme, ThemeOptionsWithBranding } from '@cdx/theme-react-mui';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Avatar,
  Button,
  CssBaseline,
  IconButton,
  Paper,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';

import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import Account from './pages/account';
import Customers from './pages/customers';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Products from './pages/products';
import Settings from './pages/settings';
import NavBar from './sidebar/navbar';
import NestedList, { themeOptions } from './theme-switcher/theme-switcher';

const ThemeSwitchApp = () => {
  const [selectedTheme, setSelectedTheme] = useState(themeOptions[0].value);

  const handleThemeChange = (theme: Partial<ThemeOptionsWithBranding>) => {
    setSelectedTheme(theme);
  };

  const location = useLocation().pathname;
  const isCurrentPage = (path: string) => {
    return location === path ? 'current-page' : '';
  };

  return (
    <div className="App">
      <ThemeProvider theme={selectedTheme || clarivateTheme}>
        <CssBaseline enableColorScheme />
        <CdxHeader
          global={
            <>
              <IconButton color="primary">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
            </>
          }
          theme={selectedTheme}
          productLogo={
            <svg xmlns="http://www.w3.org/2000/svg" height="60" width="190">
              <image
                height="100%"
                width="100%"
                href="../assets/Clarivate.png"
              />
            </svg>
          }
        >
          <div className="cdx-header__middle">
            <NavLink className="nav-container__link" to="/">
              <Button
                className={`nav-container__button ${isCurrentPage('/')}`}
                startIcon={<UserAddIcon />}
                disableRipple
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink className="nav-container__link" to="/products">
              <Button
                className={`nav-container__button ${isCurrentPage(
                  '/products',
                )}`}
                startIcon={<ShoppingBagIcon />}
                disableRipple
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                }}
              >
                Search
              </Button>
            </NavLink>
            <NavLink className="nav-container__link" to="/dashboard">
              <Button
                className={`top-container__button ${isCurrentPage(
                  '/dashboard',
                )}`}
                startIcon={<ChartBarIcon />}
                disableRipple
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                }}
              >
                Dashboard
              </Button>
            </NavLink>
          </div>

          <Paper
            className="right-user"
            sx={{
              backgroundColor: selectedTheme?.palette?.background?.default,
            }}
          >
            <Avatar
              src={'../assets/avatars/avatar_6.png'}
              sx={{
                height: 34,
                width: 34,
              }}
            />
            demo@devias.com
          </Paper>
        </CdxHeader>

        <div className="cdx-content">
          <div className="cdx-content__navbar">
            <NavBar></NavBar>
            <Paper className="theme-switcher">
              <NestedList onThemeChange={handleThemeChange}></NestedList>
            </Paper>
          </div>

          <div className="cdx-content__page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/account" element={<Account />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>

        <CdxFooter groupCompanyLinks={true} slim={false} theme={selectedTheme}>
          <CdxFooterLinkGroup title="Developer Resources">
            <a href="https://stackoverflow.com/">Stack Overflow</a>
            <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
            <a href="https://hackertyper.net/">Hacker Typer</a>
          </CdxFooterLinkGroup>
          <CdxFooterLinkGroup title="One Link">
            <a href="https://www.pinterest.com/debbie_gould/purple-green-together/">
              Purple and Green
            </a>
          </CdxFooterLinkGroup>
          <CdxFooterLinkGroup title="Four Links">
            <a href="https://stackoverflow.com/">Stack Overflow</a>
            <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
            <a href="https://hackertyper.net/">Hacker Typer</a>
          </CdxFooterLinkGroup>
        </CdxFooter>
      </ThemeProvider>
    </div>
  );
};

export default ThemeSwitchApp;
