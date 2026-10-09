import { Component } from '@angular/core';
import { HelixFooterComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <footer hlx-footer branded></footer>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [HelixFooterComponent],
  styles: [styleCode],
})
class SampleComponent {}

export const FooterBrandedComponent: InputViewerComponent = {
  exampleName: 'Footer Branded',
  dynamicComponent: SampleComponent,
  height: 27,
  verticalView: true,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { HelixFooter } from '@hlx/ngx-branding';


@Component({
  template: htmlCode,
  imports: [HelixFooterComponent],
  styles: [styleCode],
})
class SampleComponent {}`,
};
