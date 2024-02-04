/// <reference types="react" />
export type ContainerStyles = {
    width?: string;
    margin?: string | number;
    custom?: string;
};
type ConainerInput = {
    styles?: ContainerStyles | undefined;
    containerClass?: string;
    children: JSX.Element;
};
export declare const ContainerInput: ({ styles, containerClass, children, }: ConainerInput) => JSX.Element;
export type ContainerFormProps = {
    styles?: ContainerStyles | undefined;
    containerClass?: string;
    children: JSX.Element;
};
export declare const ContainerForm: ({ styles, containerClass, children, }: ContainerFormProps) => JSX.Element;
export type ContainerGloboStyle = {
    width?: string;
};
type ContainerGlobo = {
    styles?: ContainerGloboStyle | undefined;
    containerClass?: string;
    children: JSX.Element;
};
export declare const ContainerGlobo: ({ styles, containerClass, children, }: ContainerGlobo) => JSX.Element;
export type ContainerButtonStyle = {
    width?: string;
    display?: string;
    justifyContent?: string;
    transition?: string;
};
export type ContainerButtonProps = {
    styles?: ContainerButtonStyle | undefined;
    Class?: string;
    children: JSX.Element;
};
export type ContainerButtonPropsExtended = {
    styles?: ContainerButtonStyle | undefined;
    Class?: string;
};
export declare const ContainerButton: ({ styles, Class, children, }: ContainerButtonProps) => JSX.Element;
export {};
