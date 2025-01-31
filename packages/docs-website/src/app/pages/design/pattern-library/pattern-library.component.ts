import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-pattern-library',
  templateUrl: './pattern-library.component.html',
  styleUrls: ['./pattern-library.component.scss'],
})
export class PatternLibraryComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
