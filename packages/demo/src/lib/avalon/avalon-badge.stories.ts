import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'avalon/Badge',
  component: MatBadgeModule,
  decorators: [
    moduleMetadata({
      imports: [MatBadgeModule, MatIconModule, MatButtonModule, ThemeModule],
    }),
  ],
} as Meta;

const badgeTemplate: StoryFn = () => ({
  template: html`
    <h3>Emphasis</h3>
    <div class="story story--sections">
      <div class="story__section">
        <h4>Error</h4>
        <div class="story__section__content">
          <button
            mat-stroked-button
            matBadgeSize="small"
            matBadge="3"
            matBadgePosition="after"
          >
            Button
          </button>
          <button
            mat-flat-button
            matBadgeSize="large"
            matBadge="3"
            matBadgePosition="after"
          >
            Button
          </button>
        </div>
      </div>
      <div class="story__section">
        <h4>Info</h4>
        <div class="story__section__content">
          <button
            mat-stroked-button
            class="ava-badge-info"
            matBadgeSize="small"
            matBadge="3"
            matBadgePosition="after"
          >
            Button
          </button>
          <button
            mat-flat-button
            class="ava-badge-info"
            matBadge="3"
            matBadgePosition="after"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  `,
});
export const colorsBadge = badgeTemplate.bind({});
