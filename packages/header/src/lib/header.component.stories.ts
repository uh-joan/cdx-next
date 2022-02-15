import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { HeaderModule } from '..';
import { HeaderComponent } from './header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
  parameters: {
    docs: { iframeHeight: 160 },
  },
  decorators: [
    moduleMetadata({
      imports: [
        HeaderModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta<HeaderComponent>;

const BasicTemplate: Story<HeaderComponent> = () => ({
  template: html`<header cdx-header></header>`,
});

const WithGlobalUtilitiesTemplate: Story<HeaderComponent> = () => ({
  template: html`
    <!-- 
    PLEASE NOTE: All inline styles are included as examples of how content 
    can be positioned and are intended for demonstration purposes only. 
    -->
    <header cdx-header>
      <cdx-header-global>
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          English <mat-icon>expand_more</mat-icon>
        </div>
        <div style="display: inherit; align-items: inherit;">
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-global>
    </header>
  `,
});

const WithProductNameTemplate: Story<HeaderComponent> = () => ({
  template: html`
    <!-- 
    PLEASE NOTE: All inline styles are included as examples of how content 
    can be positioned and are intended for demonstration purposes only. 
    -->
    <header cdx-header>
      <cdx-header-global>
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          English <mat-icon>expand_more</mat-icon>
        </div>
        <div style="display: inherit; align-items: inherit;">
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-global>
      <cdx-header-product-name>My Product Name</cdx-header-product-name>
      <div style="display: inherit; justify-content: end">
        <button mat-button style="margin-right: 1rem">Sign up</button>
        <button mat-flat-button color="primary">Login</button>
      </div>
    </header>
  `,
});

const WithProductLogoTemplate: Story<HeaderComponent> = () => ({
  template: html`
    <!-- 
    PLEASE NOTE: All inline styles are included as examples of how content 
    can be positioned and are intended for demonstration purposes only. 
    -->
    <header cdx-header>
      <cdx-header-global>
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          English <mat-icon>expand_more</mat-icon>
        </div>
        <div style="display: inherit; align-items: inherit;">
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-global>
      <img
        cdx-header-product-logo
        src="https://clarivate.com/code/wp-content/themes/clarivate/src/img/logo.svg?v=2.4.32"
      />
      <div style="display: inherit; justify-content: end">
        <button mat-button style="margin-right: 1rem">Sign up</button>
        <button mat-flat-button color="primary">Login</button>
      </div>
    </header>
  `,
});

const WithProductSearchTemplate: Story<HeaderComponent> = () => ({
  template: html`
    <!-- 
    PLEASE NOTE: All inline styles are included as examples of how content 
    can be positioned and are intended for demonstration purposes only. 
    -->
    <header cdx-header>
      <cdx-header-global>
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          English <mat-icon>expand_more</mat-icon>
        </div>
        <div style="display: inherit; align-items: inherit;">
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-global>
      <img
        cdx-header-product-logo
        src="https://clarivate.com/code/wp-content/themes/clarivate/src/img/logo.svg?v=2.4.32"
        style="max-width: 140px"
      />
      <mat-form-field style="flex: 0.75; top: 0.25rem">
        <input matInput />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      <div style="display: inherit; justify-content: end">
        <button mat-button style="margin-right: 1rem">Sign up</button>
        <button mat-flat-button color="primary">Login</button>
      </div>
    </header>
  `,
});

const AtSmallestSizeTemplate: Story<HeaderComponent> = () => ({
  template: html`
    <header cdx-header>
      <cdx-header-product-name></cdx-header-product-name>
    </header>
  `,
});

const AtLargestSizeTemplate: Story<HeaderComponent> = () => ({
  template: html`
    <!-- 
    PLEASE NOTE: All inline styles are included as examples of how content 
    can be positioned and are intended for demonstration purposes only. 
    -->
    <header cdx-header>
      <cdx-header-product-name>
        <div style="height: 500px"></div>
      </cdx-header-product-name>
    </header>
  `,
});

export const Basic = BasicTemplate.bind({});
export const WithGlobalUtilities = WithGlobalUtilitiesTemplate.bind({});
export const WithProductName = WithProductNameTemplate.bind({});
export const WithProductLogo = WithProductLogoTemplate.bind({});
export const WithProductSearch = WithProductSearchTemplate.bind({});
export const AtSmallestSize = AtSmallestSizeTemplate.bind({});
export const AtLargestSize = AtLargestSizeTemplate.bind({});
