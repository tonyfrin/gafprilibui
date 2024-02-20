import React from 'react';
import { UseGafpriProductsReturn, UseGafpriOrderReturn, UseGafpriEntityReturn, SiteOptions } from '../../states';
import { HeaderMenuItem, MainMenuItems, UseGafpriPagesSalesModuleReturn } from '../../Abstract';
export type OrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type OrderProps = {
    use: UseGafpriOrderReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesMain: UseGafpriPagesSalesModuleReturn;
    sitesOptions: SiteOptions;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    useProducts: UseGafpriProductsReturn;
    menuEntity: MainMenuItems[];
};
export declare const Order: ({ use, useEntity, containerStyles, containerProps, itemsMenu, usePagesMain, sitesOptions, useProducts, menuEntity, }: OrderProps) => JSX.Element;