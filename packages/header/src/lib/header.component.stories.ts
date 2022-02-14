import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { HeaderModule } from '..';
import { HeaderComponent } from './header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderModule, MatIconModule],
    }),
  ],
} as Meta<HeaderComponent>;

const NoAdditionalContentTemplate: Story<HeaderComponent> = () => ({
  template: html`<header cdx-header></header>`,
});

const ContentInUtilityNavigationTemplate: Story<HeaderComponent> = () => ({
  template: html`
    <header cdx-header>
      <cdx-header-utility-navigation>
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          English <mat-icon>expand_more</mat-icon>
        </div>
        <div style="display: inherit; align-items: inherit;">
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-utility-navigation>
    </header>
  `,
});

export const NoAdditionalContent = NoAdditionalContentTemplate.bind({});
export const ContentInUtilityNavigation =
  ContentInUtilityNavigationTemplate.bind({});
