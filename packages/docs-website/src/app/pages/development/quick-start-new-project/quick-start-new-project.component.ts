import { Component, HostBinding } from '@angular/core';

export interface DataRow {
  cdx: string;
  angular: string;
  typescript: string;
  rxjs: string;
  material: string;
}

@Component({
  selector: 'cdx-quick-start-new-project',
  templateUrl: './quick-start-new-project.component.html',
  styleUrls: ['./quick-start-new-project.component.scss'],
})
export class QuickStartNewProjectComponent {
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

  typography = `<body class="mat-typography">
  <!-- BODY CONTENTS -->
</body>`;

  headerFooterModule = `//...
import { HelixHeaderModule, HelixFooterModule } from '@cdx/ngx-branding';

@NgModule({
  //...
  imports: [
    //...
    HelixHeaderModule,
    HelixFooterModule
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
}
