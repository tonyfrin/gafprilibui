/// <reference types="react" />
import { InputProps } from './Input';
export type InputPhoneProps = {
    changePhone: (phone: string) => void;
    props?: InputProps;
};
export declare const InputPhone: ({ changePhone, props }: InputPhoneProps) => JSX.Element;
