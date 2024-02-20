/// <reference types="react" />
import { SiteOptions, UseGafpriBudgetReturn } from '../../states';
export type BudgetPrintTableProps = {
    siteOptions: SiteOptions;
    useBudget: UseGafpriBudgetReturn;
};
export declare const BudgetPrintTable: ({ siteOptions, useBudget, }: BudgetPrintTableProps) => JSX.Element;
