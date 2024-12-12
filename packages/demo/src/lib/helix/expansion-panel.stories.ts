import { MatExpansionModule } from '@angular/material/expansion';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'helix/Expansion Panel',
  decorators: [
    moduleMetadata({
      imports: [MatExpansionModule, ThemeModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const ExpansionTemplate: StoryFn = () => ({
  template: html`
    <h3>Expansion Panel</h3>
    <mat-accordion>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title> This is the expansion title </mat-panel-title>
          <mat-panel-description>
            This is a summary of the content
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p>This is the primary content of the panel.</p>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title> This is the expansion title </mat-panel-title>
          <mat-panel-description>
            This is a summary of the content
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p>This is the primary content of the panel.</p>
      </mat-expansion-panel>
    </mat-accordion>
  `,
});

export const expansionPanel = ExpansionTemplate.bind({});
