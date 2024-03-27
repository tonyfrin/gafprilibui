import { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
import { UseGafpriSubPagesDepositPaymentReturn } from './useGafpriSubPagesDepositPayment';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isDeposit: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onDeposit: () => void;
};
export type UseGafpriPagesPaymentReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPagesPaymentProps = {
    attributes: UseGafpriAttributesPaymentReturn;
    subPagesDeposit: UseGafpriSubPagesDepositPaymentReturn;
};
export declare function useGafpriPagesPayment({ attributes, subPagesDeposit, }: UseGafpriPagesPaymentProps): UseGafpriPagesPaymentReturn;
export {};
