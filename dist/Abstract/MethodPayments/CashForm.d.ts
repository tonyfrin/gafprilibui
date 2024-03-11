import type { SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { SelectDefault } from '../../helpers';
import { SingleValue } from 'react-select';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
export type CurrentPaymentInfo = {
    currencyId: number;
    validationCurrencyId: (value: string) => void;
    currencyIdValid: boolean;
    validationButtonNext: () => void;
    changeCurrencyId: (value: SingleValue<{
        label: string;
        value: string;
    }>) => void;
    currencyIdOptions: SelectDefault[];
    currencyIdDefault: SelectDefault;
    returnInit: () => void;
    buttonNextId: string;
    add: () => void;
};
export type CashFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    useCurrencies: UseCurrenciesReturn;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentReturn;
};
export declare const CashForm: ({ useError, siteOptions, useCurrencies, currentPaymentInfo, usePayment, }: CashFormProps) => JSX.Element;
