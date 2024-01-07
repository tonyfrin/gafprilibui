/// <reference types="react" />
import { InputProps } from './Input';
export type InputZipCodeProps = {
    changeZipCode: (zipCode: string) => void;
    props?: InputProps;
};
export declare const InputZipCode: ({ changeZipCode, props }: InputZipCodeProps) => JSX.Element;
