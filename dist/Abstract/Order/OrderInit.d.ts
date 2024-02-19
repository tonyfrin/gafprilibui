import React from 'react';
import { UseGafpriOrderReturn, UseGafpriEntityReturn } from '../../states';
import { UseGafpriPagesSalesModuleReturn } from '../states';
export type OrderInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type OrderInitProps = {
    containerStyles?: OrderInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useOrder: UseGafpriOrderReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesMain: UseGafpriPagesSalesModuleReturn;
};
export declare const OrderInit: ({ containerStyles, containerProps, useOrder, useEntity, usePagesMain, }: OrderInitProps) => JSX.Element;
