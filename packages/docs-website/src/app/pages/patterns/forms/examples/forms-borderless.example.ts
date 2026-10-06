import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="bl">
  <!-- Inline-edit title: reads as text, shows its outline on hover/focus -->
  <section class="bl__row">
    <span class="bl__label">Inline edit</span>
    <mat-form-field class="hlx-field-borderless bl__title" appearance="outline" subscriptSizing="dynamic">
      <input matInput [value]="title()" (input)="title.set($any($event.target).value)"
        aria-label="Alert name" />
    </mat-form-field>
  </section>

  <!-- Toolbar search: no boxed field competing with the toolbar -->
  <section class="bl__row">
    <span class="bl__label">Toolbar search</span>
    <mat-form-field class="hlx-field-borderless hlx-input-small bl__search" appearance="outline" subscriptSizing="dynamic">
      <mat-icon matPrefix>search</mat-icon>
      <input matInput placeholder="Search documents" aria-label="Search documents" />
    </mat-form-field>
  </section>

  <!-- For contrast: the standard boxed field -->
  <section class="bl__row">
    <span class="bl__label">Standard</span>
    <mat-form-field class="bl__title" appearance="outline" subscriptSizing="dynamic">
      <mat-label>Alert name</mat-label>
      <input matInput value="FDA Phase III endpoints" />
    </mat-form-field>
  </section>
</div>`;

const styleCode = `.bl { padding: 1rem; display: flex; flex-direction: column; gap: var(--hlx-spacing-2, 16px); max-width: 480px; }
.bl__row { display: flex; align-items: center; gap: var(--hlx-spacing-2, 16px); }
.bl__label { flex: 0 0 110px; color: var(--hlx-text-secondary, #59676b); font-size: 13px; }
.bl__title { flex: 1 1 auto; }
.bl__search { flex: 1 1 auto; }
.bl__search mat-icon { color: var(--hlx-icon-secondary, #8a9699); }`;

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInput, MatIcon],
  styles: [styleCode],
})
class SampleComponent {
  readonly title = signal('FDA Phase III endpoint requirements');
}

export const FormsBorderless: InputViewerComponent = {
  exampleName: 'Borderless field variant',
  dynamicComponent: SampleComponent,
  height: 32,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, signal } from '@angular/core';
// + Material form-field, input, icon

// hlx-field-borderless hides the outline at rest and reveals it on hover/focus —
// for inline-edit titles and toolbar search, where a boxed field is too heavy.
// It composes with density (hlx-input-small) and the usual field states.
@Component({
  template: \`
    <mat-form-field class="hlx-field-borderless" appearance="outline">
      <input matInput [value]="title()" (input)="title.set($any($event.target).value)" />
    </mat-form-field>
  \`,
})
export class InlineEditField {
  readonly title = signal('FDA Phase III endpoint requirements');
}`,
};
