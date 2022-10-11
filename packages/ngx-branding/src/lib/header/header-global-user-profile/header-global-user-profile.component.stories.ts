import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '@cdx/ngx-authentication';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { HeaderModule } from '../header.module';
import { HeaderGlobalUserProfileComponent } from './header-global-user-profile.component';

export default {
  title: 'Header',
  component: HeaderGlobalUserProfileComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ThemeModule,
        MatIconModule,
        HeaderModule,
        MatButtonModule,
        MatDividerModule,
        AuthenticationModule.forRoot({
          appId: 'cdx',
          environment: 'dev-stable',
        }),
        RouterModule.forRoot([], { useHash: true }),
      ],
    }),
  ],
  argTypes: {
    authenticated: {
      control: 'boolean',
    },
  },
} as Meta<HeaderGlobalUserProfileComponent>;

const Template: Story<HeaderGlobalUserProfileComponent> = (args) => ({
  props: args,
  template: html`<cdx-header-global-user-profile></cdx-header-global-user-profile>`,
});

const TemplateWithContent: Story<HeaderGlobalUserProfileComponent> = (
  args,
) => ({
  props: args,
  template: html`
    <cdx-header-global-user-profile>
      <div>
        <div style="padding-top: .5rem">Birth Date: 26/07/1991</div>
        <div>Sex: Male</div>
        <div>Phone number: +34 6876897679</div>
        <div>Address: Carrer de Pamplona 18</div>
        <div
          style="padding-top: .5rem; display: flex; justify-content: space-between"
        >
          <button mat-button color="accent">Add Informations</button>
          <button mat-button color="accent">Modify Informations</button>
        </div>
      </div>
      <button cdx-menu-content-action color="primary" mat-button>
        Disable Account
      </button>
    </cdx-header-global-user-profile>
  `,
});

const TemplateWithCustomMenu: Story<HeaderGlobalUserProfileComponent> = (
  args,
) => ({
  props: args,
  template: html`
    <cdx-header-global-user-profile>
      <div cdx-menu-triggerer-custom style="display: flex; gap: .5rem">
        <span>John Abruzzi</span
        ><mat-icon style="display: flex;align-self: center">info</mat-icon>
      </div>
      <div
        cdx-menu-content-custom
        style="display: flex; flex-direction: column; flex-wrap: wrap; gap: .25rem"
      >
        <span style="align-self: center; font-size: 24px"
          >Username: <strong>John86A</strong>
        </span>
        <a mat-button color="warn" style="width: 12rem; align-self: center"
          >Change password</a
        >

        <div
          style="display: flex; flex-direction: column; flex-wrap: wrap; border: 1px solid; padding: .5rem"
        >
          <span>User Type: admin</span>
          <span>Registration date: 22/02/2022</span>
          <span>Last activity date: 22/07/2022</span>
          <span>Phone number: +44 - 53253252</span>
        </div>

        <div
          style="padding-top: .5rem; display: flex; justify-content: space-between"
        >
          <button mat-button color="warn">Disable account</button>
          <button mat-button color="warn">Sign out</button>
        </div>
      </div>
    </cdx-header-global-user-profile>
  `,
});

export const GlobalUserProfile = Template.bind({});
GlobalUserProfile.args = {
  authenticated: false,
};

export const GlobalUserProfileWithContent = TemplateWithContent.bind({});
GlobalUserProfileWithContent.args = {
  authenticated: false,
};

export const GlobalUserProfileWithCustomMenu = TemplateWithCustomMenu.bind({});
GlobalUserProfileWithCustomMenu.args = {
  authenticated: true,
};
