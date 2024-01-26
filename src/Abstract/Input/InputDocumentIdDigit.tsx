import React from 'react';
import { TYPE_DOCUMENT_ID_DIGIT_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputDocumentiIdDigitProps = {
  changeDocumentiIdDigit: (LastName: string) => void;
  props?: InputProps;
};

export const InputDocumentiIdDigit = ({
  changeDocumentiIdDigit,
  props,
}: InputDocumentiIdDigitProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Número de identificación',
          type: 'number',
          min: '0',
          step: '1',
          title: 'Solo números, ejemplo: 181234678',
          id: TYPE_DOCUMENT_ID_DIGIT_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeDocumentiIdDigit(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};