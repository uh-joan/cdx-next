import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'List',
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

const BasicListTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Basic List</h3>
      <div class="story">
        <mat-list role="list">
          <span mat-subheader>Groceries</span>
          <mat-list-item role="listitem">Eggs</mat-list-item>
          <mat-list-item role="listitem">Potatoes</mat-list-item>
          <mat-list-item role="listitem">Bacon</mat-list-item>
          <mat-list-item role="listitem">Jam</mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const LeftIconTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Left Icon</h3>
      <div class="story">
        <mat-list role="list">
          <span mat-subheader>Basic component</span>
          <mat-list-item role="listitem">
            <mat-icon mat-list-icon>account_circle</mat-icon>
            Item 1
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon mat-list-icon>account_circle</mat-icon>
            Item 2
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon mat-list-icon>account_circle</mat-icon>
            Item 3
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon matListIcon>account_circle</mat-icon>
            Item 4
          </mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const RightIconTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Right Icon</h3>
      <div class="story">
        <mat-list role="list">
          <span mat-subheader>Basic component</span>
          <mat-list-item role="listitem"
            >Item 1
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
          <mat-list-item role="listitem"
            >Item 2
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
          <mat-list-item role="listitem"
            >Item 3
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
          <mat-list-item role="listitem"
            >Item 4
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const LeftAndRightIconTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Left and Right Icon</h3>
      <div class="story">
        <mat-list role="list" style="width: 300px;">
          <span mat-subheader>Basic component</span>
          <mat-list-item role="listitem">
            <mat-icon mat-list-icon>account_circle</mat-icon>
            Item 1
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon mat-list-icon>account_circle</mat-icon>
            Item 2
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon mat-list-icon>account_circle</mat-icon>
            Item 3
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
          <mat-list-item role="listitem">
            <mat-icon mat-list-icon>account_circle</mat-icon>
            Item 4
            <mat-icon>chevron_right</mat-icon>
          </mat-list-item>
        </mat-list>
      </div>
    </ng-container>
  `,
});

const CheckboxItemsTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>List with Selection</h3>
      <div class="story">
        <mat-selection-list role="list">
          <span mat-subheader>List with selection</span>
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
