import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <ngx-skeleton-loader count="5" appearance="circle" />
</div>`;

const styleCode = `.story {
  width: 16rem;
  height: 4rem;
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: [styleCode],
})
class SampleComponent {}

export const SkeletonLoaderCircular: InputViewerComponent = {
  exampleName: 'Skeleton loader circular',
  dynamicComponent: SampleComponent,
  height: 22,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: [styleCode],
})
class SampleComponent {}`,
};
