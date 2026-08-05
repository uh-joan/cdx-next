import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HelixNotificationComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <form class="story__form-container" [formGroup]="notificationForm">
        <div class="story__form">
            <label for="presentation">Presentation</label>
            <mat-select id="presentation" formControlName="presentation">
                <mat-option value="inline">Inline</mat-option>
                <mat-option value="banner">Banner</mat-option>
            </mat-select>
        </div>
        <div class="story__form">
            <mat-label for="title">Title</mat-label>
            <input id="title" type="text" formControlName="title" />
        </div>
        <div class="story__form">
            <label for="dismissable">Dismissable</label>
            <input id="dismissable" type="checkbox" formControlName="dismissable" />
        </div>
        <div class="story__form">
            <label for="action">Action</label>
            <input id="action" type="text" formControlName="action" />
        </div>
        <div class="story__form">
            <label for="severity">Severity</label>
            <mat-select id="severity" formControlName="severity">
                <mat-option value="info">Info</mat-option>
                <mat-option value="success">Success</mat-option>
                <mat-option value="warn">Warn</mat-option>
            </mat-select>
        </div>
    </form>

    <hlx-notification
        [severity]="notificationForm.get('severity')?.value"
        [action]="notificationForm.get('action')?.value"
        [presentation]="notificationForm.get('presentation')?.value"
        [dismissable]="notificationForm.get('dismissable')?.value"
        [title]="notificationForm.get('title')?.value"
    >
        Notification message
    </hlx-notification>
</div>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__form-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__form {
        display: flex;
        flex-direction: column;
        min-width: 8rem;

    }
}`;

@Component({
  template: htmlCode,
  imports: [
    HelixNotificationComponent,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
  ],
  styles: [styleCode],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class SampleComponent {
  notificationForm: FormGroup;
  private fb = inject(FormBuilder);

  constructor() {
    this.notificationForm = this.fb.group({
      presentation: ['inline'],
      title: [''],
      dismissable: [false],
      action: [''],
      severity: ['info'],
    });
  }
}

export const PaginatorBasicComponent: InputViewerComponent = {
  exampleName: 'Paginator',
  dynamicComponent: SampleComponent,
  height: 70,
  hideCss: true,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NotificationModule } from '@cdx/ngx-branding';

@Component({
    template: htmlCode,
    imports: [
        NotificationModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule
    ],
    styles: [styleCode],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class SampleComponent {
    notificationForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.notificationForm = this.fb.group({
        presentation: ['inline'],
        title: [''],
        dismissable: [false],
        action: [''],
        severity: ['info'],
        });
    }
}`,
};
