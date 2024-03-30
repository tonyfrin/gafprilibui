import React from 'react';
import type { SiteOptions } from '../../states';
import { UseGafpriOrderReturnReturn } from '../../states';
export type OrderReturnFormInfoHeaderProps = {
    useOrderReturn: UseGafpriOrderReturnReturn;
    siteOptions: SiteOptions;
};
export declare const OrderReturnFormInfoHeader: ({ useOrderReturn, siteOptions, }: OrderReturnFormInfoHeaderProps) => React.JSX.Element;
