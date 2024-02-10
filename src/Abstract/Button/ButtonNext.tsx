import React from 'react';
import { BUTTON_NEXT_INPUT } from '../../Constans';
import { Button } from './Button';
import type { ButtonProps } from './Button';

export type ButtonNextProps = {
  title: string;
  props?: ButtonProps;
};

export const ButtonNext = ({ title, props }: ButtonNextProps) => {
  return (
    <>
      <Button
        title={title}
        buttonProps={{
          id: BUTTON_NEXT_INPUT,
          type: 'submit',
        }}
        {...props}
      />
    </>
  );
};
