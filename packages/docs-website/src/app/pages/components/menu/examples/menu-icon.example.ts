import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <button matIconButton [matMenuTriggerFor]="menu2" aria-label="Settings">
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

const tsCode = `import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu-icon-example',
  templateUrl: './menu-icon-example.html',
  styleUrl: './menu-icon-example.scss',
  imports: [MatMenuModule, MatIcon, MatIconButton],
})
export class MenuIconExample {}`;

@Component({
  template: htmlCode,
  imports: [MatMenuModule, MatIcon, MatIconButton],
  styles: [styleCode],
})
class SampleComponent {}

export const MenuIconComponent: InputViewerComponent = {
  exampleName: 'Menu Icon',
  dynamicComponent: SampleComponent,
  height: 35,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
