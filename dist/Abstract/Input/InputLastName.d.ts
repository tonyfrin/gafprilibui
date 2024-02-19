/// <reference types="react" />
import { InputProps } from './Input';
export type InputLastNameProps = {
    changeLastName: (LastName: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputLastName: ({ changeLastName, props, inputId, }: InputLastNameProps) => JSX.Element;
