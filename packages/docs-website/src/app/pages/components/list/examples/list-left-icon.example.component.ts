import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-list role="list">
    <span matSubheader>Basic component</span>
    <mat-list-item role="listitem">
        <mat-icon 
            matListItemIcon>account_circle</mat-icon>
        Item 1
    </mat-list-item>
    <mat-list-item role="listitem">
        <mat-icon 
            matListItemIcon>account_circle</mat-icon>
        Item 2
    </mat-list-item>
    <mat-list-item role="listitem">
        <mat-icon 
            matListItemIcon>account_circle</mat-icon>
        Item 3
    </mat-list-item>
    <mat-list-item role="listitem">
        <mat-icon 
            matListItemIcon>account_circle</mat-icon>
        Item 4
    </mat-list-item>
    </mat-list>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatIconModule, MatListModule],
  styles: styleCode,
})
class SampleComponent {}

export const IconsColorsComponent: InputViewerComponent = {
  exampleName: 'List Left Icon',
  dynamicComponent: SampleComponent,
  height: 47,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
        MatIconModule,
        MatListModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
