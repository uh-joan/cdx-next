import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <h4>Default</h4>
    <div class="story__section">
        <mat-icon>check_circle</mat-icon>
        <mat-icon>info</mat-icon>
        <mat-icon>get_app</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Primary</h4>
    <div class="story__section hlx-icon-primary">
        <mat-icon>whatshot</mat-icon>
        <mat-icon>storage</mat-icon>
        <mat-icon>assignment</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Secondary</h4>
    <div class="story__section hlx-icon-secondary">
        <mat-icon>whatshot</mat-icon>
        <mat-icon>storage</mat-icon>
        <mat-icon>assignment</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Accent</h4>
    <div class="story__section hlx-icon-accent">
        <mat-icon>language</mat-icon>
        <mat-icon>report_problem</mat-icon>
        <mat-icon>settings</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Brand</h4>
    <div class="story__section hlx-icon-brand">
        <mat-icon>language</mat-icon>
        <mat-icon>report_problem</mat-icon>
        <mat-icon>settings</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Positive</h4>
    <div class="story__section hlx-icon-positive">
        <mat-icon>check_circle</mat-icon>
        <mat-icon>task_alt</mat-icon>
        <mat-icon>verified</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Warn</h4>
    <div class="story__section hlx-icon-warn background-warn">
        <mat-icon>view_agenda</mat-icon>
        <mat-icon>view_day</mat-icon>
        <mat-icon>rss_feed</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Negative</h4>
    <div class="story__section hlx-icon-negative">
        <mat-icon>error</mat-icon>
        <mat-icon>cancel</mat-icon>
        <mat-icon>delete</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Info</h4>
    <div class="story__section hlx-icon-info background-info">
        <mat-icon>view_agenda</mat-icon>
        <mat-icon>view_day</mat-icon>
        <mat-icon>rss_feed</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Disabled</h4>
    <div class="story__section hlx-icon-disabled">
        <mat-icon>view_agenda</mat-icon>
        <mat-icon>view_day</mat-icon>
        <mat-icon>rss_feed</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Invert</h4>
    <div class="story__section hlx-icon-invert background-invert">
        <mat-icon>view_agenda</mat-icon>
        <mat-icon>view_day</mat-icon>
        <mat-icon>rss_feed</mat-icon>
    </div>
</div>`;

const styleCode = `.story {
    padding: 1rem;
}

.story__section {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
}

.background-warn {
    background-color: var(--hlx-surface-warn, #ffefd1);
}

.background-info {
    background-color: var(--hlx-surface-info, #d7e8f7);
}

.background-invert {
    background-color: var(--mat-sys-inverse-surface);
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

// Helix colours icons with an hlx-icon-* class on the container.
// mat-icon's own color="primary|accent|warn" input is a Material 2 API and has
// no effect in the Material 3 based Helix theme.
@Component({
  selector: 'app-icon-colors-example',
  templateUrl: './icon-colors-example.html',
  styleUrl: './icon-colors-example.scss',
  imports: [MatIcon],
})
export class IconColorsExample {}`;

@Component({
  template: htmlCode,
  imports: [MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const IconsColorsComponent: InputViewerComponent = {
  exampleName: 'Icons colors',
  dynamicComponent: SampleComponent,
  height: 70,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
