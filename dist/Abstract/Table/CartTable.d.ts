/// <reference types="react" />
import { SiteOptions, UseGafpriOrderReturn } from '../../states';
export type CartListProps = {
    siteOptions: SiteOptions;
    useOrder: UseGafpriOrderReturn;
};
export declare const CartTable: ({ siteOptions, useOrder }: CartListProps) => JSX.Element;
