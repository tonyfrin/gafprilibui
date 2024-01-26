import React from 'react';
import type { SingleValue } from 'react-select';
import { ROLES_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectRolesProps = {
  changeRoles: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
};

export const SelectRoles = ({ changeRoles, props }: SelectRolesProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={ROLES_INPUT}
        onChange={changeRoles}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
