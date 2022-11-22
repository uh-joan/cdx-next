import './rcx-header.module.scss';

import Paper from '@mui/material/Paper';
import * as React from 'react';

export interface HeaderProps {
  global?: React.ReactNode;
  productLogo?: React.ReactNode;
  productName?: React.ReactNode;
  children?: React.ReactNode;
}
export function CdxHeader(props: HeaderProps): JSX.Element {
  return (
    <header className="cdx-header">
      <div className="cdx-header__global-bar">
        <div className="cdx-header__logo--clarivate"></div>
        <div className="cdx-header__global">{props.global}</div>
      </div>
      {props.productLogo || props.productName || props.children ? (
        <Paper elevation={3} className="cdx-header__product-bar">
          <div className="cdx-header__product-identification">
            <div className="cdx-header__product-logo">{props.productLogo}</div>
            <div className="cdx-header__product-name">{props.productName}</div>
          </div>
          {props.children}
        </Paper>
      ) : (
        ''
      )}
    </header>
  );
}
export default CdxHeader;
