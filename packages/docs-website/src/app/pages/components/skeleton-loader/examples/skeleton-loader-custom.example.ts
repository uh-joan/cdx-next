import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <div class="story__top">
      <ngx-skeleton-loader
        appearance="circle"
        count="1"
        [theme]="{ width: '120px', height: '120px', background: '#f3e5f5'}"
      />

      <div class="story__top-right">
        <ngx-skeleton-loader count="3"
          [theme]="{width: '100%', height: '30px'}"
        ></ngx-skeleton-loader>
      </div>
    </div>

    <ngx-skeleton-loader
      count="5"
      [theme]="{width: '100%', height: '10px'}"
    ></ngx-skeleton-loader>
</div>`;

const styleCode = `.story {
  width: 100%;
  padding: 1rem;

  &__top {
    display: flex
  }

  &__top-right {
    width: 100%;
  }
}`;

@Component({
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: [styleCode],
})
class SampleComponent {}

export const SkeletonLoaderCustom: InputViewerComponent = {
  exampleName: 'Skeleton loader Custom',
  dynamicComponent: SampleComponent,
  height: 38,
  htmlCode: htmlCode,
  verticalView: true,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: [styleCode],
})
class SampleComponent {}`,
};
