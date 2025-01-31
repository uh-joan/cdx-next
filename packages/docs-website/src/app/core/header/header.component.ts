import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HelixHeaderModule } from '@cdx/ngx-branding';

import { SearchComponent } from '../search/search.component';
import { links, NavigationLink } from './header.config';

@Component({
  selector: 'web-hlx-header',
  standalone: true,
  imports: [HelixHeaderModule, SearchComponent, RouterModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: NavigationLink[] = links;
}
