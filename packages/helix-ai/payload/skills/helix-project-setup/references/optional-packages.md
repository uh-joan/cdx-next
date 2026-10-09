# Optional `@cdx` packages

Install only what the project needs. Peer dependencies must be installed
explicitly.

| Package                     | Purpose                                            | Peer dependencies                                                                           |
| --------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `@hlx/colors`               | Color palette and utility functions                | —                                                                                           |
| `@hlx/ngx-session-activity` | Session activity / idle handling                   | `@ng-idle/core`, `@ng-idle/keepalive`, `@ngx-translate/core`                                |
| `@hlx/ngx-translations`     | Translation service                                | `@ngx-translate/core`                                                                       |
| `@hlx/ngx-analytics`        | Analytics service                                  | `@snowplow/browser-tracker`                                                                 |
| `@hlx/ngx-authentication`   | Authentication service                             | `@angular/material`, `@angular/router`, `@auth0/angular-jwt`, `@hlx/theme-angular-material` |
| `@hlx/theme-ag-grid`        | AG Grid theme                                      | `ag-grid-community`                                                                         |
| `@hlx/theme-highcharts`     | Highcharts theme                                   | `highcharts`                                                                                |
| `@hlx/theme-snackbar`       | Snackbar theme                                     | —                                                                                           |
| `@hlx/theme-xng-breadcrumb` | Breadcrumb theme                                   | `xng-breadcrumb`                                                                            |
| `@hlx/clarivate-font`       | Clarivate icon/brand font (also available via CDN) | —                                                                                           |

Version ranges change per release — read the peer ranges from the installed
package's `package.json` rather than pinning from memory. The canonical,
always-current list is the Quick Start page of the docs website.
