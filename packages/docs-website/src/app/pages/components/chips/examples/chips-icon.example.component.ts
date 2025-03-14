import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<mat-chip-set class="story">
    <mat-chip>
        <mat-icon matChipAvatar>
            directions_walk
        </mat-icon>
        Walk
        <mat-icon matChipRemove>
            cancel
        </mat-icon>
    </mat-chip>
    <mat-chip>
        <mat-icon matChipAvatar>
            directions_bike
        </mat-icon>
        Cycle
        <mat-icon matChipRemove>
            cancel
        </mat-icon>
    </mat-chip>
    <mat-chip>
        <mat-icon matChipAvatar>
            directions_bus
        </mat-icon>
        Bus
        <mat-icon matChipRemove>
            cancel
        </mat-icon>
    </mat-chip>
    <mat-chip>
        <mat-icon matChipAvatar>
            directions_car
        </mat-icon>
        Drive
        <mat-icon matChipRemove>cancel</mat-icon>
    </mat-chip>
</mat-chip-set>`;

const styleCode = `.story {
    padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [MatChipsModule, MatIconModule],
  styles: styleCode,
})
class SampleComponent {}

export const IconChipsComponent: InputViewerComponent = {
  exampleName: 'Chips Icon',
  dynamicComponent: SampleComponent,
  height: 63,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
    template: htmlCode,
    imports: [
        MatChipsModule,
        MatIconModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
