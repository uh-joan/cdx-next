import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'avalon/Progress Spinner',
  component: MatProgressSpinnerModule,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule, ThemeModule],
    }),
  ],
} as Meta;

const ProgressSpinnerTemplate: StoryFn = () => ({
  template: html`
    <h3>Progress Spinner</h3>
    <div class="story">
      <mat-progress-spinner
        mode="indeterminate"
        color="primary"
      ></mat-progress-spinner>
      <mat-progress-spinner
        mode="indeterminate"
        color="accent"
      ></mat-progress-spinner>
      <mat-progress-spinner
        mode="indeterminate"
        color="warn"
      ></mat-progress-spinner>
    </div>
  `,
});

export const progressSpinner = ProgressSpinnerTemplate.bind({});
