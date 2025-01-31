import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <button mat-button [matMenuTriggerFor]="menu2">
        <mat-icon>settings</mat-icon>
    </button>
    <mat-menu #menu2="matMenu" role="menu" yPosition="below">
        <button mat-menu-item role="menuitem">
            <mat-icon>invert_colors</mat-icon>
            <span>Item 1</span>
        </button>
        <button mat-menu-item role="menuitem">
            <mat-icon>invert_colors</mat-icon>
            <span>Item 2</span>
        </button>
    </mat-menu>
</div>`;

const styleCode = `.story {
    padding: 6rem;
}`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatMenuModule, MatIconModule, MatButtonModule],
  styles: styleCode,
})
class SampleComponent {}

export const MenuIconComponent: InputViewerComponent = {
  exampleName: 'Menu Icon',
  dynamicComponent: SampleComponent,
  height: 35,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
        MatMenuModule,
        MatIconModule,
        MatButtonModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
