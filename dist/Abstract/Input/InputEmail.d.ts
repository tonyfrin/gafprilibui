/// <reference types="react" />
import { InputProps } from './Input';
export type InputEmailProps = {
    changeEmail: (email: string) => void;
    props?: InputProps;
};
export declare const InputEmail: ({ changeEmail, props }: InputEmailProps) => JSX.Element;
