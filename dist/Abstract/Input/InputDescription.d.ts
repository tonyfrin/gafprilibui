/// <reference types="react" />
import { InputProps } from './Input';
export type InputDescriptionProps = {
    changeDescription: (description: string) => void;
    props?: InputProps;
};
export declare const InputDescription: ({ changeDescription, props, }: InputDescriptionProps) => JSX.Element;
