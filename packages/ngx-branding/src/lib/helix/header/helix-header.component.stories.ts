import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

import { HelixHeaderComponent } from './helix-header.component';
import { HelixHeaderModule } from './helix-header.module';

export default {
  title: 'Helix/Header',
  component: HelixHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HelixHeaderModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatTabsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta<HelixHeaderComponent>;

const BasicTemplate: StoryFn<HelixHeaderComponent> = () => ({
  template: html`<header hlx-header></header>`,
});

const WithProductNameTemplate: StoryFn<HelixHeaderComponent> = () => ({
  template: html`
    <!--
    PLEASE NOTE: All inline styles are included as examples of how content
    can be positioned and are intended for demonstration purposes only.
    -->
    <header hlx-header>
      <hlx-header-product-name>Product name</hlx-header-product-name>
      <div style="display: flex; gap: 30px; margin: 0 20px; font-size: 14px;">
        <a>First</a>
        <a>Second</a>
        <a>Third</a>
        <a>Forth</a>
        <a>Fifth</a>
      </div>

      <hlx-header-global>
        <div
          style="display: flex;
                 align-items: center;
                justify-content: flex-end;
                  gap: 10px;
                  width: 100%;
                  height: 100%;"
        >
          <mat-icon>language</mat-icon>
          <mat-icon>apps</mat-icon>
          <mat-icon class="material-icons-outlined">account_circle</mat-icon>
        </div>
      </hlx-header-global>
    </header>
  `,
});

const OnlyProductNameTemplate: StoryFn<HelixHeaderComponent> = () => ({
  template: html`
    <!--
    PLEASE NOTE: All inline styles are included as examples of how content
    can be positioned and are intended for demonstration purposes only.
    -->
    <header hlx-header [branded]="false">
      <hlx-header-product-name>Product name</hlx-header-product-name>
      <div style="display: flex; gap: 30px; margin: 0 20px; font-size: 14px;">
        <a>First</a>
        <a>Second</a>
        <a>Third</a>
        <a>Forth</a>
        <a>Fifth</a>
      </div>

      <hlx-header-global>
        <div
          style="display: flex;
                 align-items: center;
                justify-content: flex-end;
                  gap: 10px;
                  width: 100%;
                  height: 100%;"
        >
          <mat-icon>language</mat-icon>
          <mat-icon>apps</mat-icon>
          <mat-icon class="material-icons-outlined">account_circle</mat-icon>
        </div>
      </hlx-header-global>
    </header>
  `,
});

export const Basic = BasicTemplate.bind({});
export const WithProductName = WithProductNameTemplate.bind({});
export const OnlyProductName = OnlyProductNameTemplate.bind({});
