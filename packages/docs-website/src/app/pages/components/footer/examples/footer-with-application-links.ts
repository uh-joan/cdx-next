import { Component } from '@angular/core';
import { HelixFooterComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <footer hlx-footer>
    <a hlxFooterLink href="#">Legal center</a>
    <a hlxFooterLink href="#">Privacy notice</a>
    <a hlxFooterLink href="#">Cookie policy</a>
    <a hlxFooterLink href="#">
        Manage cookie preferences</a>
  </footer>
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

export const FooterWithApplicationLinksComponent: InputViewerComponent = {
  exampleName: 'Footer With Applications Links',
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
