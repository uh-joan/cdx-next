import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CdxHeader } from './rcx-header';

const Story: ComponentMeta<typeof CdxHeader> = {
  component: CdxHeader,
  title: 'header',
};
export default Story;

const BasicTemplate: ComponentStory<typeof CdxHeader> = () => (
  <CdxHeader></CdxHeader>
);
export const Basic = BasicTemplate.bind({});

const LargestSizeTemplate: ComponentStory<typeof CdxHeader> = () => (
  <CdxHeader productName={<div style={{ height: '500px' }}></div>}></CdxHeader>
);
export const LargestSize = LargestSizeTemplate.bind({});

const WithGlobalIconsTemplate: ComponentStory<typeof CdxHeader> = () => (
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
  ></CdxHeader>
);
export const GlobalIconsTemplate = WithGlobalIconsTemplate.bind({});

const WithProductLogoTemplate: ComponentStory<typeof CdxHeader> = () => (
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
  >
    <div style={{ padding: '0.5rem' }}>
      <Button>Sign up</Button>
      <Button style={{ marginLeft: '0.5rem' }} variant="contained">
        Login
      </Button>
    </div>
  </CdxHeader>
);
export const WithProductLogo = WithProductLogoTemplate.bind({});

const WithProductNameAsLinkTemplate: ComponentStory<typeof CdxHeader> = () => (
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
    productName={<a href="#top">My Product Name</a>}
  >
    <div style={{ padding: '0.5rem' }}>
      <Button>Sign up</Button>
      <Button style={{ marginLeft: '0.5rem' }} variant="contained">
        Login
      </Button>
    </div>
  </CdxHeader>
);
export const WithProductNameAsLink = WithProductNameAsLinkTemplate.bind({});

const WithProductSearchTemplate: ComponentStory<typeof CdxHeader> = () => (
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
  >
    <TextField
      style={{ width: '30rem', flex: 0.75 }}
      id="standard-basic"
      variant="standard"
      InputProps={{
        endAdornment: (
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
    <div style={{ padding: '0.5rem' }}>
      <Button>Sign up</Button>
      <Button style={{ marginLeft: '0.5rem' }} variant="contained">
        Login
      </Button>
    </div>
  </CdxHeader>
);
export const WithProductSearch = WithProductSearchTemplate.bind({});
