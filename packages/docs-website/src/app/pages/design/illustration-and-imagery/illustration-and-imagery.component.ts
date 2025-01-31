import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-illustration-and-imagery',
  templateUrl: './illustration-and-imagery.component.html',
  styleUrls: ['./illustration-and-imagery.component.scss'],
})
export class IllustrationAndImageryComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
