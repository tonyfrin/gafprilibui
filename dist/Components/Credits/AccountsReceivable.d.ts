import React, { KeyboardEvent } from 'react';
import { UseGafpriProductsReturn, UseGafpriAccountsReceivableReturn, UseGafpriEntityReturn, SiteOptions } from '../../states';
import { HeaderMenuItem, MainMenuItems, UseGafpriPagesSalesModuleReturn } from '../../Abstract';
export type AccountsReceivableStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type AccountsReceivableProps = {
    use: UseGafpriAccountsReceivableReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesMain: UseGafpriPagesSalesModuleReturn;
    sitesOptions: SiteOptions;
    containerStyles?: AccountsReceivableStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    useProducts: UseGafpriProductsReturn;
    menuEntity: MainMenuItems[];
    uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
    uploadOrderOnlyProducts: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const AccountsReceivable: ({ use, useEntity, containerStyles, containerProps, itemsMenu, usePagesMain, sitesOptions, useProducts, menuEntity, uploadOrder, uploadOrderOnlyProducts, }: AccountsReceivableProps) => JSX.Element;
