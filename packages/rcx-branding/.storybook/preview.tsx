import { clarivateTheme } from '@cdx/theme-react-mui';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DecoratorFn } from '@storybook/react';
import React from 'react';

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={clarivateTheme}>
      <CssBaseline enableColorScheme />
      <StoryFn />
    </ThemeProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
