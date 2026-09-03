import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-list role="list" style="width: 300px;">
        <span matSubheader>Basic component</span>
        <mat-list-item role="listitem">
            <mat-icon matListItemIcon
                >account_circle</mat-icon>
            <div style="display: flex">
            Item 1
            <mat-icon>chevron_right</mat-icon>
            </div>
        </mat-list-item>
        <mat-list-item role="listitem">
            <mat-icon matListItemIcon
                >account_circle</mat-icon>
            <div style="display: flex">
            Item 2
            <mat-icon>chevron_right</mat-icon>
            </div>
        </mat-list-item>
        <mat-list-item role="listitem">
            <mat-icon matListItemIcon
                >account_circle</mat-icon>
            <div style="display: flex">
            Item 3
            <mat-icon>chevron_right</mat-icon>
            </div>
        </mat-list-item>
        <mat-list-item role="listitem">
            <mat-icon matListItemIcon
                >account_circle</mat-icon>
            <div style="display: flex">
            Item 4
            <mat-icon>chevron_right</mat-icon>
            </div>
        </mat-list-item>
    </mat-list>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatIconModule, MatListModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ListLeftRightComponent: InputViewerComponent = {
  exampleName: 'List Left Right Icon',
  dynamicComponent: SampleComponent,
  height: 64,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
    template: htmlCode,
    imports: [
        MatIconModule,
        MatListModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
