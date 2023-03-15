import React from 'react';
type style = {
    headerClass?: string;
};
declare const LoginHeader: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & {
    sectionClass?: string | undefined;
    divClass?: string | undefined;
    imgClass?: string | undefined;
    image: string;
} & style & React.RefAttributes<HTMLImageElement>>;
export default LoginHeader;
