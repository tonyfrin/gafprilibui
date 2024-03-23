import React from 'react';
import { SingleValue } from 'react-select';
import type { UseGafpriBankTypeReturn, SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { UseGafpriAttributesPaymentTransferBankReturn } from '../states/payment';
import { SelectDefault } from '../../helpers';
type CurrentPaymentInfo = {
    paymentMethod: string;
    changeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeBankTypePostsId: (e: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    bankTypePostsIdOptions: SelectDefault[];
    bankTypePostsIdDefault: SelectDefault;
    bankTypePostsId: number;
    changeNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
    add: () => void;
    infoReset: () => void;
    returnInit: () => void;
    buttonNextId: string;
};
export type ElectronicFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentTransferBankReturn;
    useBankType: UseGafpriBankTypeReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare const ElectronicForm: ({ useError, siteOptions, currentPaymentInfo, usePayment, useBankType, useCurrencies, }: ElectronicFormProps) => JSX.Element;
export {};
