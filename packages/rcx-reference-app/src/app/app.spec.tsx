import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have lorem ipsum content', () => {
    const { getByText } = render(<App />);

    expect(getByText(/lorum ipsum text or something like that/gi)).toBeTruthy();
  });
});
