import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { HelixEmptyStateComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<hlx-empty-state
  tone="error"
  heading="Couldn't load alerts"
  message="Something went wrong. Please try again."
>
  <button hlx-empty-state-actions matButton="outlined">Retry</button>
</hlx-empty-state>`;

const styleCode = `:host {
  display: block;
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [HelixEmptyStateComponent, MatButton],
  styles: [styleCode],
})
class SampleComponent {}

export const PageStatesError: InputViewerComponent = {
  exampleName: 'Error state',
  dynamicComponent: SampleComponent,
  height: 24,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { HelixEmptyStateComponent } from '@hlx/ngx-branding';

// tone="error" switches the icon colour and adds role="alert", so the
// failure is announced to assistive technology.
@Component({
  selector: 'app-error-state-example',
  templateUrl: './error-state-example.html',
  imports: [HelixEmptyStateComponent, MatButton],
})
export class ErrorStateExample {}`,
};
