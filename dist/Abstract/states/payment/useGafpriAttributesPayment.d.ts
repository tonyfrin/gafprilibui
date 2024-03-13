import { GeneralPaymentMethodsAttributes, UseGafpriAttributesGeneralPaymentMethodsReturn } from '../paymentMethods';
import { UseCurrenciesReturn } from '../../../states';
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
};
type Actions = {
    infoReset: () => void;
    setType: (value: string) => void;
    setTotal: (value: string) => void;
    setNote: (value: string) => void;
};
export type UseGafpriAttributesPaymentReturn = {
    states: State;
    actions: Actions;
    useGeneralPaymentMethods: UseGafpriAttributesGeneralPaymentMethodsReturn;
};
export type UseGafpriAttributesPaymentProps = {
    currencies: UseCurrenciesReturn;
};
export declare function useGafpriAttributesPayment({ currencies, }: UseGafpriAttributesPaymentProps): UseGafpriAttributesPaymentReturn;
export {};
