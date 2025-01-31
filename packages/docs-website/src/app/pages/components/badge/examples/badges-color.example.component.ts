import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatLabel } from '@angular/material/form-field';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div matBadge="4" matBadgeOverlap="false" 
  class="demo-section"
>Accent badge</div>

<div matBadge="1" matBadgeSize="small" 
  class="demo-section"
>Accent small badge</div>

<div matBadge="1" matBadgeSize="large" 
  class="demo-section"
>Accent large badge</div>

<div matBadge="4" 
  matBadgeOverlap="false" class="demo-section
  hlx-badge-primary"
>Primary badge</div>

<div matBadge="1" matBadgeSize="small"
  class="demo-section hlx-badge-primary"
>Primary small badge</div>

<div matBadge="1" matBadgeSize="large"
  class="demo-section hlx-badge-primary"
>Primary large badge</div>`;

const styleCode = `:host {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.demo-section + .demo-section {
  margin-top: 16px;
}`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatBadgeModule, MatLabel, MatDividerModule],
  styles: styleCode,
})
class SampleComponent {}

export const badgeColorsComponent: InputViewerComponent = {
  exampleName: 'Badge Colors',
  dynamicComponent: SampleComponent,
  height: 44,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
    standalone: true,
    template: htmlCode,
    imports: [
      MatBadgeModule
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
