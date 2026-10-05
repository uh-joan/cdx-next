import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

// A skeleton shaped like the list it replaces: an avatar plus two lines per
// row, so the layout does not jump when the real rows arrive.
const htmlCode = `<ul class="rows">
  @for (row of [1, 2, 3]; track row) {
    <li class="row">
      <ngx-skeleton-loader
        appearance="circle"
        [theme]="{ width: '40px', height: '40px', margin: '0' }"
      />
      <div class="row__text">
        <ngx-skeleton-loader [theme]="{ width: '40%', height: '14px', margin: '0' }" />
        <ngx-skeleton-loader [theme]="{ width: '80%', height: '12px', margin: '0' }" />
      </div>
    </li>
  }
</ul>`;

const styleCode = `.rows {
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.row__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}`;

@Component({
  template: htmlCode,
  imports: [NgxSkeletonLoaderModule],
  styles: [styleCode],
})
class SampleComponent {}

export const PageStatesLoading: InputViewerComponent = {
  exampleName: 'Loading skeleton',
  dynamicComponent: SampleComponent,
  height: 28,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-loading-skeleton-example',
  templateUrl: './loading-skeleton-example.html',
  imports: [NgxSkeletonLoaderModule],
})
export class LoadingSkeletonExample {}`,
};
