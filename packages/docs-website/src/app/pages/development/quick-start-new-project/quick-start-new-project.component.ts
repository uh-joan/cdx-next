import { AfterViewInit, Component, HostBinding, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { InternalLinkComponent } from '../../../components/internal-link/internal-link.component';
import { PageComponent } from '../../../core/page/page.component';

export interface DataRow {
  name: string;
  description: string;
  dependencies?: string[];
}

@Component({
  selector: 'cdx-quick-start-new-project',
  templateUrl: './quick-start-new-project.component.html',
  styleUrls: ['./quick-start-new-project.component.scss'],
  imports: [
    PageComponent,
    ExternalLinkComponent,
    HighlightComponent,
    MatTableModule,
    MatDivider,
    InternalLinkComponent,
  ],
})
export class QuickStartNewProjectComponent implements AfterViewInit {
  @HostBinding('class') hostClass = 'cdx-section';

  displayedColumns: string[] = [
    'cdx',
    'angular',
    'typescript',
    'rxjs',
    'material',
  ];

  addStyles = `@use '@cdx/theme-angular-material' as cdx;
@use '@cdx/ngx-branding/header/theme' as header;
@use '@cdx/ngx-branding/footer/theme' as footer;

@include cdx.default;
@include header.theme(cdx.$cdx-theme);
@include footer.theme(cdx.$cdx-theme);`;

  fonts = `<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://cdn.digital-experience.clarivate.io" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" />
  <link rel="stylesheet" href="https://cdn.digital-experience.clarivate.io/@cdx/clarivate-font/latest/clarivate-font.css" />
</head>
`;

  typography = `<body class="mat-typography helix-theme-material">
  <!-- BODY CONTENTS -->
</body>`;

  headerFooterComponents = `//...
import { HelixHeaderComponent, HelixHeaderGlobalComponent, HelixHeaderProductNameOrLogoComponent } from '@cdx/ngx-branding';
import { HelixFooterComponent, HelixFooterGroupComponent, HelixFooterLinkDirective, HelixFooterGroupTitleDirective } from '@cdx/ngx-branding';

@NgModule({
  //...
  imports: [
    //...
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
    //...
    HelixFooterComponent,
    HelixFooterGroupComponent,
    HelixFooterLinkDirective,
    HelixFooterGroupTitleDirective,
  ],
//...
})`;

  headerFooterTemplate = `<div class="with-header">
  <header hlx-header></header>
  <ng-content></ng-content>
</div>

<footer hlx-footer></footer>`;

  headerFooterStyle = `:host {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.with-header {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}`;

  helixThemeStyles = `
  /* styles.scss */
  @include cdx.default(cdx.$helix-theme, 'helix-theme-material');
  @include header.theme(cdx.$helix-theme);
  @include footer.theme(cdx.$helix-theme);

  .helix-theme-material {
    @include cdx.theme-helix-overrides;
  }`;

  packages: DataRow[] = [
    {
      name: '@cdx/colors',
      description: 'Color palette and utility functions',
    },
    {
      name: '@cdx/ngx-session-activity',
      description: 'Session Activity service',
      dependencies: [
        `"@ng-idle/keepalive": "^16.0.0"`,
        `"@ngx-translate/core": ">=17.0.0"`,
      ],
    },
    {
      name: '@cdx/ngx-translations',
      description: 'Translation service',
      dependencies: [`"@ngx-translate/core": ">=17.0.0"`],
    },
    {
      name: '@cdx/ngx-analytics',
      description: 'Analytics service',
      dependencies: [`"@snowplow/browser-tracker": "^4.6.8"`],
    },
    {
      name: '@cdx/ngx-authentication',
      description: 'Authentication service',
    },
    {
      name: '@cdx/theme-ag-grid',
      description: 'AG Grid theme',
      dependencies: [`"ag-grid-community": ">=35"`],
    },
    {
      name: '@cdx/theme-badge',
      description: 'Badge theme',
    },
    {
      name: '@cdx/theme-button-toggle',
      description: 'Button Toggle theme',
    },
    {
      name: '@cdx/theme-expansion-panel',
      description: 'Expansion Panel theme',
    },
    {
      name: '@cdx/theme-highcharts',
      description: 'Highcharts theme',
      dependencies: [`"highcharts": "^12.4.0"`],
    },
    {
      name: '@cdx/theme-snackbar',
      description: 'Snackbar theme',
    },
    {
      name: '@cdx/theme-xng-breadcrumb',
      description: 'Breadcrumb theme',
    },
  ];

  columns: string[] = ['name', 'description', 'dependencies', 'code'];

  private route: ActivatedRoute = inject(ActivatedRoute);
  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
