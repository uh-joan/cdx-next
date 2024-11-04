import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AuthenticationModule,
  HeaderGlobalUserProfileModule,
} from '@cdx/ngx-authentication';
import { HeaderComponent, HeaderModule } from '@cdx/ngx-branding';
import { ThemeModule } from '@cdx/theme-angular-material';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular';
import { html } from 'common-tags';
import { of } from 'rxjs';

export default {
  title: 'cdx/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HeaderModule,
        HeaderGlobalUserProfileModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        ThemeModule,
        TranslateModule.forChild(),
      ],
      providers: [
        {
          provide: TranslateService,
          useValue: {
            get: (key: string) => of(key),
          },
        },
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(
          AuthenticationModule.forRoot({
            appId: 'cdx',
          }),
        ),
      ],
    }),
  ],
} as Meta<HeaderComponent>;

const BasicTemplate: StoryFn<HeaderComponent> = () => ({
  template: html`<header cdx-header></header>`,
});

const WithGlobalUserProfileUnauthenticatedTemplate: StoryFn<
  HeaderComponent
> = () => ({
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
        <cdx-header-global-user-profile></cdx-header-global-user-profile>
      </cdx-header-global>
    </header>
  `,
});

const WithExternalLogoLinkTemplate: StoryFn<HeaderComponent> = () => ({
  template: html`<header cdx-header [openExternalLink]="true"></header>`,
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
        alt="Clarivate"
      />
      <div style="display: inherit; justify-content: end">
        <button mat-button style="margin-right: 1rem">Sign up</button>
        <button mat-flat-button color="primary">Login</button>
      </div>
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
        alt="Clarivate"
        style="max-width: 140px"
      />
      <mat-form-field
        class="mat-form-field--transparent"
        style="flex: 0.75; top: 0.25rem"
      >
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
      <nav
        mat-tab-nav-bar
        cdx-size-compact
        style="flex: 4"
        [tabPanel]="tabPanel"
      >
        <a mat-tab-link>Foo Bar</a>
        <a mat-tab-link active>Bar</a>
        <a mat-tab-link>Bar Baz Buzz</a>
        <a mat-tab-link disabled>
          <mat-icon>lock</mat-icon>
          Disabled Link
        </a>
      </nav>
      <mat-tab-nav-panel #tabPanel> </mat-tab-nav-panel>
      <div style="display: inherit; justify-content: space-between; flex: 1">
        <button mat-button color="primary">Sign up</button>
        <button mat-flat-button color="primary">Login</button>
      </div>
    </header>
  `,
});

const BasicWithCustomThemeTemplate: StoryFn<HeaderComponent> = () => ({
  template: html`<header cdx-header [theme]="brandingTheme"></header>`,
  props: {
    brandingTheme: {
      header: {
        background: '#1A237E',
        color: '#FFA000',
      },
    },
  },
});

export const Basic = BasicTemplate.bind({});
export const WithGlobalUserProfileUnauthenticated =
  WithGlobalUserProfileUnauthenticatedTemplate.bind({});
export const WithExternalLogoLink = WithExternalLogoLinkTemplate.bind({});
export const WithProductName = WithProductNameTemplate.bind({});
export const WithProductNameAsLink = WithProductNameAsLinkTemplate.bind({});
export const WithProductLogo = WithProductLogoTemplate.bind({});
export const WithProductSearch = WithProductSearchTemplate.bind({});
export const AtSmallestSize = AtSmallestSizeTemplate.bind({});
export const AtLargestSize = AtLargestSizeTemplate.bind({});
export const WithPrimaryNav = WithPrimaryNavTemplate.bind({});
export const BasicWithCustomTheme = BasicWithCustomThemeTemplate.bind({});
