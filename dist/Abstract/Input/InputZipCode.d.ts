/// <reference types="react" />
import { InputProps } from './Input';
export type InputZipCodeProps = {
    changeZipCode: (zipCode: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputZipCode: ({ changeZipCode, props, inputId, }: InputZipCodeProps) => JSX.Element;
