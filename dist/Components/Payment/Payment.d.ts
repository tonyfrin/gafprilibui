import React from 'react';
import { UseGafpriPaymentReturn, UseGafpriOrderReturn, SiteOptions, UseCurrenciesReturn, UseGafpriBankTypeReturn, UseGafpriAccountsReceivableReturn } from '../../states';
import { HeaderMenuItem, MainMenuItems, PaymentMethodsImages } from '../../Abstract';
export type OrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type PaymentProps = {
    use: UseGafpriPaymentReturn;
    useOrder: UseGafpriOrderReturn;
    useCurrencies: UseCurrenciesReturn;
    useBankType: UseGafpriBankTypeReturn;
    useCredits: UseGafpriAccountsReceivableReturn;
    siteOptions: SiteOptions;
    logoPdf: string;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMain: MainMenuItems[];
    headerMenuItems: HeaderMenuItem[];
    images: PaymentMethodsImages;
};
export declare const Payment: ({ use, useOrder, siteOptions, useCurrencies, useBankType, useCredits, logoPdf, containerStyles, containerProps, itemsMain, headerMenuItems, images, }: PaymentProps) => JSX.Element;
