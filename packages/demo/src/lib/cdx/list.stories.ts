import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'cdx/List',
  component: MatListModule,
  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatDividerModule,
        ThemeModule,
        MatIconModule,
        MatButtonModule,
      ],
    }),
  ],
} as Meta;

const BasicListTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>Basic List</h3>
      <div class="story">
        <mat-list role="list">
          <span matSubheader>Groceries</span>
          <mat-list-item role="listitem">Eggs</mat-list-item>
          <mat-list-item role="listitem">Potatoes</mat-list-item>
          <mat-list-item role="listitem">Bacon</mat-list-item>
          <mat-list-item role="listitem">Jam</mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const LeftIconTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>Left Icon</h3>
      <div class="story">
        <mat-list role="list">
          <span matSubheader>Basic component</span>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            Item 1
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            Item 2
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            Item 3
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            Item 4
          </mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const RightIconTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>Right Icon</h3>
      <div class="story">
        <mat-list role="list">
          <span mat-subheader>Basic component</span>
          <mat-list-item role="listitem">
            <div style="display: flex">
              Item 1
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
          <mat-list-item role="listitem">
            <div style="display: flex">
              Item 2
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
          <mat-list-item role="listitem">
            <div style="display: flex">
              Item 3
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
          <mat-list-item role="listitem">
            <div style="display: flex">
              Item 4
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const LeftAndRightIconTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>Left and Right Icon</h3>
      <div class="story">
        <mat-list role="list" style="width: 300px;">
          <span matSubheader>Basic component</span>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            <div style="display: flex">
              Item 1
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            <div style="display: flex">
              Item 2
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            <div style="display: flex">
              Item 3
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon matListItemIcon>account_circle</mat-icon>
            <div style="display: flex">
              Item 4
              <mat-icon>chevron_right</mat-icon>
            </div>
          </mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const CheckboxItemsTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>List with Selection</h3>
      <div class="story">
        <mat-selection-list role="list">
          <span matSubheader>List with selection</span>
          <mat-list-option color="primary" role="listitem"
            >Books</mat-list-option
          >
          <mat-list-option color="primary" role="listitem"
            >Clogs</mat-list-option
          >
          <mat-list-option color="primary" role="listitem"
            >Loafers</mat-list-option
          >
          <mat-list-option color="primary" role="listitem"
            >Moccasinos</mat-list-option
          >
        </mat-selection-list>
      </div>
    </ng-container>
  `,
});

export const basicList = BasicListTemplate.bind({});
export const leftIcon = LeftIconTemplate.bind({});
export const rightIcon = RightIconTemplate.bind({});
export const leftAndrightIcon = LeftAndRightIconTemplate.bind({});
export const CheckboxItems = CheckboxItemsTemplate.bind({});
