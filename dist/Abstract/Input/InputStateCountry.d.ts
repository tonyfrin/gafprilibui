/// <reference types="react" />
import { SingleValue } from 'react-select';
import { InputProps } from './Input';
export type InputStateCountryProps = {
    changeStateCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props?: InputProps;
};
export declare const InputStateCountry: ({ changeStateCountry, props, }: InputStateCountryProps) => JSX.Element;
