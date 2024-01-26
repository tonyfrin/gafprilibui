import React from 'react';
import { WEB_SITE_INPUT } from '../../Constans';
import { Input, InputProps } from './Input';

export type InputWebSiteProps = {
  changeWebSite: (email: string) => void;
  props?: InputProps;
};

export const InputWebSite = ({ changeWebSite, props }: InputWebSiteProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Web Site',
          type: 'text',
          id: WEB_SITE_INPUT,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeWebSite(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};