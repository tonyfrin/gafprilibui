type State = {
    isFetching: boolean;
    isCash: boolean;
    isTransfer: boolean;
};
type Actions = {
    onFetching: () => void;
    onCash: () => void;
    onTransfer: () => void;
};
export type UseGafpriPagesPaymentMethodsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesPaymentMethods(): UseGafpriPagesPaymentMethodsReturn;
export {};
