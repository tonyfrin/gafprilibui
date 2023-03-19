import React from 'react';
import { cx, css } from '@emotion/css';

const Box1Styles = (styles: Box1Style) => css`
  background-color: ${styles.backgroundColor || '#fff'};
  padding: ${styles.padding || '40px'};
  width: ${styles.width || '70%'};
  border-radius: ${styles.borderRadius || '10px'};
  height: ${styles.height || '60vh'};

  margin: 30px auto;

  @media (max-width: 500px) {
    padding: ${styles.media500Style?.padding || '15px 35px'};
    width: ${styles.media500Style?.width || '75%'};
  }

  @media (max-width: 400px) {
    padding: ${styles.media400Style?.padding || '15px 35px'};
    width: ${styles.media400Style?.width || '78%'};
  }

  @media (max-width: 300px) {
    padding: ${styles.media400Style?.padding || '15px 40px 15px 8px'};
    width: ${styles.media400Style?.width || '80%'};
  }
`;

type Box1Media500Style = {
  padding: string | number | undefined;
  width: string | number;
};

type Box1Media400Style = {
  padding: string | number;
  width: string | number;
};

type Box1Media300Style = {
  padding: string | number;
  width: string | number;
};

type Box1Style = {
  backgroundColor?: string;
  padding?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  height?: string | number;
  media500Style?: Box1Media500Style | undefined;
  media400Style?: Box1Media400Style | undefined;
  media300Style?: Box1Media300Style | undefined;
};

type Box1 = {
  styles?: Box1Style | undefined;
  children: JSX.Element;
};

export const Box1 = ({ styles = {}, children }: Box1) => {
  return <div className={Box1Styles(styles)}>{children}</div>;
};
