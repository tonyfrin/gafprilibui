import React from 'react';
import type { SingleValue } from 'react-select';
import { TYPE_DOCUMENT_ID_INDEX_INPUT } from '../../Constans';
import { GsSelect, GsSelectProps } from './Input';

export type SelectDocumentIdIndexProps = {
  changeIndex: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
};

export const SelectDocumentIdIndex = ({
  changeIndex,
  props,
}: SelectDocumentIdIndexProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={TYPE_DOCUMENT_ID_INDEX_INPUT}
        onChange={changeIndex}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
      />
    </>
  );
};
