import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    No Animation:
    <ngx-skeleton-loader animation="false"></ngx-skeleton-loader>
    progress animation:
    <ngx-skeleton-loader animation="progress"></ngx-skeleton-loader>
    progress-dark animation:
    <ngx-skeleton-loader animation="progress-dark"></ngx-skeleton-loader>
    pulse animation:
    <ngx-skeleton-loader animation="pulse"></ngx-skeleton-loader>
  </div>`;

const styleCode = `.story {
  width: 16rem;
  height: 16rem;
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: styleCode,
})
class SampleComponent {}

export const SkeletonLoaderWithAnimations: InputViewerComponent = {
  exampleName: 'Skeleton loader with animations',
  dynamicComponent: SampleComponent,
  height: 22,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: styleCode,
})
class SampleComponent {}`,
};
