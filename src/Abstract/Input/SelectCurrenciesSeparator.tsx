import React from 'react';
import type { SingleValue } from 'react-select';
import { CURRENCIES_SEPARATOR_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCurrenciesSeparatorProps = {
  changeCurrenciesSeparator: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectCurrenciesSeparator = ({
  changeCurrenciesSeparator,
  props,
}: SelectCurrenciesSeparatorProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={CURRENCIES_SEPARATOR_INPUT}
        onChange={changeCurrenciesSeparator}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
