/// <reference types="react" />
import { SingleValue } from 'react-select';
import { InputProps } from './Input';
export type InputCityProps = {
    changeCity: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props?: InputProps;
};
export declare const InputCity: ({ changeCity, props }: InputCityProps) => JSX.Element;
