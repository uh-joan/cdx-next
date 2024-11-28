import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'helix/Checkbox',
  component: MatCheckboxModule,
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule, ThemeModule],
    }),
  ],
} as Meta;

const CheckboxTemplate: StoryFn = () => ({
  template: html`
    <h3>Checkbox States</h3>
    <div class="story">
      <mat-checkbox [checked]="true">Checked</mat-checkbox>
      <mat-checkbox [checked]="true" [disabled]="true"
        >Checked + Disabled</mat-checkbox
      >
      <mat-checkbox [indeterminate]="true">Indeterminate</mat-checkbox>
      <mat-checkbox>Unchecked</mat-checkbox>
      <mat-checkbox [disabled]="true">Unchecked + Disabled</mat-checkbox>
    </div>
  `,
});

export const checkbox = CheckboxTemplate.bind({});
