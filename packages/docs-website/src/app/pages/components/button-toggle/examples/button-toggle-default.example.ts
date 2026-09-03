import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-button-toggle-group
        class="hlx-button-toggle-container"
        name="switcher"
        aria-label="Switcher">
        <mat-button-toggle
            value="fielded"
            checked
            role="button"
            >Fielded
        </mat-button-toggle>
        <mat-button-toggle
            value="expert"
            role="button"
            >Expert
        </mat-button-toggle>
    </mat-button-toggle-group>
    <mat-divider></mat-divider>
    <br/>
    <h6>Light theme</h6>
    <mat-button-toggle-group
        class="hlx-button-toggle-container hlx-button-toggle-invert"
        name="switcher"
        aria-label="Switcher">
        <mat-button-toggle
            value="fielded"
            checked
            role="button"
            >Fielded
        </mat-button-toggle>
        <mat-button-toggle
            value="expert"
            role="button"
            >Expert
        </mat-button-toggle>
    </mat-button-toggle-group>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatButtonToggleModule, MatDividerModule],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonToggleDefaultComponent: InputViewerComponent = {
  exampleName: 'Default Button Toggle',
  dynamicComponent: SampleComponent,
  height: 36,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
    template: htmlCode,
    imports: [
        MatButtonToggleModule,
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
