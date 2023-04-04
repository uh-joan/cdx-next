import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { DemoModule } from './demo.module';

export default {
  title: 'Dialog',
  component: MatDialogModule,
  decorators: [
    moduleMetadata({
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        DemoModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta;

const DialogTemplate: Story = () => ({
  template: html`
    <h3>Basic dialog</h3>
    <div class="mat-typography story">
      <demo-dialog></demo-dialog>
    </div>
  `,
});

export const dialog = DialogTemplate.bind({});
