import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Chips',
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
        <mat-chip-list>
          <mat-chip>John</mat-chip>
          <mat-chip>Paul</mat-chip>
          <mat-chip>George</mat-chip>
          <mat-chip>Ringo</mat-chip>
        </mat-chip-list>
      </div>
      <div class="story__section">
        <h4>Chips With Icons</h4>
        <mat-chip-list>
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
        </mat-chip-list>
      </div>
      <div class="story__section">
        <h4>Chip Colors</h4>
        <mat-chip-listbox>
          <mat-chip-option>Basic</mat-chip-option>
          <mat-chip-option color="primary" selected>primary</mat-chip-option>
          <mat-chip-option color="accent" selected>accent</mat-chip-option>
          <mat-chip-option color="warn" selected>warning</mat-chip-option>
          <mat-chip-option disabled>disabled</mat-chip-option>
        </mat-chip-listbox>
      </div>
    </div>
  `,
});

export const chips = ChipsTemplate.bind({});
