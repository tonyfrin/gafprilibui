import React from 'react';
import { UseGafpriProductsReturn, UseGafpriBudgetReturn, UseGafpriEntityReturn, SiteOptions } from '../../states';
import { HeaderMenuItem, MainMenuItems, UseGafpriPagesSalesModuleReturn } from '../../Abstract';
export type BudgetStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type BudgetProps = {
    use: UseGafpriBudgetReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesMain: UseGafpriPagesSalesModuleReturn;
    sitesOptions: SiteOptions;
    menu: MainMenuItems[];
    containerStyles?: BudgetStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    useProducts: UseGafpriProductsReturn;
    menuEntity: MainMenuItems[];
};
export declare const Budget: ({ use, useEntity, containerStyles, containerProps, itemsMenu, usePagesMain, sitesOptions, menu, useProducts, menuEntity, }: BudgetProps) => JSX.Element;
