import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
    <div class="story__section hlx-icon-primary background-primary">
        <mat-icon color="primary">
            whatshot</mat-icon>
        <mat-icon color="primary">
            storage</mat-icon>
        <mat-icon color="primary">
            assignment</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Accent</h4>
    <div class="story__section hlx-icon-accent">
        <mat-icon color="accent">
            language</mat-icon>
        <mat-icon color="accent">
            report_problem</mat-icon>
        <mat-icon color="accent">
            settings</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Warn</h4>
    <div class="story__section hlx-icon-warn background-warn">
        <mat-icon mat-stroked-button>
            view_agenda</mat-icon>
        <mat-icon mat-stroked-button>
            view_day</mat-icon>
        <mat-icon mat-stroked-button>
            rss_feed</mat-icon>
    </div>
</div>
<div class="story">
    <h4>Info</h4>
    <div class="story__section hlx-icon-info background-info">
        <mat-icon mat-stroked-button>
            view_agenda</mat-icon>
        <mat-icon mat-stroked-button>
            view_day</mat-icon>
        <mat-icon mat-stroked-button>
            rss_feed</mat-icon>
    </div>
</div>
<div class="story" >
    <h4>Invert</h4>
    <div class="story__section hlx-icon-invert background-invert">
        <mat-icon mat-stroked-button>
            view_agenda</mat-icon>
        <mat-icon mat-stroked-button>
            view_day</mat-icon>
        <mat-icon mat-stroked-button>
            rss_feed</mat-icon>
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

.background-primary {
    background-color: var(--hlx-surface-primary, #0077cc);
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

@Component({
  template: htmlCode,
  imports: [MatIconModule],
  styles: [styleCode],
})
class SampleComponent {}

export const IconsColorsComponent: InputViewerComponent = {
  exampleName: 'Icons colors',
  dynamicComponent: SampleComponent,
  height: 70,
  htmlCode: htmlCode,
  cssCode: [styleCode],
  tsCode: `import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    template: htmlCode,
    imports: [
        MatIconModule
    ],
    styles: [styleCode],
})
class SampleComponent {}`,
};
