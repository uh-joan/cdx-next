import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HeaderModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatTabsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta<HeaderComponent>;

const BasicTemplate: StoryFn<HeaderComponent> = () => ({
  template: html`<header cdx-header></header>`,
});

const WithProductNameTemplate: StoryFn<HeaderComponent> = () => ({
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
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
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

const WithProductNameAsLinkTemplate: StoryFn<HeaderComponent> = () => ({
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
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-global>
      <a href="#" cdx-header-product-name>My Product Name</a>
      <div style="display: inherit; justify-content: end">
        <button mat-button style="margin-right: 1rem">Sign up</button>
        <button mat-flat-button color="primary">Login</button>
      </div>
    </header>
  `,
});

const WithProductLogoTemplate: StoryFn<HeaderComponent> = () => ({
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
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
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

const WithProductLogoAndProductNameTemplate: StoryFn<HeaderComponent> = () => ({
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
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-global>
      <a href="#" cdx-header-product-name>My Product Name</a>
      <img
        cdx-header-product-logo
        src="https://clarivate.com/code/wp-content/themes/clarivate/src/img/logo.svg?v=2.4.32"
      />
    </header>
  `,
});

const WithProductSearchTemplate: StoryFn<HeaderComponent> = () => ({
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
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
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

const AtSmallestSizeTemplate: StoryFn<HeaderComponent> = () => ({
  template: html`
    <header cdx-header>
      <cdx-header-product-name></cdx-header-product-name>
    </header>
  `,
});

const AtLargestSizeTemplate: StoryFn<HeaderComponent> = () => ({
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

const WithPrimaryNavTemplate: StoryFn<HeaderComponent> = () => ({
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
        <div
          style="display: inherit; align-items: inherit; margin-right: 1rem;"
        >
          <mat-icon>apps</mat-icon> Products
        </div>
      </cdx-header-global>
      <cdx-header-product-name>My Product</cdx-header-product-name>
      <nav mat-tab-nav-bar cdx-size-compact style="flex: 4">
        <a mat-tab-link>Foo Bar</a>
        <a mat-tab-link active>Bar</a>
        <a mat-tab-link>Bar Baz Buzz</a>
        <a mat-tab-link disabled>
          <mat-icon>lock</mat-icon>
          Disabled Link
        </a>
      </nav>
      <div style="display: inherit; justify-content: end; flex: 1">
        <button mat-button style="margin-right: 1rem">Sign up</button>
        <button mat-flat-button color="primary">Login</button>
      </div>
    </header>
  `,
});

export const Basic = BasicTemplate.bind({});
export const WithProductName = WithProductNameTemplate.bind({});
export const WithProductNameAsLink = WithProductNameAsLinkTemplate.bind({});
export const WithProductLogo = WithProductLogoTemplate.bind({});
export const WithProductLogoAndProductName =
  WithProductLogoAndProductNameTemplate.bind({});
export const WithProductSearch = WithProductSearchTemplate.bind({});
export const AtSmallestSize = AtSmallestSizeTemplate.bind({});
export const AtLargestSize = AtLargestSizeTemplate.bind({});
export const WithPrimaryNav = WithPrimaryNavTemplate.bind({});
