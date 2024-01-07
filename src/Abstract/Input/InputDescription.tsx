import React from 'react';
import { DESCRIPTION_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputDescriptionProps = {
  changeDescription: (description: string) => void;
  props?: InputProps;
};

export const InputDescription = ({
  changeDescription,
  props,
}: InputDescriptionProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Descripción',
          type: 'text',
          id: DESCRIPTION_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeDescription(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
