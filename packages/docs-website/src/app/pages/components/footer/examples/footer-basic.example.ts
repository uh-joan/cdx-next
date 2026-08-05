import { Component } from '@angular/core';
import { HelixFooterComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <footer hlx-footer></footer>
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

export const FooterBasicComponent: InputViewerComponent = {
  exampleName: 'Footer Basic',
  dynamicComponent: SampleComponent,
  height: 27,
  verticalView: true,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { HelixFooter } from '@cdx/ngx-branding';

@Component({
  template: htmlCode,
  imports: [HelixFooterComponent],
  styles: [styleCode],
})
class SampleComponent {}`,
};
