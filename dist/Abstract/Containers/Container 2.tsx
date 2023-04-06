import React from 'react';
import { css, cx } from '@emotion/css';

const RowStyles = () => css`
  display: flex;
`;

const ContainerInputStyles = (styles: ContainerStyles) => css`
  width: ${styles.width || '91.66667%'};
  margin: ${styles.margin || '10px 0px'};
`;

export type ContainerStyles = {
  width?: string;
  margin?: string | number;
};

type ConainerInput = {
  styles?: ContainerStyles | undefined;
  containerClass?: string;
  children: JSX.Element;
};

export const ContainerInput = ({
  styles = {},
  containerClass = '',
  children,
}: ConainerInput) => {
  return (
    <div className={cx(ContainerInputStyles(styles), containerClass)}>
      {children}
    </div>
  );
};

const ContainerFormStyles = (styles: ContainerStyles) => css`
  width: ${styles.width || '90%'};
  margin: ${styles.margin || 'auto'};
`;

type ConainerForm = {
  styles?: ContainerStyles | undefined;
  containerClass?: string;
  children: JSX.Element;
};

export const ContainerForm = ({
  styles = {},
  containerClass = '',
  children,
}: ConainerForm) => {
  return (
    <div className={cx(ContainerFormStyles(styles), containerClass)}>
      {children}
    </div>
  );
};

const ContainerGloboStyles = (styles: ContainerGloboStyle) => css`
  width: ${styles.width || '50%'};
`;

export type ContainerGloboStyle = {
  width?: string;
};

type ContainerGlobo = {
  styles?: ContainerGloboStyle | undefined;
  containerClass?: string;
  children: JSX.Element;
};

export const ContainerGlobo = ({
  styles = {},
  containerClass = '',
  children,
}: ContainerGlobo) => {
  return (
    <div className={cx(ContainerGloboStyles(styles), containerClass)}>
      {children}
    </div>
  );
};

const ContainerButtonStyles = (styles: ContainerButtonStyle) => css`
  width: ${styles.width || '50%'};
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'space-around'};
`;

export type ContainerButtonStyle = {
  width?: string;
  display?: string;
  justifyContent?: string;
};

type ContainerButton = {
  styles?: ContainerButtonStyle | undefined;
  Class?: string;
  children: JSX.Element;
};

export const ContainerButton = ({
  styles = {},
  Class = '',
  children,
}: ContainerButton) => {
  return (
    <div className={cx(ContainerButtonStyles(styles), Class)}>{children}</div>
  );
};
