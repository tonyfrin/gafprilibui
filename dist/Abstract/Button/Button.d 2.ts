import { ButtonHTMLAttributes } from 'react';
type Media = {
    fontSize?: string | number;
};
export type ButtonStyle = {
    backgroundColor?: string;
    fontSize?: string;
    borderRadius?: string;
    padding?: string;
    userSelect?: string;
    textAlign?: string;
    textDecoration?: string;
    verticalAlign?: string;
    display?: string;
    fontWeight?: string;
    lineHeight?: string;
    color?: string;
    cursor?: string;
    boxShadow?: string;
    media800Style?: Media | undefined;
    media750Style?: Media | undefined;
    media400Style?: Media | undefined;
    media300Style?: Media | undefined;
};
type Button = {
    styles?: ButtonStyle | undefined;
    Class?: string;
    title: string;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement> | undefined;
};
export declare const Button: ({ styles, buttonProps, Class, title, }: Button) => JSX.Element;
export {};
