import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'helix/Icon',
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
      <div class="story story--sections ">
        <div class="story__section">
          <h4>Icons</h4>
          <div class="story__section__content">
            <mat-icon class="material-symbols-outlined">search</mat-icon>
            <mat-icon class="material-symbols-outlined">home</mat-icon>
            <mat-icon class="material-symbols-outlined">menu</mat-icon>
            <mat-icon class="material-symbols-outlined">close</mat-icon>
            <mat-icon class="material-symbols-outlined">settings</mat-icon>
            <mat-icon class="material-symbols-outlined">check_circle</mat-icon>
            <mat-icon class="material-symbols-outlined">favorite</mat-icon>
            <mat-icon class="material-symbols-outlined">add</mat-icon>
            <mat-icon class="material-symbols-outlined">delete</mat-icon>
            <mat-icon class="material-symbols-outlined">arrow_back</mat-icon>
            <mat-icon class="material-symbols-outlined">star</mat-icon>
            <mat-icon class="material-symbols-outlined">chevron_right</mat-icon>
            <mat-icon class="material-symbols-outlined">logout</mat-icon>
            <mat-icon class="material-symbols-outlined"
              >arrow_forward_ios</mat-icon
            >
            <mat-icon class="material-symbols-outlined">add_circle</mat-icon>
            <mat-icon class="material-symbols-outlined">cancel</mat-icon>
          </div>
        </div>
      </div>
    </ng-container>
  `,
});

export const sizes = Sizes.bind({});
