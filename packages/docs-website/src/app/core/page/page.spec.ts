import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { Page } from './page';

@Component({
  imports: [Page],
  template: `
    <hlx-page tabbed title="Badge" storybookId="components-badge">
      <div overview>Design guidance</div>
      <div code>Examples</div>
    </hlx-page>
  `,
})
class TabbedHost {}

describe('Page', () => {
  it('should create', () => {
    const fixture = TestBed.createComponent(Page);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  describe('tabbed', () => {
    let fixture: ComponentFixture<TabbedHost>;
    let element: HTMLElement;

    beforeEach(async () => {
      TestBed.configureTestingModule({
        providers: [provideRouter([{ path: '**', component: TabbedHost }])],
      });
      fixture = TestBed.createComponent(TabbedHost);
      element = fixture.nativeElement;
      fixture.detectChanges();
      await fixture.whenStable();
    });

    const panels = () =>
      Array.from(element.querySelectorAll<HTMLElement>('.content'));

    it('shows the Overview tab by default', () => {
      const [overview, code] = panels();
      expect(overview.hidden).toBe(false);
      expect(overview.textContent).toContain('Design guidance');
      expect(code.hidden).toBe(true);
    });

    it('shows the Code tab with the Storybook playground for ?tab=code', async () => {
      await TestBed.inject(Router).navigateByUrl('/?tab=code');
      fixture.detectChanges();
      await fixture.whenStable();

      const [overview, code] = panels();
      expect(overview.hidden).toBe(true);
      expect(code.hidden).toBe(false);
      expect(code.textContent).toContain('Examples');
      expect(code.querySelector('cdx-storybook-embed')).not.toBeNull();
    });
  });
});
