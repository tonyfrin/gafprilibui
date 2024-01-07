import React from 'react';
import type { SingleValue } from 'react-select';
import { CITY_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCityProps = {
  changeCity: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
};

export const SelectCity = ({ changeCity, props }: SelectCityProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={CITY_INPUT}
        onChange={changeCity}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
