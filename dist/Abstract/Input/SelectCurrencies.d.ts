/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCurrenciesProps = {
    changeCurrencies: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectCurrencies: ({ changeCurrencies, props, inputId, }: SelectCurrenciesProps) => JSX.Element;
