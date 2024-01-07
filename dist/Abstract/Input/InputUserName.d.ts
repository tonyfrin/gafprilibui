/// <reference types="react" />
import { InputProps } from './Input';
export type InputUserNameProps = {
    changeUserName: (userName: string) => void;
    props?: InputProps;
};
export declare const InputUserName: ({ changeUserName, props, }: InputUserNameProps) => JSX.Element;
