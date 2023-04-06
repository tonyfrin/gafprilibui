/// <reference types="react" />
export type ContainerStyles = {
    width?: string;
    margin?: string | number;
};
type ConainerInput = {
    styles?: ContainerStyles | undefined;
    containerClass?: string;
    children: JSX.Element;
};
export declare const ContainerInput: ({ styles, containerClass, children, }: ConainerInput) => JSX.Element;
type ConainerForm = {
    styles?: ContainerStyles | undefined;
    containerClass?: string;
    children: JSX.Element;
};
export declare const ContainerForm: ({ styles, containerClass, children, }: ConainerForm) => JSX.Element;
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
};
type ContainerButton = {
    styles?: ContainerButtonStyle | undefined;
    Class?: string;
    children: JSX.Element;
};
export declare const ContainerButton: ({ styles, Class, children, }: ContainerButton) => JSX.Element;
export {};
