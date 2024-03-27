import { GeneralPaymentMethodsAttributes, PaymentMethodsAttributes, UseGafpriAttributesGeneralPaymentMethodsReturn } from '../paymentMethods';
import { UseCurrenciesReturn, UseGafpriBankTypeReturn } from '../../../states';
import { OrderAttributes } from '../order';
export type PaymentAttributes = {
    total: string;
    note?: string;
    type: string;
    paymentMethod: GeneralPaymentMethodsAttributes[];
    order?: OrderAttributes[];
};
export type PaymentAttributesReturn = {
    total: string;
    note?: string;
    type: string;
    paymentMethod: PaymentMethodsAttributes[];
    order?: OrderAttributes[];
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
    validationButtonNextPaymentCredit: () => boolean;
    validationButtonNextPaymentCreditAdd: () => boolean;
    validationButtonNextPaymentSingle: () => boolean;
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
