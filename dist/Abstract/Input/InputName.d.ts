/// <reference types="react" />
import { InputProps } from './Input';
export type InputNameProps = {
    changeName: (name: string) => void;
    props?: InputProps;
};
export declare const InputName: ({ changeName, props }: InputNameProps) => JSX.Element;
