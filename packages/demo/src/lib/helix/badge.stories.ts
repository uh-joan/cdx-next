import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'helix/Badge',
  component: MatBadgeModule,
  decorators: [
    moduleMetadata({
      imports: [MatBadgeModule, MatIconModule, MatButtonModule, ThemeModule],
    }),
  ],
} as Meta;

const sizesBadgeTemplate: StoryFn = () => ({
  template: html`
    <h3>Sizes</h3>
    <div class="story story--sections hlx-badge-accent">
      <div class="story__section">
        <h4>Large</h4>
        <div class="story__section__content">
          <button
            mat-stroked-button
            color="primary"
            matBadgeSize="large"
            matBadge="9"
            matBadgePosition="after"
            matBadgeColor="primary"
          >
            Button
          </button>
          <button
            mat-flat-button
            color="primary"
            matBadgeSize="large"
            matBadge="9"
            matBadgePosition="after"
            matBadgeColor="primary"
          >
            Button
          </button>
        </div>
      </div>
      <div class="story__section">
        <h4>Medium</h4>
        <div class="story__section__content">
          <button
            mat-stroked-button
            color="primary"
            matBadge="9+"
            matBadgePosition="after"
            matBadgeColor="primary"
          >
            Button
          </button>
          <button
            mat-flat-button
            color="primary"
            matBadge="9+"
            matBadgePosition="after"
            matBadgeColor="primary"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  `,
});

const colorsBadgeTemplate: StoryFn = () => ({
  template: html`
    <h3>Colors</h3>
    <div class="story story--sections hlx-badge-primary">
      <div class="story__section">
        <h4>Primary</h4>
        <div class="story__section__content">
          <span
            matBadgeColor="primary"
            matBadge="9"
            matBadgeOverlap="false"
          ></span>
        </div>
      </div>
      <div class="story__section hlx-badge-accent">
        <h4>Accent</h4>
        <div class="story__section__content">
          <span
            matBadgeColor="warn"
            matBadge="9"
            matBadgeOverlap="false"
          ></span>
        </div>
      </div>
    </div>
  `,
});
export const sizesBadge = sizesBadgeTemplate.bind({});
export const colorsBadge = colorsBadgeTemplate.bind({});
