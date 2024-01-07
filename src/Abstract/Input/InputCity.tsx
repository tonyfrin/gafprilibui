import React from 'react';
import { SingleValue } from 'react-select';
import { CITY_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputCityProps = {
  changeCity: (options: SingleValue<{ value: string; label: string }>) => void;
  props?: InputProps;
};

export const InputCity = ({ changeCity, props }: InputCityProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Ciudad',
          type: 'text',
          id: CITY_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeCity({
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
