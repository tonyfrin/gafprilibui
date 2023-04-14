/// <reference types="react" />
declare const Title1Styles: (styles: Title1Styles) => string;
type TitleMedia = {
    fontSize?: string | number;
};
type Title1Styles = {
    fontFamily?: string;
    textAlign?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    marginBottom?: string | number;
    marginTop?: string | number;
    color?: string;
    lineHeight?: string;
    media750Style?: TitleMedia | undefined;
    media400Style?: TitleMedia | undefined;
    media300Style?: TitleMedia | undefined;
};
type Title1 = {
    styles?: Title1Styles | undefined;
    title: string;
};
export declare const Title1: ({ styles, title }: Title1) => JSX.Element;
declare const Title2Styles: (styles: Title2Styles) => string;
type Title2Styles = {
    fontFamily?: string;
    fontSize?: string | number;
    textTransform?: string;
    fontWeight?: string | number;
    margin?: string | number;
    color?: string;
    lineHeight?: string;
    media750Style?: TitleMedia | undefined;
    media400Style?: TitleMedia | undefined;
    media300Style?: TitleMedia | undefined;
};
type Title2 = {
    styles?: Title2Styles | undefined;
    title: string;
};
export declare const Title2: ({ styles, title }: Title2) => JSX.Element;
export type GloboTitleStyle = {
    fontWeight?: string;
    margin?: string;
    fontSize?: string;
};
type GloboTitle = {
    styles?: GloboTitleStyle | undefined;
    title: string;
    globoTitleClass?: string | undefined;
};
export declare const GloboTitle: ({ styles, title, globoTitleClass, }: GloboTitle) => JSX.Element;
export {};
