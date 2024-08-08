import { Overlay } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_MENU_SCROLL_STRATEGY,
  MatMenuModule,
} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Menu',
  component: MatMenuModule,
} as Meta;

export const BasicMenu = () => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatMenuModule,
      MatButtonModule,
      ThemeModule,
    ],
  },
  template: html`
    <h3>Basic Menu</h3>
    <div class="story">
      <button mat-flat-button [matMenuTriggerFor]="menu" color="primary">
        Menu
      </button>
      <mat-menu #menu="matMenu" role="menu" yPosition="below">
        <button mat-menu-item role="menuitem">Item 1</button>
        <button mat-menu-item role="menuitem" disabled>
          Item 2 (Disabled option)
        </button>
        <button mat-menu-item role="menuitem">Item 3</button>
      </mat-menu>
    </div>
  `,
});

export const MenuWithIcons = () => ({
  moduleMetadata: {
    imports: [MatMenuModule, MatButtonModule, MatIconModule, ThemeModule],
    providers: [
      {
        provide: MAT_MENU_SCROLL_STRATEGY,
        deps: [Overlay],
        useFactory: (overlay: Overlay) => () =>
          overlay.scrollStrategies.block(),
      },
    ],
  },
  template: html`
    <h3>Menu With Icons</h3>
    <div class="story">
      <button mat-button [matMenuTriggerFor]="menu2">
        <mat-icon>settings</mat-icon>
      </button>
      <mat-menu #menu2="matMenu" role="menu" yPosition="below">
        <button mat-menu-item role="menuitem but-inline">
          <mat-icon>invert_colors</mat-icon>
          <span>Item 1</span>
        </button>
        <button mat-menu-item role="menuitem but-inline">
          <mat-icon>invert_colors</mat-icon>
          <span>Item 2</span>
        </button>
      </mat-menu>
    </div>
  `,
});

const customMenuTemplate = html`
  <button
    mat-button
    [matMenuTriggerFor]="menu"
    aria-label="Example menu with complex content in expanded area"
    color="primary"
  >
    Complex Menu
  </button>
  <mat-menu #menu="matMenu" class="my-menu-panel" yPosition="below">
    <div
      (click)="$event.stopPropagation()"
      style="display: flex; flex-direction: column; justify-content: center; padding: 20px"
    >
      <mat-form-field appearance="fill">
        <mat-label>Search</mat-label>
        <input matInput type="text" [(ngModel)]="textInput" />
        <button
          *ngIf="textInput"
          matSuffix
          mat-icon-button
          aria-label="Clear"
          (click)="textInput = ''"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>

      <section class="example-section" [formGroup]="toppings">
        <h2>Select your toppings:</h2>
        <p>
          <mat-checkbox formControlName="pepperoni">Pepperoni</mat-checkbox>
        </p>
        <p>
          <mat-checkbox formControlName="extracheese"
            >Extra Cheese</mat-checkbox
          >
        </p>
        <p>
          <mat-checkbox formControlName="mushroom">Mushroom</mat-checkbox>
        </p>
      </section>

      <section class="example-section" [formGroup]="toppings">
        <h3>You chose:</h3>
        {{ toppings.value | json }}
      </section>
    </div>
  </mat-menu>
`;

@Component({ selector: 'demo-custom-menu', template: customMenuTemplate })
class CustomMenuComponent {
  title = 'test';
  textInput = '';

  toppings: FormGroup;

  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }
}

export const MenuWithComplexContent = () => ({
  moduleMetadata: {
    imports: [
      MatMenuModule,
      MatInputModule,
      MatIconModule,
      MatCheckboxModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatButtonModule,
      BrowserAnimationsModule,
      ThemeModule,
    ],
    declarations: [CustomMenuComponent],
  },
  template: html` <div class="story">
    <demo-custom-menu></demo-custom-menu>
  </div>`,
});

MenuWithComplexContent.parameters = {
  docs: { source: { code: customMenuTemplate } },
};
