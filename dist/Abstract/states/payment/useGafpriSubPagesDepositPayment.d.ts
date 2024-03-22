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
    onCredits: () => void;
    onPayment: () => void;
    openModalPage: () => void;
    closeModalPage: () => void;
};
export type UseGafpriSubPagesDepositPaymentReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriSubPagesDepositPayment(): UseGafpriSubPagesDepositPaymentReturn;
export {};
