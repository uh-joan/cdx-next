import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Helix/Button',
  component: MatButtonModule,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule, ThemeModule],
    }),
  ],
} as Meta;

const themeButtonsTemplate: StoryFn = () => ({
  template: html`
    <div class="btns-story">
      <h1>Default size</h1>
      <div class="btn-row">
        <h2>Flat</h2>
        <div class="row">
          <div class="row">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row hlx-accent-button">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-negative-button">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-hlx-invert-button">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <button class="hlx-accent-button" mat-flat-button disabled>
              Button
            </button>
            <button class="hlx-accent-button" mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-accent-button" mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row hlx-accent-button">
            <button mat-flat-button disabled>Button</button>
            <button mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-negative-button">
            <button mat-flat-button disabled>Button</button>
            <button mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-invert-button">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="btn-row">
        <h2>Stroked</h2>
        <div class="row">
          <div class="row">
            <button mat-stroked-button>Button</button>
            <button mat-stroked-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row hlx-accent-button">
            <button mat-stroked-button>Button</button>
            <button mat-stroked-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-negative-button">
            <button mat-stroked-button>Button</button>
            <button mat-stroked-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-invert-button">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <button mat-stroked-button disabled>Button</button>
            <button mat-stroked-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row hlx-accent-button">
            <button mat-stroked-button disabled>Button</button>
            <button mat-stroked-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-negative-button">
            <button mat-stroked-button disabled>Button</button>
            <button mat-stroked-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-invert-button">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="btn-row">
        <h2>Basic</h2>
        <div class="row">
          <div class="row">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row hlx-accent-button">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-negative-button">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-invert-button">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row hlx-accent-button">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-negative-button">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-invert-button">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <h1>Sizing</h1>
      <div class="btn-row hlx-btn-small">
        <h2>Small Size (.hlx-btn-small)</h2>
        <div class="row">
          <div class="row hlx-btn-small">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row ">
            <button class="hlx-accent-button" mat-flat-button>Button</button>
            <button class="hlx-accent-button" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-accent-button" mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button class="hlx-negative-button" mat-flat-button>Button</button>
            <button class="hlx-negative-button" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-negative-button" mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="btn-row hlx-btn-x-small">
        <h2>Extra Small Size (.hlx-btn-x-small)</h2>
        <div class="row">
          <div class="row hlx-btn-small">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row">
            <button class="hlx-accent-button" mat-flat-button>Button</button>
            <button class="hlx-accent-button" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-accent-button" mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row ">
            <button class="hlx-negative-button" mat-flat-button>Button</button>
            <button class="hlx-negative-button" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-negative-button" mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="btn-row hlx-btn-large">
        <h2>Large Size (.hlx-btn-large)</h2>
        <div class="row">
          <div class="row">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row">
            <button class="hlx-accent-button" mat-flat-button>Button</button>
            <button class="hlx-accent-button" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-accent-button" mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button class="hlx-negative-button" mat-flat-button>Button</button>
            <button class="hlx-negative-button" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-negative-button" mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
});
export const themeButons = themeButtonsTemplate.bind({});
