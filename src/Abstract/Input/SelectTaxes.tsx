import React from 'react';
import type { SingleValue } from 'react-select';
import { TAXES_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectTaxesProps = {
  changeTaxes: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
};

export const SelectTaxes = ({ changeTaxes, props }: SelectTaxesProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={TAXES_INPUT}
        onChange={changeTaxes}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
