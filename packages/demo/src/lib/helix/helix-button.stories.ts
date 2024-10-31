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

          <div class="row hlx-btn-accent">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-negative">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-invert">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <button class="hlx-btn-accent" mat-flat-button disabled>
              Button
            </button>
            <button class="hlx-btn-accent" mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-btn-accent" mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row hlx-btn-accent">
            <button mat-flat-button disabled>Button</button>
            <button mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-negative">
            <button mat-flat-button disabled>Button</button>
            <button mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-invert">
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

          <div class="row hlx-btn-accent">
            <button mat-stroked-button>Button</button>
            <button mat-stroked-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-negative">
            <button mat-stroked-button>Button</button>
            <button mat-stroked-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-invert">
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

          <div class="row hlx-btn-accent">
            <button mat-stroked-button disabled>Button</button>
            <button mat-stroked-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-negative">
            <button mat-stroked-button disabled>Button</button>
            <button mat-stroked-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-invert">
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

          <div class="row hlx-btn-accent">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-negative">
            <button mat-button>Button</button>
            <button mat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-invert">
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

          <div class="row hlx-btn-accent">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-negative">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row hlx-btn-invert">
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
      <div class="btn-row hlx-btn-large">
        <h2>Large Size</h2>
        <div class="row">
          <div class="row">
            <button mat-flat-button>Button</button>
            <button mat-flat-button><mat-icon>anchor</mat-icon>Button</button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row">
            <button class="hlx-btn-accent" mat-flat-button>Button</button>
            <button class="hlx-btn-accent" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-btn-accent" mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button class="hlx-btn-negative" mat-flat-button>Button</button>
            <button class="hlx-btn-negative" mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button class="hlx-btn-negative" mat-flat-button>
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
