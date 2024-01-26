import React from 'react';
import type { SingleValue } from 'react-select';
import { CURRENCIES_DECIMAL_NUMBERS_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCurrenciesDecimalNumbersProps = {
  changeCurrenciesDecimalNumbers: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectCurrenciesDecimalNumbers = ({
  changeCurrenciesDecimalNumbers,
  props,
}: SelectCurrenciesDecimalNumbersProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={CURRENCIES_DECIMAL_NUMBERS_INPUT}
        onChange={changeCurrenciesDecimalNumbers}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};