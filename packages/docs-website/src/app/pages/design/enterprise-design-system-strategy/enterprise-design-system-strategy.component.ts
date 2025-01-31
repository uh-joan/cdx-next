import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-enterprise-design-system-strategy',
  templateUrl: './enterprise-design-system-strategy.component.html',
  styleUrls: ['./enterprise-design-system-strategy.component.scss'],
})
export class EnterpriseDesignSystemStrategyComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
