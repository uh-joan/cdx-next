import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';

import { HELIX_ICONS } from './icons.generated';
import { HELIX_PICTOGRAMS } from './pictograms.generated';
import {
  HELIX_ICON_NAMESPACE,
  HELIX_PICTOGRAM_NAMESPACE,
  provideHelixIcons,
} from './provide-helix-icons';

describe('provideHelixIcons', () => {
  let registry: MatIconRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHelixIcons()],
    });
    registry = TestBed.inject(MatIconRegistry);
  });

  it('ships the custom icons', () => {
    expect(Object.keys(HELIX_ICONS)).toContain('ai-summary');
  });

  it('registers every custom icon in the hlx namespace', async () => {
    for (const name of Object.keys(HELIX_ICONS)) {
      const svg = await firstValueFrom(
        registry.getNamedSvgIcon(name, HELIX_ICON_NAMESPACE),
      );
      expect(svg.tagName.toLowerCase()).toBe('svg');
    }
  });

  it('makes single-colour icons follow the text colour', async () => {
    const svg = await firstValueFrom(
      registry.getNamedSvgIcon('home-alt', HELIX_ICON_NAMESPACE),
    );

    expect(svg.querySelector('path')?.getAttribute('fill')).toBe(
      'currentColor',
    );
  });
});

describe('provideHelixIcons pictograms', () => {
  it('loads pictograms from the configured path on first use', async () => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideHelixIcons({ pictogramsPath: '/static/pictograms/' }),
      ],
    });
    const registry = TestBed.inject(MatIconRegistry);
    const http = TestBed.inject(HttpTestingController);
    const name = HELIX_PICTOGRAMS[0];

    const icon = firstValueFrom(
      registry.getNamedSvgIcon(name, HELIX_PICTOGRAM_NAMESPACE),
    );
    http
      .expectOne(`/static/pictograms/${name}.svg`)
      .flush('<svg viewBox="0 0 500 500"></svg>');

    expect((await icon).tagName.toLowerCase()).toBe('svg');
    http.verify();
  });
});
