import { Component, effect, HostBinding, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDivider } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { Page } from '../../../core/page/page';

export interface DataRow {
  name: string;
  description: string;
  dependencies?: string[];
}

@Component({
  selector: 'cdx-quick-start-new-project',
  templateUrl: './quick-start-new-project.html',
  styleUrls: ['./quick-start-new-project.scss'],
  imports: [
    Page,
    ExternalLink,
    Highlight,
    MatTableModule,
    MatDivider,
    InternalLink,
  ],
})
export class QuickStartNewProject {
  @HostBinding('class') hostClass = 'cdx-section';

  displayedColumns: string[] = [
    'cdx',
    'angular',
    'typescript',
    'rxjs',
    'material',
  ];

  addStyles = `@use '@hlx/theme-angular-material' as cdx;
@use '@hlx/ngx-branding/header/theme' as header;
@use '@hlx/ngx-branding/footer/theme' as footer;

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
import { HelixHeaderComponent, HelixHeaderGlobalComponent, HelixHeaderProductNameOrLogoComponent } from '@hlx/ngx-branding';
import { HelixFooterComponent, HelixFooterGroupComponent, HelixFooterLinkDirective, HelixFooterGroupTitleDirective } from '@hlx/ngx-branding';

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
      name: '@hlx/colors',
      description: 'Color palette and utility functions',
    },
    {
      name: '@hlx/ngx-session-activity',
      description: 'Session Activity service',
      dependencies: [
        '"@ng-idle/core": "^16.0.0"',
        '"@ng-idle/keepalive": "^16.0.0"',
        '"@ngx-translate/core": ">=18.0.0"',
      ],
    },
    {
      name: '@hlx/ngx-translations',
      description: 'Translation service',
      dependencies: [`"@ngx-translate/core": ">=18.0.0"`],
    },
    {
      name: '@hlx/ngx-analytics',
      description: 'Analytics service',
      dependencies: ['"@snowplow/browser-tracker": "^4.10.0"'],
    },
    {
      name: '@hlx/ngx-authentication',
      description: 'Authentication service',
      dependencies: [
        '"@angular/material": "^22"',
        '"@angular/router": "^22"',
        '"@auth0/angular-jwt": "^5.2.0"',
        '"@hlx/theme-angular-material": "22.0.0"',
      ],
    },
    {
      name: '@hlx/theme-ag-grid',
      description: 'AG Grid theme',
      dependencies: [`"ag-grid-community": ">=36.0.0"`],
    },
    {
      name: '@hlx/theme-highcharts',
      description: 'Highcharts theme',
      dependencies: ['"highcharts": "^13.0.0"'],
    },
    {
      name: '@hlx/theme-snackbar',
      description: 'Snackbar theme',
    },
    {
      name: '@hlx/theme-xng-breadcrumb',
      description: 'Breadcrumb theme',
    },
  ];

  columns: string[] = ['name', 'description', 'dependencies', 'code'];

  private route: ActivatedRoute = inject(ActivatedRoute);
  private fragment = toSignal(this.route.fragment, { initialValue: null });

  private scrollToFragment = effect(() => {
    const fragment = this.fragment();
    if (!fragment) {
      return;
    }

    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
