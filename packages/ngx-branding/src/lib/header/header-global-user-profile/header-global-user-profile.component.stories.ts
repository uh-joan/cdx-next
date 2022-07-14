import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
        HeaderModule,
        MatButtonModule,
        MatDividerModule,
        AuthenticationModule.forRoot({
          appId: 'cdx',
          environment: 'dev-stable',
        }),
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
