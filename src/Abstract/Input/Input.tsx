import React, { InputHTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { ContainerInput } from '../Containers';
import type { ContainerStyles } from '../Containers';

export type OnChange = (
  newValue: SingleValue<{ value: string; label: string }>,
  actionMeta: ActionMeta<{ value: string; label: string }>
) => void | undefined;

const InputStyles = (styles: InputStyle) => css`
  width: ${styles.width || '100%'};
  border: ${styles.border || '2px solid #eaeaea'};
  padding: ${styles.padding || '8px 19px'};
  text-align: ${styles.textAlign || 'left'};
  outline: ${styles.outline || 0};
  border-radius: ${styles.borderRadius || '6px'};
  background-color: ${styles.backgroundColor || '#fff'};
  font-size: ${styles.fontSize || '15px'};
  font-weight: ${styles.fontWeight || 300};
  color: ${styles.color || '#8D8D8D'};
  box-sizing: border-box;

  ::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }

  @media (max-width: 750px) {
    font-size: ${styles.media750Style?.fontSize || '12px'};
  }

  @media (max-width: 400px) {
    font-size: ${styles.media400Style?.fontSize || '10px'};
  }

  @media (max-width: 300px) {
    font-size: ${styles.media300Style?.fontSize || '8px'};
  }
`;

type Media = {
  fontSize?: string | number;
};

export type InputStyle = {
  width?: string | number;
  border?: string;
  padding?: string | number;
  textAlign?: string;
  outline?: string | number;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  color?: string;
  media750Style?: Media | undefined;
  media400Style?: Media | undefined;
  media300Style?: Media | undefined;
};

type InputStyles = {
  styles?: InputStyle | undefined;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputClass?: string | undefined;
  containerStyles?: ContainerStyles | undefined;
  containerClass?: string | undefined;
};

export const Input = ({
  styles = {},
  inputClass = '',
  inputProps = {},
  containerStyles = {},
  containerClass = '',
}: InputStyles) => {
  return (
    <ContainerInput styles={containerStyles} containerClass={containerClass}>
      <input className={cx(InputStyles(styles), inputClass)} {...inputProps} />
    </ContainerInput>
  );
};

const SelectStyles = (styles: SelectStyle) => css`
  width: ${styles.width || '100%'};
  font-size: ${styles.fontSize || '15px'};
  font-weight: ${styles.fontWeight || '300'};
  color: ${styles.color || '#8D8D8D'};
  font-family: ${styles.fontFamily || 'var(--font-main)'};

  ::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }

  @media (max-width: 600px) {
    width: ${styles.media600Style?.width || '106%'};
    font-size: ${styles.media600Style?.fontSize || '12px'};
  }

  @media (max-width: 400px) {
    width: ${styles.media400Style?.width || '108%'};
    font-size: ${styles.media400Style?.fontSize || '10px'};
  }
`;

type media = {
  width?: string;
  fontSize?: string;
};

export type SelectStyle = {
  width?: string | number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  fontFamily?: string;
  media600Style?: media | undefined;
  media400Style?: media | undefined;
};

export type GsSelectProps = {
  styles?: SelectStyle;
  Class?: string;
  options: { value: string; label: string }[];
  id?: string;
  onChange?: OnChange;
  placeholder?: string;
  containerStyles?: ContainerStyles;
  containerClass?: string;
  defaultValue?: { value: string; label: string };
};

export const GsSelect = ({
  styles = {},
  Class = '',
  options,
  id,
  onChange,
  placeholder,
  containerStyles = {},
  containerClass = '',
  defaultValue,
}: GsSelectProps) => {
  return (
    <>
      <ContainerInput styles={containerStyles} containerClass={containerClass}>
        <Select
          className={cx(SelectStyles(styles), Class)}
          options={options}
          id={id ? id : undefined}
          onChange={onChange}
          placeholder={placeholder ? placeholder : undefined}
          defaultValue={defaultValue}
        />
      </ContainerInput>
    </>
  );
};
