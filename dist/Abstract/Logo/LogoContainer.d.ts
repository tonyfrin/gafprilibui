import React from 'react';
import { ImgHTMLAttributes } from 'react';
type Style = {
    sectionClass?: string;
    divClass?: string;
    imgClass?: string;
    image: string;
};
export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & Style;
export declare const LogoContainer: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & Style & React.RefAttributes<HTMLImageElement>>;
export {};
