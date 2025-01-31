import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<mat-accordion class="story">
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title>
                Expansion title
            </mat-panel-title>
            <mat-panel-description>
                Summary of the content
            </mat-panel-description>
        </mat-expansion-panel-header>
        <p>Primary content of the panel.</p>
    </mat-expansion-panel>
    <mat-expansion-panel>
        <mat-expansion-panel-header>
            <mat-panel-title>
                Expansion title
            </mat-panel-title>
            <mat-panel-description>
                Summary of the content
            </mat-panel-description>
        </mat-expansion-panel-header>
        <p>Primary content of the panel.</p>
    </mat-expansion-panel>
</mat-accordion>`;

const styleCode = `.story {
    height: 12rem;
}`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatExpansionModule],
  styles: styleCode,
})
class SampleComponent {}

export const ExpansionPanelComponent: InputViewerComponent = {
  exampleName: 'Expansion Panel',
  dynamicComponent: SampleComponent,
  height: 45,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
        MatExpansionModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
