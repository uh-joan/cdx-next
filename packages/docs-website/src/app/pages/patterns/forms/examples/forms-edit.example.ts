import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<form class="form" [formGroup]="form" (ngSubmit)="submit()">
  <section class="form__section">
    <h3 class="form__heading">Alert</h3>

    <mat-form-field appearance="outline" subscriptSizing="dynamic">
      <mat-label>Alert name</mat-label>
      <input matInput formControlName="name" required />
      @if (form.controls.name.hasError('required')) {
        <mat-error>Enter a name for the alert.</mat-error>
      }
    </mat-form-field>

    <mat-form-field appearance="outline" subscriptSizing="dynamic">
      <mat-label>Therapeutic area</mat-label>
      <mat-select formControlName="area" required>
        @for (a of areas; track a) {
          <mat-option [value]="a">{{ a }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
  </section>

  <section class="form__section">
    <h3 class="form__heading">Delivery</h3>

    <mat-form-field appearance="outline" subscriptSizing="dynamic">
      <mat-label>Recipient email</mat-label>
      <input matInput type="email" formControlName="email" required />
      <mat-hint>Where the alert digest is sent.</mat-hint>
      @if (form.controls.email.hasError('required')) {
        <mat-error>Enter an email address.</mat-error>
      }
      @if (form.controls.email.hasError('email')) {
        <mat-error>Enter a valid email address.</mat-error>
      }
    </mat-form-field>

    <mat-checkbox formControlName="weekly">Send a weekly summary</mat-checkbox>
  </section>

  <div class="form__actions">
    <button matButton type="button" (click)="reset()">Cancel</button>
    <button matButton="filled" type="submit" [disabled]="saving()">
      {{ saving() ? 'Saving…' : 'Save alert' }}
    </button>
  </div>

  @if (saved()) {
    <p class="form__saved" role="status">Saved.</p>
  }
</form>`;

const styleCode = `.form {
  display: flex;
  flex-direction: column;
  gap: var(--hlx-spacing-4, 32px);
  max-width: 480px;
  padding: 1rem;
}
.form__section {
  display: flex;
  flex-direction: column;
  gap: var(--hlx-spacing-2, 16px);
}
.form__heading {
  margin: 0;
  font: var(--sys-headline-small, 600 18px/24px 'Source Sans 3', sans-serif);
}
.form mat-form-field { width: 100%; }
.form__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--hlx-spacing-1, 8px);
}
.form__saved {
  margin: 0;
  color: var(--hlx-text-positive, #2f7a3b);
}`;

@Component({
  template: htmlCode,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatSelectModule,
    MatCheckbox,
    MatButton,
  ],
  styles: [styleCode],
})
class SampleComponent {
  private readonly fb = inject(FormBuilder);

  readonly areas = ['Oncology', 'Immunology', 'Neurology'];
  readonly saving = signal(false);
  readonly saved = signal(false);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    area: ['Oncology', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    weekly: [true],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    // Simulate a save; in an app this is the service call.
    setTimeout(() => {
      this.saving.set(false);
      this.saved.set(true);
    }, 600);
  }

  reset(): void {
    this.form.reset({ area: 'Oncology', weekly: true });
    this.saved.set(false);
  }
}

export const FormsEdit: InputViewerComponent = {
  exampleName: 'Edit form',
  dynamicComponent: SampleComponent,
  height: 58,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// + Material form-field, input, select, checkbox, button

// Typed reactive form; validation shows on blur/submit via mat-error; submit is
// disabled while saving. One column, sections spaced with --hlx-spacing-*.
@Component({ /* … */ })
export class AlertEditForm {
  private readonly fb = inject(FormBuilder);
  readonly saving = signal(false);
  readonly form = this.fb.group({
    name: ['', Validators.required],
    area: ['Oncology', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    weekly: [true],
  });

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true); /* persist, then saving.set(false) */
  }
}`,
};
