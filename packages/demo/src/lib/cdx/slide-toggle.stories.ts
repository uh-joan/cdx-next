import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'cdx/Slide Toggle',
  component: MatSlideToggleModule,
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule, ThemeModule],
    }),
  ],
} as Meta;

const SlideToggleTemplate: StoryFn = () => ({
  template: html`
    <h3>Slide Toggle</h3>
    <div class="story">
      <mat-slide-toggle role="button" color="primary"
        >Enabled, Unchecked</mat-slide-toggle
      >
      <mat-slide-toggle role="button" color="primary" [checked]="true"
        >Enabled, Checked</mat-slide-toggle
      >
      <mat-slide-toggle disabled role="button"
        >Disabled, Unchecked</mat-slide-toggle
      >
      <mat-slide-toggle disabled role="button" color="primary" [checked]="true"
        >Disabled, Checked</mat-slide-toggle
      >
    </div>
  `,
});

export const slideToggle = SlideToggleTemplate.bind({});
