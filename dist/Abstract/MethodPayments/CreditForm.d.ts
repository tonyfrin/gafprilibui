import type { SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
type CurrentPaymentInfo = {
    entityName: string;
    difference: number;
    amount: number;
    add: () => void;
    infoReset: () => void;
    returnInit: () => void;
    buttonNextId: string;
};
export type CreditFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare const CreditForm: ({ useError, siteOptions, currentPaymentInfo, usePayment, useCurrencies, }: CreditFormProps) => JSX.Element;
export {};
