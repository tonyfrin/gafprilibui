import React from 'react';
import type { SingleValue } from 'react-select';
import { CURRENCIES_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCurrenciesProps = {
  changeCurrencies: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectCurrencies = ({
  changeCurrencies,
  props,
}: SelectCurrenciesProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={CURRENCIES_INPUT}
        onChange={changeCurrencies}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};