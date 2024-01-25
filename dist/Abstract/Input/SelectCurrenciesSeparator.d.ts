/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCurrenciesSeparatorProps = {
    changeCurrenciesSeparator: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectCurrenciesSeparator: ({ changeCurrenciesSeparator, props, }: SelectCurrenciesSeparatorProps) => JSX.Element;
