/// <reference types="react" />
import { SiteOptions, UseGafpriBudgetReturn } from '../../states';
export type CartBudgetTableProps = {
    siteOptions: SiteOptions;
    useBudget: UseGafpriBudgetReturn;
};
export declare const CartBudgetTable: ({ siteOptions, useBudget, }: CartBudgetTableProps) => JSX.Element;
