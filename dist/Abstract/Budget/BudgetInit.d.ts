import React from 'react';
import { UseGafpriBudgetReturn, UseGafpriEntityReturn } from '../../states';
import { UseGafpriPagesSalesModuleReturn } from '../states';
export type BudgetInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type BudgetInitProps = {
    containerStyles?: BudgetInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useBudget: UseGafpriBudgetReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesMain: UseGafpriPagesSalesModuleReturn;
};
export declare const BudgetInit: ({ containerStyles, containerProps, useBudget, useEntity, usePagesMain, }: BudgetInitProps) => JSX.Element;
