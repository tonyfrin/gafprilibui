import { EntityAttributes } from '../entity';
import { UseGafpriAttributesPaymentReturn } from '../payment';
type State = {
    supplierId: number;
    supplierIdValid: boolean;
    expensesTypeId: number;
    expensesTypeIdValid: boolean;
    invoice: string;
    projectsPostsId: number;
    projectsPostsIdValid: boolean;
    note: string;
    subTotal: string;
    subTotalTax: string;
    total: string;
};
type Actions = {
    infoReset: () => void;
    validationSupplierId: (value: number) => boolean;
    validationExpensesTypeId: (value: number) => boolean;
    validationProjectsPostsId: (value: number) => boolean;
    changeSupplierId: (value: number) => void;
    changeExpensesTypeId: (value: number) => void;
    changeProjectsPostsId: (value: number) => void;
    changeNote: (value: string) => void;
    changeInvoice: (value: string) => void;
    changeSubTotal: (value: string) => void;
    changeSubTotalTax: (value: string) => void;
    changeTotal: () => void;
    setEntity: (value: EntityAttributes | null) => void;
};
export type UseGafpriAttributesExpensesReturn = {
    states: State;
    actions: Actions;
    usePayment: UseGafpriAttributesPaymentReturn;
};
export declare function useGafpriAttributesExpenses(): UseGafpriAttributesExpensesReturn;
export {};
