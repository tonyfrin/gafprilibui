import { InputHTMLAttributes } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import type { ContainerStyles } from '../Containers';
export type OnChange = (newValue: SingleValue<{
    value: string;
    label: string;
}>, actionMeta: ActionMeta<{
    value: string;
    label: string;
}>) => void | undefined;
declare const InputStyles: (styles: InputStyle) => string;
type Media = {
    fontSize?: string | number;
};
export type InputStyle = {
    width?: string | number;
    border?: string;
    padding?: string | number;
    textAlign?: string;
    outline?: string | number;
    borderRadius?: string;
    backgroundColor?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    color?: string;
    media750Style?: Media | undefined;
    media400Style?: Media | undefined;
    media300Style?: Media | undefined;
};
type InputStyles = {
    styles?: InputStyle | undefined;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    inputClass?: string | undefined;
    containerStyles?: ContainerStyles | undefined;
    containerClass?: string | undefined;
};
export declare const Input: ({ styles, inputClass, inputProps, containerStyles, containerClass, }: InputStyles) => JSX.Element;
type media = {
    width?: string;
    fontSize?: string;
};
export type SelectStyle = {
    width?: string | number;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    fontFamily?: string;
    media600Style?: media | undefined;
    media400Style?: media | undefined;
};
export type GsSelectProps = {
    styles?: SelectStyle;
    Class?: string;
    options: {
        value: string;
        label: string;
    }[];
    id?: string | undefined;
    onChange?: OnChange;
    placeholder?: string | undefined;
    containerStyles?: ContainerStyles | undefined;
    containerClass?: string | undefined;
    defaultValue?: {
        value: string;
        label: string;
    };
};
export declare const GsSelect: ({ styles, Class, options, id, onChange, placeholder, containerStyles, containerClass, defaultValue, }: GsSelectProps) => JSX.Element;
export {};
