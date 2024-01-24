/// <reference types="react" />
import { InputProps } from './Input';
export type InputLastNameProps = {
    changeLastName: (LastName: string) => void;
    props?: InputProps;
};
export declare const InputLastName: ({ changeLastName, props, }: InputLastNameProps) => JSX.Element;
