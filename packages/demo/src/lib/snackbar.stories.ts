import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { DemoModule } from './demo.module';

export default {
  title: 'Snackbar',
  component: MatSnackBarModule,
  decorators: [
    moduleMetadata({
      imports: [MatSnackBarModule, ThemeModule, DemoModule],
    }),
  ],
} as Meta;

const SnackbarTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Snackbar</h3>
      <div class="story mat-typography">
        <demo-snack-bar></demo-snack-bar>
      </div>
    </ng-container>
  `,
});

export const snackbar = SnackbarTemplate.bind({});
