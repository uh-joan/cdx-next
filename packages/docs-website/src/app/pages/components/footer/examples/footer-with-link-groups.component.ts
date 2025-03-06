import { Component } from '@angular/core';
import {
  HelixFooterComponent,
  HelixFooterGroupComponent,
  HelixFooterGroupTitleDirective,
} from '@cdx/ngx-branding';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <footer hlx-footer groupCompanyLinks>
    <hlx-footer-group>
      <hlx-footer-group-title>
        Company</hlx-footer-group-title>
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
      <hlx-footer-group-title>
        Title</hlx-footer-group-title>
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
      <hlx-footer-group-title>
        Title</hlx-footer-group-title>
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
  standalone: true,
  template: htmlCode,
  imports: [
    HelixFooterComponent,
    HelixFooterGroupComponent,
    HelixFooterGroupTitleDirective,
  ],
  styles: styleCode,
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
  standalone: true,
  template: htmlCode,
  imports: [
    HelixFooterComponent,
    HelixFooterGroupComponent,
    HelixFooterGroupTitleDirective,
  ],
  styles: styleCode,
})
class SampleComponent {}`,
};
