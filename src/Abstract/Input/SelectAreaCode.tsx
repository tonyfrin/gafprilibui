import React from 'react';
import type { SingleValue } from 'react-select';
import { AREA_CODE_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectAreaCodeProps = {
  changeAreaCode: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectAreaCode = ({
  changeAreaCode,
  props,
}: SelectAreaCodeProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={AREA_CODE_INPUT}
        onChange={changeAreaCode}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
