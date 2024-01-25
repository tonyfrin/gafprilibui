/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCurrenciesDecimalNumbersProps = {
    changeCurrenciesDecimalNumbers: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectCurrenciesDecimalNumbers: ({ changeCurrenciesDecimalNumbers, props, }: SelectCurrenciesDecimalNumbersProps) => JSX.Element;
