import React from 'react';
import { EMAIL_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputEmailProps = {
  changeEmail: (email: string) => void;
  props?: InputProps;
};

export const InputEmail = ({ changeEmail, props }: InputEmailProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Email',
          type: 'email',
          id: EMAIL_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeEmail(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};