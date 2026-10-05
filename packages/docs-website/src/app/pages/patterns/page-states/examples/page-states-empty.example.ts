import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { HelixEmptyStateComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<hlx-empty-state
  heading="No alerts yet"
  message="Alerts you create will appear here."
>
  <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent">
    Create an alert
  </button>
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

export const PageStatesEmpty: InputViewerComponent = {
  exampleName: 'Empty state',
  dynamicComponent: SampleComponent,
  height: 24,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { HelixEmptyStateComponent } from '@cdx/ngx-branding';

@Component({
  selector: 'app-empty-state-example',
  templateUrl: './empty-state-example.html',
  imports: [HelixEmptyStateComponent, MatButton],
})
export class EmptyStateExample {}`,
};
