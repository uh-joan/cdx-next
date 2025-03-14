import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  imports: [PagesCommonModule],
})
export class SkeletonLoaderComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = 'npm install ngx-skeleton-loader';

  complexModule = `...
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
...

@NgModule({
  declarations: [
    YourAppComponent
  ],
  imports: [
    ...
    NgxSkeletonLoaderModule.forRoot({ 
      animation: 'pulse', 
      loadingText: 'This item is actually loading...' }),
    ...
  ],
  providers: [],
  bootstrap: [YourAppComponent]
})

export class YourAppComponent {}`;

  complexModule2 = `...
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
...

@NgModule({
  declarations: [
    YourAppComponent
  ],
  imports: [
    ...
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        // Enabliong theme combination
        extendsFromRoot: true,
        // ... list of CSS theme attributes
        height: '30px',
      },
    }),
    ...
  ],
  providers: [],
  bootstrap: [YourAppComponent]
})

export class YourAppComponent {}`;

  sampleList = Object.values(samples);
}
