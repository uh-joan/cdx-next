import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <button matButton="filled" 
        [matMenuTriggerFor]="menu">
        Menu
    </button>
    <mat-menu #menu="matMenu" 
        role="menu" yPosition="below">
        <button mat-menu-item 
            role="menuitem">Item 1</button>
        <button mat-menu-item 
            role="menuitem" disabled>
        Item 2 (Disabled option)
        </button>
        <button mat-menu-item 
            role="menuitem">Item 3</button>
    </mat-menu>
</div>`;

const styleCode = `.story {
    padding: 9rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu-basic-example',
  templateUrl: './menu-basic-example.html',
  styleUrl: './menu-basic-example.scss',
  imports: [MatMenuModule, MatButton],
})
export class MenuBasicExample {}`;

@Component({
  template: htmlCode,
  imports: [MatMenuModule, MatButton],
  styles: [styleCode],
})
class SampleComponent {}

export const MenuBasicComponent: InputViewerComponent = {
  exampleName: 'Menu Basic',
  dynamicComponent: SampleComponent,
  height: 40,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
