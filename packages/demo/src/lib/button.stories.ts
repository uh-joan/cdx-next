import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Button',
  component: MatButtonModule,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule, ThemeModule],
    }),
  ],
} as Meta;

const RaisedButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Raised Button</h3>
    <div class="story">
      <button mat-raised-button color="primary">Primary</button>
      <button mat-raised-button color="accent">Accent</button>
      <button mat-raised-button color="warn">Warn</button>
      <button mat-raised-button>Basic</button>
      <button mat-raised-button disabled color="primary">Disabled</button>
    </div>
  `,
});

const StrokedButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Stroked Button</h3>
    <div class="story">
      <button mat-stroked-button color="primary">Primary</button>
      <button mat-stroked-button color="accent">Accent</button>
      <button mat-stroked-button color="warn">Warn</button>
      <button mat-stroked-button>Basic</button>
      <button mat-stroked-button disabled color="primary">Disabled</button>
    </div>
  `,
});

const FlatButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Flat Button</h3>
    <div class="story">
      <button mat-flat-button color="primary">Primary</button>
      <button mat-flat-button color="accent">Accent</button>
      <button mat-flat-button color="warn">Warn</button>
      <button mat-flat-button>Basic</button>
      <button mat-flat-button disabled color="primary">Disabled</button>
    </div>
  `,
});

const basicButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Basic Button</h3>
    <div class="story">
      <button mat-button color="primary">Primary</button>
      <button mat-button color="accent">Accent</button>
      <button mat-button color="warn">Warn</button>
      <button mat-button>Basic</button>
      <button mat-button disabled color="primary">Disabled</button>
    </div>
  `,
});

const iconButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Icon Button</h3>
    <div class="story">
      <button
        mat-icon-button
        color="primary"
        aria-label="Example icon button with a create new folder icond"
      >
        <mat-icon>create_new_folder</mat-icon>
      </button>
      <button
        mat-icon-button
        color="accent"
        aria-label="Example icon button with a chat icon"
      >
        <mat-icon>chat</mat-icon>
      </button>
      <button
        mat-icon-button
        color="warn"
        aria-label="Example icon button with an important notification icon"
      >
        <mat-icon>notification_important</mat-icon>
      </button>
      <button
        mat-icon-button
        aria-label="Example icon button with an account icon"
      >
        <mat-icon>account_circle</mat-icon>
      </button>
      <button
        mat-icon-button
        disabled
        aria-label="Example icon button with an edit icon"
      >
        <mat-icon>edit</mat-icon>
      </button>
    </div>
  `,
});

const floatingActionButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Floating Action Button</h3>
    <div class="story">
      <button
        mat-fab
        color="primary"
        aria-label="Example icon button with a create new folder icond"
      >
        <mat-icon>add</mat-icon>
      </button>
      <button
        mat-fab
        color="accent"
        aria-label="Example icon button with a chat icon"
      >
        <mat-icon>chat</mat-icon>
      </button>
      <button
        mat-fab
        color="warn"
        aria-label="Example icon button with an important notification icon"
      >
        <mat-icon>notification_important</mat-icon>
      </button>
      <button
        mat-fab
        disabled
        aria-label="Example icon button with an edit icon"
      >
        <mat-icon>edit</mat-icon>
      </button>
    </div>
  `,
});

const miniFloatingActionButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Mini Floating Action Button</h3>
    <div class="story">
      <button
        mat-mini-fab
        color="primary"
        aria-label="Example icon button with a create new folder icond"
      >
        <mat-icon>add</mat-icon>
      </button>
      <button
        mat-mini-fab
        color="accent"
        aria-label="Example icon button with a chat icon"
      >
        <mat-icon>chat</mat-icon>
      </button>
      <button
        mat-mini-fab
        color="warn"
        aria-label="Example icon button with an important notification icon"
      >
        <mat-icon>notification_important</mat-icon>
      </button>
      <button
        mat-mini-fab
        disabled
        aria-label="Example icon button with an edit icon"
      >
        <mat-icon>edit</mat-icon>
      </button>
    </div>
  `,
});

const iconLeadingButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Button Icon - Leading</h3>
    <div class="story">
      <button mat-flat-button color="primary">
        <mat-icon>invert_colors</mat-icon>Icon Leading
      </button>
      <button mat-stroked-button color="primary">
        <mat-icon>invert_colors</mat-icon>Icon Leading
      </button>
      <button mat-button color="primary">
        <mat-icon>invert_colors</mat-icon>Icon Leading
      </button>
    </div>
  `,
});

const iconTrailingButtonTemplate: StoryFn = () => ({
  template: html`
    <h3>Button Icon - Trailing</h3>
    <div class="story">
      <button mat-flat-button color="primary">
        Icon Trailing<mat-icon iconPositionEnd>invert_colors</mat-icon>
      </button>
      <button mat-stroked-button color="primary">
        Icon Trailing<mat-icon iconPositionEnd>invert_colors</mat-icon>
      </button>
      <button mat-button color="primary">
        Icon Trailing<mat-icon iconPositionEnd>invert_colors</mat-icon>
      </button>
    </div>
  `,
});

const themeButtonsTemplate: StoryFn = () => ({
  template: html`
    <div class="btns-story">
      <h1>Default size</h1>
      <div class="btn-row">
        <h2>Flat</h2>
        <div class="row">
          <div class="row">
            <button mat-flat-button color="primary">Button</button>
            <button mat-flat-button color="primary">
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button color="primary">
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-flat-button>Button</button>
            <button mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-flat-button>Button</button>
            <button mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button >Button</button>
            <button mat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <button mat-flat-button color="primary" disabled>Button</button>
            <button mat-flat-button color="primary" disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button color="primary" disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-flat-button disabled>Button</button>
            <button mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-flat-button  disabled>Button</button>
            <button mat-flat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
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
            <button mat-stroked-button color="primary">Button</button>
            <button mat-stroked-button color="primary">
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button color="primary">
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-stroked-button>Button</button>
            <button mat-stroked-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-stroked-button>Button</button>
            <button mat-stroked-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button >Button</button>
            <button mat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <button mat-stroked-button color="primary" disabled>Button</button>
            <button mat-stroked-button color="primary" disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button color="primary" disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-stroked-button disabled>Button</button>
            <button mat-stroked-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-button">
            <button mat-stroked-button disabled>Button</button>
            <button mat-stroked-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-stroked-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
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
            <button mat-button color="primary">Button</button>
            <button mat-button color="primary">
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button color="primary">
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-button>Button</button>
            <button mat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-button >Button</button>
            <button mat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button >Button</button>
            <button mat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <button mat-button color="primary" disabled>Button</button>
            <button mat-button color="primary" disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button color="primary" disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-button disabled>Button</button>
            <button mat-button disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-button  disabled>Button</button>
            <button mat-button  disabled>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button  disabled>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
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
      <div class="btn-row btn-small">
        <h2>Small Size (.btn-small)</h2>
        <div class="row">
          <div class="row btn-small">
            <button mat-flat-button color="primary">Button</button>
            <button mat-flat-button color="primary">
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button color="primary">
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-flat-button>Button</button>
            <button mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-flat-button >Button</button>
            <button mat-flat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button >Button</button>
            <button mat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="btn-row btn-x-small">
        <h2>Extra Small Size (.btn-x-small)</h2>
        <div class="row">
          <div class="row btn-small">
            <button mat-flat-button color="primary">Button</button>
            <button mat-flat-button color="primary">
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button color="primary">
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-flat-button>Button</button>
            <button mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-flat-button >Button</button>
            <button mat-flat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button >Button</button>
            <button mat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="btn-row btn-large">
        <h2>Large Size (.btn-large)</h2>
        <div class="row">
          <div class="row">
            <button mat-flat-button >Button</button>
            <button mat-flat-button color="primary">
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button color="primary">
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>

          <div class="row secondary-btn">
            <button mat-flat-button>Button</button>
            <button mat-flat-button>
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button>
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row warn-btn">
            <button mat-flat-button >Button</button>
            <button mat-flat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-flat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
          <div class="row">
            <button mat-button >Button</button>
            <button mat-button >
              <mat-icon>anchor</mat-icon>Button
            </button>
            <button mat-button >
              Button<mat-icon iconPositionEnd>anchor</mat-icon>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  `,
})
export const themeButons = themeButtonsTemplate.bind({});
export const raisedButton = RaisedButtonTemplate.bind({});
export const strokedButton = StrokedButtonTemplate.bind({});
export const flatButton = FlatButtonTemplate.bind({});
export const basicButton = basicButtonTemplate.bind({});
export const iconButton = iconButtonTemplate.bind({});
export const floatingActionButton = floatingActionButtonTemplate.bind({});
export const miniFloatingActionButton = miniFloatingActionButtonTemplate.bind(
  {},
);
export const iconLeadingButton = iconLeadingButtonTemplate.bind({});
export const iconTrailingButton = iconTrailingButtonTemplate.bind({});

