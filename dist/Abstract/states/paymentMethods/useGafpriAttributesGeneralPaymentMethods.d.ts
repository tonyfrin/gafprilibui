import { SingleValue } from 'react-select';
import { PaymentMethodsAttributes, UseGafpriAttributesPaymentMethodsReturn } from './useGafpriAttributesPaymentMethods';
import { CashTransactionsAttributes, UseGafpriAttributesCashTransactionsReturn } from '../cashRegister';
import { UseCurrenciesReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
export type GeneralPaymentMethodsAttributes = {
    paymentMethod: PaymentMethodsAttributes;
    cashTransactions?: CashTransactionsAttributes;
};
type State = {
    arrayPaymentMethod: GeneralPaymentMethodsAttributes[];
    totalPaymentMethod: number;
    totalMethods: number;
    currenciesId: number;
    currenciesIdValid: boolean;
    currenciesIdDefault: SelectDefault;
    currenciesIdOptions: SelectDefault[];
};
type Actions = {
    infoReset: () => void;
    addCashTransaction: (cashRegisterTypePostsId: number, cashRegisterPostsId: number, type: 'deposit' | 'debit') => void;
    emptyPaymentMethodArray: () => void;
    deletePaymentMethod: (index: number) => void;
    validationCurrenciesId: (value: string) => boolean;
    changeCashCurrenciesId: (value: SingleValue<{
        label: string;
        value: string;
    }>) => void;
};
export type UseGafpriAttributesGeneralPaymentMethodsReturn = {
    states: State;
    actions: Actions;
    usePaymentMethods: UseGafpriAttributesPaymentMethodsReturn;
    useCashTransactions: UseGafpriAttributesCashTransactionsReturn;
};
export type UseGafpriAttributesGeneralPaymentMethodsProps = {
    currencies: UseCurrenciesReturn;
};
export declare function useGafpriAttributesGeneralPaymentMethods({ currencies, }: UseGafpriAttributesGeneralPaymentMethodsProps): UseGafpriAttributesGeneralPaymentMethodsReturn;
export {};
