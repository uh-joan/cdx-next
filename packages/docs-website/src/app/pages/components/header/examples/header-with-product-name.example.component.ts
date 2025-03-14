// TODO ADJUST THE HEADER TO REMOVE THE ERROR IN CONSOLE
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <header hlx-header>
    <hlx-header-product-name>
        Product name</hlx-header-product-name>
    <div style="display: 
        flex; gap: 30px; margin: 0 20px; font-size: 14px;">
      <a>First</a>
      <a>Second</a>
      <a>Third</a>
      <a>Forth</a>
      <a>Fifth</a>
    </div>

    <hlx-header-global>
      <div
        style="display: flex;
             align-items: center;
            justify-content: flex-end;
              gap: 10px;
              width: 100%;
              height: 100%;"
      >
        <mat-icon>language</mat-icon>
        <mat-icon>apps</mat-icon>
        <mat-icon class="material-icons-outlined">
            account_circle</mat-icon>
      </div>
    </hlx-header-global>
  </header>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
    MatIconModule,
  ],
  styles: styleCode,
})
class SampleComponent {}

export const HeaderWithProductNameComponent: InputViewerComponent = {
  exampleName: 'Header With Product Name',
  dynamicComponent: SampleComponent,
  height: 54,
  hideCss: true,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  HelixFooterGroupComponent,
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';

@Component({
  template: htmlCode,
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
    MatIconModule,
  ],
  styles: styleCode,
})
class SampleComponent {}`,
};
