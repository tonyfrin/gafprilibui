/// <reference types="react" />
import { InputProps } from './Input';
export type InputDescriptionProps = {
    changeDescription: (description: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputDescription: ({ changeDescription, props, inputId, }: InputDescriptionProps) => JSX.Element;
