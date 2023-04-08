/// <reference types="react" />
type FooterStyle = {
    backgroundColor?: string;
    color?: string;
    position?: 'fixed' | 'absolute' | 'relative' | 'static';
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    zIndex?: number;
};
type Footer = {
    footerClass?: string;
    footerDivClass?: string;
    footerPClass?: string;
    styles?: FooterStyle | undefined;
    isLogin: boolean;
    year?: string | undefined;
    onLogOut?: () => void;
};
export declare const MainFooter: ({ footerClass, footerDivClass, footerPClass, styles, isLogin, year, onLogOut, }: Footer) => JSX.Element;
export {};
