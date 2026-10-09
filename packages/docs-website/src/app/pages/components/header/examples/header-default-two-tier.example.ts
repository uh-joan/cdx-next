import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <header hlx-header [condensed]="false">
    <hlx-header-product-name>Product name</hlx-header-product-name>

    <nav mat-tab-nav-bar hlx-header-tabs [tabPanel]="tabPanel">
      @for (tab of tabs; track tab) {
        <a mat-tab-link [active]="tab === activeTab" (click)="activeTab = tab">
          {{ tab }}
        </a>
      }
    </nav>

    <button matButton>Help</button>
    <button matButton>Feedback</button>

    <hlx-header-global>
      <button matButton class="hlx-density--2">
        <mat-icon>language</mat-icon>
        English
      </button>
      <button matButton class="hlx-density--2">
        <mat-icon>apps</mat-icon>
        Products
      </button>
      <button matButton class="hlx-density--2">
        <mat-icon>account_circle</mat-icon>
        User name
      </button>
    </hlx-header-global>
  </header>
  <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
</div>`;

const styleCode = `.story {
  padding: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
  styles: [styleCode],
})
class SampleComponent {
  tabs = ['First', 'Second', 'Third'];
  activeTab = 'First';
}

export const HeaderDefaultTwoTierComponent: InputViewerComponent = {
  exampleName: 'Header Default (two-tier)',
  dynamicComponent: SampleComponent,
  verticalView: true,
  height: 30,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@hlx/ngx-branding';

// [condensed]="false" renders the Figma "default" header: a dark utility bar
// above a white product bar. Tabs go in the hlx-header-tabs slot.
@Component({
  selector: 'app-header-default-example',
  templateUrl: './header-default-example.html',
  styleUrl: './header-default-example.scss',
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
})
export class HeaderDefaultExample {
  tabs = ['First', 'Second', 'Third'];
  activeTab = 'First';
}`,
};
