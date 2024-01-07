import React from 'react';
import { PASSWORD_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputPasswordProps = {
  changePassword: (password: string) => void;
  props?: InputProps;
};

export const InputPassword = ({
  changePassword,
  props,
}: InputPasswordProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Contraseña',
          type: 'password',
          id: PASSWORD_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changePassword(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
