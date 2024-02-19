/// <reference types="react" />
import type { SiteOptions } from '../../states';
import { UseGafpriOrderReturn } from '../../states';
export type OrderFormInfoHeaderProps = {
    useOrder: UseGafpriOrderReturn;
    siteOptions: SiteOptions;
};
export declare const OrderFormInfoHeader: ({ useOrder, siteOptions, }: OrderFormInfoHeaderProps) => JSX.Element;
