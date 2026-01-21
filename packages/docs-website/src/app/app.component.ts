import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
})
export class AppComponent {
  matIconReg = inject(MatIconRegistry);

  constructor() {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
