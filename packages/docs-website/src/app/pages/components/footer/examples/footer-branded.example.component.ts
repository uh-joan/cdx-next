import { Component } from '@angular/core';
import { HelixFooterComponent } from '@cdx/ngx-branding';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <footer hlx-footer branded></footer>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [HelixFooterComponent],
  styles: styleCode,
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
import { HelixFooterComponent } from '@cdx/ngx-branding';


@Component({
  standalone: true,
  template: htmlCode,
  imports: [HelixFooterComponent],
  styles: styleCode,
})
class SampleComponent {}`,
};
