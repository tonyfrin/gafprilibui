/// <reference types="react" />
type Media = {
    padding: string | number | undefined;
};
type MainStyle = {
    display?: string;
    justifyContent?: string;
    padding?: string;
    media600Style?: Media | undefined;
    media300Style?: Media | undefined;
};
type DivStyle = {
    animation?: string | undefined;
    border?: string | undefined;
    borderTop?: string | undefined;
    borderRadius?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
};
type LoadingStyle = {
    mainStyles?: MainStyle | undefined;
    classMain?: string;
    classDiv?: string;
    divStyle?: DivStyle;
};
export declare const Loading: ({ mainStyles, classMain, classDiv, divStyle, }: LoadingStyle) => JSX.Element;
export {};
