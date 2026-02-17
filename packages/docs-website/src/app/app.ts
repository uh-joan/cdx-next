import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [RouterOutlet],
})
export class App {
  matIconReg = inject(MatIconRegistry);

  constructor() {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
