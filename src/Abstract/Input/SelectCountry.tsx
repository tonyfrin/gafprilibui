import React from 'react';
import type { SingleValue } from 'react-select';
import { COUNTRY_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCountryProps = {
  changeCountry: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectCountry = ({ changeCountry, props }: SelectCountryProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={COUNTRY_INPUT}
        onChange={changeCountry}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};