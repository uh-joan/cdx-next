// TODO ADJUST THE HEADER TO REMOVE THE ERROR IN CONSOLE
import { Component } from '@angular/core';
import {
  HelixHeaderComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <header hlx-header branded(false)>
          <hlx-header-product-name>Product name</hlx-header-product-name>
    </header>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [HelixHeaderComponent, HelixHeaderProductNameOrLogoComponent],
  styles: [styleCode],
})
class SampleComponent {}

export const HeaderUnbrandedComponent: InputViewerComponent = {
  exampleName: 'Header With Only Product Name',
  dynamicComponent: SampleComponent,
  height: 27,
  hideCss: true,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import {
  HelixHeaderComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';


@Component({
  template: htmlCode,
  imports: [HelixHeaderComponent, HelixHeaderProductNameOrLogoComponent],
  styles: [styleCode],
})
class SampleComponent {}`,
};
