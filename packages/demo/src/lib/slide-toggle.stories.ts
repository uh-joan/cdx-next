import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Sprint 2/Components/Slide Toggle',
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule, ThemeModule],
    }),
  ],
} as Meta;

const FromMaterialTemplate: Story = () => ({
  template: html`
    <div class="mat-typography">
      <mat-slide-toggle [checked]="'true'"> Checked </mat-slide-toggle>
      <mat-slide-toggle [checked]="'false'"> Unchecked </mat-slide-toggle>
      <mat-slide-toggle [disabled]="'true'"> Disabled </mat-slide-toggle>
    </div>
  `,
});

export const FromMaterial = FromMaterialTemplate.bind({});
