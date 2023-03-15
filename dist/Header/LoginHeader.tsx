import React from 'react';
import { forwardRef, LegacyRef } from 'react';
import { cx, css } from '@emotion/css';
import { LogoContainer } from '../Logo';
import type { LogoProps } from '../Logo/LogoContainer';

type style = {
  headerClass?: string;
};

type LoginHeaderProps = LogoProps & style;

const headerStyles = () => css`
  background: linear-gradient(to left, #324375, #07b2e7);
  width: 100%;
`;

const LoginHeader = forwardRef(
  (
    props: LoginHeaderProps,
    ref: LegacyRef<HTMLImageElement> | null
  ): JSX.Element => {
    const { image, headerClass = '', ...imgProps }: LoginHeaderProps = props;
    return (
      <header className={cx(headerStyles(), headerClass)}>
        <LogoContainer
          image={image}
          {...imgProps}
          ref={typeof ref === 'string' ? null : ref}
        />
      </header>
    );
  }
);

export default LoginHeader;
