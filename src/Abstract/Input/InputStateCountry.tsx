import React from 'react';
import { SingleValue } from 'react-select';
import { STATE_COUNTRY_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputStateCountryProps = {
  changeStateCountry: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props?: InputProps;
};

export const InputStateCountry = ({
  changeStateCountry,
  props,
}: InputStateCountryProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Estado o Provincia',
          type: 'text',
          id: STATE_COUNTRY_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeStateCountry({
              label: (event.target as HTMLInputElement).value,
              value: (event.target as HTMLInputElement).value,
            }),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
