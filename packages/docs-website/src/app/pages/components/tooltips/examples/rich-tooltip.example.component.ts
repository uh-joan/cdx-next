import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RichTooltipDirective } from '@cdx/ngx-branding';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <button mat-flat-button [hlxTooltip]="tooltipTemplate">
    Hover me
  </button>
  <ng-template #tooltipTemplate>
    <h6 class="title">Trial</h6>
    <span class="sub-title">Filter specific to the clinical Trials to find</span>
    <p >Investigator and sites associated <br>
    with specific clinical trial deal</p>
  </ng-template>
</div>`;

const styleCode = `.story {
  padding: 1rem;
}
.title {
  font-weight: bold;
  color: yellow
}
.sub-title {
  color: yellow;
}
`;

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatButtonModule, RichTooltipDirective],
  styles: styleCode,
})
class SampleComponent {}

export const RichTooltipComponent: InputViewerComponent = {
  exampleName: 'Custom Tooltip',
  dynamicComponent: SampleComponent,
  height: 36,
  hideCss: false,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RichTooltipDirective } from '@cdx/ngx-branding';

@Component({
  standalone: true,
  template: htmlCode,
  imports: [MatButtonModule, RichTooltipDirective],
  styles: styleCode,
})
class SampleComponent {}`,
};
