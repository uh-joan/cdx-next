import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

import { AvalonHeaderComponent } from './avalon-header.component';
import { AvalonHeaderModule } from './avalon-header.module';

export default {
  title: 'Avalon/Header',
  component: AvalonHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvalonHeaderModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatTabsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta<AvalonHeaderComponent>;

const BasicTemplate: StoryFn<AvalonHeaderComponent> = () => ({
  template: html`<header ava-header></header>`,
});

const WithProductNameTemplate: StoryFn<AvalonHeaderComponent> = () => ({
  template: html`
    <!--
    PLEASE NOTE: All inline styles are included as examples of how content
    can be positioned and are intended for demonstration purposes only.
    -->
    <header ava-header>
      <ava-header-product-name>Product name</ava-header-product-name>
      <ava-header-global>
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
      </ava-header-global>
      <ava-subheader>
        <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
          <mat-tab label="First"></mat-tab>
          <mat-tab label="Second"></mat-tab>
          <mat-tab label="Third"></mat-tab>
          <mat-tab>Forth</mat-tab>
          <mat-tab>Fifth</mat-tab>
        </mat-tab-group>
      </ava-subheader>
    </header>
  `,
});

export const Basic = BasicTemplate.bind({});
export const WithProductName = WithProductNameTemplate.bind({});
