import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STORYBOOK_URL, StorybookEmbed } from './storybook-embed';

describe('StorybookEmbed', () => {
  let fixture: ComponentFixture<StorybookEmbed>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StorybookEmbed);
    fixture.componentRef.setInput('componentId', 'components-button');
    fixture.detectChanges();
  });

  it('embeds the component docs and links to them in Storybook', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('iframe')?.getAttribute('src')).toBe(
      `${STORYBOOK_URL}/iframe.html?id=components-button--docs&viewMode=docs`,
    );
    expect(element.querySelector('a')?.getAttribute('href')).toBe(
      `${STORYBOOK_URL}/?path=/docs/components-button--docs`,
    );
  });
});
