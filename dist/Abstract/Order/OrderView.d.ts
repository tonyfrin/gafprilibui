import React from 'react';
import { UseGafpriOrderReturn, SiteOptions } from '../../states';
export type OrderViewProps = {
    useOrder: UseGafpriOrderReturn;
    sitesOptions: SiteOptions;
    logoPdf: string;
    returnFunction: () => void;
    images?: {
        zelle: string;
        pagoMovil: string;
        transfer: string;
        cash: string;
    };
};
export declare const OrderView: ({ useOrder, sitesOptions, logoPdf, returnFunction, images, }: OrderViewProps) => React.JSX.Element | null;
