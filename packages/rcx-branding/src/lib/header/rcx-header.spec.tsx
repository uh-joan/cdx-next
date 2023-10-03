import '@testing-library/jest-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { render } from '@testing-library/react';

import CdxHeader from './rcx-header';

describe('RcxHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CdxHeader />);
    expect(baseElement).toBeTruthy();
  });

  test('should show header global and not show the product bar', () => {
    const { container } = render(
      <CdxHeader
        global={
          <IconButton color="primary">
            <InstagramIcon />
          </IconButton>
        }
      ></CdxHeader>,
    );

    expect(container.getElementsByClassName('cdx-header').length).toBe(1);
    expect(container.getElementsByClassName('cdx-header__global').length).toBe(
      1,
    );
    expect(
      container.getElementsByClassName('cdx-header__global').item.length,
    ).toBe(1);
    expect(
      container.getElementsByClassName('cdx-header__product-bar').length,
    ).toBeFalsy();
  });

  test('should show product logo and product bar', () => {
    const { container } = render(
      <CdxHeader
        productLogo={
          <img
            src="https://clarivate.com/code/wp-content/themes/clarivate/src/img/logo.svg?v=2.4.32"
            alt=""
          />
        }
      ></CdxHeader>,
    );
    expect(container.getElementsByClassName('cdx-header').length).toBe(1);
    expect(
      container.getElementsByClassName('cdx-header__product-bar').length,
    ).toBe(1);
  });

  test('should show product name and product bar', () => {
    const { container } = render(
      <CdxHeader productName={<a href="#top">My Product Name</a>}></CdxHeader>,
    );
    expect(container).toHaveTextContent('My Product Name');
    expect(
      container.getElementsByClassName('cdx-header__product-bar').length,
    ).toBe(1);
  });
});
