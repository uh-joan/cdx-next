import { storiesOf } from '@storybook/react';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import ThemeSwitchApp from '../../../rcx-demo-app/src/app/app';

storiesOf('Theme Switch', module).add('sample theme switch app', () => (
  <ThemeSwitchApp />
));
