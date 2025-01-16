import { addons } from '@storybook/addons';

// eslint-disable-next-line @nx/enforce-module-boundaries
import clarivateTheme from '../../../.storybook/ClarivateTheme';

addons.setConfig({
  theme: clarivateTheme,
});
