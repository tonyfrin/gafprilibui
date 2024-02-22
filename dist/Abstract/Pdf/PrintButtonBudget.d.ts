import React from 'react';
import { UseGafpriBudgetReturn, SiteOptions } from '../../states';
export type PrintButtonBudgetProps = {
    id: number;
    useBudget: UseGafpriBudgetReturn;
    siteOptions: SiteOptions;
    logoPdf: string;
};
export declare const PrintButtonBudget: ({ id, useBudget, siteOptions, logoPdf, }: PrintButtonBudgetProps) => React.JSX.Element;
