import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'base/Progress Bar',
  component: MatProgressBarModule,
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule, ThemeModule],
    }),
  ],
} as Meta;

const ProgressTemplate: StoryFn = () => ({
  template: html`
    <h3>Progress Bar</h3>
    <div class="story">
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      <mat-progress-bar mode="indeterminate" color="accent"></mat-progress-bar>
      <mat-progress-bar mode="indeterminate" color="warn"></mat-progress-bar>
    </div>
  `,
});

export const progressBar = ProgressTemplate.bind({});
