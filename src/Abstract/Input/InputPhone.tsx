import React from 'react';
import { PHONE_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputPhoneProps = {
  changePhone: (phone: string) => void;
  props?: InputProps;
};

export const InputPhone = ({ changePhone, props }: InputPhoneProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Teléfono',
          type: 'number',
          min: '0',
          step: '1',
          title: 'Solo números y sin comenzar en 0, ejemplo: 4241234000',
          id: PHONE_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changePhone(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};