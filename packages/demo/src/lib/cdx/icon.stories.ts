import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'base/Icon',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule, ThemeModule],
    }),
  ],
} as Meta;

export const Sizes = () => ({
  template: html`
    <ng-container>
      <h3>Icon Sizes</h3>
      <div class="story story--sections">
        <div class="story__section">
          <h4>Small</h4>
          <div class="story__section__content">
            <mat-icon style="font-size: 16px;">check_circle</mat-icon>
            <mat-icon style="font-size: 16px;">info</mat-icon>
            <mat-icon style="font-size: 16px;">get_app</mat-icon>
          </div>
        </div>
        <div class="story__section">
          <h4>Medium</h4>
          <div class="story__section__content">
            <mat-icon style="font-size: 20px;">whatshot</mat-icon>
            <mat-icon style="font-size: 20px;">storage</mat-icon>
            <mat-icon style="font-size: 20px;">assignment</mat-icon>
          </div>
        </div>
        <div class="story__section">
          <h4>Large</h4>
          <div class="story__section__content">
            <mat-icon>language</mat-icon>
            <mat-icon>report_problem</mat-icon>
            <mat-icon>settings</mat-icon>
          </div>
        </div>
        <div class="story__section">
          <h4>Extra Large</h4>
          <div class="story__section__content">
            <mat-icon style="font-size: 32px;">view_agenda</mat-icon>
            <mat-icon style="font-size: 32px;">view_day</mat-icon>
            <mat-icon style="font-size: 32px;">rss_feed</mat-icon>
          </div>
        </div>
      </div>
    </ng-container>
  `,
});

export const Colors = () => ({
  template: html`
    <ng-container>
      <h3>Icon Colors</h3>
      <div class="story story--sections">
        <div class="story__section">
          <h4>Default</h4>
          <div class="story__section__content">
            <mat-icon>check_circle</mat-icon>
            <mat-icon>info</mat-icon>
            <mat-icon>get_app</mat-icon>
          </div>
        </div>
        <div class="story__section">
          <h4>Primary</h4>
          <div class="story__section__content">
            <mat-icon color="primary">whatshot</mat-icon>
            <mat-icon color="primary">storage</mat-icon>
            <mat-icon color="primary">assignment</mat-icon>
          </div>
        </div>
        <div class="story__section">
          <h4>Accent</h4>
          <div class="story__section__content">
            <mat-icon color="accent">language</mat-icon>
            <mat-icon color="accent">report_problem</mat-icon>
            <mat-icon color="accent">settings</mat-icon>
          </div>
        </div>
        <div class="story__section">
          <h4>Warn</h4>
          <div class="story__section__content">
            <mat-icon color="warn">view_agenda</mat-icon>
            <mat-icon color="warn">view_day</mat-icon>
            <mat-icon color="warn">rss_feed</mat-icon>
          </div>
        </div>
      </div>
    </ng-container>
  `,
});

export const sizes = Sizes.bind({});
export const colors = Colors.bind({});
