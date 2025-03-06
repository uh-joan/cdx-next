// TODO ADJUST THE HEADER TO REMOVE THE ERROR IN CONSOLE
import { Component } from '@angular/core';
import { HelixHeaderComponent } from '@cdx/ngx-branding';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <header hlx-header></header>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  standalone: true,
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
    standalone: true,
    template: htmlCode,
    imports: [
        HelixHeaderModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
