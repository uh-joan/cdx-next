import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'demo-left-navigation',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
    TranslateModule,
    MatTabsModule,
  ],
  templateUrl: './left-navigation.component.html',
  styleUrl: './left-navigation.component.scss',
})
export class LeftNavigationComponent {
  links = [
    { name: 'ALUMNS.TITLE', path: 'alumns' },
    { name: 'ACCOUNT.TITLE', path: 'account' },
    { name: 'SETTINGS.TITLE', path: 'settings' },
    { name: 'LOGIN.TITLE', path: 'login' },
    { name: 'ERROR.TITLE', path: 'error' },
  ];

  isActive(path: string): boolean {
    return path == window.location.pathname.substring(1);
  }
}
