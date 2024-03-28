import type { UseErrorReturn, UseGafpriAccountsReceivableReturn, UseGafpriOrderReturn } from '../../../states';
import type { UseGafpriPagesPaymentReturn } from './useGafpriPagesPayment';
import type { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
export type UseGafpriApiPaymentReturn = {
    actions: {
        addOrderPayment: () => void;
        addCreditPayment: () => void;
    };
};
export type UseGafpriApiPaymentProps = {
    useOrder: UseGafpriOrderReturn;
    usePages: UseGafpriPagesPaymentReturn;
    useCredit: UseGafpriAccountsReceivableReturn;
    useAttributes: UseGafpriAttributesPaymentReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiPayment: ({ usePages, useOrder, useCredit, useAttributes, useError, token, }: UseGafpriApiPaymentProps) => UseGafpriApiPaymentReturn;
