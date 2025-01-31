import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <button mat-flat-button 
        [matMenuTriggerFor]="menu" color="primary">
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

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatMenuModule, MatButtonModule],
  styles: styleCode,
})
class SampleComponent {}

export const MenuBasicComponent: InputViewerComponent = {
  exampleName: 'Menu Basic',
  dynamicComponent: SampleComponent,
  height: 40,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
        MatMenuModule,
        MatButtonModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
