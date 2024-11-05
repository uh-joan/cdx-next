import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'base/Chips',
  component: MatChipsModule,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule, MatIconModule, ThemeModule],
    }),
  ],
} as Meta;

const ChipsTemplate: StoryFn = () => ({
  template: html`
    <h3>Chips</h3>
    <div class="story story--sections">
      <div class="story__section">
        <h4>Basic Chips</h4>
        <mat-chip-set>
          <mat-chip>John</mat-chip>
          <mat-chip>Paul</mat-chip>
          <mat-chip>George</mat-chip>
          <mat-chip>Ringo</mat-chip>
        </mat-chip-set>
      </div>
      <div class="story__section">
        <h4>Chips With Icons</h4>
        <mat-chip-set>
          <mat-chip>
            <mat-icon matChipAvatar>directions_walk</mat-icon>Walk<mat-icon
              matChipRemove
              >cancel</mat-icon
            >
          </mat-chip>
          <mat-chip>
            <mat-icon matChipAvatar> directions_bike</mat-icon>Cycle<mat-icon
              matChipRemove
              >cancel</mat-icon
            >
          </mat-chip>
          <mat-chip>
            <mat-icon matChipAvatar> directions_bus</mat-icon>Bus<mat-icon
              matChipRemove
              >cancel</mat-icon
            >
          </mat-chip>
          <mat-chip>
            <mat-icon matChipAvatar> directions_car</mat-icon>Drive<mat-icon
              matChipRemove
              >cancel</mat-icon
            >
          </mat-chip>
        </mat-chip-set>
      </div>
      <div class="story__section">
        <h4>Chip Colors</h4>
        <mat-chip-set>
          <mat-chip class="hlx-primary-chip">primary</mat-chip>
          <mat-chip class="hlx-accent-chip">accent</mat-chip>
          <mat-chip class="hlx-negative-chip">negative</mat-chip>
          <mat-chip class="hlx-warn-chip" color="primary">warn</mat-chip>
          <mat-chip class="hlx-positive-chip" color="accent">positive</mat-chip>
          <mat-chip class="hlx-info-chip" color="warn">info</mat-chip>
          <mat-chip class="hlx-neutral-chip">neutral</mat-chip>
        </mat-chip-set>
      </div>
    </div>
  `,
});

export const chips = ChipsTemplate.bind({});
