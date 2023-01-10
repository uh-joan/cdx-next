import '@testing-library/jest-dom';

import { act, render, screen } from '@testing-library/react';

import CdxFooter, { CdxFooterLinkGroup } from './rcx-footer';

describe('RcxFooter', () => {
  test('should render successfully', () => {
    act(() => {
      render(<CdxFooter groupCompanyLinks={false} slim={false} />);
    });

    expect(screen.getByText('Legal center')).toBeInTheDocument();
  });

  test('should set footer class', () => {
    const { container } = render(
      <CdxFooter groupCompanyLinks={false} slim={false} />,
    );

    expect(container.getElementsByClassName('cdx-footer').length).toBe(1);
  });

  test('should include copyright statement', () => {
    const { container } = render(
      <CdxFooter groupCompanyLinks={false} slim={false} />,
    );
    expect(container).toHaveTextContent(
      `© ${new Date().getFullYear()} Clarivate`,
    );
  });

  test('should project child content in content container', () => {
    const { container } = render(
      <CdxFooter groupCompanyLinks={false} slim={false}>
        Projected content
      </CdxFooter>,
    );
    expect(container).toHaveTextContent('Projected content');
  });

  test('should support slim property', () => {
    const { container } = render(
      <CdxFooter groupCompanyLinks={false} slim={true} />,
    );

    expect(container.getElementsByClassName('cdx-footer--slim').length).toBe(1);
  });

  test('should support links', () => {
    const { container } = render(
      <CdxFooter>
        <a href="https://stackoverflow.com/">Stack Overflow</a>
        <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
      </CdxFooter>,
    );

    expect(container).toHaveTextContent('Stack Overflow');
    expect(container).toHaveTextContent('Wordle');
  });
  test('should support group links', () => {
    const { container } = render(
      <CdxFooter groupCompanyLinks={true}>
        <CdxFooterLinkGroup title="Developer Resources">
          <a href="https://stackoverflow.com/">Stack Overflow</a>
          <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
        </CdxFooterLinkGroup>
      </CdxFooter>,
    );

    expect(container).toHaveTextContent('Company');
  });
});
