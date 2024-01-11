import React from 'react';
import { CURRENCIES_SYMBOL_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputCurrenciesSymbolProps = {
  changeSymbol: (symbol: string) => void;
  props?: InputProps;
};

export const InputCurrenciesSymbol = ({
  changeSymbol,
  props,
}: InputCurrenciesSymbolProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Simbolo de la moneda',
          type: 'text',
          id: CURRENCIES_SYMBOL_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeSymbol(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
