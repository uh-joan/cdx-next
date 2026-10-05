import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-forms',
  templateUrl: './forms.html',
  styleUrl: '../pattern-page.scss',
  imports: [Page, ExampleViewer, MatDivider, Highlight],
})
export class Forms {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);

  formSnippet = `private readonly fb = inject(FormBuilder);

readonly form = this.fb.group({
  name: ['', Validators.required],
  area: ['oncology', Validators.required],
  notifyByEmail: [true],
});

readonly saving = signal(false);

submit(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }
  this.saving.set(true);
  // … persist, then this.saving.set(false)
}`;

  errorSnippet = `<mat-form-field>
  <mat-label>Alert name</mat-label>
  <input matInput formControlName="name" required />
  @if (form.controls.name.hasError('required')) {
    <mat-error>Enter a name for the alert.</mat-error>
  }
</mat-form-field>`;
}
