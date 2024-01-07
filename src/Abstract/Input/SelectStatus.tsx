import React from 'react';
import type { SingleValue } from 'react-select';
import { STATUS_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectStatusProps = {
  changeStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectStatus = ({ changeStatus, props }: SelectStatusProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={STATUS_INPUT}
        onChange={changeStatus}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
