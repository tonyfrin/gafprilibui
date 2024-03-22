import React from 'react';
import { UseGafpriOrderReturn, SiteOptions } from '../../states';
export type OrderViewProps = {
    useOrder: UseGafpriOrderReturn;
    sitesOptions: SiteOptions;
    logoPdf: string;
    returnFunction: () => void;
};
export declare const OrderView: ({ useOrder, sitesOptions, logoPdf, returnFunction, }: OrderViewProps) => React.JSX.Element;
