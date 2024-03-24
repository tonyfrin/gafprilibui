import { GeneralPaymentMethodsAttributes, UseGafpriAttributesGeneralPaymentMethodsReturn } from '../paymentMethods';
import { UseCurrenciesReturn, UseGafpriBankTypeReturn } from '../../../states';
export type PaymentAttributes = {
    total: string;
    note?: string;
    type: string;
    paymentMethod: GeneralPaymentMethodsAttributes[];
};
type State = {
    total: string;
    type: string;
    note: string;
    difference: number;
};
type Actions = {
    infoReset: () => void;
    setType: (value: string) => void;
    setTotal: (value: string) => void;
    setNote: (value: string) => void;
    validationButtonNextPaymentCash: () => boolean;
    setDifference: (value: number) => void;
};
export type UseGafpriAttributesPaymentReturn = {
    states: State;
    actions: Actions;
    useGeneralPaymentMethods: UseGafpriAttributesGeneralPaymentMethodsReturn;
};
export type UseGafpriAttributesPaymentProps = {
    currencies?: UseCurrenciesReturn;
    useBankType?: UseGafpriBankTypeReturn;
};
export declare function useGafpriAttributesPayment({ currencies, useBankType, }: UseGafpriAttributesPaymentProps): UseGafpriAttributesPaymentReturn;
export {};
