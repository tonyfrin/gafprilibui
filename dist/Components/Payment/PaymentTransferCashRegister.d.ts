import React from 'react';
import { UseGafpriPaymentTransferCashRegisterReturn, SiteOptions, UseCurrenciesReturn } from '../../states';
export type PaymentTransferCashRegisterProps = {
    use: UseGafpriPaymentTransferCashRegisterReturn;
    useCurrencies: UseCurrenciesReturn;
    sitesOptions: SiteOptions;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const PaymentTransferCashRegister: ({ use, useCurrencies, containerProps, sitesOptions, }: PaymentTransferCashRegisterProps) => JSX.Element;
