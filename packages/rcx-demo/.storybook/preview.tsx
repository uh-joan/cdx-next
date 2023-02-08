import { clarivateTheme } from '@cdx/theme-react-mui';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={clarivateTheme}>
      <CssBaseline enableColorScheme />
      <MemoryRouter>
        <StoryFn />
      </MemoryRouter>
    </ThemeProvider>
  );
};
// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
