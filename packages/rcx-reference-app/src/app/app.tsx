import { CLARIVATE_IGLU_SCHEMA, RcxAnalytics } from '@cdx/rcx-analytics';
import { CdxFooter, CdxHeader } from '@cdx/rcx-branding';
import { clarivateTheme } from '@cdx/theme-react-mui';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import { createContext, useContext } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import styles from './app.module.scss';
import Home from './home';
import Sandwitch from './sandwitch';

export const AnalyticsContext = createContext<RcxAnalytics>(
  new RcxAnalytics(
    {
      appId: 'rcxReferenceApp',
    },
    {
      schema: CLARIVATE_IGLU_SCHEMA,
      data: {
        testprop: 'test',
      },
    },
  ),
);

export function App() {
  const analyticsService = useContext(AnalyticsContext);

  function clickIcon(label: string): void {
    analyticsService.trackEvent({
      action: 'click',
      label: label,
      category: 'category',
    });
  }

  return (
    <BrowserRouter>
      <AnalyticsContext.Provider value={analyticsService}>
        <div className={styles['App']}>
          <ThemeProvider theme={clarivateTheme}>
            <CssBaseline enableColorScheme />

            <CdxHeader
              global={
                <>
                  <IconButton
                    color="primary"
                    onClick={() => clickIcon('instagram')}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => clickIcon('Linkedin')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => clickIcon('Facebook')}
                  >
                    <FacebookIcon />
                  </IconButton>
                </>
              }
              productLogo={
                <img
                  src="https://clarivate.com/code/wp-content/themes/clarivate/src/img/logo.svg?v=2.4.32"
                  alt=""
                />
              }
              productName={<a href="#">My Product Name</a>}
            >
              <Link to="/">
                <Button variant="contained">Home</Button>
              </Link>
              <Link to="/sandwitch">
                <Button variant="contained">Sandwitch</Button>
              </Link>
            </CdxHeader>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="sandwitch" element={<Sandwitch />} />
            </Routes>

            <CdxFooter>Children Content</CdxFooter>
            {/* With Group Links
          <CdxFooter groupCompanyLinks={true}>
            <CdxFooterLinkGroup title="Title">
              <a href="test">group link 1</a>
              <a href="test2">group link 2</a>
            </CdxFooterLinkGroup>
            Children Content
          </CdxFooter>
        */}
          </ThemeProvider>
        </div>
      </AnalyticsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
