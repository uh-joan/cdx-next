import { Component } from '@angular/core';
import {
  HelixFooterComponent,
  HelixFooterGroupComponent,
} from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <footer hlx-footer groupCompanyLinks()>
    <hlx-footer-group>
      <div hlx-footer-group-title>
        Company</div>
      <a hlx-footer-link 
        href="#">Legal center</a>
      <a hlx-footer-link 
        href="#">Privacy notice</a>
      <a hlx-footer-link 
        href="#">Cookie policy</a>
      <a hlx-footer-link 
        href="#">Manage cookie preferences</a>
    </hlx-footer-group>
    <hlx-footer-group>
      <div hlx-footer-group-title>
        Title</div>
      <a hlx-footer-link 
        href="#">link-item-1</a>
      <a hlx-footer-link 
        href="#">link-item-2</a>
      <a hlx-footer-link 
        href="#">link-item-3</a>
      <a hlx-footer-link 
        href="#">link-item-4</a>
      <a hlx-footer-link 
        href="#">link-item-5</a>
      <a hlx-footer-link 
        href="#">link-item-6</a>
    </hlx-footer-group>
    <hlx-footer-group>
      <div hlx-footer-group-title>
        Title</div>
      <a hlx-footer-link 
        href="#">link-item-1</a>
      <a hlx-footer-link 
        href="#">link-item-2</a>
      <a hlx-footer-link 
        href="#">link-item-3</a>
      <a hlx-footer-link 
        href="#">link-item-4</a>
      <a hlx-footer-link 
        href="#">link-item-5</a>
      <a hlx-footer-link 
        href="#">link-item-6</a>
    </hlx-footer-group>
  </footer>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [HelixFooterComponent, HelixFooterGroupComponent],
  styles: [styleCode],
})
class SampleComponent {}

export const FooterWithLinkGroupsComponent: InputViewerComponent = {
  exampleName: 'Footer With Link Groups',
  dynamicComponent: SampleComponent,
  height: 82,
  hideCss: true,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import {
  HelixFooterComponent,
  HelixFooterGroupComponent,
  HelixFooterGroupTitleDirective,
} from '@cdx/ngx-branding';

@Component({
  template: htmlCode,
  imports: [
    HelixFooterComponent,
    HelixFooterGroupComponent,
    HelixFooterGroupTitleDirective,
  ],
  styles: [styleCode],
})
class SampleComponent {}`,
};
