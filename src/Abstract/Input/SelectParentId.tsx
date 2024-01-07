import React from 'react';
import type { SingleValue } from 'react-select';
import { PARENT_ID_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectParentIdProps = {
  changeParentId: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
};

export const SelectParentId = ({
  changeParentId,
  props,
}: SelectParentIdProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={PARENT_ID_INPUT}
        onChange={changeParentId}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
