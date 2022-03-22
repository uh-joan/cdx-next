import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemeModule } from '@cdx-theme/angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Sprint 1/Components/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule, ThemeModule],
    }),
  ],
} as Meta;

const FromMaterialTemplate: Story = () => ({
  template: html`
    <div class="mat-typography checkbox-story">
      <section class="example-section">
        <mat-checkbox class="example-margin" [checked]="'true'"
          >Checked</mat-checkbox
        >
        <mat-checkbox class="example-margin">Unchecked</mat-checkbox>
        <mat-checkbox class="example-margin" disabled>Disabled</mat-checkbox>
      </section>
    </div>
  `,
});

export const FromMaterial = FromMaterialTemplate.bind({});
