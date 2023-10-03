import { MatDividerModule } from '@angular/material/divider';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Divider',
  component: MatDividerModule,
  decorators: [
    moduleMetadata({
      imports: [MatDividerModule, ThemeModule],
    }),
  ],
} as Meta;

const DividerTemplate: StoryFn = () => ({
  template: html`
    <h3>Divider</h3>
    <div class="story">
      <mat-list style="width: 100%;">
        <mat-list-item>Item 1</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>Item 2</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>Item 3</mat-list-item>
      </mat-list>
    </div>
  `,
});

export const divider = DividerTemplate.bind({});
