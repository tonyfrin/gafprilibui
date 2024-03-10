import { SingleValue } from 'react-select';
import { EntityAttributes } from '../entity';
import { UseGafpriAttributesPaymentReturn } from '../payment';
import { SelectDefault } from '../../../helpers';
import { UseGafpriProjectsReturn, UseGafpriExpensesTypeReturn, UseCurrenciesReturn } from '../../../states';
type State = {
    supplierId: number;
    supplierIdValid: boolean;
    expensesTypeId: string;
    expensesTypeIdValid: boolean;
    expensesTypeIdDefault: SelectDefault;
    expensesTypeIdOptions: SelectDefault[];
    invoice: string;
    projectsPostsId: string;
    projectsPostsIdValid: boolean;
    projectsPostsIdDefault: SelectDefault;
    projectsPostsIdOptions: SelectDefault[];
    note: string;
    currencyId: number;
    currencyIdValid: boolean;
    currencyIdDefault: SelectDefault;
    currencyIdOptions: SelectDefault[];
    subTotal: string;
    subTotalTax: string;
    total: string;
    entity: EntityAttributes | null;
};
type Actions = {
    infoReset: () => void;
    validationSupplierId: (value: number) => boolean;
    validationExpensesTypeId: (value: string) => boolean;
    validationProjectsPostsId: (value: string) => boolean;
    validationCurrencyId: (value: string) => boolean;
    changeSupplierId: (value: number) => void;
    changeExpensesTypeId: (value: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeProjectsPostsId: (value: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeCurrencyId: (value: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeNote: (value: string) => void;
    changeInvoice: (value: string) => void;
    changeSubTotal: (value: string) => void;
    changeSubTotalTax: (value: string) => void;
    changeTotal: () => void;
    setEntity: (value: EntityAttributes | null) => void;
    validationButtonNext: () => void;
    changeCurrencyIdCr: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    addCashTransaction: () => void;
    setCashRegisterTypePostsId: (value: number) => void;
    setCashRegisterPostsId: (value: number) => void;
};
export type UseGafpriAttributesExpensesReturn = {
    states: State;
    actions: Actions;
    usePayment: UseGafpriAttributesPaymentReturn;
};
export type UseGafpriAttributesExpensesProps = {
    projects: UseGafpriProjectsReturn;
    expensesType: UseGafpriExpensesTypeReturn;
    currencies: UseCurrenciesReturn;
};
export declare function useGafpriAttributesExpenses({ projects, expensesType, currencies, }: UseGafpriAttributesExpensesProps): UseGafpriAttributesExpensesReturn;
export {};
