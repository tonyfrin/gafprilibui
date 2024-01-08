/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCountryProps = {
    changeCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectCountry: ({ changeCountry, props }: SelectCountryProps) => JSX.Element;
