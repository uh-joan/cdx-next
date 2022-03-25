import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { HeaderModule } from '../header.module';
import { HeaderGlobalUtilitiesModule } from './header-global-utilities.module';

export default {
  title: 'Header/Global Utilities',
  decorators: [
    moduleMetadata({
      imports: [
        HeaderModule,
        HeaderGlobalUtilitiesModule,
        BrowserAnimationsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta;

const UserProfileTemplate: Story = () => ({
  template: html`
    <header cdx-header>
      <cdx-header-global>
        <cdx-header-global-user-profile
          userDisplayName="Garcia, Nina"
          (logout)="onLogout()"
        ></cdx-header-global-user-profile>
      </cdx-header-global>
    </header>
  `,
  props: {
    onLogout: action('on logout'),
  },
});

export const UserProfile = UserProfileTemplate.bind({});
