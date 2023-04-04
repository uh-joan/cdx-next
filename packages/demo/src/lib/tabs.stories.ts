import { MatTabsModule } from '@angular/material/tabs';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Tabs',
  component: MatTabsModule,
  decorators: [
    moduleMetadata({
      imports: [MatTabsModule, ThemeModule],
    }),
  ],
} as Meta;

const TabsTemplate: Story = () => ({
  template: html`
    <h3>Tabs</h3>
    <div class="story">
      <mat-tab-group>
        <mat-tab label="First">Code</mat-tab>
        <mat-tab label="Second">More code</mat-tab>
      </mat-tab-group>
    </div>
  `,
});

export const tabs = TabsTemplate.bind({});
