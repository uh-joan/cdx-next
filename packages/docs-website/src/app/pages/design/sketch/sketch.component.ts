import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss'],
})
export class SketchComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
