import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <ngx-skeleton-loader count="5" />
</div>`;

const styleCode = `.story {
  width: 20rem;
  height: 12rem;
  padding: 1rem;
}`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: styleCode,
})
class SampleComponent {}

export const SkeletonLoaderLinear: InputViewerComponent = {
  exampleName: 'Skeleton loader Linear',
  dynamicComponent: SampleComponent,
  height: 25,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  standalone: true,
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: styleCode,
})
class SampleComponent {}`,
};
