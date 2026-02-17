import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <h4>Small</h4>
    <div class="story__section">
        <mat-icon [inline]="true" 
            class="font-sm">check_circle</mat-icon>
        <mat-icon [inline]="true"
            class="font-sm">info</mat-icon>
        <mat-icon [inline]="true" 
            class="font-sm">get_app</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Medium</h4>
    <div class="story__section">
        <mat-icon [inline]="true"
            class="font-m">whatshot</mat-icon>
        <mat-icon [inline]="true"
            class="font-m">storage</mat-icon>
        <mat-icon [inline]="true"
            class="font-m">assignment</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Large</h4>
    <div class="story__section">
        <mat-icon>language</mat-icon>
        <mat-icon>report_problem</mat-icon>
        <mat-icon>settings</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Extra Large</h4>
    <div class="story__section">
        <mat-icon [inline]="true"
            class="font-xl">view_agenda</mat-icon>
        <mat-icon [inline]="true" 
            class="font-xl">view_day</mat-icon>
        <mat-icon [inline]="true" 
            class="font-xl">rss_feed</mat-icon>
    </div>
</div>`;

const styleCode = `.story {
    padding: 1rem;

    &__section {
        display: flex;
        justify-content: space-between;
    }

    .font-sm {
        font-size: 16px;
    }
    
    .font-m {
        font-size: 20px;
    }

    .font-xl {
        font-size: 32px;
    }
}`;

@Component({
  template: htmlCode,
  imports: [MatIconModule],
  styles: styleCode,
})
class SampleComponent {}

export const IconsSizesComponent: InputViewerComponent = {
  exampleName: 'Icons sizes',
  dynamicComponent: SampleComponent,
  height: 70,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    template: htmlCode,
    imports: [
        MatIconModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
