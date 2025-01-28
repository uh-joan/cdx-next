import {
  MatButtonToggle,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'helix/Button Toggle',
  component: MatButtonToggle,
  decorators: [
    moduleMetadata({
      imports: [
        MatButtonToggleModule,
        MatInputModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        ThemeModule,
        MatIconModule,
      ],
    }),
  ],
} as Meta;

const DefaultTemplate: StoryFn = () => ({
  template: html`
    <h3>Default Button Toggle</h3>
    <div style="display: flex">
      <mat-form-field appearance="outline" class="hlx-input-x-small">
        <mat-label>Outlined text input</mat-label>
        <input matInput title="Please enter text" placeholder="Placeholder" />
      </mat-form-field>
      <mat-button-toggle-group
        name="switcher"
        aria-label="Switcher"
        class="hlx-button-toggle-container hlx-button-toggle-invert"
      >
        <mat-button-toggle value="fielded" checked role="button">
          Fielded
        </mat-button-toggle>
        <mat-button-toggle value="expert" role="button">
          Expert
        </mat-button-toggle>
      </mat-button-toggle-group>
    </div>
  `,
});

const MultipleTemplate: StoryFn = () => ({
  template: html`
    <h3>Button Toggle With More Than Two Components</h3>
    <div class="story">
      <mat-button-toggle-group name="switcher" aria-label="Switcher">
        <mat-button-toggle value="left" checked role="button">
          Left
        </mat-button-toggle>
        <mat-button-toggle value="middle" role="button">
          Middle
        </mat-button-toggle>
        <mat-button-toggle value="right" role="button">
          Right
        </mat-button-toggle>
      </mat-button-toggle-group>
    </div>
  `,
});

const IconsTemplate: StoryFn = () => ({
  template: html`
    <h3>Button Toggle With Icons</h3>
    <div class="story">
      <mat-button-toggle-group>
        <mat-button-toggle checked value="left">
          <mat-icon>format_align_left</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="center">
          <mat-icon>format_align_center</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="right">
          <mat-icon>format_align_right</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="justify" disabled>
          <mat-icon>format_align_justify</mat-icon>
        </mat-button-toggle>
      </mat-button-toggle-group>
    </div>
  `,
});

export const buttonToggle = DefaultTemplate.bind({});
export const multipleToggle = MultipleTemplate.bind({});
export const iconsToggle = IconsTemplate.bind({});
