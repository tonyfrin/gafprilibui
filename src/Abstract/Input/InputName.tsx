import React from 'react';
import { NAME_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputNameProps = {
  changeName: (name: string) => void;
  props?: InputProps;
};

export const InputName = ({ changeName, props }: InputNameProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Nombre',
          type: 'name',
          id: NAME_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeName(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};