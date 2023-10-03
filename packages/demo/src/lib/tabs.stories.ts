import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Tabs',
  component: MatTabsModule,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MatTabsModule, ThemeModule],
    }),
  ],
} as Meta;

const TabsTemplate: StoryFn = () => ({
  template: html`
    <div class="story">
      <mat-tab-group>
        <mat-tab label="First">Code</mat-tab>
        <mat-tab label="Second">More code</mat-tab>
      </mat-tab-group>
    </div>
  `,
});

export const tabs = TabsTemplate.bind({});
