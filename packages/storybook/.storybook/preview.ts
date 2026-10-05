import '../src/styles.scss';

import { provideTranslateService } from '@ngx-translate/core';
import {
  applicationConfig,
  type Decorator,
  type Preview,
} from '@storybook/angular';

const DENSITIES = ['0', '-1', '-2', '-3', '-4'];

/** Applies the Helix theme and the selected density to every story. */
const withHelixTheme: Decorator = (storyFn, context) => {
  const density = context.globals['density'] ?? '0';
  const story = storyFn();

  return {
    ...story,
    template: `<div class="helix-theme-material mat-typography hlx-density-${density.replace(
      '-',
      'minus-',
    )}">${story.template ?? ''}</div>`,
  };
};

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideTranslateService({ fallbackLang: 'en' })],
    }),
    withHelixTheme,
  ],
  globalTypes: {
    density: {
      description: 'Helix density (Foundations › Density)',
      toolbar: {
        title: 'Density',
        icon: 'component',
        items: DENSITIES.map((value) => ({ value, title: `Density ${value}` })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    density: '0',
  },
  parameters: {
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i },
    },
    a11y: {
      // Report violations in the a11y panel without failing stories yet.
      test: 'todo',
    },
  },
};

export default preview;
