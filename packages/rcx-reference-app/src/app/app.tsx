import { CdxFooter, CdxHeader } from '@cdx/rcx-branding';
import { clarivateTheme } from '@cdx/theme-react-mui';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  CssBaseline,
  IconButton,
  ThemeProvider,
  Typography,
} from '@mui/material';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['App']}>
      <ThemeProvider theme={clarivateTheme}>
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
          productLogo={
            <img
              src="https://clarivate.com/code/wp-content/themes/clarivate/src/img/logo.svg?v=2.4.32"
              alt=""
            />
          }
          productName={<a href="#">My Product Name</a>}
        ></CdxHeader>

        <div style={{ margin: '10rem 0' }}>
          <Typography variant="h1" gutterBottom>
            lorum ipsum text or something like that
          </Typography>
        </div>
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
  );
}

export default App;
