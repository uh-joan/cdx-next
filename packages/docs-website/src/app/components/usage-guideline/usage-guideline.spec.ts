import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { UsageGuideline, UsageGuidelines } from './usage-guideline';

@Component({
  imports: [UsageGuideline, UsageGuidelines],
  template: `
    <cdx-usage-guidelines>
      <cdx-usage-guideline kind="do"
        >Use badges for counts.</cdx-usage-guideline
      >
      <cdx-usage-guideline kind="dont"
        >Don't use long text.</cdx-usage-guideline
      >
    </cdx-usage-guidelines>
  `,
})
class Host {}

describe('UsageGuideline', () => {
  it("renders a Do and a Don't card with projected content", () => {
    const fixture = TestBed.createComponent(Host);
    fixture.detectChanges();

    const cards: HTMLElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('cdx-usage-guideline'),
    );
    expect(cards.map((c) => c.className)).toEqual([
      'usage-guideline usage-guideline--do',
      'usage-guideline usage-guideline--dont',
    ]);
    expect(cards[0].textContent).toContain('Do');
    expect(cards[0].textContent).toContain('Use badges for counts.');
    expect(cards[1].textContent).toContain("Don't");
  });
});
