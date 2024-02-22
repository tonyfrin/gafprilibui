import React from 'react';
import { UseGafpriBudgetReturn, SiteOptions, UseGafpriProductsReturn } from '../../states';
export type BudgetModuleProps = {
    useBudget: UseGafpriBudgetReturn;
    sitesOptions: SiteOptions;
    useProducts: UseGafpriProductsReturn;
};
export declare const BudgetModule: ({ useBudget, sitesOptions, useProducts, }: BudgetModuleProps) => React.JSX.Element;
