import React from 'react';
import { USER_NAME_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputUserNameProps = {
  changeUserName: (userName: string) => void;
  props?: InputProps;
};

export const InputUserName = ({
  changeUserName,
  props,
}: InputUserNameProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Usuario',
          type: 'name',
          id: USER_NAME_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeUserName(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
