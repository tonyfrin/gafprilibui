import { PaymentMethodsAttributes, UseGafpriAttributesPaymentMethodsReturn } from './useGafpriAttributesPaymentMethods';
import { CashTransactionsAttributes, UseGafpriAttributesCashTransactionsReturn } from '../cashRegister';
export type GeneralPaymentMethodsAttributes = {
    paymentMethod: PaymentMethodsAttributes;
    cashTransactions?: CashTransactionsAttributes;
};
type State = {
    arrayPaymentMethod: GeneralPaymentMethodsAttributes[];
    totalPaymentMethod: number;
    totalMethods: number;
};
type Actions = {
    infoReset: () => void;
    addCashTransaction: () => void;
    emptyPaymentMethodArray: () => void;
    deletePaymentMethod: (index: number) => void;
};
export type UseGafpriAttributesGeneralPaymentMethodsReturn = {
    states: State;
    actions: Actions;
    usePaymentMethods: UseGafpriAttributesPaymentMethodsReturn;
    useCashTransactions: UseGafpriAttributesCashTransactionsReturn;
};
export declare function useGafpriAttributesGeneralPaymentMethods(): UseGafpriAttributesGeneralPaymentMethodsReturn;
export {};
