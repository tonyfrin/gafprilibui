/// <reference types="react" />
import type { SiteOptions } from '../../states';
import { UseGafpriBudgetReturn } from '../../states';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type BudgetSearchPrintProps = {
    useBudget: UseGafpriBudgetReturn;
    siteOptions: SiteOptions;
    errorProps?: ErrorProps;
    listProps?: ListProps;
    logoPdf: string;
};
export type BudgetSearchPrintExtended = {
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const BudgetSearchPrint: ({ useBudget, siteOptions, errorProps, listProps, logoPdf, }: BudgetSearchPrintProps) => JSX.Element;
