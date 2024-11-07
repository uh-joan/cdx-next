// this is a total hack from https://github.com/storybookjs/storybook/issues/15855#issuecomment-908870626
// we might also be able to use a decorator https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators, but this approach had less moving parts
// to avoid this for the "real" version, we simply need to make this an app type instead of a library

// Replace your-framework with the framework you are using (e.g., react, vue3)
import { componentWrapperDecorator, Preview } from '@storybook/angular';

const parameters: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: 'cdx-theme-clv', title: 'CDX' },
          { value: 'cdx-theme-helix', title: 'Helix' },
          { value: 'cdx-theme-avalon', title: 'Avalon' },
          { value: 'cdx-theme-innography', title: 'Innography' },
          { value: 'cdx-theme-derwent', title: 'Derwent' },
          { value: 'cdx-theme-legacy', title: 'CDX Legacy M2' },
          { value: 'cdx-theme-helix-m2', title: 'Helix Legacy M2' },
          { value: 'cdx-theme-teal', title: 'Teal Legacy M2' },
          { value: 'cdx-theme-blue', title: 'Blue  Legacy M2' },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    componentWrapperDecorator(
      (story) => `<body [class]="myTheme">${story}</body>`,
      ({ globals }) => {
        return { myTheme: globals['theme'] };
      },
    ),
  ],
};

export default parameters;
