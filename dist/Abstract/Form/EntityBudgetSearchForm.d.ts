import React from 'react';
import type { UseGafpriEntityReturn, UseGafpriBudgetReturn } from '../../states';
import type { UseGafpriPagesSalesModuleReturn } from '../states';
export type EntityBudgetSearchFormStaylesContainerProps = {
    color?: string;
    fontSize?: string;
    paddingBottom?: string;
    custom?: string;
};
export type EntityBudgetSearchFormProps = {
    containerStyles?: EntityBudgetSearchFormStaylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useBudget: UseGafpriBudgetReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesSalesModule: UseGafpriPagesSalesModuleReturn;
};
export declare const EntityBudgetSearchForm: ({ containerStyles, containerProps, useBudget, useEntity, usePagesSalesModule, }: EntityBudgetSearchFormProps) => JSX.Element;
