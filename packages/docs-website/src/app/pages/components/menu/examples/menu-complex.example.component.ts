import { CommonModule } from '@angular/common';
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
import { MatMenuModule } from '@angular/material/menu';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <button
        mat-button
        [matMenuTriggerFor]="menu"
        aria-label="Example menu with 
        complex content in expanded area"
        color="primary"
    >
        Complex Menu
    </button>
    <mat-menu #menu="matMenu" 
        yPosition="below">
        <div
            (click)="$event.stopPropagation()"
            class="panel">
            <mat-form-field appearance="fill">
                <mat-label>Search</mat-label>
                <input matInput type="text" 
                    [(ngModel)]="textInput" />
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

            <section
                [formGroup]="toppings">
                <h2>Select your toppings:</h2>
                <p class="mat-body-2 no-margin">
                    <mat-checkbox 
                        formControlName="pepperoni"
                        >Pepperoni</mat-checkbox>
                </p>
                <p class="no-margin">
                    <mat-checkbox 
                        formControlName="extracheese"
                        >Extra Cheese</mat-checkbox>
                </p>
                <p >
                    <mat-checkbox 
                        formControlName="mushroom"
                        >Mushroom</mat-checkbox>
                </p>
            </section>

            <section
                [formGroup]="toppings">
                <h3>You chose:</h3>
                <span class="mat-small">
                    {{ toppings.value | json }}
                </span>
            </section>
        </div>
    </mat-menu>
</div>`;

const styleCode = `.story {
    margin: 10rem;
}
.panel {
    width: 16rem;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    padding: 20px;

    .no-margin {
        margin: 0;
    }
}`;

@Component({
  template: htmlCode,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  styles: styleCode,
})
class SampleComponent {
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

export const MenuComplexComponent: InputViewerComponent = {
  exampleName: 'Menu Complex',
  dynamicComponent: SampleComponent,
  height: 70,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    template: htmlCode,
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    styles: styleCode,
})
class SampleComponent {
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
}`,
};
