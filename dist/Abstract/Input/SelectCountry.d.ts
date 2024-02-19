/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCountryProps = {
    changeCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectCountry: ({ changeCountry, props, inputId, }: SelectCountryProps) => JSX.Element;
