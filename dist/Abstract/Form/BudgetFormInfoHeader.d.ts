/// <reference types="react" />
import type { SiteOptions } from '../../states';
import { UseGafpriBudgetReturn } from '../../states';
export type BudgetFormInfoHeaderProps = {
    useBudget: UseGafpriBudgetReturn;
    siteOptions: SiteOptions;
};
export declare const BudgetFormInfoHeader: ({ useBudget, siteOptions, }: BudgetFormInfoHeaderProps) => JSX.Element;
