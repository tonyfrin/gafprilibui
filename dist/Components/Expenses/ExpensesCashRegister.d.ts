import React, { KeyboardEvent } from 'react';
import { UseGafpriExpensesReturn, UseGafpriEntityReturn, SiteOptions } from '../../states';
import { MainMenuItems } from '../../Abstract';
export type ExpensesCashRegisterStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type ExpensesCashRegisterProps = {
    use: UseGafpriExpensesReturn;
    useEntity: UseGafpriEntityReturn;
    returnInitModule: () => void;
    sitesOptions: SiteOptions;
    containerStyles?: ExpensesCashRegisterStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menuEntity: MainMenuItems[];
    uploadOrderOnlyProducts: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const ExpensesCashRegister: ({ use, useEntity, returnInitModule, containerProps, sitesOptions, menuEntity, }: ExpensesCashRegisterProps) => JSX.Element;
