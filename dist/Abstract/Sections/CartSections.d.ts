import React from 'react';
import { SiteOptions, UseGafpriOrderReturn, UseGafpriProductsReturn } from '../../states';
export type CartSectionsStylesContainerProps = {
    width?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    margin?: string;
    custom?: string;
};
export type CartSectionsStylesContentItemsProps = {
    display?: string;
    flexDirection?: string;
    textAlign?: string;
    custom?: string;
};
export type CartSectionsStylesContentOptionsProps = {
    display?: string;
    flexDirection?: string;
    custom?: string;
};
export type CartSectionsProps = {
    containerStyles?: CartSectionsStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentItemsStyles?: CartSectionsStylesContentItemsProps;
    contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
    sitesOptions: SiteOptions;
    useOrder: UseGafpriOrderReturn;
    useProducts: UseGafpriProductsReturn;
    contentOptionsStyles?: CartSectionsStylesContentOptionsProps;
    contentOptionsProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const CartSections: ({ containerStyles, containerProps, contentItemsStyles, contentItemsProps, contentOptionsStyles, contentOptionsProps, sitesOptions, useOrder, useProducts, }: CartSectionsProps) => JSX.Element;
