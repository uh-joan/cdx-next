import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-tab-group fitInkBarToContent 
    class="hlx-tab-invert">
    <mat-tab label="First">Code</mat-tab>
    <mat-tab label="Second">More code</mat-tab>
  </mat-tab-group>
</div>`;

const styleCode = `.story {
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatTabsModule],
  styles: styleCode,
})
class SampleComponent {}

export const TabsInvertedComponent: InputViewerComponent = {
  exampleName: 'Tabs Inverted',
  dynamicComponent: SampleComponent,
  height: 30,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    template: htmlCode,
    imports: [
      MatTabsModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
