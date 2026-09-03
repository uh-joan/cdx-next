import { Component } from '@angular/core';
import {
  HelixFooterComponent,
  HelixFooterGroupComponent,
} from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <footer hlx-footer groupCompanyLinks()>
    <hlx-footer-group>
      <div hlxFooterGroupTitle>
        Company</div>
      <a hlxFooterLink 
        href="#">Legal center</a>
      <a hlxFooterLink 
        href="#">Privacy notice</a>
      <a hlxFooterLink 
        href="#">Cookie policy</a>
      <a hlxFooterLink 
        href="#">Manage cookie preferences</a>
    </hlx-footer-group>
    <hlx-footer-group>
      <div hlxFooterGroupTitle>
        Title</div>
      <a hlxFooterLink 
        href="#">link-item-1</a>
      <a hlxFooterLink 
        href="#">link-item-2</a>
      <a hlxFooterLink 
        href="#">link-item-3</a>
      <a hlxFooterLink 
        href="#">link-item-4</a>
      <a hlxFooterLink 
        href="#">link-item-5</a>
      <a hlxFooterLink 
        href="#">link-item-6</a>
    </hlx-footer-group>
    <hlx-footer-group>
      <div hlxFooterGroupTitle>
        Title</div>
      <a hlxFooterLink 
        href="#">link-item-1</a>
      <a hlxFooterLink 
        href="#">link-item-2</a>
      <a hlxFooterLink 
        href="#">link-item-3</a>
      <a hlxFooterLink 
        href="#">link-item-4</a>
      <a hlxFooterLink 
        href="#">link-item-5</a>
      <a hlxFooterLink 
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
  cssCode: styleCode,
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
