import { findExample, getExamples, resolveComponentSlug } from './examples-map';

describe('examples-map', () => {
  it('resolves Helix component slugs to our examples', () => {
    expect(resolveComponentSlug('tooltip')).toBe('tooltips');
    expect(getExamples('input-text-field')).toEqual(getExamples('text-input'));
    expect(getExamples('unknown')).toBeUndefined();
  });

  it('finds examples by slug, case-insensitively', () => {
    expect(findExample('buttons', 'buttons-xsmall-size')?.exampleName).toBe(
      'Buttons XSmall Size',
    );
  });

  it('keeps the example URLs embedded by Helix working', () => {
    expect(findExample('buttons', 'buttons-fab-default')?.exampleName).toBe(
      'Buttons Fab',
    );
    expect(findExample('button', 'icon-button')?.exampleName).toBe(
      'Buttons Icon',
    );
  });
});
