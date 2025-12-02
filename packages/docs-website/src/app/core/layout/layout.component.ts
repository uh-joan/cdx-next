import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [CommonModule, HeaderComponent, RouterModule, MatProgressBarModule],
})
export class LayoutComponent {
  private router = inject(Router);
  private readonly _isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this._isLoading.asObservable();

  constructor() {
    this.listenToRouterEvents();
  }

  private listenToRouterEvents(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._isLoading.next(true);
        return;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this._isLoading.next(false);
      }
    });
  }
}
