import type { UseErrorReturn, UseGafpriOrderReturn } from '../../../states';
import type { UseGafpriPagesPaymentReturn } from './useGafpriPagesPayment';
import type { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
export type UseGafpriApiPaymentReturn = {
    actions: {
        addOrderPayment: () => void;
    };
};
export type UseGafpriApiPaymentProps = {
    useOrder: UseGafpriOrderReturn;
    usePages: UseGafpriPagesPaymentReturn;
    useAttributes: UseGafpriAttributesPaymentReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiPayment: ({ usePages, useOrder, useAttributes, useError, token, }: UseGafpriApiPaymentProps) => UseGafpriApiPaymentReturn;
