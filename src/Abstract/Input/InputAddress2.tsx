import React from 'react';
import { ADDRESS2_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputAddress2Props = {
  changeAddress2: (Address2: string) => void;
  props?: InputProps;
};

export const InputAddress2 = ({
  changeAddress2,
  props,
}: InputAddress2Props) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Continuar Dirección',
          type: 'text',
          id: ADDRESS2_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeAddress2(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};