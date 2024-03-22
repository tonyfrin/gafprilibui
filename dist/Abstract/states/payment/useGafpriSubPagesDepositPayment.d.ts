import { UseGafpriOrderReturn } from '../../../states';
type State = {
    isFetching: boolean;
    isOrder: boolean;
    isOrderView: boolean;
    isCredits: boolean;
    isPayment: boolean;
    modalPage: boolean;
};
type Actions = {
    onFetching: () => void;
    onOrder: () => void;
    onOrderView: () => void;
    goOrderView: (id: number) => void;
    onCredits: () => void;
    onPayment: () => void;
    openModalPage: () => void;
    closeModalPage: () => void;
};
export type UseGafpriSubPagesDepositPaymentReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriSubPagesDepositPaymentProps = {
    useOrder: UseGafpriOrderReturn;
};
export declare function useGafpriSubPagesDepositPayment({ useOrder, }: UseGafpriSubPagesDepositPaymentProps): UseGafpriSubPagesDepositPaymentReturn;
export {};
