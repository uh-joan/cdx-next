import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import type { Meta, StoryObj } from '@storybook/react';

import { CdxHeader } from './rcx-header';

const meta: Meta<typeof CdxHeader> = {
  component: CdxHeader,
  title: 'header',
};
export default meta;
type Story = StoryObj<typeof CdxHeader>;

export const BasicTemplate: Story = {};

export const LargestSizeTemplate: Story = {
  render: () => (
    <CdxHeader
      productName={<div style={{ height: '500px' }}></div>}
    ></CdxHeader>
  ),
};

export const WithGlobalIconsTemplate: Story = {
  render: () => {
    return (
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
  },
};

export const WithProductLogoTemplate: Story = {
  render: () => {
    return (
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
  },
};

export const WithProductNameAsLinkTemplate: Story = {
  render: () => {
    return (
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
  },
};

export const WithProductSearchTemplate: Story = {
  render: () => (
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
  ),
};
