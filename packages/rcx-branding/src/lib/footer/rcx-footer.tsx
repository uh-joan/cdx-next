import './rcx-footer.scss';

import { ThemeOptionsWithBranding } from '@cdx/theme-react-mui';
import * as React from 'react';

export interface FooterProps {
  children?: React.ReactNode;
  groupCompanyLinks?: boolean;
  slim?: boolean;
  theme?: Partial<ThemeOptionsWithBranding>;
}

export interface GroupLinkProps {
  children?: React.ReactNode;
  title?: string;
}

export function CdxLinks(): JSX.Element {
  return (
    <React.Fragment>
      <a href="https://clarivate.com/legal-center/">Legal center</a>
      <a href="https://clarivate.com/privacy-center/">Privacy notice</a>
      <a href="https://clarivate.com/privacy-center/notices-policies/cookie-policy/">
        Cookie policy
      </a>
    </React.Fragment>
  );
}

export function CdxCompanyGroupLinks(): JSX.Element {
  return (
    <CdxFooterLinkGroup title="Company">
      <CdxLinks />
    </CdxFooterLinkGroup>
  );
}

export function CdxFooterLinkGroup(props: GroupLinkProps): JSX.Element {
  return (
    <div className="cdx-footer__group">
      {props.title && (
        <div className="cdx-footer__group-title">{props.title}</div>
      )}
      {props.children}
    </div>
  );
}

export function CdxFooter(props: FooterProps): JSX.Element {
  return (
    <footer
      className={`cdx-footer ${props.slim ? 'cdx-footer--slim' : ''}`}
      style={{
        background: props?.theme?.footer?.background,
        color: props?.theme?.footer?.color,
      }}
    >
      <div className="cdx-footer__copyright">
        © {new Date().getFullYear()} Clarivate
      </div>

      <div className="cdx-footer__content">
        {props.groupCompanyLinks ? <CdxCompanyGroupLinks /> : <CdxLinks />}
        {props.children}
      </div>
    </footer>
  );
}

export default CdxFooter;
