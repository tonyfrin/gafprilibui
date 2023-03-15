import React from 'react';
import { forwardRef, ImgHTMLAttributes, LegacyRef } from 'react';
import { cx, css } from '@emotion/css';

type Style = {
  sectionClass?: string;
  divClass?: string;
  imgClass?: string;
  image: string;
};

export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & Style;

const sectionStyles = () => css`
  display: flex;
  margin: 0;
  padding: 1em;
`;

const containerStyles = () => css`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const imgStayle = () => css`
  margin-top: 10px;
  max-width: 150px;
`;

export const LogoContainer = forwardRef(
  (props: LogoProps, ref: LegacyRef<HTMLImageElement> | null): JSX.Element => {
    const {
      image,
      sectionClass = '',
      divClass = '',
      imgClass = '',
      ...imgProps
    }: LogoProps = props;
    return (
      <section className={cx(sectionStyles(), sectionClass)}>
        <div className={cx(containerStyles(), divClass)}>
          <img
            src={image}
            {...imgProps}
            className={cx(imgStayle(), imgClass)}
            ref={ref}
            alt="logo"
            role="logo"
          />
        </div>
      </section>
    );
  }
);
