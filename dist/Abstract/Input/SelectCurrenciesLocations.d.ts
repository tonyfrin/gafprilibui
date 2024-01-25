/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCurrenciesLocationsProps = {
    changeCurrenciesLocations: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectCurrenciesLocations: ({ changeCurrenciesLocations, props, }: SelectCurrenciesLocationsProps) => JSX.Element;
