/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectStateCountryProps = {
    changeStateCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectStateCountry: ({ changeStateCountry, props, }: SelectStateCountryProps) => JSX.Element;
