/// <reference types="react" />
import { UseGafpriBudgetReturn, SiteOptions } from '../../states';
export type BudgetPrintProps = {
    useBudget: UseGafpriBudgetReturn;
    sitesOptions: SiteOptions;
};
export declare const BudgetPrint: ({ useBudget, sitesOptions }: BudgetPrintProps) => JSX.Element;
