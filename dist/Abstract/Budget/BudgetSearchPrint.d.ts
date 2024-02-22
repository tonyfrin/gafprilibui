/// <reference types="react" />
import type { SiteOptions } from '../../states';
import { UseGafpriBudgetReturn } from '../../states';
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type BudgetSearchPrintProps = {
    useBudget: UseGafpriBudgetReturn;
    siteOptions: SiteOptions;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
    logoPdf: string;
};
export type BudgetSearchPrintExtended = {
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const BudgetSearchPrint: ({ useBudget, siteOptions, optionButtonContainerStyle, updateButtonProps, errorProps, listProps, logoPdf, }: BudgetSearchPrintProps) => JSX.Element;
