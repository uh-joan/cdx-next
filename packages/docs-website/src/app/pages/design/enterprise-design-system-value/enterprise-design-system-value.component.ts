import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-enterprise-design-system-value',
  templateUrl: './enterprise-design-system-value.component.html',
  styleUrls: ['./enterprise-design-system-value.component.scss'],
})
export class EnterpriseDesignSystemValueComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
