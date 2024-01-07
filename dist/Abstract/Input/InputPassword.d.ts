/// <reference types="react" />
import { InputProps } from './Input';
export type InputPasswordProps = {
    changePassword: (password: string) => void;
    props?: InputProps;
};
export declare const InputPassword: ({ changePassword, props, }: InputPasswordProps) => JSX.Element;
