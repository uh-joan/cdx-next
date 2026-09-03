import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story mat-typography">
  <mat-drawer-container
    class="example-container"
    [hasBackdrop]="hasBackdrop.value"
  >
    <mat-drawer #drawer2 [mode]="mode.value">
      <h3>Sidenav</h3>
    </mat-drawer>
    <mat-drawer-content>
      <div class="example-controls">
        <mat-form-field appearance="fill">
          <mat-label>Sidenav mode</mat-label>
          <mat-select #mode value="side">
            <mat-option value="side">Side</mat-option>
            <mat-option value="over">Over</mat-option>
            <mat-option value="push">Push</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Has backdrop</mat-label>
          <mat-select #hasBackdrop>
            <mat-option>Unset</mat-option>
            <mat-option [value]="true">True</mat-option>
            <mat-option [value]="false">False</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="example-actions">
        <button matButton="elevated" (click)="drawer2.toggle()">
          Toggle sidenav
        </button>
      </div>
    </mat-drawer-content>
  </mat-drawer-container>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}

.example-container {
    height: 300px;
}

.example-controls {
    display: flex;
    column-gap: 1rem;
    margin: 1rem;
}

.example-actions {
    text-align: center;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-basic-example',
  templateUrl: './sidenav-basic-example.html',
  styleUrl: './sidenav-basic-example.scss',
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButton],
})
export class SidenavBasicExample {}`;

@Component({
  template: htmlCode,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButton],
  styles: [styleCode],
})
class SampleComponent {}

export const SidenavComponent: InputViewerComponent = {
  exampleName: 'Sidenav',
  dynamicComponent: SampleComponent,
  height: 70,
  hideCss: true,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
