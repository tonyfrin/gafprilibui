/// <reference types="react" />
import { InputProps } from './Input';
export type InputPasswordProps = {
    changePassword: (password: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputPassword: ({ changePassword, props, inputId, }: InputPasswordProps) => JSX.Element;
