/// <reference types="react" />
import { UseGafpriOrderReturn, SiteOptions, UseGafpriProductsReturn } from '../../states';
export type SalesProps = {
    useOrder: UseGafpriOrderReturn;
    sitesOptions: SiteOptions;
    useProducts: UseGafpriProductsReturn;
};
export declare const Sales: ({ useOrder, sitesOptions, useProducts }: SalesProps) => JSX.Element;
