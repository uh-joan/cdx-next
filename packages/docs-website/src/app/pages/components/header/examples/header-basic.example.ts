import { Component } from '@angular/core';
import { HelixHeaderComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <header hlx-header></header>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [HelixHeaderComponent],
  styles: styleCode,
})
class SampleComponent {}

export const ExpansionPanelComponent: InputViewerComponent = {
  exampleName: 'Header Basic',
  dynamicComponent: SampleComponent,
  height: 27,
  hideCss: true,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { HelixHeaderModule } from '@cdx/ngx-branding';

@Component({
    template: htmlCode,
    imports: [
        HelixHeaderModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
