import { SingleValue } from 'react-select';
import { PaymentMethodsAttributes, UseGafpriAttributesPaymentMethodsReturn } from './useGafpriAttributesPaymentMethods';
import { CashTransactionsAttributes, UseGafpriAttributesCashTransactionsReturn } from '../cashRegister';
import { UseCurrenciesReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
export type GeneralPaymentMethodsAttributes = {
    paymentMethods: PaymentMethodsAttributes;
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
    addCashTransaction: () => void;
    emptyPaymentMethodArray: () => void;
    deletePaymentMethod: (index: number) => void;
    validationCurrenciesId: (value: string) => boolean;
    changeCashCurrenciesId: (value: SingleValue<{
        label: string;
        value: string;
    }>) => void;
    addTransferCashRegister: (currentCashRegisterPostsId: number, currentCashRegisterTypePostsId: number, cashRegisterPostsId: number, cashRegisterTypePostsId: number) => void;
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
