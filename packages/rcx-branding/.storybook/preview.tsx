import { clarivateTheme } from '@cdx/theme-react-mui/src/lib/theme-react-mui';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={clarivateTheme}>
        <CssBaseline enableColorScheme />
        <Story />
      </ThemeProvider>
    ),
  ],
};

// export all decorators that should be globally applied in an array
export default preview;
