/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCityProps = {
    changeCity: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectCity: ({ changeCity, props }: SelectCityProps) => JSX.Element;
