import React from 'react';
import type { SingleValue } from 'react-select';
import { CURRENCIES_LOCATIONS_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCurrenciesLocationsProps = {
  changeCurrenciesLocations: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectCurrenciesLocations = ({
  changeCurrenciesLocations,
  props,
}: SelectCurrenciesLocationsProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={CURRENCIES_LOCATIONS_INPUT}
        onChange={changeCurrenciesLocations}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
