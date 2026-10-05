import '../src/styles.scss';

import { provideTranslateService } from '@ngx-translate/core';
import {
  applicationConfig,
  type Decorator,
  type Preview,
} from '@storybook/angular';

const DENSITIES = ['0', '-1', '-2', '-3', '-4'];

const THEME_CLASSES = ['helix-theme-material', 'mat-typography'];

/**
 * Applies the Helix theme and the selected density to every story. The
 * classes go on `<body>` rather than a wrapper so CDK overlays (dialog, menu,
 * select, tooltip, snackbar, datepicker), which render in a container
 * appended to `<body>`, are themed and follow the density toolbar too.
 */
const withHelixTheme: Decorator = (storyFn, context) => {
  const density: string = context.globals['density'] ?? '0';
  const { classList } = document.body;

  classList.add(...THEME_CLASSES);
  classList.remove(
    ...Array.from(classList).filter((c) => c.startsWith('hlx-density-')),
  );
  classList.add(`hlx-density-${density.replace('-', 'minus-')}`);

  return storyFn();
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
